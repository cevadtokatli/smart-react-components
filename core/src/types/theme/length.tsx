import { Value } from '../'
import { Grid } from '../grid'
import { OptionalThemeAttributes } from './util'

interface DefaultLengthAttributes {
  0: Value
  1: Value
  2: Value
  3: Value
  4: Value
  5: Value
  breakpoint: Grid
  grid: {
    containerWidth: Grid
  }
}

type LengthAttributes = DefaultLengthAttributes & OptionalThemeAttributes

export default LengthAttributes
