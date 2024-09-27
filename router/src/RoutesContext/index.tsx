import { createContext } from 'react'
import { RouteModule } from '../types'

const RoutesContext = createContext<RouteModule[] | null>(null)

export default RoutesContext
