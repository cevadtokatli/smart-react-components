import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Value } from '@smart-react-components/core/types'
import { useCallback, useState } from 'react'
import { TransitionAfterCallback } from '../types'

interface Props {
  active: Value
  afterHide: TransitionAfterCallback | null
}

interface Return {
  handleAfterHide: TransitionAfterCallback
  status: {
    active: Value
    isProcessing: boolean
  }
}

const useTransitionSwitch = ({ active, afterHide }: Props): Return => {
  const [status, setStatus] = useState(() => ({ active, isProcessing: false }))

  useChangeEffect(() => {
    if (!status.isProcessing) {
      setStatus({
        active,
        isProcessing: true,
      })
    }
  }, [active])

  const handleAfterHide = useCallback((el: JSX.Element) => {
    afterHide?.(el)
    setStatus({
      active,
      isProcessing: false,
    })
  }, [active])

  return { handleAfterHide, status }
}

export default useTransitionSwitch
