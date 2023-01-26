import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'
import { extractNumberUnit, toCSSValue } from '../../util/css'

const Slider = styled.div(({ theme }) => `
  background: ${theme.$.color.dynamic.background};
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  left: 0;
  position: absolute;
  top: 0;
  transition: 200ms 0s ease-in-out;
  transition-property: left, right;
`)

interface Props extends
  StyledProps,
  ResponsiveProp<'switchSize', SizeProp> {
  isChecked: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs<Props>(({ isChecked }) => ({
  children: <Slider />,
  getSwitchSize: (v, t) => `
    &,
    + input {
      height: ${t.$.size.form.switch[v].height};
      width: ${t.$.size.form.switch[v].width};
    }

    + input {
      top: calc(50% - ${toCSSValue(t.$.size.form.switch[v].height)(v => v / 2)});
    }

    ${Slider} {
      height: ${t.$.size.form.switch[v].slider};
      width: ${t.$.size.form.switch[v].slider};

      ${isChecked
        ? `
          left: ${toCSSValue(t.$.size.form.switch[v].width)(width => width - extractNumberUnit(t.$.size.form.switch[v].slider) - 2)};  
        `
        : ''
      }
    }
  `,
}))<Props>(({ theme, isChecked, isOutline, isSoft, palette }: Props) => `
  border: solid 1px ${theme.$.color.dynamic.accent};
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  transition: 400ms 0s ease-in-out;
  transition-property: border, box-shadow;

  ${!isOutline
    ? `
      background: ${theme.$.color.dynamic.accent};
      box-shadow: ${theme.$.color.dynamic.accent} 0 0 0 0 inset;
    `
    : ''
  }

  ${isChecked
    ? `
      transition: border 400ms 0s ease-in-out, box-shadow 400ms 0s ease-in-out, background 0s 400ms ease-in-out;

      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].main};
          border-color: ${theme.$.palette[palette].main};
          box-shadow: ${theme.$.palette[palette].main} 0 0 0 11px inset;
        `
        : `
          background: ${theme.$.palette[palette].soft};
          border-color: ${theme.$.palette[palette].soft};
          box-shadow: ${theme.$.palette[palette].soft} 0 0 0 11px inset;
        `
      }
    `
    : ''
  }
`)
