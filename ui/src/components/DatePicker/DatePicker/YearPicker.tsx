import { PaletteProp, ResponsiveProp, SetState, SizeProp, SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import { DatePickerSelectedDatePicker } from '../../../constants/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import DatePickerListElement from './DatePickerListElement'
import DatePickerItemElement from './DatePickerItemElement'
import { getDecade } from '../../../util/date-picker'

export interface Props extends SizeProps {
  palette: PaletteProp
  isSoft: boolean
  selectedDate: Date
  selectedPicker: DatePickerSelectedDatePicker
  setSelectedDate: SetState<Date>
  setSelectedPicker: SetState<DatePickerSelectedDatePicker>
  value: Date
}

const YearPicker: React.FC<Props> = props => {
  const [children, setChildren] = React.useState<JSX.Element[]>([])

  const handleChange = date => {
    props.setSelectedPicker(DatePickerSelectedDatePicker.MONTH)
    props.setSelectedDate(date)
  }

  React.useEffect(() => {
    if (props.selectedPicker === DatePickerSelectedDatePicker.YEAR) {
      const children = []
      let decadeStart = getDecade(props.selectedDate)
      const decadeEnd = decadeStart + 9

      for (let i = 0; i < 4; i++) {
        const list = []

        for (let j = 0; j < 4; j++) {
          const date = new Date(props.selectedDate)
          date.setFullYear(decadeStart)
          decadeStart++
          const isActive = date.getFullYear() === props.value?.getFullYear()
          const isNotCurrentDate = date.getFullYear() > decadeEnd

          list.push(
            <DatePickerItemElement
              key={j}
              {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp>}
              isActive={isActive}
              isNotCurrentDate={isNotCurrentDate}
              isSoft={props.isSoft}
              palette={props.palette}
              onClick={() => handleChange(date)}
            >
              { date.getFullYear() }
            </DatePickerItemElement>,
          )
        }

        children.push(
          <DatePickerListElement key={i}>{ list }</DatePickerListElement>,
        )
      }

      setChildren(children)
    }
  }, [props.selectedPicker, props.selectedDate, props.value])

  return (
    <div>
      { children }
    </div>
  )
}

export default YearPicker
