import { callGetMethods, loadModulesOnServer } from '@smart-react-components/router'
import ServerRouter from '@smart-react-components/router/ServerRouter'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import serveStatic from 'serve-static'
import sqlite3 from 'sqlite3'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'
import App from './components/App'
import createStore from './redux'
import routes from './routes'
import createTheme from './theme'
import { MovieList } from './types/movie'
import { setList } from './redux/list'

const sqlite = sqlite3.verbose()

let modules = {}

const connect = () => new Promise<sqlite3.Database>((resolve, reject) => {
  const db = new sqlite.Database('./server/database', err => {
      if (err) {
        return reject(err)
      }

      db.close = db.close.bind(db, err => new Promise<void>((resolve, reject) => {
        if(err) {
          return reject(err)
        }
        resolve()
      }))

      resolve(db)
  })
})

const getMovieList = () => new Promise<MovieList>((resolve, reject) => {
  connect()
  .then(db => db.all('SELECT id, title FROM movies ORDER BY title ASC', (err, resp) => {
      if(err) {
        return reject(err)
      }

      resolve(resp as MovieList)
  }))
  .catch(err => reject(err))
})

const app = express()

app.use('/assets', serveStatic('assets'))

app.get('/movies/:id', (req, res) => {
  setTimeout(() => {
    const id = req.params.id

    connect()
    .then(db => db.get('SELECT * FROM movies WHERE id = ?', [id], (err, resp) => {
      if(err) {
        return res.send(JSON.stringify({err: 'Movie not found' }))
      }

      res.send(JSON.stringify(resp))
    }))
    .catch(() => res.send(JSON.stringify({err: 'Database error' })))
  }, 300) // custom delay to see the progress bar
})

app.get('*', async (req:express.Request, res:express.Response) => {
  const sheet = new ServerStyleSheet()
  const store = createStore()
  const theme = createTheme()
  theme.$.vars.isMobile = !!(/mobile/i.test(req.headers['user-agent']))

  const list = await getMovieList()
  store.dispatch(setList(list))

  await callGetMethods(req.url, routes, modules, { store })

  const html = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <ThemeProvider theme={theme}>
          <ServerRouter modules={modules} routes={routes} url={req.url}>
            <App />
          </ServerRouter>
        </ThemeProvider>
      </StyleSheetManager>
    </Provider>
  )
  const style = sheet.getStyleTags()

  res.send(
`<!DOCTYPE html>
<html>
  <head>
    <base href='/' />
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    ${style}
  </head>
  <body>
    <div id='app'>${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
    </script>
    <script src="assets/vendors.js"></script>
    <script src="assets/main.js"></script>
  </body>
</html>`
  )
})

loadModulesOnServer(routes)
.then(resolvedModules => {
  modules = resolvedModules

  app.listen(8080)
})
.catch(err => console.error(err))
