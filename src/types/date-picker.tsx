export interface Language {
    days: string[]
    months: string[]
    am: string
    pm: string
    cancel: string
    save: string
}

export interface DateObject {
    day: number
    weekDay?: number
    month: number
    year: number
    decade?: number[]
}

export interface HourObject {
    hour: number
    minute: number
    am?: boolean
}

export interface DateHourObject {
    date?: DateObject
    hour?: HourObject
}

export interface SelectedDateObject {
    month: number
    selectedMonth: {
        month: number
        year: number
    }
    year: number
    decade: number[]
}

export type Value = string|Date|DateHourObject