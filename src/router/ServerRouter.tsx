import React from "react"
import reducer, {getInitialState} from "./reducer"
import RouterContext from "./RouterContext"

interface Props {
    children: JSX.Element|JSX.Element[]
    url: string
}

const ServerRouter: React.FC<Props> = ({children,url}) => {
    const [state, dispatch] = React.useReducer(reducer, getInitialState(url))

    return (
        <RouterContext.Provider value={{state,dispatch}}>
            {children}
        </RouterContext.Provider>
    )
}

export default ServerRouter