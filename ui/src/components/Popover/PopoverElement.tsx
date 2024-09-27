import { StyledProps } from '@smart-react-components/core/styled-props'
import Div from '@smart-react-components/core/Element/Div'
import styled from 'styled-components'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import PopoverArrow from './PopoverArrow'
import { generateCSSTransitionClasses } from '../../util/popover'

export const PopoverHeader = styled.h4`
  box-sizing: border-box;
  margin: 0;
`

export const PopoverContent = styled.div`
  box-sizing: border-box;
`

interface Props extends
  StyledProps,
  ResponsiveProp<'popoverSize', SizeProp> {
  duration: number
  hasTransition: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs({
  getPopoverSize: (v, t) => `
    > ${PopoverHeader} {
      font-size: ${t.$.size.popover[v].headerFontSize};
      padding: ${t.$.size.popover[v].headerPadding.y} ${t.$.size.popover[v].headerPadding.x};
    }

    > ${PopoverContent} {
      font-size: ${t.$.size.popover[v].fontSize};
      padding: ${t.$.size.popover[v].padding.y} ${t.$.size.popover[v].padding.x};
    }
  `,
})<Props>(({ theme, palette, duration, hasTransition, isSoft }: Props) => `
  box-sizing: border-box;
  color: ${theme.$.color.dynamic.font};
  fill: ${theme.$.color.dynamic.font};
  font-family: ${theme.$.fontFamily.popover};
  position: fixed;
  z-index: ${theme.$.zIndex.popover};

  ${PopoverContent} {
    background: ${theme.$.color.dynamic.background};
    border: solid 1px ${theme.$.color.dynamic.accent};
  }

  ${PopoverHeader} {
    ${isSoft
      ? `
        background: ${theme.$.palette[palette].soft};
        border: solid 1px ${theme.$.palette[palette].softDynamicer};
        color: ${theme.$.palette[palette].softFont};
        fill: ${theme.$.palette[palette].softFont};

        ~ ${PopoverArrow}[data-arrow-header="true"] {
          fill: ${theme.$.palette[palette].soft};
          stroke: ${theme.$.palette[palette].softDynamicer};
        }
      `
      : `
        background: ${theme.$.palette[palette].main};
        border: solid 1px ${theme.$.palette[palette].dynamicer};
        color: ${theme.$.palette[palette].font};
        fill: ${theme.$.palette[palette].font};

        ~ ${PopoverArrow}[data-arrow-header="true"] {
          fill: ${theme.$.palette[palette].main};
          stroke: ${theme.$.palette[palette].dynamicer};
        }
      `
    }

    + ${PopoverContent} {
      border-top: 0;
    }
  }

  ${PopoverArrow}[data-arrow-header="false"] {
    fill: ${theme.$.color.dynamic.background};
    stroke: ${theme.$.color.dynamic.accent};
  }

  ${hasTransition ? generateCSSTransitionClasses('popover', duration) : ''}
`)
