import { useContext } from 'react'
import RouterContext from '../RouterContext'

export default () => {
  const router = useContext(RouterContext)

  return router.state
}
