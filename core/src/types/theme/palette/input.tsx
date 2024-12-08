export interface InputPaletteItemAttributes {
  addon?: {
    background?: string // main
    border?: string // dark
    font?: string // font
  }
  background?: string // main
  border?: string // dark
  font?: string // font
  placeholder?: {
    font?: string // font.alpha($opacity.inputPlaceholder)
  }

  focused?: {
    addon?: {
      background?: string // dynamicer
      border?: string // dynamicest
      font?: string // font
    }
    background?: string // dynamicer
    border?: string // dynamicest
    font?: string // font
  }

  outline?: {
    addon?: {
      background?: string // $color.dynamic.background
      border?: string // $color.dynamic.accent
      font?: string // $color.dynamic.font
    }
    background?: string // $color.dynamic.background
    border?: string // $color.dynamic.accent
    font?: string // $color.dynamic.font
    placeholder?: {
      font?: string // $color.dynamic.accent
    }

    focused?: {
      addon?: {
        background?: string // $color.dynamic.background
        border?: string // main
        font?: string // $color.dynamic.font
      }
      border?: string // main
    }

    disabled?: {
      addon?: {
        background?: string // $color.dynamic.accent
        font?: string // $color.dynamic.gray
      }
      background?: string // $color.dynamic.accent
      font?: string // $color.dynamic.gray
    }
  }

  soft?: {
    addon?: {
      background?: string // soft
      border?: string // softDynamic
      font?: string // softFont
    }
    background?: string // soft
    border?: string // softDynamic
    font?: string // softFont
    placeholder?: {
      font?: string // softFont.alpha($opacity.inputPlaceholder)
    }

    focused?: {
      addon?: {
        background?: string // softDynamicer
        border?: string // softDynamicest
        font?: string // softFont
      }
      background?: string // softDynamicer
      border?: string // softDynamicest
      font?: string // softFont
    }

    outline?: {
      addon?: {
        background?: string // $color.dynamic.background
        border?: string // $color.dynamic.accent
        font?: string // $color.dynamic.font
      }
      background?: string // $color.dynamic.background
      border?: string // $color.dynamic.accent
      font?: string // $color.dynamic.font
      placeholder?: {
        font?: string // $color.dynamic.accent
      }

      focused?: {
        addon?: {
          background?: string // $color.dynamic.background
          border?: string // soft
          font?: string // $color.dynamic.font
        }
        border?: string // soft
      }

      disabled?: {
        addon?: {
          background?: string // $color.dynamic.accent
          font?: string // $color.dynamic.gray
        }
        background?: string // $color.dynamic.accent
        font?: string // $color.dynamic.gray
      }
    }
  }
}
