import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'buttonSize', SizeProp>> {
  hasSpace?: boolean
  isBlock?: boolean
  isFixedSize?: boolean
  length?: number
  shape?: ShapeProp
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
