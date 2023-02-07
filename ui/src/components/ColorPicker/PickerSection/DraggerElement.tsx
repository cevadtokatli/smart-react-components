import Span from '@smart-react-components/core/Element/Span'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

export default styled(Span)<StyledProps>(({ theme }: StyledProps) => `
  border: solid 2px ${theme.$.color.light.background};
  border-radius: 100%;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
  box-sizing: border-box;
  position: absolute;

  &[data-src-is-dark="true"] {
    border-color: ${theme.$.color.dark.background};
  }
`)
