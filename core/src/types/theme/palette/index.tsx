import { Partial } from '../..'
import { OptionalThemeAttributes } from '../util'

interface DefaultPaletteItemAttributes {
  main: string
  background: string
  font: string
  shadow: string
  dark: string
  darker: string
  darkest: string
  light: string
  lighter: string
  lightest: string
  soft: string
  softFont: string
  softDark: string
  softDarker: string
  softDarkest: string
}

export type PaletteItem = DefaultPaletteItemAttributes & OptionalThemeAttributes

export type InputPaletteItem = string | Partial<PaletteItem>

interface PaletteAttributes<T> {
  primary?: T
  secondary?: T
  success?: T
  danger?: T
  warning?: T
  info?: T
  light?: T
  dark?: T
  dynamic?: T
  '!dynamic'?: T
  [key: string]: T
}

export type InputPalette = PaletteAttributes<InputPaletteItem>

type Palette = PaletteAttributes<PaletteItem>

export default Palette
