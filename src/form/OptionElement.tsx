import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import {Value} from "../props"
import Div from "../element/Div"

interface Props extends ElementProps, SizeStrictProps {
    box: boolean
    type: string
    fill$: boolean
    shape: string
    hover: boolean
    disabled: boolean
    value: Value
}

const getCustomKeys = box => ({
    size: (v, t) => `
        padding: ${t.form.optionPadding[v]} ${t.form.optionPadding[v]};

        ${box 
        ? `
            margin: ${t.form.optionMargin[v].y} ${t.form.optionMargin[v].x};
            font-size: ${t.form.optionFontSize[v]};
        `
        :`
            margin-left: -${t.form.optionPadding[v]};
            margin-right: -${t.form.optionPadding[v]};
            font-size: ${t.form.inputFontSize[v]};

            &:not(:first-child) {
                margin-top: ${t.form.optionMargin[v].y};
            }

            &:not(:last-child) {
                margin-bottom: ${t.form.optionMargin[v].y};
            }
        `}
    `
})

export default styled(Div).attrs<Props>(({box}) => ({
    customKeys: getCustomKeys(box)
}))<Props>(({theme,box,type,fill$,shape,hover,disabled,value}) => `
    border-radius: ${theme.src.form.inputRadius[shape]};
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.option};
    
    ${value != null
    ? `
        cursor: default;
        transition: 100ms 0s ease-in-out;
        transition-property: background, color;

        ${(fill$ && !box)
        ? `
            background: ${theme.src.type[type].main};
            color: ${theme.src.type[type].font};

            ${(hover && !theme.src.isMobile)
            ? `
                &:hover {
                    background: ${theme.src.type[type].dark};
                }
            `
            : ""}
        `
        : `
            background: ${theme.src.type[type].form.inputBackground};
            color: ${theme.src.type[type].form.inputFont};

            ${(hover && !theme.src.isMobile)
            ? `
                &:hover {
                    background: ${theme.src.type[type].main};
                    color: ${theme.src.type[type].font};
                }
            `
            : ""}
        `
        }

        &.src-option-active {
            background: ${theme.src.type[type].darker};
            color: ${theme.src.type[type].font};
        }

        ${disabled
        ? `
            opacity: ${theme.src.form.disabledOpacity};
            pointer-events: none;
        `
        : ""}
    `
    : `
        color: ${theme.src.type[type].form.inputPlaceholder};
    `}
`)