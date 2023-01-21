import { Shape } from '../'
import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  alert: Shape<string>
  dropdown: string
  popover: string
  tooltip: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
