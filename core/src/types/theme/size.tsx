import { Coordinator, Size } from '../'
import { OptionalThemeAttribute } from './util'

interface DefaultSizeAttributes {
  alert: Size<{
    fontSize: string
    iconSize: string
    padding: Coordinator<string>
  }>
  badge: Size<{
    fixedSize: string
    fontSize: string
    iconSize: string
    margin: Coordinator<string>
    padding: Coordinator<string>
  }>
  dropdown: Size<{
    fontSize: string
    margin: Coordinator<string>
    padding: Coordinator<string>
  }>
  loading: Size<string>
  popover: Size<{
    fontSize: string
    headerFontSize: string
    headerPadding: Coordinator<string>
    padding: Coordinator<string>
  }>
  tooltip: Size<{
    fontSize: string
    padding: Coordinator<string>
  }>
}

interface OptionalSizeAttributes {
  [key: string]: Size<OptionalThemeAttribute>
}

type SizeAttributes = DefaultSizeAttributes & OptionalSizeAttributes

export default SizeAttributes
