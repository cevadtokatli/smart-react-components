import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChildren} from "../props"

export default interface Props extends SizeProps { 
    elementProps?: JSXElementProps
    children: JSXChildren
    type?: string
    fill?: boolean
    link?: boolean
    border?: boolean
    shape?: string
    block?: boolean
    fixedSize?: boolean
    waveEffect?: string
    icon?: JSX.Element
    iconPosition?: string
    loading?: JSX.Element
    loadingStatus?: boolean
    loadingTransitionClassName?: string
    loadingTransitionType?: string
    loadingTransitionDuration?: number 
    loadingTransitionShowAnimation?: boolean
    loadingTransitionHideAnimation?: boolean
}