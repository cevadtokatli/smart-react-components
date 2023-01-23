import { OptionalThemeAttributes } from './util'

interface DefaultOpacityAttributes {
  breadcrumbDisabled: number
  dropdownDisabled: number
  paginationDisabled: number
}

type OpacityAttributes = DefaultOpacityAttributes & OptionalThemeAttributes

export default OpacityAttributes
