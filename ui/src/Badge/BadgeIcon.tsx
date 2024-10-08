import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { JSXElementProps, PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'
import BadgeIconElement from '../components/Badge/BadgeIconElement'
import { isItemClickable } from '../util/props'

export interface Props extends ClickEvents {
  children: JSX.Element
  elementProps?: JSXElementProps
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
    {...props.elementProps}
    iconPosition={props.position}
    isClickable={isItemClickable(props)}
    isOutline={props.isOutline}
    isSoft={props.isSoft}
    palette={props.palette}
    shape={props.shape}
  >{props.children}</BadgeIconElement>
)

BadgeIcon.defaultProps = {
  elementProps: {},
}

BadgeIcon.displayName = 'SRCBadgeIcon'

export default BadgeIcon
