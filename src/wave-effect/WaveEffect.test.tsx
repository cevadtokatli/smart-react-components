import React from "react"
import mountTheme from "../test/mountTheme"
import WaveEffect from "./WaveEffect"
import DOMHelper from "../helper/DOMHelper"

describe("<WaveEffect />", () => {
    it("should include data-src-wave-effect attribute", () => {
        const wrapper = mountTheme(<WaveEffect><div /></WaveEffect>)
        expect(wrapper.find(`div[data-src-wave-effect="0"]`).exists()).toBe(true)
    })

    it("should call mouseDown method", () => {
        const mouseDown = jest.fn()
        DOMHelper.isMobile = false
        const wrapper = mountTheme(<WaveEffect><div onMouseDown={mouseDown} /></WaveEffect>)
        wrapper.find("div").simulate("mouseDown", {button:2})
        expect(mouseDown).toHaveBeenCalled()
    })

    it("should call touchStart method", () => {
        const touchStart = jest.fn()
        DOMHelper.isMobile = true
        const wrapper = mountTheme(<WaveEffect><div onTouchStart={touchStart} /></WaveEffect>)
        wrapper.find("div").simulate("touchStart", {button:2})
        expect(touchStart).toHaveBeenCalled()
    })
})