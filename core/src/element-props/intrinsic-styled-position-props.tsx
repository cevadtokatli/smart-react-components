import { includeResponsiveProps } from './'
import { Dimension, Position, Property } from '../styled-props/css-properties'
import { ResponsiveProps } from '../types'

export type IntrinsicStyledFlexProps = ResponsiveProps<{
  bottom?: Property<Dimension>
  left?: Property<Dimension>
  position?: Property<Position>
  right?: Property<Dimension>
  top?: Property<Dimension>
}>

const intrinsicStyledPositionProps = includeResponsiveProps([
  'bottom',
  'left',
  'position',
  'right',
  'top',
])

export default intrinsicStyledPositionProps
