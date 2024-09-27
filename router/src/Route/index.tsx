import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import React from 'react'
import RouterContext from '../RouterContext'
import { Match, Path, URL } from '../types'
import { generateMatch } from '../util'

export interface Props {
  children: JSX.Element | ((params: { match: Match | null, url: URL }) => JSX.Element)
  isExact?: boolean
  path: Path
}

const Route: React.FC<Props> = ({ children, isExact, path }) => {
  const router = React.useContext(RouterContext).state
  const [match, setMatch] = React.useState(() => generateMatch(router.activeURL.pathname, path, isExact))

  useChangeEffect(() => setMatch(generateMatch(router.activeURL.pathname, path, isExact)), [router.activeURL.fullpath])

  if (typeof children !== 'function' && match) {
    return (
      <React.Fragment key={match.key}>
        { React.cloneElement(children, { match, url: router.activeURL }) }
      </React.Fragment>
    )
  }

  if (typeof children === 'function') {
    return children({ match, url: router.activeURL })
  }

  return null
}

export default Route
