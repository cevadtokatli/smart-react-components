import Div from '@smart-react-components/core/Element/Div'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { toCSSValue } from '../../util/css'
import { getReverseOrderPosition } from '../../util/props'

interface Props extends
  StyledProps,
  ResponsiveProp<'buttonSize', SizeProp> {
  addonPosition: OrderPosition
  hasHover: boolean
  isDisabled: boolean
  isOutline: boolean
  isSeparated: boolean
  isSoft: boolean
  palette: PaletteProp
  shape?: ShapeProp
}

export default styled(Div).attrs<Props>({
  className: 'src-button-addon',
  getButtonSize: (v, t) => `
    font-size: ${t.$.size.button[v].fontSize};
    padding: 0 ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};

    > ${Svg} {
      height: ${t.$.size.button[v].iconSize};
      width: ${t.$.size.button[v].iconSize};
    }
  `,
})<Props>(({ theme, addonPosition, hasHover, isDisabled, isOutline, isSeparated, isSoft, palette, shape }: Props) => `
  align-items: center;
  border: solid 1px;
  border-${OrderPosition[getReverseOrderPosition(addonPosition)].toLowerCase()}: 0;
  border-bottom-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.button[shape]};
  border-top-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.button[shape]};
  box-sizing: border-box;
  display: inline-flex;
  fill: currentcolor;
  flex: 0 0 auto;
  justify-content: center;
  transition: 300ms 0s ease-in-out;
  transition-property: background, border, color;

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].dynamicer};
          border-color: ${theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].font};

          ${(isSeparated && hasHover)
            ? `
              &:hover {
                background: ${theme.$.palette[palette].dynamicest};
                border-color: ${theme.$.palette[palette].dynamicest};
              }
            `
            : ''
          }
        `
        : `
          background: ${theme.$.palette[palette].softDynamicer};
          border-color: ${theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].softFont};

          ${(isSeparated && hasHover)
            ? `
              &:hover {
                background: ${theme.$.palette[palette].softDynamicest};
                border-color: ${theme.$.palette[palette].softDynamicest};
              }
            `
            : ''
          }
        `
      }
    `
    : `
      ${!isSoft
        ? `
          border-color: ${theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].dynamicer};

          ${(isSeparated && hasHover)
            ? `
              &:hover {
                background: ${theme.$.palette[palette].dynamicer};
                color: ${theme.$.palette[palette].font};
              }
            `
            : ''
          }
        `
        : `
          border-color: ${theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].softDynamicer};

          ${(isSeparated && hasHover)
            ? `
              &:hover {
                background: ${theme.$.palette[palette].softDynamicer};
                color: ${theme.$.palette[palette].softFont};
              }
            `
            : ''
          }
        `
      }
    `
  }

  ${isSeparated
    ? `
      cursor: ${!isDisabled ? theme.$.cursor.button : 'default'};
      user-select: none;
    `
    : ''
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.buttonDisabled};
      pointer-events: none;
    `
    : ''
  }
`)
