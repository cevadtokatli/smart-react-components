import styled from 'styled-components'
import applyStyledProps, { StyledProps, shouldForwardProp } from '../styled-props'

export default styled.article.withConfig({ shouldForwardProp })<StyledProps>(applyStyledProps)
