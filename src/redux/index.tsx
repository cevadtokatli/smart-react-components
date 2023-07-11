import { configureStore } from '@reduxjs/toolkit'
import detail, { DetailState } from './detail'
import list, { ListState } from './list'

export interface State {
  detail: DetailState
  list: ListState
}

export default () => configureStore({
  reducer: {
    detail,
    list,
  },
})
