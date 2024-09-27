import Input from '@smart-react-components/core/Element/Input'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, Partial, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import { getColor } from '@smart-react-components/core/util/color'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import { placeholder } from '../../util/dom'
import InputPlaceholder from './InputPlaceholder'

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'inputSize', SizeProp>> {
  cursorKey?: string
  hasLeftAddon?: boolean
  hasRightAddon?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isInput?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
}

export default styled(Input).attrs<Props>(({ className = '', hasLeftAddon, hasRightAddon, isInput = true }) => ({
  ...(!isInput && { as: 'div' }),
  className: `src-input ${className}`,
  getInputSize: (v, t) => `
    font-size: ${t.$.size.input[v].fontSize};
    padding: ${t.$.size.input[v].padding.y} ${t.$.size.input[v].padding.x};

    ${hasLeftAddon
      ? `
        padding-left: ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
      `
      : ''
    }
  
    ${hasRightAddon
      ? `
        padding-right: ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
      `
      : ''
    }
  `,
  isInput,
}))<Props>(({ theme, cursorKey, isDisabled, isFocused, isInput, isOutline, isSoft, palette }: Props) => `
  border: 0;
  border-radius: 0;
  flex: 1 1 auto;
  font-family: ${theme.$.fontFamily.input};
  min-width: 1px;
  transition: 200ms 0s ease-in-out;
  transition-property: background, color, fill;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  ${(!isOutline && isSoft)
    ? `
      font-weight: ${theme.$.fontWeight.bold};  
    `
    : ''
  }

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          background: ${!isFocused ? theme.$.palette[palette].main : theme.$.palette[palette].dynamicer};
          color: ${theme.$.palette[palette].font};
        `
        : `
          background: ${!isFocused ? theme.$.palette[palette].soft : theme.$.palette[palette].softDynamicer};
          color: ${theme.$.palette[palette].softFont};
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

              ${(!isOutline && isSoft)
                ? `
                  font-weight: ${theme.$.fontWeight.bold};  
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

  ${isDisabled && isOutline
    ? `
      background: ${theme.$.color.dynamic.accent};  
      color: ${theme.$.color.dynamic.gray};
    `
    : ''
  }

  ${!isInput
    ? `
      align-items: center;
      display: flex;
      justify-content: space-between;
      position: relative;
    `
    : ''
  }

  ${(!isDisabled && cursorKey)
    ? `
      cursor: ${theme.$.cursor[cursorKey]};
    `
    : ''
  }
`)
