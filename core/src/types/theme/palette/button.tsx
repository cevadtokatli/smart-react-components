export interface ButtonPaletteItemAttributes {
  addon?: {
    background?: string // dynamicer
    border?: string // dynamicer
    font?: string // font
  }
  background?: string // main
  border?: string // main
  font?: string // font
  shadow?: string // shadow

  active?: {
    background?: string // dynamicer
    border?: string // dynamicer
    font?: string // font
  }

  hover?: {
    addon?: {
      background?: string // dynamicest
      border?: string // dynamicest
    }
    background?: string // dynamic
    border?: string // dynamic
    font?: string // font
  }

  outline?: {
    addon?: {
      border?: string // dynamicer
      font?: string // dynamicer
    }
    border?: string // main
    font?: string // main

    hover?: {
      addon?: {
        background?: string // dynamicer
        font?: string // font
      }
      background?: string // main
      font?: string // font
    }
  }

  link?: {
    font?: string

    hover?: {
      font?: string
    }
  }

  soft?: {
    addon?: {
      background?: string // softDynamicer
      border?: string // softDynamicer
      font?: string // softFont
    }
    background?: string // soft
    border?: string // soft
    font?: string // softFont

    active?: {
      background?: string // softDynamicer
      border?: string // softDynamicer
      font?: string // softFont
    }

    hover?: {
      addon?: {
        background?: string // softDynamicest
        border?: string // softDynamicest
      }
      background?: string // softDynamic
      border?: string // softDynamic
      font?: string // softFont
    }

    outline?: {
      addon?: {
        border?: string // softDynamicer
        font?: string // softDynamicer
      }
      border?: string // soft
      font?: string // soft

      hover?: {
        addon?: {
          background?: string // softDynamicer
          font?: string // softFont
        }
        background?: string // soft
        font?: string // softFont
      }
    }
  }
}
