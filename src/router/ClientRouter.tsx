import React from "react"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import reducer, {getInitialState} from "./reducer"
import {PreloadModule, CancelCallback, RouteProps} from "../types/router"
import RouterContext from "./RouterContext"
import RouterHelper from "../helper/RouterHelper"
import {setUrl, setNewUrl} from "./actions" 
import {setPercentage, setCancelCallback} from "./actions"
import DOMHelper from "../helper/DOMHelper"
import ProgressBar from "./ProgressBar"

declare global {
    interface History {
        push: (url:string) => void
        replace: (url:string) => void
    }
}

interface Props {
    children: JSX.Element|JSX.Element[]
    params?: any
    progressBarProps?: JSXElementProps
    routes: RouteProps[]
}

const ClientRouter: React.FC<Props> = ({children,params={},progressBarProps=DV.JSX_ELEMENT_PROPS,routes}) => {
    const [state, dispatch] = React.useReducer(reducer, getInitialState())

    const setRouterUrl = React.useCallback((_url:string) => {
        (async function() {
            const url = RouterHelper.setUrl(_url)
            let key = new Date().getTime().toString()
            const setPercentage$ = (payload:number) => dispatch(setPercentage(payload, key))
            const setCancelCallback$ = (payload:CancelCallback) => dispatch(setCancelCallback(payload, key))
            let loaderMethods = []
            await RouterHelper.getLoaderMethods(routes, url.pathname, url.query, loaderMethods, params, state.url, setPercentage$, setCancelCallback$);

            if(loaderMethods.length == 0)
                dispatch(setUrl(url))
            else {
                dispatch(setNewUrl(url, key))

                try {
                    setPercentage$(10)
                    for(let i in loaderMethods) {
                        await loaderMethods[i]();
                    }
                    setPercentage$(100)
                } catch(ignored) {}
            }
        }())
    }, [state.url])

    const popstate = () => setRouterUrl(RouterHelper.getUrl())

    React.useEffect(() => {
        history.push = (url:string) => {
            history.pushState({}, null, url)
            setRouterUrl(RouterHelper.getUrl())
        }

        history.replace = (url:string) => {
            history.replaceState({}, null, url)
            setRouterUrl(RouterHelper.getUrl())
        }

        DOMHelper.addEventListener(window, ["popstate"], popstate)

        return () => {
            DOMHelper.removeEventListener(window, ["popstate"], popstate)
        }
    }, [state.url])

    return (
        <RouterContext.Provider value={{state,dispatch}}>
            <ProgressBar progressBarProps={progressBarProps} />
            {children}
        </RouterContext.Provider>
    )
}

export default ClientRouter