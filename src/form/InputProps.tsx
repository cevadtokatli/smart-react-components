import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, SetValue} from "../props"

export default interface InputProps<T> extends SizeProps {
    containerProps?: JSXElementProps
    inputProps?: JSXElementProps
    labelProps?: JSXElementProps
    label?: JSXChild
    value?: T
    setValue?: SetValue<T>
    type?: string
    fill?: boolean
    border?: boolean
    shape?: string
    hint?: JSXChild
    error?: JSXChild
    leftAddon?: JSXChild
    leftAddonProps?: JSXElementProps
    leftAddonAbsolute?: boolean
    rightAddon?: JSXChild
    rightAddonProps?: JSXElementProps
    rightAddonAbsolute?: boolean
}