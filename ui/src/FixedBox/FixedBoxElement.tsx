import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { Breakpoint } from '@smart-react-components/core/types/grid'
import styled from 'styled-components'

interface Props extends StyledProps {
  breakpoint: Breakpoint | null
}

export const FixedBoxReplicaElement = styled.div.attrs({
  className: 'src-replica',
})`
  left: -999px;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: -999px;
  visibility: hidden;
  z-index: -999;
`

export default styled(Div)<Props>(({ theme, breakpoint, width }: Props) => `
  overflow: auto;
  position: fixed;
  z-index: ${theme.$.zIndex.fixedBox};

  ${breakpoint
    ? `
      @media(max-width: ${theme.$.length.breakpoint[breakpoint] - 1}px) {
        height: auto !important;
        max-height: 100% !important;
        position: static;
    
        ${!width
          ? `
            width: 100% !important;
          `
          : ''
        }
      } 
    `
    : ''
  }
`)
