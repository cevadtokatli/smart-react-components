import React from 'react'
import useRouter from '../useRouter'

export interface Props {
  to: string
}

const Replace: React.FC<Props> = ({ to }) => {
  const { replace } = useRouter()

  React.useEffect(() => {
    replace(to)
  }, [to])

  return null
}

export default Replace
