import React from "react"
import getStyle from "../test/getStyle"
import Badge from "./Badge"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Badge />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Badge />, Badge)
        expect(style.getPropertyValue("font-size")).toEqual(theme.badge.fontSize.default)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.badge.padding.default.y)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.badge.padding.default.y)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.badge.padding.default.x)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.badge.padding.default.x)
        expect(style.getPropertyValue("border-radius")).toEqual(theme.badge.radius.default)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.font)
        expect(style.getPropertyValue("margin-top")).toEqual(theme.badge.margin.y)
        expect(style.getPropertyValue("margin-bottom")).toEqual(theme.badge.margin.y)
        expect(style.getPropertyValue("margin-left")).toEqual(theme.badge.margin.x)
        expect(style.getPropertyValue("margin-right")).toEqual(theme.badge.margin.x)
    })

    it("should add CSS references by type prop", () => {
        const style = getStyle(<Badge type="danger" />, Badge)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.danger.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.danger.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.danger.font)
    })

    it("should add CSS reference by shape prop", () => {
        const style = getStyle(<Badge shape="square" />, Badge)
        expect(style.getPropertyValue("border-radius")).toEqual(theme.badge.radius.square)
    })

    it("should add CSS references by size and fixedSize props", () => {
        const style = getStyle(<Badge size="small" fixedSize={true} />, Badge)
        expect(style.getPropertyValue("font-size")).toEqual(theme.badge.fontSize.small)
        expect(style.getPropertyValue("width")).toEqual(theme.badge.fixedSize.small)
        expect(style.getPropertyValue("height")).toEqual(theme.badge.fixedSize.small)
        expect(style.getPropertyValue("justify-content")).toEqual("center")
    })

    it("should add CSS reference by space prop", () => {
        const style = getStyle(<Badge space={false} />, Badge)
        expect(style.getPropertyValue("margin")).toEqual("")
    })
})