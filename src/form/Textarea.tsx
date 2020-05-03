import React from "react"
import InputProps from "./InputProps"
import {Value, JSXElementProps} from "../props"
import DV from "../default-value"
import useInputMethods from "./UseInputMethod"
import useInputOutput from "./UseInputOutput"
import TextareaElement from "./TextareaElement"

export interface Props extends InputProps<Value> {
    inputProps?: never
    textareaProps?: JSXElementProps
    minHeight?: number
    maxHeight?: number
}

const Textarea: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,textareaProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,value,setValue,type,fill,border,shape="default",hint,error,leftAddon,rightAddon,minHeight=150,maxHeight=350}) => {
    const {props,isFocused} = useInputMethods<Value, HTMLTextAreaElement>({disabled:textareaProps.disabled,value,setValue,onChange:textareaProps.onChange,onFocus:textareaProps.onFocus,onBlur:textareaProps.onBlur})
    const [style, setStyle] = React.useState<any>(() => ({}))
    const [height, setHeight] = React.useState<number>(-1)    

    const getStyle = (): any => {
        let _style: any = {}

        if(textareaProps.style)
            _style = {...textareaProps.style}
        else if(height)
            _style.height = `${height}px`

        return(_style)
    }

    const getHeight = (): number => {
        if(minHeight || maxHeight) {
            let el: HTMLTextAreaElement = document.getElementById(textareaProps.id) as HTMLTextAreaElement
            if(el) {
                el.style.height = "auto"
                let _height: number = el.scrollHeight + 5
                if(_height < minHeight)
                    _height = minHeight
                else if(_height > maxHeight && maxHeight > -1)
                    _height = maxHeight
                el.style.height = `${_height}px`
                return _height
            }
        }

        return -1
    }

    React.useEffect(() => {
        setStyle(getStyle())
    }, [textareaProps.style])

    React.useEffect(() => {
        setHeight(getHeight())
    }, [value])

    return useInputOutput({
        element: <TextareaElement {...textareaProps} style={style} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} rightAddon={rightAddon ? true : false} {...props} />,
        leftAddon,rightAddon,hint,error,containerProps,inputProps:textareaProps,labelProps,label,isFocused
    })
}

export default Textarea