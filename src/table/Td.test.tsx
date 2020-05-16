import React from "react"
import getStyle from "../test/getStyle"
import Td from "./Td"

describe("<Td />", () => {
    it("should add CSS references by empty prop", () => {
        const style = getStyle(<table><tbody><tr><Td empty={true} /></tr></tbody></table>, "td")
        expect(style.getPropertyValue("width")).toEqual("0px")
        expect(style.getPropertyValue("height")).toEqual("0px")
        expect(style.getPropertyValue("padding")).toEqual("0px")
        expect(style.getPropertyValue("margin")).toEqual("0px")
        expect(style.getPropertyValue("border")).toEqual("0px")
    })
})