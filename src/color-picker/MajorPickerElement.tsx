import styled from "styled-components"
import size from "../constants/color-picker/size"

export default styled.div`
    > div {
        border-top-left-radius: ${size.radius.default+3}px !important;
    }

    .src-color-picker-gradient-light {
        background: linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0));
    }
   
    .src-color-picker-gradient-dark {
        background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0));
    }
`