import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.address.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
