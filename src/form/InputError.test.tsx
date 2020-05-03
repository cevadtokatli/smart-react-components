import React from "react"
import getStyle from "../test/getStyle"
import InputError from "./InputError"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<FormGroup />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<InputError />, InputError)
        expect(style.getPropertyValue("margin-top")).toEqual(theme.length["2"])
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.danger.main))
    })
})