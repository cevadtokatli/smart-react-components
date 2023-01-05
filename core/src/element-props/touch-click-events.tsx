import { TouchEvent } from 'react'

export interface TouchClickEvents {
  onTouchEnd?: (e: TouchEvent<HTMLElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLElement>) => void
}

const touchClickEvents = [
  'onTouchEnd',
  'onTouchStart',
]

export default touchClickEvents
