import { OptionalThemeAttributes } from './util'

interface DefaultZIndexAttributes {
  fixedBox: number
  overlay: number
  popover: number
}

type ZIndexAttributes = DefaultZIndexAttributes & OptionalThemeAttributes

export default ZIndexAttributes
