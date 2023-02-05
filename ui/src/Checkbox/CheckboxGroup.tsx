import extractElementProps from '@smart-react-components/core/element-props'
import intrinsicStyledProps, { IntrinsicStyledProps } from '@smart-react-components/core/element-props/intrinsic-styled-props'
import { PaletteProp, Partial, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import FormGroup from '../components/Form/FormGroup'
import { FormValue, OrderPosition } from '../types'

export { OrderPosition as Position } from '../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledProps {
  active?: FormValue[]
  children: JSX.Element[]
  isBlock?: boolean
  isOutline?: boolean
  isRequired?: boolean
  isSoft?: boolean
  name?: string
  palette?: PaletteProp
  position?: OrderPosition
  setActive?: SetState<FormValue[]>
  shape?: ShapeProp
  template?: JSX.Element
}

const CheckboxGroup: React.FC<Props> = props => (
  <FormGroup
    isBlock={props.isBlock}
    {...extractElementProps(props, [intrinsicStyledProps])}
  >
    { props.children.map((item, idx) => React.cloneElement(item, {
      key: item.key ?? idx,
      active: props.active,
      isBlock: props.isBlock,
      isOutline: props.isOutline,
      isRequired: props.isRequired,
      isSoft: props.isSoft,
      name: props.name,
      palette: props.palette,
      position: props.position,
      setActive: props.setActive,
      shape: props.shape,
      template: props.template,
      ...item.props,
    })) }
  </FormGroup>
)

export default CheckboxGroup
