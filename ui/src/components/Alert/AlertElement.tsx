import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'

export const Content = styled.div`
  flex: 1 1 auto;
  min-width: 1px;
`

interface Props extends
  StyledProps,
  ResponsiveProp<'alertSize', SizeProp> {
  hasIconLeft: boolean
  hasIconRight: boolean
  hasThickBorder: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Div).attrs<Props>(({ hasIconLeft, hasIconRight }) => ({
  getAlertSize: (v, t) => `
    font-size: ${t.$.size.alert[v].fontSize};

    ${Content} {
      padding: ${t.$.size.alert[v].padding.y} ${t.$.size.alert[v].padding.x};

      ${hasIconLeft
        ? `
          padding-left: ${toCSSValue(t.$.size.alert[v].padding.x)(v => v / 2)};
        `
        : ''
      }

      ${hasIconRight
        ? `
          padding-right: ${toCSSValue(t.$.size.alert[v].padding.x)(v => v / 2)};
        `
        : ''
      }

    }
  `,
}))<Props>(({ theme, hasThickBorder, isOutline, isSoft, palette, shape }: Props) => `
  border: solid 1px;
  border-radius: ${theme.$.radius.alert[shape]};
  box-sizing: border-box;
  display: flex;
  font-family: ${theme.$.fontFamily.alert};
  word-break: break-word;
  word-wrap: break-word;

  ${!isOutline
    ? `
      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].main};
          border-color: ${theme.$.palette[palette].darkest};
          color: ${theme.$.palette[palette].font};
        `
        : `
          background: ${theme.$.palette[palette].soft};
          border-color: ${theme.$.palette[palette].softDarkest};
          color: ${theme.$.palette[palette].softFont};
        `
      }
    `
    : `
      ${!isSoft
        ? `
          border-color: ${theme.$.palette[palette].main};
          color: ${theme.$.palette[palette].main};

        `
        : `
          border-color: ${theme.$.palette[palette].soft};
          color: ${theme.$.palette[palette].soft};
        `
      }
    `
  }

  ${hasThickBorder && `
    border-left-width: 10px;
  `}

  ${Content} > {
    header, h1, h2, h3, h4, h5, h6, p, hr {
      margin-bottom: ${theme.$.length['3']};
      margin-top: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  a {
    font-weight: ${theme.$.fontWeight.alertLink};
  
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    background: ${!isSoft ? theme.$.palette[palette].darkest : theme.$.palette[palette].softDarkest};
    border: 0;
    height: 1px;
    width: 100%;
  }
`)
