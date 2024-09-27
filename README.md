# Smart React Components

React UI library that provides a wide range of editable React and Styled components.

## Modules

Smart React Components is consist of different modules and each one provides different features and components.

* Core
  * Includes core features and components.
  * All other modules are dependent to the core module.
* UI
  * Includes UI components.
* Transition
  * Includes transition components.
* Router
  * Includes router components.

## Documentation

Visit [the documentation page](https://cevadtokatli.github.io/smart-react-components/) for more information and demo about SRC.

## Installation

SRC is available as a package on NPM for use with a module bundler.

```sh
# NPM
$ npm install --save @smart-react-components/core

# Yarn
$ yarn add @smart-react-components/core
```

## Features

* Wide variety of editable ready to use Styled and React components.
* Customizable theme.
* Server side rendering.
* Written in TypeScript.
* I18n support.

## Environment Support

![Google Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_24x24.png) | ![Mozilla Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_24x24.png) | ![Opeara](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_24x24.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_24x24.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_24x24.png) | ![Yandex](https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_24x24.png) | ![Electron](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_24x24.png)
:-: | :-: | :-: | :-: | :-: | :-: | :-:
:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
## Usage

After attaching the SRC theme to the Styled components theme context, you are ready to use all the Styled and React components that SRC provides.

```react
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import createTheme from '@smart-react-components/core/theme'
import H1 from '@smart-react-components/core/Element/H1'

const root = createRoot(document.getElementById('app'))

const theme = createTheme()

root.render(
  <ThemeProvider theme={theme}>
    <H1 color="!primary">Hello World!</H1>
  </ThemeProvider>,
)
```

## License

SRC is provided under the [MIT License](https://opensource.org/licenses/MIT).
