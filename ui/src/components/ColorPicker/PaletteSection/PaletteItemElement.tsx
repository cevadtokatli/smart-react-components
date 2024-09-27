import Li from '@smart-react-components/core/Element/Li'
import Svg from '@smart-react-components/core/Element/Svg'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'colorPickerSize', SizeProp> {
  isDisabled: boolean
}

export default styled(Li).attrs<Props>(({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].paletteItemSize};
    margin-left: ${t.$.size.colorPicker[v].space};
    margin-top: ${t.$.size.colorPicker[v].space};
    width: ${t.$.size.colorPicker[v].paletteItemSize};

    ${Svg} {
      height: ${t.$.size.icon[v]};
      width: ${t.$.size.icon[v]};
    }
  `,
}))<Props>(({ theme, isDisabled }: Props) => `
  align-items: center;
  border-color: ${theme.$.vars.isDarkMode ? theme.$.color.gray700 : theme.$.color.gray400};
  border-radius: ${theme.$.radius.colorPicker};
  display: flex;
  justify-content: center;
  overflow: hidden;

  div {
    height: 100%;
    width: 100%;
  }

  ${Svg} {
    fill: ${theme.$.vars.isDarkMode ? theme.$.color.gray600 : theme.$.color.gray500};
  }

  ${isDisabled
   ? `
    opacity: ${theme.$.opacity.buttonDisabled};
   `
    : ''
  }
`)
