import { Value } from '@smart-react-components/core/types'

export type FormValue = Value | boolean

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  SEARCH = 'search',
  TEL = 'tel',
  TEXT = 'text',
  URL = 'url',
}

export enum OrderPosition {
  LEFT = 1,
  RIGHT = 2,
}

export enum Position {
  LEFT = 1,
  RIGHT = 2,
  TOP = 4,
  BOTTOM = 8,
}

export enum TriggerInteraction {
  NONE = 0,
  CLICK = 1,
  HOVER = 2,
  RIGHT_CLICK = 4,
}
