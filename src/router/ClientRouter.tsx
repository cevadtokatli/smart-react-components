import React from "react"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import reducer, {getInitialState} from "./reducer"
import {PreloadModule, CancelCallback} from "../types/router"
import RouterContext from "./RouterContext"
import RouterHelper from "../helper/RouterHelper"
import {setUrl, setNewUrl} from "./actions" 
import {setPercentage, setCancelCallback} from "./actions"
import DOMHelper from "../helper/DOMHelper"
import ProgressBar from "./ProgressBar"

declare global {
    interface History {
        push: (url:string) => void
    }
}

interface Props {
    children: JSX.Element|JSX.Element[]
    params?: any
    progressBarProps?: JSXElementProps
}

const ClientRouter: React.FC<Props> = ({children,params={},progressBarProps=DV.JSX_ELEMENT_PROPS}) => {
    const [state, dispatch] = React.useReducer(reducer, getInitialState())

    const setRouterUrl = React.useCallback((url:string) => {
        const oldUrl = state.url.pathname
        let loaderModules = []
        for(let path in state.loaderModules) {
            let item = state.loaderModules[path]
            let match
            let oldMatch
            if(
                item.module && 
                (match = RouterHelper.matchPath(url, {path,exact:item.exact})) && 
                (
                    !(oldMatch = RouterHelper.matchPath(oldUrl, {path,exact:item.exact})) ||
                    (oldMatch && oldMatch.key != match.key)
                )
            )
                loaderModules.push({module:item.module,match})
        }

        if(loaderModules.length == 0)
            dispatch(setUrl(url))
        else {
            let key = new Date().getTime().toString()
            dispatch(setNewUrl(url, key));

            (async function() {
                try {
                    const setPercentage$ = (payload:number) => dispatch(setPercentage(payload, key))
                    const setCancelCallback$ = (payload:CancelCallback) => dispatch(setCancelCallback(payload, key))
                    setPercentage$(10)
                    for(let i in loaderModules) {
                        const module$ = await loaderModules[i].module.preload()
                        await (module$ as any as PreloadModule).default.get(loaderModules[i].match, RouterHelper.setUrl(url), setPercentage$, setCancelCallback$, params)
                    }
                    setPercentage$(100)
                } catch(ignored) {}
            }())
        }
    }, [state.loaderModules, state.url.pathname])

    const popstate = () => setRouterUrl(RouterHelper.getUrl())

    React.useEffect(() => {
        history.push = (url:string) => {
            history.pushState({}, null, url)
            setRouterUrl(RouterHelper.getUrl())
        }

        DOMHelper.addEventListener(window, ["popstate"], popstate)

        return () => {
            DOMHelper.removeEventListener(window, ["popstate"], popstate)
        }
    }, [state.loaderModules, state.url.pathname])

    return (
        <RouterContext.Provider value={{state,dispatch}}>
            <ProgressBar progressBarProps={progressBarProps} />
            {children}
        </RouterContext.Provider>
    )
}

export default ClientRouter