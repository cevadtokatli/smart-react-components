import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.h6.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
