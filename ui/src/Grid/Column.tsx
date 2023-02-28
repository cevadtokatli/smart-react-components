import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { Partial, ResponsiveProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { columns } from '../constants/grid'

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'col', number>>,
  Partial<ResponsiveProp<'pos', number>> {}

export default styled(Div).attrs<Props>(({ paddingHorizontal = '$length.grid.space' }) => ({
  getCol: v => `
    flex: 0 0 ${columns[v]}%;
    max-width: ${columns[v]}%;
  `,
  getPos: v => `
    margin-left: ${v < 0 ? '-' : ''}${columns[Math.abs(v)]}%;
  `,
  paddingHorizontal,
}))<Props>`
  box-sizing: border-box;
  width: 100%;
`
