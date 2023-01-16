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
  handlePosition: () => void
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

const useFixedBoxMethods = ({ beforeShow, boxEl, getTriggerEl, handlePosition, isDismissible, key, setStatus, status, triggerInteraction }: Props): Return => {
  const leaveTimeout = useRef<NodeJS.Timeout>(null)
  const [localStatus, setLocalStatus] = useState(() => false)

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

  const handleBeforeShow = el => new Promise<void>(async resolve => {
    await beforeShow?.(el)
    handlePosition()
    resolve()
  })

  useEffect(() => {
    if (getStatus()) {
      handlePosition()
    }
  }, [])

  useEffect(() => {
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

      removeEventListener(triggerEl, [`src.${key}.setPosition`], handlePosition)
    }
  }, [status, setStatus, localStatus, setLocalStatus, triggerInteraction])

  return {
    getStatus,
    handleBeforeShow,
  }
}

export default useFixedBoxMethods
