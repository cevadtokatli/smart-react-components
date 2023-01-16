import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  popover: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
