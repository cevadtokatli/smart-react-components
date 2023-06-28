import { OptionalThemeAttributes } from './util'

interface DefaultI18NAttributes {
  am: string
  cancel: string
  ok: string
  save: string
  breadcrumb: {
    separator: string
  }
  days: {
    [key: number]: string
  }
  months: {
    [key: number]: string
  }
  pm: string
  progressBar: {
    prefix: string
    suffix: string
    separator: string
  }
}

type I18NAttributes = DefaultI18NAttributes & OptionalThemeAttributes

export default I18NAttributes
