import { OptionalThemeAttributes } from './util'

interface DefaultFontFamilyAttributes {
  primary: string
  secondary: string
}

type FontFamilyAttributes = DefaultFontFamilyAttributes & OptionalThemeAttributes

export default FontFamilyAttributes
