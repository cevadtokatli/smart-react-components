import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.input.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
