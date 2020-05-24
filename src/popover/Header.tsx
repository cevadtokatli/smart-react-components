import styled from "styled-components"
import H4 from "../element/H4"
import Props from "../element/Props"

export default styled(H4).attrs<Props>(({className=""}) => ({className: `${className} src-popover-header`}))<Props>`
    box-sizing: border-box;
    margin: 0;
`