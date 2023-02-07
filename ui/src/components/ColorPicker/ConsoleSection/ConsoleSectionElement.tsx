import Section from '@smart-react-components/core/Element/Section'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import InputAddonElement from '../../Input/InputAddonElement'
import InputElement from '../../Input/InputElement'

interface Props extends
  StyledProps,
  ResponsiveProp<'colorPickerSize', SizeProp> {}

export default styled(Section).attrs<Props>({
  getColorPickerSize: (v, t) => `
    margin-top: ${t.$.size.colorPicker[v].space};
  `,
})<Props>(({ theme }: Props) => `
  background-image: url('${theme.$.media.opacityBackground}');
  border-radius: ${theme.$.radius.input.rectangle};

  ${InputElement},
  ${InputAddonElement} {
    color: ${theme.$.color.light.background};
    transition: none;

    &[data-src-is-dark="true"] {
      color: ${theme.$.color.dark.background};
    }
  }
`)
