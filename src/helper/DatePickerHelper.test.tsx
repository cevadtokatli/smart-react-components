import DatePickerHelper from "./DatePickerHelper"
import * as WSD from "../constants/date-picker/week-start-day"
import * as PT from "../constants/date-picker/picker-type"
import * as HT from "../constants/date-picker/hour-type"

describe("DatePickerHelper", () => {
    it("should get day count", () => {
        expect(DatePickerHelper.getDayCount(6, 2020)).toEqual(31)
    })

    it("should check if it is leap year", () => {
        expect(DatePickerHelper.isLeapYear(2020)).toEqual(true)
    })

    it("should get decade", () => {
        expect(DatePickerHelper.getDecade(2020)).toEqual([2020, 2030])
    })

    it("should get week days", () => {
        expect(DatePickerHelper.getWeekDays(WSD.MONDAY)).toEqual([1,2,3,4,5,6,0])
    })

    it("should get value object", () => {
        expect(DatePickerHelper.getValueObject("07/10/2020 4:33 AM", PT.DATE_HOUR, HT.$12)).toEqual({
            date: {
                day: 10,
                weekDay: 5,
                month: 6,
                year: 2020,
                decade: [2020, 2030]
            },
            hour: {
                hour: 4,
                minute: 33,
                am: true
            }
        })
    })
})