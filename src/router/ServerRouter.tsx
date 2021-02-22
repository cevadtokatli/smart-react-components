import React from "react"
import { JSXElementProps } from "../props"
import reducer, {getInitialState} from "./reducer"
import RouterContext from "./RouterContext"
import ProgressBar from "./ProgressBar"

interface Props {
    children: JSX.Element|JSX.Element[]
    url: string
    progressBarProps?: JSXElementProps
}

const ServerRouter: React.FC<Props> = ({children,url,progressBarProps}) => {
    const [state, dispatch] = React.useReducer(reducer, getInitialState(url))

    return (
        <RouterContext.Provider value={{state,dispatch}}>
            <ProgressBar progressBarProps={progressBarProps} />
            {children}
        </RouterContext.Provider>
    )
}

export default ServerRouter