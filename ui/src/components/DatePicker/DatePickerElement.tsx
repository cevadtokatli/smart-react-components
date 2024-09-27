import Div from '@smart-react-components/core/Element/Div'
import { StyledProps } from '@smart-react-components/core/styled-props'
import { ResponsiveProp, SizeProp } from '@smart-react-components/core/types'
import styled from 'styled-components'

interface Props extends
  StyledProps,
  ResponsiveProp<'datePickerSize', SizeProp> {}

export default styled(Div).attrs<Props>({
  getDatePickerSize: (v, t) => `
    font-size: ${t.$.size.datePicker[v].fontSize};
    width: ${t.$.size.datePicker[v].width};
  `,
})`
  height: 100%;

  .src-in-out-show {
    opacity: 0;
    transform: scale(.85);
  }

  .src-in-out-show-active {
    transition: 150ms ease-in-out;
    transition-property: opacity, transform;
    opacity: 1;
    transform: scale(1);
  }

  .src-in-out-hide {
    opacity: 1;
    transform: scale(1);
  }

  .src-in-out-hide-active {
    transition: 150ms ease-in-out;
    transition-property: opacity, transform;
    opacity: 0;
    transform: scale(1.15);
  }

  .src-out-in-show {
    opacity: 0;
    transform: scale(1.15);
  }

  .src-out-in-show-active {
    transition: 150ms ease-in-out;
    transition-property: opacity, transform;
    opacity: 1;
    transform: scale(1);
  }

  .src-out-in-hide {
    opacity: 1;
    transform: scale(1);
  }

  .src-out-in-hide-active {
    transition: 150ms ease-in-out;
    transition-property: opacity, transform;
    opacity: 0;
    transform: scale(.85);
  }
`
