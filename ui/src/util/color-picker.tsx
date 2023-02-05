import { Color, Nullable } from '@smart-react-components/core/types'
import { ColorPickerFormat } from '../ColorPicker'

/**
 * Calculates new position of the dragger.
 */
export const calculateDraggerPosition = (e: MouseEvent, pickerEl: HTMLDivElement, draggerSize: number): { left: number, top: number, x: number, y: number } => {
  const pickerRect = pickerEl.getBoundingClientRect()
  const draggerHalfSize = draggerSize / 2
  const eX = e.clientX || e.pageX - window.pageXOffset
  const eY = e.clientY || e.pageY - window.pageYOffset
  let x = eX - (pickerRect.left + draggerHalfSize)
  let y = eY - (pickerRect.top + draggerHalfSize)

  if (x < -draggerHalfSize) {
    x = -draggerHalfSize
  } else if (x > (pickerRect.width - draggerHalfSize)) {
    x = pickerRect.width - draggerHalfSize
  }

  if (y < -draggerHalfSize) {
    y = -draggerHalfSize
  } else if (y > (pickerRect.height - draggerHalfSize)) {
    y = pickerRect.height - draggerHalfSize
  }

  return {
    left: x,
    top: y,
    x: x + draggerHalfSize,
    y: y + draggerHalfSize,
  }
}

/**
 * Converts color to the given format as string.
 */
export const convertColor = (color: Nullable<Color>, format: ColorPickerFormat): Nullable<string> => {
  if (!color) {
    return null
  }

  if (format === ColorPickerFormat.HSL) {
    return color.hsl().toString()
  }

  return (format === ColorPickerFormat.RGB || color.valpha < 1) ? color.rgb().toString() : color.hex().toString()
}

/**
 * Checks if two given colors are equal.
 */
export const isEqual = (color1: Nullable<Color>, color2: Nullable<Color>): boolean => (
  (!color1 && !color2)
  || (color1?.rgb().toString() === color2?.rgb().toString())
)

/**
 * Checks if the given color is light.
 */
export const isLight = (color: Color, hasOpacity: boolean): boolean => {
  const isLight = color.isLight()
  return hasOpacity ? (isLight || color.valpha < .4) : isLight
}
