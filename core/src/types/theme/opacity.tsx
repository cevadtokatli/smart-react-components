import { OptionalThemeAttributes } from './util'

interface DefaultOpacityAttributes {
  breadcrumbDisabled: number
  dropdownDisabled: number
}

type OpacityAttributes = DefaultOpacityAttributes & OptionalThemeAttributes

export default OpacityAttributes
