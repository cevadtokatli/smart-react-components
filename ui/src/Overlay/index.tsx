import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { Theme } from '@smart-react-components/core/theme'
import { JSXElementProps } from '@smart-react-components/core/types'
import { Breakpoint } from '@smart-react-components/core/types/grid'
import { addEventListener, displayWarning, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import { createPortal } from 'react-dom'
import { ThemeContext } from 'styled-components'
import { canBeRenderedInPortal, getScrollParent, mouseWheel } from '../util/dom'
import OverlayElement from './OverlayElement'

export interface Props extends ClickEvents {
  breakpoint?: Breakpoint
  children: JSX.Element
  elementProps?: JSXElementProps
  hasBackground?: boolean
  hasBlurEffect?: boolean
  isInBody?: boolean
}

const Overlay = React.forwardRef<HTMLDivElement, Props>((props, forwardRef) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const ref = forwardRef as React.MutableRefObject<HTMLDivElement> ?? React.useRef<HTMLDivElement>(null)

  const getInBody = () => (props.isInBody || props.hasBlurEffect) && canBeRenderedInPortal()

  const getActive = () => (props.hasBlurEffect && canBeRenderedInPortal()) && ((props.breakpoint && window.innerWidth < theme.$.length.breakpoint[props.breakpoint]) || !props.breakpoint)

  const getFront = () => {
    if (!isActive) {
      return false
    }

    const activeOverlayEls = document.querySelectorAll('body > *[data-src-overlay="visible"]')
    return activeOverlayEls[activeOverlayEls.length - 1] === ref.current
  }

  const [isInBody, setInBody] = React.useState(() => getInBody())
  const [isActive, setActive] = React.useState(() => getActive())
  const [isFront, setFront] = React.useState(() => getFront())

  const handleResize = () => setActive(getActive())

  const handleMouseWheel = (e: WheelEvent) => {
    const container = ref.current
    const delta = ((e.deltaY || -(e as any).wheelDelta || e.detail) >> 10) || 1
    const up = delta < 0
    const el = e.target as HTMLElement
    let scrollEl = getScrollParent(el)

    while (scrollEl && (scrollEl === container || container.contains(scrollEl as Node))) {
      if (
        (up && scrollEl.scrollTop > 0)
        || (!up && scrollEl.scrollHeight > scrollEl.scrollTop)
      ) {
        return
      } else {
        scrollEl = getScrollParent(scrollEl)
      }
    }

    e.preventDefault()
    e.stopPropagation()
  }

  const handleSelectStart = (e: Event) => {
    if (e.target === ref.current) {
      e.preventDefault()
    }
  }

  const applyBlurEffect = React.useCallback((el: HTMLElement) => {
    el.classList.add('src-blur-effect')

    let value = 1
    el.style.filter = `blur(${value}px)`

    const interval = setInterval(() => {
      value++

      if (value > 5 || !el.classList.contains('src-blur-effect')) {
        clearInterval(interval)
      } else {
        el.style.filter = `blur(${value}px)`
      }
    }, 100)
  }, [])

  const removeBlurEffect = React.useCallback((el: HTMLElement) => {
    el.classList.remove('src-blur-effect')

    let value = 4
    el.style.filter = `blur(${value}px)`

    const interval = setInterval(() => {
      if (el.classList.contains('src-blur-effect')) {
        value = 0
      } else {
        value--
      }

      el.style.filter = `blur(${value}px)`

      if (value === 0) {
        clearInterval(interval)
      }
    }, 100)
  }, [])

  React.useEffect(() => {
    if (props.hasBlurEffect && !props.isInBody) {
      displayWarning('The component is always rendered directly in body when it has blur effect.')
    }

    setInBody(getInBody())
  }, [props.hasBlurEffect, props.isInBody])

  React.useEffect(() => {
    if (isInBody) {
      addEventListener(window, ['resize'], handleResize)
      handleResize()

      return () => {
        removeEventListener(window, ['resize'], handleResize)
      }
    } else {
      setActive(false)
    }
  }, [isInBody, props.breakpoint, isActive])

  React.useEffect(() => setFront(getFront()), [isActive])

  React.useEffect(() => {
    if (isFront) {
      addEventListener(document, mouseWheel, handleMouseWheel, { passive: false })
      addEventListener(window, ['selectstart'], handleSelectStart)

      return () => {
        removeEventListener(document, mouseWheel, handleMouseWheel, {})
        removeEventListener(window, ['selectstart'], handleSelectStart)
      }
    }
  }, [isFront])

  React.useEffect(() => {
    if (isFront) {
      const list = document.querySelectorAll('body > *')
      list.forEach(item => {
        if (item.nodeName !== 'SCRIPT' && item !== ref.current && !item.classList.contains('src-blur-effect')) {
          applyBlurEffect(item as HTMLElement)
        }
      })

      return () => {
        const activeOverlayEls = document.querySelectorAll('body > *[data-src-overlay="visible"]')

        if (activeOverlayEls.length > 0) {
          const activeOverlayEl = activeOverlayEls[activeOverlayEls.length - 1]

          if (activeOverlayEl.classList.contains('src-blur-effect')) {
            removeBlurEffect(activeOverlayEl as HTMLElement)
          }
        } else {
          document.querySelectorAll('body > *').forEach(item => {
            if (item.classList.contains('src-blur-effect')) {
              removeBlurEffect(item as HTMLElement)
            }
          })
        }
      }
    }
  }, [isFront])

  const Element = (
    <OverlayElement
      isDisplayedWhenBreakpointNull
      {...props.elementProps}
      {...extractElementProps(props, [clickEvents])}
      breakpoint={props.breakpoint}
      hasBackground={props.hasBackground}
      ref={ref}
      {...(isInBody && { 'data-src-overlay': isActive ? 'visible' : 'hidden' })}
    >
      {props.children}
    </OverlayElement>
  )

  return isInBody ? createPortal(Element, document.body) : Element
})

Overlay.defaultProps = {
  hasBackground: true,
  isInBody: true,
}

export default Overlay
