import { loadModulesOnClient } from '@smart-react-components/router'
import ClientRouter from '@smart-react-components/router/ClientRouter'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './components/App'
import TopBar from './components/TopBar'
import createStore, { State } from './redux'
import routes from './routes'
import createTheme from './theme'
import { Provider } from 'react-redux'

declare global {
  interface Window {
    __INITIAL_STATE__?: State
  }
}

loadModulesOnClient(routes)
.then(() => {
  const store = createStore()
  const theme = createTheme()
  delete window.__INITIAL_STATE__

  hydrateRoot(
    document.getElementById('app'),
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ClientRouter routes={routes} params={{ store }} progressBar={<TopBar />}>
          <App />
        </ClientRouter>
      </ThemeProvider>
    </Provider>,
  )
})
