import { ContentElement } from '@smart-react-components/core/types'
import useLink from '@smart-react-components/router/hooks/useLink'
import React from 'react'
import Button from './'
import { ButtonGenericProps } from '../types/button'

export interface Props extends ButtonGenericProps<ContentElement> {
  to: string
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, Props>((props, forwardRef) => {
  const { children, handleOnClick, to } = useLink({
    children: props.children,
    isDisabled: props.isDisabled,
    to: props.to,
  })

  return (
    <Button
      {...props}
      as="a"
      elementProps={{
        ...props.elementProps,
        href: to,
        textDecoration: 'none',
      }}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  )
})

ButtonLink.defaultProps = {
  elementProps: {},
  hasHover: true,
  hasWaveEffect: true,
  isLink: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default ButtonLink
