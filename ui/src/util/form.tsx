import { FormValue } from '../types'

/**
 * Calculates margin X value of the form label.
 */
export const calculateFormLabelMarginX = (value: number) => (value / 1.0667).toFixed(5)

/**
 * Returns input value depending on active.
 */
export const getInputValue = (active: FormValue | FormValue[] | null): string => (
  (!Array.isArray(active) && typeof active !== 'undefined' && active !== null)
  || (Array.isArray(active) && active.length > 0)
)
  ? String(active)
  : ''
