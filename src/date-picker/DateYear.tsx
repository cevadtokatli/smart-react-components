import React from "react"
import {SelectedDateObject, Language} from "../types/date-picker"
import DateList from "./DateList"
import DateItem from "./DateItem"
import {MIN_YEAR, MAX_YEAR} from "../constants/date-picker/limit"
import * as DPT from "../constants/date-picker/date-picker-type"

interface Props {
    date: SelectedDateObject
    setDate: React.Dispatch<React.SetStateAction<SelectedDateObject>>
    setSelectedDatePicker: React.Dispatch<React.SetStateAction<number>>
    lang: Language
}

const DateYear: React.FC<Props> = ({date,setDate,setSelectedDatePicker,lang}) => {
    const getList = () => {
        const result = Array(4).fill(null).map((item,index) => React.createElement(DateList, {key:index,children:[]}))
        let index = 0

        for(let i=0; i<16; i++) {
            const month = i < 12 ? i : i-12
            const year = i < 12 ? date.year : date.year+1
            const isInactive = year != date.year
            const isActive = date.selectedMonth.month == month && date.selectedMonth.year == year
            result[index].props.children.push(<DateItem className="src-date-picker-date-item" key={i} inactive={isInactive} active={isActive} onClick={() => setValue(month, year)}>{lang.months[month].substr(0, 3)}</DateItem>)
            if(i % 4 == 3)
                index++
        }

        return result
    }

    const [list, setList] = React.useState<JSX.Element[]>(() => getList())
    const listInit = React.useRef<boolean>(false)

    React.useEffect(() => {
        if(!listInit.current)
            listInit.current = true
        else
            setList(getList())
    }, [date, lang])

    /**
     * Sets date.
     * 
     * @param month
     * @param year
     */
    const setValue = (month:number, year:number) => {
        if(year >= MIN_YEAR && year <= MAX_YEAR) {
            setSelectedDatePicker(DPT.WEEK)
            setDate({...date,month,year,selectedMonth:{month,year}})
        }
    }

    return (
        <div>{list}</div>
    )
}

export default DateYear