import styled from 'styled-components'
import ModalElement from './ModalElement'
import OverlayElement, { Props as OverlayElementProps } from '../Overlay/OverlayElement'

interface Props extends OverlayElementProps {
  duration: number
  isFullScreen: boolean
}

export default styled(OverlayElement)<Props>(({ theme, duration, isFullScreen }: Props) => `
  ${isFullScreen
    ? `
      padding: 0;  
    `
    : ''
  }

  will-change: opacity;

  > ${ModalElement} {
    will-change: transform;
  }

  &.src-modal-show {
    opacity: 0;

    > ${ModalElement} {
      transform: translateY(-${theme.$.length.overlay.space.y});
    }
  }

  &.src-modal-show-active {
    opacity: 1;

    > ${ModalElement} {
      transform: translateY(0);
    }
  }

  &.src-modal-hide {
    opacity: 1;

    > ${ModalElement} {
      transform: translateY(0);
    }
  }

  &.src-modal-hide-active {
    opacity: 0;

    > ${ModalElement} {
      transform: translateY(-${theme.$.length.overlay.space.y});
    }
  }

  &.src-modal-show-active,
  &.src-modal-hide-active {
    transition: opacity ${duration}ms 0s ease-in-out;

    > ${ModalElement} {
      transition: transform ${duration}ms 0s ease-in-out;
    }
  }
`)
