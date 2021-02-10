import styled from "styled-components"
import ElementProps from "../element/Props"
import {Size$Props} from "../props/size$-props"
import Input from "../element/Input"

export interface Props extends ElementProps, Size$Props {
    type$?: string
    fill$?: boolean
    border$?: boolean
    shape?: string
    disabled?: boolean
    leftAddon?: boolean
    leftAddonAbsolute?: boolean
    rightAddon?: boolean
    rightAddonAbsolute?: boolean
    inputElement?: boolean
}

const customKeys = {
    size$: (v, t) => `
        padding: ${t.form.inputPadding[v].y} ${t.form.inputPadding[v].x};
        font-size: ${t.form.inputFontSize[v]};
    `
}

const placeholder = ["::-webkit-input-placeholder", "::-moz-placeholder", ":-moz-placeholder", ":-ms-input-placeholder", "::placeholder"]

export default styled(Input).attrs<Props>(({size$="default",type$="gray",border$=true,shape="default",inputElement=true,flex="1 1 auto",display="block",width="100%",fontFamily="inherit"}) => ({
    customKeys,
    as: inputElement ? "input" : "div",
    size$,
    type$,
    border$,
    shape,
    flex,
    display,
    width,
    fontFamily,
    inputElement
}))<Props>(({theme,type$,fill$,border$,shape,disabled,leftAddon,leftAddonAbsolute,rightAddon,rightAddonAbsolute,inputElement}) => `
    box-sizing: border-box;
    border-radius: ${theme.src.form.inputRadius[shape]};
    border: ${border$ ? "solid 1px" : "0"};
    font-family: ${theme.src.fontFamily.input};
    transition: 200ms 0s ease-in-out;
    transition-property: border, background;

    &:focus,
    &:active {
        outline: 0;
    }

    ${fill$
    ? `
        border-color: ${theme.src.type[type$].main};
        background: ${theme.src.type[type$].main};
        color: ${theme.src.type[type$].font};
        fill: ${theme.src.type[type$].font};

        &:focus,
        &[data-src-active="true"] {
            border-color: ${theme.src.type[type$].darkest};
            background: ${theme.src.type[type$].dark};
        }
    `
    : `
        border-color ${theme.src.type[type$].form.inputBorder};
        background: ${theme.src.type[type$].form.inputBackground};
        color: ${theme.src.type[type$].form.inputFont};
        fill: ${theme.src.type[type$].form.inputFont};

        &:focus,
        &[data-src-active="true"] {
            border-color: ${theme.src.type[type$].main};
        }
    `}

    ${inputElement
    ? `
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;

        ${placeholder.map(item => `
            &${item} {
                opacity: 1;
                color: ${fill$ ? theme.src.type[type$].form.inputPlaceholderFill : theme.src.type[type$].form.inputPlaceholder};
            }
        `).join(" ")}
    `
    : `
        cursor: default;
        user-select: none;
        
        &[data-src-placeholder-style="true"] {
            color: ${fill$ ? theme.src.type[type$].form.inputPlaceholderFill : theme.src.type[type$].form.inputPlaceholder};
        }
    `}

    ${disabled ? `
        opacity: ${theme.src.form.disabledOpacity};
        ${!fill$ ? `background:${theme.src.type[type$].form.inputBorder};` : ""}
    ` : ""}

    ${(leftAddon && !leftAddonAbsolute) ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    ` : ""}

    ${(rightAddon && !rightAddonAbsolute) ? `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    ` : ""}
`)