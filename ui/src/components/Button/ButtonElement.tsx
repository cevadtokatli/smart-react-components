import Button from '@smart-react-components/core/Element/Button'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'

interface Props extends
  StyledProps,
  ResponsiveProp<'buttonSize', SizeProp> {
  hasButtonContainer: boolean
  hasHover: boolean
  hasLeftAddon: boolean
  hasRightAddon: boolean
  hasSeparatedLeftAddon: boolean
  hasSeparatedRightAddon: boolean
  isActive: boolean
  isBlock: boolean
  isDisabled: boolean
  isFixedSize: boolean
  isLink: boolean
  isLoading: boolean
  isSoft: boolean
  isOutline: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Button).attrs<Props>(({ hasLeftAddon, hasRightAddon, isFixedSize }: Props) => ({
  getButtonSize: (v, t) => `
    .src-button-content {
      font-size: ${t.$.size.button[v].fontSize};

      > ${Svg} {
        height: ${t.$.size.button[v].iconSize};
        width: ${t.$.size.button[v].iconSize};
      }

      ${!isFixedSize
        ? `
          padding: ${t.$.size.button[v].padding.y} ${t.$.size.button[v].padding.x};

          ${hasLeftAddon
            ? `
              padding-left: ${toCSSValue(t.$.size.button[v].padding.x)(val => val / 2)};
            `
            : ''
          }

          ${hasRightAddon
            ? `
              padding-right: ${toCSSValue(t.$.size.button[v].padding.x)(val => val / 2)};
            `
            : ''
          }
        `
        : `
          height: ${t.$.size.button[v].fixedSize};
          width: ${t.$.size.button[v].fixedSize};
        `
      }

      > :not(:last-child) {
        margin-right: ${toCSSValue(t.$.size.button[v].padding.x)(val => val / 4)};
      }
    }
  `,
}))<Props>(({ theme, hasButtonContainer, hasHover, hasLeftAddon, hasRightAddon, hasSeparatedLeftAddon, hasSeparatedRightAddon, isActive, isBlock, isDisabled, isFixedSize, isLink, isLoading, isSoft, isOutline, palette, shape }: Props) => `
  align-items: stretch;
  background: transparent;
  border: 0;
  border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : theme.$.radius.button[shape]};
  cursor: ${(!isDisabled && !isLoading) ? theme.$.cursor.button : 'default'};
  font-family: ${theme.$.fontFamily.button};
  position: relative;
  transition: box-shadow 300ms 0s ease-in-out;
  user-select: none;

  &:active {
    outline: 0;
  }

  ${isSoft
    ? `
      font-weight: ${theme.$.fontWeight.bold};
    `
    : ''
  }

  ${!isFixedSize
    ? `
      ${(!isBlock)
        ? `
          display: inline-flex;
          flex: 0 1 auto;
        `
        : `
          display: flex;
          flex: 1 1 auto;
          width: 100%;
        `
      }   
    `
    : ''
  }

  ${(isBlock || isFixedSize)
    ? `
      .src-button-content {
        justify-content: center;
      }
    `
    : ''
  }

  ${!isLink
    ? `
      ${!isOutline
        ? `
          ${!isSoft
            ? `
              .src-button-content {
                ${!isActive
                  ? `
                    background: ${theme.$.palette[palette].button?.background ?? theme.$.palette[palette].main};
                    border-color: ${theme.$.palette[palette].button?.border ?? theme.$.palette[palette].main};
                    color: ${theme.$.palette[palette].button?.font ?? theme.$.palette[palette].font};
                  `
                  : `
                    background: ${theme.$.palette[palette].button?.active?.background ?? theme.$.palette[palette].dynamicer};
                    border-color: ${theme.$.palette[palette].button?.active?.border ?? theme.$.palette[palette].dynamicer};
                    color: ${theme.$.palette[palette].button?.active?.font ?? theme.$.palette[palette].font};
                  `
                }
              }

              ${(!isActive && hasHover)
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].button?.hover?.background ?? theme.$.palette[palette].dynamic};
                      border-color: ${theme.$.palette[palette].button?.hover?.border ?? theme.$.palette[palette].dynamic};

                      ${theme.$.palette[palette].button?.hover?.font
                        ? `
                          color: ${theme.$.palette[palette].button?.hover?.font};
                        `
                        : ''
                      }
                    }
    
                    .src-button-addon {
                      background: ${theme.$.palette[palette].button?.hover?.addon?.background ?? theme.$.palette[palette].dynamicest};
                      border-color: ${theme.$.palette[palette].button?.hover?.addon?.border ?? theme.$.palette[palette].dynamicest};
                    }
                  } 
                `
                : ''
              }
            `
            : `
              .src-button-content {

                ${!isActive
                  ? `
                    background: ${theme.$.palette[palette].button?.soft?.background ?? theme.$.palette[palette].soft};
                    border-color: ${theme.$.palette[palette].button?.soft?.border ?? theme.$.palette[palette].soft};
                    color: ${theme.$.palette[palette].button?.soft?.font ?? theme.$.palette[palette].softFont};
                  `
                  : `
                    background: ${theme.$.palette[palette].button?.soft?.active?.background ?? theme.$.palette[palette].softDynamicer};
                    border-color: ${theme.$.palette[palette].button?.soft?.active?.border ?? theme.$.palette[palette].softDynamicer};
                    color: ${theme.$.palette[palette].button?.soft?.active?.font ?? theme.$.palette[palette].softFont};
                  `
                }
              }

              ${(!isActive && hasHover)
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].button?.soft?.hover?.background ?? theme.$.palette[palette].softDynamic};
                      border-color: ${theme.$.palette[palette].button?.soft?.hover?.border ?? theme.$.palette[palette].softDynamic};

                      ${theme.$.palette[palette].button?.soft?.hover?.font
                        ? `
                          color: ${theme.$.palette[palette].button?.soft?.hover?.font};
                        `
                        : ''
                      }
                    }

                    .src-button-addon {
                      background: ${theme.$.palette[palette].button?.soft?.hovr?.addon?.background ?? theme.$.palette[palette].softDynamicest};
                      border-color: ${theme.$.palette[palette].button?.soft?.hovr?.addon?.border ?? theme.$.palette[palette].softDynamicest};
                    }
                  }
                `
                : ''
              }
            `
          }
        `
        : `
          ${!isSoft
            ? `
              .src-button-content {
                border-color: ${theme.$.palette[palette].button?.outline?.border ?? theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].button?.outline?.font ?? theme.$.palette[palette].main};
              }

              ${hasHover
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].button?.outline?.hover?.background ?? theme.$.palette[palette].main};
                      color: ${theme.$.palette[palette].button?.outline?.hover?.font ?? theme.$.palette[palette].font};
                    }

                    .src-button-addon {
                      background: ${theme.$.palette[palette].button?.hover?.addon?.background ?? theme.$.palette[palette].dynamicer};
                      color: ${theme.$.palette[palette].button?.hover?.addon?.font ?? theme.$.palette[palette].font};
                    }
                  }
                `
                : ''
              }
            `
            : `
              .src-button-content {
                border-color: ${theme.$.palette[palette].button?.soft?.outline?.border ?? theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].button?.soft?.outline?.font ?? theme.$.palette[palette].soft};
              }

              ${hasHover
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].button?.soft?.outline?.hover?.background ?? theme.$.palette[palette].soft};
                      color: ${theme.$.palette[palette].button?.soft?.outline?.hover?.font ?? theme.$.palette[palette].softFont};
                    }
    
                    .src-button-addon {
                      background: ${theme.$.palette[palette].button?.soft?.outline?.hover?.addon?.background ?? theme.$.palette[palette].softDynamicer};
                      color: ${theme.$.palette[palette].button?.soft?.outline?.hover?.addon?.font ?? theme.$.palette[palette].softFont};
                    }
                  }
                `
                : ''
              }
            `
          }
        `
      }
    `
    : `
      .src-button-content {
        border-color: transparent;
        color: ${theme.$.palette[palette]?.button?.link?.font ?? theme.$.palette[palette].main};
        fill: ${theme.$.palette[palette]?.button?.link?.font ?? theme.$.palette[palette].main};
      }

      ${hasHover
        ? `
          &:hover {
            .src-button-content {
              color: ${theme.$.palette[palette]?.button?.link?.hover?.font ?? theme.$.palette[palette].dynamicest};
              text-decoration: underline;
            }
          } 
        `
        : ''
      }
    `
  }

  ${!hasButtonContainer
    ? `
      &:focus {
        box-shadow: 0 0 0 .15rem ${theme.$.palette[palette].button?.shadow ?? theme.$.palette[palette].shadow};
      }
    `
    : ''
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.buttonDisabled};
      pointer-events: none;
    `
    : ''
  }

  ${isLoading
    ? `
      pointer-events: none; 

      .src-button-content,
      .src-button-addon {
        color: transparent;

        > * {
          visibility: hidden;
        }
      } 
    `
    : ''
  }

  ${hasSeparatedLeftAddon
    ? `
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `
    : ''
  }

  ${hasSeparatedRightAddon
    ? `
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `
    : ''
  }

  .src-button-content {
    border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : theme.$.radius.button[shape]};
  
    ${hasLeftAddon
      ? `
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
      : ''
    }

    ${hasRightAddon
      ? `
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
      : ''
    }

    ${hasSeparatedLeftAddon
      ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
      : ''
    }

    ${hasSeparatedRightAddon
      ? `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
      : ''
    }
  }
`)
