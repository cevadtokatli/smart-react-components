import { OptionalThemeAttributes } from './util'

interface DefaultZIndexAttributes {
  buttonLoading: number
  fixedBox: number
  modal: number
  overlay: number
  popover: number
  tooltip: number
}

type ZIndexAttributes = DefaultZIndexAttributes & OptionalThemeAttributes

export default ZIndexAttributes
