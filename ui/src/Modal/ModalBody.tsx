import Section from '@smart-react-components/core/Element/Section'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Section)<StyledProps>(({ theme }) => `
  background: ${theme.$.color.dynamic.background};
  flex: 1 1 auto;
  min-height: 1px;
  overflow: auto;

  > :last-child {
    margin-bottom: 0;
  }
`)
