import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import PopoverArrow from '../../Popover/PopoverArrow'
import { generateCSSTransitionClasses } from '../../util/popover'

interface Props extends
  StyledProps,
  ResponsiveProp<'tooltipSize', SizeProp> {
  duration: number
  hasTransition: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs({
  getTooltipSize: (v, t) => `
    font-size: ${t.$.size.tooltip[v].fontSize};
    padding: ${t.$.size.tooltip[v].padding.y} ${t.$.size.tooltip[v].padding.x};
  `,
})(({ theme, duration, hasTransition, isSoft, palette }: Props) => `
  border-radius: ${theme.$.radius.tooltip};
  box-shadow: 0 0 10px 1px ${theme.$.palette[palette].shadow};
  box-sizing: border-box;
  font-family: ${theme.$.fontFamily.tooltip};
  position: fixed;
  z-index: ${theme.$.zIndex.tooltip};

  ${isSoft
    ? `
      background: ${theme.$.palette[palette].soft};
      color: ${theme.$.palette[palette].softFont};
      fill: ${theme.$.palette[palette].softFont};

      ${PopoverArrow} {
        fill: ${theme.$.palette[palette].soft};
        stroke: ${theme.$.palette[palette].soft};
      }
    `
    : `
      background: ${theme.$.palette[palette].background};
      color: ${theme.$.palette[palette].font};
      fill: ${theme.$.palette[palette].font};

      ${PopoverArrow} {
        fill: ${theme.$.palette[palette].background};
        stroke: ${theme.$.palette[palette].background};
      }
    `
  }

  ${hasTransition ? generateCSSTransitionClasses('tooltip', duration) : ''}
`)
