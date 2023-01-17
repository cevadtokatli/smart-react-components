import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  popover: string
  tooltip: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
