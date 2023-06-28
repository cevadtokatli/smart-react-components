import { PaletteProp, ResponsiveProp, SetState, SizeProp, SizeProps } from '@smart-react-components/core/types'
import React from 'react'
import { DatePickerTimeType } from '../../../constants/date-picker'
import { applyResponsiveStyledProp } from '../../../util/props'
import TimePickerArrowItem from './TimePickerArrowItem'
import TimePickerElement from './TimePickerElement'
import TimePickerInput from './TimePickerInput'

export interface Props extends SizeProps {
  isSoft: boolean
  palette: PaletteProp
  setValue: SetState<Date>
  timeType: DatePickerTimeType
  value: Date
}

const TimePicker: React.FC<Props> = props => {
  const changeMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(props.value)
    const minutes = Number(e.target.value)

    date.setMinutes(minutes)
    props.setValue(date)
  }

  const changeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(props.value)
    const hours = Number(e.target.value)

    if (props.timeType === DatePickerTimeType.T12) {
      if (date.getHours() < 12) {
        date.setHours(hours === 12 ? 0 : hours)
      } else {
        date.setHours(hours === 12 ? 12 : hours + 12)
      }
    } else {
      date.setHours(hours)
    }

    props.setValue(date)
  }

  const changePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(props.value)
    const period = e.target.value

    if (period === 'AM' && props.value.getHours() > 12) {
      date.setHours(date.getHours() - 12)
    } else if (period === 'PM' && props.value.getHours() < 12) {
      date.setHours(date.getHours() + 12)
    }

    props.setValue(date)
  }

  const decreaseHour = () => {
    const date = new Date(props.value)

    if (date.getHours() === 0) {
      date.setHours(23)
    } else {
      date.setHours(date.getHours() - 1)
    }

    props.setValue(date)
  }

  const decreaseMinute = () => {
    const date = new Date(props.value)

    if (date.getMinutes() === 0) {
      date.setMinutes(59)
    } else {
      date.setMinutes(date.getMinutes() - 1)
    }

    props.setValue(date)
  }
  
  const getHours = () => {
    if (props.timeType === DatePickerTimeType.T12) {
      const hours = props.value.getHours()

      if (hours === 0) {
        return 12
      } else if (hours > 12) {
        return hours - 12
      }

      return hours
    }

    return props.value.getHours()
  }

  const getPeriod = () => props.value.getHours() < 12 ? 'AM' : 'PM'

  const increaseHour = () => {
    const date = new Date(props.value)

    if (date.getHours() === 23) {
      date.setHours(1)
    } else {
      date.setHours(date.getHours() + 1)
    }

    props.setValue(date)
  }

  const increaseMinute = () => {
    const date = new Date(props.value)

    if (date.getMinutes() === 59) {
      date.setMinutes(0)
    } else {
      date.setMinutes(date.getMinutes() + 1)
    }

    props.setValue(date)
  }

  const togglePeriod = () => {
    const date = new Date(props.value)

    if (date.getHours() < 12) {
      date.setHours(date.getHours() + 12)
    } else {
      date.setHours(date.getHours() - 12)
    }

    props.setValue(date)
  }

  return (
    <TimePickerElement
      {...applyResponsiveStyledProp(props, 'size', 'datePickerSize', v => v) as ResponsiveProp<'datePickerSize', SizeProp>}
      isSoft={props.isSoft}
      palette={props.palette}
    >
      <div>
        <TimePickerArrowItem isUp onClick={decreaseHour} />
        <TimePickerArrowItem isUp onClick={decreaseMinute} />
        { props.timeType === DatePickerTimeType.T12 && (
          <TimePickerArrowItem isUp onClick={togglePeriod} />
        ) }
      </div>
      <div>
        <TimePickerInput
          onChange={changeHour}
          onDecrease={decreaseHour}
          onIncrease={increaseHour}
          value={String(getHours())}
        />
        <TimePickerInput
          onChange={changeMinute}
          onDecrease={decreaseMinute}
          onIncrease={increaseMinute}
          value={String(props.value.getMinutes())}
        />
        { props.timeType === DatePickerTimeType.T12 && (
          <TimePickerInput
            onChange={changePeriod}
            onDecrease={togglePeriod}
            onIncrease={togglePeriod}
            value={getPeriod()}
          />
        ) }
      </div>
      <div>
        <TimePickerArrowItem isUp={false} onClick={increaseHour} />
        <TimePickerArrowItem isUp={false} onClick={increaseMinute} />
        { props.timeType === DatePickerTimeType.T12 && (
          <TimePickerArrowItem isUp={false} onClick={togglePeriod} />
        ) }
      </div>
    </TimePickerElement>
  )
}

export default TimePicker
