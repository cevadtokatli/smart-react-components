import { includeResponsiveProps } from './'
import { Margin, Property } from '../styled-props/css-properties'
import { ResponsiveProps } from '../types'

export type IntrinsicStyledMarginProps = ResponsiveProps<{
  margin?: Property<Margin>
  marginBlock?: Property<Margin>
  marginBlockEnd?: Property<Margin>
  marginBlockStart?: Property<Margin>
  marginBottom?: Property<Margin>
  marginHorizontal?: Property<Margin>
  marginInline?: Property<Margin>
  marginInlineEnd?: Property<Margin>
  marginInlineStart?: Property<Margin>
  marginLeft?: Property<Margin>
  marginRight?: Property<Margin>
  marginTop?: Property<Margin>
  marginVertical?: Property<Margin>
}>

const intrinsicStyledMarginProps = includeResponsiveProps([
  'margin',
  'marginBlock',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginHorizontal',
  'marginInline',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginVertical',
])

export default intrinsicStyledMarginProps
