import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { OrderPosition } from '../../types'
import { toCSSValue } from '../../util/css'

interface Props extends
  StyledProps,
  ResponsiveProp<'alertIconSize', SizeProp> {
  alertPalette: PaletteProp
  hasBackground: boolean
  hasHover: boolean
  iconPosition: OrderPosition
  isClickable: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs<Props>(({ hasBackground, iconPosition }) => ({
  getAlertIconSize: (v, t) => `
    padding: 0 ${toCSSValue(t.$.size.alert[v].padding.x)(v => v / 2)};

    ${!hasBackground
      ? `
        padding-${iconPosition === OrderPosition.LEFT ? 'right' : 'left'}: 0;
      `
      : ''
    }

    > svg {
      height: ${t.$.size.alert[v].iconSize};
      width: ${t.$.size.alert[v].iconSize};
    }

    > i {
      font-size: ${t.$.size.alert[v].iconSize};
    }
  `,
}))<Props>(({ theme, alertPalette, hasBackground, hasHover, isClickable, isOutline, isSoft, palette }: Props) => `
  align-items: center;
  align-self: stretch;
  display: flex;
  fill: currentcolor;
  flex: 0 0 auto;
  justify-content: center;

  ${((palette === alertPalette && !isOutline) || hasBackground)
    ? `
      color: ${!isSoft ? (theme.$.palette[alertPalette].alert?.icon?.font ?? theme.$.palette[alertPalette].font) : (theme.$.palette[alertPalette]?.alert?.soft?.icon?.font ?? theme.$.palette[alertPalette].softFont)};
    `
    : `
      color: ${!isSoft ? (theme.$.palette[palette].alert?.icon?.font ?? theme.$.palette[palette].main) : (theme.$.palette[alertPalette]?.alert?.soft?.icon?.font ?? theme.$.palette[palette].soft)};
    `
  }

  ${hasBackground
    ? `
      ${!isSoft
        ? `
          ${theme.$.palette[palette].alert?.icon?.background
            ? `background: ${theme.$.palette[palette].alert.icon.background};`
            : `background: ${(palette !== alertPalette || isOutline) ? theme.$.palette[palette].main : theme.$.palette[alertPalette].darkest};`
          }
        `
        : `
          ${theme.$.palette[palette].alert?.soft?.icon?.background
            ? `background: ${theme.$.palette[palette].alert.soft.icon.background};`
            : `background: ${(palette !== alertPalette || isOutline) ? theme.$.palette[palette].soft : theme.$.palette[alertPalette].softDynamicest};`
          }
        `
      }
    `
    : ''
  }

  ${hasHover
    ? `
      > * {
        opacity: .5;
      }

      &:hover > * {
        opacity: 1;
      }
    `
    : ''
  }

  ${isClickable
    ? `
      cursor: ${theme.$.cursor.alertIconClickable};
    `
    : ''
  }
`)
