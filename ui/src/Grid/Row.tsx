import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Div).attrs<StyledProps>(
  ({ marginHorizontal = '-{length.grid.space}' }) => ({
    marginHorizontal,
  }),
)<StyledProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`
