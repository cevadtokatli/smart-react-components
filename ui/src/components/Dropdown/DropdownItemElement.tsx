import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  hasHover: boolean
  isActive: boolean
  isDisabled: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div)<Props>(({ theme, hasHover, isActive, isDisabled, isOutline, isSoft, palette }: Props) => `
  border-radius: ${theme.$.radius.dropdown};
  cursor: default;
  transition: 100ms 0s ease-in-out;
  transition-property: background, color, fill;

  ${!isActive
    ? `
      ${hasHover && !theme.$.vars.isMobile
        ? `
          &:hover {
            ${!isSoft
              ? `
                background: ${!isOutline ? theme.$.palette[palette].dynamic : theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].font};
              `
              : `
                background: ${!isOutline ? theme.$.palette[palette].softDark : theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].softFont};
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
          background: ${!isOutline ? theme.$.palette[palette].dynamicest : theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].font};
        `
        : `
          background: ${!isOutline ? theme.$.palette[palette].softDarkest : theme.$.palette[palette].softDarker};
          color: ${theme.$.palette[palette].softFont};
        `
      }
    `
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.dropdownDisabled};
      pointer-events: none;
    `
    : ''
  }
`)
