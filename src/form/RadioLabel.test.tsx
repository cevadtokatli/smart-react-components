import React from "react"
import getStyle from "../test/getStyle"
import RadioLabel from "./RadioLabel"
import theme from "../theme"

describe("<RadioLabel />", () => {
    it("should add CSS references by default and the given props", () => {
        const style = getStyle(<RadioLabel space={true} />, RadioLabel)
        expect(style.getPropertyValue("margin-right")).toEqual(theme.length["3"])
        expect(style.getPropertyValue("margin-top")).toEqual(theme.length["2"])
        expect(style.getPropertyValue("margin-bottom")).toEqual(theme.length["2"])
    })
})