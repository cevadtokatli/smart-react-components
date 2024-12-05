export interface BreadcrumbPaletteItemAttributes {
  background?: string // main
  font?: string // font
  separator?: {
    font?: string // font
  }

  active?: {
    font?: string // darkest
  }

  outline?: {
    font?: string // main
    separator?: {
      font?: string // $color.dynamic.accent
    }

    active?: {
      font?: string // $color.dynamic.bodyFont
    }

    disabled?: {
      font?: string // $color.dynamic.accent
    }
  }

  soft?: {
    background?: string // soft
    font?: string // softFont
    separator?: {
      font?: string // softFont
    }

    active?: {
      font?: string // softDynamicest
    }

    outliine?: {
      font?: string // soft

      active?: {
        font?: string // $color.dynamic.bodyFont
      }
    }
  }
}
