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

export default styled(Div).attrs<Props>({
  className: 'src-badge-icon',
})<Props>(({ theme, iconPosition, isClickable, isOutline, isSoft, palette, shape }: Props) => `
  align-items: center;
  align-self: stretch;
  border: solid 1px;
  border-${OrderPosition[getReverseOrderPosition(iconPosition)].toLowerCase()}: 0;
  border-color: ${!isSoft ? theme.$.palette[palette].dynamicer : theme.$.palette[palette].softDynamicer};  
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
          background: ${theme.$.palette[palette].badge?.icon?.background ?? theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].badge?.icon?.font ?? theme.$.palette[palette].font};
          fill: ${theme.$.palette[palette].badge?.icon?.font ?? theme.$.palette[palette].font};
        `
        : `
          background: ${theme.$.palette[palette].badge?.soft?.icon?.background ?? theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].badge?.soft?.icon?.font ?? theme.$.palette[palette].softFont};
          fill: ${theme.$.palette[palette].badge?.soft?.icon?.font ?? theme.$.palette[palette].softFont};       
        `
      }

      ${isClickable
        ? `
          cursor: ${theme.$.cursor.badgeIconClickable};

          &:active {
            ${!isSoft
              ? `
                background: ${theme.$.palette[palette].badge?.active?.icon?.background ?? theme.$.palette[palette].dynamicest};
                border-color: ${theme.$.palette[palette].badge?.active?.icon?.border ?? theme.$.palette[palette].dynamicest};  

                ${theme.$.palette[palette].badge?.active?.icon?.font
                  ? `
                    color: ${theme.$.palette[palette].badge?.active?.icon?.font};
                    fill: ${theme.$.palette[palette].badge?.active?.icon?.font};
                  `
                  : ''
                }
              `
              : `
                background: ${theme.$.palette[palette].badge?.soft?.active?.icon?.background ?? theme.$.palette[palette].softDynamicest};
                border-color: ${theme.$.palette[palette].badge?.soft?.active?.icon?.border ?? theme.$.palette[palette].softDynamicest};

                ${theme.$.palette[palette].badge?.soft?.active?.font
                  ? `
                    color: ${theme.$.palette[palette].badge?.soft?.active?.font};
                    fill: ${theme.$.palette[palette].badge?.soft?.active?.font};
                  `
                  : ''
                }
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
          color: ${theme.$.palette[palette]?.badge?.outline?.icon?.font ?? theme.$.palette[palette].main};
          fill: ${theme.$.palette[palette]?.badge?.outline?.icon?.font ?? theme.$.palette[palette].main};
        `
        : `
          color: ${theme.$.palette[palette]?.badge?.soft?.outline?.icon?.font ?? theme.$.palette[palette].soft};
          fill: ${theme.$.palette[palette]?.badge?.soft?.outline?.icon?.font ?? theme.$.palette[palette].soft};       
        `
      }

      ${isClickable
        ? `
          &:active {
            ${!isSoft
              ? `
                background: ${theme.$.palette[palette].badge?.outline?.active?.icon?.background ?? theme.$.palette[palette].dynamicer};
                color: ${theme.$.palette[palette].badge?.outline?.active?.icon?.font ?? theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].badge?.outline?.active?.icon?.font ?? theme.$.palette[palette].font};
              `
              : `
                background: ${theme.$.palette[palette].badge?.soft?.outline?.active?.icon?.background ?? theme.$.palette[palette].softDynamicer};
                color: ${theme.$.palette[palette].badge?.soft?.outline?.active?.icon?.font ?? theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].badge?.soft?.outline?.active?.icon?.font ?? theme.$.palette[palette].softFont};
              `
            }
          }
        `
        : ''
      }
    `
  }
`)
