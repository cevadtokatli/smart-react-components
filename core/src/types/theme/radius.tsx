import { Shape } from '../'
import { OptionalThemeAttributes } from './util'

interface DefaultRadiusAttributes {
  alert: Shape<string>
  badge: Shape<string>
  breadcrumb: Shape<string>
  dropdown: string
  checkbox: Shape<string>
  input: Shape<string>
  pagination: Shape<string>
  popover: string
  tooltip: string
}

type RadiusAttributes = DefaultRadiusAttributes & OptionalThemeAttributes

export default RadiusAttributes
