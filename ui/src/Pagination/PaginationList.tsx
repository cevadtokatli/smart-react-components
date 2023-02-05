import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import PaginationListElement from '../components/Pagination/PaginationListElement'

export interface Props extends IntrinsicStyledProps {
  children: JSX.Element[]
  elementProps?: JSXElementProps
  hasWaveEffect?: boolean
  isFixedSize?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
  waveEffectPalette?: PaletteProp
}

const PaginationList: React.FC<Props> = props => (
  <PaginationListElement
    {...extractElementProps(props, [intrinsicStyledProps])}
    {...props.elementProps}
  >
    { props.children.map((item, idx) => React.cloneElement(item, {
      key: item.key ?? idx,
      hasWaveEffect: props.hasWaveEffect,
      isFixedSize: props.isFixedSize,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      waveEffectPalette: props.waveEffectPalette,
    })) }
  </PaginationListElement>
)

PaginationList.defaultProps = {
  hasWaveEffect: true,
  palette: 'primary',
  shape: 'rectangle',
  waveEffectPalette: 'light',
}

export default PaginationList
