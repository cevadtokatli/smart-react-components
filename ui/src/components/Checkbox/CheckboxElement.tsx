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

const IndeterminateMark = styled.div.attrs({
  className: 'src-checkbox-indeterminate-mark',
})(({ theme }) => `
  background: ${theme.$.color.dynamic.background};
  height: 2px;
  margin-top: -1px;
  opacity: 0;
  position: absolute;
  trasnform: scaleX(0) rotate(45deg);
  transition-duration: 200ms;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
  top: 50%;
  width: 100%;
`)

export interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'checkboxSize', SizeProp>> {
  isChecked?: boolean
  isIndeterminate?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
  shape?: ShapeProp
}

export default styled(Div).attrs<Props>(({ children, isIndeterminate }) => ({
  children: (
    <>
      { children && children }
      <Container>
        <Rectangle />
        <Svg />
        { typeof isIndeterminate !== 'undefined' && <IndeterminateMark /> }
      </Container>
    </>
  ),
  getCheckboxSize: (v, t) => `
    height: ${t.$.size.checkbox[v]};
    width: ${t.$.size.checkbox[v]};
  `,
}))<Props>(({ theme, isChecked, isIndeterminate, isOutline, isSoft, palette, shape }: Props) => `
  position: relative;

  .src-checkbox-container {
    border-radius: ${theme.$.radius.checkbox[shape]};
    transition: border-color 200ms 0s ease-in-out;

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
      .src-checkbox-container {
        border-color: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};

        .src-checkbox-rectangle {
          background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
        }

        ${!isIndeterminate
          ? `
            .src-checkbox-svg > path {
              stroke-dashoffset: 0;
            }
          `
          : `
            .src-checkbox-indeterminate-mark {
              opacity: 1;
              transform: scaleX(1);
            }
          `
        }
      }
    `
    : ''
  }
`)
