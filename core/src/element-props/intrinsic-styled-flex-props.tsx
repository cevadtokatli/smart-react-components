import { AlignSelf, Flex, FlexBasis, FlexGrow, FlexShrink, Order, Property } from '../styled-props/css-properties'

export interface IntrinsicStyledFlexProps {
  alignSelf?: Property<AlignSelf>
  flex?: Property<Flex>
  flexBasis?: Property<FlexBasis>
  flexGrow?: Property<FlexGrow>
  flexShrink?: Property<FlexShrink>
  order?: Property<Order>
}

const intrinsicStyledFlexProps = [
  'alignSelf',
  'flex',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'order',
]

export default intrinsicStyledFlexProps
