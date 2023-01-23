import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import BreadcrumbListElement from './BreadcrumbListElement'

export interface Props extends IntrinsicStyledProps {
  children: JSX.Element[]
  elementProps?: JSXElementProps
  hasWaveEffect?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  separator?: string
  shape?: ShapeProp
  waveEffectPalette?: PaletteProp
}

const BreadcrumbList: React.FC<Props> = props => (
  <BreadcrumbListElement
    isOutline={props.isOutline}
    isSoft={props.isSoft}
    palette={props.palette}
    shape={props.shape}
    {...extractElementProps(props, [intrinsicStyledProps])}
    {...props.elementProps}
  >
    { props.children.map((item, idx) => React.cloneElement(item, {
      key: item.key ?? idx,
      hasWaveEffect: props.hasWaveEffect,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      waveEffectPalette: props.waveEffectPalette,
    })) }
  </BreadcrumbListElement>
)

BreadcrumbList.defaultProps = {
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
  waveEffectPalette: 'light',
}

export default BreadcrumbList
