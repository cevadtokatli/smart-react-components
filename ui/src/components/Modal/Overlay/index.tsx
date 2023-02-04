import styled from 'styled-components'
import Modal from '../'
import Overlay, { Props as OverlayProps } from '../../../Overlay/OverlayElement'

interface Props extends OverlayProps {
  duration: number
  isFullScreen: boolean
}

export default styled(Overlay)<Props>(({ theme, duration, isFullScreen }: Props) => `
  ${isFullScreen
    ? `
      padding: 0;  
    `
    : ''
  }

  will-change: opacity;

  > ${Modal} {
    will-change: transform;
  }

  &.src-modal-show {
    opacity: 0;

    > ${Modal} {
      transform: translateY(-${theme.$.length.overlay.space});
    }
  }

  &.src-modal-show-active {
    opacity: 1;

    > ${Modal} {
      transform: translateY(0);
    }
  }

  &.src-modal-hide {
    opacity: 1;

    > ${Modal} {
      transform: translateY(0);
    }
  }

  &.src-modal-hide-active {
    opacity: 0;

    > ${Modal} {
      transform: translateY(-${theme.$.length.overlay.space});
    }
  }

  &.src-modal-show-active,
  &.src-modal-hide-active {
    transition: opacity ${duration}ms 0s ease-in-out;

    > ${Modal} {
      transition: transform ${duration}ms 0s ease-in-out;
    }
  }
`)
