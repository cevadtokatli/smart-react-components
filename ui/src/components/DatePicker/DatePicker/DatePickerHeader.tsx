import { Theme } from '@smart-react-components/core/theme'
import { ResponsiveProp, SizeProps, SizeProp, SetState, PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import { DatePickerSelectedDatePicker } from '../../../constants/date-picker'
import ArrowDownIcon from '../../../icons/ArrowDown'
import { getDecade } from '../../../util/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import DatePickerHeaderElement from './DatePickerHeaderElement'

export interface Props extends SizeProps {
  isSoft: boolean
  palette: PaletteProp
  selectedDate: Date
  selectedPicker: DatePickerSelectedDatePicker
  setSelectedDate: SetState<Date>
  setSelectedPicker: SetState<DatePickerSelectedDatePicker>
  value: Date
}

const DatePickerHeader: React.FC<Props> = props => {
  const theme = useTheme() as Theme

  const value = React.useMemo(() => {
    if (props.selectedPicker === DatePickerSelectedDatePicker.WEEK) {
      return `${theme.$.i18n.months[props.value.getMonth()].name} ${props.value.getFullYear()}`
    }

    if (props.selectedPicker === DatePickerSelectedDatePicker.MONTH) {
      return props.value.getFullYear()
    }

    const decadeStart = getDecade(props.value)
    return `${decadeStart} - ${decadeStart + 9}`
  }, [props.selectedPicker, props.value])

  const changeSelectedPicker = () => {
    switch (props.selectedPicker) {
      case DatePickerSelectedDatePicker.WEEK:
        props.setSelectedPicker(DatePickerSelectedDatePicker.MONTH)
        break
      case DatePickerSelectedDatePicker.MONTH:
        props.setSelectedPicker(DatePickerSelectedDatePicker.YEAR)
        break
    }
  }

  const decreaseValue = () => {
    switch (props.selectedPicker) {
      case DatePickerSelectedDatePicker.WEEK:
        props.setSelectedDate(new Date(props.value.getFullYear(), props.value.getMonth() - 1, 1))
        break
      case DatePickerSelectedDatePicker.MONTH:
        props.setSelectedDate(new Date(props.value.getFullYear() - 1, props.value.getMonth(), 1))
        break
      case DatePickerSelectedDatePicker.YEAR:
        props.setSelectedDate(new Date(props.value.getFullYear() - 10, props.value.getMonth(), 1))
        break
    }
  }

  const increaseValue = () => {
    switch (props.selectedPicker) {
      case DatePickerSelectedDatePicker.WEEK:
        props.setSelectedDate(new Date(props.value.getFullYear(), props.value.getMonth() + 1, 1))
        break
      case DatePickerSelectedDatePicker.MONTH:
        props.setSelectedDate(new Date(props.value.getFullYear() + 1, props.value.getMonth(), 1))
        break
      case DatePickerSelectedDatePicker.YEAR:
        props.setSelectedDate(new Date(props.value.getFullYear() + 10, props.value.getMonth(), 1))
        break
    }
  }

  return (
    <DatePickerHeaderElement
      isSoft={props.isSoft}
      palette={props.palette}
      {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp>}
    >
      <div onClick={changeSelectedPicker}>{ value }</div>
      <div>
        <div>
          <ArrowDownIcon
            onClick={decreaseValue}
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </div>
        <div>
          <ArrowDownIcon onClick={increaseValue} />
        </div>
      </div>
    </DatePickerHeaderElement>
  )
}

export default DatePickerHeader
