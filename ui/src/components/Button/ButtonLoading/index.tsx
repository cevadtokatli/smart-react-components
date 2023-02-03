import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'

interface Props extends StyledProps {
  hasAnimation: boolean
}

export default styled(Div)<Props>(({ theme, hasAnimation }: Props) => `
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: ${theme.$.zIndex.buttonLoading};

  ${hasAnimation
    ? `
      &.src-button-loading-show {
        opacity: 0;
        transform: scale(0);
      }

      &.src-button-loading-show-active {
        transition: 300ms 0s ease-in-out;
        transition-property: opacity, transform;
        opacity: 1;
        transform: scale(1);
      }

      &.src-button-loading-hide {
        opacity: 1;
        transform: scale(1);
      }

      &.src-button-loading-hide-active {
        transition: 300ms 0s ease-in-out;
        transition-property: opacity, transform;
        opacity: 0;
        transform: scale(0);
      }
    `
    : ''
  }
`)
