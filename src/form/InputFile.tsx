import React from "react"
import InputProps from "./InputProps"
import {JSXElementProps, JSXChild} from "../props"
import DV from "../default-value"
import BadgeContainer from "../badge/Container"
import Badge from "../badge/Badge"
import BadgeIcon from "../badge/Icon"
import CloseIcon from "../icon/Close"
import BadgeText from "../badge/Text"
import DOMHelper from "../helper/DOMHelper"
import Input from "../element/Input"
import BoxElement from "./InputElement"
import useInputOutput from "./UseInputOutput"

export interface Props extends InputProps<File|File[]> {
    hint?: never
    boxProps?: JSXElementProps
    badgeType?: string
}

interface Value$ {
    text: JSXChild
    isPlaceholder: boolean
}

const InputFile: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,boxProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,value,setValue,type,fill,border,shape="default",badgeType="primary",error,leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute}) => {
    const boxEl = React.useRef<HTMLDivElement>(null)
    const inputEl = React.useRef<HTMLInputElement>(null)

    const getValue$ = (): Value$ => {
        if(value && (!Array.isArray(value) || (Array.isArray(value) && value.length > 0))) {
            if(!inputProps.multiple)
                return {text:(value as File).name,isPlaceholder:false}
            else {
                return {
                    text: (
                        <BadgeContainer space={true}>
                            {(value as File[]).map((item, index) => <Badge key={index} type={badgeType} data-src-not-clickable>
                                <BadgeIcon onClick={() => remove(index)}>
                                    <CloseIcon iconSize="default" />
                                </BadgeIcon>
                                <BadgeText>{item.name}</BadgeText>
                            </Badge>)}
                        </BadgeContainer>
                    ),
                    isPlaceholder: false
                }
            }
        } else
            return {text:inputProps.placeholder || <>&nbsp;</>,isPlaceholder:true}
    }

    const [value$, setValue$] = React.useState<Value$>(() => getValue$())
   
    React.useEffect(() => {
        setValue$(getValue$())
    }, [value, inputProps.placeholder])

    /**
     * Checks if target is clickable, if it is, focuses input.
     * 
     * @param e 
     */
    const boxClick = (e:React.FormEvent<HTMLDivElement>): void => {
        if(DOMHelper.checkIfTargetIsClickable(e.target as HTMLElement, boxEl.current))
            inputEl.current.click()
    }

    /**
     * Sets new value if event is not prevented.
     * 
     * @param e 
     */
    const change = (e:React.FormEvent<HTMLInputElement>): void => {
        if(!inputProps.disabled) {
            if(inputProps.onChange)
                inputProps.onChange(e)

            if(!e.defaultPrevented) {
                let el = e.target as HTMLInputElement
                if(!inputProps.multiple)
                    setValue(el.files[0] || null)
                else {
                    let arr = []
                    for(let i of el.files) {
                        arr.push(i)
                    }
                    setValue([...(value as File[]),...arr])
                }
            }
        }
    }

    /**
     * Removes value at the given index.
     * 
     * @param i 
     */
    const remove = (i:number): void => setValue((value as File[]).filter((_, index) => index != i))
    
    return useInputOutput({
        element: (
            <>
                <Input {...inputProps} ref={inputEl} type="file" display="none" onChange={change} />
                <BoxElement 
                {...boxProps} ref={boxEl} 
                size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} 
                leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} inputElement={false} 
                data-src-placeholder-style={value$.isPlaceholder} onClick={boxClick}>{value$.text}</BoxElement>
            </>
        ),
        containerProps,inputProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute,error
    })
}

export default InputFile