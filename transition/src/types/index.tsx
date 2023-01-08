import { Value } from '@smart-react-components/core/types'

export interface CSSTransitionProps extends TransitionCallbacks {
  className: string
  duration: number
  hasHideAnimation?: boolean
  hasShowAnimation?: boolean
}

export type TransitionAfterCallback = (el: JSX.Element) => void

type TransitionBeforeCallback = (el: JSX.Element) => (void | Promise<void>)

interface TransitionCallbacks {
  afterHide?: TransitionAfterCallback
  afterShow?: TransitionAfterCallback
  beforeHide?: TransitionBeforeCallback
  beforeShow?: TransitionBeforeCallback
}

export interface TransitionProps extends TransitionCallbacks {
  hide?: (el: HTMLElement) => Promise<void>
  show?: (el: HTMLElement) => Promise<void>
}

export interface TransitionGroupProps {
  children: JSX.Element[]
}

export interface TransitionStandardProps {
  children: JSX.Element
  isPreserved?: boolean
  status: boolean
}

export interface TransitionSwitchProps {
  active: Value
  children: JSX.Element[]
  isPreserved?: boolean
}
