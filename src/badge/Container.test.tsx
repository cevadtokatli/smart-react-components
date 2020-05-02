import React from "react"
import getStyle from "../test/getStyle"
import Container from "./Container"
import theme from "../theme"

describe("<Container />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Container />, Container)
        expect(style.getPropertyValue("margin-left")).toEqual(`-${theme.badge.margin.x}`)
        expect(style.getPropertyValue("margin-right")).toEqual(`-${theme.badge.margin.x}`)
        expect(style.getPropertyValue("margin-top")).toEqual("")
        expect(style.getPropertyValue("margin-bottom")).toEqual("")
    })

    it("should add CSS references by space prop", () => {
        const style = getStyle(<Container space={true} />, Container)
        expect(style.getPropertyValue("margin-left")).toEqual(`-${theme.badge.margin.y}`)
        expect(style.getPropertyValue("margin-right")).toEqual(`-${theme.badge.margin.y}`)
    })
})