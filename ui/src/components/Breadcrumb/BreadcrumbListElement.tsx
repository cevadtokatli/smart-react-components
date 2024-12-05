import Ul from '@smart-react-components/core/Element/Ul'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ShapeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends StyledProps {
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Ul)<Props>(({ theme, isOutline, isSoft, palette, shape }: Props) => `
  align-items: center;
  border-radius: ${theme.$.radius.breadcrumb[shape]};
  display: flex;
  font-family: ${theme.$.fontFamily.breadcrumb};
  font-size: ${theme.$.fontSize.breadcrumb};
  list-style: none;
  padding: 1px;

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].breadcrumb?.background ?? theme.$.palette[palette].main};
        `
        : `
          background: ${theme.$.palette[palette].breadcrumb?.soft?.background ?? theme.$.palette[palette].soft};
        `
      }
    `
    : ''
  }
`)
