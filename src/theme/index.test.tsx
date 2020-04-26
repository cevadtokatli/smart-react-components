import React from "react"
import mountTheme from "../test/mountTheme"
import theme, {createType, Type} from "./"
import DV from "../default-value"
import H1 from "../element/H1"
import ColorHelper from "../helper/ColorHelper"

describe("theme", () => {
    describe("type", () => {
        it("should create a Type object with the main color.", () => {
            const mainColor = "#4a81d4"
            const type = createType(mainColor)
            expect(mainColor).toEqual(type.main)
        })
    
        it("should create a Type object with the given Type object.", () => {
            const typeObj: Type = {
                main: "#4a81d4",
                font: "#fff"
            }
            const type = createType(typeObj)
            expect(typeObj.main).toEqual(type.main)
            expect(typeObj.font).toEqual(type.font)
        })
    })

    describe("theme object", () => {
        it("should create a theme object by default values.", () => {
            expect(theme.type.primary.main).toEqual(DV.BLUE)
            expect(theme.color.red).toEqual(DV.RED)
        })
        
        it("should add theme object to the styled theme context.", () => {
            const wrapper = mountTheme(<H1 color="blue" />)
            const style = getComputedStyle(wrapper.find(H1).at(0).getDOMNode()).getPropertyValue("color")
            expect(style).toEqual(ColorHelper.getColor(theme.color.blue).rgb().toString())
        })
    })
})