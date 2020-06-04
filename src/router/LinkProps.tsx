import {JSXChildren, JSXElementProps} from "../props"

export default interface Props {
    children: JSXChildren
    elementProps?: JSXElementProps
    to: string
    exact?: boolean
}