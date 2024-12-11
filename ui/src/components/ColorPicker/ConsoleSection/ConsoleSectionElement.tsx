import Section from '@smart-react-components/core/Element/Section'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { PaletteProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import InputAddonElement from '../../Input/InputAddonElement'
import InputElement from '../../Input/InputElement'

interface Props extends StyledProps {
  isDisabled: boolean
  palette: PaletteProp
}

export default styled(Section)<Props>(({ theme, isDisabled, palette }: Props) => `
  background-clip: content-box;
  background-image: url('${theme.$.media.opacityBackground}');
  border-radius: ${theme.$.radius.input.rectangle};

  ${InputElement},
  ${InputAddonElement} {
    color: ${theme.$.palette[palette].colorPicker?.lightFont ?? theme.$.color.light.background};
    transition: none;

    &[data-src-is-dark="true"] {
      color: ${theme.$.palette[palette].colorPicker?.darkFont ?? theme.$.color.dark.background};
    }
  }

  ${isDisabled
   ? `
    opacity: ${theme.$.opacity.buttonDisabled};
    pointer-events: none;
   `
    : ''
  } 
`)
