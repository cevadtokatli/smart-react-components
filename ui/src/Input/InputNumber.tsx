import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import intrinsicStyledFlexProps from '@smart-react-components/core/element-props/intrinsic-styled-flex-props'
import intrinsicStyledMarginProps from '@smart-react-components/core/element-props/intrinsic-styled-margin-props'
import intrinsicStyledSizeProps from '@smart-react-components/core/element-props/intrinsic-styled-size-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import useAddons from '../hooks/useAddons'
import useInputMethods from '../hooks/useInputMethods'
import InputNumberTemplate from '../components/Input/InputNumberTemplate'
import InputWrapper from '../components/Input/InputWrapper'
import InputAddon from './InputAddon'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledCoreProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  defaultValue?: number
  hasBorder?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isSoft?: boolean
  label?: ContentElement
  leftAddon?: ContentElement
  max?: number
  min?: number
  palette?: PaletteProp
  placeholder?: string
  rightAddon?: ContentElement
  setValue?: SetState<number>
  shape?: ShapeProp
  step?: number
  template?: JSX.Element
  value?: number
}

const InputNumber = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  /**
   * Converts the input string value to number.
   * If value cannot be number, returns the current value.
   */
  const applyNumberFormat = (value: string): number => {
    if (!value.trim()) {
      return null
    }

    if (isNaN(Number(value))) {
      return props.value
    }

    const i = parseInt(value)

    if (typeof props.min !== 'undefined' && i < props.min) {
      return props.value
    }

    if (typeof props.max !== 'undefined' && i > props.max) {
      return props.value
    }

    return i
  }

  const { handleOnBlur, handleOnChange, handleOnFocus, isFocused } = useInputMethods({
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onFocus: props.onFocus,
    setValue: value => props.setValue?.(applyNumberFormat(value)),
  })

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
      cursorKey: 'input',
      hasBorder: props.hasBorder,
      isDisabled: props.isDisabled,
      isFocused,
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

  return (
    <FormBlockLabel
      {...extractElementProps(props, [intrinsicStyledFlexProps, intrinsicStyledMarginProps])}
      cursorKey="input"
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
      palette={props.palette}
    >
      { props.label && <span>{props.label}</span> }
      <Div
        display="flex"
        flex="1 1 auto"
      >
        { leftAddon?.props?.isSeparated && leftAddon }
        <InputWrapper
          hasBorder={props.hasBorder}
          hasSeparatedLeftAddon={leftAddon?.props?.isSeparated}
          hasSeparatedRightAddon={rightAddon?.props?.isSeparated}
          isDisabled={props.isDisabled}
          isFocused={isFocused}
          isOutline={props.isOutline}
          isSoft={props.isSoft}
          palette={props.palette}
          shape={props.shape}
        >
          { (leftAddon && !leftAddon?.props?.isSeparated) && leftAddon }
          { React.cloneElement(props.template, {
            ...extractElementProps(props, [changeEvents, focusEvents, keyboardEvents, intrinsicStyledSizeProps]),
            ...(typeof props.defaultValue !== 'undefined' && { defaultValue: (props.defaultValue ?? '') }),
            ...(props.isDisabled && { disabled: true }),
            ...(props.isReadOnly && { readOnly: true }),
            ...(props.isRequired && { required: true }),
            ...(typeof props.max !== 'undefined' && { max: props.max }),
            ...(typeof props.min !== 'undefined' && { min: props.min }),
            ...(typeof props.step !== 'undefined' && { step: props.step }),
            ...(typeof props.value !== 'undefined' && { value: (props.value ?? '') }),
            hasBorder: props.hasBorder,
            hasLeftAddon: !!leftAddon,
            hasRightAddon: !!rightAddon,
            inputSize: props.size,
            inputSizeSm: props.sizeSm,
            inputSizeMd: props.sizeMd,
            inputSizeLg: props.sizeLg,
            inputSizeXl: props.sizeXl,
            isDisabled: props.isDisabled,
            isFocused,
            isOutline: props.isOutline,
            isSoft: props.isSoft,
            onBlur: handleOnBlur,
            onChange: handleOnChange,
            onFocus: handleOnFocus,
            palette: props.palette,
            ref: forwardRef,
            shape: props.shape,
          }) }
          { (rightAddon && !rightAddon?.props?.isSeparated) && rightAddon }
        </InputWrapper>
        { rightAddon?.props?.isSeparated && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

InputNumber.defaultProps = {
  hasBorder: true,
  isBlock: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  template: <InputNumberTemplate />,
}

export default InputNumber
