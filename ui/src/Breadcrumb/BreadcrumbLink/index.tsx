import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents from '@smart-react-components/core/element-props/click-events'
import A from '@smart-react-components/core/Element/A'
import useLink, { LinkProps } from '@smart-react-components/router/hooks/useLink'
import React from 'react'
import WaveEffect from '../../WaveEffect'
import { PrivateProps as BreadcrumbItemPrivateProps } from '../BreadcrumbItem'
import BreadcrumbItemElement from '../BreadcrumbItem/BreadcrumbItemElement'

export interface Props extends LinkProps {}

const BreadcrumbLink: React.FC<Props> = (props: Props & BreadcrumbItemPrivateProps) => {
  const { children, handleOnClick, isActive } = useLink({
    children: props.children,
    isDisabled: props.isDisabled,
    isExact: props.isExact,
    onClick: props.onClick,
    path: props.path,
    to: props.to,
  })

  const AnchorEl = (
    <A
      {...extractElementProps(props, [clickEvents])}
      {...props.elementProps}
      href={props.to}
      onClick={handleOnClick}
    >
      {children}
    </A>
  )
  const El = props.hasWaveEffect ? <WaveEffect palette={props.waveEffectPalette}>{AnchorEl}</WaveEffect> : AnchorEl

  return (
    <BreadcrumbItemElement
      isActive={isActive}
      isDisabled={props.isDisabled}
      isOutline={props.isOutline}
      isSoft={props.isSoft}
      palette={props.palette}
      separator={props.separator}
      shape={props.shape}
    >
      {El}
    </BreadcrumbItemElement>
  )
}

BreadcrumbLink.defaultProps = {
  isExact: true,
}

export default BreadcrumbLink
