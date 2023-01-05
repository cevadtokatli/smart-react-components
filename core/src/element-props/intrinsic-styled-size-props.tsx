import { includeResponsiveProps } from './'
import { Property, Size } from '../styled-props/css-properties'
import { ResponsiveProps } from '../types'

export type IntrinsicStyledSizeProps = ResponsiveProps<{
  height?: Property<Size>
  maxHeight?: Property<Size>
  maxWidth?: Property<Size>
  minHeight?: Property<Size>
  minWidth?: Property<Size>
  width?: Property<Size>
}>

const intrinsicStyledSizeProps = includeResponsiveProps([
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'width',
])

export default intrinsicStyledSizeProps
