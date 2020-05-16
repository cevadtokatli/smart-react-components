import React from "react"
import getStyle from "../test/getStyle"
import Th from "./Th"
import theme from "../theme"

describe("<Th />", () => {
    it("should add CSS references by type prop", () => {
        const style = getStyle(<table><thead><tr><Th /></tr></thead></table>, "th")
        expect(style.getPropertyValue("text-align")).toEqual("left")
        expect(style.getPropertyValue("font-weight")).toEqual(theme.fontWeight.semiBold)
    })
})