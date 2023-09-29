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
    cursor: ${isDisabled ? theme.$.cursor.breadcrumbDisabled : theme.$.cursor.breadcrumb};
    display: inline-flex;
    padding: ${theme.$.length.breadcrumb.padding.y} ${theme.$.length.breadcrumb.padding.x};
    text-decoration: none;
    transition: 200ms 0s ease-in-out;
    transition-property: background, border, color, fill;

    ${isSoft
      ? `
        font-weight: ${theme.$.fontWeight.bold};  
      `
      : ''
    }

    ${!isDisabled
      ? `
        &:hover {
          text-decoration: underline;
        }  
      `
      : `
        opacity: ${theme.$.opacity.breadcrumbDisabled};
        pointer-events: none;
      `
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
                color: ${theme.$.palette[palette].darkest};
                fill: ${theme.$.palette[palette].darkest};
              `
            }
          `
          : `
            ${(!isActive && !isDisabled) || isDisabled
              ? `
                color: ${theme.$.palette[palette].softDarkest};
                fill: ${theme.$.palette[palette].softDarkest};
              `
              : `
                color: ${theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].softFont};
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
                    color: ${theme.$.color.dynamic.bodyFont};
                    fill: ${theme.$.color.dynamic.bodyFont};
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
                    color: ${theme.$.color.dynamic.bodyFont};
                    fill: ${theme.$.color.dynamic.bodyFont};
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

    ${isSoft
      ? `
        font-weight: ${theme.$.fontWeight.bold};  
      `
      : ''
    }
  }
`)
