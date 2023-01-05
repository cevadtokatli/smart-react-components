import React from 'react'

export interface Props {
  isNewTab?: boolean
  to: string
}

const Redirect: React.FC<Props> = ({ isNewTab, to }) => {
  React.useEffect(() => {
    history.redirect(to, isNewTab)
  }, [to])

  return null
}

export default Redirect
