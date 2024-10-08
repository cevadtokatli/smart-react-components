import { OptionalThemeAttributes } from './util'

interface DefaultFontFamilyAttributes {
  primary: string
  secondary: string
  datePicker: string
  dropdown: string
  alert: string
  badge: string
  breadcrumb: string
  button: string
  form: string
  input: string
  modalTitle: string
  pagination: string
  popover: string
  popoverHeader: string
  progressBar: string
  table: string
  tableHead: string
  tooltip: string
}

type FontFamilyAttributes = DefaultFontFamilyAttributes & OptionalThemeAttributes

export default FontFamilyAttributes
