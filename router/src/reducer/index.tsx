import { CancelCallback, URL } from '../types'
import { generateURL } from '../util'

export namespace Action {
  export const SET_ACTIVE_URL: string = 'SET_ACTIVE_URL'
  export const SET_ACTIVATING_URL: string = 'SET_ACTIVATING_URL'
  export const SET_CANCEL_CALLBACK: string = 'SET_CANCEL_CALLBACK'
  export const SET_PERCENTAGE: string = 'SET_PERCENTAGE'

  class SetActiveURL {
    type: typeof SET_ACTIVE_URL
    payload: URL
  }

  class SetActivatingURL {
    type: typeof SET_ACTIVATING_URL
    payload: {
      key: number
      url: URL
    }
  }

  class SetCancelCallback {
    type: typeof SET_CANCEL_CALLBACK
    payload: {
      callback: CancelCallback
      key: number
    }
  }

  class SetPercentage {
    type: typeof SET_PERCENTAGE
    payload: {
      key: number
      value: number
    }
  }

  export type All = SetActiveURL | SetActivatingURL | SetCancelCallback | SetPercentage
}

export const setActiveURL = (payload: URL) => ({
  type: Action.SET_ACTIVE_URL,
  payload,
})

export const setActivatingURL = (payload: { key: number, url: URL }) => ({
  type: Action.SET_ACTIVATING_URL,
  payload,
})

export const setCancelCallback = (payload: { callback: CancelCallback, key: number }) => ({
  type: Action.SET_CANCEL_CALLBACK,
  payload,
})

export const setPercentage = (payload: { key: number, value: number }) => ({
  type: Action.SET_PERCENTAGE,
  payload,
})

export interface State {
  activatingURL: URL | null
  activeURL: URL
  isHashRouter: boolean
  key: number | null
  cancelCallback: CancelCallback | null
  percentage: number
}

export const generateInitialState = (fullpath: string, isHashRouter: boolean): State => ({
  activatingURL: null,
  activeURL: generateURL(fullpath),
  isHashRouter,
  key: null,
  cancelCallback: null,
  percentage: 0,
})

const reducer = (state: State, action): State => {
  switch (action.type) {
    case Action.SET_ACTIVE_URL:
      return {
        activeURL: action.payload,
        activatingURL: null,
        isHashRouter: state.isHashRouter,
        key: null,
        cancelCallback: null,
        percentage: 0,
      }
    case Action.SET_ACTIVATING_URL:
      state.cancelCallback?.()

      return {
        ...state,
        activatingURL: action.payload.url,
        key: action.payload.key,
        cancelCallback: null,
        percentage: 0,
      }
    case Action.SET_CANCEL_CALLBACK:
      if (action.payload.key === state.key) {
        return {
          ...state,
          cancelCallback: action.payload.callback,
        }
      }

      return state
    case Action.SET_PERCENTAGE:
      if (action.payload.key === state.key) {
        if (action.payload.value === 100) {
          return reducer(state, { type: Action.SET_ACTIVE_URL, payload: state.activatingURL } as any)
        }

        return {
          ...state,
          percentage: action.payload.value,
        }
      }

      return state
    default:
      return state
  }
}

export default reducer
