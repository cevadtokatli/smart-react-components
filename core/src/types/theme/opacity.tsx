import { OptionalThemeAttributes } from './util'

interface DefaultOpacityAttributes {
  breadcrumbDisabled: number
  buttonDisabled: number
  dropdownDisabled: number
  formDisabled: number
  inputPlaceholder: number
  paginationDisabled: number
}

type OpacityAttributes = DefaultOpacityAttributes & OptionalThemeAttributes

export default OpacityAttributes
