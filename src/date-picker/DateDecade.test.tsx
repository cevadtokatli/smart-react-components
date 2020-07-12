import React from "react"
import renderTheme from "../test/renderTheme"
import DateDecade from "./DateDecade"

describe("<DateDecade />", () => {
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
            setSelectedDatePicker: jest.fn()
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<DateDecade {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})