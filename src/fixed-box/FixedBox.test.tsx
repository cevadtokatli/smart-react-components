import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import FixedBox from "./FixedBox"

describe("<FixedBox />", () => {
    let children
    let props

    beforeAll(() => {
        children = [
            <button key="button" onClick={e => (e.target as HTMLElement).click()}>Button</button>,
            <div key="box">Fixed Box</div>
        ]
    })

    beforeEach(() => {
        props = {
            status: false,
            setStatus: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<FixedBox {...props}>{children}</FixedBox>)
        expect(wrapper).toMatchSnapshot()
    })

    it("box should be rendered", () => {
        props.status = true
        const wrapper = mountTheme(<FixedBox {...props}>{children}</FixedBox>)
        expect(wrapper.find("div").exists()).toBe(true)
    })

    it("box should not be rendered", () => {
        const wrapper = mountTheme(<FixedBox {...props}>{children}</FixedBox>)
        expect(wrapper.find("div").exists()).toBe(false)
    })

    it("should call setStatus method", () => {
        const wrapper = mountTheme(<FixedBox {...props}>{children}</FixedBox>)
        wrapper.find("button").simulate("click")
        expect(props.setStatus).toHaveBeenCalled()
    })

    it("should call onRef method", () => {
        props.onRef = jest.fn()
        mountTheme(<FixedBox {...props}>{children}</FixedBox>)
        expect(props.onRef).toHaveBeenCalled()
    })
})