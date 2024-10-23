import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.h3.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
