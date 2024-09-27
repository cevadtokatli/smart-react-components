import { OptionalThemeAttributes } from './util'

interface DefaultCursorAttributes {
  alertIconClickable: string
  badgeClickable: string
  badgeIconClickable: string
  breadcrumb: string
  breadcrumbDisabled: string
  button: string
  dropdown: string
  formInlineLabel: string
  input: string
  inputAddonClickable: string
  inputFile: string
  modalHeaderIcon: string
  pagination: string
  paginationDisabled: string
  select: string
  selectBox: string
}

type CursorAttributes = DefaultCursorAttributes & OptionalThemeAttributes

export default CursorAttributes
