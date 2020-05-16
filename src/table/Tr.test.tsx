import React from "react"
import getStyle from "../test/getStyle"
import Tr from "./Tr"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Tr />", () => {
    it("should add CSS references by type prop", () => {
        const style = getStyle(<table><tbody><Tr type="primary"><td /></Tr></tbody></table>, "td")
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.table.border)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.table.background))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.table.font))

    })
})