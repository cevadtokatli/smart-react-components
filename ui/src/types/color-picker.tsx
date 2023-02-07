import { Color } from '@smart-react-components/core/types'
import { MutableRefObject } from 'react'

export enum ColorPickerFormat {
  HEX,
  RGB,
  HSL,
}

export interface PickerProps {
  color: MutableRefObject<Color>
  onDrag: () => void
  onEnd: (onMove: (e: Event) => void, onEnd: () => void) => void
  onRef?: (v: PickerRef) => void
  onStart: (onMove: (e: Event) => void, onEnd: () => void) => void
}

export interface PickerRef {
  onChange: () => void
  onExternalDrag?: () => void
}
