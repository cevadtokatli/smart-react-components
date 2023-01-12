import { Size } from '../'
import { OptionalThemeAttribute } from './util'

interface DefaultSizeAttributes {
  loading: Size<string>
}

interface OptionalSizeAttributes {
  [key: string]: Size<OptionalThemeAttribute>
}

type SizeAttributes = DefaultSizeAttributes & OptionalSizeAttributes

export default SizeAttributes
