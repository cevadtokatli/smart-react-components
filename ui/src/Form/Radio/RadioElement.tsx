import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'

export const OuterCircle = styled.circle<{ isOutline: boolean }>(({ theme, isOutline }) => `
  fill: ${!isOutline ? theme.$.color.dynamic.accent : 'transparent'};
  stroke: ${theme.$.color.dynamic.accent};
  stroke-width: 2px;
`)

export const ActiveCircle = styled.circle<{ isSoft: boolean, palette: PaletteProp }>(({ theme, isSoft, palette }) => `
  fill: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
  r: 0;
  transition: r 200ms 0s ease-in-out;
`)

export const InnerCircle = styled.circle(({ theme }) => `
  fill: ${theme.$.color.dynamic.background};
  transition: r 200ms 0s ease-in-out;
`)

interface Props extends
  StyledProps,
  ResponsiveProp<'radioSize', SizeProp> {
  isChecked: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs<Props>(({ children, isChecked, isOutline, isSoft, palette }) => ({
  children: (
    <>
      { children && children }
      <svg>
        <OuterCircle isOutline={isOutline} />
        <ActiveCircle isSoft={isSoft} palette={palette} />
        <InnerCircle />
      </svg>
    </>
  ),
  getRadioSize: (v, t) => `
    > svg {
      height: ${t.$.size.form.radio[v]};
      width: ${t.$.size.form.radio[v]};

      circle {
        cx: ${toCSSValue(t.$.size.form.radio[v])(v => (v / 2))};
        cy: ${toCSSValue(t.$.size.form.radio[v])(v => (v / 2))};
      }

      ${OuterCircle} {
        r: ${toCSSValue(t.$.size.form.radio[v])(v => (v / 2) - 1)};
      }

      ${isChecked
        ? `
          ${ActiveCircle} {
            r: ${toCSSValue(t.$.size.form.radio[v])(v => (v / 2))};
          }

          ${InnerCircle} {
            r: ${toCSSValue(t.$.size.form.radio[v])(v => v / 10)};
          }
        `
      : ''
      }
    }
  `,
}))<Props>`
  display: inline-flex;
  position: relative;
`
