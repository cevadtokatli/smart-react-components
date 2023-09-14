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
  border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : '0'};
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
                color: ${theme.$.palette[palette].font};

                ${!isActive
                  ? `
                    background: ${theme.$.palette[palette].main};
                    border-color: ${theme.$.palette[palette].main};
                  `
                  : `
                    background: ${theme.$.palette[palette].dynamicer};
                    border-color: ${theme.$.palette[palette].dynamicer};
                  `
                }
              }

              ${(!isActive && hasHover)
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].dynamic};
                      border-color: ${theme.$.palette[palette].dynamic};
                    }
    
                    .src-button-addon {
                      background: ${theme.$.palette[palette].dynamicest};
                      border-color: ${theme.$.palette[palette].dynamicest};
                    }
                  } 
                `
                : ''
              }
            `
            : `
              .src-button-content {
                color: ${theme.$.palette[palette].softFont};

                ${!isActive
                  ? `
                    background: ${theme.$.palette[palette].soft};
                    border-color: ${theme.$.palette[palette].soft};
                  `
                  : `
                    background: ${theme.$.palette[palette].softDarker};
                    border-color: ${theme.$.palette[palette].softDarker};
                  `
                }
              }

              ${(!isActive && hasHover)
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].softDark};
                      border-color: ${theme.$.palette[palette].softDark};
                    }

                    .src-button-addon {
                      background: ${theme.$.palette[palette].softDarkest};
                      border-color: ${theme.$.palette[palette].softDarkest};
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
                border-color: ${theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].main};
              }

              ${hasHover
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].main};
                      color: ${theme.$.palette[palette].font};
                    }

                    .src-button-addon {
                      background: ${theme.$.palette[palette].dynamicer};
                      color: ${theme.$.palette[palette].font};
                    }
                  }
                `
                : ''
              }
            `
            : `
              .src-button-content {
                border-color: ${theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].soft};
              }

              ${hasHover
                ? `
                  &:hover {
                    .src-button-content {
                      background: ${theme.$.palette[palette].soft};
                      color: ${theme.$.palette[palette].softFont};
                    }
    
                    .src-button-addon {
                      background: ${theme.$.palette[palette].softDarker};
                      color: ${theme.$.palette[palette].softFont};
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
        color: ${theme.$.palette[palette].main};
        fill: ${theme.$.palette[palette].main};
      }

      ${hasHover
        ? `
          &:hover {
            .src-button-content {
              color: ${theme.$.palette[palette].dynamicest};
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
        box-shadow: 0 0 0 .15rem ${theme.$.palette[palette].shadow};
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
