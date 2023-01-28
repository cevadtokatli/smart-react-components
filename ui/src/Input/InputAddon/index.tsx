import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { ContentElement, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../../types'
import InputAddonElement from './InputAddonElement'

export { OrderPosition as Position } from '../../types'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents {
  children: ContentElement
  isOutline?: boolean
  isSeparated?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  position?: OrderPosition
}

interface PrivateProps {
  hasBorder: boolean
  isDisabled: boolean
  isFocused: boolean
  shape: ShapeProp
}

const InputAddon: React.FC<Props> = (props: Props & PrivateProps) => (
  <InputAddonElement
    addonPosition={props.position}
    hasBorder={props.hasBorder}
    inputSize={props.size}
    inputSizeSm={props.sizeSm}
    inputSizeMd={props.sizeMd}
    inputSizeLg={props.sizeLg}
    inputSizeXl={props.sizeXl}
    isDisabled={props.isDisabled}
    isFocused={props.isFocused}
    isOutline={props.isOutline}
    isSeparated={props.isSeparated}
    isSoft={props.isSoft}
    palette={props.palette}
    shape={props.shape}
    {...extractElementProps(props, [clickEvents])}
  >
    {props.children}
  </InputAddonElement>
)

InputAddon.defaultProps = {
  position: OrderPosition.LEFT,
}

InputAddon.displayName = 'SRCAddon'

export default InputAddon
