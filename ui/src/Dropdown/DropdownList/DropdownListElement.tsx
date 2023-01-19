import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'dropdownListSize', SizeProp> {
  isFilled: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs({
  getDropdownListSize: (v, t) => `
    padding: ${t.$.size.dropdown[v].padding.y} 0;

    > div {
      font-size: ${t.$.size.dropdown[v].fontSize};
      margin: ${t.$.size.dropdown[v].margin.y} ${t.$.size.dropdown[v].margin.x};
      padding: ${t.$.size.dropdown[v].padding.y} ${t.$.size.dropdown[v].padding.x};
    }
  `,
})<Props>(({ theme, isFilled, isSoft, palette }: Props) => `
  border-radius: ${theme.$.radius.dropdown};
  box-shadow: 0 0 10px 1px ${theme.$.color.dynamic.shadow};
  font-family: ${theme.$.fontFamily.dropdown};
  height: inherit;
  overflow: auto;
  user-select: none;
  width: inherit;
  -webkit-overflow-scrolling: touch;

  > div {
    word-break: break-word;
    word-wrap: break-word;
  }

  ${!isFilled
    ? `
      background: ${theme.$.color.dynamic.background};
      color: ${theme.$.color.dynamic.font};
      fill: ${theme.$.color.dynamic.font};
    `
    : `
      background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
      color: ${!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont};
      fill:  ${!isSoft ? theme.$.palette[palette].font : theme.$.palette[palette].softFont};
    `
  }
`)
