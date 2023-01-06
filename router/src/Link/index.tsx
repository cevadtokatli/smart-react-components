import A from '@smart-react-components/core/Element/A'
import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps } from '@smart-react-components/core/types'
import React from 'react'
import { StyledComponent } from 'styled-components'
import RouterContext from '../RouterContext'
import { Path, URL } from '../types'
import { generateMatch } from '../util'

export interface Props extends ClickEvents, IntrinsicStyledProps {
  as?: StyledComponent<typeof A, {}>
  children: ContentElement | ((props: { isActivating: boolean, isActive: boolean }) => ContentElement)
  elementProps?: JSXElementProps
  isDisabled?: boolean
  isExact?: boolean
  path?: Path
  to: string
}

const Link: React.FC<Props> = props => {
  const rctx = React.useContext(RouterContext).state

  const isMatched = (url: URL | null) => url && generateMatch(url.pathname, props.path ?? props.to, props.isExact) !== null

  const [isActive, setActive] = React.useState(() => isMatched(rctx.activeURL))
  const [isActivating, setActivating] = React.useState(() => isMatched(rctx.activatingURL))

  useChangeEffect(() => setActive(isMatched(rctx.activeURL)), [rctx.activeURL.fullpath])

  useChangeEffect(() => setActivating(isMatched(rctx.activatingURL)), [rctx.activatingURL?.fullpath])

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.isDisabled) {
      return
    }

    props.onClick?.(e)

    if (e.defaultPrevented) {
      return
    }

    e.preventDefault()

    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
      history.redirect(props.to, true)
    } else {
      history.push(props.to)
    }
  }

  return (
    <>
      <A
        as={props.as}
        {...(props.isDisabled && { pointerEvents: 'none' })}
        {...extractElementProps(props, [clickEvents, intrinsicStyledProps])}
        {...props.elementProps}
        className={`${props.elementProps.className ?? ''} ${isActive ? 'is-active' : ''} ${isActivating ? 'is-activating' : ''}`}
        href={props.to}
        onClick={handleOnClick}
      >
        { typeof props.children === 'function' ? props.children({ isActivating, isActive }) : props.children }
      </A>
    </>
  )
}

Link.defaultProps = {
  elementProps: {},
  isExact: true,
}

export default Link
