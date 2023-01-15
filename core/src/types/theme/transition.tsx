import { OptionalThemeAttributes } from './util'

interface DefaultTransitionAttributes {
  fixedBoxDuration: number
  waveEffectDuration: number
}

type TransitionAttributes = DefaultTransitionAttributes & OptionalThemeAttributes

export default TransitionAttributes
