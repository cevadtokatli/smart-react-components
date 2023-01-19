import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  hasHover: boolean
  isActive: boolean
  isFilled: boolean
  isDisabled: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div)<Props>(({ theme, hasHover, isActive, isDisabled, isFilled, isSoft, palette }: Props) => `
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
                background: ${!isFilled ? theme.$.palette[palette].main : theme.$.palette[palette].dynamic};
                color: ${theme.$.palette[palette].font};
              `
              : `
                background: ${!isFilled ? theme.$.palette[palette].soft : theme.$.palette[palette].softDark};
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
          background: ${!isFilled ? theme.$.palette[palette].dynamicer : theme.$.palette[palette].dynamicest};
          color: ${theme.$.palette[palette].font};
        `
        : `
          background: ${!isFilled ? theme.$.palette[palette].softDarker : theme.$.palette[palette].softDarkest};
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
