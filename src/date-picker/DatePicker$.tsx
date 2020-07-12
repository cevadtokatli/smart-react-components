import React from "react"
import styled from "styled-components"
import size from "../constants/date-picker/size"
import {DateHourObject, SelectedDateObject, DateObject, HourObject, Language} from "../types/date-picker"
import DateHeader from "./DateHeader"
import CSSTransition from "../transition/CSSTransition"
import * as DPT from "../constants/date-picker/date-picker-type"
import DateWeek from "./DateWeek"
import DateYear from "./DateYear"
import DateDecade from "./DateDecade"
import TransitionSwitch from "../transition/TransitionSwitch"

const PickerElement = styled.div`
    height: 100%;
    padding: 0 ${size.paddingX};
`

interface Props {
    valueObject: DateHourObject
    date: SelectedDateObject
    setDate: React.Dispatch<React.SetStateAction<SelectedDateObject>>
    selectedDatePicker: number
    setSelectedDatePicker: React.Dispatch<React.SetStateAction<number>>
    setValue: (date:DateObject, hour:HourObject) => void
    orientation: boolean
    weekStartDay: number
    lang: Language
}

const DatePickerItem: React.FC<Props> = ({valueObject,date,setDate,selectedDatePicker,setSelectedDatePicker,setValue,orientation,weekStartDay,lang}) => {
    const previousSelectedDatePicker = React.useRef<number>(null)

    React.useEffect(() => {
        previousSelectedDatePicker.current = selectedDatePicker
    }, [selectedDatePicker])

    return (
        <PickerElement>
            <DateHeader date={date} setDate={setDate} selectedDatePicker={selectedDatePicker} setSelectedDatePicker={setSelectedDatePicker} orientation={orientation} lang={lang} />
            <div>
                <TransitionSwitch active={selectedDatePicker}>
                    <CSSTransition value={DPT.WEEK} className="src-dp-fade-in" duration={150}>
                        <DateWeek valueObject={valueObject} date={date} setValue={setValue} weekStartDay={weekStartDay} lang={lang} />
                    </CSSTransition>
                    <CSSTransition value={DPT.YEAR} className={`${(previousSelectedDatePicker.current == DPT.WEEK || selectedDatePicker == DPT.WEEK) ? "src-dp-fade-out" : "src-dp-fade-in"}`} duration={150}>
                        <DateYear date={date} setDate={setDate} setSelectedDatePicker={setSelectedDatePicker} lang={lang} />              
                    </CSSTransition>                
                    <CSSTransition value={DPT.DECADE} className="src-dp-fade-out" duration={150}>
                        <DateDecade date={date} setDate={setDate} setSelectedDatePicker={setSelectedDatePicker} />                
                    </CSSTransition>
                </TransitionSwitch>
            </div>
        </PickerElement>
    )
}

export default DatePickerItem