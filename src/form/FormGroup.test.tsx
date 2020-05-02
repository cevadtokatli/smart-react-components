import React from "react"
import getStyle from "../test/getStyle"
import FormGroup from "./FormGroup"
import theme from "../theme"

describe("<FormGroup />", () => {
    it("should add CSS reference by default props", () => {
        const style = getStyle(<FormGroup />, FormGroup)
        expect(style.getPropertyValue("margin-bottom")).toEqual(theme.length["3"])
    })
})