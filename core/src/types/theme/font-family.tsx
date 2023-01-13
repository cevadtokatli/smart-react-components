import { OptionalThemeAttributes } from './util'

interface DefaultFontFamilyAttributes {
  primary: string
  secondary: string
  progressBar: string
}

type FontFamilyAttributes = DefaultFontFamilyAttributes & OptionalThemeAttributes

export default FontFamilyAttributes
