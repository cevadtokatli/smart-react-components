import extractElementProps from '@smart-react-components/core/element-props'
import clickEvents, { ClickEvents } from '@smart-react-components/core/element-props/click-events'
import { ContentElement, JSXElementProps, PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { OrderPosition } from '../types'
import InputAddonElement from '../components/Input/InputAddonElement'
import { isItemClickable } from '../util/props'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  ClickEvents {
  children: ContentElement
  elementProps?: JSXElementProps
  isOutline?: boolean
  isSeparated?: boolean
  isSoft?: boolean
  palette?: PaletteProp
}

interface PrivateProps {
  cursorKey?: string
  hasBorder: boolean
  isDisabled: boolean
  isFocused: boolean
  isReadOnly: boolean
  position: OrderPosition
  shape: ShapeProp
}

const InputAddon = React.forwardRef<HTMLDivElement, Props>((props: Props & PrivateProps, forwardRef) => (
  <InputAddonElement
    addonPosition={props.position}
    cursorKey={props.cursorKey}
    hasBorder={props.hasBorder}
    inputSize={props.size}
    inputSizeSm={props.sizeSm}
    inputSizeMd={props.sizeMd}
    inputSizeLg={props.sizeLg}
    inputSizeXl={props.sizeXl}
    isClickable={isItemClickable(props)}
    isDisabled={props.isDisabled}
    isFocused={props.isFocused}
    isOutline={props.isOutline}
    isReadOnly={props.isReadOnly}
    isSeparated={props.isSeparated}
    isSoft={props.isSoft}
    palette={props.palette}
    ref={forwardRef}
    shape={props.shape}
    {...extractElementProps(props, [clickEvents])}
    {...props.elementProps}
  >
    {props.children}
  </InputAddonElement>
))

InputAddon.defaultProps = {
  elementProps: {},
}

InputAddon.displayName = 'SRCAddon'

export default InputAddon
