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
                background: ${!isOutline ? theme.$.palette[palette].dynamic : theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].font};

                .svg,
                .svg .fill {
                  fill: ${theme.$.palette[palette].font};
                }

                .svg .stroke {
                  stroke: ${theme.$.palette[palette].font};
                }
              `
              : `
                background: ${!isOutline ? theme.$.palette[palette].softDynamic : theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].softFont};

                .svg,
                .svg .fill {
                  fill: ${theme.$.palette[palette].softFont};
                }

                .svg .stroke {
                  stroke: ${theme.$.palette[palette].softFont};
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
          background: ${!isOutline ? theme.$.palette[palette].dynamicest : theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].font};

          .svg,
          .svg .fill {
            fill: ${theme.$.palette[palette].font};
          }

          .svg .stroke {
            stroke: ${theme.$.palette[palette].font};
          }
        `
        : `
          background: ${!isOutline ? theme.$.palette[palette].softDynamicest : theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].softFont};

          .svg,
          .svg .fill {
            fill: ${theme.$.palette[palette].softFont};
          }

          .svg .stroke {
            stroke: ${theme.$.palette[palette].softFont};
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
