export interface AlertPaletteItemAttributes {
  background?: string // main
  border?: string // darkest
  font?: string // font
  icon?: {
    background?: string // main
    font?: string // font
  }
  separatorLine?: string // darkest

  outline?: {
    border?: string // main
    font?: string // main
  }

  soft?: {
    background?: string // soft
    border?: string // softDynamicest
    font?: string // softFont
    icon?: {
      background?: string // soft
      font?: string // softFont
    }
    separatorLine?: string // softDynamicest

    outline?: {
      border?: string // soft
      font?: string // soft
    }
  }
}
