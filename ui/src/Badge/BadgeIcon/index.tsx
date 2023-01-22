import { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import mouseClickEvents from '@smart-react-components/core/element-props/mouse-click-events'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../../types'
import BadgeIconElement from './BadgeIconElement'

export interface Props extends ClickEvents {
  children: JSX.Element
}

interface PrivateProps {
  iconPosition: OrderPosition
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}
const BadgeIcon: React.FC<Props> = (props: Props & PrivateProps) => (
  <BadgeIconElement
    iconPosition={props.iconPosition}
    isClickable={!!mouseClickEvents.find(i => props[i])}
    isOutline={props.isOutline}
    isSoft={props.isSoft}
    palette={props.palette}
    shape={props.shape}
  >{props.children}</BadgeIconElement>
)

BadgeIcon.displayName = 'SRCIcon'

export default BadgeIcon