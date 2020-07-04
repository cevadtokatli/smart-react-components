import styled from "styled-components"
import ElementProps from "../element/Props"
import Div from "../element/Div"
import size from "../constants/color-picker/size"

interface ConsoleButtonElementProps extends ElementProps {
    isDark?: boolean
}

export default styled(Div)<ConsoleButtonElementProps>(({theme,isDark}) => `
    display: flex;
    align-items: center;
    padding: ${size.space.small}px;
    cursor: pointer;

    svg {
        display: block;
        width: ${size.icon.width}px;
        height: ${size.icon.height}px;
        fill: ${theme.src.colorPicker[isDark ? "colorDark" : "colorLight"]};
    }
`)