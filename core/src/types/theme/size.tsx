import { Coordinator, Size } from '../'
import { OptionalThemeAttribute } from './util'

interface DefaultSizeAttributes {
  loading: Size<string>
  popover: Size<{
    fontSize: string
    headerFontSize: string
    headerPadding: Coordinator<string>
    padding: Coordinator<string>
  }>
}

interface OptionalSizeAttributes {
  [key: string]: Size<OptionalThemeAttribute>
}

type SizeAttributes = DefaultSizeAttributes & OptionalSizeAttributes

export default SizeAttributes
