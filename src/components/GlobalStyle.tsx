import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        font-family: "Open Sans", sans-serif;
    }
`