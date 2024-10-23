import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.sub.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
