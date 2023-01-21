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
  children: ContentElement
  elementProps?: JSXElementProps
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

const Alert: React.FC<Props> = props => {
  const cloneIcon = item => React.cloneElement(item, {
    alertPalette: props.palette,
    isSoft: props.isSoft,
    size: props.size,
    sizeSm: props.sizeSm,
    sizeMd: props.sizeMd,
    sizeLg: props.sizeLg,
    sizeXl: props.sizeXl,
  })

  const getContent = () => {
    if (!Array.isArray(props.children)) {
      return {
        children: <Content>{props.children}</Content>,
        hasIconLeft: false,
        hasIconRight: false,
      }
    }

    let iconLeft = null
    let iconRight = null
    const children = props.children.filter((item, idx) => {
      if (idx === 0 && item.type?.displayName === 'SRCAlertIcon') {
        iconLeft = cloneIcon(item)
        return false
      }

      if (idx === (props.children as JSX.Element[]).length - 1 && item.type?.displayName === 'SRCAlertIcon') {
        iconRight = cloneIcon(item)
        return false
      }

      return React.cloneElement(item, { key: item.key ?? idx })
    })

    return {
      children: (
        <>
          { iconLeft && iconLeft }
          <Content>{children}</Content>
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
  }, [props.children, props.isSoft, props.palette, props.size, props.sizeSm, props.sizeMd, props.sizeLg, props.sizeXl])

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
