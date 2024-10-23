import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.ol.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
