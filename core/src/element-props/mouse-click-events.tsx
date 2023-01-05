import { MouseEvent } from 'react'
import { includeResponsiveProps } from './'
import { ResponsiveProps } from '../types'

export type MouseClickEvents = ResponsiveProps<{
  onClick?: (e: MouseEvent<HTMLElement>) => void
  onContextMenu?: (e: MouseEvent<HTMLElement>) => void
  onDblClick?: (e: MouseEvent<HTMLElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLElement>) => void
}>

const mouseClickEvents = includeResponsiveProps([
  'onClick',
  'onContextMenu',
  'onDblClick',
  'onMouseDown',
  'onMouseUp',
])

export default mouseClickEvents
