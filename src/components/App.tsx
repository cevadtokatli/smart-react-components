import Routes from '@smart-react-components/router/Routes'
import React from 'react'
import GlobalStyle from './GlobalStyle'
import List from './List'

export default () => (
    <main>
      <GlobalStyle />
      <List />
      <Routes />  
    </main>
)
