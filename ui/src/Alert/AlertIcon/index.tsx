import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import AlertIconElement from './AlertIconElement'

export interface Props extends ClickEvents {
  children: JSX.Element
  hasBackground?: boolean
  hasHover?: boolean
  palette?: PaletteProp
}

interface PrivateProps extends ResponsiveProp<'size', SizeProp> {
  alertPalette: PaletteProp
  isSoft: boolean
}

const AlertIcon: React.FC<Props> = (props: Props & PrivateProps) => (
  <AlertIconElement
    alertPalette={props.alertPalette}
    alertIconSize={props.size}
    alertIconSizeSm={props.sizeSm}
    alertIconSizeMd={props.sizeMd}
    alertIconSizeLg={props.sizeLg}
    alertIconSizeXl={props.sizeXl}
    hasBackground={props.hasBackground}
    hasHover={props.hasHover}
    isSoft={props.isSoft}
    palette={props.palette ?? props.alertPalette}
    {...extractElementProps(props, [clickEvents])}
  >{props.children}</AlertIconElement>
)

AlertIcon.displayName = 'SRCIcon'

export default AlertIcon
