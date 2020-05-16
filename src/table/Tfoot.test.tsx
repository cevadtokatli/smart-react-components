import React from "react"
import getStyle from "../test/getStyle"
import Tfoot from "./Tfoot"

describe("<Tfoot />", () => {
    it("should add CSS references by borderless prop", () => {
        const style = getStyle(<table><Tfoot borderless={true}><tr><td /></tr></Tfoot></table>, "td")
        expect(style.getPropertyValue("border-top-width")).toEqual("0")
        expect(style.getPropertyValue("border-bottom-width")).toEqual("0")
    })
})