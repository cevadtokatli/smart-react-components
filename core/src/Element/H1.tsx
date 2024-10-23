import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.h1.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
