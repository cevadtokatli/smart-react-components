import React from "react"
import mountTheme from "../test/mountTheme"
import useMultiple from "./UseMultiple"

describe("UseMultiple", () => {
    let props
    let hook

    const Component = () => {
        hook = useMultiple(props)
        return null
    }

    beforeEach(() => {
        props = {
            value: null,
            active: null,
            setActive: null,
            checked: null,
            setChecked: null,
            disabled: false,
            onChange: jest.fn()
        }
    })

    describe("onChange", () => {
        it("should call onChange", () => {
            mountTheme(<Component />)
            hook.change({target:{checked:true}})
            expect(props.onChange).toHaveBeenCalled()
        })
    
        it("should not call onChange", () => {
            props.disabled = true
            mountTheme(<Component />)
            hook.change({target:{checked:true}})
            expect(props.onChange).not.toHaveBeenCalled()
        })
    })

    describe("active", () => {
        beforeEach(() => {
            props.value = "value"
            props.setActive = jest.fn()
        })

        it("checked$ should be true", () => {
            props.active = ["value"]
            mountTheme(<Component />)
            expect(hook.checked$).toBe(true)
        })

        it("checked$ should be false", () => {
            props.active = []
            mountTheme(<Component />)
            expect(hook.checked$).toBe(false)
        })
    })

    describe("checked", () => {
        beforeEach(() => {
            props.setChecked = jest.fn()
        })

        it("checked$ should be true", () => {
            props.checked = true
            mountTheme(<Component />)
            expect(hook.checked$).toBe(true)
        })

        it("checked$ should be false", () => {
            props.checked = false
            mountTheme(<Component />)
            expect(hook.checked$).toBe(false)
        })
    })
})