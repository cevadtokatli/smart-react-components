import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.mark.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
