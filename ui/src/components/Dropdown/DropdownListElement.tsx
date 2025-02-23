import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'dropdownListSize', SizeProp> {
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs({
  getDropdownListSize: (v, t) => `
    padding: ${t.$.size.dropdown[v].padding.y} 0;

    > div,
    > a {
      font-size: ${t.$.size.dropdown[v].fontSize};
      margin: ${t.$.size.dropdown[v].margin.y} ${t.$.size.dropdown[v].margin.x};
      padding: ${t.$.size.dropdown[v].padding.y} ${t.$.size.dropdown[v].padding.x};
    }
  `,
})<Props>(({ theme, isOutline, isSoft, palette }: Props) => `
  border-radius: ${theme.$.radius.dropdown};
  box-shadow: 0 0 10px 1px ${theme.$.palette[palette].dropdown?.shadow ?? theme.$.color.dynamic.shadow};
  font-family: ${theme.$.fontFamily.dropdown};
  height: inherit;
  overflow: auto;
  user-select: none;
  width: inherit;
  -webkit-overflow-scrolling: touch;

  > div,
  > a {
    word-break: break-word;
    word-wrap: break-word;
  }

  ${!isOutline
    ? `
      background: ${!isSoft ? (theme.$.palette[palette].dropdown?.background ?? theme.$.palette[palette].main) : (theme.$.palette[palette].dropdown?.soft?.background ?? theme.$.palette[palette].soft)};
      color: ${!isSoft ? (theme.$.palette[palette].dropdown?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.soft?.font ?? theme.$.palette[palette].softFont)};
      fill:  ${!isSoft ? (theme.$.palette[palette].dropdown?.font ?? theme.$.palette[palette].font) : (theme.$.palette[palette].dropdown?.soft?.font ?? theme.$.palette[palette].softFont)};
    `
    : `
      background: ${!isSoft ? (theme.$.palette[palette].dropdown?.outline?.background ?? theme.$.color.dynamic.background) : (theme.$.palette[palette].dropdown?.soft?.outline?.background ?? theme.$.color.dynamic.background)};
      color: ${!isSoft ? (theme.$.palette[palette].dropdown?.outline?.font ?? theme.$.color.dynamic.font) : (theme.$.palette[palette].dropdown?.soft?.outline?.font ?? theme.$.color.dynamic.font)};
      fill: ${!isSoft ? (theme.$.palette[palette].dropdown?.outline?.font ?? theme.$.color.dynamic.font) : (theme.$.palette[palette].dropdown?.soft?.outline?.font ?? theme.$.color.dynamic.font)};
    `
  }
`)
