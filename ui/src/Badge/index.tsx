import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import mouseClickEvents from '@smart-react-components/core/element-props/mouse-click-events'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition, Position } from '../types'
import BadgeElement, { Content } from './BadgeElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents,
  IntrinsicStyledProps {
  children: ContentElement | ContentElement[]
  elementProps?: JSXElementProps
  hasSpace?: boolean
  isAbsolute?: boolean
  isFixedSize?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  position?: Position
  offset?: number
  shape?: ShapeProp
}

const Badge: React.FC<Props> = props => {
  const getContent = () => {
    const children = !Array.isArray(props.children) ? [props.children] : props.children
    const content = []
    let iconLeft = null
    let iconRight = null

    for (let i = 0; i < children.length; i++) {
      const item = children[i] as JSX.Element
      if (item.type?.displayName === 'SRCBadgeIcon') {
        const iconEl = React.cloneElement(item, {
          isOutline: props.isOutline,
          isSoft: props.isSoft,
          palette: props.palette,
          position: i === 0 ? OrderPosition.LEFT : OrderPosition.RIGHT,
          shape: props.shape,
        })

        if (i === 0) {
          iconLeft = iconEl
        } else if (i === children.length - 1) {
          iconRight = iconEl
        }

        continue
      }

      content.push(typeof children[i] === 'string' ? children[i] : React.cloneElement(item, { key: item.key ?? i }))
    }

    return {
      children: (
        <>
          { iconLeft && iconLeft }
          <Content>{content}</Content>
          { iconRight && iconRight }
        </>
      ),
      hasIconLeft: !!iconLeft,
      hasIconRight: !!iconRight,
    }
  }

  const [{ children, hasIconLeft, hasIconRight }, setContent] = React.useState(() => getContent())

  useChangeEffect(() => {
    setContent(getContent())
  }, [props.children])

  return (
    <BadgeElement
      badgeOffset={props.offset}
      badgePosition={props.position}
      badgeSize={props.size}
      badgeSizeSm={props.sizeSm}
      badgeSizeMd={props.sizeMd}
      badgeSizeLg={props.sizeLg}
      badgeSizeXl={props.sizeXl}
      hasIconLeft={hasIconLeft}
      hasIconRight={hasIconRight}
      hasSpace={props.hasSpace ?? !props.isAbsolute}
      isAbsolute={props.isAbsolute}
      isClickable={!!mouseClickEvents.find(i => props[i])}
      isFixedSize={props.isFixedSize}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...extractElementProps(props, [clickEvents, intrinsicStyledProps])}
      {...props.elementProps}
    >
      {children}
    </BadgeElement>
  )
}

Badge.defaultProps = {
  elementProps: {},
  offset: 10,
  palette: 'primary',
  position: Position.RIGHT,
  shape: 'rectangle',
  size: 'medium',
}

export default Badge
