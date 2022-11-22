import { OptionalThemeAttributes } from './util'

interface DefaultDynamicAttributes {
  accent: string
  background: string
  font: string
  gray: string
  shadow: string
}

type DynamicAttributes = DefaultDynamicAttributes & OptionalThemeAttributes

interface DefaultColorAttributes {
  black: string
  blue: string
  cyan: string
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string
  green: string
  indigo: string
  orange: string
  pink: string
  purple: string
  red: string
  teal: string
  white: string
  yellow: string
  light: DynamicAttributes
  dark: DynamicAttributes
  dynamic?: DynamicAttributes
  '!dynamic'?: DynamicAttributes
}

type ColorAttributes = DefaultColorAttributes & OptionalThemeAttributes

export default ColorAttributes
