/**
 * Gets day count of month.
 */
export const getDayCount = (date: Date): number => {
  switch (date.getMonth()) {
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
      return isLeapYear(date) ? 29 : 28
  }
}

/**
 * Gets first year of decade.
 */
export const getDecade = (date: Date): number => {
  const year = date.getFullYear()
  return year - (year % 10)
}

/**
 * Checks if year is leap year.
 */
export const isLeapYear = (date: Date): boolean => date.getFullYear() % 4 === 0
