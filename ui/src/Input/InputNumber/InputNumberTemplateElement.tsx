import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'
import { toCSSValue } from '../../util/css'
import InputAddonElement from '../InputAddon/InputAddonElement'
import InputElement from '../InputElement'

interface Props extends
  StyledProps,
  ResponsiveProp<'inputSize', SizeProp> {
}

export default styled(Div).attrs<Props>({
  getInputSize: (v, t) => `
    ${InputAddonElement} {
      padding: 0; 

      > div {
        padding: 0 ${toCSSValue(t.$.size.input[v].padding.x)(v => v / 2)};
      }
    }
  `,
})<Props>`
  display: flex;
  flex: 1 1 auto;

  ${InputElement} {
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  ${InputAddonElement} {
    flex-direction: column;
    user-select: none;

    > div {
      display: flex;
      height: 50%;
      visibility: hidden;

      > svg {
        height: .65rem;
        width: .65rem;
      }

      &:active {
        opacity: .3;
      }
    }
  }

  &:hover ${InputAddonElement} > div {
    visibility: visible;
  }
`
