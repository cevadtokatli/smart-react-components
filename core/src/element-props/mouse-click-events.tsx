import { MouseEvent } from 'react'

export interface MouseClickEvents {
  onClick?: (e: MouseEvent<HTMLElement>) => void
  onContextMenu?: (e: MouseEvent<HTMLElement>) => void
  onDblClick?: (e: MouseEvent<HTMLElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLElement>) => void
}

const mouseClickEvents = [
  'onClick',
  'onContextMenu',
  'onDblClick',
  'onMouseDown',
  'onMouseUp',
]

export default mouseClickEvents
