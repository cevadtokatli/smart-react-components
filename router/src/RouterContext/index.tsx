import { createContext, Dispatch } from 'react'
import { RouterReducerState } from '../reducer'

export interface RouterContextState {
  dispatch: Dispatch<any>
  state: RouterReducerState
}

const RouterContext = createContext<RouterContextState>(null)

export default RouterContext
