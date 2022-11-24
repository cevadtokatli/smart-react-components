import { Theme } from '@smart-react-components/core/theme'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle(({ theme }: { theme: Theme }) => `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    font-family: ${theme.$.fontFamily.primary};
    padding: 1rem;
  }
`)
