import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { getReverseOrderPosition } from '../../util/props'

interface Props extends StyledProps {
  iconPosition: OrderPosition
  isClickable: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Div)<Props>(({ theme, iconPosition, isClickable, isOutline, isSoft, palette, shape }: Props) => `
  align-items: center;
  align-self: stretch;
  border: solid 1px;
  border-${OrderPosition[getReverseOrderPosition(iconPosition)].toLowerCase()}: 0;
  border-color: ${!isSoft ? theme.$.palette[palette].dynamicer : theme.$.palette[palette].softDarker};  
  border-radius: ${theme.$.radius.badge[shape]};
  border-bottom-${OrderPosition[getReverseOrderPosition(iconPosition)].toLowerCase()}-radius: 0;
  border-top-${OrderPosition[getReverseOrderPosition(iconPosition)].toLowerCase()}-radius: 0;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;

  ${!isOutline
    ? `  
      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].font};
          fill: ${theme.$.palette[palette].font};
        `
        : `
          background: ${theme.$.palette[palette].softDarker};
          color: ${theme.$.palette[palette].softFont};
          fill: ${theme.$.palette[palette].softFont};       
        `
      }

      ${isClickable
        ? `
          cursor: ${theme.$.cursor.badgeIconClickable};

          &:active {
            ${!isSoft
              ? `
                background: ${theme.$.palette[palette].dynamicest};
                border-color: ${theme.$.palette[palette].dynamicest};  
              `
              : `
                background: ${theme.$.palette[palette].softDarkest};
                border-color: ${theme.$.palette[palette].softDarkest};
              `
            }
          }
        `
        : ''
      }
    `
    : `
     ${!isSoft
        ? `
          color: ${theme.$.palette[palette].main};
          fill: ${theme.$.palette[palette].main};
        `
        : `
          color: ${theme.$.palette[palette].soft};
          fill: ${theme.$.palette[palette].soft};       
        `
      }

      ${isClickable
        ? `
          &:active {
            ${!isSoft
              ? `
                background: ${theme.$.palette[palette].dynamicer};
                color: ${theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].font};
              `
              : `
                background: ${theme.$.palette[palette].softDarker};
                color: ${theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].softFont};
              `
            }
          }
        `
        : ''
      }
    `
  }
`)
