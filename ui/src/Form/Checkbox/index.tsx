import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { FormValue, OrderPosition } from '../../types'
import FormHiddenInput from '../FormHiddenInput'
import FormInlineLabel from '../FormInlineLabel'
import CheckboxElement from './CheckboxElement'

export { OrderPosition as Position } from '../../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  active?: FormValue[]
  children?: ContentElement
  isBlock?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isRequired?: boolean
  isSoft?: boolean
  name?: string
  palette?: PaletteProp
  position?: OrderPosition
  render?: (props: { isChecked: boolean }) => JSX.Element
  setActive?: SetState<FormValue[]>
  setChecked?: SetState<boolean>
  shape?: ShapeProp
  value?: FormValue
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const getChecked = () => {
    if (props.setChecked) {
      return props.isChecked
    }

    if (props.setActive) {
      return typeof props.active.find(v => v === props.value) !== 'undefined'
    }

    return false
  }

  const [isChecked, setChecked] = React.useState(() => getChecked())

  useChangeEffect(() => {
    setChecked(getChecked())
  }, [props.active, props.isChecked])

  const handleOnChange = () => {
    if (!props.isDisabled) {
      if (props.setChecked) {
        props.setChecked(!props.isChecked)
      } else if (props.setActive) {
        if (!props.active.includes(props.value)) {
          props.setActive([...props.active, props.value])
        } else {
          props.setActive(props.active.filter(item => item !== props.value))
        }
      }
    }
  }

  const input = (
    <FormHiddenInput
      checked={isChecked}
      onChange={handleOnChange}
      ref={forwardRef}
      type="checkbox"
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
            { props.render({ isChecked }) }
            { input }
          </>
          )
        : (
          <CheckboxElement
            checkboxSize={props.size}
            checkboxSizeSm={props.sizeSm}
            checkboxSizeMd={props.sizeMd}
            checkboxSizeLg={props.sizeLg}
            checkboxSizeXl={props.sizeXl}
            isChecked={isChecked}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
            shape={props.shape}
          >
            { input }
          </CheckboxElement>
          )
      }
      { props.children && <span>{props.children}</span> }
    </FormInlineLabel>
  )
})

Checkbox.defaultProps = {
  palette: 'primary',
  position: OrderPosition.RIGHT,
  shape: 'rectangle',
  size: 'medium',
}

export default Checkbox
