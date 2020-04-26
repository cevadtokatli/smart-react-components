import React from "react"
import getStyle from "../test/getStyle"
import Container from "./Container"
import theme from "../theme"

describe("<Container />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Container />, Container)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.grid.columnGap)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.grid.columnGap)
        expect(style.getPropertyValue("margin-left")).toEqual("auto")
        expect(style.getPropertyValue("margin-right")).toEqual("auto")
    })
})