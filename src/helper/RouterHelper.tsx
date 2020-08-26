import {matchPath} from "react-router"
import {Path, Url, RouteProps, LoaderMethod, PreloadModule, RouteMatch} from "../types/router"

export default class RouterHelper {
    /**
     * Gets window location.
     */
    static getUrl(): string {
        return window.location.pathname + window.location.search        
    }

    /**
     * Creates a url object by the fullpath.
     * 
     * @param fullpath 
     */
    static setUrl(fullpath:string): Url {
        if(fullpath) {
            let [pathname, search] = fullpath.split("#")[0].split("?") 
            if(!search)
                search = ""
            const params = pathname.split("/")
            const querySplit = search.split("&")
            let query = {}
            querySplit.forEach(item => {
                const [key, value] = item.split("=")
                query[key] = value
            })

            return {
                pathname,
                search,
                fullpath,
                params,
                query
            }
        }

        return null
    }

    /**
     * Runs all the matched get methods from loader modules for ssr.
     * 
     * @param routes 
     * @param fullpath
     * @param params
     */
    static runLoaders(routes:RouteProps[], fullpath:string, params:any={}): Promise<LoaderMethod[]> {
        const {pathname, query} = this.setUrl(fullpath)

        return new Promise(async resolve => {
            const loaderMethods = []
            await this.getLoaderMethods(routes, pathname, query, loaderMethods, params)
            for(let i in loaderMethods) {
                await loaderMethods[i]()
            }
            resolve(loaderMethods)
        })
    }

    /**
     * Gets all the matched get methods from loader modules.
     * 
     * @param routes 
     * @param url 
     * @param query
     * @param arr 
     * @param params
     */
    private static getLoaderMethods(routes:RouteProps[], url:string, query:{[key:string]: string}, arr:LoaderMethod[], params:any): Promise<void> {
        return new Promise(async resolve => {
            for(let i in routes) {
                const item = routes[i]
                const match = this.matchPath(url, query, {path:item.path,exact:item.exact,searchKeys:item.searchKeys})
                if(match) {
                    if(item.loaderModule) {
                        const _module = await item.loaderModule.preload()
                        arr.push((_module as any as PreloadModule).default.get.bind({}, match, this.setUrl(url), (_ => {}), (() => {}), params))
                    }
    
                    if(item.children)
                        await this.getLoaderMethods(item.children, url, query, arr, params)
                }
            }

            resolve()
        })
    }

    /**
     * Checks if the given path matches the url.
     * 
     * @param url 
     * @param param1 
     */
    static matchPath(url:string, query:{[key:string]: string}, {path,exact,searchKeys}:{path:Path,exact:boolean,searchKeys:string[]}): RouteMatch {
        const match = matchPath(url, {path:path as any,exact})
        let key = ""

        if(match) {
            var _key = {
                matchKey: match.params,
                searchKey: {}
            }

            if(searchKeys) {
                searchKeys.forEach(item => {
                    if(query[item])
                        _key.searchKey[item] = query[item]
                })
            }

            key = JSON.stringify(_key)
        }
        
        return match ? {...match,key} : null
    }
}