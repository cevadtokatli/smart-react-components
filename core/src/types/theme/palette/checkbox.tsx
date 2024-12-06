export interface CheckboxPaletteItemAttributes {
  background?: string // $color.dynamic.accent
  border?: string // $color.dynamic.accent

  active?: {
    background?: string // main
    border?: string // main
    mark?: string // $color.white
  }

  soft?: {
    active?: {
      background?: string // soft
      border?: string // soft
    }
  }
}
