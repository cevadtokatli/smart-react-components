import { requestAnimationFrame } from '@smart-react-components/core/util/dom'
import React from 'react'
import Transition from '../Transition'
import { CSSTransitionProps, TransitionStandardProps } from '../types'

export interface Props extends CSSTransitionProps, TransitionStandardProps {}

const CSSTransition: React.FC<Props> = ({ afterHide, afterShow, beforeHide, beforeShow, children, className, duration, hasHideAnimation = true, hasShowAnimation = true, isPreserved, status }) => {
  const show = (el: HTMLElement) => new Promise<void>(resolve => {
    if (!hasShowAnimation) {
      return resolve()
    }

    requestAnimationFrame.call(window, () => {
      el.classList.add(`${className}-show`)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const ignored = el.offsetWidth
      el.classList.add(`${className}-show-active`)

      setTimeout(() => {
        el.classList.remove(`${className}-show`, `${className}-show-active`)
        resolve()
      }, duration)
    })
  })

  const hide = (el: HTMLElement) => new Promise<void>(resolve => {
    if (!hasHideAnimation) {
      return resolve()
    }

    requestAnimationFrame.call(window, () => {
      el.classList.add(`${className}-hide`)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const ignored = el.offsetWidth
      el.classList.add(`${className}-hide-active`)

      setTimeout(() => {
        el.classList.remove(`${className}-hide`, `${className}-hide-active`)
        resolve()
      }, duration)
    })
  })

  return (
    <Transition
      afterHide={afterHide}
      afterShow={afterShow}
      beforeHide={beforeHide}
      beforeShow={beforeShow}
      hide={hide}
      isPreserved={isPreserved}
      show={show}
      status={status}
    >
      { children }
    </Transition>
  )
}

export default CSSTransition
