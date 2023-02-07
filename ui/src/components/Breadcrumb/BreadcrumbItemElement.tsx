import Li from '@smart-react-components/core/Element/Li'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  isActive: boolean
  isDisabled: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  separator: string
  shape: ShapeProp
}

export default styled(Li)<Props>(({ theme, isActive, isDisabled, isOutline, isSoft, palette, separator, shape }: Props) => `
  flex: 0 0 auto;
  padding: 0;

  > a {
    border-radius: ${theme.$.radius.breadcrumb[shape]};
    cursor: default;
    display: inline-flex;
    padding: ${theme.$.length.breadcrumb.padding.y} ${theme.$.length.breadcrumb.padding.x};
    text-decoration: none;
    transition: 200ms 0s ease-in-out;
    transition-property: background, border, color, fill;

    ${!isActive && !isDisabled
      ? `
        &:hover {
          text-decoration: underline;
        }  
      `
      : `
        pointer-events: none;
      `
    }

    ${isDisabled
      ? `
        opacity: ${theme.$.opacity.breadcrumbDisabled};
      `
      : ''
    }

    ${!isOutline
      ? `
        ${!isSoft
          ? `
            ${(!isActive && !isDisabled) || isDisabled
              ? `
                color: ${theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].font};
              `
              : `
                color: ${theme.$.palette[palette].dynamicest};
                fill: ${theme.$.palette[palette].dynamicest};
              `
            }
          `
          : `
            ${(!isActive && !isDisabled) || isDisabled
              ? `
                color: ${theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].softFont};
              `
              : `
                color: ${theme.$.palette[palette].softDarkest};
                fill: ${theme.$.palette[palette].softDarkest};
              `
            }
          `
        }
      `
      : `
        ${!isDisabled
          ? `
            ${!isSoft
              ? `
                ${!isActive
                  ? `
                    color: ${theme.$.palette[palette].main};
                    fill: ${theme.$.palette[palette].main};
                  `
                  : `
                    color: ${theme.$.palette[palette].dynamicest};
                    fill: ${theme.$.palette[palette].dynamicest};
                  `
                }
              `
              : `
                ${!isActive
                  ? `
                    color: ${theme.$.palette[palette].soft};
                    fill: ${theme.$.palette[palette].soft};
                  `
                  : `
                    color: ${theme.$.palette[palette].softDarkest};
                    fill: ${theme.$.palette[palette].softDarkest};
                  `
                }
              `
            }
          `
          : `
            color: ${theme.$.color.dynamic.accent};
            fill: ${theme.$.color.dynamic.accent};
          `
        }
      `
    }
  }

  &:not(:last-child)::after {
    content: "${separator ?? theme.$.i18n.breadcrumb.separator}";
    display: inline-block;
    padding: 0 1px;

    ${!isOutline
      ? `
        color: ${!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont};
      `
      : `
        color: ${theme.$.color.dynamic.accent};
      `
    }
  }
`)