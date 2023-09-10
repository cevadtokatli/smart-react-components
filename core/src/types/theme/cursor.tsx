import { OptionalThemeAttributes } from './util'

interface DefaultCursorAttributes {
  button: string
}

type CursorAttributes = DefaultCursorAttributes & OptionalThemeAttributes

export default CursorAttributes
