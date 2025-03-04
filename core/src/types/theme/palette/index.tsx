import { Partial } from '../..'
import { OptionalThemeAttributes } from '../util'
import { AlertPaletteItemAttributes } from './alert'
import { BadgePaletteItemAttributes } from './badge'
import { BreadcrumbPaletteItemAttributes } from './breadcrumb'
import { ButtonPaletteItemAttributes } from './button'
import { CheckboxPaletteItemAttributes } from './checkbox'
import { ColorPickerPaletteItemAttributes } from './color-picker'
import { DatePickerPaletteItemAttributes } from './date-picker'
import { DropdownPaletteItemAttributes } from './dropdown'
import { FormPaletteItemAttributes } from './form'
import { InputPaletteItemAttributes } from './input'
import { PaginationPaletteItemAttributes } from './pagination'
import { PopoverPaletteItemAttributes } from './popover'
import { ProgressBarPaletteItemAttributes } from './progress-bar'
import { RadioPaletteItemAttributes } from './radio'
import { SwitchPaletteItemAttributes } from './switch'
import { TablePaletteItemAttributes } from './table'
import { TooltipPaletteItemAttributes } from './tooltip'

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
  colorPicker?: ColorPickerPaletteItemAttributes
  datePicker?: DatePickerPaletteItemAttributes
  dropdown?: DropdownPaletteItemAttributes
  form?: FormPaletteItemAttributes
  input?: InputPaletteItemAttributes
  pagination?: PaginationPaletteItemAttributes
  popover?: PopoverPaletteItemAttributes
  progressBar?: ProgressBarPaletteItemAttributes
  radio?: RadioPaletteItemAttributes
  switch?: SwitchPaletteItemAttributes
  table?: TablePaletteItemAttributes
  tooltip?: TooltipPaletteItemAttributes
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
