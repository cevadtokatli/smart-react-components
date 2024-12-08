export interface DropdownPaletteItemAttributes {
  background?: string // main
  font?: string // font
  shadow?: string // $color.dynamic.shadow

  active?: {
    background?: string // dynamicest
    font?: string // font
  }

  hover?: {
    background?: string // dynamic
    font?: string // font
  }

  outline?: {
    background?: string // $color.dynamic.background
    font?: string // $color.dynamic.font

    active?: {
      background?: string // dynamicer
      font?: string // font
    }

    hover?: {
      background?: string // main
      font?: string // font
    }
  }

  soft?: {
    background?: string // soft
    font?: string // softFont

    active?: {
      background?: string // softDynamicest
      font?: string // softFont
    }

    hover?: {
      background?: string // softDynamic
      font?: string // softFont
    }

    outline?: {
      background?: string // $color.dynamic.background
      font?: string // $color.dynamic.font

      active?: {
        background?: string // softDynamicer
        font?: string // softFont
      }

      hover?: {
        background?: string // soft
        font?: string // softFont
      }
    }
  }
}
