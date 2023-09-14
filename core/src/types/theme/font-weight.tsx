import { OptionalThemeAttributes } from './util'

interface DefaultFontWeightAttributes {
  light: string
  normal: string
  semibold: string
  bold: string
  datePicker: string
  popoverHeader: string
  tableHead: string
}

type FontWeightAttributes = DefaultFontWeightAttributes & OptionalThemeAttributes

export default FontWeightAttributes
