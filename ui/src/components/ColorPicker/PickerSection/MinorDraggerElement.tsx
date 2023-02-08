import styled from 'styled-components'
import DraggerElement, { Props } from './DraggerElement'

export default styled(DraggerElement).attrs<Props>({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].minorDraggerSize};
    width: ${t.$.size.colorPicker[v].minorDraggerSize};
  `,
})<Props>``
