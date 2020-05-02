import styled from "styled-components"
import ElementProps from "../element/Props"
import Div from "../element/Div"

interface Props extends ElementProps {
    type: string
    shape: string
    absolute: boolean
}

export default styled(Div)<Props>(({theme,type,shape,absolute}) => `
    overflow: hidden;
    flex: 0 0 auto;
    display: inline-flex;

    ${!absolute ? `
        ${type == "left"
        ? `
            border-top-left-radius: ${theme.src.form.inputRadius[shape]};
            border-bottom-left-radius: ${theme.src.form.inputRadius[shape]};
        ` : `
            border-top-right-radius: ${theme.src.form.inputRadius[shape]};
            border-bottom-right-radius: ${theme.src.form.inputRadius[shape]};
        `}
    ` : `
        position: absolute;
    `}
`)