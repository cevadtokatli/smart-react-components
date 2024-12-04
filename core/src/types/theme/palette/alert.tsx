export interface AlertPaletteItemAttributes {
  background?: string // main
  border?: string // darkest
  font?: string // font
  separatorLine?: string // darkest

  icon?: {
    background?: string // main
    font?: string // font

    soft?: {
      background?: string // soft
      font?: string // softFont
    }
  }

  outline?: {
    border?: string // main
    font?: string // main
  }

  soft?: {
    background?: string // soft
    border?: string // softDynamicest
    font?: string // softFont
    separatorLine?: string // softDynamicest

    outline?: {
      border?: string // soft
      font?: string // soft
    }
  }
}
