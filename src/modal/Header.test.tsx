import React from "react"
import getStyle from "../test/getStyle"
import Header from "./Header"
import theme from "../theme"

describe("<Header />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Header />, Header)
        expect(style.getPropertyValue("flex")).toEqual("0 0 auto")
        expect(style.getPropertyValue("display")).toEqual("flex")
        expect(style.getPropertyValue("justify-content")).toEqual("space-between")
        expect(style.getPropertyValue("align-items")).toEqual("center")
        expect(style.getPropertyValue("border-bottom")).toEqual(`1px solid ${theme.modal.modalContentBorderColor}`)
    })

    it("should add CSS reference by bottomBorder prop", () => {
        const style = getStyle(<Header bottomBorder={false} />, Header)
        expect(style.getPropertyValue("border-bottom")).toEqual("")

    })
})