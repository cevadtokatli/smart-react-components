import React from "react"
import {DateHourObject, SelectedDateObject, DateObject, HourObject, Language} from "../types/date-picker"
import DateList from "./DateList"
import DatePickerHelper from "../helper/DatePickerHelper"
import DateItem from "./DateItem"
import {MIN_YEAR, MAX_YEAR} from "../constants/date-picker/limit"

interface Props {
    valueObject: DateHourObject
    date: SelectedDateObject
    setValue: (date:DateObject, hour:HourObject) => void
    weekStartDay: number
    lang: Language
}

const DateWeek: React.FC<Props> = ({valueObject,date,setValue,weekStartDay,lang}) => {
    const getHeader = () => {
        const weekDays = DatePickerHelper.getWeekDays(weekStartDay)
        const result = []
        weekDays.forEach(item => result.push(<DateItem className="src-date-picker-week-item" key={item} inactive={true}>{lang.days[item].substring(0, 2)}</DateItem>))
        return result
    }

    const getList = () => {
        const result = Array(6).fill(null).map((item,index) => React.createElement(DateList, {key:index,children:[]}))

        const prevMonth = date.month == 0 ? 11 : date.month - 1
        const prevYear = prevMonth == 11 ? date.year - 1 : date.year
        const nextMonth = date.month < 11 ? date.month + 1 : 1
        const nextYear = nextMonth == 0 ? date.year + 1 : date.year

        const weekDays = DatePickerHelper.getWeekDays(weekStartDay)
        const firstMonthDay = new Date(date.year, date.month, 1).getDay()
        const weekStartIndex = weekDays.indexOf(firstMonthDay)
        const weekDayCount = DatePickerHelper.getDayCount(date.month, date.year)
        const prevDayLimit = firstMonthDay - weekStartIndex
        const prevMountCount = DatePickerHelper.getDayCount(prevMonth, prevYear)

        let prevDay = prevMountCount - prevDayLimit
        let weekDay = 1
        let nextWeekDay = 1
        let index = 0

        for(let i=0; i<42; i++) {
            let dateItem
            let isInactive

            if(prevDay <= prevMountCount) {
                dateItem = {
                    day: prevDay,
                    month: prevMonth,
                    year: prevYear
                }
                prevDay++
                isInactive = true
            } else if(weekDay <= weekDayCount) {
                dateItem = {
                    day: weekDay,
                    month: date.month,
                    year: date.year
                }
                weekDay++
            } else {
                dateItem = {
                    day: nextWeekDay,
                    month: nextMonth,
                    year: nextYear
                }
                nextWeekDay++
                isInactive = true
            }

            let isActive
            if(
                valueObject &&
                dateItem.day == valueObject.date.day &&
                dateItem.month == valueObject.date.month &&
                dateItem.year == valueObject.date.year
            ) 
                isActive = true
            else
                isActive = false
        
            result[index].props.children.push(<DateItem className="src-date-picker-week-item" key={i} active={isActive} inactive={isInactive} onClick={() => setValue$(dateItem.day, dateItem.month, dateItem.year)}>{dateItem.day}</DateItem>)

            if(i % 7 == 6)
                index++
        }

        return result
    }

    const [header, setHeader] = React.useState<JSX.Element[]>(() => getHeader())
    const headerInit = React.useRef<boolean>(false)
    const [list, setList] = React.useState<JSX.Element[]>(() => getList())
    const listInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!headerInit.current)
            headerInit.current = true
        else
            setHeader(getHeader())
    }, [lang, weekStartDay])

    React.useEffect(() => {
        if(!listInit.current)
            listInit.current = true
        else
            setList(getList())
    }, [valueObject, date])

    /**
     * Sets value.
     * 
     * @param day
     * @param month 
     * @param year 
     */
    const setValue$ = (day:number, month:number, year:number) => {
        if(year >= MIN_YEAR && year <= MAX_YEAR)
            setValue({day,month,year}, null)
    }

    return (
        <div>
            <DateList>{header}</DateList>
            {list}
        </div>
    )
}

export default DateWeek