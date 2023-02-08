import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'colorPickerSize', SizeProp> {
  isOutline: boolean
}

export default styled(Div).attrs<Props>({
  getColorPickerSize: (v, t) => `
    padding: ${t.$.size.colorPicker[v].space};
    width: ${t.$.size.colorPicker[v].width};

    > *:not(:first-child) {
      padding-top: ${t.$.size.colorPicker[v].space};
    }
  `,
})<Props>(({ theme, isOutline }: Props) => `
  border-radius: ${theme.$.radius.colorPicker};
  box-sizing: border-box;

  ${!isOutline
    ? `
      background: ${theme.$.color.dynamic.gray};
    `
    : ''
  }
`)
