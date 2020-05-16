import React from "react"
import getStyle from "../test/getStyle"
import Thead from "./Thead"

describe("<Thead />", () => {
    it("should add CSS references by borderless prop", () => {
        const style = getStyle(<table><Thead borderless={true}><tr><th /></tr></Thead></table>, "th")
        expect(style.getPropertyValue("border-top-width")).toEqual("0")
        expect(style.getPropertyValue("border-bottom-width")).toEqual("0")
    })
})