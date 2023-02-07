import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'
import DraggerElement from './DraggerElement'

interface Props extends StyledProps, ColorPickerProps {}

export default styled(DraggerElement).attrs<Props>({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].majorDraggerSize};
    width: ${t.$.size.colorPicker[v].majorDraggerSize};
  `,
})<Props>(({ theme }: Props) => `
  &::after {
    border: solid 4px ${theme.$.color.light.background};
    border-radius: 100%;
    content: "";
    left: calc(50% - 4px);
    position: absolute;
    top: calc(50% - 4px);
  }

  &[data-src-is-dark="true"]::after {
    border-color: ${theme.$.color.dark.background};
  }
`)
