import React from "react"
import getStyle from "../test/getStyle"
import Body from "./Body"
import theme from "../theme"

describe("<Body />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Body />, Body)
        expect(style.getPropertyValue("flex")).toEqual("1 1 auto")
        expect(style.getPropertyValue("overflow")).toEqual("auto")
        expect(style.getPropertyValue("border-top")).toEqual("")
        expect(style.getPropertyValue("border-bottom")).toEqual("")
    })

    it("should add CSS reference by topBorder prop", () => {
        const style = getStyle(<Body topBorder={true} />, Body)
        expect(style.getPropertyValue("border-top")).toEqual(`1px solid ${theme.modal.modalContentBorderColor}`)

    })

    it("should add CSS reference by bottomBorder prop", () => {
        const style = getStyle(<Body bottomBorder={true} />, Body)
        expect(style.getPropertyValue("border-bottom")).toEqual(`1px solid ${theme.modal.modalContentBorderColor}`)

    })
})