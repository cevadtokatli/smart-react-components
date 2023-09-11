import { OptionalThemeAttributes } from './util'

interface DefaultCursorAttributes {
  button: string
  dropdown: string
  input: string
  inputFile: string
  modalHeaderIcon: string
  radio: string
  selectBox: string
}

type CursorAttributes = DefaultCursorAttributes & OptionalThemeAttributes

export default CursorAttributes
