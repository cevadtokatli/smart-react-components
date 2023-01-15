import Button from '@smart-react-components/core/Element/Button'
import Div from '@smart-react-components/core/Element/Div'
import FixedBox from '@smart-react-components/ui/FixedBox'
import React from 'react'
import styled from 'styled-components'

const Box = styled(Div).attrs({
  background: '$color.white',
  border: 'solid 1px $color.gray200',
  padding: '$length.2',
})`` 

export const Example = () => {
  const [status, setStatus] = React.useState(() => false)

  return (
    <FixedBox status={status} setStatus={setStatus}>
      <button>Button</button>
      <Box>Fixed Box</Box>
    </FixedBox>
  )
}
