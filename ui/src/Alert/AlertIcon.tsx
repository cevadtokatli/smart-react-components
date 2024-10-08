import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { JSXElementProps, PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import AlertIconElement from '../components/Alert/AlertIconElement'
import { OrderPosition } from '../types'
import { isItemClickable } from '../util/props'

export interface Props extends ClickEvents {
  children: JSX.Element
  elementProps?: JSXElementProps
  hasBackground?: boolean
  hasHover?: boolean
  palette?: PaletteProp
}

interface PrivateProps extends ResponsiveProp<'size', SizeProp> {
  alertPalette: PaletteProp
  isOutline: boolean
  isSoft: boolean
  position: OrderPosition
}

const AlertIcon: React.FC<Props> = (props: Props & PrivateProps) => (
  <AlertIconElement
    alertPalette={props.alertPalette ?? props.palette}
    alertIconSize={props.size}
    alertIconSizeSm={props.sizeSm}
    alertIconSizeMd={props.sizeMd}
    alertIconSizeLg={props.sizeLg}
    alertIconSizeXl={props.sizeXl}
    hasBackground={props.hasBackground}
    hasHover={props.hasHover}
    iconPosition={props.position}
    isClickable={isItemClickable(props)}
    isOutline={props.isOutline}
    isSoft={props.isSoft}
    palette={props.palette ?? props.alertPalette}
    {...extractElementProps(props, [clickEvents])}
    {...props.elementProps}
  >{props.children}</AlertIconElement>
)

AlertIcon.defaultProps = {
  elementProps: {},
  hasBackground: true,
}

AlertIcon.displayName = 'SRCAlertIcon'

export default AlertIcon
