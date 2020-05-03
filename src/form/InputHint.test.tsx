import React from "react"
import getStyle from "../test/getStyle"
import InputHint from "./InputHint"
import theme from "../theme"

describe("<InputHint />", () => {
    it("should add CSS reference by default props", () => {
        const style = getStyle(<InputHint />, InputHint)
        expect(style.getPropertyValue("margin-top")).toEqual(theme.length["2"])
    })
})