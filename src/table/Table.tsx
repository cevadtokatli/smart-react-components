import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeProps} from "../props/size-props"
import Table from "../element/Table"

export interface Props extends ElementProps, SizeProps {
    type?: string
    borderX?: boolean
    borderY?: boolean
    striped?: boolean
    hover?: boolean
    sticky?: boolean
}

const customKeys = {
    size: (v, t) => `
        font-size: ${t.table.fontSize[v]};

        > * > tr > {
            th, td {
                padding: ${t.table.padding[v]};
            }
        }
    `
}

export default styled(Table).attrs<Props>(({type="light",size="default",borderY=true,sticky=true}) => ({
    customKeys,
    type,
    size,
    borderY,
    sticky
}))<Props>(({theme,type,borderX,borderY,striped,hover,sticky}) => `
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    empty-cells: hide;

    > * > tr > * {
        border: solid 0 ${theme.src.type[type].table.border};
        background: ${theme.src.type[type].table.background};
        color: ${theme.src.type[type].table.font};

        ${sticky ? `position: sticky;` : ""}
    }

    ${borderX
    ? `
        > * > tr > {
            *:first-child {
                border-left-width: 1px;
            }

           * {
                border-right-width: 1px;
            }
        }
    ` : ""}

    ${borderY
    ? `
        > * > tr > * {
            border-bottom-width: 1px;
        }

        > thead > tr:nth-last-of-type(1) > * {
            border-bottom-width: 2px;
        }

        > thead > tr > *,
        > tbody:first-child > tr:first-child > * {
            border-top-width: 1px;
        }
    ` : ""}

    ${striped ? `
        ${theme.src.table.stripedOrientation == "even" 
        ? `
            > thead > tr > * {
                background: ${theme.src.type[type].table.stripedBackground};
                color: ${theme.src.type[type].table.stripedFont};
            }
        ` : ""}

        > tbody > tr:nth-child(${theme.src.table.stripedOrientation}) > * {
            background: ${theme.src.type[type].table.stripedBackground};
            color: ${theme.src.type[type].table.stripedFont};
        }
    ` : ""}

    ${(hover && !theme.isMobile) ? `
        > tbody > tr {
            > * {
                transition: ${theme.src.table.hoverTransition};
                transition-property: background, color;
            }

            &:hover > * {
                background: ${theme.src.type[type].table.hoverBackground};
                color: ${theme.src.type[type].table.hoverFont};
            }
        }
    ` : ""}
`)