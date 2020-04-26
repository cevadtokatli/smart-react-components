import React from "react"
import getStyle from "../test/getStyle"
import Column from "./Column"
import theme from "../theme"
import RATIOS from "../constants/grid/column"

describe("<Column />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Column />, Column)
        expect(style.getPropertyValue("padding-left")).toEqual(theme.grid.columnGap)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.grid.columnGap)
    })

    it("should add CSS references by col prop", () => {
        const style = getStyle(<Column col={3} />, Column)
        expect(style.getPropertyValue("flex")).toEqual(`0 0 ${RATIOS[3]}%`)
        expect(style.getPropertyValue("max-width")).toEqual(`${RATIOS[3]}%`)
    })

    it("should add CSS reference by offset prop", () => {
        const style = getStyle(<Column offset={3} />, Column)
        expect(style.getPropertyValue("left")).toEqual(`${RATIOS[3]}%`)
    })

    it("should add CSS reference by push prop", () => {
        const style = getStyle(<Column push={3} />, Column)
        expect(style.getPropertyValue("margin-left")).toEqual(`${RATIOS[3]}%`)
    })

    it("should add CSS reference by pull prop", () => {
        const style = getStyle(<Column pull={3} />, Column)
        expect(style.getPropertyValue("margin-left")).toEqual(`-${RATIOS[3]}%`)
    })
})