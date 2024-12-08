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
    cursor: ${!isDisabled ? theme.$.cursor.pagination : theme.$.cursor.paginationDisabled};
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
    transition: 300ms 0s ease-in-out;
    transition-property: background, border, color, fill;

    ${isSoft
      ? `
        font-weight: ${theme.$.fontWeight.bold};  
      `
      : ''
    }

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
            ${!isActive
              ? `
                background: ${theme.$.palette[palette].pagination?.background ?? theme.$.palette[palette].main};
                border-color: ${theme.$.palette[palette].pagination?.border ?? theme.$.palette[palette].dynamic};
                color: ${theme.$.palette[palette].pagination?.font ?? theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].pagination?.font ?? theme.$.palette[palette].font};

                ${!isDisabled
                  ? `
                    &:hover {
                      background: ${theme.$.palette[palette].pagination?.hover?.background ?? theme.$.palette[palette].dynamicer};
                      border-color: ${theme.$.palette[palette].pagination?.hover?.border ?? theme.$.palette[palette].dynamicest};
                      color: ${theme.$.palette[palette].pagination?.hover?.font ?? theme.$.palette[palette].font};
                      fill: ${theme.$.palette[palette].pagination?.hover?.font ?? theme.$.palette[palette].font};
                    }
                  `
                  : ''
                }
              `
              : `
                background: ${theme.$.palette[palette].pagination?.active?.background ?? theme.$.palette[palette].dynamicer};
                border-color: ${theme.$.palette[palette].pagination?.active?.border ?? theme.$.palette[palette].dynamicest};
                color: ${theme.$.palette[palette].pagination?.active?.font ?? theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].pagination?.active?.font ?? theme.$.palette[palette].font};
              `
            }

          `
          : `
            ${!isActive
              ? `
                background: ${theme.$.palette[palette].pagination?.soft?.background ?? theme.$.palette[palette].soft};
                border-color: ${theme.$.palette[palette].pagination?.soft?.border ?? theme.$.palette[palette].softDynamic};
                color: ${theme.$.palette[palette].pagination?.soft?.font ?? theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].pagination?.soft?.font ?? theme.$.palette[palette].softFont};

                ${!isDisabled
                  ? `
                    &:hover {
                      background: ${theme.$.palette[palette].pagination?.soft?.hover?.background ?? theme.$.palette[palette].softDynamicer};
                      border-color: ${theme.$.palette[palette].pagination?.soft?.hover?.border ?? theme.$.palette[palette].softDynamicest};
                      color: ${theme.$.palette[palette].pagination?.soft?.hover?.font ?? theme.$.palette[palette].softFont};
                      fill: ${theme.$.palette[palette].pagination?.soft?.hover?.font ?? theme.$.palette[palette].softFont};
                    }
                  `
                  : ''
                }
              `
              : `
                background: ${theme.$.palette[palette].pagination?.soft?.active?.background ?? theme.$.palette[palette].softDynamicer};
                border-color: ${theme.$.palette[palette].pagination?.soft?.active?.border ?? theme.$.palette[palette].softDynamicest};
                color: ${theme.$.palette[palette].pagination?.soft?.active?.font ?? theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].pagination?.soft?.active?.font ?? theme.$.palette[palette].softFont};
              `
            }
          `
        }
      `
      : `
        ${!isSoft
          ? `
            ${!isActive
              ? `
                border-color: ${theme.$.palette[palette].pagination?.outline?.border ?? theme.$.color.dynamic.accent};

                ${!isDisabled
                  ? `
                    color: ${theme.$.palette[palette].pagination?.outline?.font ?? theme.$.color.dynamic.font};
                    fill: ${theme.$.palette[palette].pagination?.outline?.font ?? theme.$.color.dynamic.font};

                    &:hover {
                      background: ${theme.$.palette[palette].pagination?.outline?.hover?.background ?? theme.$.palette[palette].main};
                      border-color: ${theme.$.palette[palette].pagination?.outline?.hover?.border ?? theme.$.palette[palette].main};
                      color: ${theme.$.palette[palette].pagination?.outline?.hover?.font ?? theme.$.palette[palette].font};
                      fill: ${theme.$.palette[palette].pagination?.outline?.hover?.font ?? theme.$.palette[palette].font};
                    }
                  `
                  : `            
                    color: ${theme.$.palette[palette].pagination?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
                    fill: ${theme.$.palette[palette].pagination?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
                  `
                }

              `
              : `
                background: ${theme.$.palette[palette].pagination?.outline?.active?.background ?? theme.$.palette[palette].main};
                border-color: ${theme.$.palette[palette].pagination?.outline?.active?.border ?? theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].pagination?.outline?.active?.font ?? theme.$.palette[palette].font};
                fill: ${theme.$.palette[palette].pagination?.outline?.active?.font ?? theme.$.palette[palette].font};
              `
            }
          `
          : `
            ${!isActive
              ? `
                border-color: ${theme.$.palette[palette].pagination?.soft?.outline?.border ?? theme.$.color.dynamic.accent};

                ${!isDisabled
                  ? `
                    color: ${theme.$.palette[palette].pagination?.soft?.outline?.font ?? theme.$.color.dynamic.font};
                    fill: ${theme.$.palette[palette].pagination?.soft?.outline?.font ?? theme.$.color.dynamic.font};

                    &:hover {
                      background: ${theme.$.palette[palette].pagination?.soft?.outline?.hover?.background ?? theme.$.palette[palette].soft};
                      border-color: ${theme.$.palette[palette].pagination?.soft?.outline?.hover?.border ?? theme.$.palette[palette].soft};
                      color: ${theme.$.palette[palette].pagination?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont};
                      fill: ${theme.$.palette[palette].pagination?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont};
                    }
                  `
                  : `            
                    color: ${theme.$.palette[palette].pagination?.soft?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
                    fill: ${theme.$.palette[palette].pagination?.soft?.outline?.disabled?.font ?? theme.$.color.dynamic.accent};
                  `
                }
              `
              : `

                background: ${theme.$.palette[palette].pagination?.soft?.outline?.active?.background ?? theme.$.palette[palette].soft};
                border-color: ${theme.$.palette[palette].pagination?.soft?.outline?.active?.border ?? theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].pagination?.soft?.outline?.active?.font ?? theme.$.palette[palette].softFont};
                fill: ${theme.$.palette[palette].pagination?.soft?.outline?.active?.font ?? theme.$.palette[palette].softFont};
              `
            }
          `
        }
      `
    }
  }
`)
