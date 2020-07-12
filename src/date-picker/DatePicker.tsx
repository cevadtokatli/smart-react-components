import React from "react"
import styled from "styled-components"
import size from "../constants/date-picker/size"
import {SizeProps} from "../props/size-props"
import {JSXElementProps, SetValue} from "../props"
import {Value, Language, DateHourObject, DateObject, SelectedDateObject, HourObject} from "../types/date-picker"
import DV from "../default-value"
import * as PT from "../constants/date-picker/picker-type"
import * as HT from "../constants/date-picker/hour-type"
import * as W from "../constants/date-picker/week-start-day"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"
import DatePickerHelper from "../helper/DatePickerHelper"
import * as DPT from "../constants/date-picker/date-picker-type"
import DatePickerElement from "./DatePickerElement"
import Header from "./Header"
import TransitionSwitch from "../transition/TransitionSwitch"
import CSSTransition from "../transition/CSSTransition"
import DatePicker$ from "./DatePicker$"
import HourPicker from "./HourPicker"
import Buttons from "./Buttons"

const Body = styled.div.attrs({
    className: "src-date-picker-body"
})`
    box-sizing: border-box;
    padding: ${size.paddingY} 0;
`

export interface Props extends SizeProps {
    elementProps?: JSXElementProps
    value: Value
    setValue: SetValue<Value>
    type?: string
    pickerType?: number
    hourType?: number
    showCloseIcon?: boolean
    showButtons?: boolean
    weekStartDay?: number
    orientation?: boolean
    lang?: Language
    onClose?: () => void
    onSave?: () => void
    onCancel?: () => void
}

const DatePicker: React.FC<Props> = ({size="default",sizeSm,sizeMd,sizeLg,sizeXl,elementProps=DV.JSX_ELEMENT_PROPS,value,setValue,type="primary",pickerType=PT.DATE_HOUR,hourType=HT.$12,showCloseIcon,showButtons,weekStartDay=W.MONDAY,orientation,lang=DEFAULT_LANGUAGE,onClose,onSave,onCancel}) => {    
    const [valueObject, setValueObject] = React.useState<DateHourObject>(() => DatePickerHelper.getValueObject(value, pickerType, hourType))
    const [initialValue, setInitialValue] = React.useState<Value>(() => value)
    const [today] = React.useState<DateObject>(() => {
        const date = new Date()
        return {
            day: date.getDate(),
            weekDay: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
            decade: DatePickerHelper.getDecade(date.getFullYear())
        }
    })
    const [date, setDate] = React.useState<SelectedDateObject>(() => {
        const dateObject = valueObject && valueObject.date ? valueObject.date : today
        return {
            month: dateObject.month,
            year: dateObject.year,
            decade: dateObject.decade,
            selectedMonth: {
                month: dateObject.month,
                year: dateObject.year
            }
        }
    })
    const [selectedPicker, setSelectedPicker] = React.useState<number>(() => (pickerType & (PT.DATE|PT.DATE_HOUR)) ? PT.DATE : PT.HOUR)
    const [selectedDatePicker, setSelectedDatePicker] = React.useState<number>(() => DPT.WEEK)
    const valueInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!valueInit.current)
            valueInit.current = true
        else
            setValueObject(DatePickerHelper.getValueObject(value, pickerType, hourType))
    }, [value, pickerType, hourType])

    /**
     * Sets value.
     * 
     * @param date 
     * @param hour 
     */
    const setValue$ = (date:DateObject, hour:HourObject) => {
        if(!date && !hour)
            setValue(null)
        else {
            date = date || (valueObject ? valueObject.date : today)
            hour = hour || (valueObject ? valueObject.hour : {hour:1,minute:0,am:false})

            if(typeof value == "string" || value.constructor == Date) {
                let result = ""
    
                if(pickerType != PT.HOUR)
                    result += `${date.month+1}/${date.day}/${date.year}`
        
                if(pickerType != PT.DATE) {
                    if(result != "")
                        result += " "
                    result += `${hour.hour}:${hour.minute}`
                    if(hourType == HT.$12) 
                        result += ` ${hour.am ? "AM" : "PM"}`
                }

                setValue(typeof value == "string" ? result : new Date(result))
            } else
                setValue({
                    date,
                    hour
                })
        }
    }

    return (
        <DatePickerElement {...elementProps} size={size} sizeSm={sizeSm} sizeMd={sizeMd} sizeLg={sizeLg} sizeXl={sizeXl} type={type}>
            <Header valueObject={valueObject} today={today} selectedPicker={selectedPicker} setSelectedPicker={setSelectedPicker} type={type} pickerType={pickerType} showCloseIcon={showCloseIcon} lang={lang} onClose={onClose} />
            <Body>
                <TransitionSwitch active={selectedPicker}>
                    <CSSTransition value={PT.DATE} className="src-dp-fade-in" duration={150}>
                        <DatePicker$ valueObject={valueObject} date={date} setDate={setDate} selectedDatePicker={selectedDatePicker} setSelectedDatePicker={setSelectedDatePicker} setValue={setValue$} orientation={orientation} weekStartDay={weekStartDay} lang={lang} />
                    </CSSTransition>
                    <CSSTransition value={PT.HOUR} className="src-dp-fade-out" duration={150}>
                        <HourPicker valueObject={valueObject} setValue={setValue$} hourType={hourType} orientation={orientation} lang={lang} />
                    </CSSTransition>
                </TransitionSwitch>
            </Body>
            {showButtons && <Buttons value={value} setValue={setValue} initialValue={initialValue} setInitialValue={setInitialValue} onSave={onSave} onCancel={onCancel} type={type} lang={lang} />}
        </DatePickerElement>
    )
}

export default DatePicker