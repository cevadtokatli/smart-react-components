import { KeyboardEvent } from 'react'

export interface KeyboardEvents {
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void
  onKeyUp?: (e: KeyboardEvent<HTMLElement>) => void
}

const keyboardEvents = [
  'onKeyDown',
  'onKeyUp',
]

export default keyboardEvents
