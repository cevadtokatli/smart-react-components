import React from "react"
import getStyle from "../test/getStyle"
import mountTheme from "../test/mountTheme"
import InputElement from "./InputElement"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<InputElement />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<InputElement />, InputElement)
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.gray.form.inputBorder)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.gray.form.inputBackground))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.gray.form.inputFont))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.gray.form.inputFont)
        expect(style.getPropertyValue("border-top-left-radius")).toEqual("")
        expect(style.getPropertyValue("border-bottom-left-radius")).toEqual("")
        expect(style.getPropertyValue("border-top-right-radius")).toEqual("")
        expect(style.getPropertyValue("border-bottom-right-radius")).toEqual("")
    })

    it("should add CSS references by input element prop", () => {
        const style = getStyle(<InputElement inputElement={false} />, InputElement)
        expect(style.getPropertyValue("cursor")).toEqual("default")
        expect(style.getPropertyValue("user-select")).toEqual("none")
    })

    it("should render input element as div", () => {
        const wrapper = mountTheme(<InputElement inputElement={false} />)
        expect(wrapper.find("div").exists()).toBe(true)
    })

    it("should add CSS references by size prop", () => {
        const style = getStyle(<InputElement size$="default" />, InputElement)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.form.inputPadding.default.x)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.form.inputPadding.default.x)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.form.inputPadding.default.y)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.form.inputPadding.default.y)
        expect(style.getPropertyValue("font-size")).toEqual(theme.form.inputFontSize.default)
    })

    it("should add CSS references by type prop", () => {
        const style = getStyle(<InputElement type$="primary" />, InputElement)
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.form.inputBorder)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.form.inputBackground))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.primary.form.inputFont))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.primary.form.inputFont)
    })

    it("should add CSS references by fill prop", () => {
        const style = getStyle(<InputElement fill$={true} />, InputElement)
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.gray.main)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.gray.main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type.gray.font))
        expect(style.getPropertyValue("fill")).toEqual(theme.type.gray.font)
    })

    it("should add CSS reference by disabled prop", () => {
        const style = getStyle(<InputElement disabled={true} />, InputElement)
        expect(style.getPropertyValue("opacity")).toEqual(`${theme.form.disabledOpacity}`)
    })

    it("should add CSS references by left addon prop", () => {
        const style = getStyle(<InputElement leftAddon={true} />, InputElement)
        expect(style.getPropertyValue("border-top-left-radius")).toEqual("0")
        expect(style.getPropertyValue("border-bottom-left-radius")).toEqual("0")
    })

    it("should add CSS references by right addon prop", () => {
        const style = getStyle(<InputElement rightAddon={true} />, InputElement)
        expect(style.getPropertyValue("border-top-right-radius")).toEqual("0")
        expect(style.getPropertyValue("border-bottom-right-radius")).toEqual("0")
    })
})