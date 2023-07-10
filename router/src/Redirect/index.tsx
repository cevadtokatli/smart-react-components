import React from 'react'
import useRouter from '../useRouter'

export interface Props {
  isNewTab?: boolean
  to: string
}

const Redirect: React.FC<Props> = ({ isNewTab, to }) => {
  const { redirect } = useRouter()

  React.useEffect(() => {
    redirect(to, isNewTab)
  }, [to])

  return null
}

export default Redirect
