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
    margin: Coordinator<string>
    padding: Coordinator<string>
  }>
  checkbox: Size<string>
  colorPicker: Size<{
    majorDraggerSize: string
    majorPickerSize: string
    minorDraggerSize: string
    minorPickerWidth: string
    paletteItemSize: string
    space: string
    width: string
  }>
  datePicker: Size<{
    bodyHeight: string
    fontSize: string
    headerSpace: Coordinator<string>
    iconSize: string
    itemSize: string
    itemSpace: string
    itemWeekSize: string
    itemWeekSpace: Coordinator<string>
    space: Coordinator<string>
    timeArrowSize: string
    timeInputFontSize: string
    timeSize: string
    timeSpace: string
    width: string
  }>
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
  modal: Size<{
    padding: Coordinator<string>
    titleFontSize: string
    width: string
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
  table: Size<{
    fontSize: string
    headFontSize: string
    padding: Coordinator<string>
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
