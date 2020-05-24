import React from "react"
import mountTheme from "../test/mountTheme"
import Element from "./Element"
import Header from "./Header"
import Body from "./Body"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Element />", () => {
    let props

    beforeAll(() => {
        props = {
            size$: "default",
            type: "primary",
            arrow: "left",
            isArrowInHeader: false
        }
    })

    it("should add CSS references by size$ prop", () => {
        const wrapper = mountTheme(<Element {...props}><Header /><Body /></Element>)
        const style = getComputedStyle(wrapper.find(Element).getDOMNode())
        expect(style.getPropertyValue("font-size")).toEqual(theme.popover.fontSize.default)
        const headerStyle = getComputedStyle(wrapper.find(Header).getDOMNode())
        expect(headerStyle.getPropertyValue("padding-top")).toEqual(theme.popover.headerPadding.default.y)
        expect(headerStyle.getPropertyValue("padding-bottom")).toEqual(theme.popover.headerPadding.default.y)
        expect(headerStyle.getPropertyValue("padding-left")).toEqual(theme.popover.headerPadding.default.x)
        expect(headerStyle.getPropertyValue("padding-right")).toEqual(theme.popover.headerPadding.default.x)
        const bodyStyle = getComputedStyle(wrapper.find(Body).getDOMNode())
        expect(bodyStyle.getPropertyValue("padding-top")).toEqual(theme.popover.bodyPadding.default.y)
        expect(bodyStyle.getPropertyValue("padding-bottom")).toEqual(theme.popover.bodyPadding.default.y)
        expect(bodyStyle.getPropertyValue("padding-left")).toEqual(theme.popover.bodyPadding.default.x)
        expect(bodyStyle.getPropertyValue("padding-right")).toEqual(theme.popover.bodyPadding.default.x)
    })

    it("should add CSS references by type prop", () => {
        const wrapper = mountTheme(<Element {...props}><Header /><Body /></Element>)
        const style = getComputedStyle(wrapper.find(Element).getDOMNode())
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.popover.border.toLowerCase())
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.popover.background))
        const headerStyle = getComputedStyle(wrapper.find(Header).getDOMNode())
        expect(headerStyle.getPropertyValue("border-bottom-color")).toEqual(theme.type.primary.popover.headerBorder)
        expect(headerStyle.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.popover.headerBackground))
        expect(headerStyle.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(headerStyle.getPropertyValue("fill")).toEqual(theme.type.primary.font)
        const bodyStyle = getComputedStyle(wrapper.find(Body).getDOMNode())
        expect(bodyStyle.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(bodyStyle.getPropertyValue("fill")).toEqual(theme.type.primary.font)
    })
})