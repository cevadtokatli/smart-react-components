import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, Partial, ResponsiveProp, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: 'src-checkbox-container',
})(({ theme }) => `
  border: solid 2px ${theme.$.color.dynamic.accent};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
`)

const Rectangle = styled.div.attrs({
  className: 'src-checkbox-rectangle',
})`
  position: absolute;
  left: -2px;
  height: calc(100% + 4px);
  top: -2px;
  transition: background 200ms 0s ease-in-out;
  width: calc(100% + 4px);
`

const Svg = styled.svg.attrs({
  children: <path d="M3.5,17.2l7.6,7.6L28.5,7.3" />,
  className: 'src-checkbox-svg',
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

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'checkboxSize', SizeProp>> {
  isChecked?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

export default styled(Div).attrs<Props>(({ children }) => ({
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
    height: ${t.$.size.checkbox[v]};
    width: ${t.$.size.checkbox[v]};
  `,
}))<Props>(({ theme, isChecked, isOutline, isSoft, palette, shape }: Props) => `
  position: relative;

  .src-checkbox-container {
    border-radius: ${theme.$.radius.checkbox[shape]};
  
    ${!isOutline
      ? `
        background: ${theme.$.color.dynamic.accent};
      `
      : ''
    }
  }

  .src-checkbox-rectangle {
    border-radius: ${theme.$.radius.checkbox[shape]};
  }

  ${isChecked
    ? `
      .src-checkbox-rectangle {
        background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
      }

      .src-checkbox-svg > path {
        stroke-dashoffset: 0;
      }
    `
    : ''
  }
`)
