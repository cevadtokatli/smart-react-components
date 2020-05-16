import styled from "styled-components"
import Th from "../element/Th"
import Props from "../element/Props"

export default styled(Th).attrs<Props>({textAlign:"left",fontWeight:"semiBold"})<Props>`
    box-sizing: border-box;
    word-wrap: break-word;
    word-break: break-word;
`