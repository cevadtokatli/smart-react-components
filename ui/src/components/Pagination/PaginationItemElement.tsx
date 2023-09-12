import Li from '@smart-react-components/core/Element/Li'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  isActive: boolean
  isDisabled: boolean
  isFixedSize: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Li)<Props>(({ theme, isActive, isDisabled, isFixedSize, isOutline, isSoft, palette, shape }: Props) => `
  flex: 0 0 auto;
  margin: ${theme.$.length.pagination.margin.y} ${theme.$.length.pagination.margin.x};

  > a {
    align-items: center;
    border: solid 1px;
    border-radius: ${shape === 'rounded' && isFixedSize ? '100%' : theme.$.radius.pagination[shape]};
    cursor: ${!isDisabled ? theme.$.cursor.pagination : theme.$.cursor.paginationDisabled}};
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
    transition: 300ms 0s ease-in-out;
    transition-property: background, border, color, fill;

    ${isFixedSize
      ? `
        height: ${theme.$.length.pagination.fixedSize};
        min-width: ${theme.$.length.pagination.fixedSize};
        padding: 0 3px;
      `
      : `
        padding: ${theme.$.length.pagination.padding.y} ${theme.$.length.pagination.padding.x};
      `
    }

    ${isDisabled
      ? `
        opacity: ${theme.$.opacity.paginationDisabled};
        pointer-events: none;
      `
      : ''
    }

    ${!isOutline
      ? `
        ${!isSoft
          ? `
            color: ${theme.$.palette[palette].font};
            fill: ${theme.$.palette[palette].font};

            ${!isActive
              ? `
                background: ${theme.$.palette[palette].main};
                border-color: ${theme.$.palette[palette].dynamic};

                ${!isDisabled
                  ? `
                    &:hover {
                      background: ${theme.$.palette[palette].dynamicer};
                      border-color: ${theme.$.palette[palette].dynamicest};
                    }
                  `
                  : ''
                }
              `
              : `
                background: ${theme.$.palette[palette].dynamicer};
                border-color: ${theme.$.palette[palette].dynamicest};
              `
            }

          `
          : `
            color: ${theme.$.palette[palette].softFont};
            fill: ${theme.$.palette[palette].softFont};

            ${!isActive
              ? `
                background: ${theme.$.palette[palette].soft};
                border-color: ${theme.$.palette[palette].softDark};

                ${!isDisabled
                  ? `
                    &:hover {
                      background: ${theme.$.palette[palette].softDarker};
                      border-color: ${theme.$.palette[palette].softDarkest};
                    }
                  `
                  : ''
                }
              `
              : `
                background: ${theme.$.palette[palette].softDarker};
                border-color: ${theme.$.palette[palette].softDarkest};
              `
            }
          `
        }
      `
      : `
        ${!isActive
          ? `
            border-color: ${theme.$.color.dynamic.accent};
            color: ${theme.$.color.dynamic.font};
            fill: ${theme.$.color.dynamic.font};

            ${!isDisabled
              ? `
                &:hover {
                  ${!isSoft
                    ? `
                      background: ${theme.$.palette[palette].main};
                      border-color: ${theme.$.palette[palette].main};
                      color: ${theme.$.palette[palette].font};
                      fill: ${theme.$.palette[palette].font};
                    `
                    : `
                      background: ${theme.$.palette[palette].soft};
                      border-color: ${theme.$.palette[palette].soft};
                      color: ${theme.$.palette[palette].softFont};
                      fill: ${theme.$.palette[palette].softFont};
                    `
                  }
                }
              `
              : `            
                color: ${theme.$.color.dynamic.accent};
                fill: ${theme.$.color.dynamic.accent};
              `
            }
          `
          : `
            ${!isSoft
              ? `
                background: ${theme.$.palette[palette].main};
                border-color: ${theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].font};
              `
              : `
                background: ${theme.$.palette[palette].soft};
                border-color: ${theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].softFont};
              `
            }
          `
        }

      `
    }
  }
`)
