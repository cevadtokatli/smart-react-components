import { OptionalThemeAttributes } from './util'

interface DefaultOpacityAttributes {
  breadcrumbDisabled: number
  dropdownDisabled: number
  formDisabled: number
  paginationDisabled: number
}

type OpacityAttributes = DefaultOpacityAttributes & OptionalThemeAttributes

export default OpacityAttributes
