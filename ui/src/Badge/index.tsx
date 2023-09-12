import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import intrinsicStyledPositionProps, { IntrinsicStyledPositionProps } from '@smart-react-components/core/element-props/intrinsic-styled-position-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps, PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'
import BadgeElement, { Content } from '../components/Badge/BadgeElement'
import { isItemClickable } from '../util/props'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents,
  IntrinsicStyledCoreProps,
  IntrinsicStyledPositionProps {
  children: ContentElement | ContentElement[]
  elementProps?: JSXElementProps
  hasSpace?: boolean
  isFixedSize?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
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
      badgeSize={props.size}
      badgeSizeSm={props.sizeSm}
      badgeSizeMd={props.sizeMd}
      badgeSizeLg={props.sizeLg}
      badgeSizeXl={props.sizeXl}
      hasIconLeft={hasIconLeft}
      hasIconRight={hasIconRight}
      hasSpace={props.hasSpace}
      isClickable={isItemClickable(props)}
      isFixedSize={props.isFixedSize}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...extractElementProps(props, [clickEvents, intrinsicStyledCoreProps, intrinsicStyledPositionProps])}
      {...props.elementProps}
    >
      {children}
    </BadgeElement>
  )
}

Badge.defaultProps = {
  elementProps: {},
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default Badge
