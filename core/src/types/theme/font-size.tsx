import { Value } from '../'
import { OptionalThemeAttributes } from './util'

interface DefaultFontSizeAttributes {
  1: Value
  2: Value
  3: Value
  4: Value
  5: Value
  breadcrumb: string
  progressBar: string
}

type FontSizeAttributes = DefaultFontSizeAttributes & OptionalThemeAttributes

export default FontSizeAttributes
