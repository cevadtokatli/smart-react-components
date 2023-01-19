import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  dropdown: string
  popover: string
  tooltip: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
