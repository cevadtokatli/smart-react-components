import { OptionalThemeAttributes } from './util'

interface DefaultOpacityAttributes {
  dropdownDisabled: number
}

type OpacityAttributes = DefaultOpacityAttributes & OptionalThemeAttributes

export default OpacityAttributes
