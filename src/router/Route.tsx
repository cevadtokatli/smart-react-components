import React from "react"
import {RouteProps, RouteMatch} from "../types/router"
import RouterContext from "./RouterContext"
import RouterHelper from "../helper/RouterHelper"

export interface Props extends RouteProps {
    children?: never
    switchNotRendered?: boolean
}

const Route: React.FC<Props> = ({path,exact,Component,render,loaderModule,searchKeys,switchNotRendered}) => {
    const router = React.useContext(RouterContext)
    const [match, setMatch] = React.useState<RouteMatch>(() => RouterHelper.matchPath(router.state.url.pathname, router.state.url.query, {path,exact,searchKeys}))

    React.useEffect(() => {
        setMatch(RouterHelper.matchPath(router.state.url.pathname, router.state.url.query, {path,exact,searchKeys}))
    }, [router.state.url])

    return (
        <React.Fragment key={match ? match.key : ""}>
            {(!switchNotRendered && match && typeof Component !== "undefined") && <Component url={router.state.url} match={match} />}
            {render && render((!switchNotRendered && match ? match : null), router.state.url)}
        </React.Fragment>
    )
}

export default Route