import React from 'react'
import Checkbox, { Props as CheckboxProps } from '../Checkbox'
import SwitchElement from '../components/Switch/SwitchElement'

export { OrderPosition as Position } from '../types'

export type Props = Omit<CheckboxProps, 'shape'>

const Switch = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => <Checkbox {...props} ref={forwardRef} />)

Switch.defaultProps = {
  ...Checkbox.defaultProps,
  template: <SwitchElement />,
}

export default Switch
