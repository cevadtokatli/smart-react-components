import { Div } from '@smart-react-components/core'
import { DatePicker, InputDatePicker } from '@smart-react-components/ui'
import { DatePickerTimeType } from '@smart-react-components/ui/DatePicker'
import React from 'react'

export const Palette = () => {
  const [value, setValue] = React.useState<Date>(new Date())

  return (
    <Div display="inline-block">
      <DatePicker
        setValue={setValue}
        value={value}
      />
      <InputDatePicker
        setValue={setValue}
        value={value}
      />
    </Div>
  )
}
