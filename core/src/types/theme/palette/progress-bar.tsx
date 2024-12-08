export interface ProgressBarPaletteItemAttributes {
  background?: string // main
  font?: string // font

  filled?: {
    background?: string // $color.dynamic.gray
  }

  nested?: {
    background?: string // $color.light.background.alpha(.3)
  }
}
