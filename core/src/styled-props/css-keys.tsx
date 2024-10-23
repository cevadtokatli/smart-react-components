import { StandardProps } from './'
import cssProperties from './css-properties'
import cssSelectors from './css-selectors'

export type CSSKeys = {
  [key in keyof StandardProps]: string
}

const cssKeys: CSSKeys = {
  ...cssProperties,
  ...cssSelectors,
}

export default cssKeys
