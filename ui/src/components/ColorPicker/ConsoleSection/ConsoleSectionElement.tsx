import Section from '@smart-react-components/core/Element/Section'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import InputAddonElement from '../../Input/InputAddonElement'
import InputElement from '../../Input/InputElement'

interface Props extends StyledProps {
  isDisabled: boolean
}

export default styled(Section)<Props>(({ theme, isDisabled }: Props) => `
  background-clip: content-box;
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

  ${isDisabled
   ? `
    opacity: ${theme.$.opacity.buttonDisabled};
    pointer-events: none;
   `
    : ''
  } 
`)
