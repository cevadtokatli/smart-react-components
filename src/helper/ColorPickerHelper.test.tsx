import ColorPickerHelper from "./ColorPickerHelper"
import ColorHelper from "./ColorHelper"

describe("ColorPickerHelper", () => {
    it("should check color if it is light", () => {
        expect(ColorPickerHelper.isLight(ColorHelper.getColor("#FFF"))).toBe(true)
    })
})