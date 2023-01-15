import { OptionalThemeAttributes } from './util'

interface DefaultZIndexAttributes {
  fixedBox: number
  overlay: number
}

type ZIndexAttributes = DefaultZIndexAttributes & OptionalThemeAttributes

export default ZIndexAttributes
