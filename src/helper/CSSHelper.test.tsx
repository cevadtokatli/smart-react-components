import CSSHelper from "./CSSHelper"
import {attrs} from "../element"
import theme from "../theme"

describe("CSSHelper", () => {
    it("should get CSS reference(s) by the given props.", () => {
        expect(CSSHelper.getCSSByProps(
            {
                ...attrs,
                theme: {
                    src: theme
                },
                display: "block"
            },
            "display"
        )).toEqual("display:block;")
    })

    it("should set value by the given value.", () => {
        expect(CSSHelper.setValue(16)).toEqual("16px")
        expect(CSSHelper.setValue("1rem")).toEqual("1rem")
    })

    it("should set zIndex by the given value.", () => {
        expect(CSSHelper.setZIndex("fixedBox", theme)).toEqual(`${theme.zIndex.fixedBox}`)
        expect(CSSHelper.setZIndex(100, theme)).toEqual("100")
    })

    it("should set length by the given value.", () => {
        expect(CSSHelper.setLength("2", theme)).toEqual(theme.length["2"])
        expect(CSSHelper.setLength(16, theme)).toEqual("16px")
        expect(CSSHelper.setLength("1rem", theme)).toEqual("1rem")
    })

    it("should set radius by the given value.", () => {
        expect(CSSHelper.setRadius("default", theme)).toEqual(theme.radius.default)
        expect(CSSHelper.setRadius(16, theme)).toEqual("16px")
        expect(CSSHelper.setRadius("1rem", theme)).toEqual("1rem")
    })
    
    it("should set font family by the given value.", () => {
        expect(CSSHelper.setFontFamily("primary", theme)).toEqual(theme.fontFamily.primary)
        expect(CSSHelper.setFontFamily("Open Sans", theme)).toEqual("Open Sans")
    })

    it("should set font size by the given value.", () => {
        expect(CSSHelper.setFontSize("2", theme)).toEqual(theme.fontSize["2"])
        expect(CSSHelper.setFontSize(16, theme)).toEqual("16px")
        expect(CSSHelper.setFontSize("1rem", theme)).toEqual("1rem")
    })

    it("should set icon size by the given value.", () => {
        expect(CSSHelper.setIconSize("large", theme)).toEqual(theme.iconSize["large"])
        expect(CSSHelper.setIconSize(16, theme)).toEqual("16px")
        expect(CSSHelper.setIconSize("1rem", theme)).toEqual("1rem")
    })

    it("should add media rule to the given CSS", () => {
        const css = "display:block;"
        expect(CSSHelper.addMedia(theme, "large", css)).toEqual(`
            @media(min-width:${theme.grid.breakpoint.large}px) {
                ${css}
            }
        `)
    })
})