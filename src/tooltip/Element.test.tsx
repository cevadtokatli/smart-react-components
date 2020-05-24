import React from "react"
import getStyle from "../test/getStyle"
import Element from "./Element"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Element />", () => {
    let props

    beforeAll(() => {
        props = {
            size$: "default",
            type: "primary",
            arrow: "left"
        }
    })

    it("should add CSS references by size$ prop", () => {
        const style = getStyle(<Element {...props} />, Element)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.tooltip.padding.default.y)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.tooltip.padding.default.y)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.tooltip.padding.default.x)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.tooltip.padding.default.x)
        expect(style.getPropertyValue("font-size")).toEqual(theme.tooltip.fontSize.default)
    })

    it("should add CSS references by type prop", () => {
        const style = getStyle(<Element {...props} />, Element)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.font)
    })
})