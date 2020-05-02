import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"

export default styled(Div).attrs<Props>(({className=""}) => ({
    className: `src-badge-icon ${className}`
}))<Props>`
    flex: 0 0 auto;
    align-self: stretch;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    user-select: none;

    &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`