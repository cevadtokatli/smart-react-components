import { ThemedStyledFunction } from 'styled-components'
import { Theme } from '../theme'
import { convertStyledPropToCSS } from '../util/css'
import { StandardProps, ResponsiveProps } from './props'

export interface StyledProps extends
  StandardProps,
  ResponsiveProps<'Sm'>,
  ResponsiveProps<'Md'>,
  ResponsiveProps<'Lg'>,
  ResponsiveProps<'Xl'> {
  as?: string | ThemedStyledFunction<any, any, any, any>
  theme?: Theme
}

export default (props: object & { theme: Theme }) => Object.keys(props).map(key => convertStyledPropToCSS(key, props, props.theme))
