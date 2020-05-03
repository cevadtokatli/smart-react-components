import styled from "styled-components"
import ElementProps from "../element/Props"
import {SizeStrictProps} from "../props/size-strict-props"
import Div from "../element/Div"

interface Props extends ElementProps, SizeStrictProps {
    type: string
    shape: string
}

const customKeys = {
    size: (v, t) => `
        > div {
            padding: ${t.form.optionMargin[v].y} 0;

            > section {
                padding: 0 ${t.form.optionPadding[v]};
                margin: ${t.form.optionMargin[v].y} ${t.form.optionMargin[v].x};
            }
        }
    `
}

export default styled(Div).attrs<Props>({customKeys})<Props>(({theme,type,shape}) => `
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: ${theme.src.form.inputRadius[shape]};
    background: ${theme.src.type[type].form.inputBackground};
    user-select: none;
`)