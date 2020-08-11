import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$StrictProps} from "../props/size$-strict-props"
import Div from "../element/Div"
import ArrowElement from "../tooltip/ArrowElement"

interface Props extends ElementProps, Size$StrictProps {
    type: string
    arrow: string
    isArrowInHeader: boolean
}

const customKeys = {
    size$: (v, t) => `
        font-size: ${t.popover.fontSize[v]};

        .src-popover-header {
            padding: ${t.popover.headerPadding[v].y} ${t.popover.headerPadding[v].x};
        }

        .src-popover-body {
            padding: ${t.popover.bodyPadding[v].y} ${t.popover.bodyPadding[v].x};
        }
    `
}

export default styled(Div).attrs<Props>({customKeys})<Props>(({theme,type,arrow,isArrowInHeader}) => `
    position: fixed;
    z-index: ${theme.src.zIndex.popover};
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: solid 1px ${theme.src.type[type].popover.border};
    background: ${theme.src.type[type].popover.background};
    font-family: ${theme.src.fontFamily.popover};

    > * {
        color: ${theme.src.type[type].font};
        fill: ${theme.src.type[type].font};
    }

    .src-popover-header {
        border-bottom: solid 1px ${theme.src.type[type].popover.headerBorder};
        background: ${theme.src.type[type].popover.headerBackground};
    }

    ${arrow == "right"
    ? `
        ${ArrowElement} {
            &:before {
                left: 0;
                border-width: .5rem .5rem .5rem 0;
                border-right-color: ${theme.src.type[type].popover.border};
            }

            &:after {
                left: 1px;
                border-width: .5rem .5rem .5rem 0;
                border-right-color: ${theme.src.type[type].popover.background};
            }
        }

        ${isArrowInHeader
        ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-right-color: ${theme.src.type[type].popover.headerBackground};
                }
            }
        ` : ""}
    ` : ""}
        
    ${arrow == "left"
    ? `
        ${ArrowElement} {
            &:before {
                right: 0;
                border-width: .5rem 0 .5rem .5rem;
                border-left-color: ${theme.src.type[type].popover.border};
            }

            &:after {
                right: 1px;
                border-width: .5rem 0 .5rem .5rem;
                border-left-color: ${theme.src.type[type].popover.background};
            }
        }

        ${isArrowInHeader
        ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-left-color: ${theme.src.type[type].popover.headerBackground};
                }
            }
        ` : ""}
    ` : ""}

    ${arrow == "top"
    ? `
        ${ArrowElement} {
            &:before {
                bottom: 0;
                border-width: .5rem .5rem 0;
                border-top-color: ${theme.src.type[type].popover.border};
            }

            &:after {
                bottom: 1px;
                border-width: .5rem .5rem 0;
                border-top-color: ${theme.src.type[type].popover.background};
            }
        }

        ${isArrowInHeader
        ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-top-color: ${theme.src.type[type].popover.headerBackground};
                }
            }
        ` : ""}
    ` : ""}

    ${arrow == "bottom"
    ? `
        ${ArrowElement} {
                &:before {
                    top: 0;
                    border-width: 0 .5rem .5rem .5rem;
                    border-bottom-color: ${theme.src.type[type].popover.border};
                }

                &:after {
                    top: 1px;
                    border-width: 0 .5rem .5rem .5rem;
                    border-bottom-color: ${theme.src.type[type].popover.background};
                }
            }
        }

        ${arrow == "bottom"
        ? `
            .src-popover-header ~ ${ArrowElement} {
                &:after {
                    border-bottom-color: ${theme.src.type[type].popover.headerBackground};
                }
            }
        ` : ""}
    ` : ""}        
`)