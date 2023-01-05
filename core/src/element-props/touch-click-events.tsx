import { TouchEvent } from 'react'
import { includeResponsiveProps } from './'
import { ResponsiveProps } from '../types'

export type TouchClickEvents = ResponsiveProps<{
  onTouchEnd?: (e: TouchEvent<HTMLElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLElement>) => void
}>

const touchClickEvents = includeResponsiveProps([
  'onTouchEnd',
  'onTouchStart',
])

export default touchClickEvents
