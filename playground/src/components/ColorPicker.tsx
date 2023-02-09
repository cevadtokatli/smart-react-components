import { Div } from '@smart-react-components/core'
import { InputColorPicker } from '@smart-react-components/ui'
import ColorPicker, { ColorPickerFormat } from '@smart-react-components/ui/ColorPicker'
import React from 'react'
import styled from 'styled-components'

export const ColorPickerC = () => {
  const [value, setValue] = React.useState('red')

  return (
    <>
      <ColorPicker
        format={ColorPickerFormat.RGB}
        setValue={setValue}
        value={value}
      />
      <InputColorPicker
        setValue={setValue}
        value={value}
      />
    </>
  )
}
