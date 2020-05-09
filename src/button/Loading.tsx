import React from "react"
import CSSTransition from "../transition/CSSTransition"
import Div from "../element/Div"

interface Props {
    element: JSX.Element
    status: boolean
    transitionClassName: string
    transitionType: string
    transitionDuration: number
    transitionShowAnimation: boolean
    transitionHideAnimation: boolean
}

const Loading: React.FC<Props> = ({element,status,transitionClassName,transitionType,transitionDuration,transitionShowAnimation,transitionHideAnimation}) => (
    <CSSTransition status={status} className={transitionClassName} type={transitionType} duration={transitionDuration} showAnimation={transitionShowAnimation} hideAnimation={transitionHideAnimation}>
        <Div position="absolute" zIndex="buttonLoading" left="0" top="0" width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" data-src-loading="true">{element}</Div>
    </CSSTransition>
)

export default Loading