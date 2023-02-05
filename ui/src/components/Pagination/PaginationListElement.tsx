import Ul from '@smart-react-components/core/Element/Ul'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Ul)<StyledProps>(({ theme }: StyledProps) => `
  display: flex;
  flex-wrap: wrap;
  font-family: ${theme.$.fontFamily.pagination};
  font-size: ${theme.$.fontSize.pagination};
  list-style: none;
  margin: -${theme.$.length.pagination.margin.y} -${theme.$.length.pagination.margin.x};
`)
