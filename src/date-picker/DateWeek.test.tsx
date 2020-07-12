import React from "react"
import renderTheme from "../test/renderTheme"
import DateWeek from "./DateWeek"
import * as WSD from "../constants/date-picker/week-start-day"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"

describe("<DateWeek />", () => {
    let props

    beforeEach(() => {
        props = {
            valueObject: {
                date:  {
                    month: 6,
                    selectedMonth: {
                        month: 6,
                        year: 2020
                    },
                    year: 2020,
                    decade: [2020, 2030]
                },
                hour: {
                    hour: 6,
                    minute: 30,
                    am: false
                }
            },
            date: {
                month: 6,
                selectedMonth: {
                    month: 6,
                    year: 2020
                },
                year: 2020,
                decade: [2020, 2030]
            },
            setValue: jest.fn(),
            weekStartDay: WSD.MONDAY,
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<DateWeek {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})