import React from "react"
import getStyle from "../test/getStyle"
import mountTheme from "../test/mountTheme"
import Element from "./Element"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Element />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Element />, Element)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.button.padding.default.y)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.button.padding.default.y)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.button.padding.default.x)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.button.padding.default.x)
        expect(style.getPropertyValue("font-size")).toEqual(theme.button.fontSize.default)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.font)
    })

    it("should add css references by size$ prop", () => {
        const style = getStyle(<Element size$="small" />, Element)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.button.padding.small.y)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.button.padding.small.y)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.button.padding.small.x)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.button.padding.small.x)
        expect(style.getPropertyValue("font-size")).toEqual(theme.button.fontSize.small)
    })

    it("should add css references by type$ prop", () => {
        const style = getStyle(<Element type$="danger" />, Element)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.danger.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.danger.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.danger.font)
    })

    it("should add css references by fill$ prop", () => {
        const style = getStyle(<Element fill$={false} />, Element)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.button.background))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.main)
    })

    it("should add css references by link prop", () => {
        const style = getStyle(<Element link={true} />, Element)
        expect(style.getPropertyValue("border-color")).toEqual("transparent")
        expect(style.getPropertyValue("background")).toEqual("transparent")
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.main))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.main)
    })

    it("should add css references by shape prop", () => {
        const style = getStyle(<Element shape="circle" />, Element)
        expect(style.getPropertyValue("border-radius")).toEqual(theme.button.radius.circle)
    })

    it("should add css references by block prop", () => {
        const style = getStyle(<Element block={true} />, Element)
        expect(style.getPropertyValue("justify-content")).toEqual("center")
        expect(style.getPropertyValue("width")).toEqual("100%")
    })

    it("should add css references by fixedSize prop", () => {
        const style = getStyle(<Element fixedSize={true} />, Element)
        expect(style.getPropertyValue("justify-content")).toEqual("center")
        expect(style.getPropertyValue("width")).toEqual(theme.button.fixedSize.default)
        expect(style.getPropertyValue("height")).toEqual(theme.button.fixedSize.default)
    })

    it("should add css references by disabled prop", () => {
        const style = getStyle(<Element disabled={true} />, Element)
        expect(style.getPropertyValue("opacity")).toEqual(`${theme.button.disabledOpacity}`)
        expect(style.getPropertyValue("pointer-events")).toEqual("none")
    })

    it("should add css references by loading$ prop", () => {
        const wrapper = mountTheme(<Element loading$={true}><span id="loading" data-src-loading="true" /><span id="child" /></Element>)
        const style = getComputedStyle(wrapper.find(Element).getDOMNode())
        expect(style.getPropertyValue("pointer-events")).toEqual("none")
        const loadingStyle = getComputedStyle(wrapper.find("#loading").getDOMNode())
        expect(loadingStyle.getPropertyValue("visibility")).toEqual("visible")
        const childStyle = getComputedStyle(wrapper.find("#child").getDOMNode())
        expect(childStyle.getPropertyValue("visibility")).toEqual("hidden")
    })
})