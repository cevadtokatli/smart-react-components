import { Color, Nullable, PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import { createContext } from 'react'

export interface Props extends ResponsiveProp<'colorPickerSize', SizeProp> {
  isDisabled: boolean
  palette: PaletteProp
  updateValue: (color: Nullable<string | Color>) => void
  value: Color
}

export default createContext<Props>(null)
