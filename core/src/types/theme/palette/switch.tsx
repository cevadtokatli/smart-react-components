export interface SwitchPaletteItemAttributes {
  background?: string // $color.dynamic.accent
  mark?: string // $color.white

  active?: {
    background?: string // main
  }

  soft?: {
    active?: {
      background?: string // soft
    }
  }
}
