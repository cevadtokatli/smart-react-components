import { OptionalThemeAttributes } from './util'

interface DefaultZIndexAttributes {
  overlay: number
}

type ZIndexAttributes = DefaultZIndexAttributes & OptionalThemeAttributes

export default ZIndexAttributes
