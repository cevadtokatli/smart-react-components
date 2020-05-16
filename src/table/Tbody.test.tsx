import React from "react"
import getStyle from "../test/getStyle"
import Tbody from "./Tbody"

describe("<Tbody />", () => {
    it("should add CSS references by borderless prop", () => {
        const style = getStyle(<table><Tbody borderless={true}><tr><td /></tr></Tbody></table>, "td")
        expect(style.getPropertyValue("border-top-width")).toEqual("0")
        expect(style.getPropertyValue("border-bottom-width")).toEqual("0")
    })
})