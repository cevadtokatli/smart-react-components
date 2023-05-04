import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'

interface Props extends
  StyledProps,
  ResponsiveProp<'alertIconSize', SizeProp> {
  alertPalette: PaletteProp
  hasBackground: boolean
  hasHover: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs({
  getAlertIconSize: (v, t) => `
    padding: 0 ${toCSSValue(t.$.size.alert[v].padding.x)(v => v / 2)};

    > svg {
      height: ${t.$.size.alert[v].iconSize};
      width: ${t.$.size.alert[v].iconSize};
    }

    > i {
      font-size: ${t.$.size.alert[v].iconSize};
    }
  `,
})<Props>(({ theme, alertPalette, hasBackground, hasHover, isSoft, palette }: Props) => `
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;

  ${(palette === alertPalette || hasBackground)
    ? `
      color: ${!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont};
      fill: ${!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont};

      ${palette !== alertPalette
        ? `
          background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
        `
        : `
          background: ${!isSoft ? theme.$.palette[palette].darkest : theme.$.palette[palette].softDarkest};
        `
      }
    `
    : `
      color: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
      fill: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
    `
  }

  ${hasHover
    ? `
      > * {
        opacity: .5;
      }

      :hover > * {
        opacity: 1;
      }
    `
    : ''
  }
`)
