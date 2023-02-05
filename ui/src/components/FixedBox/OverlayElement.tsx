import styled from 'styled-components'
import OverlayElement, { Props as OverlayElementProps } from '../Overlay/OverlayElement'

interface Props extends OverlayElementProps {
  duration: number
}

const overlayAnimation = duration => `
  will-change: opacity;

  &.src-fixed-box-show {
    opacity: 0;
  }

  &.src-fixed-box-show-active {
    opacity: 1;
  }

  &.src-fixed-box-hide {
    opacity: 1;
  }

  &.src-fixed-box-hide-active {
    opacity: 0;
  }

  &.src-fixed-box-show-active,
  &.src-fixed-box-hide-active {
    transition: opacity ${duration}ms 0s ease-in-out;
  }
`

const fixedBoxAnimation = duration => `
  > * {
    will-change: opacity, transform;
  }

  &.src-fixed-box-show > * {
    opacity: 0;
    transform: translateY(60px);
  }

  &.src-fixed-box-show-active > * {
    opacity: 1;
    transform: translateY(0);
  }

  &.src-fixed-box-hide > * {
    opacity: 1;
    transform: translateY(0);
  }

  &.src-fixed-box-hide-active > * {
    opacity: 0;
    transform: translateY(60px);
  }

  &.src-fixed-box-show-active,
  &.src-fixed-box-hide-active {
    > * {
      transition: ${duration}ms 0s ease-in-out;
      transition-property: opacity, transform;
    }
  }
`

export default styled(OverlayElement)<Props>(({ theme, breakpoint, duration }: Props) => `
  ${breakpoint
    ? `
      @media(max-width: ${theme.$.length.breakpoint.medium - 1}px) {
        align-items: center;

        ${overlayAnimation(duration)}
      }

      @media(min-width: ${theme.$.length.breakpoint.medium}px) {
        ${fixedBoxAnimation(duration)}
      }
    `
    : `
      ${fixedBoxAnimation(duration)}
    `
  }
`)
