import { Coordinator, Value } from '../'
import { Grid } from '../grid'
import { OptionalThemeAttributes } from './util'

interface DefaultLengthAttributes {
  0: Value
  1: Value
  2: Value
  3: Value
  4: Value
  5: Value
  breadcrumb: {
    padding: Coordinator<string>
  }
  breakpoint: Grid
  grid: {
    containerWidth: Grid
    space: string
  }
  overlay: {
    space: Coordinator<string>
  }
  pagination: {
    fixedSize: string
    margin: Coordinator<string>
    padding: Coordinator<string>
  }
  table: {
    border: string
    headBorder: string
  }
}

type LengthAttributes = DefaultLengthAttributes & OptionalThemeAttributes

export default LengthAttributes
