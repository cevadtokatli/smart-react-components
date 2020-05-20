import React from "react"
import PopUpProps from "./PopUpProps"
import theme from "../theme"
import DV from "../default-value"
import Modal from "../modal/Modal"

interface Props extends PopUpProps {
    children: JSX.Element|JSX.Element[]
}

const OVERLAY_PROPS = {
    background: theme.isMobile
}

const Popup: React.FC<Props> = ({children,modalElementProps=DV.JSX_ELEMENT_PROPS,overlayProps=OVERLAY_PROPS,status,setStatus,beforeOpen,beforeClose,afterOpen,afterClose,transitionClassName,transitionType,transitionDuration,showAnimation,hideAnimation}) => {
    return (
        <Modal modalElementProps={modalElementProps} overlayProps={overlayProps} overlayClick={false} status={status} setStatus={setStatus} beforeOpen={beforeOpen} beforeClose={beforeClose} afterOpen={afterOpen} afterClose={afterClose} transitionClassName={transitionClassName} transitionType={transitionType} transitionDuration={transitionDuration} showAnimation={showAnimation} hideAnimation={hideAnimation}>
            {children}
        </Modal>
    )
}

export default Popup