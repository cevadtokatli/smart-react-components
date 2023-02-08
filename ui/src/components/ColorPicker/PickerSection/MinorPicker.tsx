import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import ColorPickerProps from '../../../context/ColorPickerProps'
import { PickerProps } from '../../../types/color-picker'
import { calculateDraggerPosition } from '../../../util/color-picker'
import MinorDraggerElement from './MinorDraggerElement'
import MinorPickerElement from './MinorPickerElement'

const MinorPicker: React.FC<PickerProps> = ({ color, onDrag, onEnd, onRef, onStart }) => {
  const props = React.useContext(ColorPickerProps)
  const pickerEl = React.useRef<HTMLDivElement>(null)
  const draggerEl = React.useRef<HTMLSpanElement>(null)

  const handleChange = () => {
    if (!pickerEl.current) {
      return
    }

    const pickerWidth = pickerEl.current.offsetWidth
    const draggerHalfSize = draggerEl.current.offsetWidth / 2
    const left = (pickerWidth / 2) - draggerHalfSize

    let top: number

    if (!color.current) {
      top = draggerHalfSize * -1
    } else {
      const pickerHeight = pickerEl.current.offsetHeight
      const [h] = color.current.hsl().color

      top = Math.round((pickerHeight / 360) * h) - draggerHalfSize
    }

    draggerEl.current.setAttribute('style', `left: ${left}px; top: ${top}px;`)
  }

  const handleDrag = (e: MouseEvent) => {
    const { left, top, y } = calculateDraggerPosition(e, pickerEl.current, draggerEl.current.offsetWidth)
    draggerEl.current.style.left = `${left}px`
    draggerEl.current.style.top = `${top}px`

    const pickerHeight = pickerEl.current.offsetHeight
    const h = Math.round(y * (360 / pickerHeight))

    color.current = getColor(`hsl(${h}, 100%, 50%)`)

    onDrag()
  }

  const handleEnd = () => {
    onEnd(handleMove, handleEnd)
  }

  const handleMove = (e: MouseEvent) => {
    handleDrag(e)
  }

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    onStart(handleMove, handleEnd)
    handleDrag(e as any as MouseEvent)
  }

  React.useEffect(() => {
    onRef({
      onChange: handleChange,
    })
  }, [])

  return (
    <MinorPickerElement
      {...props}
      ref={pickerEl}
      {...(!props.isDisabled && {
        onMouseDown: handleStart,
        onTouchStart: handleStart,
      })}
    >
      <MinorDraggerElement
        {...props}
        ref={draggerEl}
      />
    </MinorPickerElement>
  )
}

export default MinorPicker
