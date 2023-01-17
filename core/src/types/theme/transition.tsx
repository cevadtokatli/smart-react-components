import { OptionalThemeAttributes } from './util'

interface DefaultTransitionAttributes {
  fixedBoxDuration: number
  popoverDuration: number
  tooltipDuration: number
  waveEffectDuration: number
}

type TransitionAttributes = DefaultTransitionAttributes & OptionalThemeAttributes

export default TransitionAttributes
