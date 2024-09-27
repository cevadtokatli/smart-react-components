import Span from '@smart-react-components/core/Element/Span'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'

export interface Props extends StyledProps, ColorPickerProps {}

export default styled(Span)<Props>(({ theme, isDisabled }: Props) => `
  border: solid 2px ${theme.$.color.light.background};
  border-radius: 100%;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
  box-sizing: border-box;
  position: absolute;

  &[data-src-is-dark="true"] {
    border-color: ${theme.$.color.dark.background};
  }

  ${isDisabled
    ? `
      opacity: ${theme.$.opacity.buttonDisabled};
    `
    : ''
  }
`)
