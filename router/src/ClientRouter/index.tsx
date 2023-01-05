import { JSXChildren } from '@smart-react-components/core/types'
import { addEventListener, removeEventListener } from '@smart-react-components/core/util/dom'
import React from 'react'
import reducer, { generateInitialState, setActiveURL } from '../reducer'
import RouterContext from '../RouterContext'
import { RouteModule } from '../types'
import { getFullpath } from '../util'

declare global {
  interface History {
    push: (to: string) => void
    redirect: (to: string, isNewPage?: boolean) => void
    replace: (to: string) => void
  }
}

export interface Props {
  children: JSXChildren
  modules: RouteModule[]
  params?: any
  progressBar?: JSX.Element
}

const ClientRouter: React.FC<Props> = ({ children, modules, params, progressBar }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState())

  const handlePopstate = () => dispatch(setActiveURL(getFullpath()))

  React.useEffect(() => {
    history.redirect = (to, isNewPage) => {
      if (isNewPage) {
        window.open(to, '_blank')
      } else {
        window.location.href = to
      }
    }

    addEventListener(window, ['popstate'], handlePopstate)

    return () => {
      removeEventListener(window, ['popstate'], handlePopstate)
    }
  }, [])

  React.useEffect(() => {
    history.push = to => {
      history.pushState({}, null, to)
      dispatch(setActiveURL(getFullpath()))
    }

    history.replace = to => {
      history.replaceState({}, null, to)
      dispatch(setActiveURL(getFullpath()))
    }
  }, [state.activeURL])

  return (
    <RouterContext.Provider value={{ state, dispatch }}>
      { progressBar && React.cloneElement(progressBar, { value: state.percentage }) }
      { children }
    </RouterContext.Provider>
  )
}

export default ClientRouter
