import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import mouseClickEvents from '@smart-react-components/core/element-props/mouse-click-events'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { Position } from '../types'
import { extractIconsOutOfChildren } from '../util/props'
import BadgeElement, { Content } from './BadgeElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents,
  IntrinsicStyledProps {
  children: ContentElement | ContentElement[]
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
  const getContent = () => extractIconsOutOfChildren(props.children, Content, {
    isOutline: props.isOutline,
    isSoft: props.isSoft,
    palette: props.palette,
    shape: props.shape,
  })

  const [{ children, hasIconLeft, hasIconRight }, setContent] = React.useState(() => getContent())

  useChangeEffect(() => {
    setContent(getContent())
  }, [props.children, props.isSoft, props.palette, props.size, props.sizeSm, props.sizeMd, props.sizeLg, props.sizeXl])

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
    >
      {children}
    </BadgeElement>
  )
}

Badge.defaultProps = {
  offset: 10,
  palette: 'primary',
  position: Position.RIGHT,
  shape: 'rectangle',
  size: 'medium',
}

export default Badge
