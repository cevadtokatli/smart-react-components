import {DateHourObject, Value} from "../types/date-picker"
import * as PT from "../constants/date-picker/picker-type"
import * as HT from "../constants/date-picker/hour-type"
import {MIN_YEAR, MAX_YEAR} from "../constants/date-picker/limit"

export default class DatePickerHelper {
    /**
     * Gets day count of the given month.
     * 
     * @param month 
     * @param year 
     */
    static getDayCount(month:number, year:number): number {
        switch(month) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31
            case 3:
            case 5:
            case 8:
            case 10:
                return 30
            case 1:
                return this.isLeapYear(year) ? 29 : 28;
        }
    }

    /**
     * Checks if the given year is a leap year or not.
     * 
     * @param year 
     */
    static isLeapYear(year:number): boolean {
        return year % 4 == 0
    }

    /**
     * Gets decade by the given year.
     * 
     * @param year 
     */
    static getDecade(year:number): number[] {
        let start = year

        while(start % 10 != 0)
            start -= 1

        return [start, start+10]
    }

    /**
     * Gets week days as an array.
     * 
     * @param startDay
     */
    static getWeekDays(startDay:number): number[] {
        const arr = [0,1,2,3,4,5,6]
        return [...arr.slice(startDay, 7), ...arr.slice(0, startDay)]
    }

    /**
     * Gets value as object.
     * 
     * @param value
     * @param pickerType
     * @param hourType
     */
    static getValueObject(value:Value, pickerType:number, hourType:number): DateHourObject {
        let result: DateHourObject = {}
        
        if(typeof value === "string" || value.constructor == Date) {
            let date
            if(typeof value === "string" && pickerType == PT.HOUR)
                date =  new Date(`1/1/2020 ${value}`)
            else
                date = typeof value === "string" ? new Date(value) : (value as Date)

            if(!isNaN(date.getTime())) {
                if(pickerType != PT.HOUR)
                    result.date = {
                        day: date.getDate(),
                        weekDay: date.getDay(),
                        month: date.getMonth(),
                        year: date.getFullYear(),
                        decade: DatePickerHelper.getDecade(date.getFullYear())
                    }
                
                if(pickerType != PT.DATE) {
                    result.hour = {
                        hour: date.getHours(),
                        minute: date.getMinutes()
                    }
                    
                    if(hourType == HT.$12) {
                        if(result.hour.hour < 12) {
                            result.hour.am = true
                            if(result.hour.hour == 0)
                                result.hour.hour = 12
                        } else {
                            result.hour.am = false
                            if(result.hour.hour > 12)
                                result.hour.hour -= 12
                        }
                    }
                }
            } else
                result = null
        } else {
            result = value as DateHourObject

            try {
                if(pickerType & (PT.DATE|PT.DATE_HOUR)) {
                    if(pickerType == PT.DATE)
                        delete result.hour

                    result.date.year = Math.max(MIN_YEAR, result.date.year)
                    result.date.year = Math.min(MAX_YEAR, result.date.year)
                    result.date.decade = DatePickerHelper.getDecade(result.date.year)
                    result.date.month = Math.max(0, result.date.month)
                    result.date.month = Math.min(11, result.date.month)
                    result.date.day = Math.max(1, result.date.day)
                    result.date.day = Math.min(DatePickerHelper.getDayCount(result.date.month, result.date.year), result.date.day)
                    result.date.weekDay = new Date(result.date.year, result.date.month, result.date.day).getDay()
                }

                if(pickerType & (PT.HOUR|PT.DATE_HOUR)) {
                    if(pickerType == PT.HOUR)
                        delete result.date

                    result.hour.minute = Math.max(0, result.hour.minute)
                    result.hour.minute = Math.min(59, result.hour.minute)

                    if(hourType == HT.$12) {
                        result.hour.am = result.hour.am ? true : false
                        result.hour.hour = Math.max(1, result.hour.hour)
                        result.hour.hour = Math.min(12, result.hour.hour)
                    } else {
                        result.hour.hour = Math.max(0, result.hour.hour)
                        result.hour.hour = Math.min(23, result.hour.hour)
                    }

                }
            } catch(ignored) {
                result = null
            }
        }
    
        return result
    }
}