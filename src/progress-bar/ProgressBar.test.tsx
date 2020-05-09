import React from "react"
import renderTheme from "../test/renderTheme"
import ProgressBar from "./ProgressBar"

describe("<ProgressBar />", () => {
    it("should match snapshot", () => {
        const wrapper = renderTheme(<ProgressBar percentage={50} showPlaceholder={true} />)
        expect(wrapper).toMatchSnapshot()
    })
})