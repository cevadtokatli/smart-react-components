import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import Div from "../element/Div"

interface Props extends ElementProps, SizeStrictProps {
    box: boolean
    type: string
    fill$: boolean
}

const getCustomKeys = box => ({
    size: (v, t) => v ? `
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
    ` : ""
})

export default styled(Div).attrs<Props>(({box}) => ({
    customKeys: getCustomKeys(box)
}))<Props>(({theme,box,type,fill$}) => `
    cursor: initial;
    word-wrap: break-word;
    word-break: break-word;
    font-family: ${theme.src.fontFamily.option};
    font-weight: bold;

    ${(fill$ && !box)
    ? `
        background: ${theme.src.type[type].main};
        color: ${theme.src.type[type].font};
    `
    : `
        background: ${theme.src.type[type].form.inputBackground};
        color: ${theme.src.type[type].form.inputFont};
    `
    }
`)