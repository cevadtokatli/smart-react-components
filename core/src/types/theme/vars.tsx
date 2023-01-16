import { OptionalThemeAttributes } from './util'

interface DefaultVarAttributes {
  isDarkMode?: boolean
}

type VarAttributes = DefaultVarAttributes & OptionalThemeAttributes

export default VarAttributes
