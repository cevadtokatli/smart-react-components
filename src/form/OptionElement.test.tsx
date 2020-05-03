import React from "react"
import getStyle from "../test/getStyle"
import OptionElement from "./OptionElement"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<OptionElement />", () => {
    let props

    beforeEach(() => {
        props = {
            size: "default",
            sizeSm: null,
            sizeMd: null,
            sizeLg: null,
            sizeXl: null,
            box: true,
            type: "primary",
            fill$: false,
            shape: "default",
            hover: true,
            disabled: false,
            value: "value"
        }
    })

    it("should add CSS references by default and the given props", () => {
        const style = getStyle(<OptionElement {...props} />, OptionElement)
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
        expect(style.getPropertyValue("border-radius")).toEqual(theme.form.inputRadius[props.shape])
    })

    it("should add CSS references by box and fill props", () => {
        props.box = false
        props.fill$ = true
        const style = getStyle(<OptionElement {...props} />, OptionElement)
        expect(style.getPropertyValue("margin-top")).toEqual("")
        expect(style.getPropertyValue("margin-bottom")).toEqual("")
        expect(style.getPropertyValue("margin-left")).toEqual(`-${theme.form.optionPadding[props.size]}`)
        expect(style.getPropertyValue("margin-right")).toEqual(`-${theme.form.optionPadding[props.size]}`)
        expect(style.getPropertyValue("font-size")).toEqual(theme.form.inputFontSize[props.size])
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].main))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].font))

    })

    it("should add CSS references by active class", () => {
        const style = getStyle(<OptionElement {...props} className="src-option-active" />, OptionElement)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].darker))
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].font))
    })

    it("should add CSS reference by value prop", () => {
        props.value = null
        const style = getStyle(<OptionElement {...props} />, OptionElement)
        expect(style.getPropertyValue("color")).toEqual(ColorHelper.convertToRgb(theme.type[props.type].form.inputPlaceholder))
    })

    it("should add CSS reference by disabled prop", () => {
        props.disabled = true
        const style = getStyle(<OptionElement {...props} />, OptionElement)
        expect(style.getPropertyValue("opacity")).toEqual(`${theme.form.disabledOpacity}`)
    })
})