export interface PaginationPaletteItemAttributes {
  background?: string // main
  border?: string // dynamic
  font?: string // font

  active?: {
    background?: string // dynamicer
    border?: string // dynamicest
    font?: string // font
  }

  hover?: {
    background?: string // dynamicer
    border?: string // dynamicest
    font?: string // font
  }

  outline?: {
    border?: string // $color.dynamic.accent
    font?: string // $color.dynamic.font

    disabled?: {
      font?: string // $color.dynamic.accent
    }

    hover?: {
      background?: string // main
      border?: string // main
      font?: string // font
    }

    active?: {
      background?: string // main
      border?: string // main
      font?: string // font
    }
  }

  soft?: {
    background?: string // soft
    border?: string // softDynamic
    font?: string // softFont

    active?: {
      background?: string // softDynamicer
      border?: string // softDynamicest
      font?: string // softFont
    }

    hover?: {
      background?: string // softDynamicer
      border?: string // softDynamicest
      font?: string // softFont
    }

    outline?: {
      border?: string // $color.dynamic.accent
      font?: string // $color.dynamic.font

      disabled?: {
        font?: string // $color.dynamic.accent
      }

      hover?: {
        background?: string // soft
        border?: string // soft
        font?: string // softFont
      }

      active?: {
        background?: string // soft
        border?: string // soft
        font?: string // softFont
      }
    }
  }
}
