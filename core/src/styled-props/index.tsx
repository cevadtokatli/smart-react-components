import { StyledComponent, shouldForwardProp as styledShouldForwardProp } from 'styled-components'
import { Theme } from '../theme'
import { ResponsiveProps } from '../types'
import { convertStyledPropToCSS } from '../util/css'
import cssKeys from './css-keys'
import CSSProperties from './css-properties'
import CSSSelectors from './css-selectors'

export interface StandardProps extends CSSProperties, CSSSelectors {}

export interface StyledProps extends ResponsiveProps<StandardProps> {
  as?: string | StyledComponent<any, any>
  theme?: Theme
}

export const shouldForwardProp = (prop: string) => (
  typeof cssKeys[prop] === 'undefined'
  && typeof cssKeys[prop.substring(0, prop.length - 2)] === 'undefined'
  && styledShouldForwardProp(prop)
)

export default (props: object & { theme: Theme }) => Object.keys(props).map(key => convertStyledPropToCSS(key, props, props.theme))
