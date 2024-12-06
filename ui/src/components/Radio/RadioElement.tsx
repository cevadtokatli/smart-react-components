import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, Partial, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import { calculateRadioInnerCircleSize } from '../../util/radio'

const Container = styled.div.attrs({
  className: 'src-radio-container',
})<{ palette: PaletteProp }>(({ theme, palette }) => `
  align-items: center;
  border: solid 2px ${theme.$.palette[palette].radio?.border ?? theme.$.color.dynamic.accent};
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100%;
`)

const OuterCircle = styled.div.attrs({
  className: 'src-radio-outer-circle',
})`
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  overflow: hidden;
  transition: 200ms 0s ease-in-out;
  transition-property: height, width;
`

const InnerCircle = styled.div.attrs({
  className: 'src-radio-inner-circle',
})<{ palette: PaletteProp }>(({ theme, palette }) => `
  background: ${theme.$.palette[palette].radio?.active?.mark ?? theme.$.color.white};
  border-radius: 100%;
  flex: 0 0 auto;
`)

interface Props extends
  StyledProps,
  Partial<ResponsiveProp<'radioSize', SizeProp>> {
  isChecked?: boolean
  isOutline?: boolean
  isSoft?: boolean
  palette?: PaletteProp
}

export default styled(Div).attrs<Props>(({ children, palette }) => ({
  children: (
    <>
      { children && children }
      <Container palette={palette}>
        <OuterCircle>
          <InnerCircle palette={palette} />
        </OuterCircle>
      </Container>
    </>
  ),
  getRadioSize: (v, t) => `
    height: ${t.$.size.radio[v]};
    width: ${t.$.size.radio[v]};

    .src-radio-inner-circle {
      height: ${toCSSValue(t.$.size.radio[v])(v => calculateRadioInnerCircleSize(v))};
      width: ${toCSSValue(t.$.size.radio[v])(v => calculateRadioInnerCircleSize(v))};
    }
  `,
}))<Props>(({ theme, isChecked, isOutline, isSoft, palette }: Props) => `
  position: relative;

  ${!isOutline
    ? `
      .src-radio-container {
        background: ${theme.$.palette[palette].radio?.background ?? theme.$.color.dynamic.accent};
      }
    `
    : ''
  }

  .src-radio-outer-circle {
    background: ${!isSoft ? (theme.$.palette[palette].radio?.active?.background ?? theme.$.palette[palette].main) : (theme.$.palette[palette].radio?.soft?.active?.background ?? theme.$.palette[palette].soft)};

    ${!isChecked
      ? `
        height: 0;
        width: 0;
      `
      : `
        height: calc(100% + 4px);
        width: calc(100% + 4px);
      `
    }
  }
`)
