import { Shape } from '../'
import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  alert: Shape<string>
  badge: Shape<string>
  breadcrumb: Shape<string>
  button: Shape<string>
  datePicker: string
  datePickerItem: string
  dropdown: string
  checkbox: Shape<string>
  colorPicker: string
  input: Shape<string>
  modal: Shape<string>
  pagination: Shape<string>
  popover: string
  table: Shape<string>
  tooltip: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
