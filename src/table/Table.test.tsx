import React from "react"
import getStyle from "../test/getStyle"
import Table from "./Table"
import theme from "../theme"
import ColorHelper from "../helper/ColorHelper"

describe("<Table />", () => {
    let children
    
    beforeAll(() => {
        children = <tbody><tr><td /></tr></tbody>
    })

    it("should add CSS references by default props", () => {
        const style = getStyle(<Table>{children}</Table>, "td")
        expect(style.getPropertyValue("padding-left")).toEqual(theme.table.padding.default)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.table.padding.default)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.table.padding.default)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.table.padding.default)
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.light.table.border)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.light.table.background))
        expect(style.getPropertyValue("border-left-width")).toEqual("0px")
        expect(style.getPropertyValue("border-right-width")).toEqual("0px")
        expect(style.getPropertyValue("border-top-width")).toEqual("1px")
        expect(style.getPropertyValue("border-bottom-width")).toEqual("1px")
        expect(style.getPropertyValue("position")).toEqual("sticky")
    })

    it("should add CSS references by size prop", () => {
        const style = getStyle(<Table size="small">{children}</Table>, "td")
        expect(style.getPropertyValue("padding-left")).toEqual(theme.table.padding.small)
        expect(style.getPropertyValue("padding-right")).toEqual(theme.table.padding.small)
        expect(style.getPropertyValue("padding-top")).toEqual(theme.table.padding.small)
        expect(style.getPropertyValue("padding-bottom")).toEqual(theme.table.padding.small)
    })

    it("should add CSS references by type prop", () => {
        const style = getStyle(<Table type="primary">{children}</Table>, "td")
        expect(style.getPropertyValue("border-color")).toEqual(theme.type.primary.table.border)
        expect(style.getPropertyValue("background")).toEqual(ColorHelper.convertToRgb(theme.type.primary.table.background))
    })

    it("should add CSS references by borderX prop", () => {
        const style = getStyle(<Table borderX={true}>{children}</Table>, "td")
        expect(style.getPropertyValue("border-left-width")).toEqual("1px")
        expect(style.getPropertyValue("border-right-width")).toEqual("1px")
    })

    it("should add CSS references by borderY prop", () => {
        const style = getStyle(<Table borderY={false}>{children}</Table>, "td")
        expect(style.getPropertyValue("border-top-width")).toEqual("0px")
        expect(style.getPropertyValue("border-bottom-width")).toEqual("0px")
    })

    it("should add CSS reference by sticky prop", () => {
        const style = getStyle(<Table sticky={false}>{children}</Table>, "td")
        expect(style.getPropertyValue("position")).toEqual("")
    })
})