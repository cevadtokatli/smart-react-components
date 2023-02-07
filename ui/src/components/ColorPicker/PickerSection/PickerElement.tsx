import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import styled from 'styled-components'
import { toCSSValue } from '../../../util/css'

export default styled(Div)<StyledProps>(({ theme }) => `
  cursor: pointer;
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
`)
