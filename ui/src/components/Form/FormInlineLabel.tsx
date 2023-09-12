import Label from '@smart-react-components/core/Element/Label'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { toCSSValue } from '../../util/css'
import { calculateFormLabelMarginX } from '../../util/form'
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

    > span {
      font-size: ${t.$.size.form.inlineLabel[v].fontSize};
      margin-${OrderPosition[getReverseOrderPosition(labelPosition)].toLowerCase()}: ${toCSSValue(t.$.size.form.inlineLabel[v].margin.x)(calculateFormLabelMarginX)};
    }
  `,
}))<Props>(({ theme, isBlock, isDisabled, labelPosition }: Props) => `
  align-items: center;
  cursor: ${theme.$.cursor.formInlineLabel};
  display: ${isBlock ? 'flex' : 'inline-flex'};
  justify-content: space-between;
  position: relative;

  > div {
    flex: 0 0 auto;
  }

  > span {
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
      > span {
        order: 1;
      }

      > div {
        order: 2;
      }
    `
    : ''
  }
`)
