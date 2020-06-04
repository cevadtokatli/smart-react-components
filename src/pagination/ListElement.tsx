import styled from "styled-components"
import ElementProps from "../element/Props"
import Ul from "../element/Ul"

interface ListElementProps extends ElementProps {
    type: string
    fill$: boolean
    shape: string
    fixedSize: boolean
}

export default styled(Ul).attrs<ListElementProps>(({p="0"}) => ({p}))<ListElementProps>(({theme,type,fill$,shape,fixedSize}) => `
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: -${theme.src.pagination.margin.y} -${theme.src.pagination.margin.x};

    > li {
        margin: ${theme.src.pagination.margin.y} ${theme.src.pagination.margin.x};

        > a {
            border-radius: ${theme.src.pagination.radius[shape]};

            ${fixedSize
            ? `
                justify-content: center;
                align-items: center;
                width: ${theme.src.pagination.fixedSize};
                height: ${theme.src.pagination.fixedSize};
            ` : `
                padding: ${theme.src.pagination.padding.y} ${theme.src.pagination.padding.x};
            `}
            
            ${fill$
            ? `
                border-color: ${theme.src.type[type].dark};
                background: ${theme.src.type[type].main};
                color: ${theme.src.type[type].font};
                fill: ${theme.src.type[type].font};
        
                &[href]:hover,
                &.active {
                    border-color: ${theme.src.type[type].darkest};
                    background: ${theme.src.type[type].dark};
                }
            `
            : `
                border-color: ${theme.src.type[type].pagination.border};
                background: ${theme.src.type[type].pagination.background};
                color: ${theme.src.type[type].pagination.font};
                fill: ${theme.src.type[type].pagination.font};
        
                &[href]:hover {
                    background: ${theme.src.type[type].pagination.border};
                }
        
                &.active {
                    border-color: ${theme.src.type[type].dark};
                    background: ${theme.src.type[type].main} !important;
                    color: ${theme.src.type[type].font};
                    fill: ${theme.src.type[type].font};
                }
            `}
        }
    }
`)