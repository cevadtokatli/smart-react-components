import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.data.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
