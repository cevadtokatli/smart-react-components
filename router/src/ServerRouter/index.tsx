import { JSXChildren } from '@smart-react-components/core/types'
import React from 'react'
import reducer, { generateInitialState } from '../reducer'
import RouterContext from '../RouterContext'
import { RouteModule } from '../types'

export interface Props {
  children: JSXChildren
  modules: RouteModule[]
  url: string
}

const ServerRouter: React.FC<Props> = ({ children, modules, url }) => {
  const [state, dispatch] = React.useReducer(reducer, generateInitialState(url))

  return (
    <RouterContext.Provider value={{ state, dispatch }}>
      { children }
    </RouterContext.Provider>
  )
}

export default ServerRouter
