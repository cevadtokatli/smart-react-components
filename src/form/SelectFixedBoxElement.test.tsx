import React from "react"
import mountTheme from "../test/mountTheme"
import SelectFixedBoxElement from "./SelectFixedBoxElement"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<SelectFixedBoxElement />", () => {
    it("should add CSS references by the given props", () => {
        const wrapper = mountTheme(<SelectFixedBoxElement size="default" sizeSm={null} sizeMd={null} sizeLg={null} sizeXl={null} type="primary" shape="default"><div><section></section></div></SelectFixedBoxElement>)
        const style = getComputedStyle(wrapper.find(SelectFixedBoxElement).at(0).getDOMNode())
        expect(style.getPropertyValue("border-radius")).toEqual(theme.form.inputRadius.default)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.form.inputBackground))
        const divStyle = getComputedStyle(wrapper.find("div").at(1).getDOMNode())
        expect(divStyle.getPropertyValue("padding-top")).toEqual(theme.form.optionMargin.default.y)
        expect(divStyle.getPropertyValue("padding-bottom")).toEqual(theme.form.optionMargin.default.y)
        expect(divStyle.getPropertyValue("padding-left")).toEqual("0px")
        expect(divStyle.getPropertyValue("padding-right")).toEqual("0px")
        const sectionStyle = getComputedStyle(wrapper.find("section").at(0).getDOMNode())
        expect(sectionStyle.getPropertyValue("padding-top")).toEqual("0px")
        expect(sectionStyle.getPropertyValue("padding-bottom")).toEqual("0px")
        expect(sectionStyle.getPropertyValue("padding-left")).toEqual(theme.form.optionPadding.default)
        expect(sectionStyle.getPropertyValue("padding-right")).toEqual(theme.form.optionPadding.default)
        expect(sectionStyle.getPropertyValue("margin-top")).toEqual(theme.form.optionMargin.default.y)
        expect(sectionStyle.getPropertyValue("margin-bottom")).toEqual(theme.form.optionMargin.default.y)
        expect(sectionStyle.getPropertyValue("margin-left")).toEqual(theme.form.optionMargin.default.x)
        expect(sectionStyle.getPropertyValue("margin-right")).toEqual(theme.form.optionMargin.default.x)
    })
})