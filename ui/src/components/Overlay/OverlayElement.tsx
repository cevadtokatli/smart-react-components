import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { Nullable } from '@smart-react-components/core/types'
import { Breakpoint } from '@smart-react-components/core/types/grid'
import styled from 'styled-components'

const overlayCSS = ({ theme, hasBackground }) => `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  padding: ${theme.$.length.overlay.space.y} ${theme.$.length.overlay.space.x};
  top: 0;
  touch-action: none;
  width: 100%;

  ${hasBackground
    ? `
      background: ${theme.$.color.overlay.background};
    `
    : ''
  }
`
export interface Props extends StyledProps {
  breakpoint?: Nullable<Breakpoint>
  hasBackground?: boolean
  isDisplayedWhenBreakpointNull?: boolean
}

export default styled(Div)<Props>(({ theme, breakpoint, hasBackground, isDisplayedWhenBreakpointNull }: Props) => `
  position: fixed;
  z-index: ${theme.$.zIndex.overlay};

  ${breakpoint
    ? `
      @media(max-width: ${theme.$.length.breakpoint[breakpoint] - 1}px) {
        ${overlayCSS({ theme, hasBackground })};
      }
    `
    : isDisplayedWhenBreakpointNull ? overlayCSS({ theme, hasBackground }) : ''
  }
`)
