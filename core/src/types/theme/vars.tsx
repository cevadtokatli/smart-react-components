import { TableStripedOrientation } from '../'
import { OptionalThemeAttributes } from './util'

interface DefaultVarAttributes {
  isDarkMode?: boolean
  isMobile?: boolean
  tableStripedOrientation: TableStripedOrientation
}

type VarAttributes = DefaultVarAttributes & OptionalThemeAttributes

export default VarAttributes
