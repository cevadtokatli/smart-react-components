import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import ColorPickerProps from '../../../context/ColorPickerProps'
import { PickerProps } from '../../../types/color-picker'
import { calculateDraggerPosition, isLight } from '../../../util/color-picker'
import MajorDraggerElement from './MajorDraggerElement'
import MajorPickerElement from './MajorPickerElement'

const MajorPicker: React.FC<PickerProps> = ({ color, onDrag, onEnd, onRef, onStart }) => {
  const props = React.useContext(ColorPickerProps)
  const pickerEl = React.useRef<HTMLDivElement>(null)
  const bgEl = React.useRef<HTMLDivElement>(null)
  const draggerEl = React.useRef<HTMLSpanElement>(null)

  const handleChange = () => {
    if (!pickerEl.current) {
      return
    }

    let background: string
    let isDark: boolean
    let left: number
    let top: number

    const draggerHalfSize = draggerEl.current.offsetWidth / 2

    if (!color.current) {
      background = '#F0O'
      isDark = true
      left = draggerHalfSize * -1
      top = draggerHalfSize * -1
    } else {
      const rgb = color.current.rgb().color
      const hsl = color.current.hsl().color
      const [r, g, b] = rgb
      const [h] = hsl
      const maxColor = Math.max(r, g, b)
      const minColor = Math.min(r, g, b)

      const pickerSize = pickerEl.current.offsetWidth
      const topNetVal = Math.abs(Math.round(((pickerSize / 255) * maxColor) - pickerSize))
      const leftVal = Math.abs(Math.round(((pickerSize / 255) * minColor) - pickerSize))
      const leftNetVal = leftVal - Math.abs(Math.round((topNetVal / maxColor) * minColor))

      background = `hsl(${h}, 100%, 50%)`
      isDark = isLight(color.current, false)
      left = leftNetVal - draggerHalfSize
      top = topNetVal - draggerHalfSize
    }

    draggerEl.current.setAttribute('data-src-is-dark', String(isDark))
    draggerEl.current.setAttribute('style', `left: ${left}px; top: ${top}px;`)
    pickerEl.current.style.background = background
  }

  const handleDrag = (e?: MouseEvent) => {
    let x: number
    let y: number

    if (e) {
      let left: number
      let top: number

      ({ left, top, x, y } = calculateDraggerPosition(e, pickerEl.current, draggerEl.current.offsetWidth))

      draggerEl.current.style.left = `${left}px`
      draggerEl.current.style.top = `${top}px`
    } else {
      const draggerHalfSize = draggerEl.current.offsetWidth / 2
      x = draggerEl.current.offsetLeft - draggerHalfSize
      y = draggerEl.current.offsetTop - draggerHalfSize
    }

    const currentColor = color.current ?? getColor('#FFF')
    const [h] = currentColor.hsl().color
    const rgb = (getColor(`hsl(${h}, 100%, 50%)`).rgb() as any).color
    const pickerSize = pickerEl.current.offsetWidth

    for (const i in rgb) {
      const v = rgb[i]
      let netValue: number

      if (v === 255) {
        netValue = Math.abs(Math.round(((255 / pickerSize) * y) - 255))
      } else {
        const topNetValue = Math.round((pickerSize - y) * (v / pickerSize))
        const leftValue = Math.round((pickerSize - x) * ((255 - v) / pickerSize))
        const leftNetValue = Math.abs(Math.round((pickerSize - y) * (leftValue / pickerSize)))
        netValue = topNetValue + leftNetValue
      }

      rgb[i] = netValue
    }

    color.current = getColor(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${currentColor.valpha})`)

    draggerEl.current.setAttribute('data-src-is-dark', String(isLight(color.current, false)))

    onDrag()
  }

  const handleExternalDrag = () => {
    const [h] = color.current.hsl().color
    bgEl.current.style.background = `hsl(${h}, 100%, 50%)`

    handleDrag()
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
    <MajorPickerElement
      {...props}
      bgElRef={bgEl}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      ref={pickerEl}
    >
      <MajorDraggerElement
        {...props}
        ref={draggerEl}
      />
    </MajorPickerElement>
  )
}

export default MajorPicker
