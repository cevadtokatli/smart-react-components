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
            color: ${!isEven ? (theme.$.palette[palette]?.odd?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette]?.even?.font ?? theme.$.palette[palette].font)};
          `
          : `
            background: ${!isEven ? theme.$.palette[palette].softBackground : theme.$.palette[palette].softDynamic};
            border-color: ${theme.$.palette[palette].softDynamicest};
            color: ${theme.$.palette[palette].softFont};
          `
        }
      }

      ${hasHover
        ? `
          &:hover > *:nth-child(n+${startIndex}) {
            ${!isSoft
              ? `
                background: ${!isEven ? (theme.$.palette[palette].table?.odd?.hover?.background ?? theme.$.palette[palette].dynamicer) : (theme.$.palette[palette].table?.even?.hover?.background ?? theme.$.palette[palette].dynamicer)};
              `
              : `
                background: ${theme.$.palette[palette].softDynamicer};
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
