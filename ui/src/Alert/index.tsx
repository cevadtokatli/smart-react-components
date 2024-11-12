import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { ContentElement, JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import AlertContent from '../components/Alert/AlertContent'
import AlertElement from '../components/Alert/AlertElement'
import { OrderPosition } from '../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents,
  IntrinsicStyledCoreProps {
  children: ContentElement | ContentElement[]
  elementProps?: JSXElementProps
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

const Alert: React.FC<Props> = props => {
  const { children, hasIconLeft, hasIconRight, hasThickBorder } = React.useMemo(() => {
    const children = !Array.isArray(props.children) ? [props.children] : props.children
    const content = []
    let iconLeft = null
    let iconRight = null

    for (let i = 0; i < children.length; i++) {
      const item = children[i] as JSX.Element

      if (!item) {
        continue
      }

      if (item.type?.displayName === 'SRCAlertIcon') {
        const iconEl = React.cloneElement(item, {
          alertPalette: props.palette,
          isOutline: props.isOutline,
          isSoft: props.isSoft,
          position: i === 0 ? OrderPosition.LEFT : OrderPosition.RIGHT,
          size: props.size,
          sizeSm: props.sizeSm,
          sizeMd: props.sizeMd,
          sizeLg: props.sizeLg,
          sizeXl: props.sizeXl,
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
          <AlertContent>{content}</AlertContent>
          { iconRight && iconRight }
        </>
      ),
      hasIconLeft: !!iconLeft,
      hasIconRight: !!iconRight,
      hasThickBorder: !(iconLeft && (iconLeft.props.hasBackground !== false || (iconLeft.props.palette && iconLeft.props.palette !== props.palette))),
    }
  }, [props.children])

  return (
    <AlertElement
      alertSize={props.size}
      alertSizeSm={props.sizeSm}
      alertSizeMd={props.sizeMd}
      alertSizeLg={props.sizeLg}
      alertSizeXl={props.sizeXl}
      hasIconLeft={hasIconLeft}
      hasIconRight={hasIconRight}
      hasThickBorder={hasThickBorder}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...extractElementProps(props, [clickEvents, intrinsicStyledCoreProps])}
      {...props.elementProps}
    >
      {children}
    </AlertElement>
  )
}

Alert.defaultProps = {
  elementProps: {},
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default Alert
