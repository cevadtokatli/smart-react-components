import React from 'react'
import CheckboxGroup, { Props as CheckboxGroupProps } from '../../Checkbox/CheckboxGroup'

export { OrderPosition as Position } from '../../types'

export type Props = Omit<CheckboxGroupProps, 'shape'>

const SwitchGroup: React.FC<Props> = CheckboxGroup

export default SwitchGroup
