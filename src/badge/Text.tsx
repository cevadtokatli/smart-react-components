import styled from "styled-components"
import Span from "../element/Span"
import Props from "../element/Props"

export default styled(Span).attrs<Props>(({className=""}) => ({
    className: `src-badge-text ${className}`
}))<Props>`
    flex: 0 1 auto;
    display: inline-block;
    word-wrap: break-word;
    word-break: break-word;
`