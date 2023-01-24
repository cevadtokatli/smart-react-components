import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { FormValue, OrderPosition } from '../../types'
import FormHiddenInput from '../FormHiddenInput'
import FormInlineLabel from '../FormInlineLabel'
import RadioElement, { Circle, ScaleArea } from './RadioElement'

export { OrderPosition as Position } from '../../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  active?: FormValue
  children?: ContentElement
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isRequired?: boolean
  isSoft?: boolean
  name?: string
  palette?: PaletteProp
  position?: OrderPosition
  render?: (props: { isChecked: boolean }) => JSX.Element
  setActive?: SetState<FormValue>
  value: FormValue
}

const Radio = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const handleOnChange = () => {
    if (!props.isDisabled) {
      props.setActive(props.value)
    }
  }

  const input = (
    <FormHiddenInput
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
      { props.render
        ? (
          <>
            { props.render({ isChecked: props.value === props.active }) }
            { input }
          </>
          )
        : (
          <RadioElement
            isChecked={props.value === props.active}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
            radioSize={props.size}
            radioSizeSm={props.sizeSm}
            radioSizeMd={props.sizeMd}
            radioSizeLg={props.sizeLg}
            radioSizeXl={props.sizeXl}
          >
            { input }
            <ScaleArea>
              <Circle />
            </ScaleArea>
          </RadioElement>
          )
      }
      { props.children && <span>{props.children}</span> }
    </FormInlineLabel>
  )
})

Radio.defaultProps = {
  palette: 'primary',
  position: OrderPosition.RIGHT,
  size: 'medium',
}

export default Radio
