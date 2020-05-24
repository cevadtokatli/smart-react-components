import styled from "styled-components"
import Div from "../element/Div"

export default styled(Div)`
    position: absolute;
    left: 0;
    top: 0;
    width: .5rem;
    height: .5rem;

    &:before,
    &:after {
        content: "";
        position: absolute;
        display: block;
        border-style: solid;
        border-color: transparent;
    }
`