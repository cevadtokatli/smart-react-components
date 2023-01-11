import { OptionalThemeAttributes } from './util'

interface DefaultTransitionAttributes {
  waveEffectDuration: number
}

type TransitionAttributes = DefaultTransitionAttributes & OptionalThemeAttributes

export default TransitionAttributes
