import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp, ResponsiveProp, SetState, SizeProp, SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import { DatePickerSelectedDatePicker } from '../../../constants/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import DatePickerListElement from './DatePickerListElement'
import DatePickerItemElement from './DatePickerItemElement'

export interface Props extends SizeProps {
  palette: PaletteProp
  isSoft: boolean
  selectedDate: Date
  selectedPicker: DatePickerSelectedDatePicker
  setSelectedDate: SetState<Date>
  setSelectedPicker: SetState<DatePickerSelectedDatePicker>
  value: Date
}

const MonthPicker: React.FC<Props> = props => {
  const theme = useTheme() as Theme

  const [children, setChildren] = React.useState<JSX.Element[]>([])

  const handleChange = date => {
    props.setSelectedPicker(DatePickerSelectedDatePicker.WEEK)
    props.setSelectedDate(date)
  }

  React.useEffect(() => {
    if (props.selectedPicker === DatePickerSelectedDatePicker.MONTH) {
      const children = []

      for (let i = 0; i < 4; i++) {
        const list = []

        for (let j = 0; j < 4; j++) {
          const date = new Date(props.selectedDate)
          date.setDate(1)
          date.setMonth(((i * 4) + j) % 11)
          date.setFullYear(date.getFullYear() + (i === 3 ? 1 : 0))
          const isActive = date.getMonth() === props.value?.getMonth() && date.getFullYear() === props.value?.getFullYear()
          const isNotCurrentDate = date.getFullYear() !== props.selectedDate.getFullYear()

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
              { theme.$.i18n.months[((i * 4) + j) % 11].acroynm3 }
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

export default MonthPicker
