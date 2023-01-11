import { Partial } from '../'
import ColorAttributes from './color'
import FontFamilyAttributes from './font-family'
import FontSizeAttributes from './font-size'
import FontWeightAttributes from './font-weight'
import I18NAttributes from './i18n'
import LengthAttributes from './length'
import OpacityAttributes from './opacity'
import Palette, { InputPalette } from './palette'
import RadiusAttributes from './radius'
import SizeAttributes from './size'
import TransitionAttributes from './transition'
import { OptionalThemeAttributes } from './util'
import ZIndexAttributes from './z-index'

interface DefaultThemeAttributes<PaletteType> {
  color: ColorAttributes
  fontFamily: FontFamilyAttributes
  fontSize: FontSizeAttributes
  fontWeight: FontWeightAttributes
  i18n: I18NAttributes
  length: LengthAttributes
  opacity: OpacityAttributes
  palette: PaletteType
  radius: RadiusAttributes
  size: SizeAttributes
  transition: TransitionAttributes
  zIndex: ZIndexAttributes
}

type ThemeAttributes<PaletteType> = DefaultThemeAttributes<PaletteType> & OptionalThemeAttributes

export interface InputTheme {
  $?: Partial<ThemeAttributes<InputPalette>>
  [key: string]: any
}

export default interface Theme {
  $: ThemeAttributes<Palette>
  [key: string]: any
}
