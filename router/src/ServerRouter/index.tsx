import { JSXChildren } from '@smart-react-components/core/types'
import React from 'react'
import reducer, { generateInitialState } from '../reducer'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { RouteModule } from '../types'

export interface Props {
  children: JSXChildren
  fallback?: JSX.Element
  modules: object
  routes: RouteModule[]
  url: string
}

const ServerRouter: React.FC<Props> = ({ children, fallback, modules, routes, url }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState(url, false))

  const push = React.useCallback((to: string) => {}, [])

  const replace = React.useCallback((to: string) => {}, [])

  const redirect = React.useCallback((to: string, isNewPage?: boolean) => {}, [])

  return (
    <RouterContext.Provider value={{ state, dispatch, fallback, modules, push, redirect, replace }}>
      <RoutesContext.Provider value={routes}>
        { children }
      </RoutesContext.Provider>
    </RouterContext.Provider>
  )
}

export default ServerRouter
