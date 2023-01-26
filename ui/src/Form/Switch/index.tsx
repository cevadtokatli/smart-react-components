import React from 'react'
import { OrderPosition } from '../../types'
import Checkbox, { Props as CheckboxProps } from '../Checkbox'
import SwitchElement from './SwitchElement'

export { OrderPosition as Position } from '../../types'

export type Props = Omit<CheckboxProps, 'shape'>

const Switch = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => (
  <Checkbox
    {...props}
    render={props.render ?? (({ isChecked }) => (
      <SwitchElement
        isChecked={isChecked}
        isOutline={props.isOutline}
        isSoft={props.isSoft}
        palette={props.palette}
        switchSize={props.size}
        switchSizeSm={props.sizeSm}
        switchSizeMd={props.sizeMd}
        switchSizeLg={props.sizeLg}
        switchSizeXl={props.sizeXl}
      />)
    )}
    ref={forwardRef}
  />
))

Switch.defaultProps = {
  palette: 'primary',
  position: OrderPosition.RIGHT,
  size: 'medium',
}

export default Switch
