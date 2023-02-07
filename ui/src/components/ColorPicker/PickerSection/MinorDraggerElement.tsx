import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'
import DraggerElement from './DraggerElement'

export default styled(DraggerElement).attrs<ColorPickerProps>({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].minorDraggerSize};
    width: ${t.$.size.colorPicker[v].minorDraggerSize};
  `,
})<ColorPickerProps>``
