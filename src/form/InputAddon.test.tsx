import React from "react"
import getStyle from "../test/getStyle"
import InputAddon from "./InputAddon"
import theme from "../theme"

describe("<InputAddon />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<InputAddon type="left" shape="default" absolute={false} />, InputAddon)
        expect(style.getPropertyValue("border-top-left-radius")).toEqual(theme.form.inputRadius.default)
        expect(style.getPropertyValue("border-bottom-left-radius")).toEqual(theme.form.inputRadius.default)
        expect(style.getPropertyValue("border-top-right-radius")).toEqual("")
        expect(style.getPropertyValue("border-bottom-right-radius")).toEqual("")
        expect(style.getPropertyValue("position")).toEqual("")
    })

    it("should add CSS references by absolute prop", () => {
        const style = getStyle(<InputAddon type="left" shape="default" absolute={true} />, InputAddon)
        expect(style.getPropertyValue("border-top-left-radius")).toEqual("")
        expect(style.getPropertyValue("border-bottom-left-radius")).toEqual("")
        expect(style.getPropertyValue("border-top-right-radius")).toEqual("")
        expect(style.getPropertyValue("border-bottom-right-radius")).toEqual("")
        expect(style.getPropertyValue("position")).toEqual("absolute")
    })
})