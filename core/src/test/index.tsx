import React from 'react'
import { ThemeProvider } from 'styled-components'
import createTheme from '../theme'

export const wrapTheme = (children: JSX.Element): JSX.Element => <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
