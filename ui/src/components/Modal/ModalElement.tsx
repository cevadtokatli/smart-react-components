import Div from '@smart-react-components/core/Element/Div'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import ModalHeader from '../../Modal/ModalHeader'
import ModalTitle from '../../Modal/ModalTitle'

interface Props extends
  StyledProps,
  ResponsiveProp<'modalSize', SizeProp> {
  hasBorder: boolean
  isBlock: boolean
  isCentered: boolean
  isFullScreen: boolean
  isStretched: boolean
  shape: ShapeProp
}

export default styled(Div).attrs<Props>(({ isBlock, isFullScreen }: Props) => ({
  getModalSize: (v, t) => `
    ${(!isBlock && !isFullScreen)
      ? `
        width: ${t.$.size.modal[v].width};
      `
      : ''
    }

    > * {
      padding: ${t.$.size.modal[v].padding.y} ${t.$.size.modal[v].padding.x};
    }

    ${ModalHeader} {
      ${ModalTitle} {
        font-size: ${t.$.size.modal[v].titleFontSize};
      }

      ${Svg} {
        margin: -${t.$.size.modal[v].padding.y} -${t.$.size.modal[v].padding.x} -${t.$.size.modal[v].padding.y} 0;
        padding: ${t.$.size.modal[v].padding.y} ${t.$.size.modal[v].padding.x};
        height: ${t.$.size.icon[v]};
        width: ${t.$.size.icon[v]};
      }
    }
  `,
}))<Props>(({ theme, hasBorder, isBlock, isCentered, isFullScreen, isStretched, shape }: Props) => `
  background: ${theme.$.color.dynamic.background};
  box-sizing: border-box;
  color: ${theme.$.color.dynamic.bodyFont};
  display: flex;
  fill: currentcolor;
  flex-direction: column;
  max-height: 100%;

  ${(isBlock || isFullScreen)
    ? `
      width: 100%;
    `
    : ''
  }

  ${(isStretched || isFullScreen)
    ? `
      align-self: stretch;  
    `
    : `
      align-self: ${isCentered ? 'center' : 'flex-start'};
    `
  }

  ${!isFullScreen
    ? `
      border-radius: ${theme.$.radius.modal[shape]};

      ${hasBorder
        ? `
          border: solid 1px ${theme.$.color.dynamic.accent};
        `
        : ''
      }

      > *:first-child {
        border-top-left-radius: ${theme.$.radius.modal[shape]};
        border-top-right-radius: ${theme.$.radius.modal[shape]};
      }

      > *:last-child {
        border-bottom-left-radius: ${theme.$.radius.modal[shape]};
        border-bottom-right-radius: ${theme.$.radius.modal[shape]};
      }
    `
    : ''
  }
`)
