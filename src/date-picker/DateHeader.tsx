import React from "react"
import styled from "styled-components"
import size from "../constants/date-picker/size"
import {SelectedDateObject, Language} from "../types/date-picker"
import * as DP from "../constants/date-picker/date-picker-type"
import {MAX_YEAR, MIN_YEAR} from "../constants/date-picker/limit"
import Div from "../element/Div"
import IconContainer from "./IconContainer"
import ArrowUp from "./icons/ArrowUp"
import ArrowDown from "./icons/ArrowDown"

const HeaderElement = styled.header.attrs({
    className: "src-date-picker-date-header"
})`
    display: flex;
    justify-content: space-between;

    > span {
        cursor: default;
        font-weight: 600;
    }

    svg {
        width: ${size.dateHeaderIconSize};
    }
`

interface Props {
    date: SelectedDateObject
    setDate: React.Dispatch<React.SetStateAction<SelectedDateObject>>
    selectedDatePicker: number
    setSelectedDatePicker: React.Dispatch<React.SetStateAction<number>>
    orientation: boolean
    lang: Language
}

const DateHeader: React.FC<Props> = ({date,setDate,selectedDatePicker,setSelectedDatePicker,orientation,lang}) => {
    const getValue = (): string => {
        if(selectedDatePicker == DP.WEEK)
            return `${lang.months[date.month]} ${date.year}`
        else if(selectedDatePicker == DP.YEAR)
            return `${date.year}`
        else
            return `${date.decade[0]} - ${date.decade[1]}`
    }

    const [value, setValue] = React.useState<string>(() => getValue())

    React.useEffect(() => setValue(getValue()), [date, selectedDatePicker])

    /**
     * Sets "selected date picker"
     */
    const setSelectedDatePicker$ = () => {
        if(selectedDatePicker == DP.WEEK)
            setSelectedDatePicker(DP.YEAR)
        else if(selectedDatePicker == DP.YEAR)
            setSelectedDatePicker(DP.DECADE)
    }

    /**
     * Sets date
     * 
     * @param up 
     */
    const setDate$ = (up:boolean) => {
        const inc = orientation ? up : !up
        const val = {...date}

        if(inc) {
            if(selectedDatePicker == DP.WEEK) {
                if(val.month < 11)
                    val.month++
                else if(val.year < MAX_YEAR) {
                    val.month = 0
                    val.year++
                }
            } else if(selectedDatePicker == DP.YEAR) {
                if(val.year < MAX_YEAR)
                    val.year++
            } else if(selectedDatePicker == DP.DECADE) {
                if(val.decade[1] < MAX_YEAR)
                    val.decade = [val.decade[1], val.decade[1]+10]
            }
        } else {
            if(selectedDatePicker == DP.WEEK) {
                if(val.month > 0)
                    val.month--
                else if(val.year > MIN_YEAR) {
                    val.month = 11
                    val.year--
                }
            } else if(selectedDatePicker == DP.YEAR) {
                if(val.year > MIN_YEAR)
                    val.year--
            } else if(selectedDatePicker == DP.DECADE) {
                if(val.decade[0] > MIN_YEAR)
                    val.decade = [val.decade[0]-10, val.decade[0]]
            }
        }

        setDate(val)
    }

    return (
        <HeaderElement>
            <span className="src-date-picker-span-element" onClick={setSelectedDatePicker$}>{value}</span>
            <Div display="flex" alignItems="center">
                <IconContainer>
                    <ArrowUp onClick={() => setDate$(true)} />
                </IconContainer>
                <IconContainer>
                    <ArrowDown onClick={() => setDate$(false)} />
                </IconContainer>
            </Div>
        </HeaderElement>
    )
}

export default DateHeader