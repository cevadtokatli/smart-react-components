import { ChangeEvent, FormEvent } from 'react'

export interface ChangeEvents {
  onChange?: (e: ChangeEvent<HTMLElement>) => void
  onInput?: (e: FormEvent<HTMLElement>) => void
}

const changeEvents = [
  'onChange',
  'onInput',
]

export default changeEvents
