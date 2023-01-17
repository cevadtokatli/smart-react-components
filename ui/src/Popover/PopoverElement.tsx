import { StyledProps } from '@smart-react-components/core/styled-props'
import Div from '@smart-react-components/core/Element/Div'
import styled from 'styled-components'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import PopArrow from '../components/PopArrow'
import { generateCSSTransitionClasses } from '../util/popover'

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
  color: ${theme.$.palette[palette].popover.font};
  fill: ${theme.$.palette[palette].popover.font};
  font-family: ${theme.$.fontFamily.popover};
  position: fixed;
  z-index: ${theme.$.zIndex.popover};

  ${PopoverContent} {
    background: ${theme.$.palette[palette].popover.background};
    border: solid 1px ${theme.$.palette[palette].popover.border};
  }

  ${PopoverHeader} {
    ${isSoft
      ? `
        background: ${theme.$.palette[palette].popover.softHeaderBackground};
        border: solid 1px ${theme.$.palette[palette].popover.softHeaderBorder};
        color: ${theme.$.palette[palette].popover.softHeaderFont};
        fill: ${theme.$.palette[palette].popover.softHeaderFont};

        ~ ${PopArrow}[data-arrow-header="true"] {
          fill: ${theme.$.palette[palette].popover.softHeaderBackground};
          stroke: ${theme.$.palette[palette].popover.softHeaderBorder};
        }
      `
      : `
        background: ${theme.$.palette[palette].popover.headerBackground};
        border: solid 1px ${theme.$.palette[palette].popover.headerBorder};
        color: ${theme.$.palette[palette].popover.headerFont};
        fill: ${theme.$.palette[palette].popover.headerFont};

        ~ ${PopArrow}[data-arrow-header="true"] {
          fill: ${theme.$.palette[palette].popover.headerBackground};
          stroke: ${theme.$.palette[palette].popover.headerBorder};
        }
      `
    }

    + ${PopoverContent} {
      border-top: 0;
    }
  }

  ${PopArrow}[data-arrow-header="false"] {
    fill: ${theme.$.palette[palette].popover.background};
    stroke: ${theme.$.palette[palette].popover.border};
  }

  ${hasTransition ? generateCSSTransitionClasses('popover', duration) : ''}
`)
