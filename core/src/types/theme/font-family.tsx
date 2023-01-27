import { OptionalThemeAttributes } from './util'

interface DefaultFontFamilyAttributes {
  primary: string
  secondary: string
  dropdown: string
  alert: string
  badge: string
  breadcrumb: string
  form: string
  input: string
  pagination: string
  popover: string
  popoverHeader: string
  progressBar: string
  tooltip: string
}

type FontFamilyAttributes = DefaultFontFamilyAttributes & OptionalThemeAttributes

export default FontFamilyAttributes
