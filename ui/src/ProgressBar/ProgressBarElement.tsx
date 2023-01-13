import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, TimingFunction } from '@smart-react-components/core/types'
import styled from 'styled-components'

export const Bar = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
`

export const Percentage = styled.div`
  flex: 0 0 auto;
  position: relative;
`

interface Props extends StyledProps {
  hasStripedAnimation: boolean
  isFilled: boolean
  isNested: boolean
  isStriped: boolean
  palette: PaletteProp
  stripedAnimationDuration: number
  transitionDuration: number
  transitionTimingFunction: TimingFunction
}

export default styled(Div)<Props>(({ theme, hasStripedAnimation, height, isFilled, isNested, isStriped, palette, stripedAnimationDuration, transitionDuration, transitionTimingFunction }: Props) => `
  align-items: center;
  color: ${theme.$.palette[palette].progressBar.active};
  display: flex;
  fill: ${theme.$.palette[palette].progressBar.active};
  overflow: hidden;
  position: relative;

  ${Bar} {
    background: ${theme.$.palette[palette].progressBar.active};
    color: ${theme.$.palette[palette].progressBar.font};
    fill: ${theme.$.palette[palette].progressBar.font};
    transition: width ${transitionDuration}ms 0s ${transitionTimingFunction};

    ${isNested
      ? `
        background: ${theme.$.palette[palette].progressBar.nestedBackground};
      `
      : `
        border-radius: .125rem;
      `
    }
  }

  ${isFilled
    ? `
      background: ${theme.$.palette[palette].progressBar.filledBackground};
    `
    : ''
  }

  ${isNested
    ? `
      flex: 1 1 auto;
    `
    : `
      border-radius: .125rem;
    `
  }

  ${isStriped
    ? `
      &,
      ${Bar} {
        background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background-size: ${height} ${height};
      }

      ${hasStripedAnimation
        ? `
          &,
          ${Bar} {
            animation: src-progress-bar-stripes ${stripedAnimationDuration}ms 0s ${transitionTimingFunction} infinite;
          }

          @keyframes src-progress-bar-stripes {
            from {
              background-position: ${height} 0;
            }
              
            to {
              background-position: 0 0;
            }
          }
        `
        : ''
      }
    `
    : ''
  }
`)
