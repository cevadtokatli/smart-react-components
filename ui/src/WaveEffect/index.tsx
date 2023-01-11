import { Theme } from '@smart-react-components/core'
import { PaletteProp } from '@smart-react-components/core/types'
import { addEventListener, isMobile, removeEventListener } from '@smart-react-components/core/util/dom'
import CSSTransitionGroup from '@smart-react-components/transition/CSSTransitionGroup'
import React from 'react'
import { ThemeContext } from 'styled-components'
import WaveEffectElement from './WaveEffectElement'

interface EffectItem {
  element: JSX.Element
  endTime: number
}

export interface Props {
  children: JSX.Element
  duration?: number
  palette?: PaletteProp
}

const WaveEffect = React.forwardRef<HTMLDivElement, Props>(({ children, duration, palette = 'light' }, forwardRef) => {
  const theme: Theme = React.useContext(ThemeContext)
  const [effectItems, setEffectItems] = React.useState<EffectItem[]>(() => [])
  const isProcessing = React.useRef(false)
  const ref = (forwardRef ?? (children as any).ref) as React.MutableRefObject<HTMLElement> ?? React.useRef<HTMLElement>(null)

  const getDuration = (): number => duration ?? theme.$.transition.waveEffectDuration

  React.useEffect(() => {
    if (effectItems.length > 0) {
      addEventListener(window, [isMobile ? 'touchmove' : 'mousemove'], handleMove)
      addEventListener(window, [isMobile ? 'touchend' : 'mouseup'], handleEnd)

      return () => {
        removeEventListener(window, [isMobile ? 'touchmove' : 'mousemove'], handleMove)
        removeEventListener(window, [isMobile ? 'touchend' : 'mouseup'], handleEnd)
      }
    }
  }, [effectItems])

  const handleMouseDown = (e: MouseEvent) => {
    children.props?.onMouseDown?.(e)

    if (!isMobile && e.button === 0) {
      start(e)
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    children.props?.onTouchStart?.(e)

    start(e)
  }

  const start = (e: MouseEvent | TouchEvent) => {
    isProcessing.current = true
    const rect = ref.current.getBoundingClientRect()
    const scale = (ref.current.clientWidth / 100) * 2
    let left: number
    let top: number

    if (isMobile) {
      const t = (e as TouchEvent).touches[0]
      left = (t.pageX - window.pageXOffset) - rect.left
      top = (t.pageY - window.pageYOffset) - rect.top
    } else {
      left = (e as MouseEvent).clientX - rect.left
      top = (e as MouseEvent).clientY - rect.top
    }

    setEffectItems([
      ...effectItems,
      {
        element: (
          <WaveEffectElement
            key={new Date().getTime()}
            duration={getDuration() / 2}
            left={left}
            palette={palette}
            scale={scale}
            top={top}
          />
        ),
        endTime: new Date().getTime() + getDuration(),
      },
    ])
  }

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (e.target !== ref.current && !ref.current.contains(e.target as Node)) {
      handleEnd()
    }
  }

  const handleEnd = () => {
    isProcessing.current = false
    const time = new Date().getTime()
    setEffectItems(effectItems.filter(e => e.endTime >= time))
  }

  const handleAfterShow = (child: JSX.Element) => {
    if (
      !isProcessing.current
      || (
        isProcessing.current
        && effectItems.findIndex(e => e.element.key === child.key) + 1 < effectItems.length
      )
    ) {
      setEffectItems(effectItems.filter(e => e.element.key !== child.key))
    }
  }

  return React.cloneElement(children, {
    children: (
      <>
        { children.props.children }
        <CSSTransitionGroup
          afterShow={handleAfterShow}
          className="src-wave-effect"
          duration={getDuration() / 2}
        >
          { effectItems.map(e => e.element) }
        </CSSTransitionGroup>
      </>
    ),
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
    overflow: 'hidden',
    position: 'relative',
    ref,
    webkitTapHighlightColor: 'transparent',
  })
})

export default WaveEffect
