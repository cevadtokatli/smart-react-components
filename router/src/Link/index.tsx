import A from '@smart-react-components/core/Element/A'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import React from 'react'
import { StyledComponent } from 'styled-components'
import useLink, { LinkProps } from '../hooks/useLink'

export interface Props extends LinkProps, ClickEvents, IntrinsicStyledProps {
  as?: StyledComponent<typeof A, {}>
}

const Link: React.FC<Props> = props => {
  const { children, handleOnClick, isActivating, isActive } = useLink({
    children: props.children,
    isDisabled: props.isDisabled,
    isExact: props.isExact,
    onClick: props.onClick,
    path: props.path,
    to: props.to,
  })

  return (
    <A
      as={props.as}
      {...(props.isDisabled && { pointerEvents: 'none' })}
      {...extractElementProps(props, [clickEvents, intrinsicStyledProps])}
      {...props.elementProps}
      className={`${props.elementProps.className ?? ''} ${isActive ? 'active' : ''} ${isActivating ? 'activating' : ''}`}
      href={props.to}
      onClick={handleOnClick}
    >
      {children}
    </A>
  )
}

Link.defaultProps = {
  elementProps: {},
  isExact: true,
}

export default Link
