import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.output.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
