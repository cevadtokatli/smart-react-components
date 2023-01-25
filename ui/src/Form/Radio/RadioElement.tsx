import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import { calculateRadioInnerCircleSize } from '../../util/form'

const Container = styled.div(({ theme }) => `
  align-items: center;
  border: solid 2px ${theme.$.color.dynamic.accent};
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100%;
`)

const OuterCircle = styled.div`
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  overflow: hidden;
  transition: 200ms 0s ease-in-out;
  transition-property: height, width;
`

const InnerCircle = styled.div(({ theme }) => `
  background: ${theme.$.color.dynamic.background};
  border-radius: 100%;
  flex: 0 0 auto;
`)

interface Props extends
  StyledProps,
  ResponsiveProp<'radioSize', SizeProp> {
  isChecked: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs<Props>(({ children }) => ({
  children: (
    <>
      { children && children }
      <Container>
        <OuterCircle>
          <InnerCircle />
        </OuterCircle>
      </Container>
    </>
  ),
  getRadioSize: (v, t) => `
    height: ${t.$.size.form.radio[v]};
    width: ${t.$.size.form.radio[v]};

    ${InnerCircle} {
      height: ${toCSSValue(t.$.size.form.radio[v])(v => calculateRadioInnerCircleSize(v))};
      width: ${toCSSValue(t.$.size.form.radio[v])(v => calculateRadioInnerCircleSize(v))};
    }
  `,
}))<Props>(({ theme, isChecked, isOutline, isSoft, palette }: Props) => `
  position: relative;

  ${!isOutline
    ? `
      ${Container} {
        background: ${theme.$.color.dynamic.accent};
      }
    `
    : ''
  }

  ${OuterCircle} {
    background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};

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
