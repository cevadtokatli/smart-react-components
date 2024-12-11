import styled from 'styled-components'
import DraggerElement, { Props } from './DraggerElement'

export default styled(DraggerElement).attrs<Props>({
  getColorPickerSize: (v, t) => `
    height: ${t.$.size.colorPicker[v].majorDraggerSize};
    width: ${t.$.size.colorPicker[v].majorDraggerSize};
  `,
})<Props>(({ theme, palette }: Props) => `
  &::after {
    border: solid 4px ${theme.$.palette[palette].colorPicker?.lightFont ?? theme.$.color.light.background};
    border-radius: 100%;
    content: "";
    left: calc(50% - 4px);
    position: absolute;
    top: calc(50% - 4px);
  }

  &[data-src-is-dark="true"]::after {
    border-color: ${theme.$.palette[palette].colorPicker?.darkFont ?? theme.$.color.dark.background};
  }
`)
