import Color from "color"
import ColorHelper from "./ColorHelper"
import DV from "../default-value"

describe("ColorHelper", () => {
    it("should return the given color as a color object.", () => {
        const colorObject = ColorHelper.getColor("#4a81d4")
        expect(Color.prototype.isPrototypeOf(colorObject)).toEqual(true)
    })

    it("should mix the given color by the given weight.", () => {
        const color = ColorHelper.mix("#4a81d4", -.3)
        expect(color).toEqual("#80a6e0")
    })

    it("should get the proper font color according to the given value.", () => {
        expect(ColorHelper.getFontColor("#000")).toEqual(DV.LIGHT_FONT_COLOR)
        expect(ColorHelper.getFontColor("#fff")).toEqual(DV.DARK_FONT_COLOR)
    })
})