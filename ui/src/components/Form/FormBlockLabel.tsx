import Label from '@smart-react-components/core/Element/Label'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import { calculateFormLabelMarginX } from '../../util/form'

interface Props extends
  StyledProps,
  ResponsiveProp<'formSize', SizeProp> {
  isBlock: boolean
  isDisabled: boolean
}

export default styled(Label).attrs<Props>(({ isBlock }) => ({
  getFormSize: (v, t) => `
    ${isBlock
      ? `
        > span {
          margin-bottom: ${t.$.size.form.blockLabel[v].margin};
        }
      `
      : `
        margin-bottom: ${t.$.size.form.blockLabel[v].margin};

        > span {
          margin-right: ${toCSSValue(t.$.size.form.blockLabel[v].margin)(calculateFormLabelMarginX)};
        }
      `
    }

    > span {
      font-size: ${t.$.size.form.blockLabel[v].fontSize};
    }
  `,
}))<Props>(({ theme, isBlock, isDisabled }: Props) => `
  > span {
    cursor: default;
    display: block;
    word-break: break-word;
    word-wrap: break-word;
    -webkit-tap-highlight-color: transparent;
  }

  ${!isBlock
    ? `
      display: flex;
      
      > span {
        align-self: center;
      }

      > div {
        align-self: flex-start;
      }
    `
    : ''
  }

  ${isDisabled
    ? `
      > span {
        opacity: ${theme.$.opacity.formDisabled};
        pointer-events: none;
      }
    `
    : ''
  }
`)
