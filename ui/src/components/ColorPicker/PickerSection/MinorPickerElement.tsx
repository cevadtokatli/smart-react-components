import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'
import PickerElement from './PickerElement'

export default styled(PickerElement).attrs<ColorPickerProps>({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].majorPickerSize};
    width: ${t.$.size.colorPicker[v].minorPickerWidth};
  `,
})`
  background: linear-gradient(to bottom, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  box-shadow: 0 0 3px rgba(0,0,0,.3) inset;
`
