import { SetState } from '@smart-react-components/core/types'
import { addEventListener, debounce, isMobile, removeEventListener } from '@smart-react-components/core/util/dom'
import { TransitionBeforeCallback } from '@smart-react-components/transition/types'
import { useEffect, useRef, useState } from 'react'
import { TriggerInteraction } from '../types'
import { isTargetClickable } from '../util/dom'

interface Props {
  beforeShow?: TransitionBeforeCallback
  boxEl: React.MutableRefObject<HTMLDivElement>
  getTriggerEl: () => HTMLElement
  handlePosition: (e: MouseEvent) => void
  hoverDelay?: number
  isDismissible: boolean
  key: string
  setStatus?: SetState<boolean>
  status?: boolean
  triggerInteraction: TriggerInteraction
}

interface Return {
  handleBeforeShow: TransitionBeforeCallback
  getStatus: () => boolean
}

const useFixedBoxMethods = ({ beforeShow, boxEl, getTriggerEl, handlePosition, hoverDelay, isDismissible, key, setStatus, status, triggerInteraction }: Props): Return => {
  const enterTimeout = useRef<NodeJS.Timeout>(null)
  const enterTimeoutMouseMove = useRef<(e: Event) => void>(null)
  const leaveTimeout = useRef<NodeJS.Timeout>(null)
  const mouseEvent = useRef<MouseEvent>(null)
  const [localStatus, setLocalStatus] = useState(() => false)

  const getStatus = () => status ?? localStatus
  const getSetStatus = () => setStatus ?? setLocalStatus

  const handleTriggerClick = (e: Event) => {
    mouseEvent.current = null

    const triggerEl = getTriggerEl()

    if (isTargetClickable(e.target as HTMLElement, triggerEl)) {
      getSetStatus()(!getStatus())
    }
  }

  const handleTriggerRightClick = e => {
    e.preventDefault()

    mouseEvent.current = e

    const triggerEl = getTriggerEl()

    if (isTargetClickable(e.target as HTMLElement, triggerEl)) {
      getSetStatus()(true)
    }
  }

  const handleTriggerMouseEnter = e => {
    mouseEvent.current = null

    if (e.target === getTriggerEl()) {
      if (hoverDelay) {
        if (!enterTimeout.current) {
          enterTimeout.current = setTimeout(() => getSetStatus()(true), hoverDelay)
          enterTimeoutMouseMove.current = handleWindowMouseMove
          addEventListener(window, ['mousemove'], enterTimeoutMouseMove.current)
        }
      } else {
        getSetStatus()(true)
      }
    }
  }

  const handleWindowClick = (e: Event) => {
    mouseEvent.current = null

    const target = e.target as HTMLElement
    const triggerEl = getTriggerEl()

    if (!triggerEl.contains(target) && !boxEl.current.contains(target)) {
      getSetStatus()(false)
    }
  }

  const handleWindowMouseMove = (e: Event) => {
    const target = e.target as HTMLElement
    const triggerEl = getTriggerEl()

    if (!triggerEl.contains(target) && !boxEl.current?.contains(target)) {
      if (enterTimeout.current) {
        removeEventListener(window, ['mousemove'], enterTimeoutMouseMove.current)
        enterTimeoutMouseMove.current = null
        clearTimeout(enterTimeout.current)
        enterTimeout.current = null
      }

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

  const handleBeforeShow = el => new Promise<void>(async resolve => {
    await beforeShow?.(el)
    handlePosition(mouseEvent.current)
    resolve()
  })

  useEffect(() => {
    if (getStatus()) {
      handlePosition(null)
    }
  }, [])

  useEffect(() => {
    const triggerEl = getTriggerEl()

    const debounceWindowMouseMove = debounce(handleWindowMouseMove)
    const debouncePosition = debounce(e => {
      if (!boxEl.current.contains(e.target as HTMLElement)) {
        handlePosition(mouseEvent.current)
      }
    })
    const handlePositionBind = () => handlePosition(mouseEvent.current)

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

    if (triggerInteraction & TriggerInteraction.RIGHT_CLICK) {
      addEventListener(triggerEl, ['contextmenu'], handleTriggerRightClick)

      if (getStatus()) {
        addEventListener(triggerEl, ['click'], handleTriggerClick)
        addEventListener(window, ['click', 'contextmenu'], handleWindowClick)
      }
    }

    if (getStatus()) {
      addEventListener(window, ['resize', 'scroll'], debouncePosition)
    }

    addEventListener(triggerEl, ['src.fixedBox.setPosition'], handlePositionBind)

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

      if (triggerInteraction & TriggerInteraction.RIGHT_CLICK) {
        removeEventListener(triggerEl, ['contextmenu'], handleTriggerRightClick)

        if (getStatus()) {
          removeEventListener(triggerEl, ['click'], handleTriggerClick)
          removeEventListener(window, ['click', 'contextmenu'], handleWindowClick)
        }
      }

      if (getStatus()) {
        removeEventListener(window, ['resize', 'scroll'], debouncePosition)
      }

      removeEventListener(triggerEl, [`src.${key}.setPosition`], handlePositionBind)
    }
  }, [status, setStatus, localStatus, setLocalStatus, triggerInteraction])

  return {
    getStatus,
    handleBeforeShow,
  }
}

export default useFixedBoxMethods
