import Button from '@smart-react-components/core/Element/Button'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import ButtonAddonElement from './ButtonAddonElement'
import ButtonContent from './ButtonContent'

interface Props extends
  StyledProps,
  ResponsiveProp<'buttonSize', SizeProp> {
  hasButtonContainer: boolean
  hasHover: boolean
  hasLeftAddon: boolean
  hasRightAddon: boolean
  hasSeparatedLeftAddon: boolean
  hasSeparatedRightAddon: boolean
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
    ${ButtonContent} {
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
}))<Props>(({ theme, hasButtonContainer, hasHover, hasLeftAddon, hasRightAddon, hasSeparatedLeftAddon, hasSeparatedRightAddon, isBlock, isDisabled, isFixedSize, isLink, isLoading, isSoft, isOutline, palette, shape }: Props) => `
  align-items: stretch;
  background: transparent;
  border: 0;
  font-family: ${theme.$.fontFamily.button};
  position: relative;
  transition: box-shadow 300ms 0s ease-in-out;

  &,
  ${ButtonContent} {
    border-radius: ${(isFixedSize && shape === 'rounded') ? '100%' : theme.$.radius.button[shape]};

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

  ${ButtonContent} {
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
  }

  &:active {
    outline: 0;
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
      ${ButtonContent} {
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
              ${ButtonContent} {
                background: ${theme.$.palette[palette].main};
                border-color: ${theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].font};
              }

              ${hasHover
                ? `
                  &:hover {
                    ${ButtonContent} {
                      background: ${theme.$.palette[palette].dynamic};
                      border-color: ${theme.$.palette[palette].dynamic};
                    }
    
                    ${ButtonAddonElement} {
                      background: ${theme.$.palette[palette].dynamicest};
                      border-color: ${theme.$.palette[palette].dynamicest};
                    }
                  } 
                `
                : ''
              }
            `
            : `
              ${ButtonContent} {
                background: ${theme.$.palette[palette].soft};
                border-color: ${theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].softFont};
              }


              ${hasHover
                ? `
                  &:hover {
                    ${ButtonContent} {
                      background: ${theme.$.palette[palette].softDark};
                      border-color: ${theme.$.palette[palette].softDark};
                    }

                    ${ButtonAddonElement} {
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
              ${ButtonContent} {
                border-color: ${theme.$.palette[palette].main};
                color: ${theme.$.palette[palette].main};
              }

              ${hasHover
                ? `
                  &:hover {
                    ${ButtonContent} {
                      background: ${theme.$.palette[palette].main};
                      color: ${theme.$.palette[palette].font};
                    }

                    ${ButtonAddonElement} {
                      background: ${theme.$.palette[palette].dynamicer};
                      color: ${theme.$.palette[palette].font};
                    }
                  }
                `
                : ''
              }
            `
            : `
              ${ButtonContent} {
                border-color: ${theme.$.palette[palette].soft};
                color: ${theme.$.palette[palette].soft};
              }

              ${hasHover
                ? `
                  &:hover {
                    ${ButtonContent} {
                      background: ${theme.$.palette[palette].soft};
                      color: ${theme.$.palette[palette].softFont};
                    }
    
                    ${ButtonAddonElement} {
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
      ${ButtonContent} {
        border-color: transparent;
        color: ${theme.$.palette[palette].main};
        fill: ${theme.$.palette[palette].main};
      }

      ${hasHover
        ? `
          &:hover {
            ${ButtonContent} {
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

      ${ButtonContent}, 
      ${ButtonAddonElement} {
        color: transparent;

        > * {
          visibility: hidden;
        }
      } 
    `
    : ''
  }
`)
