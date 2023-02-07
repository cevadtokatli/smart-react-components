import Section from '@smart-react-components/core/Element/Section'
import { Color, Nullable } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import ColorPickerProps from '../../../context/ColorPickerProps'
import { PickerRef } from '../../../types/color-picker'
import { isEqual } from '../../../util/color-picker'
import MajorPicker from './MajorPicker'
import MinorPicker from './MinorPicker'
import OpacityPicker from './OpacityPicker'

interface Props {
  hasOpacityPicker: boolean
  onDrag: (value: Color) => void
}

const PickerSection: React.FC<Props> = ({ hasOpacityPicker, onDrag }) => {
  const { updateValue, value } = React.useContext(ColorPickerProps)
  const color = React.useRef<Nullable<Color>>(undefined)
  const majorPicker = React.useRef<PickerRef>(null)
  const minorPicker = React.useRef<PickerRef>(null)
  const opacityPicker = React.useRef<PickerRef>(null)

  const handleStart = (onMove: (e: Event) => void, onEnd: () => void) => {
    addEventListener(document, ['mousemove', 'touchmove'], onMove)
    addEventListener(document, ['mouseup', 'touchend'], onEnd)
    document.body.style.userSelect = 'none'
  }

  const handleEnd = (onMove: (e: Event) => void, onEnd: () => void) => {
    removeEventListener(document, ['mousemove', 'touchmove'], onMove)
    removeEventListener(document, ['mouseup', 'touchend'], onEnd)
    document.body.style.userSelect = 'initial'
    updateValue(color.current)
  }

  const handleMajorPickerDrag = () => {
    opacityPicker.current?.onExternalDrag()
    handleDrag()
  }

  const handleMinorPickerDrag = () => {
    majorPicker.current.onExternalDrag()
  }

  const handleDrag = () => onDrag(color.current)

  React.useEffect(() => {
    if (typeof color.current === 'undefined' || !isEqual(color.current, value)) {
      color.current = value
      majorPicker.current.onChange()
      minorPicker.current.onChange()
      opacityPicker.current.onChange()
    }
  }, [value])

  return (
    <Section display="flex" justifyContent="space-between">
      <MajorPicker
        color={color}
        onEnd={handleEnd}
        onDrag={handleMajorPickerDrag}
        onRef={v => { majorPicker.current = v } }
        onStart={handleStart}
      />
      <MinorPicker
        color={color}
        onEnd={handleEnd}
        onDrag={handleMinorPickerDrag}
        onRef={v => { minorPicker.current = v } }
        onStart={handleStart}
      />
      { hasOpacityPicker && (
        <OpacityPicker
          color={color}
          onEnd={handleEnd}
          onDrag={handleDrag}
          onRef={v => { opacityPicker.current = v } }
          onStart={handleStart}
        />
      )}
    </Section>
  )
}

export default PickerSection
