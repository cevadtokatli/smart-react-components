import Div from '@smart-react-components/core/Element/Div'
import WaveEffect from '@smart-react-components/ui/WaveEffect'
import React from 'react'
import styled from 'styled-components'

const Button = styled(Div).attrs({
  borderRadius: '.125rem',
  cursor: 'default',
  display: 'inline-block',
  marginBottom: '$length.3',
  marginRight: '$length.3',
  padding: '$length.2 $length.3', 
})``

export const Palette = () => (
  <Div display="flex" flexWrap="wrap">
    <WaveEffect><Button background="!dark" color="!light">Light</Button></WaveEffect>
    <WaveEffect palette="dark"><Button>Dark</Button></WaveEffect>
    <WaveEffect palette="primary"><Button>Primary</Button></WaveEffect>
    <WaveEffect palette="secondary"><Button>Secondary</Button></WaveEffect>
    <WaveEffect palette="success"><Button>Success</Button></WaveEffect>
    <WaveEffect palette="danger"><Button>Danger</Button></WaveEffect>
    <WaveEffect palette="warning"><Button>Warning</Button></WaveEffect>
    <WaveEffect palette="info"><Button>Info</Button></WaveEffect>
  </Div>
)

export const Duration = () => <WaveEffect duration={1000}><Button background="!dark" color="!light">Light</Button></WaveEffect>

