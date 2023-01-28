import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormBlockLabel from '../components/FormBlockLabel'
import useInputContent from '../hooks/useInputContent'
import useInputMethods from '../hooks/useInputMethods'
import { InputType } from '../types'
import InputElement from './InputElement'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  children?: ContentElement | ContentElement[]
  defaultValue?: string
  hasBorder?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  placeholder?: string
  setValue?: SetState<string>
  shape?: ShapeProp
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

  const { hasSeparatedLeftAddon, hasSeparatedRightAddon, labelContent, leftAddon, rightAddon } = useInputContent({
    children: props.children,
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
  })

  return (
    <FormBlockLabel
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
    >
      { labelContent && labelContent}
      <Div
        display="flex"
        flex="1 1 auto"
      >
        { leftAddon && leftAddon }
        <InputElement
          {...extractElementProps(props, [changeEvents, focusEvents, keyboardEvents])}
          {...(typeof props.defaultValue !== 'undefined' && { defaultValue: props.defaultValue })}
          {...(props.isDisabled && { disabled: true })}
          {...(props.isReadOnly && { readOnly: true })}
          {...(props.isRequired && { required: true })}
          {...(typeof props.placeholder !== 'undefined' && { placeholder: props.placeholder })}
          {...(typeof props.value !== 'undefined' && { value: props.value })}
          hasBorder={props.hasBorder}
          hasLeftAddon={!!leftAddon}
          hasRightAddon={!!rightAddon}
          hasSeparatedLeftAddon={hasSeparatedLeftAddon}
          hasSeparatedRightAddon={hasSeparatedRightAddon}
          inputSize={props.size}
          inputSizeSm={props.sizeSm}
          inputSizeMd={props.sizeMd}
          inputSizeLg={props.sizeLg}
          inputSizeXl={props.sizeXl}
          isDisabled={props.isDisabled}
          isFocused={isFocused}
          isOutline={props.isOutline}
          isSoft={props.isSoft}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          palette={props.palette}
          ref={forwardRef}
          shape={props.shape}
          type={props.type}
        />
        { rightAddon && rightAddon }
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
  type: InputType.TEXT,
}

export default Input
