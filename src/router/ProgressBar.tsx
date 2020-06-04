import React from "react"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import RouterContext from "./RouterContext"
import Div from "../element/Div"
import ProgressBar$ from "../progress-bar/ProgressBar"

interface Props {
    progressBarProps: JSXElementProps
}

const ProgressBar: React.FC<Props> = ({progressBarProps=DV.JSX_ELEMENT_PROPS}) => {
    const router = React.useContext(RouterContext)

    return (
        <Div position="fixed" zIndex="routerProgressBar" left="0" right="0" top="0" style={(router.state.newUrl ? {} : {visibility:"hidden",pointerEvents:"none"})}>
            <ProgressBar$ {...progressBarProps} percentage={router.state.percentage} />
        </Div>
    )
}

export default ProgressBar