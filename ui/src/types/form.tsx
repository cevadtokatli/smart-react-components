import { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import { FormValue } from '../types'

export interface GenericProps extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  active: FormValue | FormValue[]
  children: JSX.Element | JSX.Element[]
  hasBorder?: boolean
  hasHover?: boolean
  hasWaveEffect?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  isOutline?: boolean
  isSoft?: boolean
  label?: ContentElement
  leftAddon?: ContentElement
  palette?: PaletteProp
  rightAddon?: ContentElement
  shape?: ShapeProp
  setActive: SetState<FormValue | FormValue[]>
  waveEffectPalette?: PaletteProp
}
