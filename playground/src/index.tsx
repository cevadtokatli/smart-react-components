import createTheme from '@smart-react-components/core/theme'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './components/App'
import GlobalStyle from './components/GlobalStyle'

const root = createRoot(document.getElementById('app'))

const theme = createTheme()

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
)
