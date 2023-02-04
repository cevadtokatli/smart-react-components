import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'buttonSize', SizeProp> {
  hasSpace: boolean
  isBlock: boolean
  length: number
}

export default styled(Div).attrs<Props>(({ hasSpace }: Props) => ({
  getButtonSize: (v, t) => `
    ${hasSpace
      ? `
        margin: -${t.$.size.button[v].margin.y} -${t.$.size.button[v].margin.x};
      `
      : ''
    }
  `,
}))<Props>(({ isBlock, length }: Props) => `
  align-items: center;
  display: flex;
  justify-content: flex-start;

  ${isBlock
    ? `
      > * {
        flex: 1 1 ${100 / length}%;
        width: ${100 / length}%;
      }
    `
    : `
      flex-wrap: wrap;
    `
  }
`)
