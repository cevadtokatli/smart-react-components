import {JSXElementProps, SetValue} from "../props"

export default interface Props {
    modalElementProps?: JSXElementProps
    overlayProps?: JSXElementProps
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