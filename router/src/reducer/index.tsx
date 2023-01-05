import { URL } from '../types'
import { generateURL, getFullpath } from '../util'

namespace Action {
  export const SET_ACTIVE_URL: string = 'SET_ACTIVE_URL'

  class SetActiveURL {
    type: typeof SET_ACTIVE_URL
    payload: string
  }

  export type All = SetActiveURL
}

export const setActiveURL = (payload: string) => ({
  type: Action.SET_ACTIVE_URL,
  payload,
})

export interface RouterReducerState {
  activatingURL: URL | null
  activeURL: URL
  cancelCallback: () => void | null
  percentage: number
}

export const generateInitialState = (fullpath = getFullpath()): RouterReducerState => ({
  activatingURL: null,
  activeURL: generateURL(fullpath),
  cancelCallback: null,
  percentage: 0,
})

const reducer = (state: RouterReducerState, action: Action.All): RouterReducerState => {
  switch (action.type) {
    case Action.SET_ACTIVE_URL:
      return {
        ...state,
        activeURL: generateURL(action.payload),
      }
    default:
      return state
  }
}

export default reducer
