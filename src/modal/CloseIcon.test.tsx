import React from "react"
import mountTheme from "../test/mountTheme"
import CloseIcon from "./CloseIcon"

describe("<CloseIcon />", () => {
    it("should call setStatus method", () => {
        const setStatus = jest.fn()
        const wrapper = mountTheme(<CloseIcon setStatus={setStatus} />)
        wrapper.find("svg").simulate("click")
        expect(setStatus).toHaveBeenCalled()
    })
})