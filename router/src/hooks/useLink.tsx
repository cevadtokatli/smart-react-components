import { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps } from '@smart-react-components/core/types'
import { MouseEvent, useContext, useState } from 'react'
import RouterContext from '../RouterContext'
import { Path, URL } from '../types'
import { generateMatch } from '../util'

export interface LinkProps extends ClickEvents {
  children: ContentElement | ((props: { isActivating: boolean, isActive: boolean }) => ContentElement)
  elementProps?: JSXElementProps
  isDisabled?: boolean
  isExact?: boolean
  path?: Path
  to: string
}

interface Props {
  children: ContentElement | ((props: { isActivating: boolean, isActive: boolean }) => ContentElement)
  isDisabled: boolean
  isExact: boolean
  onClick: (e: MouseEvent<HTMLElement>) => void | null
  path: Path | null
  to: string
}

interface Return {
  children: ContentElement
  handleOnClick: (e: MouseEvent<HTMLAnchorElement>) => void
  isActivating: boolean
  isActive: boolean
}

const useLink = ({ children, isDisabled, isExact, onClick, path, to }: Props): Return => {
  const router = useContext(RouterContext)?.state

  const isMatched = (url: URL | null) => url && generateMatch(url.pathname, path ?? to, isExact) !== null

  const [isActive, setActive] = useState(() => isMatched(router.activeURL))
  const [isActivating, setActivating] = useState(() => isMatched(router.activatingURL))

  useChangeEffect(() => setActive(isMatched(router.activeURL)), [router.activeURL.fullpath])

  useChangeEffect(() => setActivating(isMatched(router.activatingURL)), [router.activatingURL?.fullpath])

  const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      return
    }

    onClick?.(e)

    if (e.defaultPrevented) {
      return
    }

    e.preventDefault()

    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
      history.redirect(to, true)
    } else {
      history.push(to)
    }
  }

  return {
    children: typeof children === 'function' ? children({ isActivating, isActive }) : children,
    handleOnClick,
    isActivating,
    isActive,
  }
}

export default useLink
