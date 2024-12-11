import { Hr } from '@smart-react-components/core'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Color, Nullable, PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import ButtonsSection from '../components/ColorPicker/ButtonsSection'
import ColorPickerElement from '../components/ColorPicker/ColorPickerElement'
import ConsoleSection from '../components/ColorPicker/ConsoleSection'
import PaletteSection from '../components/ColorPicker/PaletteSection'
import PickerSection from '../components/ColorPicker/PickerSection'
import ColorPickerProps from '../context/ColorPickerProps'
import { ColorPickerFormat } from '../types/color-picker'
import { colorToString } from '../util/color-picker'

export { ColorPickerFormat } from '../types/color-picker'

export interface Props extends
  IntrinsicStyledCoreProps,
  Partial<ResponsiveProp<'size', SizeProp>> {
  canAddColorToPalette?: boolean
  cancelLabel?: string
  format?: ColorPickerFormat
  hasButtons?: boolean
  hasConsole?: boolean
  hasPalette?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isSoft?: boolean
  hasOpacityPicker?: boolean
  palette?: PaletteProp
  paletteColors?: string[]
  onCancel?: (e: Event) => void
  onDrag?: (e: Event) => void
  onSave?: (e: Event) => void
  saveLabel?: string
  setPaletteColors?: SetState<string[]>
  setValue: SetState<string>
  value: string
}

const ColorPicker: React.FC<Props> = props => {
  const consoleSection = React.useRef<{
    onDrag: (value: Color) => void
  }>(null)

  const [value, setValue] = React.useState<Nullable<Color>>(() => props.value ? getColor(props.value) : null)
  const [initialValue, setInitialValue] = React.useState<Nullable<Color>>(() => props.value ? getColor(props.value) : null)

  const updateValue = (value: Nullable<string | Color>) => props.setValue(value !== null
    ? colorToString(typeof value === 'string' ? getColor(value) : value, props.format)
    : null,
  )

  const handleDrag = (value: Color) => {
    props.onDrag?.(value)

    consoleSection.current?.onDrag(value)
  }

  const handleCancel = (e: Event) => {
    props.onCancel?.(e)

    if (!e.defaultPrevented) {
      updateValue(initialValue)
    }
  }

  const handleSave = (e: Event) => {
    props.onSave?.(e)

    if (!e.defaultPrevented) {
      setInitialValue(value)
    }
  }

  useChangeEffect(() => {
    const newValue = props.value ? getColor(props.value) : null
    if (newValue !== value) {
      setValue(newValue)
    }
  }, [props.value])

  return (
    <ColorPickerProps.Provider
      value={{
        colorPickerSize: props.size,
        colorPickerSizeSm: props.sizeSm,
        colorPickerSizeMd: props.sizeMd,
        colorPickerSizeLg: props.sizeLg,
        colorPickerSizeXl: props.sizeXl,
        isDisabled: props.isDisabled,
        palette: props.palette,
        updateValue,
        value,
      }}
    >
      <ColorPickerElement
        {...extractElementProps(props, [intrinsicStyledCoreProps])}
        colorPickerSize={props.size}
        colorPickerSizeSm={props.sizeSm}
        colorPickerSizeMd={props.sizeMd}
        colorPickerSizeLg={props.sizeLg}
        colorPickerSizeXl={props.sizeXl}
        isOutline={props.isOutline}
        palette={props.palette}
      >
        <PickerSection
          hasOpacityPicker={props.hasOpacityPicker}
          onDrag={handleDrag}
        />
        { (props.hasConsole || props.hasButtons) && (
          <Hr
            border="none"
            background="transparent"
            width="100%"
          />
        ) }
        { props.hasConsole && (
          <ConsoleSection
            format={props.format}
            initialValue={initialValue}
            onRef={v => { consoleSection.current = v }}
            palette={props.palette}
          />
        ) }
        { props.hasButtons && (
          <ButtonsSection
            cancelLabel={props.cancelLabel}
            isSoft={props.isSoft}
            onCancel={handleCancel}
            onSave={handleSave}
            palette={props.palette}
            saveLabel={props.saveLabel}
          />
        ) }
        { props.hasPalette && (
          <PaletteSection
            canAddColorToPalette={props.canAddColorToPalette}
            format={props.format}
            palette={props.palette}
            paletteColors={props.paletteColors}
            setPaletteColors={props.setPaletteColors}
          />
        ) }
      </ColorPickerElement>
    </ColorPickerProps.Provider>
  )
}

ColorPicker.defaultProps = {
  format: ColorPickerFormat.HEX,
  canAddColorToPalette: true,
  hasButtons: true,
  hasConsole: true,
  hasOpacityPicker: true,
  hasPalette: true,
  size: 'medium',
  palette: 'primary',
}

export default ColorPicker
