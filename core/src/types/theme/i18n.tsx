import { OptionalThemeAttributes } from './util'

interface DefaultI18NAttributes {
  cancel: string
  ok: string
  breadcrumb: {
    separator: string
  }
  progressBar: {
    prefix: string
    suffix: string
    separator: string
  }
}

type I18NAttributes = DefaultI18NAttributes & OptionalThemeAttributes

export default I18NAttributes
