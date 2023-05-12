import React from 'react'
import ButtonGroupElement from '../components/Button/ButtonGroupElement'
import { ButtonListGenericProps } from '../types/button'
import ButtonList from './ButtonList'

export interface Props extends ButtonListGenericProps {}

const ButtonGroup: React.FC<Props> = props => (
  <ButtonList
    {...props}
    hasSpace={false}
    template={<ButtonGroupElement shape={props.shape} />}
  >
    {props.children}
  </ButtonList>
)

ButtonGroup.defaultProps = {
  shape: 'rounded',
}

export default ButtonGroup
