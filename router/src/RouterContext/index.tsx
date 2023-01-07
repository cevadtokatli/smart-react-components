import { createContext, Dispatch } from 'react'
import { Action, State } from '../reducer'

export interface RouterContextState {
  dispatch: Dispatch<Action.All>
  modules: object
  state: State
}

const RouterContext = createContext<RouterContextState>(null)

export default RouterContext
