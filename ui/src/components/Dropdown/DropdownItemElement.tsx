import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  hasHover: boolean
  isActive: boolean
  isHovered: boolean
  isDisabled: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div)<Props>(({ theme, hasHover, isActive, isDisabled, isHovered, isOutline, isSoft, palette }: Props) => `
  border-radius: ${theme.$.radius.dropdown};
  fill: currrentcolor;
  transition: 100ms 0s ease-in-out;
  transition-property: background, color, fill;

  .svg,
  .svg .fill,
  .svg .stroke {
    transition: 100ms 0s ease-in-out;
    transition-property: fill, stroke;
  }

  ${isSoft
    ? `
      font-weight: ${theme.$.fontWeight.bold};
    `
    : ''
  }

  ${!isActive
    ? `
      ${(hasHover || isHovered) && !theme.$.vars.isMobile
        ? `
          ${!isHovered ? '&:hover {' : ''}
            ${!isSoft
              ? `
                background: ${!isOutline ? (theme.$.palette[palette].dropdown?.hover?.background ?? theme.$.palette[palette].dynamic) : (theme.$.palette[palette].dropdown?.outline?.hover?.background ?? theme.$.palette[palette].main)};
                color: ${!isOutline ? (theme.$.palette[palette].dropdown?.hover?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.hover?.font ?? theme.$.palette[palette].font)};

                .svg,
                .svg .fill {
                  fill: ${!isOutline ? (theme.$.palette[palette].dropdown?.hover?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.hover?.font ?? theme.$.palette[palette].font)};
                }

                .svg .stroke {
                  stroke: ${!isOutline ? (theme.$.palette[palette].dropdown?.hover?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.hover?.font ?? theme.$.palette[palette].font)};
                }
              `
              : `
                background: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.hover?.background ?? theme.$.palette[palette].softDynamic) : (theme.$.palette[palette].dropdown?.soft?.outline?.hover?.background ?? theme.$.palette[palette].soft)};
                color: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.hover?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont)};

                .svg,
                .svg .fill {
                  fill: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.hover?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont)};
                }

                .svg .stroke {
                  stroke: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.hover?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont)};
                }
              `
            }
          ${!isHovered ? '}' : ''}
        `
        : ''
      }
    `
    : `
      ${!isSoft
        ? `
          background: ${!isOutline ? (theme.$.palette[palette].dropdown?.active?.background ?? theme.$.palette[palette].dynamicest) : (theme.$.palette[palette].dropdown?.outline?.active?.background ?? theme.$.palette[palette].dynamicer)};
          color: ${!isOutline ? (theme.$.palette[palette].dropdown?.active?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.active?.font ?? theme.$.palette[palette].font)};

          .svg,
          .svg .fill {
            fill: ${!isOutline ? (theme.$.palette[palette].dropdown?.active?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.active?.font ?? theme.$.palette[palette].font)};
          }

          .svg .stroke {
            stroke: ${!isOutline ? (theme.$.palette[palette].dropdown?.active?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.outline?.active?.font ?? theme.$.palette[palette].font)};
          }
        `
        : `
          background: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.active?.background ?? theme.$.palette[palette].softDynamicest) : (theme.$.palette[palette].dropdown?.soft?.outline?.active?.background ?? theme.$.palette[palette].softDynamicer)};
          color: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.active?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.active?.font ?? theme.$.palette[palette].softFont)};

          .svg,
          .svg .fill {
            fill: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.active?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.active?.font ?? theme.$.palette[palette].softFont)};
          }

          .svg .stroke {
            stroke: ${!isOutline ? (theme.$.palette[palette].dropdown?.soft?.active?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].dropdown?.soft?.outline?.active?.font ?? theme.$.palette[palette].softFont)};
          }
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
