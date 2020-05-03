import React from "react"
import getStyle from "../test/getStyle"
import InputLabel from "./InputLabel"
import theme from "../theme"

describe("<InputLabel />", () => {
    it("should add CSS reference by default props", () => {
        const style = getStyle(<InputLabel disabled={false} />, InputLabel)
        expect(style.getPropertyValue("margin-bottom")).toEqual(theme.length["2"])
    })

    it("should add CSS reference by disabled prop", () => {
        const style = getStyle(<InputLabel disabled={true} />, InputLabel)
        expect(style.getPropertyValue("opacity")).toEqual(`${theme.form.disabledOpacity}`)
    })
})