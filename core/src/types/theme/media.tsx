import { OptionalThemeAttributes } from './util'

interface DefaultMediaAttributes {
  opacityBackground: string
}

type MediaAttributes = DefaultMediaAttributes & OptionalThemeAttributes

export default MediaAttributes
