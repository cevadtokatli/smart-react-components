import { OptionalThemeAttributes } from './util'

interface DefaultFontWeightAttributes {
  light: string
  normal: string
  semibold: string
  bold: string
  alertLink: string
  dropdownCategory: string
  popoverHeader: string
  tableHead: string
}

type FontWeightAttributes = DefaultFontWeightAttributes & OptionalThemeAttributes

export default FontWeightAttributes
