import React from "react"
import InputProps from "./InputProps"
import {JSXElementProps} from "../props"
import {Language} from "../types/color-picker"
import DV from "../default-value"
import DOMHelper from "../helper/DOMHelper"
import FixedBox from "../fixed-box/FixedBox"
import useInputOutput from "./UseInputOutput"
import InputElement from "./InputElement"
import ColorPicker from "../color-picker/ColorPicker"

export interface Props extends InputProps<string> {
    hint?: never
    error?: never
    pickerSize?: string
    pickerSizeSm?: string
    pickerSizeMd?: string
    pickerSizeLg?: string
    pickerSizeXl?: string
    pickerElementProps?: JSXElementProps
    pickerType?: string
    colorFormat?: string
    allowOpacity?: boolean
    showConsole?: boolean
    showButtons?: boolean
    showPalette?: boolean
    allowAddColorPalette?: boolean
    addDefaultPaletteColors?: boolean    
    palette?: string[]
    lang?: Language
    onChange?: (value:string) => void
    onSave?: () => void
    onCancel?: () => void
}

const InputColorPicker: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,value,setValue,type,fill,border,shape="default",leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute,pickerSize,pickerSizeSm,pickerSizeMd="small",pickerSizeLg="default",pickerSizeXl,pickerElementProps=DV.JSX_ELEMENT_PROPS,pickerType,colorFormat,allowOpacity,showConsole,showButtons,showPalette,allowAddColorPalette,addDefaultPaletteColors,palette,lang,onChange,onSave,onCancel}) => {
    const [status, setStatus] = React.useState<boolean>(false)
    const [palette$, setPalette$] = React.useState<string[]>(() => palette || [])
    const inputEl = React.useRef<HTMLInputElement>(null)

    /**
     * Prevents event, if it is mobile.
     * 
     * @param e 
     */
    const inputFocus = (e:React.FormEvent<HTMLInputElement>) => {
        if(DOMHelper.isMobile)
            (e.target as HTMLInputElement).blur()
    }

    /**
     * Sets value, if it is not mobile.
     * 
     * @param e 
     */
    const inputBlur = (e:React.FormEvent<HTMLInputElement>) => {
        if(!DOMHelper.isMobile)
            setValue((e.target as HTMLInputElement).value)
    }

    /**
     * When enter is pressed, changes value.
     * 
     * @param e
     */
    const inputKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode == 13)
            setValue((e.target as HTMLInputElement).value)
    }

    /**
     * Sets input value and calls onchange method.
     * 
     * @param val 
     */
    const change = (val:string) => {
        inputEl.current.value = val
        if(onChange)
            onChange(val)
    }

    /**
     * Closes picker and calls onsave method.
     */
    const save = () => {
        setStatus(false)
        if(onSave)
            onSave()
    }

    /**
     * Closes picker and calls oncancel method.
     */
    const cancel = () => {
        setStatus(false)
        if(onCancel)
            onCancel()
    }

    return (
        <FixedBox boxProps={{width:["auto", true]}} status={status} setStatus={setStatus}>
            {useInputOutput({
                element: <InputElement {...inputProps} ref={inputEl} defaultValue={value} tabIndex={-1} onFocus={inputFocus} onBlur={inputBlur} onKeyDown={inputKeyDown} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} />,
                containerProps,inputProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute
            })}
            <ColorPicker value={value} setValue={setValue} size={pickerSize} sizeSm={pickerSizeSm} sizeMd={pickerSizeMd} sizeLg={pickerSizeLg} sizeXl={pickerSizeXl} elementProps={pickerElementProps} type={pickerType} colorFormat={colorFormat} allowOpacity={allowOpacity} showConsole={showConsole} showButtons={showButtons} showPalette={showPalette} allowAddColorPalette={allowAddColorPalette} addDefaultPaletteColors={addDefaultPaletteColors} palette={palette$} setPalette={setPalette$} lang={lang} onChange={change} onSave={save} onCancel={cancel} />
        </FixedBox>
    )
}

export default InputColorPicker