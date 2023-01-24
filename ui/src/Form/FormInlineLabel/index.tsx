import Label from '@smart-react-components/core/Element/Label'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { toCSSValue } from '../../util/css'
import { getReverseOrderPosition } from '../../util/props'

interface Props extends
  StyledProps,
  ResponsiveProp<'formSize', SizeProp> {
  isBlock: boolean
  isDisabled: boolean
  labelPosition: OrderPosition
}

export default styled(Label).attrs<Props>(({ isBlock, labelPosition }: Props) => ({
  getFormSize: (v, t) => `
    ${!isBlock
      ? `
        margin: ${t.$.size.form.inlineLabel[v].margin.y} ${t.$.size.form.inlineLabel[v].margin.x};
      `
      : `
        margin-bottom: ${t.$.size.form.inlineLabel[v].margin.x};
      `
    }

    > :last-child {
      font-size: ${t.$.size.form.inlineLabel[v].fontSize};
      margin-${OrderPosition[getReverseOrderPosition(labelPosition)].toLowerCase()}: ${toCSSValue(t.$.size.form.inlineLabel[v].margin.x)(v => (v / 1.0667).toFixed(5))};
    }
  `,
}))<Props>(({ theme, isBlock, isDisabled, labelPosition }: Props) => `
  align-items: center;
  cursor: default;
  display: ${isBlock ? 'flex' : 'inline-flex'};
  justify-content: space-between;
  position: relative;

  > :first-child {
    flex: 0 0 auto;
  }

  > :last-child {
    color: ${theme.$.color.dynamic.font};
    display: inline-flex;
    flex: 1 1 auto;
    font-family: ${theme.$.fontFamily.form};
    word-break: break-word;
    word-wrap: break-word;
    -webkit-tap-highlight-color: transparent;
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.formDisabled};
      pointer-events: none;
    `
    : ''
  }

  ${labelPosition === OrderPosition.LEFT
    ? `
      > :last-child {
        order: 1;
      }

      > :first-child {
        order: 2;
      }
    `
    : ''
  }
`)
