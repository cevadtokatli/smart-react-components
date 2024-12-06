export interface RadioPaletteItemAttributes {
  background?: string // $color.dynamic.accent
  border?: string // $color.dynamic.accent

  active?: {
    background?: string // main
    mark?: string // $color.white
  }

  soft?: {
    active?: {
      background?: string // soft
    }
  }
}
