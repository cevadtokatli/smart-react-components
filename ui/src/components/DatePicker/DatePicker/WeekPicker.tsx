import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp, ResponsiveProp, SetState, SizeProp, SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import { DatePickerSelectedDatePicker } from '../../../constants/date-picker'
import { getDayCount } from '../../../util/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import DatePickerWeekItemElement from './DatePickerWeekItemElement'
import DatePickerWeekListElement from './DatePickerWeekListElement'

export interface Props extends SizeProps {
  palette: PaletteProp
  isSoft: boolean
  selectedDate: Date
  selectedPicker: DatePickerSelectedDatePicker
  setValue: SetState<Date>
  value: Date
}

const WeekPicker: React.FC<Props> = props => {
  const theme = useTheme() as Theme

  const [children, setChildren] = React.useState<JSX.Element[]>([])

  React.useEffect(() => {
    if (props.selectedPicker === DatePickerSelectedDatePicker.WEEK) {
      const list = Array(7).fill(null).map((_, idx) => React.createElement(DatePickerWeekListElement, { key: idx, children: [] }))

      for (let i = 1; i <= 7; i++) {
        list[0].props.children.push(
          <DatePickerWeekItemElement
            key={i}
            {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp>}
            isActive={false}
            isNotCurrentDate
            isSoft={props.isSoft}
            palette={props.palette}
          >
            { theme.$.i18n.days[i % 7].acroynm2 }
          </DatePickerWeekItemElement>,
        )
      }

      const date = props.selectedDate
      const prevDate = new Date(date)
      prevDate.setMonth(prevDate.getMonth() - 1)
      const nextDate = new Date(date)
      nextDate.setMonth(nextDate.getMonth() + 1)

      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
      const prevDayLimit = [1, 2, 3, 4, 5, 6, 0].indexOf(firstDayOfMonth)
      const monthDayCount = getDayCount(date)
      const prevMonthDayCount = getDayCount(prevDate)

      let idx = 1
      let prevMonthDay = (prevMonthDayCount - prevDayLimit) + 1
      let monthDay = 1
      let nextMonthDay = 1

      for (let i = 0; i < 42; i++) {
        let date: Date
        let isNotCurrentDate: boolean

        if (prevMonthDay <= prevMonthDayCount) {
          date = new Date(prevDate)
          date.setDate(prevMonthDay)
          isNotCurrentDate = true
          prevMonthDay++
        } else if (monthDay <= monthDayCount) {
          date = new Date(props.selectedDate)
          date.setDate(monthDay)
          isNotCurrentDate = false
          monthDay++
        } else {
          date = new Date(nextDate)
          date.setDate(nextMonthDay)
          isNotCurrentDate = true
          nextMonthDay++
        }

        const isActive = date.toDateString() === props.value?.toDateString()

        list[idx].props.children.push(
          <DatePickerWeekItemElement
            key={i}
            {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp>}
            isActive={isActive}
            isNotCurrentDate={isNotCurrentDate}
            isSoft={props.isSoft}
            palette={props.palette}
            onClick={() => props.setValue(date)}
          >
            { date.getDate() }
          </DatePickerWeekItemElement>,
        )

        if (i % 7 === 6) {
          idx++
        }
      }

      setChildren(list)
    }
  }, [props.selectedDate, props.value])

  return (
    <div>
      { children }
    </div>
  )
}

export default WeekPicker
