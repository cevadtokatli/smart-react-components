import { Theme } from '@smart-react-components/core/theme'
import { PaletteProp, ResponsiveProp, SetState, SizeProp, SizeProps } from '@smart-react-components/core/types'
import CSSTransitionSwitch from '@smart-react-components/transition/CSSTransitionSwitch'
import React from 'react'
import { useTheme } from 'styled-components'
import { DatePickerSelectedPicker, DatePickerType } from '../../constants/date-picker'
import CloseIcon from '../../icons/Close'
import DateIcon from '../../icons/Date'
import TimeIcon from '../../icons/Time'
import { applyResponsiveStyledProp } from '../../util/props'
import DatePickerHeaderElement from './DatePickerHeaderElement'

export interface Props extends SizeProps {
  hasCloseIcon: boolean
  isSoft: boolean
  palette: PaletteProp
  pickerType: DatePickerType
  onClose: (e: Event) => void
  selectedPicker: DatePickerSelectedPicker
  setSelectedPicker: SetState<DatePickerSelectedPicker>
  value: Date
}

const DatePickerHeader: React.FC<Props> = props => {
  const theme = useTheme() as Theme

  const value = React.useMemo(() => {
    const date = props.value ?? new Date()
    const i18n = theme.$.i18n
    return `${i18n.days[date.getDay()].substring(0, 3)}, ${date.getDate()} ${i18n.months[props.value.getMonth()].substring(0, 3)} ${date.getFullYear()}`
  }, [props.value])

  return (
    <DatePickerHeaderElement
      {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp> }
      isSoft={props.isSoft}
      palette={props.palette}
    >
      <span>{ value }</span>
      <div>
        { props.pickerType === DatePickerType.DATE_TIME && (
          <div>
            <CSSTransitionSwitch
              active={String(props.selectedPicker)}
              className="src-fade"
              duration={150}
            >
              <DateIcon
                key={DatePickerSelectedPicker.TIME}
                onClick={() => props.setSelectedPicker(DatePickerSelectedPicker.DATE)}
              />
              <TimeIcon
                key={DatePickerSelectedPicker.DATE}
                onClick={() => props.setSelectedPicker(DatePickerSelectedPicker.TIME)}
              />
            </CSSTransitionSwitch>
          </div>
        )}
        { props.hasCloseIcon && (
          <div>
            <CloseIcon onClick={e => props.onClose?.(e as any)} />
          </div>
        )}
      </div>
    </DatePickerHeaderElement>
  )
}

export default DatePickerHeader
