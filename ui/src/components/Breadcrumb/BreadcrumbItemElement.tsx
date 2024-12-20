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
                color: ${theme.$.palette[palette].breadcrumb?.font ?? theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].breadcrumb?.font ?? theme.$.palette[palette].font};
              `
              : `
                color: ${theme.$.palette[palette].breadcrumb?.active?.font ?? theme.$.palette[palette].darkest};
                fill: ${theme.$.palette[palette].breadcrumb?.active?.font ?? theme.$.palette[palette].darkest};
              `
            }
          `
          : `
            ${(!isActive && !isDisabled) || isDisabled
              ? `
                color: ${theme.$.palette[palette].breadcrumb?.soft?.font ?? theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].breadcrumb?.soft?.font ?? theme.$.palette[palette].softFont};
              `
              : `
                color: ${theme.$.palette[palette].breadcrumb?.soft?.active?.font ?? theme.$.palette[palette].softDynamicest};
                fill: ${theme.$.palette[palette].breadcrumb?.soft?.active?.font ?? theme.$.palette[palette].softDynamicest};
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
                    color: ${theme.$.palette[palette].breadcrumb?.outline?.font ?? theme.$.palette[palette].main};
                    fill: ${theme.$.palette[palette].breadcrumb?.outline?.font ?? theme.$.palette[palette].main};
                  `
                  : `
                    color: ${theme.$.palette[palette].breadcrumb?.outline?.active?.font ?? theme.$.color.dynamic.bodyFont};
                    fill: ${theme.$.palette[palette].breadcrumb?.outline?.active?.font ?? theme.$.color.dynamic.bodyFont};
                  `
                }
              `
              : `
                ${!isActive
                  ? `
                    color: ${theme.$.palette[palette].breadcrumb?.soft?.outline?.font ?? theme.$.palette[palette].soft};
                    fill: ${theme.$.palette[palette].breadcrumb?.soft?.outline?.font ?? theme.$.palette[palette].soft};
                  `
                  : `
                    color: ${theme.$.palette[palette].breadcrumb?.soft?.outline?.active?.font ?? theme.$.color.dynamic.bodyFont};
                    fill: ${theme.$.palette[palette].breadcrumb?.soft?.outline?.active?.font ?? theme.$.color.dynamic.bodyFont};
                  `
                }
              `
            }
          `
          : `
            color: ${theme.$.palett[palette].breadcrumb?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
            fill: ${theme.$.palett[palette].breadcrumb?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
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
        ${!isSoft
          ? `
            color: ${theme.$.palette[palette].breadcrumb?.separator?.font ?? theme.$.palette[palette].font};
          `
          : `
            color: ${theme.$.palette[palette].breadcrumb?.soft?.separator?.font ?? theme.$.palette[palette].softFont};
          `
        }
      `
      : `
        color: ${theme.$.palette[palette].breadcrumb?.outline?.separator?.font ?? theme.$.color.dynamic.accent};
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
