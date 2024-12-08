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
  ResponsiveProp<'inputSize', SizeProp> {
  addonPosition: OrderPosition
  cursorKey?: string
  hasBorder: boolean
  isClickable: boolean
  isDisabled: boolean
  isFocused: boolean
  isOutline: boolean
  isReadOnly: boolean
  isSeparated: boolean
  isSoft: boolean
  palette: PaletteProp
  shape?: ShapeProp
}

export default styled(Div).attrs<Props>(({ className = '', isSeparated }) => ({
  ...(isSeparated && { as: 'label' }),
  className: `src-input-addon ${className}`,
  getInputSize: (v, t) => `
    font-size: ${t.$.size.form.blockLabel[v].fontSize};
    padding: ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};

    ${Svg} {
      height: ${t.$.size.icon[v]};
      width: ${t.$.size.icon[v]};
    }
  `,
}))<Props>(({ theme, addonPosition, cursorKey, hasBorder, isClickable, isDisabled, isFocused, isOutline, isReadOnly, isSeparated, isSoft, palette, shape }: Props) => `
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  fill: currentcolor;
  flex: 0 0 auto;
  justify-content: center;
  transition: 200ms 0s ease-in-out;
  transition-property: background, border, color, fill;

  ${isSeparated
    ? `
      border-bottom-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.input[shape]};
      border-top-${OrderPosition[addonPosition].toLowerCase()}-radius: ${theme.$.radius.input[shape]};

      ${hasBorder
        ? `
          border: solid 1px;
          border-${OrderPosition[getReverseOrderPosition(addonPosition)].toLowerCase()}: 0;
        `
        : ''
      }
    `
    : ''
  }

  ${!isOutline
    ? `
      ${!isSoft
        ? `

          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].input?.addon?.background ?? theme.$.palette[palette].main};
              border-color: ${theme.$.palette[palette].input?.addon?.border ?? theme.$.palette[palette].dark};
              color: ${theme.$.palette[palette].input?.addon?.font ?? theme.$.palette[palette].font};
            `
            : `
              background: ${theme.$.palette[palette].input?.focused?.addon?.background ?? theme.$.palette[palette].dynamicer};
              border-color: ${theme.$.palette[palette].input?.focused?.addon?.border ?? theme.$.palette[palette].dynamicest};
              color: ${theme.$.palette[palette].input?.focused?.addon?.font ?? theme.$.palette[palette].font};
            `
          }
        `
        : `
          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].input?.soft?.addon?.background ?? theme.$.palette[palette].soft};
              border-color: ${theme.$.palette[palette].input?.soft?.addon?.border ?? theme.$.palette[palette].softDynamic};
              color: ${theme.$.palette[palette].input?.soft?.addon?.font ?? theme.$.palette[palette].softFont};
            `
            : `
              background: ${theme.$.palette[palette].input?.soft?.focused?.addon?.background ?? theme.$.palette[palette].softDynamicer};
              border-color: ${theme.$.palette[palette].input?.soft?.focused?.addon?.border ?? theme.$.palette[palette].softDynamicest};
              color: ${theme.$.palette[palette].input?.soft?.focused?.addon?.font ?? theme.$.palette[palette].softFont};
            `
          }
        `
      }
    `
    : `
      ${!isSoft
        ? `
          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].input?.outline?.addon?.background ?? theme.$.color.dynamic.background};
              border-color ${theme.$.palette[palette].input?.outline?.addon?.border ?? theme.$.color.dynamic.accent};
              color: ${theme.$.palette[palette].input?.outline?.addon?.font ?? theme.$.color.dynamic.font};
            `
            : `
              background: ${theme.$.palette[palette].input?.outline?.focused?.addon?.background ?? theme.$.color.dynamic.background};
              border-color ${theme.$.palette[palette].input?.outline?.focused?.addon?.border ?? theme.$.palette[palette].main};
              color: ${theme.$.palette[palette].input?.outline?.focused?.addon?.font ?? theme.$.color.dynamic.font};
            `
          }
        `
        : `
          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].input?.soft?.outline?.addon?.background ?? theme.$.color.dynamic.background};
              border-color ${theme.$.palette[palette].input?.soft?.outline?.addon?.border ?? theme.$.color.dynamic.accent};
              color: ${theme.$.palette[palette].input?.soft?.outline?.addon?.font ?? theme.$.color.dynamic.font};
            `
            : `
              background: ${theme.$.palette[palette].input?.soft?.outline?.focused?.addon?.background ?? theme.$.color.dynamic.background};
              border-color ${theme.$.palette[palette].input?.soft?.outline?.focused?.addon?.border ?? theme.$.palette[palette].main};
              color: ${theme.$.palette[palette].input?.soft?.outline?.focused?.addon?.font ?? theme.$.color.dynamic.font};
            `
          }
        `
      }
    `
  }

  ${(!isSeparated && isDisabled)
    ? `
      opacity: ${theme.$.opacity.formDisabled};
      pointer-events: none;

      ${isOutline
        ? `
          background: ${!isSoft ? (theme.$.palette[palette].input?.outline?.disabled?.addon?.background ?? theme.$.color.dynamic.accent) : (theme.$.palette[palette].input?.soft?.outline?.disabled?.addon?.background ?? theme.$.color.dynamic.accent)};  
          color: ${!isSoft ? (theme.$.palette[palette].input?.outline?.disabled?.addon?.font ?? theme.$.color.dynamic.gray) : (theme.$.palette[palette].input?.soft?.outline?.disabled?.addon?.font ?? theme.$.color.dynamic.gray)};
        `
        : ''
      }
    `
    : ''
  }

  ${(isSeparated && isClickable)
    ? `
      cursor: ${theme.$.cursor.inputAddonClickable};  
    `
    : ''
  }

  ${(!isSeparated && !isReadOnly && !isDisabled && cursorKey)
    ? `
      cursor: ${theme.$.cursor[cursorKey]};
    `
    : ''
  }
`)
