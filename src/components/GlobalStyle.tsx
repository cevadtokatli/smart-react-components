import { Theme } from '@smart-react-components/core/theme'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle(({ theme }: { theme?: Theme }) => `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    color: ${theme.$.color.light.font};
    font-family: ${theme.$.fontFamily.primary}, ${theme.$.fontFamily.secondary};
    text-size-adjust: none;
  }
`)
