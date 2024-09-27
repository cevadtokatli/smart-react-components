"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_ServerSideRendering_tsx"],{

/***/ "./src/containers/ServerSideRendering.tsx":
/*!************************************************!*\
  !*** ./src/containers/ServerSideRendering.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Code */ "./src/components/Code.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");








const ServerSideRendering = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_7__["default"])({ title: 'Server Side Rendering' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { id: "server-side-rendering" }, "Server Side Rendering"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All the SRC Styled and React components are compatible with NodeJS. You can provide server side rendering with SRC."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "usage-on-server" }, "Usage on Server"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "An example of how you provide server side rendering with ExpressJS. SRC doesn't use any ExpressJS dependencies so you can use another NodeJS framework to provide server side rendering."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Code__WEBPACK_IMPORTED_MODULE_1__["default"], { code: `import { callGetMethods, loadModulesOnServer } from '@smart-react-components/router'
import ServerRouter from '@smart-react-components/router/ServerRouter'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'
import App from './components/App'
import routes from './routes'
import createTheme from './theme'

let modules = {}

const app = express()

app.get('*', async (req, res) => {
  const sheet = new ServerStyleSheet()
  const theme = createTheme()
  theme.$.vars.isMobile = !!(/mobile/i.test(req.headers['user-agent']))

  await callGetMethods(req.url, routes, modules, {})

  const html = renderToString(
    <ServerRouter modules={modules} routes={routes} url={req.url}>
      <StyleSheetManager sheet={sheet.instance}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyleSheetManager>
    </ServerRouter>
  )

  const style = sheet.getStyleTags()

  res.send(
\`<!DOCTYPE html>
<html>
  <head>
    \${style}
  </head>
  <body>
    <div id="app">\${html}</div>
    <script src="main.js"></script>
  </body>
</html>\`
  )
})

loadModulesOnServer(routes)
.then(resolvedModules => {
  modules = resolvedModules

  app.listen(3000)
})
.catch(err => console.error(err))`, language: "js" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    "SRC provides only two methods to complete all SSR processs: ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "loadModulesOnServer"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "callGetMethods"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "loadModulesOnServer"),
                    " accepts the same ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "routes"),
                    " array given to ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/router#server-router" }, "Server Router"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/router#client-router" }, "Client Router"),
                    ". It preloads all modules at once and use them when needed."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "callGetMethods"),
                    " invokes all the ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#get" }, "get"),
                    " methods of the modules whose pathes are matched to the URL. It accepts four params; the first one is the URL of the request, the second one is the same ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "routes"),
                    " array given to ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/router#server-router" }, "Server Router"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/router#client-router" }, "Client Router"),
                    ", the third one is the loaded modules by ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "loadModulesOnServer"),
                    ", and the last one is the addional params sent to the ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#get" }, "get"),
                    " method."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All the SRC components are responsive, therefore some of the SRC components need to know if it's the mobile device that user browses. SRC can detect it on the client-side, but on server-side, you need to set it manually, using theme isMobile property."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "usage-on-client" }, "Usage on Client"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Code__WEBPACK_IMPORTED_MODULE_1__["default"], { code: `import { loadModulesOnClient } from '@smart-react-components/router'
import ClientRouter from '@smart-react-components/router/ClientRouter'
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './components/App'
import routes from './routes'
import createStore from './redux'
import createTheme from './theme'

loadModulesOnClient(routes)
.then(() => {
  const theme = createTheme()

  hydrateRoot(
    document.getElementById('app'),
    <ClientRouter routes={routes}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ClientRouter>,
  )
})`, language: "js" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                    "SRC provides a single method on the client side to fully benefit the SSR process. ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "loadModulesOnClient"),
                    " loads the needed module before starting the React not to interrupt the React.")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__["default"], { next: {
                    label: 'API',
                    to: '/api',
                }, prev: {
                    label: 'Router',
                    to: '/router',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], { list: [
                { label: 'Server Side Rendering', id: 'server-side-rendering' },
                { label: 'Usage on Server', id: 'usage-on-server' },
                { label: 'Usage on Client', id: 'usage-on-client' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerSideRendering);


/***/ })

}]);
//# sourceMappingURL=bdac714c94452e6e9172.js.map