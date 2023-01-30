import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import AlertElement, { Content } from './AlertElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents,
  IntrinsicStyledProps {
  children: ContentElement | ContentElement[]
  elementProps?: JSXElementProps
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

const Alert: React.FC<Props> = props => {
  const getContent = () => {
    const children = !Array.isArray(props.children) ? [props.children] : props.children
    const content = []
    let iconLeft = null
    let iconRight = null

    for (let i = 0; i < children.length; i++) {
      const item = children[i] as JSX.Element
      if (item.type?.displayName === 'SRCAlertIcon') {
        const iconEl = React.cloneElement(item, {
          alertPalette: props.palette,
          isSoft: props.isSoft,
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
    <AlertElement
      alertSize={props.size}
      alertSizeSm={props.sizeSm}
      alertSizeMd={props.sizeMd}
      alertSizeLg={props.sizeLg}
      alertSizeXl={props.sizeXl}
      hasIconLeft={hasIconLeft}
      hasIconRight={hasIconRight}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      shape={props.shape}
      {...extractElementProps(props, [clickEvents, intrinsicStyledProps])}
    >
      {children}
    </AlertElement>
  )
}

Alert.defaultProps = {
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default Alert
