import Div from '@smart-react-components/core/Element/Div'
import { PaletteProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'
import { Props } from '../Checkbox/CheckboxElement'
import { extractNumberUnit, toCSSValue } from '../../util/css'

const Slider = styled.div.attrs({
  className: 'switch-slider',
})<{ palette: PaletteProp }>(({ theme, palette }) => `
  background: ${theme.$.palette[palette].slider?.mark ?? theme.$.color.white};
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  left: 0;
  position: absolute;
  top: 0;
  transition: 200ms 0s ease-in-out;
  transition-property: left, right;
`)

export default styled(Div).attrs<Props>(({ children, isChecked, palette }) => ({
  children: (
    <>
      {children}
      <Slider palette={palette} />
    </>
  ),
  getCheckboxSize: (v, t) => `
    height: ${t.$.size.switch[v].height};
    width: ${t.$.size.switch[v].width};

    .switch-slider {
      height: ${t.$.size.switch[v].slider};
      width: ${t.$.size.switch[v].slider};

      ${isChecked
        ? `
          left: ${toCSSValue(t.$.size.switch[v].width)(width => width - extractNumberUnit(t.$.size.switch[v].slider) - 2)};  
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
      background: ${theme.$.palette[palette].switch?.background ?? theme.$.color.dynamic.accent};
      box-shadow: ${theme.$.palette[palette].switch?.background ?? theme.$.color.dynamic.accent} 0 0 0 0 inset;
    `
    : ''
  }

  ${isChecked
    ? `
      transition: border 400ms 0s ease-in-out, box-shadow 400ms 0s ease-in-out, background 0s 400ms ease-in-out;

      ${!isSoft
        ? `
          background: ${theme.$.palette[palette].switch?.active?.background ?? theme.$.palette[palette].main};
          border-color: ${theme.$.palette[palette].switch?.active?.background ?? theme.$.palette[palette].main};
          box-shadow: ${theme.$.palette[palette].switch?.active?.background ?? theme.$.palette[palette].main} 0 0 0 11px inset;
        `
        : `
          background: ${theme.$.palette[palette].switch?.soft?.active?.background ?? theme.$.palette[palette].soft};
          border-color: ${theme.$.palette[palette].switch?.soft?.active?.background ?? theme.$.palette[palette].soft};
          box-shadow: ${theme.$.palette[palette].switch?.soft?.active?.background ?? theme.$.palette[palette].soft} 0 0 0 11px inset;
        `
      }
    `
    : ''
  }
`)
