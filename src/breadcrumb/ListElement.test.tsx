import React from "react"
import mountTheme from "../test/mountTheme"
import getStyle from "../test/getStyle"
import ListElement from "./ListElement"
import ColorHelper from "../helper/ColorHelper"
import theme from "../theme"

describe("<ListElement />", () => {
    let props

    beforeAll(() => {
        props = {
            type: "primary",
            fill$: false,
            shape: "default"
        }
    })

    it("should add css references by type prop", () => {
        const wrapper = mountTheme(<ListElement {...props}><li><a /></li></ListElement>)
        const style = getComputedStyle(wrapper.find(ListElement).getDOMNode())
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.breadcrumb.background))
        const anchorStyle = getComputedStyle(wrapper.find("a").getDOMNode())
        expect(anchorStyle.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(anchorStyle.getPropertyValue("fill")).toEqual(theme.type.primary.main)
    })

    it("should add css references by fill$ prop", () => {
        const wrapper = mountTheme(<ListElement {...props} fill$={true}><li><a /></li></ListElement>)
        const style = getComputedStyle(wrapper.find(ListElement).getDOMNode())
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        const anchorStyle = getComputedStyle(wrapper.find("a").getDOMNode())
        expect(anchorStyle.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.breadcrumb.fontFill))
        expect(anchorStyle.getPropertyValue("fill")).toEqual(theme.type.primary.breadcrumb.fontFill)
    })

    it("should add css references by shape prop", () => {
        const style = getStyle(<ListElement {...props}><li><a /></li></ListElement>, "li")
        expect(style.getPropertyValue("border-radius")).toEqual(theme.pagination.radius.default)
    })
})