import {JSXChildren, JSXElementProps} from "../props"
import {Path} from "../types/router"

export default interface Props {
    children: JSXChildren
    elementProps?: JSXElementProps
    to: string
    path?: Path
    exact?: boolean
    emptyQueryActive?: boolean
}