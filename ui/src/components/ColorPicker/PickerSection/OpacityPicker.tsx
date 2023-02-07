import { Color } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import ColorPickerProps from '../../../context/ColorPickerProps'
import { PickerProps } from '../../../types/color-picker'
import { calculateDraggerPosition, isLight } from '../../../util/color-picker'
import MinorDraggerElement from './MinorDraggerElement'
import OpacityPickerElement from './OpacityPickerElement'

const OpacityPicker: React.FC<PickerProps> = ({ color, onDrag, onEnd, onRef, onStart }) => {
  const props = React.useContext(ColorPickerProps)
  const pickerEl = React.useRef<HTMLDivElement>(null)
  const bgEl = React.useRef<HTMLDivElement>(null)
  const draggerEl = React.useRef<HTMLSpanElement>(null)

  const handleChange = () => {
    if (!pickerEl.current) {
      return
    }

    const pickerHeight = pickerEl.current.offsetHeight
    const pickerWidth = pickerEl.current.offsetWidth
    const draggerHalfSize = draggerEl.current.offsetWidth / 2
    const left = (pickerWidth / 2) - draggerHalfSize

    let background: Color
    let isDark: boolean
    let top: number

    if (!color.current) {
      background = getColor('#FFF')
      isDark = true
      top = pickerHeight - draggerHalfSize
    } else {
      const a = color.current.valpha

      background = color.current
      isDark = isLight(color.current, true)
      top = Math.round((pickerHeight / 100) * (a * 100)) - draggerHalfSize
    }

    draggerEl.current.setAttribute('data-src-is-dark', String(isDark))
    draggerEl.current.setAttribute('style', `left: ${left}px; top: ${top}px;`)

    const [r, g, b] = background.rgb().color
    bgEl.current.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`
  }

  const handleDrag = (e: MouseEvent) => {
    const { left, top, y } = calculateDraggerPosition(e, pickerEl.current, draggerEl.current.offsetWidth)
    draggerEl.current.style.left = `${left}px`
    draggerEl.current.style.top = `${top}px`

    const pickerHeight = pickerEl.current.offsetHeight
    const alpha = Math.round((100 / pickerHeight) * y) / 100
    color.current = color.current?.alpha(alpha) ?? getColor(`rgba(255, 255, 255, ${alpha})`)

    draggerEl.current.setAttribute('data-src-is-dark', String(isLight(color.current, true)))

    onDrag()
  }

  const handleExternalDrag = () => {
    const [r, g, b] = color.current.rgb().color
    bgEl.current.style.background = `linear-gradient(to top, rgba(${r}, ${g}, ${b}, 1), rgba(${r}, ${g}, ${b}, 0))`
    draggerEl.current.setAttribute('data-src-is-dark', String(isLight(color.current, true)))
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
      onExternalDrag: handleExternalDrag,
    })
  }, [])

  return (
    <OpacityPickerElement
      {...props}
      bgElRef={bgEl}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      ref={pickerEl}
    >
      <MinorDraggerElement
        {...props}
        ref={draggerEl}
      />
    </OpacityPickerElement>
  )
}

export default OpacityPicker
