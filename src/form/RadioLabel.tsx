import styled from "styled-components"
import ElementProps from "../element/Props"
import Label from "../element/Label"

interface Props extends ElementProps {
    space: boolean
}

export default styled(Label).attrs<Props>(({space,mr,my}) => ({
    mr: space ? 3 : mr,
    my: space ? 2 : my
}))<Props>`
    display: inline-flex;
    align-items: center;
    word-wrap: break-word;
    word-break: break-word;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`