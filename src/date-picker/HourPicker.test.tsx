import React from "react"
import renderTheme from "../test/renderTheme"
import HourPicker from "./HourPicker"
import * as HT from "../constants/date-picker/hour-type"
import DEFAULT_LANGUAGE from "../constants/date-picker/default-language"

describe("<HourPicker />", () => {
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
            setValue: jest.fn(),
            hourType: HT.$12,
            orientation: false,
            lang: DEFAULT_LANGUAGE
        }
    })

    it("should match snapshot", () => {
        const wrapper = renderTheme(<HourPicker {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})