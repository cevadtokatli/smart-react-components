"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_GettingStarted_tsx"],{

/***/ "./src/containers/GettingStarted.tsx":
/*!*******************************************!*\
  !*** ./src/containers/GettingStarted.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/H1 */ "./node_modules/@smart-react-components/core/Element/H1.js");
/* harmony import */ var _smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Code */ "./src/components/Code.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _elements_Ul__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/Ul */ "./src/elements/Ul.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");











const GettingStarted = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_10__["default"])({ title: 'Getting Started' });
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", { id: "getting-started" }, "Getting Started"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Smart React Components is a React UI library that provides a wide range of editable React and Styled components."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "features" }, "Features"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Wide variety of editable ready to use Styled and React components"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "All components bundled separately"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Customizable theme"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Server side rendering"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "Written in TypeScript"),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, "I18n support")),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "modules" }, "Modules"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Smart React Components consists of different modules and each one provides different features and components."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Core"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                    "Provides core features and components such as ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/theme" }, "Theme"),
                    ", ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/styled-props" }, "Styled Props"),
                    ", and ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/element" }, "Element"),
                    ". All other modules are dependent to the core module."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "UI"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Provides UI related components."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/alert" }, "Alert")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/badge" }, "Badge")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/breadcrumb" }, "Breadcrumb")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/button" }, "Button")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/checkbox" }, "Checkbox")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/color-picker" }, "Color Picker")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/date-picker" }, "Date Picker")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/dropdown" }, "Dropdown")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/fixed-box" }, "Fixed Box")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/grid" }, "Grid")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/input" }, "Input")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/loading" }, "Loading")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/modal" }, "Modal")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/overlay" }, "Overlay")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/pagination" }, "Pagination")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/pop-up" }, "Pop-up")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/popover" }, "Popover")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/progress-bar" }, "Progress Bar")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/radio" }, "Radio")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/select" }, "Select")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/switch" }, "Switch")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/table" }, "Table")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/textarea" }, "Textarea")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/tooltip" }, "Tooltip")),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Transition"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                    "Provides transition related components. Check ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/transition" }, "Transition"),
                    " for more information."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Router"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                    "Provides router related components. Check ",
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/router" }, "Router"),
                    " for more information."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "installation" }, "Installation"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Each SRC module is available as a package on NPM for use with a module bundler."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Code__WEBPACK_IMPORTED_MODULE_2__["default"], { language: "shell", code: `# NPM
npm install --save-dev @smart-react-components/core @smart-react-components/router @smart-react-components/transition @smart-react-components/ui

# Yarn
yarn add @smart-react-components/core @smart-react-components/router @smart-react-components/transition @smart-react-components/ui` }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "You don't need to install all modules to use SRC. Only the core is must and you can install rest of them according to your needs."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { id: "usage" }, "Usage"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "After attaching the SRC theme to the Styled components theme context, you are ready to use all the React and Styled components that SRC provides."),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_3__["default"], { code: `import H1 from '@smart-react-components/core/Element/H1'
import createTheme from '@smart-react-components/core/theme'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

const root = createRoot(document.getElementById('app'))

const theme = createTheme()

root.render(
  <ThemeProvider theme={theme}>
    <H1 color="!primary">Hello World!</H1>
  </ThemeProvider>,
)`, output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_core_Element_H1__WEBPACK_IMPORTED_MODULE_0___default()), { color: "!primary", margin: 0 }, "Hello World!")) })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_6__["default"], { next: {
                    label: 'Theme',
                    to: '/theme',
                } })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], { list: [
                { label: 'Getting Started', id: 'getting-started' },
                { label: 'Features', id: 'features' },
                { label: 'Modules', id: 'modules' },
                { label: 'Installation', id: 'installation' },
                { label: 'Usage', id: 'usage' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GettingStarted);


/***/ })

}]);
//# sourceMappingURL=139be11658fe4114c0a1.js.map