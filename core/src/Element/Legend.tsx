import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.legend.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => shouldForwardProp(prop) && defaultValidatorFn(prop),
})<StyledProps>(applyStyledProps)
