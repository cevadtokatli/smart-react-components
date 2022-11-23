import CSSProperties from './css-properties'

type Selector = CSSProperties

export default interface CSSSelectors {
  active?: Selector
  after?: Selector
  before?: Selector
  checked?: Selector
  default?: Selector
  disabled?: Selector
  empty?: Selector
  enabled?: Selector
  focus?: Selector
  fullscreen?: Selector
  hover?: Selector
  indeterminate?: Selector
  inRange?: Selector
  invalid?: Selector
  link?: Selector
  optional?: Selector
  outOfRange?: Selector
  placeholder?: Selector
  readOnly?: Selector
  readWrite?: Selector
  required?: Selector
  valid?: Selector
  visited?: Selector
}
