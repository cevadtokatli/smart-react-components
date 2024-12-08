import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

export interface Props extends StyledProps {
  hasBorder: boolean
  hasSeparatedLeftAddon: boolean
  hasSeparatedRightAddon: boolean
  isDisabled: boolean
  isFocused: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Div)<Props>(({ theme, hasBorder, hasSeparatedLeftAddon, hasSeparatedRightAddon, isDisabled, isFocused, isOutline, isSoft, palette, shape }: Props) => `
  border: ${hasBorder ? 'solid 1px' : '0'};
  border-radius: ${theme.$.radius.input[shape]};
  display: flex;
  flex: 1 1 auto;
  min-width: 1px;
  overflow: hidden;
  transition: 200ms 0s ease-in-out;
  transition-property: border;

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          border-color: ${!isFocused ? (theme.$.palette[palette].input?.border ?? theme.$.palette[palette].dark) : (theme.$.palette[palette].input?.focused?.border ?? theme.$.palette[palette].dynamicest)};
        `
        : `
          border-color: ${!isFocused ? (theme.$.palette[palette].input?.soft?.border ?? theme.$.palette[palette].softDynamic) : (theme.$.palette[palette]?.input?.soft?.focused?.border ?? theme.$.palette[palette].softDynamicest)};
        `
      }
    `
    : `
      ${!isFocused
      ? `
        border-color: ${!isSoft ? (theme.$.palette[palette].input?.outline?.border ?? theme.$.color.dynamic.accent) : (theme.$.palette[palette].input?.soft?.outline?.border ?? theme.$.color.dynamic.accent)};
      `
      : `
        border-color: ${!isSoft ? (theme.$.palette[palette].input?.outline?.focused?.border ?? theme.$.palette[palette].main) : (theme.$.palette[palette].input?.soft?.outline?.focused?.border ?? theme.$.palette[palette].soft)};
      `}
    `
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.formDisabled};
    `
    : ''
  }

  ${(hasSeparatedLeftAddon)
    ? `
      border-left: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    `
    : ''
  }
  ${hasSeparatedRightAddon
    ? `
      border-right: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    `
    : ''
  }
`)
