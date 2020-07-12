import React from "react"
import styled from "styled-components"
import {DateHourObject, DateObject, HourObject, Language} from "../types/date-picker"
import size from "../constants/date-picker/size"
import DOMHelper from "../helper/DOMHelper"
import Div from "../element/Div"
import ArrowUp from "./icons/ArrowUp"
import ArrowDown from "./icons/ArrowDown"
import * as HT from "../constants/date-picker/hour-type"
import * as HV from "../constants/date-picker/hour-value"
import StringHelper from "../helper/StringHelper"

interface Props {
    valueObject: DateHourObject
    setValue: (date:DateObject, hour:HourObject) => void
    hourType: number
    orientation: boolean
    lang: Language
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ArrowContainer = styled.div.attrs({
    className: "src-date-picker-hour-arrow-container src-date-picker-hour-element"
})(({theme}) => `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${size.hourSpace};

    svg {
        fill: ${theme.src.datePicker.font};

        &:active {
            fill: ${theme.src.datePicker.arrowActive};
        }
    }
`)
const Input = styled.input.attrs({
    className: "src-date-picker-hour-input src-date-picker-hour-element",
    spellCheck: false
})`
    box-sizing: border-box;
    padding: ${size.hourSpace};
    margin: ${size.hourSpace};
    border: 0;
    border-radius: ${size.radius};
    text-align: center;

    &:focus,
    &:active {
        outline: 0;
    }
`

const HourPickerItem: React.FC<Props> = ({valueObject,setValue,hourType,orientation,lang}) => {
    const focusInputType = React.useRef<number>(null)
    const valueObjectRef = React.useRef<DateHourObject>(null) // holds value for wheel input event
    const hourInput = React.useRef<HTMLInputElement>(null)
    const minuteInput = React.useRef<HTMLInputElement>(null)
    const amInput = React.useRef<HTMLInputElement>(null)

    /**
     * Gets default hour.
     */
    const getDefaultHour = (valueObj:DateHourObject) => {
        if(valueObj)
            return {...valueObj.hour}
        else {
            const hour: HourObject = {
                hour: 12,
                minute: 0
            }

            if(hourType == HT.$12)
                hour.am = false
            
            return hour
        }
    }

    /**
     * Sets focus input type.
     * 
     * @param type 
     */
    const focusInput = (type:number) => {
        focusInputType.current = type
        DOMHelper.addEventListener(document, DOMHelper.MOUSE_WHEEL, wheelInput, {passive:false})
    }

    /**
     * Sets input value by focus input type.
     */
    const leaveInput = () => {
        const hour = getDefaultHour(valueObject)
        
        if(focusInputType.current == HV.HOUR) {
            let value = parseInt(hourInput.current.value)
            if(isNaN(value)) 
                hourInput.current.value = valueObject ? StringHelper.renderNumber(valueObject.hour.hour, 2, "0") : ""
            else {
                if(hourType == HT.$12) {
                    value = Math.max(1, value)
                    value = Math.min(12, value)
                } else {
                    value = Math.max(0, value)
                    value = Math.min(23, value)
                }
                hour.hour = value
            }
        } else if(focusInputType.current == HV.MINUTE) {
            let value = parseInt(minuteInput.current.value)
            if(isNaN(value))
                minuteInput.current.value = valueObject ? StringHelper.renderNumber(valueObject.hour.minute, 2, "0") : ""
            else {
                value = Math.max(0, value)
                value = Math.min(59, value)
                hour.minute = value
            }
        } else if(focusInputType.current == HV.AM) {
            let value = amInput.current.value
            if(value != lang.am && value != lang.pm)
                amInput.current.value = valueObject ? lang[valueObject.hour.am ? "am" : "pm"] : ""
            else
                hour.am = value == lang.am
        }

        focusInputType.current = null
        DOMHelper.removeEventListener(document, DOMHelper.MOUSE_WHEEL, wheelInput, {})
        setValue(null, hour)
    }

    /**
     * Gets wheel orientation and sets value by focus input type.
     * 
     * @param e 
     */
    const wheelInput = React.useCallback((e:WheelEvent) => {
        const delta = ((e.deltaY || -(e as any).wheelDelta || e.detail) >> 10) || 1
        const up = delta < 0 

        if(focusInputType.current == HV.HOUR)
            changeHour(up)
        else if(focusInputType.current == HV.MINUTE)
            changeMinute(up)
        else if(focusInputType.current == HV.AM)
            changeAM()

        e.preventDefault()
        e.stopPropagation()
    }, [])

    /**
     * Sets hour value.
     * 
     * @param up 
     */
    const changeHour = (up:boolean, hour?:HourObject) => {
        const inc = orientation ? up : !up
        hour = hour || getDefaultHour(valueObjectRef.current)

        if(inc) {
            if(hourType == HT.$12) {
                if(hour.hour == 11) {
                    hour.am = !hour.am
                    hour.hour = 12
                } else if(hour.hour == 12)
                    hour.hour = 1
                else
                    hour.hour++
            } else if(hourType == HT.$24) {
                if(hour.hour == 23)
                    hour.hour = 0
                else
                    hour.hour++
            }
        } else {
            if(hourType == HT.$12) {
                if(hour.hour == 12) {
                    hour.am = !hour.am
                    hour.hour = 11
                } else if(hour.hour == 1)
                    hour.hour = 12
                else
                    hour.hour--
            } else if(hourType == HT.$24) {
                if(hour.hour == 0)
                    hour.hour = 23
                else    
                    hour.hour--
            }
        }

        setValue(null, hour)
    }

    /**
     * Sets minute value and changes hour value by minute.
     * 
     * @param up 
     */
    const changeMinute = (up:boolean) => {
        const inc = orientation ? up : !up
        const hour = getDefaultHour(valueObjectRef.current)

        if(inc) {
            if(hour.minute < 59)
                hour.minute++
            else {
                hour.minute = 0
                changeHour(up, hour)
                return
            }
        } else {
            if(hour.minute > 0)
                hour.minute--
            else {
                hour.minute = 59
                changeHour(up, hour)
                return
            }
        }

        setValue(null, hour)
    }

    /**
     * Toggles am/pm value.
     */
    const changeAM = () => {
        const hour = getDefaultHour(valueObjectRef.current)
        hour.am = !hour.am
        setValue(null, hour)
    }

    React.useEffect(() => {
        valueObjectRef.current = valueObject
        if(valueObject) {
            hourInput.current.value = StringHelper.renderNumber(valueObject.hour.hour, 2, "0")
            minuteInput.current.value = StringHelper.renderNumber(valueObject.hour.minute, 2, "0")
            if(amInput.current)
                amInput.current.value = lang[valueObject.hour.am ? "am" : "pm"]
        }
    }, [valueObject])

    return (
        <Div height="100%" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center">
            <Container>
                <ArrowContainer>
                    <ArrowUp onClick={() => changeHour(true)} />
                </ArrowContainer>
                <ArrowContainer>
                    <ArrowUp onClick={() => changeMinute(true)} />
                </ArrowContainer>
                {hourType == HT.$12 && (
                    <ArrowContainer>
                        <ArrowUp onClick={changeAM} />
                    </ArrowContainer>
                )}
            </Container>
            <Container>
                <Input defaultValue={valueObject ? StringHelper.renderNumber(valueObject.hour.hour, 2, "0") : ""} ref={hourInput} onFocus={() => focusInput(HV.HOUR)} onBlur={leaveInput} />
                <Input defaultValue={valueObject ? StringHelper.renderNumber(valueObject.hour.minute, 2, "0") : ""} ref={minuteInput} onFocus={() => focusInput(HV.MINUTE)} onBlur={leaveInput} />
                {hourType == HT.$12 && <Input defaultValue={valueObject ? lang[valueObject.hour.am ? "am" : "pm"] : ""} ref={amInput} onFocus={() => focusInput(HV.AM)} onBlur={leaveInput} />}
            </Container>
            <Container>
                <ArrowContainer>
                    <ArrowDown onClick={() => changeHour(false)} />
                </ArrowContainer>
                <ArrowContainer>
                    <ArrowDown onClick={() => changeMinute(false)} />
                </ArrowContainer>
                {hourType == HT.$12 && (
                   <ArrowContainer>
                        <ArrowDown onClick={changeAM} />
                    </ArrowContainer>
                )}
            </Container>
        </Div>
    )
}

export default HourPickerItem