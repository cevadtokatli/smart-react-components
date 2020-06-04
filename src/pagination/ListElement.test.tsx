import React from "react"
import getStyle from "../test/getStyle"
import ListElement from "./ListElement"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<ListElement />", () => {
    let props

    beforeAll(() => {
        props = {
            type: "primary",
            fill$: false,
            shape: "default",
            fixedSize: false
        }
    })

    it("should add css references by type prop", () => {
        const style = getStyle(<ListElement {...props}><li><a /></li></ListElement>, "a")
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.pagination.border)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.pagination.background))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.pagination.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.pagination.font)
    })

    it("should add css references by fill$ prop", () => {
        const style = getStyle(<ListElement {...props} fill$={true}><li><a /></li></ListElement>, "a")
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.dark.toLowerCase())
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.font)
    })

    it("should add css references by shape prop", () => {
        const style = getStyle(<ListElement {...props}><li><a /></li></ListElement>, "a")
        expect(style.getPropertyValue("border-radius")).toEqual(theme.pagination.radius.default)
    })

    it("should add css references by fixedSize prop", () => {
        const style = getStyle(<ListElement {...props} fixedSize={true}><li><a /></li></ListElement>, "a")
        expect(style.getPropertyValue("width")).toEqual(theme.pagination.fixedSize)
        expect(style.getPropertyValue("height")).toEqual(theme.pagination.fixedSize)
    })
})