import React from "react"
import getStyle from "../test/getStyle"
import OptionCategoryElement from "./OptionCategoryElement"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<OptionCategoryElement />", () => {
    let props

    beforeAll(() => {
        props = {
            size: "default",
            sizeSm: null,
            sizeMd: null,
            sizeLg: null,
            sizeXl: null,
            box: true,
            type: "primary",
            fill$: false
        }
    })

    it("should add CSS references by default and the given props", () => {
        const style = getStyle(<OptionCategoryElement {...props} />, OptionCategoryElement)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.form.optionPadding[props.size])
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.form.optionPadding[props.size])
        expect(style.getPropertyValue("padding-left")).toEqual(theme.form.optionPadding[props.size])
        expect(style.getPropertyValue("padding-right")).toEqual(theme.form.optionPadding[props.size])
        expect(style.getPropertyValue("margin-top")).toEqual(theme.form.optionMargin[props.size].y)
        expect(style.getPropertyValue("margin-bottom")).toEqual(theme.form.optionMargin[props.size].y)
        expect(style.getPropertyValue("margin-left")).toEqual(theme.form.optionMargin[props.size].x)
        expect(style.getPropertyValue("margin-right")).toEqual(theme.form.optionMargin[props.size].x)
        expect(style.getPropertyValue("font-size")).toEqual(theme.form.optionFontSize[props.size])
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].form.inputBackground))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].form.inputFont))
    })

    it("should add CSS references by box and fill props", () => {
        props.box = false
        props.fill$ = true
        const style = getStyle(<OptionCategoryElement {...props} />, OptionCategoryElement)
        expect(style.getPropertyValue("margin-top")).toEqual("")
        expect(style.getPropertyValue("margin-bottom")).toEqual("")
        expect(style.getPropertyValue("margin-left")).toEqual(`-${theme.form.optionPadding[props.size]}`)
        expect(style.getPropertyValue("margin-right")).toEqual(`-${theme.form.optionPadding[props.size]}`)
        expect(style.getPropertyValue("font-size")).toEqual(theme.form.inputFontSize[props.size])
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].font))

    })
})