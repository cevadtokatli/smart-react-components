import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div(({ theme }) => `
  border: solid 2px ${theme.$.color.dynamic.accent};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
`)

const Rectangle = styled.div`
  position: absolute;
  left: -2px;
  height: calc(100% + 4px);
  top: -2px;
  transition: background 200ms 0s ease-in-out;
  width: calc(100% + 4px);
`

const Svg = styled.svg.attrs({
  children: <path d="M3.5,17.2l7.6,7.6L28.5,7.3" />,
  viewBox: '0 0 32 32',
})(({ theme }) => `
  flex: 0 0 auto;
  position: relative;

  > path {
    fill: transparent;
    stroke: ${theme.$.color.dynamic.background};
    stroke-width: 4px;
    stroke-dasharray: 36px;
    stroke-dashoffset: 36px;
    transition: stroke-dashoffset 200ms 0s ease-in-out;
  }
`)

interface Props extends
  StyledProps,
  ResponsiveProp<'checkboxSize', SizeProp> {
  isChecked: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
  shape: ShapeProp
}

export default styled(Div).attrs<Props>(({ children, isOutline, isSoft, palette, shape }) => ({
  children: (
    <>
      { children && children }
      <Container>
        <Rectangle />
        <Svg />
      </Container>
    </>
  ),
  getCheckboxSize: (v, t) => `
    height: ${t.$.size.form.checkbox[v]};
    width: ${t.$.size.form.checkbox[v]};
  `,
}))<Props>(({ theme, isChecked, isOutline, isSoft, palette, shape }: Props) => `
  position: relative;

  ${Container} {
    border-radius: ${theme.$.radius.form.checkbox[shape]};
  
    ${!isOutline
      ? `
        background: ${theme.$.color.dynamic.accent};
      `
      : ''
    }
  }

  ${Rectangle} {
    border-radius: ${theme.$.radius.form.checkbox[shape]};
  }

  ${isChecked
    ? `
      ${Rectangle} {
        background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
      }

      ${Svg} > path {
        stroke-dashoffset: 0;
      }
    `
    : ''
  }
`)
