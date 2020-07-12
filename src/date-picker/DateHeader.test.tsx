import React from "react"
import renderTheme from "../test/renderTheme"
import mountTheme from "../test/mountTheme"
import DateHeader from "./DateHeader"
import * as DPT from "../constants/date-picker/date-picker-type"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"

describe("<DateHeader />", () => {
    let props

    beforeEach(() => {
        props = {
            date: {
                month: 6,
                selectedMonth: {
                    month: 6,
                    year: 2020
                },
                year: 2020,
                decade: [2020, 2030]
            },
            setDate: jest.fn(),
            selectedDatePicker: DPT.WEEK,
            setSelectedDatePicker: jest.fn(),
            orientation: false,
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<DateHeader {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it("should call setDate", () => {
        const wrapper = mountTheme(<DateHeader {...props} />)
        wrapper.find("svg").at(0).simulate("click")
        expect(props.setDate).toHaveBeenCalled()
    })

    it("should call setSelectedDatePicker", () => {
        const wrapper = mountTheme(<DateHeader {...props} />)
        wrapper.find(".src-date-picker-span-element").simulate("click")
        expect(props.setSelectedDatePicker).toHaveBeenCalled()
    })
})