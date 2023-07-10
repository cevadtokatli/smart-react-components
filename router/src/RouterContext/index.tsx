import { createContext, Dispatch } from 'react'
import { Action, State } from '../reducer'

export interface RouterContextState {
  dispatch: Dispatch<Action.All>
  fallback?: JSX.Element
  modules: object
  push: (to: string) => void
  redirect: (to: string, isNewPage?: boolean) => void
  replace: (to: string) => void
  state: State
}

const RouterContext = createContext<RouterContextState>(null)

export default RouterContext
