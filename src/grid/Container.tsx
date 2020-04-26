import styled from "styled-components"
import Div from "../element/Div"
import Props from "../element/Props"
import CSSHelper from "../helper/CSSHelper"

const BREAKPOINTS = ["small", "medium", "large", "xlarge"]

export default styled(Div).attrs<Props>(({theme,px,mx="auto"}) => ({
    px: typeof px === "undefined" ? theme.src.grid.columnGap : px,
    mx
}))<Props>`
    max-width: 100%;
    box-sizing: border-box;
    
    ${({theme}) => BREAKPOINTS.map(i => CSSHelper.addMedia(theme.src, i, `max-width:${theme.src.grid.containerWidth[i]}px;`)).join(" ")}
`