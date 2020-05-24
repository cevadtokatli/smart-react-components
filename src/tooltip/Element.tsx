import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$StrictProps} from "../props/size$-strict-props"
import Div from "../element/Div"
import ArrowElement from "./ArrowElement"

interface Props extends ElementProps, Size$StrictProps {
    type: string
    arrow: string
}

const customKeys = {
    size$: (v, t) => `
        padding: ${t.tooltip.padding[v].y} ${t.tooltip.padding[v].x};
        font-size: ${t.tooltip.fontSize[v]};
    `
}

export default styled(Div).attrs<Props>({customKeys})<Props>(({theme,type,arrow}) => `
    position: fixed;
    z-index: ${theme.src.zIndex.tooltip};
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: ${theme.src.tooltip.radius};
    background: ${theme.src.type[type].main};
    color: ${theme.src.type[type].font};
    fill: ${theme.src.type[type].font};

    ${arrow == "right" ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem .5rem 0;
            border-right-color: ${theme.src.type[type].main};
        }
    ` : ""}

    ${arrow == "left" ? `
        ${ArrowElement}:before {
            border-width: .5rem 0 .5rem .5rem;
            border-left-color: ${theme.src.type[type].main};
        }
    ` : ""}

    ${arrow == "top" ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem 0;
            border-top-color: ${theme.src.type[type].main};
        }
    ` : ""}

    ${arrow == "bottom" ? `
        ${ArrowElement}:before {
            border-width: 0 .5rem .5rem .5rem;
            border-bottom-color: ${theme.src.type[type].main};
        }
    ` : ""}
`)