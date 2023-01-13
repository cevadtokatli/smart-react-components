import H1 from '@smart-react-components/core/Element/H1'
import { CSSTransition } from '@smart-react-components/transition'
import { Overlay } from '@smart-react-components/ui'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    transition: opacity 400ms 0s ease-in-out;
    opacity: 1;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    transition: opacity 400ms 0s ease-in-out;
    opacity: 0;
  }
`

const Box = styled.div`
  align-self: flex-start;
  background: #fff;
  border-radius: .4rem;
  box-shadow: 0px 0px 15px 0 rgba(0,0,0,.2);
  color: #000;
  display: flex;
  fill: #000;
  flex: 1 1 auto;
  justify-content: space-between;
  max-width: 500px;
  padding: 1rem;

  ${H1} {
    margin-bottom: 0;
  }
`

export const Standard = () => {
  const [status, setStatus] = React.useState<boolean>(false)

  return (
    <> 
      <button onClick={() => setStatus(true)}>Standard Overlay</button>
      {status && (
        <Overlay onClick={() => setStatus(false)}>
          <Box>
            <H1>Standard Overlay</H1>
          </Box>
        </Overlay>
      )}
    </>
  ) 
}

export const Fade = () => {
  const [status, setStatus] = React.useState<boolean>(false)

  return (
    <> 
      <GlobalStyle />
      <button onClick={() => setStatus(true)}>Fade Overlay</button>
      <CSSTransition status={status} duration={400} className="fade">
        <Overlay onClick={() => setStatus(false)}>
          <Box>
            <H1>Fade Overlay</H1>
          </Box>
        </Overlay>
      </CSSTransition>
    </>
  ) 
}

export const Transparent = () => {
  const [status, setStatus] = React.useState<boolean>(false)

  return (
    <> 
      <button onClick={() => setStatus(true)}>Transparent Overlay</button>
      {status && (
        <Overlay onClick={() => setStatus(false)} hasBackground={false}>
          <Box>
            <H1>Transparent Overlay</H1>
          </Box>
        </Overlay>
      )}
    </>
  ) 
}

export const Blur = () => {
  const [status, setStatus] = React.useState<boolean>(false)

  return (
    <> 
      <button onClick={() => setStatus(true)}>Blur Overlay</button>
      {status && (
        <Overlay onClick={() => setStatus(false)} hasBackground={false} hasBlurEffect>
          <Box>
            <H1>Blur Overlay</H1>
          </Box>
        </Overlay>
      )}
    </>
  ) 
}
