import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.canvas.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
