import { FocusEvent } from 'react'

export interface FocusEvents {
  onBlur?: (e: FocusEvent<HTMLElement>) => void
  onFocus?: (e: FocusEvent<HTMLElement>) => void
}

const focusEvents = [
  'onBlur',
  'onFocus',
]

export default focusEvents
