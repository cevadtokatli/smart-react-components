import React from "react"
import RouterContext from "./RouterContext"
import {Path, Url} from "../types/router"
import RouterHelper from "../helper/RouterHelper"

interface Props {
    to: string
    path?: Path
    exact?: boolean
    checkActive?: boolean
}

interface Return {
    click: (e:React.FormEvent<HTMLAnchorElement>) => void 
    active: boolean
    activating: boolean
}

export default ({to,path,exact,checkActive=true}:Props): Return => {
    const router = React.useContext(RouterContext)

    const isActive = (url:Url) => url && (RouterHelper.matchPath(url.pathname, url.query, {path:(path || to),exact,searchKeys:null}) ? true : false)

    const [active, setActive] = React.useState<boolean>(() => checkActive ? isActive(router.state.url) : false)
    const [activating, setActivating] = React.useState<boolean>(() => checkActive ? isActive(router.state.newUrl) : false)

    React.useEffect(() => {
        if(checkActive)
            setActive(isActive(router.state.url))
    }, [router.state.url])

    React.useEffect(() => {
        if(checkActive)
            setActivating(isActive(router.state.newUrl))
    }, [router.state.newUrl])

    const click = (e:React.FormEvent<HTMLAnchorElement>): void => {
        if((e as any).ctrlKey)
            return

        e.preventDefault()
        if((!router.state.newUrl && router.state.url.fullpath != to) || (router.state.newUrl && router.state.newUrl.fullpath != to))
            history.push(to)
    }

    return {click,active,activating}
}