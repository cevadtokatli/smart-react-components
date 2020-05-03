import styled from "styled-components"
import InputElement, {Props} from "./InputElement"

export default styled(InputElement).attrs<Props>({
    as: "textarea"
})<Props>`
    overflow: auto;
    resize: none;
`