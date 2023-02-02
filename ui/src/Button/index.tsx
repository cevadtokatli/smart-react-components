import { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { ContentElement, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { ButtonType } from '../types'

export interface Props extends
  ResponsiveProp<'size', SizeProp>,
  IntrinsicStyledProps,
  ClickEvents {
  as?: string
  children: ContentElement
  hasHover?: boolean
  hasLoading?: boolean
  hasWaveEffect?: boolean
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
  type?: ButtonType
  waveEffectPalette?: PaletteProp
}

const Button = React.forwardRef<HTMLElement, Props>((props, forwardRef) => {
  return null
})

Button.defaultProps = {
  hasHover: true,
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  type: ButtonType.BUTTON,
  waveEffectPalette: 'light',
}

export default Button
