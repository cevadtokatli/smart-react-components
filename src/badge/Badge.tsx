import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeProps} from "../props/size-props"
import Div from "../element/Div"

export interface Props extends ElementProps, SizeProps {
    type?: string
    shape?: string
    fixedSize?: boolean
    space?: boolean
}

const getCustomKeys = fixedSize => ({
    size: (v, t) => `
        font-size: ${t.badge.fontSize[v]};

        ${fixedSize
        ? `
            width: ${t.badge.fixedSize[v]};
            height: ${t.badge.fixedSize[v]};
        ` : `
            padding: ${t.badge.padding[v].y} ${t.badge.padding[v].x}; 

            .src-badge-icon,
            .src-badge-text {
                padding: ${t.badge.padding[v].y} ${t.badge.padding[v].x};
                margin: -${t.badge.padding[v].y} -${t.badge.padding[v].x}; 
            }
    
            > *:first-child {
                margin-right: 0;
    
                + * {
                    margin-left: 0;
                }
            }
        `}
    `
})

export default styled(Div).attrs<Props>(({className="",size="default",type="primary",shape="default",fixedSize,space=true}) => ({
    customKeys: getCustomKeys(fixedSize),
    className: `src-badge ${className}`,
    size,
    type,
    shape,
    fixedSize,
    space
}))<Props>(({theme,type,shape,fixedSize,space}) => `
    display: inline-flex;
    align-items: center;
    border-radius: ${theme.src.badge.radius[shape]};
    background: ${theme.src.type[type].main};
    color: ${theme.src.type[type].font};
    fill: ${theme.src.type[type].font};
    font-family: ${theme.src.fontFamily.badge};
    word-wrap: break-word;
    word-break: break-word;

    .src-badge-icon {
        background: ${theme.src.type[type].darker};

        &:active,
        &:focus {
            background: ${theme.src.type[type].darkest};
        }
    }

    ${fixedSize
    ? `
        justify-content: center;
    ` : ""}

    ${space
    ? `
        margin: ${theme.src.badge.margin.y} ${theme.src.badge.margin.x};
    ` : ""}
`)