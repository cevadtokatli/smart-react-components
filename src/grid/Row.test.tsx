import React from "react"
import getStyle from "../test/getStyle"
import Row from "./Row"
import theme from "../theme"

describe("<Row />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Row />, Row)
        expect(style.getPropertyValue("margin-left")).toEqual(`-${theme.grid.columnGap}`)
        expect(style.getPropertyValue("margin-right")).toEqual(`-${theme.grid.columnGap}`)
    })
})