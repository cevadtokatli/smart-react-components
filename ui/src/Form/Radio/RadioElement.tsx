import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp, ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

export const ScaleArea = styled.div(({ theme }) => `
  align-items: center;
  background: ${theme.$.color.dynamic.accent};
  border-radius: 100%;
  justify-content: center;
  display: flex;
  height: calc(100% + 2px);
  margin: -1px 0 0 -1px;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition: 200ms 0s ease-in-out;
  transition-property: background, transform;
  width: calc(100% + 2px);
`)

export const Circle = styled.div(({ theme }) => `
  border-radius 100%;
  background: ${theme.$.color.dynamic.background};
`)

interface Props extends
  StyledProps,
  ResponsiveProp<'radioSize', SizeProp> {
  isChecked: boolean
  isOutline: boolean
  isSoft: boolean
  palette: PaletteProp
}

export default styled(Div).attrs<Props>({
  getRadioSize: (v, t) => `
    height: ${t.$.size.form.radio[v].container};
    width: ${t.$.size.form.radio[v].container};

    ${Circle} {
      height: ${t.$.size.form.radio[v].circle};
      width: ${t.$.size.form.radio[v].circle};  
    }
  `,
})<Props>(({ theme, isChecked, isOutline, isSoft, palette }: Props) => `
  border-radius: 100%;
  box-sizing: border-box;
  position: relative;

  ${!isOutline
    ? `
      background: ${theme.$.color.dynamic.accent};
    `
    : `
      border: solid 2px ${theme.$.color.dynamic.accent};
      transition: border 200ms 0s ease-in-out;

      ${isChecked
        ? `
          border-color: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
        `
        : ''
      }
    `
  }

  ${isChecked
    ? `
      ${ScaleArea} {
        background: ${!isSoft ? theme.$.palette[palette].main : theme.$.palette[palette].soft};
        transform: scale(1);
      }
    `
    : ''
  }
`)
