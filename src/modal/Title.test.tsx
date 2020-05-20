import React from "react"
import getStyle from "../test/getStyle"
import Title from "./Title"

describe("<Title />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Title />, Title)
        expect(style.getPropertyValue("flex")).toEqual("0 0 auto")
        expect(style.getPropertyValue("margin")).toEqual("0px")
    })
})