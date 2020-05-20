import React from "react"
import getStyle from "../test/getStyle"
import Footer from "./Footer"
import theme from "../theme"

describe("<Footer />", () => {
    it("should add CSS references by default props", () => {
        const style = getStyle(<Footer />, Footer)
        expect(style.getPropertyValue("flex")).toEqual("0 0 auto")
        expect(style.getPropertyValue("border-top")).toEqual("")
    })

    it("should add CSS reference by topBorder prop", () => {
        const style = getStyle(<Footer topBorder={true} />, Footer)
        expect(style.getPropertyValue("border-top")).toEqual(`1px solid ${theme.modal.modalContentBorderColor}`)
    })
})