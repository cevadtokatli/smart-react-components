import Div from '@smart-react-components/core/Element/Div'
import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormBlockLabel from '../components/Form/FormBlockLabel'
import useAddons from '../hooks/useAddons'
import InputFileTemplate from '../components/Input/InputFileTemplate'
import HiddenInput from '../components/Form/HiddenInput'
import InputWrapper from '../components/Input/InputWrapper'
import useInputMethods from '../hooks/useInputMethods'
import InputAddon from './InputAddon'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  accept?: string
  hasBorder?: boolean
  isBlock?: boolean
  isDisabled?: boolean
  isRequired?: boolean
  isOutline?: boolean
  isSoft?: boolean
  label?: ContentElement
  leftAddon?: ContentElement
  palette?: PaletteProp
  placeholder?: string
  rightAddon?: ContentElement
  setValue: SetState<File | File[]>
  shape?: ShapeProp
  template?: JSX.Element
  value: File | File[] | null
}

const InputFile = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const { handleOnBlur, handleOnFocus, isFocused } = useInputMethods({
    isDisabled: props.isDisabled,
    isReadOnly: false,
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.isDisabled) {
      return
    }

    if (!Array.isArray(props.value)) {
      setValue(e.target.files[0])
    } else {
      setValue([...props.value, ...e.target.files].filter(i => !!i))
    }
  }

  const setValue = (value: File | File[]) => {
    if (!value || (value as File[]).length === 0) {
      const el = ((forwardRef ?? ref) as React.RefObject<HTMLInputElement>).current
      el.value = ''
    }

    props.setValue(value)
  }

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
            children: (
              <>
                <HiddenInput
                  {...(props.accept && { accept: props.accept })}
                  {...(props.isDisabled && { disabled: true })}
                  {...(props.isRequired && { required: true })}
                  multiple={Array.isArray(props.value)}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  ref={forwardRef ?? ref}
                  type="file"
                />
                {props.template.props.children}
              </>
            ),
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
            palette: props.palette,
            placeholder: props.placeholder,
            setValue,
            shape: props.shape,
            value: props.value,
          }) }
          { (rightAddon && !rightAddon?.props?.isExcluded) && rightAddon }
        </InputWrapper>
        { rightAddon?.props?.isExcluded && rightAddon }
      </Div>
    </FormBlockLabel>
  )
})

InputFile.defaultProps = {
  hasBorder: true,
  isBlock: true,
  isOutline: true,
  palette: 'primary',
  shape: 'rectangle',
  size: 'medium',
  template: <InputFileTemplate />,
}

export default InputFile
