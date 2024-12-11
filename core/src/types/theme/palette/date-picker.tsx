export interface DatePickerPaletteItemAttributes {
  header?: {
    background?: string // main
    font?: string // font
    icon?: string // darker

    hover?: {
      icon?: string // darkest
    }
  }

  time?: {
    background?: string // main
    border?: string // dynamic
    font?: string // font
    icon?: string // $color.gray600

    active?: {
      background?: string // dark
      border?: string // dynamicer
      font?: string // font
    }
  }

  date?: {
    font?: string // $color.dynamic.font
    icon?: string // $color.gray600

    active?: {
      background?: string // main
      font?: string // font
    }
  }

  soft?: {
    header?: {
      background?: string // soft
      font?: string // softFont
      icon?: string // softDynamicer

      hover?: {
        icon?: string // softDynamicest
      }
    }

    time?: {
      background?: string // soft
      border?: string // softDynamic
      font?: string // softFont
      icon?: string // $color.gray600

      active?: {
        background?: string // softDynamic
        border?: string // softDynamicer
        font?: string // softFont
      }
    }

    date?: {
      font?: string // $color.dynamic.font
      icon?: string // $color.gray600

      active?: {
        background?: string // soft
        font?: string // softFont
      }
    }
  }
}
