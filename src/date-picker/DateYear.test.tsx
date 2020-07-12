import React from "react"
import renderTheme from "../test/renderTheme"
import DateYear from "./DateYear"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"

describe("<DateYear />", () => {
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
            setSelectedDatePicker: jest.fn(),
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<DateYear {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})