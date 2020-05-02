import styled from "styled-components"
import ElementProps from "../element/Props"
import Div from "../element/Div"

export interface Props extends ElementProps {
    space?: boolean
}

export default styled(Div)<Props>(({theme,space}) => `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -${theme.src.badge.margin.x};
    margin-right: -${theme.src.badge.margin.x};

    ${space
    ? `
        margin-top: -${theme.src.badge.margin.y};
        margin-bottom: -${theme.src.badge.margin.y};
    ` : ""}

    > .src-badge {
        flex: 0 1 auto;
    }
`)