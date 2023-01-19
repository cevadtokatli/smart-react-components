import { OptionalThemeAttributes } from './util'

interface DefaultVarAttributes {
  isDarkMode?: boolean
  isMobile?: boolean
}

type VarAttributes = DefaultVarAttributes & OptionalThemeAttributes

export default VarAttributes
