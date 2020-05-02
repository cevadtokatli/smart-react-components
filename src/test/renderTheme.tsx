import React from "react"
import {render} from "enzyme"
import WrapperTheme from "./WrapperTheme"

export default child => render(<WrapperTheme>{child}</WrapperTheme>)