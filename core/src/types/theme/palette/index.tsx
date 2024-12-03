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
  dynamic: string
  dynamicer: string
  dynamicest: string
  soft: string
  softFont: string
  softDynamic: string
  softDynamicer: string
  softDynamicest: string
  waveEffect: string

  badge?: {
    background?: string
    border?: string
    font?: string

    outline?: {
      border?: string
      font?: string
    }
  }

  button?: {
    background?: string
    border?: string
    font?: string

    active?: {
      background?: string
      border?: string
      font?: string
    }

    hover?: {
      background?: string
      border?: string
      font?: string

      addon?: {
        background?: string
        border?: string
        font?: string
      }
    }

    link?: {
      font?: string

      hover?: {
        font?: string
      }
    }

    outline?: {
      border?: string
      font?: string

      hover?: {
        background?: string
        font?: string

        addon?: {
          background?: string
          font?: string
        }
      }
    }
  }

  input?: {
    background?: string
    border?: string
    font?: string

    focused?: {
      background?: string
      border?: string
      font?: string
    }

    placeholder?: {
      font?: string
    }
  }

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
