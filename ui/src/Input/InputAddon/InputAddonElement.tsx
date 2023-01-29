import Div from '@smart-react-components/core/Element/Div'
import Label from '@smart-react-components/core/Element/Label'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { toCSSValue } from '../../util/css'
import { getReverseOrderPosition } from '../../util/props'

interface Props extends
  StyledProps,
  ResponsiveProp<'inputSize', SizeProp> {
  addonPosition: OrderPosition
  hasBorder: boolean
  isDisabled: boolean
  isFocused: boolean
  isOutline: boolean
  isSeparated: boolean
  isSoft: boolean
  palette: PaletteProp
  shape?: ShapeProp
}

export default styled(Div).attrs<Props>(({ isSeparated }: Props) => ({
  ...(isSeparated && { as: Label }),
  getInputSize: (v, t) => `
    font-size: ${t.$.size.form.blockLabel[v].fontSize};
    padding: ${isSeparated ? t.$.size.input[v].padding.y : 0} ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
  `,
}))<Props>(({ theme, addonPosition, hasBorder, isDisabled, isFocused, isOutline, isSeparated, isSoft, palette, shape }: Props) => `
  align-items: center;
  border-bottom-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.input[shape]};
  border-top-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.input[shape]};
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  transition: 200ms 0s ease-in-out;
  transition-property: background, border, color, fill;

  ${isSeparated
    ? `
      align-self: flex-start;
    `
    : ''
  }

  ${hasBorder
    ? `
      border: solid 1px;
      border-${OrderPosition[getReverseOrderPosition(addonPosition)].toLowerCase()}: 0;
    `
    : ''
  }

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          color: ${theme.$.palette[palette].font};
          fill: ${theme.$.palette[palette].font};

          ${(isSeparated || !isFocused)
            ? `
              background: ${theme.$.palette[palette].main};
              border-color: ${theme.$.palette[palette].dark};
            `
            : `
              background: ${theme.$.palette[palette].dynamicer};
              border-color: ${theme.$.palette[palette].dynamicest};
            `
          }
        `
        : `
          color: ${theme.$.palette[palette].softFont};
          fill: ${theme.$.palette[palette].softFont};

          ${(isSeparated || !isFocused)
            ? `
              background: ${theme.$.palette[palette].soft};
              border-color: ${theme.$.palette[palette].softDark};
            `
            : `
              background: ${theme.$.palette[palette].softDarker};
              border-color: ${theme.$.palette[palette].softDarkest};
            `
          }
        `
      }
    `
    : `
      background: ${theme.$.color.dynamic.background};
      border-color ${(isSeparated || !isFocused) ? theme.$.color.dynamic.accent : theme.$.palette[palette].main};
      color: ${theme.$.color.dynamic.font};
      fill: ${theme.$.color.dynamic.font};
    `
  }

  ${(!isSeparated && isDisabled)
    ? `
      opacity: ${theme.$.opacity.formDisabled};

      ${isOutline
        ? `
          background: ${theme.$.color.dynamic.accent};  
          color: ${theme.$.color.dynamic.gray};
        `
        : ''
      }
    `
    : ''
  }
`)
