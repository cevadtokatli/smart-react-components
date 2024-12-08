export interface PopoverPaletteItemAttributes {
  background?: string // $color.dynamic.background
  border?: string // $color.dynamic.accent
  font?: string // $color.dynamic.font
  header?: {
    background?: string // main
    border?: string // dynamicer
    font?: string // font
  }

  soft?: {
    header?: {
      background?: string // soft
      border?: string // softDynamicer
      font?: string // softFont
    }
  }
}
