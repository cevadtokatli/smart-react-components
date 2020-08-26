import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$Props} from "../props/size$-props"
import IconElement from "./IconElement"
import A from "../element/A"

export interface Props extends ElementProps, Size$Props {
    type$?: string
    fill$?: boolean
    link?: boolean
    border$?: boolean
    shape?: string
    block?: boolean
    fixedSize?: boolean
    disabled?: boolean
    loading$?: boolean
}

const getCustomKeys = fixedSize => ({
    size$: (v, t) => `
        font-size: ${t.button.fontSize[v]};

        ${fixedSize ? `
            width: ${t.button.fixedSize[v]};
            height: ${t.button.fixedSize[v]};
        ` : `
            padding: ${t.button.padding[v].y} ${t.button.padding[v].x};

            > ${IconElement} {
                padding: 0 ${t.button.padding[v].xHalf};
                margin-top: -${t.button.padding[v].y};
                margin-bottom: -${t.button.padding[v].y};

                &[data-src-icon-position="left"] {
                    margin-right: ${t.button.padding[v].xHalf};
                    margin-left: -${t.button.padding[v].x};
                }

                &[data-src-icon-position="right"] {
                    margin-right: -${t.button.padding[v].x};
                    margin-left: ${t.button.padding[v].xHalf};
                }
            }
        `}
    `
})

export default styled(A).attrs<Props>(({size$="default",type$="primary",fill$=true,border$=true,shape="default",fixedSize,tabIndex=0}) => ({customKeys:getCustomKeys(fixedSize),size$,type$,fill$,border$,shape,tabIndex}))<Props>(({theme,type$,fill$,link,border$,shape,block,fixedSize,disabled,loading$}) => `
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: ${theme.src.button.radius[shape]};
    ${border$ ? `border: solid 1px ${theme.src.type[type$].main};` : ""}
    cursor: default;
    user-select: none;
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.button};
    transition: ${theme.src.button.transition};
    transition-property: border, background, color, fill, box-shadow;

    a& {
        text-decoration: none;
    }

    ${block ? `
        justify-content: center;
        width: 100%;
    ` : ""}

    ${fixedSize ? `       
        justify-content: center;
    ` : ""}

    ${!link ? `
        ${fill$
        ? `
            background: ${theme.src.type[type$].main};
            color: ${theme.src.type[type$].font};
            fill: ${theme.src.type[type$].font};

            > ${IconElement} {
                background: ${theme.src.type[type$].darker};
            }
            
            &[data-src-placeholder-style="true"] {
                color: ${theme.src.type[type$].button.placeholderFill};
            }
    
            &:hover,
            &[data-src-active="true"] {
                border-color: ${theme.src.type[type$].dark};
                background: ${theme.src.type[type$].dark};
    
                > ${IconElement} {
                    background: ${theme.src.type[type$].darkest};
                }
            }
        `
        : `
            background: ${theme.src.type[type$].button.background};
            color: ${theme.src.type[type$].main};
            fill: ${theme.src.type[type$].main};

            &[data-src-placeholder-style="true"] {
                color: ${theme.src.type[type$].button.placeholder};
            }
    
            &:hover,
            &[data-src-active="true"] {
                background: ${theme.src.type[type$].main};
                color: ${theme.src.type[type$].font};
                fill: ${theme.src.type[type$].button.background};
            }
        `}
    
        ${border$ ? `
            &:focus,
            &:active,
            &[data-src-active="true"] {
                box-shadow: 0 0 0 .15rem ${theme.src.type[type$].shadow};
            }
        ` : ""}
    ` : `
        border-color: transparent;
        background: transparent;
        color: ${theme.src.type[type$].main};
        fill: ${theme.src.type[type$].main};

        &:hover,
        &[data-src-active="true"] {
            color: ${theme.src.type[type$].darkest};
            fill: ${theme.src.type[type$].darkest};
        }
    `}

    &:focus,
    &:active {
        outline: 0;
    }

    ${disabled ? `
        opacity: ${theme.src.button.disabledOpacity};
        pointer-events: none;
    ` : ""}

    ${loading$ ? `
        pointer-events: none;

        > *:not(.src-wave-ripple):not([data-src-loading="true"]) {
            visibility: hidden;
        }
    ` : ""}
`)