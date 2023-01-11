import { JSXChildren } from '@smart-react-components/core/types'
import React from 'react'
import reducer, { generateInitialState } from '../reducer'
import RouterContext from '../RouterContext'
import RoutesContext from '../RoutesContext'
import { RouteModule } from '../types'

export interface Props {
  children: JSXChildren
  modules: object
  routes: RouteModule[]
  url: string
}

const ServerRouter: React.FC<Props> = ({ children, modules, routes, url }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState(url))

  return (
    <RouterContext.Provider value={{ state, dispatch, modules }}>
      <RoutesContext.Provider value={routes}>
        { children }
      </RoutesContext.Provider>
    </RouterContext.Provider>
  )
}

export default ServerRouter