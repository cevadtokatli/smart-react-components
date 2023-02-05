import Div from '@smart-react-components/core/Element/Div'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props {
  duration: number
  left: number
  palette: PaletteProp
  scale: number
  top: number
}

export default styled(Div)<Props>(({ duration, left, palette, scale, theme, top }) => `
  background: ${theme.$.palette[palette].waveEffect};
  border-radius: 50%;
  height: 100px;
  left: ${left}px;
  margin: -50px 0 0 -50px;
  opacity: .75;
  pointer-events: none;
  position: absolute;
  transform: scale(${scale});
  top: ${top}px;
  width: 100px;

  &.src-wave-effect-show {
    opacity: 0;
    transform: scale(0);
  }

  &.src-wave-effect-show-active {
    opacity: .75;
    transform: scale(${scale});  
  }

  &.src-wave-effect-hide-active {
    opacity: 0;
  }

  &.src-wave-effect-show-active,
  &.src-wave-effect-hide-active {
    transition: ease-out ${duration}ms;
    transition-property: opacity, transform;
  }
`)
