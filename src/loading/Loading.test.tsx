import React from "react"
import mountTheme from "../test/mountTheme"
import getStyle from "../test/getStyle"
import Loading from "../loading"
import theme from "../theme"

describe("<Loading />", () => {
    it("should add CSS references by default props", () => {
        const wrapper = mountTheme(<Loading />)
        const style = getComputedStyle(wrapper.find("svg").getDOMNode())
        expect(style.getPropertyValue("width")).toEqual(theme.loading.size.default)
        expect(style.getPropertyValue("height")).toEqual(theme.loading.size.default)
        const circleStyle = getComputedStyle(wrapper.find("circle").getDOMNode())
        expect(circleStyle.getPropertyValue("stroke")).toEqual(theme.type.primary.main)
    })

    it("should add CSS reference by type prop", () => {
        const style = getStyle(<Loading type="danger" />, "circle")
        expect(style.getPropertyValue("stroke")).toEqual(theme.type.danger.main)
    })

    it("should add CSS references by size prop", () => {
        const style = getStyle(<Loading size="small" />, Loading)
        expect(style.getPropertyValue("width")).toEqual(theme.loading.size.small)
        expect(style.getPropertyValue("height")).toEqual(theme.loading.size.small)
    })
})