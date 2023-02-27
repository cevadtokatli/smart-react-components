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
            background: ${!isEven ? theme.$.palette[palette].background : theme.$.palette[palette].dynamic};
            border-color: ${theme.$.palette[palette].dynamicest};
            color: ${theme.$.palette[palette].font};
          `
          : `
            background: ${!isEven ? theme.$.palette[palette].softBackground : theme.$.palette[palette].softDark};
            border-color: ${theme.$.palette[palette].softDarkest};
            color: ${theme.$.palette[palette].softFont};
          `
        }
      }

      ${hasHover
        ? `
          &:hover > *:nth-child(n+${startIndex}) {
            background: ${!isSoft ? theme.$.palette[palette].dynamicer : theme.$.palette[palette].softDarker};
          }
        `
        : ''
      }
    `
    : ''
  }
`)
