import { OptionalThemeAttributes } from './util'

interface DefaultFontFamilyAttributes {
  primary: string
  secondary: string
  popover: string
  popoverHeader: string
  progressBar: string
}

type FontFamilyAttributes = DefaultFontFamilyAttributes & OptionalThemeAttributes

export default FontFamilyAttributes
