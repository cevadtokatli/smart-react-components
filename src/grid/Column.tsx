import styled from "styled-components"
import ElementProps from "../element/Props"
import RATIOS from "../constants/grid/column"
import Div from "../element/Div"

export interface Props extends ElementProps {
    col?: number
    colSm?: number
    colMd?: number
    colLg?: number
    colXl?: number
    offset?: number
    offsetSm?: number
    offsetMd?: number
    offsetLg?: number
    offsetXl?: number
    push?: number
    pushSm?: number
    pushMd?: number
    pushLg?: number
    pushXl?: number
    pull?: number
    pullSm?: number
    pullMd?: number
    pullLg?: number
    pullXl?: number
}

const customKeys = {
    col: v => `
        flex: 0 0 ${RATIOS[v]}%;
        max-width: ${RATIOS[v]}%;
    `,
    offset: v => `left:${RATIOS[v]}%;`,
    push: v => `margin-left:${RATIOS[v]}%;`,
    pull: v => `margin-left:-${RATIOS[v]}%;`
}

export default styled(Div).attrs<Props>(({theme,px}) => ({
    customKeys,
    px: typeof px === "undefined" ? theme.src.grid.columnGap : px
}))<Props>`
    position: relative;
    width: 100%;
    box-sizing: border-box;
`