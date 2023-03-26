import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import InputElement from '../components/Input/InputElement'
import InputWrapper from '../components/Input/InputWrapper'
import useAddons from '../hooks/useAddons'
import useInputMethods from '../hooks/useInputMethods'
import { InputType } from '../types'
import InputAddon from './InputAddon'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  defaultValue?: string
  hasBorder?: boolean
  hasSpellCheck?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isSoft?: boolean
  label?: ContentElement
  leftAddon?: ContentElement
  palette?: PaletteProp
  placeholder?: string
  rightAddon?: ContentElement
  setValue?: SetState<string>
  shape?: ShapeProp
  template?: JSX.Element
  type?: InputType
  value?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const { handleOnBlur, handleOnChange, handleOnFocus, isFocused } = useInputMethods({
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onFocus: props.onFocus,
    setValue: props.setValue,
  })

  const { leftAddon, rightAddon } = useAddons({
    Component: InputAddon,
    leftAddon: props.leftAddon,
    rightAddon: props.rightAddon,
    props: {
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
        { leftAddon?.props?.isExcluded && leftAddon }
        <InputWrapper
          hasBorder={props.hasBorder}
          hasExcludedLeftAddon={leftAddon?.props?.isExcluded}
          hasExcludedRightAddon={rightAddon?.props?.isExcluded}
          isDisabled={props.isDisabled}
          isFocused={isFocused}
          isOutline={props.isOutline}
          isSoft={props.isSoft}
          palette={props.palette}
          shape={props.shape}
        >
          { (leftAddon && !leftAddon?.props?.isExcluded) && leftAddon }
          { React.cloneElement(props.template, {
            ...extractElementProps(props, [changeEvents, focusEvents, keyboardEvents]),
            ...(typeof props.defaultValue !== 'undefined' && { defaultValue: props.defaultValue }),
            ...(typeof props.hasSpellCheck !== 'undefined' && { spellCheck: props.hasSpellCheck }),
            ...(props.isDisabled && { disabled: true }),
            ...(props.isReadOnly && { readOnly: true }),
            ...(props.isRequired && { required: true }),
            ...(typeof props.placeholder !== 'undefined' && { placeholder: props.placeholder }),
            ...(typeof props.value !== 'undefined' && { value: props.value }),
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
            type: props.type,
          }) }
          { (rightAddon && !rightAddon?.props?.isExcluded) && rightAddon }
        </InputWrapper>
        { rightAddon?.props?.isExcluded && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

Input.defaultProps = {
  hasBorder: true,
  isBlock: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  template: <InputElement />,
  type: InputType.TEXT,
}

export default Input
