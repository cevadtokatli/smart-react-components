import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import mouseClickEvents from '@smart-react-components/core/element-props/mouse-click-events'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'
import BadgeIconElement from '../components/Badge/BadgeIconElement'

export interface Props extends ClickEvents {
  children: JSX.Element
}

interface PrivateProps {
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  position: OrderPosition
  shape: ShapeProp
}

const BadgeIcon: React.FC<Props> = (props: Props & PrivateProps) => (
  <BadgeIconElement
    {...extractElementProps(props, [clickEvents])}
    iconPosition={props.position}
    isClickable={!!mouseClickEvents.find(i => props[i])}
    isOutline={props.isOutline}
    isSoft={props.isSoft}
    palette={props.palette}
    shape={props.shape}
  >{props.children}</BadgeIconElement>
)

BadgeIcon.displayName = 'SRCBadgeIcon'

export default BadgeIcon
