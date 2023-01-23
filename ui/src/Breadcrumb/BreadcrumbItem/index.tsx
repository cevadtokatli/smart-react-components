import A from '@smart-react-components/core/Element/A'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { ContentElement, JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import BreadcrumbItemElement from './BreadcrumbItemElement'
import WaveEffect from '../../WaveEffect'

export interface Props extends ClickEvents {
  children: ContentElement
  elementProps?: JSXElementProps
  href?: string
  isActive?: boolean
  isDisabled?: boolean
}

export interface PrivateProps {
  hasWaveEffect: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  separator: string
  shape: ShapeProp
  waveEffectPalette: PaletteProp
}

const BreadcrumbItem: React.FC<Props> = (props: Props & PrivateProps) => {
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
    <BreadcrumbItemElement
      isActive={props.isActive}
      isDisabled={props.isDisabled}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      separator={props.separator}
      shape={props.shape}
    >
      {El}
    </BreadcrumbItemElement>
  )
}

export default BreadcrumbItem
