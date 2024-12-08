import { Partial } from '../..'
import { OptionalThemeAttributes } from '../util'
import { AlertPaletteItemAttributes } from './alert'
import { BadgePaletteItemAttributes } from './badge'
import { BreadcrumbPaletteItemAttributes } from './breadcrumb'
import { ButtonPaletteItemAttributes } from './button'
import { CheckboxPaletteItemAttributes } from './checkbox'
import { DropdownPaletteItemAttributes } from './dropdown'
import { FormPaletteItemAttributes } from './form'
import { InputPaletteItemAttributes } from './input'
import { ProgressBarPaletteItemAttributes } from './progress-bar'
import { RadioPaletteItemAttributes } from './radio'
import { SwitchPaletteItemAttributes } from './switch'

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
  dynamic: string
  dynamicer: string
  dynamicest: string
  soft: string
  softFont: string
  softDynamic: string
  softDynamicer: string
  softDynamicest: string
  waveEffect: string

  alert?: AlertPaletteItemAttributes
  badge?: BadgePaletteItemAttributes
  breadcrumb?: BreadcrumbPaletteItemAttributes
  button?: ButtonPaletteItemAttributes
  checkbox?: CheckboxPaletteItemAttributes
  dropdown?: DropdownPaletteItemAttributes
  form?: FormPaletteItemAttributes
  input?: InputPaletteItemAttributes
  progressBar?: ProgressBarPaletteItemAttributes
  radio?: RadioPaletteItemAttributes
  switch?: SwitchPaletteItemAttributes

  table?: {
    odd?: {
      background?: string
      border?: string
      font?: string

      hover?: {
        background?: string
      }
    }

    even?: {
      background?: string
      border?: string
      font?: string

      hover?: {
        background?: string
      }
    }
  }
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
