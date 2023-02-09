import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import intrinsicStyledProps from '@smart-react-components/core/element-props/intrinsic-styled-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import { Color, ContentElement, Nullable, ShapeProp } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import ColorPicker, { ColorPickerFormat, Props as ColorPickerProps } from '../ColorPicker'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import InputElement from '../components/Input/InputElement'
import FixedBox from '../FixedBox'
import useAddons from '../hooks/useAddons'
import { colorToString, convertColor } from '../util/color-picker'
import InputAddon from './InputAddon'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { applyResponsiveStyledProp } from '../util/props'

export { ColorPickerFormat } from '../ColorPicker'

export interface Props extends
  ColorPickerProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  hasBorder?: boolean
  isBlock?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  label?: string
  leftAddon?: ContentElement
  placeholder?: string
  rightAddon?: ContentElement
  shape?: ShapeProp
}

const InputColorPicker = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const [status, setStatus] = React.useState(() => false)

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      hasBorder: props.hasBorder,
      isDisabled: props.isDisabled,
      isFocused: status,
      isOutline: props.isOutline,
      isSoft: props.isSoft,
      palette: props.palette,
      shape: props.shape,
      size: props.size,
      sizeSm: props.sizeSm,
      sizeMd: props.sizeMd,
      sizeLg: props.sizeLg,
      sizeXl: props.sizeXl,
    },
  })

  const updateInput = (value: Nullable<Color>) => {
    const input = ((forwardRef as React.MutableRefObject<HTMLInputElement>) ?? ref).current
    input.value = value ? colorToString(value, props.format) : ''
  }

  const updateValue = (value: string) => props.setValue(colorToString(getColor(value), props.format))

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).value
    if (getColor(value)) {
      updateValue(value)
    }

    props.onChange?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      updateValue((e.target as HTMLInputElement).value)
    }

    props.onKeyDown?.(e)
  }

  const handleCancel = (e: Event) => {
    props.onCancel?.(e)

    if (!e.defaultPrevented) {
      setStatus(false)
    }
  }

  const handleDrag = (value: Nullable<Color>) => {
    props.onDrag?.(value)

    updateInput(value)
  }

  const handleSave = (e: Event) => {
    props.onSave?.(e)

    if (!e.defaultPrevented) {
      setStatus(false)
    }
  }

  useChangeEffect(() => {
    updateInput(props.value ? getColor(props.value) : null)
  }, [props.value])

  return (
    <FormBlockLabel
      {...extractElementProps(props, [intrinsicStyledProps])}
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
    >
      { props.label && <span>{props.label}</span> }
      <Div
        display="flex"
        flex="1 1 auto"
      >
        { leftAddon && leftAddon }
        <FixedBox
          elementProps={{
            ...applyResponsiveStyledProp(props, 'size', 'width', v => `$size.colorPicker.${v}.width`),
            background: '$color.dynamic.background',
            borderRadius: '$radius.colorPicker',
            boxShadow: '0 0 10px 1px {color.dynamic.shadow}',
            height: ['auto', true],
          }}
          maxWidth={-1}
          minWidth={-1}
          setStatus={setStatus}
          status={status}
        >
          <InputElement
            {...(!props.isDisabled && extractElementProps(props, [changeEvents, focusEvents, keyboardEvents]))}
            {...(!props.isDisabled && {
              onChange: handleChange,
              onKeyDown: handleKeyDown,
            })}
            {...(props.isDisabled && { disabled: true })}
            {...(props.isReadOnly && { readOnly: true })}
            {...(props.isRequired && { required: true })}
            {...(typeof props.placeholder !== 'undefined' && { placeholder: props.placeholder })}
            defaultValue={props.value ? convertColor(getColor(props.value), props.format) : ''}
            hasBorder={props.hasBorder}
            hasLeftAddon={!!leftAddon}
            hasRightAddon={!!rightAddon}
            hasSeparatedLeftAddon={leftAddon?.props?.isSeparated}
            hasSeparatedRightAddon={rightAddon?.props?.isSeparated}
            inputSize={props.size}
            inputSizeSm={props.sizeSm}
            inputSizeMd={props.sizeMd}
            inputSizeLg={props.sizeLg}
            inputSizeXl={props.sizeXl}
            isDisabled={props.isDisabled}
            isFocused={status}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
            ref={forwardRef ?? ref}
            shape={props.shape}
          />
          <ColorPicker
            canAddColorToPalette={props.canAddColorToPalette}
            cancelLabel={props.cancelLabel}
            format={props.format}
            hasButtons={props.hasButtons}
            hasConsole={props.hasConsole}
            hasPalette={props.hasPalette}
            hasOpacityPicker={props.hasOpacityPicker}
            isDisabled={props.isDisabled}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
            paletteColors={props.paletteColors}
            onCancel={handleCancel}
            onDrag={handleDrag}
            onSave={handleSave}
            saveLabel={props.saveLabel}
            setPaletteColors={props.setPaletteColors}
            setValue={props.setValue}
            value={props.value}
          />
        </FixedBox>
        { rightAddon && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

InputColorPicker.defaultProps = {
  format: ColorPickerFormat.HEX,
  hasBorder: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
}

export default InputColorPicker
