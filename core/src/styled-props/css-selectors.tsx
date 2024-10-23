import { CSSProperties } from './css-properties'

type Selector = CSSProperties

export interface CSSSelectors {
  active?: Selector
  after?: Selector
  before?: Selector
  checked?: Selector
  default?: Selector
  disabled?: Selector
  empty?: Selector
  enabled?: Selector
  focus?: Selector
  focusWithin?: Selector
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

const cssSelectors: {
  [key in keyof Required<CSSSelectors>]: string
} = {
  active: '&:active{|}',
  after: '&::after{|}',
  before: '&::before{|}',
  checked: '&:checked{|}',
  default: '&:default{|}',
  disabled: '&:disabled{|}',
  empty: '&:empty{|}',
  enabled: '&:enabled{|}',
  focus: '&:focus{|}',
  focusWithin: '&:focus-within{|}',
  fullscreen: '&:fullscreen{|}',
  hover: '&:hover{|}',
  indeterminate: '&:indeterminate{|}',
  inRange: '&:in-range{|}',
  invalid: '&:invalid{|}',
  link: '&:link{|}',
  optional: '&:optional{|}',
  outOfRange: '&:out-of-range{|}',
  placeholder: '&::placeholder{|}',
  readOnly: '&:read-only{|}',
  readWrite: '&:read-write{|}',
  required: '&:required{|}',
  valid: '&:valid{|}',
  visited: '&:visited{|}',
}

export default cssSelectors
