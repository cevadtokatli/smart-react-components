import Div from '@smart-react-components/core/Element/Div'
import useRouter from '@smart-react-components/router/useRouter'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

const TopBar: React.FC<{ value?: number }> = ({ value }) => {
  const { activatingURL } = useRouter()

  return (
    <Div
      left={0}
      pointerEvents="none"
      position="fixed"
      right={0}
      top={0}
      zIndex="9999"
      {...(!activatingURL && {
        visibility: 'hidden',
      })}
    >
      <ProgressBar value={value} />
    </Div>
  )
}

export default TopBar
