import { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { ContentElement, JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'

export interface ButtonGenericProps<T extends ContentElement> extends
  IntrinsicStyledCoreProps,
  Partial<ResponsiveProp<'size', SizeProp>> {
  children: T | T[]
  elementProps?: JSXElementProps
  hasHover?: boolean
  hasSpace?: boolean
  hasWaveEffect?: boolean
  isActive?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isFixedSize?: boolean
  isLink?: boolean
  isLoading?: boolean
  isSoft?: boolean
  isOutline?: boolean
  leftAddon?: JSX.Element
  loading?: JSX.Element
  palette?: PaletteProp
  rightAddon?: JSX.Element
  shape?: ShapeProp
  waveEffectPalette?: PaletteProp
}

export interface ButtonListGenericProps extends
  IntrinsicStyledCoreProps,
  Partial<ResponsiveProp<'size', SizeProp>> {
  children: JSX.Element[]
  elementProps?: JSXElementProps
  hasHover?: boolean
  hasWaveEffect?: boolean
  isBlock?: boolean
  isFixedSize?: boolean
  isLink?: boolean
  isSoft?: boolean
  isOutline?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
  waveEffectPalette?: PaletteProp
}

export enum ButtonType {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}
