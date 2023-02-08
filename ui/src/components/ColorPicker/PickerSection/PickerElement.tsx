import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import { Props as ColorPickerProps } from '../../../context/ColorPickerProps'
import { toCSSValue } from '../../../util/css'

export interface Props extends StyledProps, ColorPickerProps {}

export default styled(Div)<Props>(({ theme, isDisabled }) => `
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  touch-action: none;

  &,
  div {
    border-radius: ${toCSSValue(theme.$.radius.colorPicker)(v => v * 2)};
  }

  div {
    height: 100%;
  }

  ${!isDisabled
    ? `
      cursor: pointer;
    `
    : ''
  }
`)
