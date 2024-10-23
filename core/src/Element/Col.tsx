import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.col.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
