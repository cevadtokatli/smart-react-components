import { Color, Nullable, PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import ColorPickerProps from '../../../context/ColorPickerProps'
import Eraser from '../../../icons/Eraser'
import Palette from '../../../icons/Palette'
import Input from '../../../Input'
import InputAddon from '../../../Input/InputAddon'
import { ColorPickerFormat, ConsoleRef } from '../../../types/color-picker'
import { colorToString, isLight } from '../../../util/color-picker'
import ConsoleSectionElement from './ConsoleSectionElement'

interface Props {
  format: ColorPickerFormat
  initialValue: Nullable<Color>
  palette: PaletteProp
  onRef: (v: ConsoleRef) => void
}

const ConsoleSection: React.FC<Props> = ({ format, initialValue, onRef, palette }) => {
  const { colorPickerSize, colorPickerSizeSm, colorPickerSizeMd, colorPickerSizeLg, colorPickerSizeXl, isDisabled, updateValue, value } = React.useContext(ColorPickerProps)

  const clearButtonEl = React.useRef<HTMLDivElement>(null)
  const initialButtonEl = React.useRef<HTMLDivElement>(null)
  const inputEl = React.useRef<HTMLInputElement>(null)

  const handleChange = (value: Nullable<Color>) => {
    const background = value?.toString() ?? 'transparent'
    const isDark = String(value ? isLight(value, true) : true)
    clearButtonEl.current.style.background = background
    clearButtonEl.current.setAttribute('data-src-is-dark', isDark)
    inputEl.current.style.background = background
    inputEl.current.setAttribute('data-src-is-dark', isDark)
    inputEl.current.value = colorToString(value, format)
  }

  const handleDrag = (value: Nullable<Color>) => {
    handleChange(value)
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      updateValue((e.target as HTMLInputElement).value)
    }
  }

  React.useEffect(() => {
    onRef({
      onDrag: handleDrag,
    })
  }, [])

  React.useEffect(() => {
    handleChange(value)
  }, [value])

  return (
    <ConsoleSectionElement
      isDisabled={isDisabled}
      palette={palette}
    >
      <Input
        hasBorder={false}
        leftAddon={(
          <InputAddon
            elementProps={{
              'data-src-is-dark': initialValue ? String(isLight(initialValue, true)) : true,
              style: {
                background: initialValue?.toString() ?? 'transparent',
              },
            }}
            isSeparated
            ref={initialButtonEl}
            {...(!isDisabled && { onClick: () => updateValue(initialValue) })}
          >
            <Palette
            />
          </InputAddon>
        )}
        ref={inputEl}
        rightAddon={(
          <InputAddon
            isSeparated
            ref={clearButtonEl}
            {...(!isDisabled && { onClick: () => updateValue(null) })}
          >
            <Eraser />
          </InputAddon>
        )}
        size={colorPickerSize}
        sizeSm={colorPickerSizeSm}
        sizeMd={colorPickerSizeMd}
        sizeLg={colorPickerSizeLg}
        sizeXl={colorPickerSizeXl}
        {...!isDisabled && {
          onBlur: e => updateValue((e.target as HTMLInputElement).value),
          onKeyDown: handleInputKeyDown,
        }}
      />
    </ConsoleSectionElement>
  )
}

export default ConsoleSection
