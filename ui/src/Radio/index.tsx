import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormInlineLabel from '../components/FormInlineLabel'
import HiddenInput from '../components/HiddenInput'
import RadioElement from '../components/Radio/RadioElement'
import { FormValue, OrderPosition } from '../types'

export { OrderPosition as Position } from '../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  active?: FormValue
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isRequired?: boolean
  isSoft?: boolean
  label?: ContentElement
  name?: string
  palette?: PaletteProp
  position?: OrderPosition
  setActive?: SetState<FormValue>
  template?: JSX.Element
  value: FormValue
}

const Radio = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const handleOnChange = () => {
    if (!props.isDisabled) {
      props.setActive(props.value)
    }
  }

  const input = (
    <HiddenInput
      checked={props.value === props.active}
      onChange={handleOnChange}
      ref={forwardRef}
      type="radio"
      {...(props.isDisabled && { disabled: true })}
      {...(props.isRequired && { required: true })}
      {...(props.name && { name: props.name })}
    />
  )

  return (
    <FormInlineLabel
      formSize={props.size}
      formSizeSm={props.sizeSm}
      formSizeMd={props.sizeMd}
      formSizeLg={props.sizeLg}
      formSizeXl={props.sizeXl}
      isBlock={props.isBlock}
      isDisabled={props.isDisabled}
      labelPosition={props.position}
      {...extractElementProps(props, [intrinsicStyledProps])}
    >
      { React.cloneElement(props.template, {
        children: (
          <>
            {input}
            {props.template.props.children}
          </>
        ),
        isChecked: props.value === props.active,
        isOutline: props.isOutline,
        isSoft: props.isSoft,
        palette: props.palette,
        radioSize: props.size,
        radioSizeSm: props.sizeSm,
        radioSizeMd: props.sizeMd,
        radioSizeLg: props.sizeLg,
        radioSizeXl: props.sizeXl,
      }) }
      { props.label && <span>{props.label}</span> }
    </FormInlineLabel>
  )
})

Radio.defaultProps = {
  palette: 'primary',
  position: OrderPosition.RIGHT,
  size: 'medium',
  template: <RadioElement />,
}

export default Radio
