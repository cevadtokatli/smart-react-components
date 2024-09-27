import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledCoreProps, { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import CheckboxElement from '../components/Checkbox/CheckboxElement'
import FormInlineLabel from '../components/Form/FormInlineLabel'
import HiddenInput from '../components/Form/HiddenInput'
import { FormValue, OrderPosition } from '../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledCoreProps {
  active?: FormValue[]
  items: FormValue[]
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isSoft?: boolean
  label?: ContentElement
  name?: string
  palette?: PaletteProp
  position?: OrderPosition
  setActive?: SetState<FormValue[]>
  shape?: ShapeProp
  template?: JSX.Element
}

const CheckboxAll = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const { isChecked, isIndeterminate } = React.useMemo(() => ({
    isChecked: props.active.length > 0,
    isIndeterminate: props.active.length > 0 && props.active.length < props.items.length,
  }), [props.active, props.items])

  const handleOnChange = () => {
    if (!props.isDisabled && props.setActive) {
      if (isChecked && !isIndeterminate) {
        props.setActive([])
      } else {
        props.setActive(props.items)
      }
    }
  }

  const input = (
    <HiddenInput
      checked={isChecked}
      onChange={handleOnChange}
      ref={forwardRef}
      type="checkbox"
      {...(props.isDisabled && { disabled: true })}
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
      {...extractElementProps(props, [intrinsicStyledCoreProps])}
    >
      { React.cloneElement(props.template, {
        checkboxSize: props.size,
        checkboxSizeSm: props.sizeSm,
        checkboxSizeMd: props.sizeMd,
        checkboxSizeLg: props.sizeLg,
        checkboxSizeXl: props.sizeXl,
        children: (
          <>
            {input}
            {props.template.props.children}
          </>
        ),
        isChecked,
        isIndeterminate,
        isOutline: props.isOutline,
        isSoft: props.isSoft,
        palette: props.palette,
        shape: props.shape,
      }) }
      { props.label && <span>{props.label}</span> }
    </FormInlineLabel>
  )
})

CheckboxAll.defaultProps = {
  palette: 'primary',
  position: OrderPosition.RIGHT,
  shape: 'rectangle',
  size: 'medium',
  template: <CheckboxElement />,
}

export default CheckboxAll
