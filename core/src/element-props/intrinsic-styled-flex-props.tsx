import { includeResponsiveProps } from './'
import { AlignSelf, Flex, FlexBasis, FlexGrow, FlexShrink, Order, Property } from '../styled-props/css-properties'
import { ResponsiveProps } from '../types'

export type IntrinsicStyledFlexProps = ResponsiveProps<{
  alignSelf?: Property<AlignSelf>
  flex?: Property<Flex>
  flexBasis?: Property<FlexBasis>
  flexGrow?: Property<FlexGrow>
  flexShrink?: Property<FlexShrink>
  order?: Property<Order>
}>

const intrinsicStyledFlexProps = includeResponsiveProps([
  'alignSelf',
  'flex',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'order',
])

export default intrinsicStyledFlexProps
