import React from "react"
import PopUpProps from "./PopUpProps"
import {JSXChild} from "../props"
import {AlertLanguage} from "../types/pop-up"
import DEFAULT_LANGUAGE from "../constants/pop-up/alert-language"
import DOMHelper from "../helper/DOMHelper"
import PopUp from "./PopUp"
import ModalHeader from "../modal/Header"
import ModalTitle from "../modal/Title"
import ModalBody from "../modal/Body"
import ModalFooter from "../modal/Footer"
import Button from "../button/Button"

export interface Props extends PopUpProps {
    type?: string
    title?: JSXChild
    message: JSXChild
    callback?: () => void
    lang?: AlertLanguage
}

const Alert: React.FC<Props> = ({modalElementProps,overlayProps,type="primary",title,message,callback,lang=DEFAULT_LANGUAGE,status,setStatus,transitionClassName,transitionDuration,transitionType,showAnimation,hideAnimation,beforeOpen,beforeClose,afterOpen,afterClose}) => {
    React.useEffect(() => {
        if(status) {
            DOMHelper.addEventListener(document.body, ["keydown"], keydown)

            return () => {
                DOMHelper.removeEventListener(document.body, ["keydown"], keydown)
            }
        }
    }, [status])

    const close = () => {
        if(callback)
            callback()

        if(setStatus)
            setStatus(false)
    }

    const keydown = (e:KeyboardEvent) => {
        switch(e.keyCode) {
            case 13:
            case 27:
                close()
        }
    }
    
    return (
        <PopUp modalElementProps={modalElementProps} overlayProps={overlayProps} status={status} transitionClassName={transitionClassName} transitionDuration={transitionDuration} transitionType={transitionType} showAnimation={showAnimation} hideAnimation={hideAnimation} beforeOpen={beforeOpen} beforeClose={beforeClose} afterOpen={afterOpen} afterClose={afterClose}>
            {title && <ModalHeader><ModalTitle>{title}</ModalTitle></ModalHeader>}
            <ModalBody>{message}</ModalBody>
            <ModalFooter pt={[0, true]}>
                <Button type={type} link={DOMHelper.isMobile} waveEffect={DOMHelper.isMobile ? "dark" : "light"} elementProps={{onClick:close}}>{lang.close}</Button>
            </ModalFooter>
        </PopUp>
    )
}

export default Alert