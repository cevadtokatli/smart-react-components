import { Theme } from '@smart-react-components/core/theme'
import { SetState } from '@smart-react-components/core/types'
import { Breakpoint } from '@smart-react-components/core/types/grid'
import { addEventListener, debounce, isMobile, removeEventListener } from '@smart-react-components/core/util/dom'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import { TransitionAfterCallback, TransitionBeforeCallback } from '@smart-react-components/transition/types'
import React from 'react'
import { ThemeContext } from 'styled-components'
import ReplicaDOMElement from '../components/ReplicaDOMElement'
import Overlay from '../Overlay'
import { Position, TriggerInteraction } from '../types'
import { isTargetClickable } from '../util/dom'
import { calculateXAxis, calculateYAxis } from '../util/fixed-box'
import FixedBoxElement from './FixedBoxElement'
import OverlayElement from './OverlayElement'

export { Position, TriggerInteraction } from '../types'

export interface Props {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
  breakpoint?: Breakpoint
  children: [JSX.Element, JSX.Element]
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
  isDismissible?: boolean
  maxWidth?: number
  minWidth?: number
  position?: Position
  setStatus?: SetState<boolean>
  space?: number
  status?: boolean
  transitionClassName?: string
  transitionDuration?: number
  triggerInteraction?: TriggerInteraction
}

const FixedBox: React.FC<Props> = ({
  afterHide,
  afterShow,
  beforeHide,
  beforeShow,
  breakpoint = 'medium',
  children,
  hasHideAnimation = true,
  hasShowAnimation = true,
  isDismissible = true,
  maxWidth,
  minWidth,
  position = Position.BOTTOM,
  setStatus,
  space = 0,
  status,
  transitionClassName,
  transitionDuration,
  triggerInteraction = TriggerInteraction.CLICK,
}) => {
  const theme = React.useContext<Theme>(ThemeContext)
  const triggerEl = React.useRef<HTMLElement>(null)
  const boxEl = React.useRef<HTMLDivElement>(null)
  const boxReplicaEl = React.useRef<HTMLDivElement>(null)
  const leaveTimeout = React.useRef<NodeJS.Timeout>(null)
  const [localStatus, setLocalStatus] = React.useState(() => false)

  const getTriggerEl = () => ((children[0] as any).ref ?? triggerEl).current as HTMLElement
  const getStatus = () => status ?? localStatus
  const getSetStatus = () => setStatus ?? setLocalStatus

  const handleTriggerClick = (e: Event) => {
    const triggerEl = getTriggerEl()

    if (isTargetClickable(e.target as HTMLElement, triggerEl)) {
      getSetStatus()(!getStatus())
    }
  }

  const handleTriggerMouseEnter = e => {
    if (e.target === getTriggerEl()) {
      getSetStatus()(true)
    }
  }

  const handleWindowClick = (e: Event) => {
    const target = e.target as HTMLElement
    const triggerEl = getTriggerEl()

    if (!triggerEl.contains(target) && !boxEl.current.contains(target)) {
      getSetStatus()(false)
    }
  }

  const handleWindowMouseMove = (e: Event) => {
    const target = e.target as HTMLElement
    const triggerEl = getTriggerEl()

    if (!triggerEl.contains(target) && !boxEl.current.contains(target)) {
      if (!leaveTimeout.current) {
        leaveTimeout.current = setTimeout(() => {
          clearTimeout(leaveTimeout.current)
          leaveTimeout.current = null
          getSetStatus()(false)
        }, 250)
      }
    } else if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current)
      leaveTimeout.current = null
    }
  }

  const handlePosition = () => {
    if (!boxEl.current) {
      return
    }

    if (boxReplicaEl.current) {
      boxReplicaEl.current.removeAttribute('style')
      boxReplicaEl.current.innerHTML = boxEl.current.innerHTML
    }

    const triggerRect = getTriggerEl().getBoundingClientRect()
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    boxEl.current.setAttribute('style', `
      ${calculateXAxis(
        triggerRect,
        boxReplicaEl.current ?? boxEl.current,
        position,
        maxWidth,
        minWidth,
        space,
        windowWidth,
      )}
      ${calculateYAxis(
        triggerRect,
        boxReplicaEl.current ?? boxEl.current,
        position,
        space,
        windowHeight,
      )}
    `)
  }

  const handleBeforeShow = el => new Promise<void>(async resolve => {
    await beforeShow?.(el)
    handlePosition()
    resolve()
  })

  React.useEffect(() => {
    if (getStatus()) {
      handlePosition()
    }
  }, [])

  React.useEffect(() => {
    const triggerEl = getTriggerEl()

    const debounceWindowMouseMove = debounce(handleWindowMouseMove)
    const debouncePosition = debounce(handlePosition)

    if (triggerInteraction & TriggerInteraction.CLICK) {
      addEventListener(triggerEl, ['click'], handleTriggerClick)

      if (getStatus() && isDismissible) {
        addEventListener(window, ['click'], handleWindowClick)
      }
    }

    if (!isMobile && triggerInteraction & TriggerInteraction.HOVER) {
      if (!getStatus()) {
        addEventListener(triggerEl, ['mouseenter'], handleTriggerMouseEnter)
      } else {
        addEventListener(window, ['mousemove'], debounceWindowMouseMove)
      }
    }

    if (getStatus()) {
      addEventListener(window, ['resize', 'scroll'], debouncePosition)
    }

    addEventListener(triggerEl, ['src.fixedBox.setPosition'], handlePosition)

    return () => {
      if (triggerInteraction & TriggerInteraction.CLICK) {
        removeEventListener(triggerEl, ['click'], handleTriggerClick)

        if (getStatus() && isDismissible) {
          removeEventListener(window, ['click'], handleWindowClick)
        }
      }

      if (!isMobile && triggerInteraction & TriggerInteraction.HOVER) {
        if (!getStatus()) {
          removeEventListener(triggerEl, ['mouseenter'], handleTriggerMouseEnter)
        } else {
          removeEventListener(window, ['mousemove'], debounceWindowMouseMove)
        }
      }

      if (getStatus()) {
        removeEventListener(window, ['resize', 'scroll'], debouncePosition)
      }

      removeEventListener(triggerEl, ['src.fixedBox.setPosition'], handlePosition)
    }
  }, [status, setStatus, localStatus, setLocalStatus, triggerInteraction])

  return (
    <>
      { React.cloneElement(children[0], { ref: (children[0] as any).ref ?? triggerEl }) }
      <CSSTransition
        afterHide={afterHide}
        afterShow={afterShow}
        beforeHide={beforeHide}
        beforeShow={handleBeforeShow}
        className={transitionClassName ?? 'src-fixed-box'}
        duration={transitionDuration ?? theme.$.transition.fixedBoxDuration}
        hasHideAnimation={hasHideAnimation}
        hasShowAnimation={hasShowAnimation}
        status={getStatus()}
      >
        <Overlay
          breakpoint={breakpoint}
          elementProps={{
            as: OverlayElement,
            duration: transitionDuration ?? theme.$.transition.fixedBoxDuration,
            isDisplayedWhenBreakpointNull: false,
          }}
        >
          <FixedBoxElement breakpoint={breakpoint} ref={boxEl}>{children[1]}</FixedBoxElement>
        </Overlay>
      </CSSTransition>
      <ReplicaDOMElement ref={boxReplicaEl} />
    </>
  )
}

export default FixedBox
