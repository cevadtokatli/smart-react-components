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
  button: Size<{
    fixedSize: string
    fontSize: string
    iconSize: string
    padding: Coordinator<string>
  }>
  checkbox: Size<string>
  dropdown: Size<{
    fontSize: string
    margin: Coordinator<string>
    padding: Coordinator<string>
  }>
  form: {
    blockLabel: Size<{
      fontSize: string
      margin: string
    }>
    inlineLabel: Size<{
      fontSize: string
      margin: Coordinator<string>
    }>
  }
  icon: Size<string>
  input: Size<{
    fontSize: string
    padding: Coordinator<string>
  }>
  loading: Size<string>
  popover: Size<{
    fontSize: string
    headerFontSize: string
    headerPadding: Coordinator<string>
    padding: Coordinator<string>
  }>
  radio: Size<string>
  switch: Size<{
    height: string
    slider: string
    width: string
  }>
  tooltip: Size<{
    fontSize: string
    padding: Coordinator<string>
  }>
}

interface OptionalSizeAttributes {
  [key: string]: OptionalThemeAttribute
}

type SizeAttributes = DefaultSizeAttributes & OptionalSizeAttributes

export default SizeAttributes
