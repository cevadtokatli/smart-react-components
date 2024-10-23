import { StyledComponent } from 'styled-components'
import { Theme } from '../theme'
import { ResponsiveProps } from '../types'
import { convertStyledPropToCSS } from '../util/css'
import cssProperties, { CSSProperties } from './css-properties'
import { CSSSelectors } from './css-selectors'

export interface StandardProps extends CSSProperties, CSSSelectors {}

export interface StyledProps extends ResponsiveProps<StandardProps> {
  as?: string | StyledComponent<any, any>
  theme?: Theme
}

export const shouldForwardProp = (prop: string) => (
  typeof cssProperties[prop] === 'undefined'
  && typeof cssProperties[prop.substring(0, prop.length - 2)] === 'undefined'
)

export default (props: object & { theme: Theme }) => Object.keys(props).map(key => convertStyledPropToCSS(key, props, props.theme))
