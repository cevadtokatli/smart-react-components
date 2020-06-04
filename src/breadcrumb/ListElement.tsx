import styled from "styled-components"
import ElementProps from "../element/Props"
import Ul from "../element/Ul"
import DividerElement from "./DividerElement"

interface Props extends ElementProps {
    type: string
    fill$: boolean
    shape: string
}

export default styled(Ul)<Props>(({theme,type,fill$,shape}) => `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    list-style: none;
    border-radius: ${theme.src.breadcrumb.radius[shape]};
    padding: 1px;

    &,
    > li {
        border-radius: ${theme.src.breadcrumb.radius[shape]};
    }

    > li > a {
        padding: ${theme.src.breadcrumb.padding.y} ${theme.src.breadcrumb.padding.x};
    }

    ${fill$
    ? `
        background: ${theme.src.type[type].main};

        > li > a {
            color: ${theme.src.type[type].breadcrumb.fontFill};
            fill: ${theme.src.type[type].breadcrumb.fontFill};
    
            &.active {
                color: ${theme.src.type[type].lightest};
                fill: ${theme.src.type[type].lightest};
            }

            &[disabled="true"],
            &[data-disabled="true"] {
                color: ${theme.src.type[type].darkest};
                fill: ${theme.src.type[type].darkest};
            }
        }

        ${DividerElement} {
            color: ${theme.src.type[type].breadcrumb.fontFill};
            fill: ${theme.src.type[type].breadcrumb.fontFill};
        }
    `
    : `
        background: ${theme.src.type[type].breadcrumb.background};

        > li > a {
            color: ${theme.src.type[type].main};
            fill: ${theme.src.type[type].main};

            &:hover {
                color: ${theme.src.type[type].dark};
                fill: ${theme.src.type[type].dark};
            }

            &.active {
                color: ${theme.src.type[type].darkest};
                fill: ${theme.src.type[type].darkest};
            }

            &[disabled="true"],
            &[data-disabled="true"] {
                color: ${theme.src.type[type].breadcrumb.font};
                fill: ${theme.src.type[type].breadcrumb.font};
            }
        }

        ${DividerElement} {
            color: ${theme.src.type[type].breadcrumb.font};
            fill: ${theme.src.type[type].breadcrumb.font};
        }
    `}
`)