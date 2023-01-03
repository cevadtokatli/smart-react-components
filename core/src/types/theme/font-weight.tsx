import { OptionalThemeAttributes } from './util'

interface DefaultFontWeightAttributes {
  light: string
  normal: string
  semibold: string
  bold: string
}

type FontWeightAttributes = DefaultFontWeightAttributes & OptionalThemeAttributes

export default FontWeightAttributes