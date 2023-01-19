import { OptionalThemeAttributes } from './util'

interface DefaultFontWeightAttributes {
  light: string
  normal: string
  semibold: string
  bold: string
  dropdownCategory: string
  popoverHeader: string
}

type FontWeightAttributes = DefaultFontWeightAttributes & OptionalThemeAttributes

export default FontWeightAttributes
