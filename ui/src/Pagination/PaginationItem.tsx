import A from '@smart-react-components/core/Element/A'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { ContentElement, JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import PaginationItemElement from '../components/Pagination/PaginationItemElement'
import WaveEffect from '../WaveEffect'

export interface Props extends ClickEvents {
  children: ContentElement
  elementProps?: JSXElementProps
  href?: string
  isActive?: boolean
  isDisabled?: boolean
}

export interface PrivateProps {
  hasWaveEffect: boolean
  isFixedSize: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
  waveEffectPalette: PaletteProp
}

const PaginationItem: React.FC<Props> = (props: Props & PrivateProps) => {
  const AnchorEl = (
    <A
      {...extractElementProps(props, [clickEvents])}
      {...props.elementProps}
    >
      {props.children}
    </A>
  )
  const El = props.hasWaveEffect ? <WaveEffect palette={props.waveEffectPalette}>{AnchorEl}</WaveEffect> : AnchorEl

  return (
    <PaginationItemElement
      isActive={props.isActive}
      isDisabled={props.isDisabled}
      isFixedSize={props.isFixedSize}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
    >
      {El}
    </PaginationItemElement>
  )
}

export default PaginationItem
