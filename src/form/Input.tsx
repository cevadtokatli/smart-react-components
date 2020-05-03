import React from "react"
import InputProps from "./InputProps"
import {Value} from "../props"
import DV from "../default-value"
import useInputMethods from "./UseInputMethod"
import useInputOutput from "./UseInputOutput"
import InputElement from "./InputElement"

export interface Props extends InputProps<Value> {

}

const Input: React.FC<Props> = ({size,sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,value,setValue,type,fill,border,shape="default",hint,error,leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute}) => {
    const {props,isFocused} = useInputMethods<Value, HTMLInputElement>({disabled:inputProps.disabled,value,setValue,onChange:inputProps.onChange,onFocus:inputProps.onFocus,onBlur:inputProps.onBlur})

    return useInputOutput({
        element: <InputElement {...inputProps} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} {...props} />,
        containerProps,inputProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute,hint,error,isFocused
    })
}

export default Input