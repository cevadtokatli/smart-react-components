import React from "react"
import InputProps from "./InputProps"
import {Value, Language} from "../types/date-picker"
import {JSXElementProps} from "../props"
import DV from "../default-value"
import * as PT from "../constants/date-picker/picker-type"
import * as DT from "../constants/date-picker/date-type"
import * as HT from "../constants/date-picker/hour-type"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"
import DatePickerHelper from "../helper/DatePickerHelper"
import StringHelper from "../helper/StringHelper"
import DOMHelper from "../helper/DOMHelper"
import useInputOutput from "./UseInputOutput"
import FixedBox from "../fixed-box/FixedBox"
import InputElement from "./InputElement"
import DatePicker from "../date-picker/DatePicker"

export interface Props extends InputProps<Value> {
    hint?: never
    error?: never
    pickerSize?: string
    pickerSizeSm?: string
    pickerSizeMd?: string
    pickerSizeLg?: string
    pickerSizeXl?: string
    pickerElementProps?: JSXElementProps
    pickerThemeType?: string
    pickerType?: number
    dateType?: number
    hourType?: number
    showButtons?: boolean
    weekStartDay?: number
    orientation?: boolean
    lang?: Language
}

const InputDatePicker: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,containerProps=DV.JSX_ELEMENT_PROPS,inputProps=DV.JSX_ELEMENT_PROPS,labelProps=DV.JSX_ELEMENT_PROPS,label,value,setValue,type,fill,border,shape="default",leftAddon,leftAddonProps=DV.JSX_ELEMENT_PROPS,leftAddonAbsolute,rightAddon,rightAddonProps=DV.JSX_ELEMENT_PROPS,rightAddonAbsolute,pickerSize,pickerSizeSm,pickerSizeMd="small",pickerSizeLg="default",pickerSizeXl,pickerElementProps,pickerThemeType,pickerType=PT.DATE_HOUR,dateType=DT.MDY,hourType=HT.$12,showButtons=true,weekStartDay,orientation,lang=DEFAULT_LANGUAGE}) => {
    const getValue$ = (): string => {
        const valueObject = DatePickerHelper.getValueObject(value, pickerType, hourType)
        let result = ""

        if(valueObject) {
            if(valueObject.date) {
                if(dateType == DT.DMY)
                    result += `${StringHelper.renderNumber(valueObject.date.day, 2, "0")}/${StringHelper.renderNumber(valueObject.date.month+1, 2, "0")}/${StringHelper.renderNumber(valueObject.date.year, 4, "0")}`
                else
                    result += `${StringHelper.renderNumber(valueObject.date.month+1, 2, "0")}/${StringHelper.renderNumber(valueObject.date.day, 2, "0")}/${StringHelper.renderNumber(valueObject.date.year, 4, "0")}`
            }

            if(valueObject.hour) {
                if(result)
                    result += " "

                result += `${StringHelper.renderNumber(valueObject.hour.hour, 2, "0")}:${StringHelper.renderNumber(valueObject.hour.minute, 2, "0")}`

                if(hourType == HT.$12)
                    result += ` ${lang[valueObject.hour.am ? "am" : "pm"]}`
            }
        }

        return result
    }
    
    const [status, setStatus] = React.useState<boolean>(false)
    const [value$, setValue$] = React.useState<string>(() => getValue$())
    const inputEl = React.useRef<HTMLInputElement>(null)
    const valueInit = React.useRef<boolean>(false)

    /**
     * Converts the given string value to the original value format.
     * 
     * @param _value
     */
    const convertValue = (_value:string): Value => {
        if(dateType == DT.DMY) {
            const valueSplit = _value.split("/")
            if(valueSplit.length == 3)
                _value = `${valueSplit[1]}/${valueSplit[0]}/${valueSplit[2]}`
        }

        if(typeof value === "string")
            return _value
        else if(value.constructor == Date)
            return new Date(_value)
        else
            return DatePickerHelper.getValueObject(_value, pickerType, hourType)
    }

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
            setValue(convertValue((e.target as HTMLInputElement).value))
    }


    /**
     * When enter is pressed, changes value.
     * 
     * @param e
     */
    const inputKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode == 13)
            setValue(convertValue((e.target as HTMLInputElement).value))
    }

    /**
     * Closes box.
     */
    const close = () => setStatus(false)

    React.useEffect(() => {
        if(!valueInit.current)
            valueInit.current = true
        else
            setValue$(getValue$())
    }, [value, pickerType, hourType])

    React.useEffect(() => {
        inputEl.current.value = value$
    }, [value$])

    return (
        <FixedBox boxProps={{width:["auto", true]}} status={status} setStatus={setStatus}>
            {useInputOutput({
                element: <InputElement {...inputProps} ref={inputEl} defaultValue={value$} tabIndex={-1} onFocus={inputFocus} onBlur={inputBlur} onKeyDown={inputKeyDown} size$={size} size$Sm={sizeSm} size$Md={sizeMd} size$Lg={sizeLg} size$Xl={sizeXl} type$={type} fill$={fill} border$={border} shape={shape} leftAddon={leftAddon ? true : false} leftAddonAbsolute={leftAddonAbsolute} rightAddon={rightAddon ? true : false} rightAddonAbsolute={rightAddonAbsolute} />,
                containerProps,inputProps,labelProps,label,shape,leftAddon,leftAddonProps,leftAddonAbsolute,rightAddon,rightAddonProps,rightAddonAbsolute
            })}
            <DatePicker size={pickerSize} sizeSm={pickerSizeSm} sizeMd={pickerSizeMd} sizeLg={pickerSizeLg} sizeXl={pickerSizeXl} elementProps={pickerElementProps} value={value} setValue={setValue} type={pickerThemeType} pickerType={pickerType} hourType={hourType} showCloseIcon={true} showButtons={showButtons} weekStartDay={weekStartDay} orientation={orientation} lang={lang} onClose={close} onSave={close} onCancel={close} />
        </FixedBox>
    ) 
}

export default InputDatePicker