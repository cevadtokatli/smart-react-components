import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, JSXElementProps } from '@smart-react-components/core/types'
import { MouseEvent, useContext, useState } from 'react'
import RouterContext from '../RouterContext'
import { Path, URL } from '../types'
import { generateMatch } from '../util'

export interface LinkProps {
  children: ContentElement | ContentElement[] | ((props: { isActivating: boolean, isActive: boolean }) => ContentElement | ContentElement[])
  elementProps?: JSXElementProps
  isDisabled?: boolean
  isExact?: boolean
  path?: Path
  to: string
}

interface Props {
  children: ContentElement | ContentElement[] | ((props: { isActivating: boolean, isActive: boolean }) => ContentElement | ContentElement[])
  isDisabled: boolean
  isExact?: boolean
  onClick?: (e: MouseEvent<HTMLElement>) => void
  path?: Path
  to: string
}

interface Return {
  children: ContentElement | ContentElement[]
  handleOnClick: (e: MouseEvent<HTMLAnchorElement>) => void
  isActivating: boolean
  isActive: boolean
  to: string
}

const useLink = ({ children, isDisabled, isExact, onClick, path, to }: Props): Return => {
  const router = useContext(RouterContext)

  const isMatched = (url: URL | null) => url && generateMatch(url.pathname, path ?? to, isExact) !== null

  const [isActive, setActive] = useState(() => isMatched(router.state.activeURL))
  const [isActivating, setActivating] = useState(() => isMatched(router.state.activatingURL))

  useChangeEffect(() => setActive(isMatched(router.state.activeURL)), [router.state.activeURL.fullpath])

  useChangeEffect(() => setActivating(isMatched(router.state.activatingURL)), [router.state.activatingURL?.fullpath])

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
      router.redirect(to, true)
    } else {
      router.push(to)
    }
  }

  return {
    children: typeof children === 'function' ? children({ isActivating, isActive }) : children,
    handleOnClick,
    isActivating,
    isActive,
    to: router.state.isHashRouter ? `${window.location.pathname}${window.location.search}#${to}` : to,
  }
}

export default useLink
