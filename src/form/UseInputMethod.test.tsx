import React from "react"
import mountTheme from "../test/mountTheme"
import useInputMethod from "./UseInputMethod"

describe("UseInputMethod", () => {
    let props
    let hook

    const Component = () => {
        hook = useInputMethod<string, HTMLInputElement>(props)
        return <input onChange={hook.props.onChange} onFocus={hook.props.onFocus} onBlur={hook.props.onBlur} />
    }

    beforeEach(() => {
        props = {
            disabled: false,
            value: "",
            setValue: jest.fn(),
            onChange: jest.fn(),
            onFocus: jest.fn(),
            onBlur: jest.fn()
        }
    })

    describe("onChange", () => {
        describe("not disabled", () => {
            beforeEach(() => {
                const wrapper = mountTheme(<Component />)
                wrapper.find("input").simulate("change", {target:{value:"value"}})
            })

            it("should call setValue", () => {
                expect(props.setValue).toHaveBeenCalled()
            })

            it("should call onChange", () => {
                expect(props.onChange).toHaveBeenCalled()
            })
        })

        describe("disabled", () => {
            beforeEach(() => {
                props.disabled = true
                const wrapper = mountTheme(<Component />)
                wrapper.find("input").simulate("change", {target:{value:"value"}})
            })

            it("should call setValue", () => {
                expect(props.setValue).not.toHaveBeenCalled()
            })

            it("should call onChange", () => {
                expect(props.onChange).not.toHaveBeenCalled()
            })
        })
    })

    describe("onFocus", () => {
        describe("not disabled", () => {            
            beforeEach(() => {
                const wrapper = mountTheme(<Component />)
                wrapper.find("input").simulate("focus")
            })

            it("should call onFocus", () => {
                expect(props.onFocus).toHaveBeenCalled()
            })

            it("isFocused should be true", () => {
                expect(hook.isFocused).toBe(true)
            })
        })

        describe("disabled", () => {
            beforeEach(() => {
                props.disabled = true
                const wrapper = mountTheme(<Component />)
                wrapper.find("input").simulate("focus")
            })

            it("should not call onFocus", () => {
                expect(props.onFocus).not.toHaveBeenCalled()
            })

            it("isFocused should be false", () => {
                expect(hook.isFocused).toBe(false)
            })
        })
    })

    describe("onBlur", () => {
        beforeEach(() => {
            const wrapper = mountTheme(<Component />)
            wrapper.find("input").simulate("blur")
        })

        it("should call onBlur", () => {
            expect(props.onBlur).toHaveBeenCalled()
        })

        it("isFocused should be false", () => {
            expect(hook.isFocused).toBe(false)
        })
    })
})