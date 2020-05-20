import React from "react"
import {ThemeContext} from "styled-components"
import {JSXElementProps, SetValue} from "../props"
import DV from "../default-value"
import CSSTransition from "../transition/CSSTransition"
import Overlay from "../overlay/Overlay"
import ModalElement from "./Element"

export interface Props {
    children: JSX.Element|JSX.Element[]
    overlayClick?: boolean
    overlayProps?: JSXElementProps
    modalElementProps?: JSXElementProps
    size?: string
    centered?: boolean
    minWidth?: string
    maxWidth?: string
    status?: boolean
    setStatus?: SetValue<boolean>
    transitionClassName?: string
    transitionType?: string
    transitionDuration?: number
    showAnimation?: boolean
    hideAnimation?: boolean    
    beforeOpen?: () => Promise<void>
    beforeClose?: () => Promise<void>
    afterOpen?: () => void
    afterClose?: () => void
}

const Modal: React.FC<Props> = ({children,overlayClick=true,overlayProps=DV.JSX_ELEMENT_PROPS,modalElementProps=DV.JSX_ELEMENT_PROPS,size="default",centered,minWidth,maxWidth,status=true,setStatus,transitionClassName="src-overlay-modal-down",transitionType,transitionDuration=300,showAnimation=true,hideAnimation=true,beforeOpen,afterOpen,beforeClose,afterClose}) => {
    const theme = React.useContext(ThemeContext).src
    const overlayEl = React.useRef<HTMLDivElement>(null)

    const clickOverlay = (e:Event) => {
        if(overlayClick && setStatus && e.target == overlayEl.current)
            setStatus(false)
    }

    return (
        <CSSTransition status={status} className={transitionClassName} type={transitionType} duration={transitionDuration} showAnimation={showAnimation} hideAnimation={hideAnimation} beforeShow={beforeOpen} afterShow={afterOpen} beforeHide={beforeClose} afterHide={afterClose}>
            <Overlay {...overlayProps} elementProps={{...overlayProps.elementProps,onMouseUp:clickOverlay,onTouchEnd:clickOverlay}} ref={overlayEl}>
                <ModalElement alignSelf={centered ? "center" : "flex-start"} {...modalElementProps} minWidthMd={minWidth || theme.modal.width[size]} maxWidth={maxWidth || theme.modal.width[size]}>{children}</ModalElement>
            </Overlay>
        </CSSTransition>
    )
}

export default Modal