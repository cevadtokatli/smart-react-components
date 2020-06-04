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
        let loaderModule
        let match
        for(let path in state.loaderModules) {
            let item = state.loaderModules[path]
            if(item.module && (match = RouterHelper.matchPath(url, {path,exact:item.exact}))) {
                loaderModule = item.module
                break
            }
        }

        if(!loaderModule)
            dispatch(setUrl(url))
        else {
            let key = new Date().getTime().toString()
            dispatch(setNewUrl(url, key));

            (async function() {
                try {
                    const setPercentage$ = (payload:number) => dispatch(setPercentage(payload, key))
                    const setCancelCallback$ = (payload:CancelCallback) => dispatch(setCancelCallback(payload, key))
                    setPercentage$(10)
                    const module$ = await loaderModule.preload()
                    await (module$ as any as PreloadModule).default.get(match, RouterHelper.setUrl(url), setPercentage$, setCancelCallback$, params)
                } catch(ignored) {}
            }())
        }
    }, [state.loaderModules])

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
    }, [state.loaderModules])

    return (
        <RouterContext.Provider value={{state,dispatch}}>
            <ProgressBar progressBarProps={progressBarProps} />
            {children}
        </RouterContext.Provider>
    )
}

export default ClientRouter