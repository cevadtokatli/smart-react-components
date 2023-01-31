import Div from '@smart-react-components/core/Element/Div'
import Input from '@smart-react-components/core/Element/Input'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import React from 'react'
import styled from 'styled-components'
import { toCSSValue } from '../util/css'
import { placeholder } from '../util/dom'

export const InputPlaceholder = styled(Div).attrs<{ children?: string }>(({ children }) => ({
  ...(!children && { children: <>&nbsp;</>, userSelect: 'none' }),
}))``

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'inputSize', SizeProp>> {
  hasBorder?: boolean
  hasLeftAddon?: boolean
  hasRightAddon?: boolean
  hasSeparatedLeftAddon?: boolean
  hasSeparatedRightAddon?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isInput?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

export default styled(Input).attrs<Props>(({ hasLeftAddon, hasRightAddon, hasSeparatedLeftAddon, hasSeparatedRightAddon, isInput = true }) => ({
  ...(!isInput && { as: 'div' }),
  getInputSize: (v, t) => `
    font-size: ${t.$.size.input[v].fontSize};
    padding: ${t.$.size.input[v].padding.y} ${t.$.size.input[v].padding.x};

    ${hasLeftAddon
      ? `
        padding-left: ${hasSeparatedLeftAddon ? toCSSValue(t.$.size.input[v].padding.x)(v => v / 2) : 0};
      `
      : ''
    }

    ${hasRightAddon
      ? `
        padding-right: ${hasSeparatedRightAddon ? toCSSValue(t.$.size.input[v].padding.x)(v => v / 2) : 0};
      `
      : ''
    }
  `,
  isInput,
}))<Props>(({ theme, hasBorder, hasLeftAddon, hasRightAddon, isDisabled, isFocused, isInput, isOutline, isSoft, palette, shape }: Props) => `
  border: ${hasBorder ? 'solid 1px' : '0'};
  border-radius: ${theme.$.radius.input[shape]};
  flex: 1 1 auto;
  font-family: ${theme.$.fontFamily.input};
  transition: 200ms 0s ease-in-out;
  transition-property: background, border, color, fill;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          color: ${theme.$.palette[palette].font};

          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].main};
              border-color: ${theme.$.palette[palette].dark};
            `
            : `
              background: ${theme.$.palette[palette].dynamicer};
              border-color: ${theme.$.palette[palette].dynamicest};
            `
          }
        `
        : `
          color: ${theme.$.palette[palette].softFont};

          ${!isFocused
            ? `
              background: ${theme.$.palette[palette].soft};
              border-color: ${theme.$.palette[palette].softDark};
            `
            : `
              background: ${theme.$.palette[palette].softDarker};
              border-color: ${theme.$.palette[palette].softDarkest};
            `
          }
        `
      }

      ${!isInput
        ? `
          ${InputPlaceholder} {
            color: ${getColor(!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont).alpha(theme.$.opacity.inputPlaceholder).rgb().toString()};
          }
        `
        : `
          ${placeholder.map(item => `
            &${item} {
              color: ${getColor(!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont).alpha(theme.$.opacity.inputPlaceholder).rgb().toString()};
              opacity: 1;
            }
          `).join(' ')}
        `
      }
    `
    : `
      background: ${theme.$.color.dynamic.background};
      border-color ${!isFocused ? theme.$.color.dynamic.accent : theme.$.palette[palette].main};
      color: ${theme.$.color.dynamic.font};

      ${!isInput
        ? `
          ${!isDisabled
            ? `
              ${InputPlaceholder} {
                color: ${theme.$.color.dynamic.accent};
              }
            `
            : ''
          }
        `
        : `
          ${placeholder.map(item => `
            &${item} {
              opacity: 1;

              ${!isDisabled
                ? `
                  color: ${theme.$.color.dynamic.accent};
                `
                : ''
              }
            }
          `).join(' ')}
        `
      }
    `
  }
  
  &:active,
  &:focus {
    outline: 0;
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.formDisabled};

      ${isOutline
        ? `
          background: ${theme.$.color.dynamic.accent};  
          color: ${theme.$.color.dynamic.gray};
        `
        : ''
      }
    `
    : ''
  }

  ${hasLeftAddon
    ? `
      border-left: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    `
    : ''
  }

  ${hasRightAddon
    ? `
      border-right: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    `
    : ''
  }

  ${!isInput
    ? `
      position: relative;
    `
    : ''
  }
`)
