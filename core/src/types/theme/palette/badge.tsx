export interface BadgePaletteItemAttributes {
  background?: string // main
  border?: string // main
  font?: string // font
  icon?: {
    background?: string // dynamicer
    font?: string // font
  }

  active?: {
    background?: string // dynamicer
    border?: string // dynamicer
    font?: string // font
    icon?: {
      background?: string // dynamicest
      border?: string // dynamicest
      font?: string // font
    }
  }

  outline?: {
    border?: string // main
    font?: string // main
    icon?: {
      font?: string // main
    }

    active?: {
      background?: string // main
      font?: string // font
      icon?: {
        background?: string // dynamicer
        font?: string // font
      }
    }
  }

  soft?: {
    background?: string // soft
    border?: string // soft
    icon?: {
      background?: string // softDynamicer
      font?: string // softFont
    }
    font?: string // softFont

    active?: {
      background?: string // softDynamicer
      border?: string // softDynamicer
      font?: string // softFont
      icon?: {
        background?: string // softDynamicest
        border?: string // softDynamicest
        font?: string // softFont
      }
    }

    outline?: {
      border?: string // soft
      font?: string // soft
      icon?: {
        font?: string // soft
      }

      active?: {
        background?: string // soft
        font?: string // softFont
        icon?: {
          background?: string // softDynamicer
          font?: string // softFont
        }
      }
    }
  }
}
