import {SizeProps} from "../props/size-props"
import {JSXElementProps, JSXChild, ValueMix, SetValue} from "../props"

export default interface SelectProps extends SizeProps {
    containerProps?: JSXElementProps
    selectProps?: JSXElementProps
    labelProps?: JSXElementProps
    label?: JSXChild
    children?: JSX.Element|JSX.Element[]
    optionType?: string
    active: ValueMix
    setActive: SetValue<ValueMix>
    type?: string
    fill?: boolean
    border?: boolean
    shape?: string
    hover?: boolean
    waveEffect?: string
    error?: JSXChild
    leftAddon?: JSXChild
    leftAddonProps?: JSXElementProps
    leftAddonAbsolute?: boolean
    rightAddon?: JSXChild
    rightAddonProps?: JSXElementProps
    rightAddonAbsolute?: boolean
    search?: boolean
    searchInputProps?: JSXElementProps
}