import fs from "fs"
import * as express from "express"
import * as serveStatic from "serve-static"
import sqlite3 from "sqlite3"
import React from "react"
import {renderToString} from "react-dom/server"
import Loadable from "react-loadable"
import {getBundles} from "react-loadable-ssr-addon"
import {Provider} from "react-redux"
import {ServerStyleSheet, StyleSheetManager, ThemeProvider} from "styled-components"
import src from "smart-react-components/theme"
import srcInitSSR  from "smart-react-components/ssr/init"
import {ServerRouter, runLoaders} from "smart-react-components/router"
import {MovieList} from "./types/movie"
import routes from "./routes"
import createStore from "./create-store"
import App from "./components/App"

const manifest = JSON.parse(fs.readFileSync("./assets/react-loadable-ssr-addon.json", "utf8"))
const sqlite = sqlite3.verbose()

const connect = () => new Promise<sqlite3.Database>((resolve, reject) => {
    const db = new sqlite.Database("../assets/database", err => {
        if(err)
            return reject(err)

        db.close = db.close.bind(db, err => new Promise<void>((resolve, reject) => {
            if(err)
                return reject(err)

            resolve()
        }))

        resolve(db)
    })
})

const getMovieList = () => new Promise<MovieList>((resolve, reject) => {
    connect()
    .then(db => db.all("SELECT id, title FROM movies ORDER BY title ASC", (err, resp) => {
        if(err)
            return reject(err)

        resolve(resp)
    }))
    .catch(err => reject(err))
})

Loadable.preloadAll().then(() => {
    const app: express.Application = express()
    app.use(serveStatic("./assets/"))

    app.get("/movies/:id", (req:express.Request, res:express.Response) => {
        setTimeout(() => {
            const id = req.params.id

            connect()
            .then(db => db.get("SELECT * FROM movies WHERE id = ?", [id], (err, resp) => {
                if(err)
                    return res.send(JSON.stringify({err:"Movie not found"}))
        
                res.send(JSON.stringify(resp))
            }))
            .catch(() => res.send(JSON.stringify({err:"Database error"})))
        }, 300) // custom delay to see the progress bar
    })

    app.get("*", async (req:express.Request, res:express.Response) => {
        const modules = []
        const sheet = new ServerStyleSheet()
        const ua = req.headers['user-agent']
        if(/mobile/i.test(ua))
            src.isMobile = true
        srcInitSSR()
    
        const store = createStore({
            list: await getMovieList()
        })

        // loads all modules with the matched path and runs all get methods
        await runLoaders(routes, req.url, {store})

        const html = renderToString(
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                <StyleSheetManager sheet={sheet.instance}>
                    <ThemeProvider theme={{src}}>
                        <Provider store={store}>
                            <ServerRouter url={req.url}>
                                <App />
                            </ServerRouter>
                        </Provider>
                    </ThemeProvider>
                </StyleSheetManager>
            </Loadable.Capture>
        )
        const style = sheet.getStyleTags()
        const bundles = getBundles(manifest, [...manifest.entrypoints, ...modules])
        const script = bundles.js.map(i => `<script type="text/javascript" src="${i.publicPath}"></script>`).join("\n")

        res.send(
            `<!DOCTYPE html>
            <html>
                <head>
                    <base href="/" />
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i&display=swap" rel="stylesheet" />
                    ${style}
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
                    </script>
                    ${script}
                </body>
            </html>`
        )
    })

    app.listen(8080, () => console.log(`Server is running on 8080th port.`))
})