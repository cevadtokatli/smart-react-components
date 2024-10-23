import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.details.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
