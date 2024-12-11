import Section from '@smart-react-components/core/Element/Section'
import usePrevious from '@smart-react-components/core/hooks/usePrevious'
import { PaletteProp, SetState, SizeProps } from '@smart-react-components/core/types'
import CSSTransitionSwitch from '@smart-react-components/transition/CSSTransitionSwitch'
import React from 'react'
import { DatePickerSelectedDatePicker } from '../../../constants/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import DatePickerHeader from './DatePickerHeader'
import MonthPicker from './MonthPicker'
import WeekPicker from './WeekPicker'
import YearPicker from './YearPicker'

export interface Props extends SizeProps {
  isSoft: boolean
  palette: PaletteProp
  selectedDate: Date
  selectedPicker: DatePickerSelectedDatePicker
  setSelectedDate: SetState<Date>
  setSelectedPicker: SetState<DatePickerSelectedDatePicker>
  setValue: SetState<Date>
  value: Date
}

const DatePicker: React.FC<Props> = props => {
  const prevSelectedPicker = usePrevious(props.selectedPicker)

  return (
    <Section
      {...applyResponsiveStyledProp(props, 'size', 'height', v => `$size.datePicker.${v}.bodyHeight`)}
    >
      <DatePickerHeader
        {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
        isSoft={props.isSoft}
        palette={props.palette}
        selectedDate={props.selectedDate}
        selectedPicker={props.selectedPicker}
        setSelectedDate={props.setSelectedDate}
        setSelectedPicker={props.setSelectedPicker}
        value={props.selectedDate}
      />
      <CSSTransitionSwitch
        active={props.selectedPicker}
        className={(props.selectedPicker === DatePickerSelectedDatePicker.WEEK || (props.selectedPicker === DatePickerSelectedDatePicker.MONTH && prevSelectedPicker === DatePickerSelectedDatePicker.YEAR)) ? 'src-in-out' : 'src-out-in'}
        duration={150}
      >
        <WeekPicker
          key={DatePickerSelectedDatePicker.WEEK}
          {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
          isSoft={props.isSoft}
          palette={props.palette}
          selectedDate={props.selectedDate}
          selectedPicker={props.selectedPicker}
          setValue={props.setValue}
          value={props.value}
        />
        <MonthPicker
          key={DatePickerSelectedDatePicker.MONTH}
          {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
          isSoft={props.isSoft}
          palette={props.palette}
          selectedDate={props.selectedDate}
          selectedPicker={props.selectedPicker}
          setSelectedDate={props.setSelectedDate}
          setSelectedPicker={props.setSelectedPicker}
          value={props.value}
        />
        <YearPicker
          key={DatePickerSelectedDatePicker.YEAR}
          {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
          isSoft={props.isSoft}
          palette={props.palette}
          selectedDate={props.selectedDate}
          selectedPicker={props.selectedPicker}
          setSelectedDate={props.setSelectedDate}
          setSelectedPicker={props.setSelectedPicker}
          value={props.value}
        />
      </CSSTransitionSwitch>
    </Section>
  )
}

export default DatePicker
