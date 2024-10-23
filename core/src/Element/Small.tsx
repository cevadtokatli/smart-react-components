import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.small.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
