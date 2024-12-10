export interface TablePaletteItemAttributes {
  odd?: {
    background?: string // background
    border?: string // dynamicest
    font?: string // font

    hover?: {
      background?: string // dynamicer
      border?: string // dynamicest
      font?: string // font
    }

    soft?: {
      background?: string // softBackground
      border?: string // softDynamicest
      font?: string // softFont

      hover?: {
        background?: string // softDynamicer
        border?: string // softDynamicest
        font?: string // softFont
      }
    }
  }

  even?: {
    background?: string // dynamic
    border?: string // dynamicest
    font?: string // font

    hover?: {
      background?: string // dynamicer
      border?: string // dynamicest
      font?: string //  font
    }

    soft?: {
      background?: string // softDynamic
      border?: string // softDynamicest
      font?: string // softFont

      hover?: {
        background?: string // softDynamicer
        border?: string // softDynamicest
        font?: string // softFont
      }
    }
  }
}
