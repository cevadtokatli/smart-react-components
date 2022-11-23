import CSSProperties from './css-properties'
import CSSSelectors from './css-selectors'

export interface StandardProps extends CSSProperties, CSSSelectors {}

export type ResponsiveProps<Prefix extends string> = {
  [key in keyof StandardProps as `${key}${Prefix}`]?: StandardProps[key]
}
