import Tr from '@smart-react-components/core/Element/Tr'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

export interface Props extends StyledProps {
  hasHover?: boolean
  isEven?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  startIndex?: number
}

export default styled(Tr)<Props>(({ theme, hasHover, isEven, isSoft, palette, startIndex = 0 }) => `
  ${palette
    ? `
      > *:nth-child(n+${startIndex}) {
        ${!isSoft
          ? `
            background: ${!isEven ? (theme.$.palette[palette].table?.odd?.background ?? theme.$.palette[palette].background) : (theme.$.palette[palette].table?.even?.background ?? theme.$.palette[palette].dynamic)};
            border-color: ${!isEven ? (theme.$.palette[palette].table?.odd?.border ?? theme.$.palette[palette].dynamicest) : (theme.$.palette[palette].table?.even?.border ?? theme.$.palette[palette].dynamicest)};
            color: ${!isEven ? (theme.$.palette[palette]?.table?.odd?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette]?.table?.even?.font ?? theme.$.palette[palette].font)};
          `
          : `
            background: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.background ?? theme.$.palette[palette].softBackground) : (theme.$.palette[palette].table?.even?.soft?.background ?? theme.$.palette[palette].softDynamic)};
            border-color: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.border ?? theme.$.palette[palette].softDynamicest) : (theme.$.palette[palette].table?.even.soft?.border ?? theme.$.palette[palette].softDynamicest)};
            color: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].table?.even?.soft?.font ?? theme.$.palette[palette].softFont)};
          `
        }
      }

      ${hasHover
        ? `
          &:hover > *:nth-child(n+${startIndex}) {
            ${!isSoft
              ? `
                background: ${!isEven ? (theme.$.palette[palette].table?.odd?.hover?.background ?? theme.$.palette[palette].dynamicer) : (theme.$.palette[palette].table?.even?.hover?.background ?? theme.$.palette[palette].dynamicer)};
                border: ${!isEven ? (theme.$.palette[palette].table?.odd?.hover?.border ?? theme.$.palette[palette].dynamicest) : (theme.$.palette[palette].table?.even?.hover?.border ?? theme.$.palette[palette].dynamicest)};
                color: ${!isEven ? (theme.$.palette[palette]?.table?.odd?.hover?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette]?.table?.even?.hover?.font ?? theme.$.palette[palette].font)};
              `
              : `
                background: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.hover?.background ?? theme.$.palette[palette].softDynamicer) : (theme.$.palette[palette].table?.even?.soft?.hover?.background ?? theme.$.palette[palette].softDynamicer)};
                border: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.hover?.border ?? theme.$.palette[palette].softDynamicest) : (theme.$.palette[palette].table?.even?.soft?.hover?.border ?? theme.$.palette[palette].softDynamicest)};
                color: ${!isEven ? (theme.$.palette[palette].table?.odd?.soft?.hover?.font ?? theme.$.palette[palette].softFont) : (theme.$.palette[palette].table?.even?.soft?.hover?.font ?? theme.$.palette[palette].softFont)};
              `
            }
          }
        `
        : ''
      }
    `
    : ''
  }
`)
