import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"
import Buttons from "./Buttons"

describe("<Buttons />", () => {
    let props

    beforeEach(() => {
        props = {
            value: new Date(),
            setValue: jest.fn(),
            initialValue: new Date(),
            setInitialValue: jest.fn(),
            onSave: jest.fn(),
            onCancel: jest.fn(),
            type: "primary",
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<Buttons {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    describe("cancel button", () => {
        let btn

        beforeEach(() => {
            const wrapper = mountTheme(<Buttons {...props} />)
            btn = wrapper.find("a").at(0)
        })

        it("should call onCancel", () => {
            btn.simulate("click")
            expect(props.onCancel).toHaveBeenCalled()
        })

        it("should call setValue", () => {
            btn.simulate("click")
            expect(props.setValue).toHaveBeenCalled()
        })

        it("should render i18n property correctly", () => {
            expect(btn.text()).toEqual(props.lang.cancel)
        })
    })

    describe("save button", () => {
        let btn

        beforeEach(() => {
            const wrapper = mountTheme(<Buttons {...props} />)
            btn = wrapper.find("a").at(1)
        })

        it("should call onSave", () => {
            btn.simulate("click")
            expect(props.onSave).toHaveBeenCalled()
        })

        it("should call setInitialValue", () => {
            btn.simulate("click")
            expect(props.setInitialValue).toHaveBeenCalled()
        })

        it("should render i18n property correctly", () => {
            expect(btn.text()).toEqual(props.lang.save)
        })
    })
})