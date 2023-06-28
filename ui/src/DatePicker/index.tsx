import Section from '@smart-react-components/core/Element/Section'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { JSXElementProps, PaletteProp, SetState, SizeProps } from '@smart-react-components/core/types'
import CSSTransitionSwitch from '@smart-react-components/transition/CSSTransitionSwitch'
import React from 'react'
import DatePickerButtons from '../components/DatePicker/DatePickerButtons'
import DatePickerElement from '../components/DatePicker/DatePickerElement'
import DatePickerHeader from '../components/DatePicker/DatePickerHeader'
import DatePickerDatePicker from '../components/DatePicker/DatePicker'
import TimePicker from '../components/DatePicker/TimePicker'
import { DatePickerSelectedDatePicker, DatePickerSelectedPicker, DatePickerTimeType, DatePickerType } from '../constants/date-picker'
import { applyResponsiveStyledProp, applyResponsiveStyledProps } from '../util/props'

export { DatePickerType, DatePickerTimeType } from '../constants/date-picker'

export interface Props extends IntrinsicStyledProps, SizeProps {
  elementProps?: JSXElementProps
  hasButtons?: boolean
  hasCloseIcon?: boolean
  isSoft?: boolean
  onCancel?: (e: Event) => void
  onClose?: (e: Event) => void
  onSave?: (e: Event) => void
  palette?: PaletteProp
  pickerType?: DatePickerType
  timeType?: DatePickerTimeType
  setValue: SetState<Date>
  value: Date
}

const DatePicker: React.FC<Props> = props => {
  const [selectedPicker, setSelectedPicker] = React.useState<DatePickerSelectedPicker>(props.pickerType !== DatePickerType.TIME ? DatePickerSelectedPicker.DATE : DatePickerSelectedPicker.TIME)
  const [selectedDate, setSelectedDate] = React.useState<Date>(props.value ?? new Date())
  const [selectedDatePicker, setSelectedDatePicker] = React.useState<DatePickerSelectedDatePicker>(DatePickerSelectedDatePicker.WEEK)

  return (
    <DatePickerElement
      {...props.elementProps}
      {...extractElementProps(props, [intrinsicStyledProps])}
      {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v)}
    >
      <DatePickerHeader
        {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
        hasCloseIcon={props.hasCloseIcon}
        isSoft={props.isSoft}
        palette={props.palette}
        pickerType={props.pickerType}
        onClose={props.onClose}
        selectedPicker={selectedPicker}
        setSelectedPicker={setSelectedPicker}
        value={props.value}
      />
      <Section
        {...applyResponsiveStyledProps(props, 'size', {
          paddingHorizontal: v => `$size.datePicker.${v}.space.y`,
        })}
        background="$color.dynamic.background"
        borderBottomRadius="$radius.datePicker"
      >
        <CSSTransitionSwitch
          active={selectedPicker}
          className="src-in"
          duration={150}
        >
          <DatePickerDatePicker
            key={DatePickerSelectedPicker.DATE}
            {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
            isSoft={props.isSoft}
            palette={props.palette}
            selectedDate={selectedDate}
            selectedPicker={selectedDatePicker}
            setSelectedDate={setSelectedDate}
            setSelectedPicker={setSelectedDatePicker}
            setValue={props.setValue}
            value={props.value}
          />
          <TimePicker
            key={DatePickerSelectedPicker.TIME}
            {...applyResponsiveStyledProp(props, 'size', 'size', v => v) as SizeProps}
            isSoft={props.isSoft}
            palette={props.palette}
            setValue={props.setValue}
            timeType={props.timeType}
            value={props.value}
          />
        </CSSTransitionSwitch>
        { props.hasButtons && (
          <DatePickerButtons
            isSoft={props.isSoft}
            palette={props.palette}
            onCancel={props.onCancel}
            onSave={props.onSave}
          />
        ) }
      </Section>
    </DatePickerElement>
  )
}

DatePicker.defaultProps = {
  palette: 'primary',
  pickerType: DatePickerType.DATE_TIME,
  size: 'medium',
  timeType: DatePickerTimeType.T12,
}

export default DatePicker
