import React from "react"
import {SelectedDateObject} from "../types/date-picker"
import DateList from "./DateList"
import DateItem from "./DateItem"
import {MIN_YEAR, MAX_YEAR} from "../constants/date-picker/limit"
import * as DPT from "../constants/date-picker/date-picker-type"

interface Props {
    date: SelectedDateObject
    setDate: React.Dispatch<React.SetStateAction<SelectedDateObject>>
    setSelectedDatePicker: React.Dispatch<React.SetStateAction<number>>
}

const DateDecade: React.FC<Props> = ({date,setDate,setSelectedDatePicker}) => {
    const getList = () => {
        const result = Array(4).fill(null).map((item,index) => React.createElement(DateList, {key:index,children:[]}))
        let index = 0

        for(let i=0; i<16; i++) {
            const year = date.decade[0] + i
            const isInactive = year >= date.decade[1]
            const isActive = year == date.year
            result[index].props.children.push(<DateItem className="src-date-picker-date-item" key={i} inactive={isInactive} active={isActive} onClick={() => setValue(year)}>{year}</DateItem>)
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
    }, [date])

    /**
     * Sets date.
     * 
     * @param year 
     */
    const setValue = (year:number) => {
        if(year >= MIN_YEAR && year <= MAX_YEAR) {
            setSelectedDatePicker(DPT.YEAR)
            setDate({...date,year})
        }
    }

    return <div>{list}</div>
}

export default DateDecade