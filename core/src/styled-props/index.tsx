import { StyledComponent } from 'styled-components'
import { Theme } from '../theme'
import { ResponsiveProps } from '../types'
import { convertStyledPropToCSS } from '../util/css'
import CSSProperties from './css-properties'
import CSSSelectors from './css-selectors'

export interface StandardProps extends CSSProperties, CSSSelectors {}

export interface StyledProps extends ResponsiveProps<StandardProps> {
  as?: string | StyledComponent<any, any>
  theme?: Theme
}

export default (props: object & { theme: Theme }) => Object.keys(props).map(key => convertStyledPropToCSS(key, props, props.theme))
