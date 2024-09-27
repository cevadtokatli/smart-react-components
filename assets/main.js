/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/DarkModeContext */ "./src/context/DarkModeContext.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyle */ "./src/components/GlobalStyle.tsx");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main */ "./src/components/Main.tsx");






const App = ({ isDark, isMobile }) => {
    const [isDarkState, setDarkState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(isDark);
    const theme = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => (0,_theme__WEBPACK_IMPORTED_MODULE_2__["default"])(isDarkState, isMobile), [isDarkState, isMobile]);
    const handleChange = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((isDark) => {
        document.cookie = `isDark = ${String(isDark)}; path=/`;
        setDarkState(isDark);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, { value: { isDark: isDarkState, setDark: handleChange } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, { theme: theme },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Aside/LinkItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/Aside/LinkItem.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/router/Link */ "../smart-react-components/router/lib/Link/index.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Aside_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/Aside/ListItem */ "./src/elements/Aside/ListItem.tsx");



const LinkItem = ({ children, isNested, setOpen, to }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Aside_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { isNested: isNested },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setOpen(false), to: to }, children)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkItem);


/***/ }),

/***/ "./src/components/Aside/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Aside/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Aside */ "./node_modules/@smart-react-components/core/Element/Aside.js");
/* harmony import */ var _smart_react_components_core_Element_Aside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Aside__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Ul */ "./node_modules/@smart-react-components/core/Element/Ul.js");
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/router/useRouter */ "../smart-react-components/router/lib/useRouter/index.js");
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_Aside_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Aside/ListItem */ "./src/elements/Aside/ListItem.tsx");
/* harmony import */ var _icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/ArrowRight */ "./src/icons/ArrowRight.tsx");
/* harmony import */ var _SlideTransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SlideTransition */ "./src/components/SlideTransition.tsx");
/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinkItem */ "./src/components/Aside/LinkItem.tsx");








const Aside = ({ isOpen, setOpen }) => {
    const router = _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_2___default()();
    const [isComponenetsOpen, setComponenetsOpen] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(router.activeURL.pathname.startsWith('/ui-components'));
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Aside__WEBPACK_IMPORTED_MODULE_0___default()), { backgroundColor: "$color.dynamic.asideBackground", boxShadow: "rgba(0, 0, 0, .1) 1px 0 5px 0", flex: "0 0 auto", height: "calc(100% - 60px)", heightMd: "auto", left: isOpen ? 0 : -280, overflow: "auto", position: "fixed", positionMd: "static", transition: "left 300ms ease-in-out 0s", top: 60, width: 280, zIndex: "90" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_1___default()), { paddingVertical: 16, width: 280 },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/" }, "Getting Started"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/theme" }, "Theme"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/styled-props" }, "Styled Props"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/element" }, "Element"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/element-props" }, "Element Props"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Aside_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], { onClick: () => setComponenetsOpen(!isComponenetsOpen) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", { className: `${isComponenetsOpen ? 'active' : ''}` }, "UI Components"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SlideTransition__WEBPACK_IMPORTED_MODULE_6__["default"], { status: isComponenetsOpen },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/alert" }, "Alert"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/badge" }, "Badge"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/breadcrumb" }, "Breadcrumb"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/button" }, "Button"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/checkbox" }, "Checkbox"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/color-picker" }, "Color Picker"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/date-picker" }, "Date Picker"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/dropdown" }, "Dropdown"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/fixed-box" }, "Fixed Box"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/grid" }, "Grid"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/input" }, "Input"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/loading" }, "Loading"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/modal" }, "Modal"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/overlay" }, "Overlay"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/pagination" }, "Pagination"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/pop-up" }, "Pop-up"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/popover" }, "Popover"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/progress-bar" }, "Progress Bar"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/radio" }, "Radio"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/select" }, "Select"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/switch" }, "Switch"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/table" }, "Table"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/textarea" }, "Textarea"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/tooltip" }, "Tooltip"),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { isNested: true, setOpen: setOpen, to: "/ui-components/wave-effect" }, "Wave Effect")))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/transition" }, "Transition"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/router" }, "Router"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/server-side-rendering" }, "Server Side Rendering"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/api" }, "API"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_LinkItem__WEBPACK_IMPORTED_MODULE_7__["default"], { setOpen: setOpen, to: "/log" }, "Log"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Aside);


/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Footer */ "./node_modules/@smart-react-components/core/Element/Footer.js");
/* harmony import */ var _smart_react_components_core_Element_Footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/router/Link */ "../smart-react-components/router/lib/Link/index.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_Footer_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Footer/List */ "./src/elements/Footer/List.tsx");





const Footer = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { boxShadow: "rgba(0, 0, 0, .3) 0px -1px 2px 0px", flex: "0 0 auto", position: "relative", height: 186, zIndex: "59" }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Footer__WEBPACK_IMPORTED_MODULE_1___default()), { alignItems: "flex-start", background: "$color.dynamic.headerBackground", bottom: 0, display: "flex", height: 186, justifyContent: "space-evenly", left: 0, leftMd: 280, paddingVertical: 40, position: "fixed", right: 0, zIndex: "60" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Footer_List__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Docs")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_2___default()), { to: "/" }, "Getting Started")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_2___default()), { to: "/api" }, "API Reference"))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Footer_List__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Community")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { href: "https://github.com/cevadtokatli/smart-react-components/issues/new", target: "_blank" }, "Create an issue"))),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Footer_List__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "More")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { href: "https://github.com/cevadtokatli/smart-react-components", target: "_blank" }, "GitHub")),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", { href: "https://www.npmjs.com/org/smart-react-components", target: "_blank" }, "NPM"))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/GlobalStyle.tsx":
/*!****************************************!*\
  !*** ./src/components/GlobalStyle.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(({ theme }) => `
  .slide-enter,
  .slide-leave-active {
    box-sizing: border-box !important;
    overflow: hidden !important;
  }

  .slide-enter:not(.slide-enter-active),
  .slide-leave-active {
    height: 0 !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding-bottom: 0 !important;
    padding-top: 0 !important;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: 150ms 0s ease-in-out;
    transition-property: height, padding, margin;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${theme.$.vars.isDarkMode
    ? `
      html {
        color-scheme: dark;
      }
    `
    : ''}

  html,
  body,
  #app {
    height: 100%;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    background: ${theme.$.color.dynamic.background};
    color: ${theme.$.color.dynamic.bodyFont};
    font-family: ${theme.$.fontFamily.primary};
    text-size-adjust: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: ${theme.$.length.paragraphSpace};
  }

  b {
    font-weight: ${theme.$.fontWeight.semibold};
  }

  code {
    border-radius: 4px;
    padding: 2px;
    margin: -2px 0;
    background: ${theme.$.color.dynamic.codeBackground};
  }

  .cm-editor {
    background-color: transparent;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAyCAYAAAAp8UeFAAAHvklEQVR42s2b63bcNgyEQZCSHCdt2vd/0tWF7I+Q6XgMXiTtuvU5Pl57ZQKkKHzEAOtF5KeIJBGJ8uvL599FRFREZhFx8DeXv8trn68RuGaC8TRfo3SNp9dlDDHedyLyTUTeRWStXKPZrjtpZxaRw5hPqozRs1N8/enzIiQRWcCgy4MUA0f+XWliDhyL8Lfyvx7ei/Ae3iQFHyw7U/59pQVIMEEPEz0G7XiwdRjzSfC3UTtz9vchIntxvry5iMgfIhJoEflOz2CQr3F5h/HfeFe+GTdLaKcu9L8LTeQb/R/7GgbsfKedyNdoHsN31uRPWrfZ5wsj/NzzRQHuToIdU3ahwnsKPxXCjJITuOsi7XLc7SG/v5GdALs7wf8JjTFiB5+QvTEfRyGOfX3Lrx8wxyQi3sNq46O7QahQiCsRFgqddjBouVEHOKDgXAQHD9gJCr5sMKkEdjwsarG/ww3BMHBU7OBjXnzdyY7SfCxf5/z6ATccrwlKuwC/jhznnPF4CgVzhhVf4xp2EixcBActO75iZ8/fM9zAs2OMzKdslgXWJ9XG8PQoOAMA5fGcsvORgv0doBXyHrCwfLJAOwo71QLNkb8n2Pl6EWiR7OCibtkPaz4Kc/0NNAze2gju3zOwekALDaCFPI5vjPFmgGY5AZqyGEvH1x7QfIb8YtxMnA/b+QQ0aQDAwc6JMFg8CbQZ4qoYEEHbRwNojuK3EHwd7VALSgq+MNDKzfT58T8qdpADrgW0GmgcAS1lhzztJmkAzcPNOQbsWEALBDSlMKUG0Eq4CLAQWvEVQ9WU57gZJwZtgPO3r9oBTQ9WO8TjqXINx8R0EYpiZEUWOF3FxkbJkgU9B2f41YBrIj5ZfsQa0M5kTgiAAqM3ShXLgu8XMqcrQBvJ0CL5pnTsfMB13oB8athpAq2XOQmcGmoACCLydx7nToa23ATaSIY2ichfOdPTGxlasXMLaL0MLZAOwAKIM+y8CmicobGdCcbbK9DzN+yYGVoNNI5iUKTMyYOjPse4A8SM1MmcXgU0toOq1yO/v8FOxlASyc7TgeYaAMBJHcY1CcCwGI/TK4AmDbDyKYBBtFUkRwto8gygiQEaByFgJ00BH2M8JWwQS1nafDXQCidWyOI8AcjDCSjCLk8ngObuAm3JAHAdubAmOaK06V8MNEsKPJOhobSprwQa6gD7DclRQdqcwL4zxqgBrQcabUiBLclRDKAlWp+etPkBaNMA0AKlrHwTdEByZAA4GM+SNluSY6wAzcMNewxmgig5Ks0nkrSpBvSaQHMdKTBAnLojOdYyGpQ254602ZILPdTD1hdlggdIm74jbTp8vDwF5ZYUeLWGJpWsh6XNyXgcYwVoJQTEhhTYkxzZjiU5npU2TaB979TQehlaAVq4kaGpiPwwwLkYUuBbQwocyQTv1tA0+1UFWoJF3iv1oq+qoSk8EQdJmwHkziIF7oOZk14EGitibAdjLYYK78H5vZOhtWpoI0ATGHs0Q8OMb4Ey+2bU2UYztCtA0wFAs7TplGLRVQCcqaFdGSPCeTI1QNIC52iWNzof6Uib7xjEp07mNNoUYmVosVItHrHzRlLgBn9LFyRHaQCtVUMbtTNhoXWiTOO9k/V8BdAc1Oq0ArSQs6/5SU0hckNy9NnXqQY0PGYo5dWJ7nINaN6o958FWin27aBaWRka1r5myvLOAm0j30eBJqCxHLReVclxhxOEN2JfDWjxBtAC7MIH1fVaGdoOp4qJYDgKtKPSFNID2gSnGldrCqkFZ+5UeQXQBIRrSwocbdZYQT/2LwRahBPBXoHrB8nxaGROST62DKUbQOMMzZIC9abkuELfQzQALWTnDNAm8KHWFOJgJ5+SHIvTPcmx1xQyZRhNL5Qci689aXMEaN/uNIWkEwDAvFpOZmgsBaaGnbs1NPa1Jm32gBZAIh1pCtG7TSH4aE0y1uVY4uqoFPisGlpP2rSA5qTecWn5agK6BzSpgAyD+wFaqhnYoSZ1Vwr8CmlTQbrcO3ZaX0NAEyMbYaAlyquFoLKK3SPby9CeVUPThrSJmkCAE0CrKUQadi4DrdSlWhmah0YL9z9vClH59YGbHx1J8VZTyAjQepJjmXwAKTDQI3omc3p1U4gDUf6RfcdYfrUp5ClAi2J3Ba6UOXGo+K+bQrjjssitG2SJzshaLwMtXgRagUNpYYoVkMSBLM+9GGiJZMvduG6DRZ4qc04DMPtQQxOjEtACmhO7K1AbNbQDEggZyJwscFpAGwENhoBeUwh3bWolhe8BTYVKxQEWrSUn/uhcM5KhvUu/+eQu0Lzhi+VrK0PrZZNDQKs9cpYUuFYgMVpD4/NxenJTiMCNqdUEUf1qZWjppLT5qSkkUZbCwkbZMSuVnu80hfSkzRbQeqCZSAh6huR4VtoM2gHAlLf72smuWgE+VV7XpE25Ab2WFDgyhnSuKbs4GuGzCjR+tIoUuMFg3kgcWKLTwRqanJQ2W00hAsenfaApRC42hbCvK1SlE0HtE9BGgneJO+ELamitD1YjjOYnNYVcraGhtKkW0EqVVeDx733I2NH581k1NNxNLG0i0IJ8/NjVaOZ0tYZ2Vtr0Xv7tPV3hkWp9EFkgS/J0vosngTaSoaG06WHi+xObQkaAdlbanP8B2+2l0f90LmUAAAAASUVORK5CYII=);
  }

  .cm-scroller {
    background-color: ${theme.$.color.dynamic.previewBackground};
  }
`));


/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Header */ "./node_modules/@smart-react-components/core/Element/Header.js");
/* harmony import */ var _smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_core_Element_Img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/core/Element/Img */ "./node_modules/@smart-react-components/core/Element/Img.js");
/* harmony import */ var _smart_react_components_core_Element_Img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Img__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/core/Element/Span */ "./node_modules/@smart-react-components/core/Element/Span.js");
/* harmony import */ var _smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/core/util/dom */ "./node_modules/@smart-react-components/core/util/dom.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/router/Link */ "../smart-react-components/router/lib/Link/index.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_DarkModeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/DarkModeContext */ "./src/context/DarkModeContext.tsx");
/* harmony import */ var _elements_Header_Hamburger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Header/Hamburger */ "./src/elements/Header/Hamburger.tsx");
/* harmony import */ var _elements_Header_LinkList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/Header/LinkList */ "./src/elements/Header/LinkList.tsx");
/* harmony import */ var _elements_Header_IconList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/Header/IconList */ "./src/elements/Header/IconList.tsx");
/* harmony import */ var _icons_DarkMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/DarkMode */ "./src/icons/DarkMode.tsx");
/* harmony import */ var _icons_Github__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons/Github */ "./src/icons/Github.tsx");
/* harmony import */ var _icons_LightMode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icons/LightMode */ "./src/icons/LightMode.tsx");
/* harmony import */ var _icons_NPM__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../icons/NPM */ "./src/icons/NPM.tsx");
















const Header = ({ isAsideOpen, setAsideOpen }) => {
    const darkModeCtx = react__WEBPACK_IMPORTED_MODULE_6___default().useContext(_context_DarkModeContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__.useTheme)();
    const [isUp, setUp] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false);
    const lastScrollValue = react__WEBPACK_IMPORTED_MODULE_6___default().useRef(0);
    const lastScrollDownValue = react__WEBPACK_IMPORTED_MODULE_6___default().useRef(0);
    const handleScroll = () => {
        const scrollValue = document.getElementById('page-container').scrollTop;
        const delta = 60;
        const isUp = scrollValue > lastScrollValue.current ? false : true;
        if ((isUp && lastScrollDownValue.current - scrollValue >= 10) || scrollValue <= delta) {
            setUp(false);
        }
        else if (!isUp && scrollValue > delta) {
            setUp(true);
        }
        lastScrollValue.current = scrollValue;
        if (!isUp) {
            lastScrollDownValue.current = scrollValue;
        }
    };
    react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(() => {
        if (theme.$.vars.isMobile) {
            (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_4__.addEventListener)(document.getElementById('page-container'), ['scroll'], handleScroll);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1___default()), { background: "$color.dynamic.headerBackground", boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 2px 0px", display: "flex", flex: "0 0 auto", height: 60, justifyContent: "space-between", paddingHorizontal: 30, ...(theme.$.vars.isMobile && {
            position: 'fixed',
            transition: 'transform 300ms ease-in-out 0s',
            width: '100%',
            zIndex: '100',
            ...(isUp && {
                transform: 'translateY(-62px)',
            })
        }) },
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex", flex: "0 0 auto", paddingRight: 30 },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Header_Hamburger__WEBPACK_IMPORTED_MODULE_8__["default"], { isActive: isAsideOpen, onClick: () => setAsideOpen(!isAsideOpen) },
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null)),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5___default()), { elementProps: {
                    display: 'inline-flex'
                }, to: "/" },
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Img__WEBPACK_IMPORTED_MODULE_2___default()), { alignSelf: "center", src: "assets/logo.png", width: 55 }))),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", alignItems: "center", alignSelf: "center", flex: "0 0 auto" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Header_LinkList__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5___default()), { to: "/" }, "Getting Started")),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_5___default()), { to: "/api" }, "API"))),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_elements_Header_IconList__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3___default()), { cursor: "pointer", onClick: () => darkModeCtx.setDark(!darkModeCtx.isDark) }, theme.$.vars.isDarkMode ? react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_icons_DarkMode__WEBPACK_IMPORTED_MODULE_11__["default"], { fill: "$color.white" }) : react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_icons_LightMode__WEBPACK_IMPORTED_MODULE_13__["default"], { fill: "$color.white" }))),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("a", { href: "https://github.com/cevadtokatli/smart-react-components", target: "_blank" },
                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_icons_Github__WEBPACK_IMPORTED_MODULE_12__["default"], { fill: "$color.white" }))),
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("a", { href: "https://www.npmjs.com/org/smart-react-components", target: "_blank" },
                        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_icons_NPM__WEBPACK_IMPORTED_MODULE_14__["default"], null)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Main */ "./node_modules/@smart-react-components/core/Element/Main.js");
/* harmony import */ var _smart_react_components_core_Element_Main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_router_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/router/Routes */ "../smart-react-components/router/lib/Routes/index.js");
/* harmony import */ var _smart_react_components_router_Routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Aside */ "./src/components/Aside/index.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.tsx");








const Main = () => {
    const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    const [isAsideOpen, setAsideOpen] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Main__WEBPACK_IMPORTED_MODULE_1___default()), { display: "flex", flexDirection: "column", height: "100%" },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], { isAsideOpen: isAsideOpen, setAsideOpen: setAsideOpen }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", flex: "1 1 auto", minHeight: 1 },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Aside__WEBPACK_IMPORTED_MODULE_4__["default"], { isOpen: isAsideOpen, setOpen: setAsideOpen }),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { background: "$color.dynamic.background", display: "flex", flex: "1 1 auto", flexDirection: "column", id: "page-container", minWidth: 1, overflow: "auto", ...(theme.$.vars.isMobile && {
                    paddingTop: 60,
                }) },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_router_Routes__WEBPACK_IMPORTED_MODULE_2___default()), null),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/components/SlideTransition.tsx":
/*!********************************************!*\
  !*** ./src/components/SlideTransition.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/util/dom */ "./node_modules/@smart-react-components/core/util/dom.js");
/* harmony import */ var _smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/Transition */ "./node_modules/@smart-react-components/transition/Transition/index.js");
/* harmony import */ var _smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SlideTransition = ({ children, status }) => {
    const hide = (el) => new Promise(resolve => {
        const className = el.className || '';
        const style = el.getAttribute('style') || '';
        (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrame)(() => {
            el.style.height = `${el.offsetHeight}px`;
            (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrame)(() => {
                el.classList.add('slide-leave-active');
                (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.addEventListenerOnce)(el, ['transitionend'], () => {
                    el.className = className;
                    el.setAttribute('style', style);
                    resolve();
                });
            });
        });
    });
    const show = (el) => new Promise(resolve => {
        const className = el.className || '';
        const style = el.getAttribute('style') || '';
        el.style.opacity = '0';
        const height = el.offsetHeight;
        (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrame)(() => {
            el.classList.add('slide-enter');
            (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrame)(() => {
                el.style.opacity = '1';
                el.style.height = `${height}px`;
                el.classList.add('slide-enter-active');
                (0,_smart_react_components_core_util_dom__WEBPACK_IMPORTED_MODULE_0__.addEventListenerOnce)(el, ['transitionend'], () => {
                    el.className = className;
                    el.setAttribute('style', style);
                    resolve();
                });
            });
        });
    });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_transition_Transition__WEBPACK_IMPORTED_MODULE_1___default()), { hide: hide, show: show, status: status }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideTransition);


/***/ }),

/***/ "./src/constants/status.tsx":
/*!**********************************!*\
  !*** ./src/constants/status.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* binding */ Status)
/* harmony export */ });
var Status;
(function (Status) {
    Status[Status["IDLE"] = 1] = "IDLE";
    Status[Status["STAND_BY"] = 2] = "STAND_BY";
    Status[Status["LOADING"] = 4] = "LOADING";
    Status[Status["SUCCESS"] = 8] = "SUCCESS";
    Status[Status["ERROR"] = 16] = "ERROR";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/containers/NotFound.tsx":
/*!*************************************!*\
  !*** ./src/containers/NotFound.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");




const NotFound = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_3__["default"])({ title: 'Not Found' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The page you're looking for doesn't seem to exist.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ "./src/context/DarkModeContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/DarkModeContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isDark: false,
    setDark: (isDark) => { },
}));


/***/ }),

/***/ "./src/elements/Aside/ListItem.tsx":
/*!*****************************************!*\
  !*** ./src/elements/Aside/ListItem.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Li__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Li */ "./node_modules/@smart-react-components/core/Element/Li.js");
/* harmony import */ var _smart_react_components_core_Element_Li__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Li__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_core_Element_Li__WEBPACK_IMPORTED_MODULE_0___default()))(({ theme, isNested, onClick }) => `
  display: flex;
  justify-content: space-between;

  ${onClick
    ? `
      cursor: pointer;  
    `
    : ''}

  > a,
  > span {
    color: ${theme.$.color.dynamic.asideFont};
    cursor: pointer;
    font-size: 13px;
    font-weight: ${theme.$.fontWeight.semibold};
    padding: 8px 0 8px ${isNested ? '40px' : '30px'};
    position: relative;
    transition: color 150ms ease-in-out 0s;

    &:hover,
    &.active {
      color: ${theme.$.color.blue};
      font-weight: ${theme.$.fontWeight.bold};

      + svg {
        fill: ${theme.$.color.blue};
      }
    }

    &.active + svg {
      transform: rotate(90deg);
    }
  }

  > a.active::before {
    background: ${theme.$.color.blue};
    border-radius: 12px;
    bottom: 0;
    content: '';
    left: -3px;
    position: absolute;
    top: 0;
    width: 6px;
  }

  > svg {
    fill: ${theme.$.color.dynamic.asideFont};
    margin-right: 30px;
    transition: 150ms ease-in-out 0s;
    width: 16px;
  }
`));


/***/ }),

/***/ "./src/elements/Content.tsx":
/*!**********************************!*\
  !*** ./src/elements/Content.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(({ theme }) => `
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100%;
  min-width: 1px;

  > div:first-child {
    flex: 1 1 auto;
    min-height: 1px;

    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      color: ${theme.$.color.dynamic.headingFont};
      font-weight: 500;
      line-height: 100%;
      margin-bottom: 16px;
    }

    > h1 {
      font-size: 24px;
    }

    > h2 {
      font-size: 19px;
      margin-top: ${theme.$.length.h2Space};
    }

    > h3 {
      font-size: 16px;
      margin-top: ${theme.$.length.h3Space};
    }

    > h4 {
      font-size: 16px;
    }
  }

  > div:last-child {
    flex: 0 0 auto;
  }
`));


/***/ }),

/***/ "./src/elements/Footer/List.tsx":
/*!**************************************!*\
  !*** ./src/elements/Footer/List.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Ul */ "./node_modules/@smart-react-components/core/Element/Ul.js");
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default()))(({ theme }) => `
  > li {
    &:not(:last-child) {
      padding-bottom: 10px;
    }

    > span {
      color: ${theme.$.color.gray400};
      font-weight: ${theme.$.fontWeight.semibold};
    }

    > a {
      color: ${theme.$.color.white};
      letter-spacing: .2px;
      transition: opacity 150ms ease-in-out 0s;

      &:hover {
        opacity: .8;
      }
    }
  }
`));


/***/ }),

/***/ "./src/elements/Header/Hamburger.tsx":
/*!*******************************************!*\
  !*** ./src/elements/Header/Hamburger.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
    display: 'flex',
    displayMd: 'none',
})(({ theme, isActive }) => `
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 20px;
  margin-right: 30px;
  width: 20px;

  > div {
    background: ${theme.$.color.white};
    border-radius: 4px;
    flex: 0 0 auto;
    height: 2px;
    margin: 2px 0;
    transition: 300ms ease-in-out 0s;
    width: 16px;
  
    &:nth-child(2n+1) {
      transform-origin: 0 0;
    }

    &:nth-child(1) {
      left: 0;
      position: relative;
      top: 0;
    }
  }

  ${isActive
    ? `
      > div {
        &:nth-child(1) {
          left: 1px;
          transform: rotate(45deg);
          top: 1px;
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    `
    : ''}
`));


/***/ }),

/***/ "./src/elements/Header/IconList.tsx":
/*!******************************************!*\
  !*** ./src/elements/Header/IconList.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Ul */ "./node_modules/@smart-react-components/core/Element/Ul.js");
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default()) `
  align-items: center;
  display: flex;

  > li:not(:last-child) {
    margin-right: 30px;
  }

  > li > a > svg,
  > li > span > svg {
    width: 25px;
  }
`);


/***/ }),

/***/ "./src/elements/Header/LinkList.tsx":
/*!******************************************!*\
  !*** ./src/elements/Header/LinkList.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Ul */ "./node_modules/@smart-react-components/core/Element/Ul.js");
/* harmony import */ var _smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_core_Element_Ul__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
    display: 'none',
    displayMd: 'flex',
})(({ theme }) => `
  align-items: center;

  > li {
    margin-right: 30px;

    > a {
      color: ${theme.$.color.white};
      letter-spacing: .2px;
      transition: opacity 150ms ease-in-out;

      &:hover {
        opacity: .8;
      }
    }
  }
`));


/***/ }),

/***/ "./src/elements/Page.tsx":
/*!*******************************!*\
  !*** ./src/elements/Page.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(({ theme }) => `
  align-items: flex-start;
  background: ${theme.$.color.dynamic.background};
  display: flex;
  flex: 1 1 auto;
  padding: 24px 30px;
  position: relative;
  z-index: 70;
`));


/***/ }),

/***/ "./src/hooks/usePage.tsx":
/*!*******************************!*\
  !*** ./src/hooks/usePage.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/router/useRouter */ "../smart-react-components/router/lib/useRouter/index.js");
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/app */ "./src/redux/app.tsx");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title }) => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const router = _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0___default()();
    const isInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const getTitle = () => `SRC · ${title}`;
    const setScroll = (isInit) => {
        const hash = window.location.hash.split('#')[2];
        if (hash) {
            const el = document.querySelector(`#${hash}`);
            if (el) {
                const timeout = isInit ? 100 : 0;
                setTimeout(() => document.getElementById('page-container').scrollTo(0, el.offsetTop), timeout);
                return;
            }
        }
        if (isInit) {
            document.getElementById('page-container').scrollTo(0, 0);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!isInit.current) {
            isInit.current = true;
            document.title = getTitle();
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }, [router.activeURL]);
    if (typeof window === 'undefined') {
        dispatch((0,_redux_app__WEBPACK_IMPORTED_MODULE_3__.setTitle)(getTitle()));
    }
});


/***/ }),

/***/ "./src/icons/ArrowRight.tsx":
/*!**********************************!*\
  !*** ./src/icons/ArrowRight.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()).attrs({
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" }),
    viewBox: '0 0 1792 1792',
}) ``);


/***/ }),

/***/ "./src/icons/DarkMode.tsx":
/*!********************************!*\
  !*** ./src/icons/DarkMode.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()).attrs({
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" }),
    viewBox: '0 0 24 24',
}) ``);


/***/ }),

/***/ "./src/icons/Github.tsx":
/*!******************************!*\
  !*** ./src/icons/Github.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()).attrs({
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" }),
    viewBox: '0 0 1792 1792',
}) ``);


/***/ }),

/***/ "./src/icons/LightMode.tsx":
/*!*********************************!*\
  !*** ./src/icons/LightMode.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()).attrs({
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" }),
    viewBox: '0 0 24 24',
}) ``);


/***/ }),

/***/ "./src/icons/NPM.tsx":
/*!***************************!*\
  !*** ./src/icons/NPM.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()).attrs({
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { id: "path0", d: "M353.364 172.224 C 352.131 172.974,348.598 175.086,345.514 176.917 C 342.430 178.748,338.897 180.851,337.664 181.590 C 336.430 182.329,333.107 184.305,330.280 185.980 C 327.453 187.656,323.921 189.756,322.430 190.649 C 319.193 192.587,316.527 194.172,309.065 198.600 C 305.981 200.429,302.449 202.532,301.215 203.273 C 299.981 204.013,296.028 206.368,292.430 208.506 C 277.485 217.385,272.923 220.098,271.682 220.846 C 270.388 221.626,265.935 224.277,255.047 230.748 C 251.963 232.581,248.430 234.682,247.196 235.417 C 245.963 236.152,243.061 237.878,240.748 239.253 C 238.435 240.627,235.617 242.307,234.486 242.986 L 232.430 244.220 232.489 262.718 C 232.522 272.891,232.626 299.131,232.720 321.028 C 232.814 342.925,232.892 366.708,232.894 373.879 C 232.896 381.652,232.966 386.916,233.069 386.916 C 233.232 386.916,234.123 386.407,240.093 382.907 C 241.533 382.064,245.065 380.004,247.944 378.330 C 250.822 376.656,253.935 374.842,254.860 374.297 C 255.785 373.753,258.813 371.987,261.589 370.373 C 264.364 368.759,267.182 367.119,267.850 366.730 C 268.519 366.340,270.327 365.287,271.869 364.390 C 273.411 363.492,275.850 362.068,277.290 361.225 C 278.729 360.381,282.346 358.274,285.327 356.541 C 288.308 354.808,291.533 352.927,292.492 352.362 L 294.237 351.333 294.100 297.481 L 293.962 243.628 296.934 241.877 C 298.569 240.913,300.706 239.649,301.682 239.068 C 302.659 238.487,304.720 237.267,306.262 236.358 C 307.804 235.448,310.075 234.101,311.308 233.364 C 312.542 232.628,315.023 231.156,316.822 230.094 C 318.621 229.033,320.909 227.677,321.906 227.083 C 323.807 225.949,324.772 225.421,324.944 225.421 C 325.000 225.421,325.047 249.694,325.047 279.361 C 325.047 309.029,325.118 333.274,325.206 333.240 C 325.293 333.206,332.233 329.151,340.626 324.230 L 355.888 315.282 355.888 264.230 C 355.888 236.151,355.944 203.652,356.012 192.009 C 356.119 173.821,356.099 170.842,355.872 170.851 C 355.727 170.856,354.598 171.474,353.364 172.224 ", stroke: "none", fill: "#fbfbfb", "fill-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { id: "path1", d: "M195.140 15.832 C 189.577 16.433,186.619 17.566,178.879 22.054 C 176.874 23.217,172.500 25.739,169.159 27.658 C 161.186 32.238,148.977 39.256,142.897 42.754 C 134.802 47.411,125.564 52.722,117.290 57.476 C 112.972 59.957,105.949 63.994,101.682 66.447 C 92.480 71.737,81.017 78.326,61.776 89.385 C 57.561 91.808,51.883 95.072,49.159 96.638 C 46.435 98.205,42.229 100.621,39.813 102.007 C 31.817 106.596,30.008 108.588,30.002 112.813 C 29.997 117.131,31.763 119.061,40.093 123.836 C 42.561 125.251,47.019 127.814,50.000 129.533 C 52.981 131.251,57.439 133.816,59.907 135.233 C 62.374 136.649,65.444 138.416,66.729 139.159 C 68.014 139.903,71.336 141.813,74.112 143.406 C 82.473 148.202,87.967 151.358,91.121 153.177 C 92.766 154.126,95.836 155.892,97.944 157.102 C 100.051 158.312,103.416 160.246,105.421 161.401 C 107.425 162.555,111.084 164.659,113.551 166.075 C 116.019 167.492,118.836 169.113,119.813 169.678 C 120.790 170.243,124.449 172.346,127.944 174.351 C 131.439 176.356,135.350 178.603,136.636 179.344 C 140.724 181.703,146.331 184.929,150.187 187.141 C 152.243 188.321,155.355 190.113,157.103 191.123 C 158.850 192.134,162.762 194.385,165.794 196.127 C 168.827 197.869,174.168 200.938,177.664 202.947 C 181.159 204.957,184.607 206.938,185.327 207.350 C 192.411 211.410,202.644 212.445,211.205 209.970 C 214.606 208.986,214.502 209.042,233.458 198.090 C 234.435 197.525,237.841 195.566,241.028 193.736 C 244.215 191.906,249.009 189.150,251.682 187.612 C 256.133 185.050,265.791 179.500,277.944 172.520 C 280.565 171.015,284.098 168.981,285.794 168.001 C 287.491 167.021,291.150 164.916,293.925 163.323 C 301.581 158.931,307.676 155.429,310.374 153.874 C 311.710 153.103,315.621 150.853,319.065 148.873 C 325.128 145.388,329.700 142.760,340.280 136.677 C 343.056 135.081,347.598 132.473,350.374 130.881 C 363.038 123.619,365.225 122.328,366.495 121.364 C 371.857 117.291,371.961 111.192,366.740 106.988 C 366.078 106.455,363.302 104.733,360.572 103.162 C 357.841 101.591,352.874 98.735,349.533 96.815 C 346.192 94.896,341.229 92.042,338.505 90.474 C 335.780 88.906,330.145 85.666,325.981 83.273 C 317.291 78.280,308.486 73.217,300.561 68.658 C 297.528 66.913,292.145 63.819,288.598 61.781 C 285.051 59.744,281.056 57.444,279.720 56.671 C 278.383 55.898,275.355 54.156,272.991 52.800 C 268.399 50.167,264.801 48.100,258.738 44.609 C 256.657 43.411,253.292 41.475,251.262 40.308 C 247.717 38.271,241.578 34.740,233.832 30.283 C 211.662 17.529,212.125 17.774,208.171 16.728 C 204.917 15.868,198.734 15.443,195.140 15.832 M19.415 130.812 C 16.552 131.760,14.621 134.087,13.688 137.714 C 13.383 138.898,13.364 144.171,13.364 227.570 L 13.364 316.168 13.789 318.084 C 15.334 325.064,18.729 331.322,23.562 336.097 C 26.150 338.655,25.412 338.193,43.458 348.551 C 46.953 350.558,50.864 352.807,52.150 353.550 C 53.435 354.293,56.210 355.893,58.318 357.104 C 60.425 358.316,64.589 360.709,67.570 362.423 C 70.551 364.137,76.187 367.375,80.093 369.619 C 84.000 371.863,88.248 374.306,89.533 375.048 C 90.818 375.791,94.140 377.702,96.916 379.295 C 99.692 380.888,103.056 382.822,104.393 383.591 C 110.211 386.943,114.898 389.638,120.748 392.998 C 124.192 394.976,128.944 397.708,131.308 399.069 C 144.745 406.803,147.716 408.512,156.916 413.791 C 159.692 415.384,163.308 417.463,164.953 418.411 C 166.598 419.360,169.963 421.294,172.430 422.711 C 174.897 424.127,177.763 425.780,178.798 426.382 C 185.430 430.244,190.978 429.428,193.536 424.216 C 194.887 421.463,194.781 429.771,194.724 330.935 L 194.672 241.963 194.168 240.093 C 191.666 230.814,186.323 223.255,179.398 219.199 C 178.444 218.641,174.173 216.179,169.907 213.730 C 156.643 206.115,152.742 203.873,148.879 201.645 C 146.822 200.459,143.416 198.498,141.308 197.287 C 134.753 193.522,130.186 190.897,125.047 187.940 C 122.322 186.373,118.159 183.979,115.794 182.619 C 113.430 181.260,108.047 178.166,103.832 175.743 C 99.617 173.320,93.687 169.910,90.654 168.165 C 87.621 166.421,82.869 163.690,80.093 162.098 C 77.318 160.505,73.995 158.594,72.710 157.850 C 70.368 156.496,63.501 152.547,53.364 146.726 C 50.383 145.014,45.967 142.475,43.551 141.083 C 35.799 136.619,31.549 134.177,29.297 132.891 C 25.420 130.680,21.993 129.958,19.415 130.812 M374.854 133.346 C 373.037 133.691,371.341 134.472,367.103 136.914 C 365.098 138.069,360.893 140.486,357.757 142.284 C 351.797 145.701,344.814 149.711,337.383 153.981 C 334.967 155.370,331.056 157.616,328.692 158.973 C 326.327 160.330,322.416 162.576,320.000 163.964 C 317.584 165.353,313.000 167.984,309.813 169.813 C 306.626 171.641,302.379 174.081,300.374 175.234 C 298.369 176.388,294.164 178.804,291.028 180.603 C 287.893 182.402,283.603 184.864,281.495 186.074 C 279.388 187.284,275.098 189.748,271.963 191.548 C 268.827 193.348,264.579 195.788,262.523 196.970 C 260.467 198.152,255.084 201.243,250.561 203.839 C 246.037 206.435,238.720 210.637,234.299 213.177 C 229.879 215.717,225.458 218.254,224.476 218.816 C 216.860 223.172,210.908 231.624,208.834 241.028 C 208.316 243.381,208.322 417.821,208.841 419.501 C 210.904 426.177,216.467 427.994,223.408 424.258 C 224.420 423.713,234.714 417.819,244.393 412.242 C 246.037 411.295,250.285 408.855,253.832 406.821 C 257.379 404.788,261.332 402.517,262.617 401.775 C 265.002 400.398,270.525 397.227,280.841 391.309 C 284.028 389.481,288.276 387.041,290.280 385.888 C 292.285 384.734,297.668 381.643,302.243 379.018 C 306.818 376.393,314.472 371.999,319.252 369.252 C 324.033 366.505,331.981 361.942,336.916 359.112 C 341.850 356.282,347.234 353.190,348.879 352.243 C 350.523 351.295,354.477 349.024,357.664 347.196 C 372.473 338.703,371.747 339.149,374.189 337.030 C 379.117 332.754,383.443 325.178,384.980 318.131 C 385.445 316.001,385.532 142.221,385.070 140.374 C 383.708 134.938,379.979 132.372,374.854 133.346 M356.111 243.035 L 356.039 315.321 354.235 316.387 C 351.513 317.995,347.545 320.325,346.075 321.179 C 345.355 321.597,344.178 322.290,343.458 322.718 C 342.738 323.147,341.350 323.960,340.374 324.526 C 339.397 325.092,336.201 326.965,333.271 328.688 C 327.278 332.211,325.106 333.458,324.960 333.458 C 324.905 333.458,324.860 309.192,324.860 279.533 C 324.860 249.874,324.826 225.607,324.784 225.607 C 324.679 225.607,322.949 226.604,320.093 228.310 C 318.757 229.108,316.654 230.355,315.421 231.080 C 314.187 231.805,312.589 232.752,311.869 233.183 C 311.150 233.615,309.341 234.687,307.850 235.566 C 306.360 236.445,303.458 238.163,301.402 239.384 C 299.346 240.605,296.882 242.063,295.928 242.624 L 294.192 243.645 294.217 297.540 C 294.242 351.231,294.241 351.435,293.869 351.696 C 293.663 351.840,292.414 352.579,291.093 353.339 C 289.772 354.099,287.935 355.164,287.009 355.707 C 286.084 356.250,284.864 356.962,284.299 357.289 C 283.098 357.984,277.145 361.447,274.579 362.942 C 273.603 363.512,272.425 364.204,271.963 364.482 C 271.500 364.759,270.533 365.328,269.813 365.746 C 262.449 370.022,260.510 371.150,259.626 371.671 C 259.061 372.005,257.799 372.743,256.822 373.312 C 255.846 373.881,253.827 375.060,252.336 375.933 C 250.846 376.806,248.827 377.982,247.850 378.546 C 241.858 382.009,237.445 384.582,234.972 386.056 C 234.006 386.632,233.113 387.103,232.989 387.103 C 232.770 387.103,232.430 310.317,232.430 260.968 L 232.430 244.085 234.673 242.725 C 235.907 241.977,239.439 239.871,242.523 238.044 C 245.607 236.217,248.720 234.367,249.439 233.933 C 250.159 233.498,251.883 232.469,253.271 231.645 C 259.482 227.961,269.074 222.254,271.121 221.027 C 272.355 220.287,275.888 218.184,278.972 216.354 C 282.056 214.524,285.589 212.422,286.822 211.682 C 288.056 210.942,291.589 208.840,294.673 207.010 C 297.757 205.180,301.290 203.080,302.523 202.343 C 303.757 201.607,306.028 200.256,307.570 199.343 C 309.112 198.429,312.014 196.705,314.019 195.512 C 322.496 190.466,326.282 188.212,329.720 186.162 C 331.724 184.966,335.678 182.614,338.505 180.934 C 344.767 177.215,351.809 173.019,354.206 171.580 C 355.182 170.993,356.027 170.566,356.082 170.631 C 356.138 170.695,356.151 203.277,356.111 243.035 ", stroke: "none", fill: "#cb0404", "fill-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { id: "path2", d: "M197.850 0.130 C 194.937 0.261,189.681 1.241,187.608 2.039 C 186.001 2.658,183.690 3.810,183.012 4.331 C 182.767 4.519,182.473 4.674,182.358 4.675 C 182.243 4.676,181.620 5.012,180.974 5.422 C 180.327 5.833,179.747 6.168,179.686 6.168 C 179.624 6.168,179.059 6.490,178.431 6.883 C 177.803 7.276,177.136 7.655,176.948 7.724 C 176.760 7.793,176.171 8.131,175.639 8.474 C 174.610 9.138,168.384 12.712,166.355 13.804 C 165.687 14.163,164.888 14.639,164.579 14.862 C 164.271 15.084,163.556 15.501,162.991 15.789 C 162.425 16.076,161.762 16.468,161.517 16.660 C 161.272 16.852,160.986 17.009,160.883 17.009 C 160.779 17.009,160.162 17.346,159.511 17.757 C 158.860 18.168,158.279 18.505,158.220 18.505 C 158.161 18.505,157.656 18.797,157.097 19.155 C 156.538 19.512,155.595 20.061,155.003 20.375 C 154.410 20.688,153.252 21.346,152.430 21.837 C 151.607 22.328,150.766 22.825,150.561 22.941 C 150.355 23.056,149.640 23.470,148.972 23.861 C 147.780 24.557,147.488 24.721,145.292 25.922 C 144.695 26.249,143.746 26.816,143.184 27.183 C 142.622 27.550,142.092 27.850,142.007 27.850 C 141.921 27.850,141.381 28.152,140.805 28.519 C 140.230 28.887,139.582 29.256,139.366 29.339 C 139.149 29.422,138.511 29.794,137.948 30.166 C 137.385 30.537,136.853 30.841,136.765 30.841 C 136.677 30.841,136.171 31.121,135.639 31.463 C 134.595 32.135,129.608 35.017,128.692 35.478 C 128.383 35.633,127.921 35.904,127.664 36.080 C 127.407 36.257,126.734 36.652,126.168 36.959 C 124.781 37.713,122.484 39.033,121.682 39.537 C 121.322 39.764,120.464 40.257,119.775 40.633 C 119.085 41.010,118.470 41.400,118.408 41.500 C 118.346 41.600,118.177 41.682,118.033 41.682 C 117.888 41.682,117.267 41.998,116.652 42.383 C 116.038 42.769,114.933 43.421,114.197 43.832 C 113.461 44.243,112.384 44.862,111.803 45.208 C 111.223 45.554,110.285 46.089,109.720 46.398 C 109.154 46.707,108.481 47.108,108.224 47.290 C 107.967 47.472,107.463 47.759,107.103 47.927 C 106.743 48.096,105.692 48.690,104.766 49.248 C 103.841 49.806,102.602 50.514,102.012 50.821 C 101.423 51.129,100.566 51.637,100.109 51.952 C 99.652 52.266,99.220 52.523,99.150 52.523 C 99.079 52.523,98.505 52.837,97.875 53.220 C 96.679 53.946,96.133 54.254,94.171 55.305 C 93.522 55.653,92.639 56.179,92.209 56.473 C 91.780 56.768,91.379 57.009,91.318 57.009 C 91.258 57.009,90.654 57.346,89.978 57.757 C 89.301 58.168,88.692 58.505,88.626 58.505 C 88.559 58.505,87.929 58.884,87.226 59.346 C 86.522 59.809,85.903 60.187,85.849 60.187 C 85.796 60.187,84.858 60.705,83.764 61.339 C 82.670 61.972,81.103 62.866,80.280 63.325 C 79.458 63.784,78.584 64.317,78.339 64.510 C 78.094 64.702,77.800 64.861,77.685 64.862 C 77.570 64.863,76.948 65.199,76.301 65.609 C 75.654 66.019,75.063 66.355,74.986 66.355 C 74.910 66.355,74.387 66.656,73.825 67.024 C 73.264 67.391,72.608 67.770,72.369 67.865 C 72.130 67.961,71.583 68.280,71.154 68.574 C 70.725 68.868,69.953 69.330,69.439 69.601 C 68.925 69.871,68.000 70.386,67.383 70.744 C 66.766 71.102,65.932 71.586,65.530 71.819 C 65.127 72.052,64.412 72.467,63.941 72.742 C 63.470 73.016,62.579 73.511,61.963 73.841 C 61.346 74.172,60.490 74.683,60.060 74.978 C 59.630 75.273,59.217 75.514,59.141 75.514 C 59.065 75.514,58.396 75.893,57.654 76.355 C 56.912 76.818,56.245 77.196,56.172 77.196 C 56.099 77.196,55.816 77.354,55.543 77.547 C 55.270 77.741,54.332 78.299,53.458 78.789 C 52.584 79.279,51.280 80.015,50.561 80.426 C 49.841 80.837,48.874 81.380,48.411 81.633 C 47.949 81.887,47.208 82.338,46.766 82.636 C 46.324 82.934,45.900 83.178,45.823 83.178 C 45.746 83.178,45.070 83.556,44.319 84.019 C 43.569 84.481,42.909 84.860,42.853 84.860 C 42.797 84.860,42.218 85.196,41.567 85.607 C 40.916 86.019,40.316 86.355,40.234 86.355 C 40.152 86.355,39.666 86.630,39.155 86.967 C 38.643 87.303,37.762 87.818,37.196 88.112 C 36.631 88.405,35.919 88.822,35.613 89.037 C 35.308 89.253,34.943 89.446,34.803 89.467 C 34.662 89.488,34.407 89.625,34.236 89.772 C 33.945 90.022,32.889 90.635,29.252 92.663 C 28.430 93.122,27.624 93.615,27.462 93.758 C 27.300 93.901,27.096 94.019,27.010 94.019 C 26.924 94.019,26.247 94.397,25.504 94.860 C 24.762 95.322,24.091 95.701,24.013 95.701 C 23.936 95.701,23.339 96.037,22.688 96.449 C 22.037 96.860,21.463 97.196,21.411 97.196 C 21.360 97.196,20.706 97.563,19.958 98.012 C 17.358 99.570,15.958 100.374,15.844 100.374 C 15.230 100.374,10.137 104.427,9.241 105.628 C 9.030 105.912,8.674 106.296,8.452 106.483 C 8.229 106.670,7.837 107.117,7.581 107.477 C 5.905 109.831,4.824 111.471,4.656 111.915 C 4.548 112.198,4.352 112.556,4.220 112.710 C 3.640 113.390,1.940 117.196,1.464 118.879 C 0.579 122.013,0.388 122.812,0.193 124.206 C 0.041 125.298,-0.001 152.536,0.039 225.234 L 0.094 324.766 0.592 326.542 C 0.866 327.519,1.228 328.822,1.396 329.439 C 1.816 330.974,3.828 335.400,4.420 336.089 C 4.559 336.252,4.673 336.474,4.673 336.584 C 4.673 336.831,6.591 339.689,7.316 340.521 C 7.610 340.858,7.850 341.198,7.850 341.275 C 7.850 341.446,11.274 344.872,12.384 345.812 C 13.299 346.587,16.114 348.411,16.395 348.411 C 16.500 348.411,16.786 348.566,17.031 348.755 C 17.276 348.944,18.065 349.417,18.785 349.805 C 19.505 350.194,20.220 350.619,20.374 350.749 C 20.528 350.879,21.113 351.215,21.673 351.496 C 22.234 351.777,22.906 352.153,23.168 352.331 C 23.688 352.685,26.112 354.083,27.009 354.546 C 27.318 354.706,28.008 355.115,28.542 355.455 C 29.077 355.796,29.591 356.075,29.685 356.075 C 29.778 356.075,30.169 356.288,30.553 356.549 C 30.937 356.810,31.806 357.328,32.483 357.700 C 33.161 358.072,34.005 358.574,34.360 358.814 C 34.715 359.055,35.074 359.252,35.159 359.252 C 35.243 359.252,35.841 359.588,36.488 359.998 C 37.134 360.408,37.763 360.745,37.884 360.746 C 38.005 360.747,38.222 360.866,38.367 361.010 C 38.511 361.155,39.337 361.667,40.202 362.149 C 42.971 363.691,43.436 363.961,44.592 364.698 C 45.216 365.095,45.783 365.421,45.851 365.421 C 45.919 365.421,46.524 365.757,47.196 366.168 C 47.868 366.579,48.489 366.916,48.576 366.916 C 48.663 366.916,48.935 367.073,49.180 367.265 C 49.426 367.457,50.089 367.851,50.654 368.142 C 51.220 368.432,52.102 368.948,52.614 369.288 C 53.127 369.628,53.615 369.907,53.698 369.907 C 53.781 369.907,54.329 370.214,54.916 370.589 C 55.502 370.965,56.234 371.389,56.542 371.532 C 56.850 371.675,57.860 372.251,58.785 372.812 C 59.710 373.374,60.941 374.081,61.521 374.385 C 62.100 374.689,62.953 375.193,63.417 375.506 C 63.881 375.819,64.332 376.075,64.420 376.076 C 64.508 376.077,65.166 376.455,65.882 376.917 C 66.599 377.379,67.249 377.757,67.327 377.757 C 67.405 377.757,67.932 378.053,68.497 378.414 C 69.062 378.776,69.721 379.146,69.961 379.238 C 70.202 379.329,70.729 379.630,71.134 379.907 C 71.538 380.183,72.358 380.675,72.956 380.999 C 74.831 382.017,75.383 382.329,76.740 383.138 C 77.465 383.571,78.159 383.925,78.282 383.925 C 78.404 383.925,78.505 383.996,78.505 384.082 C 78.505 384.168,78.694 384.336,78.925 384.454 C 79.157 384.572,79.935 385.000,80.654 385.405 C 81.374 385.810,82.425 386.395,82.991 386.705 C 83.556 387.015,84.397 387.526,84.860 387.839 C 85.322 388.153,85.763 388.410,85.840 388.410 C 85.916 388.411,86.587 388.790,87.330 389.252 C 88.074 389.715,88.762 390.093,88.859 390.093 C 88.956 390.093,89.169 390.209,89.331 390.351 C 89.493 390.493,90.173 390.902,90.841 391.261 C 91.509 391.620,92.477 392.165,92.991 392.473 C 93.505 392.781,94.556 393.389,95.327 393.823 C 96.098 394.258,96.855 394.689,97.009 394.781 C 97.164 394.874,97.584 395.120,97.944 395.329 C 98.304 395.537,99.103 396.001,99.720 396.359 C 100.336 396.717,101.220 397.211,101.682 397.457 C 102.145 397.702,102.984 398.207,103.547 398.578 C 104.110 398.949,104.640 399.252,104.723 399.252 C 104.807 399.252,105.394 399.589,106.027 400.000 C 106.659 400.411,107.253 400.748,107.345 400.748 C 107.437 400.748,107.746 400.914,108.031 401.117 C 108.317 401.320,109.052 401.762,109.665 402.099 C 111.726 403.230,113.360 404.161,114.019 404.578 C 114.379 404.807,115.178 405.269,115.794 405.607 C 116.411 405.944,117.116 406.376,117.362 406.568 C 117.607 406.759,117.957 406.916,118.140 406.916 C 118.324 406.916,118.502 406.984,118.536 407.067 C 118.611 407.250,120.784 408.598,121.003 408.598 C 121.088 408.598,121.381 408.754,121.653 408.943 C 121.926 409.133,122.612 409.542,123.178 409.851 C 123.743 410.161,124.626 410.667,125.140 410.976 C 127.325 412.289,128.723 413.084,128.849 413.084 C 128.923 413.084,129.559 413.463,130.261 413.925 C 130.963 414.388,131.603 414.766,131.683 414.766 C 131.763 414.766,132.361 415.103,133.013 415.514 C 133.664 415.925,134.263 416.262,134.345 416.262 C 134.426 416.262,134.793 416.466,135.160 416.715 C 135.527 416.965,136.409 417.481,137.119 417.863 C 137.830 418.246,138.612 418.714,138.857 418.905 C 139.102 419.096,139.384 419.252,139.482 419.252 C 139.581 419.252,139.895 419.419,140.181 419.622 C 140.466 419.825,141.201 420.267,141.814 420.603 C 143.434 421.492,145.403 422.609,146.262 423.126 C 148.426 424.428,150.169 425.421,150.293 425.421 C 150.370 425.421,151.008 425.799,151.712 426.261 C 152.415 426.724,153.084 427.102,153.199 427.102 C 153.314 427.103,153.609 427.261,153.855 427.455 C 154.102 427.649,154.891 428.122,155.609 428.506 C 156.328 428.890,157.042 429.311,157.196 429.441 C 157.350 429.571,158.008 429.960,158.657 430.306 C 160.433 431.252,161.106 431.627,162.336 432.355 C 162.953 432.721,164.089 433.382,164.860 433.826 C 165.631 434.269,166.724 434.906,167.290 435.241 C 167.855 435.577,168.822 436.125,169.439 436.460 C 170.056 436.795,170.761 437.224,171.007 437.413 C 171.252 437.602,171.535 437.757,171.635 437.757 C 171.736 437.757,172.426 438.136,173.168 438.598 C 173.910 439.061,174.560 439.439,174.612 439.439 C 174.664 439.439,175.414 439.855,176.279 440.363 C 177.143 440.872,178.145 441.460,178.505 441.671 C 178.864 441.881,179.866 442.475,180.731 442.989 C 181.595 443.504,182.369 443.925,182.450 443.925 C 182.532 443.925,182.960 444.169,183.402 444.467 C 183.844 444.765,184.500 445.137,184.860 445.293 C 185.220 445.449,185.893 445.741,186.355 445.942 C 188.234 446.757,190.669 447.416,194.112 448.042 C 200.126 449.136,210.058 447.630,214.486 444.954 C 214.897 444.706,215.641 444.293,216.138 444.036 C 216.635 443.779,217.434 443.332,217.914 443.043 C 218.393 442.753,219.037 442.376,219.346 442.204 C 221.185 441.179,222.395 440.475,222.813 440.187 C 223.075 440.006,223.748 439.626,224.308 439.343 C 224.869 439.060,225.664 438.601,226.075 438.324 C 226.486 438.047,226.969 437.766,227.149 437.701 C 227.329 437.636,227.940 437.285,228.508 436.922 C 229.076 436.559,229.604 436.262,229.683 436.262 C 229.761 436.262,230.285 435.961,230.847 435.594 C 231.409 435.228,232.332 434.677,232.897 434.371 C 234.111 433.714,234.588 433.442,236.384 432.383 C 237.125 431.946,237.783 431.589,237.846 431.589 C 237.910 431.589,238.469 431.252,239.088 430.841 C 239.707 430.430,240.265 430.093,240.329 430.093 C 240.437 430.093,241.827 429.300,244.019 427.987 C 244.533 427.679,245.500 427.132,246.168 426.771 C 246.836 426.410,247.584 425.959,247.829 425.768 C 248.074 425.577,248.370 425.421,248.486 425.421 C 248.603 425.421,248.991 425.222,249.349 424.979 C 249.707 424.737,250.463 424.285,251.028 423.976 C 251.593 423.668,252.771 422.986,253.645 422.462 C 254.519 421.937,255.716 421.258,256.306 420.952 C 256.895 420.646,257.736 420.153,258.175 419.855 C 258.613 419.558,259.119 419.262,259.299 419.196 C 259.478 419.131,260.090 418.780,260.657 418.417 C 261.225 418.054,261.758 417.757,261.841 417.757 C 261.924 417.757,262.364 417.520,262.818 417.229 C 263.681 416.678,265.729 415.494,267.462 414.544 C 268.020 414.238,268.775 413.785,269.141 413.536 C 269.507 413.288,269.902 413.084,270.018 413.084 C 270.135 413.084,270.431 412.926,270.678 412.732 C 270.924 412.538,271.713 412.065,272.432 411.681 C 273.150 411.297,273.864 410.876,274.019 410.746 C 274.173 410.616,274.758 410.280,275.318 409.999 C 275.878 409.718,276.551 409.340,276.813 409.159 C 277.230 408.871,278.341 408.225,280.280 407.141 C 280.589 406.968,281.365 406.511,282.005 406.124 C 282.645 405.737,283.235 405.421,283.317 405.421 C 283.398 405.421,283.758 405.222,284.115 404.980 C 284.473 404.738,285.355 404.220,286.075 403.829 C 286.794 403.437,287.584 402.963,287.829 402.774 C 288.074 402.585,288.369 402.430,288.483 402.430 C 288.598 402.429,289.267 402.051,289.971 401.588 C 290.674 401.126,291.327 400.748,291.422 400.748 C 291.517 400.748,292.035 400.464,292.573 400.117 C 293.693 399.394,294.753 398.781,296.355 397.930 C 296.972 397.602,297.828 397.092,298.258 396.798 C 298.688 396.503,299.101 396.262,299.177 396.262 C 299.253 396.262,299.922 395.883,300.664 395.421 C 301.406 394.958,302.096 394.579,302.196 394.579 C 302.297 394.579,302.580 394.425,302.825 394.236 C 303.070 394.046,303.776 393.618,304.393 393.283 C 305.443 392.712,305.952 392.417,308.766 390.748 C 309.373 390.388,309.915 390.093,309.971 390.093 C 310.026 390.093,310.619 389.750,311.287 389.331 C 312.501 388.570,312.951 388.315,315.175 387.126 C 315.824 386.779,316.569 386.344,316.830 386.160 C 317.091 385.976,317.806 385.552,318.419 385.219 C 319.031 384.886,319.733 384.458,319.978 384.269 C 320.224 384.080,320.518 383.925,320.633 383.925 C 320.747 383.925,321.417 383.546,322.120 383.084 C 322.824 382.621,323.462 382.243,323.539 382.243 C 323.663 382.243,325.406 381.251,327.570 379.948 C 328.552 379.357,330.749 378.105,331.375 377.780 C 331.647 377.639,332.393 377.198,333.033 376.799 C 333.673 376.401,334.271 376.075,334.363 376.075 C 334.454 376.075,334.730 375.918,334.975 375.726 C 335.220 375.534,335.883 375.139,336.449 374.849 C 337.014 374.558,337.896 374.043,338.409 373.702 C 338.921 373.362,339.407 373.084,339.488 373.084 C 339.569 373.084,340.159 372.768,340.799 372.381 C 341.439 371.994,342.215 371.535,342.523 371.362 C 342.832 371.188,343.414 370.853,343.816 370.617 C 345.661 369.534,346.338 369.149,347.383 368.589 C 348.000 368.258,348.841 367.761,349.252 367.483 C 349.664 367.206,350.147 366.925,350.327 366.860 C 350.506 366.795,351.118 366.444,351.685 366.081 C 352.253 365.718,352.777 365.421,352.850 365.421 C 353.054 365.421,355.225 364.062,355.296 363.890 C 355.330 363.806,355.498 363.738,355.670 363.738 C 355.841 363.737,356.360 363.480,356.822 363.167 C 357.607 362.635,358.082 362.361,360.731 360.913 C 361.287 360.608,362.112 360.110,362.563 359.806 C 363.014 359.501,363.446 359.252,363.523 359.252 C 363.599 359.252,364.276 358.874,365.026 358.411 C 365.777 357.949,366.455 357.570,366.534 357.570 C 366.612 357.570,366.987 357.359,367.367 357.102 C 367.746 356.845,368.619 356.330,369.307 355.959 C 369.994 355.588,370.758 355.125,371.005 354.932 C 371.251 354.738,371.535 354.579,371.636 354.579 C 371.737 354.579,372.336 354.265,372.966 353.881 C 373.596 353.497,374.341 353.055,374.621 352.900 C 374.901 352.744,375.910 352.164,376.864 351.610 C 377.818 351.056,379.162 350.286,379.851 349.900 C 380.539 349.514,381.338 349.034,381.626 348.835 C 381.914 348.635,382.288 348.422,382.458 348.361 C 382.940 348.188,385.835 346.343,386.355 345.878 C 386.612 345.648,387.326 345.013,387.942 344.467 C 388.557 343.921,389.272 343.223,389.530 342.914 C 389.789 342.606,390.153 342.182,390.340 341.971 C 391.377 340.803,392.336 339.524,392.336 339.310 C 392.336 339.176,392.402 339.065,392.483 339.065 C 392.625 339.065,392.785 338.833,393.882 337.022 C 394.630 335.789,396.799 331.288,396.933 330.693 C 396.995 330.415,397.212 329.727,397.414 329.165 C 397.616 328.603,397.965 327.468,398.188 326.642 L 398.593 325.140 398.650 225.888 C 398.688 158.978,398.643 125.935,398.514 124.486 C 398.297 122.057,397.164 118.061,395.993 115.595 C 395.627 114.823,395.327 114.123,395.327 114.041 C 395.327 113.958,395.011 113.393,394.624 112.786 C 394.238 112.179,393.756 111.366,393.553 110.979 C 393.349 110.592,392.993 110.070,392.760 109.819 C 392.527 109.568,392.336 109.277,392.336 109.173 C 392.336 108.997,391.897 108.446,389.866 106.075 C 388.854 104.893,385.944 102.249,385.204 101.838 C 384.896 101.667,384.503 101.402,384.331 101.249 C 384.159 101.097,383.514 100.702,382.897 100.371 C 382.280 100.040,381.565 99.622,381.308 99.441 C 381.051 99.260,380.336 98.843,379.720 98.513 C 379.103 98.183,378.213 97.689,377.741 97.414 C 377.270 97.140,376.555 96.726,376.153 96.493 C 375.750 96.261,375.294 95.997,375.140 95.906 C 373.668 95.038,372.477 94.353,371.776 93.970 C 369.418 92.683,367.711 91.692,367.311 91.378 C 367.066 91.186,366.794 91.028,366.707 91.028 C 366.620 91.028,366.018 90.713,365.368 90.327 C 364.719 89.942,363.940 89.484,363.636 89.310 C 363.333 89.137,362.537 88.682,361.869 88.299 C 361.201 87.917,360.318 87.402,359.907 87.154 C 357.742 85.852,355.999 84.860,355.875 84.860 C 355.799 84.860,355.160 84.481,354.457 84.019 C 353.753 83.557,353.098 83.178,353.001 83.178 C 352.903 83.178,352.525 82.981,352.160 82.741 C 351.430 82.261,349.272 81.011,347.664 80.137 C 347.098 79.830,346.425 79.434,346.168 79.258 C 345.911 79.082,345.449 78.811,345.140 78.656 C 344.832 78.501,343.822 77.926,342.897 77.379 C 341.972 76.831,340.668 76.091,340.000 75.734 C 339.332 75.377,338.659 74.982,338.505 74.855 C 338.350 74.728,337.636 74.306,336.916 73.917 C 336.196 73.529,335.407 73.056,335.162 72.867 C 334.917 72.678,334.631 72.523,334.528 72.523 C 334.424 72.523,333.807 72.187,333.156 71.776 C 332.505 71.364,331.895 71.028,331.801 71.028 C 331.707 71.028,331.191 70.725,330.653 70.355 C 330.115 69.986,329.448 69.586,329.170 69.468 C 328.892 69.349,328.208 68.974,327.650 68.634 C 326.266 67.791,324.676 66.854,324.112 66.549 C 323.281 66.100,322.757 65.802,320.763 64.641 C 320.292 64.367,319.360 63.846,318.692 63.484 C 318.023 63.121,317.098 62.568,316.636 62.254 C 316.173 61.941,315.729 61.683,315.650 61.683 C 315.570 61.683,314.972 61.346,314.321 60.935 C 313.670 60.523,313.052 60.187,312.949 60.187 C 312.845 60.187,312.560 60.032,312.315 59.843 C 312.070 59.654,311.322 59.200,310.654 58.834 C 309.986 58.468,308.964 57.886,308.383 57.542 C 306.972 56.705,306.421 56.389,304.112 55.088 C 303.033 54.481,301.554 53.613,300.825 53.160 C 300.097 52.707,299.415 52.336,299.309 52.336 C 299.203 52.336,298.915 52.180,298.670 51.989 C 298.425 51.798,297.641 51.322,296.928 50.932 C 296.214 50.541,295.340 50.024,294.986 49.784 C 294.631 49.543,294.270 49.346,294.183 49.346 C 294.097 49.346,293.564 49.050,292.999 48.689 C 292.434 48.327,291.753 47.949,291.487 47.847 C 291.220 47.746,290.735 47.462,290.408 47.217 C 290.081 46.971,289.308 46.506,288.692 46.182 C 288.075 45.859,287.276 45.418,286.916 45.203 C 284.692 43.875,284.092 43.526,283.084 42.979 C 282.467 42.644,281.762 42.215,281.517 42.026 C 281.272 41.837,280.968 41.682,280.841 41.682 C 280.715 41.682,280.411 41.526,280.165 41.335 C 279.920 41.144,279.173 40.693,278.505 40.332 C 277.836 39.971,276.869 39.424,276.355 39.116 C 275.841 38.808,274.790 38.200,274.019 37.766 C 273.248 37.331,272.491 36.900,272.336 36.807 C 272.182 36.715,271.727 36.449,271.324 36.217 C 270.921 35.985,270.206 35.570,269.735 35.296 C 269.264 35.022,268.374 34.529,267.757 34.200 C 267.140 33.872,266.509 33.498,266.355 33.370 C 266.201 33.242,265.486 32.819,264.766 32.429 C 264.047 32.040,263.165 31.523,262.807 31.281 C 262.449 31.039,262.100 30.841,262.032 30.841 C 261.963 30.841,261.371 30.526,260.715 30.140 C 260.059 29.755,259.273 29.297,258.967 29.123 C 257.206 28.123,255.893 27.364,255.234 26.968 C 252.939 25.586,251.322 24.673,251.173 24.673 C 251.079 24.673,250.735 24.472,250.408 24.227 C 250.081 23.981,249.380 23.563,248.851 23.298 C 248.321 23.033,247.510 22.561,247.048 22.249 C 246.586 21.937,246.134 21.682,246.043 21.682 C 245.953 21.682,245.452 21.401,244.930 21.057 C 243.986 20.435,242.704 19.696,240.748 18.647 C 240.182 18.344,239.636 18.029,239.533 17.946 C 239.430 17.864,238.883 17.547,238.318 17.241 C 237.336 16.710,236.527 16.237,234.346 14.922 C 233.806 14.597,232.818 14.038,232.150 13.680 C 231.481 13.323,230.734 12.874,230.489 12.683 C 230.244 12.492,229.940 12.336,229.813 12.336 C 229.687 12.336,229.383 12.179,229.137 11.988 C 228.892 11.796,228.229 11.403,227.664 11.115 C 227.098 10.827,226.509 10.488,226.355 10.361 C 226.201 10.235,225.570 9.862,224.953 9.532 C 224.336 9.202,223.495 8.726,223.084 8.473 C 221.334 7.396,219.182 6.168,219.045 6.168 C 218.964 6.168,218.528 5.919,218.077 5.615 C 212.439 1.810,205.050 -0.194,197.850 0.130 M204.243 15.987 C 210.503 16.799,209.819 16.469,233.832 30.283 C 241.578 34.740,247.717 38.271,251.262 40.308 C 253.292 41.475,256.657 43.411,258.738 44.609 C 264.801 48.100,268.399 50.167,272.991 52.800 C 275.355 54.156,278.383 55.898,279.720 56.671 C 281.056 57.444,285.051 59.744,288.598 61.781 C 292.145 63.819,297.528 66.913,300.561 68.658 C 308.486 73.217,317.291 78.280,325.981 83.273 C 330.145 85.666,335.780 88.906,338.505 90.474 C 341.229 92.042,346.192 94.896,349.533 96.815 C 352.874 98.735,357.841 101.591,360.572 103.162 C 363.302 104.733,366.078 106.455,366.740 106.988 C 371.961 111.192,371.857 117.291,366.495 121.364 C 365.225 122.328,363.038 123.619,350.374 130.881 C 347.598 132.473,343.056 135.081,340.280 136.677 C 329.700 142.760,325.128 145.388,319.065 148.873 C 315.621 150.853,311.710 153.103,310.374 153.874 C 307.676 155.429,301.581 158.931,293.925 163.323 C 291.150 164.916,287.491 167.021,285.794 168.001 C 284.098 168.981,280.565 171.015,277.944 172.520 C 265.791 179.500,256.133 185.050,251.682 187.612 C 249.009 189.150,244.215 191.906,241.028 193.736 C 237.841 195.566,234.435 197.525,233.458 198.090 C 214.502 209.042,214.606 208.986,211.205 209.970 C 202.644 212.445,192.411 211.410,185.327 207.350 C 184.607 206.938,181.159 204.957,177.664 202.947 C 174.168 200.938,168.827 197.869,165.794 196.127 C 162.762 194.385,158.850 192.134,157.103 191.123 C 155.355 190.113,152.243 188.321,150.187 187.141 C 146.331 184.929,140.724 181.703,136.636 179.344 C 135.350 178.603,131.439 176.356,127.944 174.351 C 124.449 172.346,120.790 170.243,119.813 169.678 C 118.836 169.113,116.019 167.492,113.551 166.075 C 111.084 164.659,107.425 162.555,105.421 161.401 C 103.416 160.246,100.051 158.312,97.944 157.102 C 95.836 155.892,92.766 154.126,91.121 153.177 C 87.967 151.358,82.473 148.202,74.112 143.406 C 71.336 141.813,68.014 139.903,66.729 139.159 C 65.444 138.416,62.374 136.649,59.907 135.233 C 57.439 133.816,52.981 131.251,50.000 129.533 C 47.019 127.814,42.561 125.251,40.093 123.836 C 31.763 119.061,29.997 117.131,30.002 112.813 C 30.008 108.588,31.817 106.596,39.813 102.007 C 42.229 100.621,46.435 98.205,49.159 96.638 C 51.883 95.072,57.561 91.808,61.776 89.385 C 81.017 78.326,92.480 71.737,101.682 66.447 C 105.949 63.994,112.972 59.957,117.290 57.476 C 125.564 52.722,134.802 47.411,142.897 42.754 C 148.977 39.256,161.186 32.238,169.159 27.658 C 172.500 25.739,176.874 23.217,178.879 22.054 C 185.874 17.997,188.193 17.004,192.384 16.270 C 196.056 15.627,200.629 15.518,204.243 15.987 M25.558 131.121 C 26.405 131.405,28.087 132.201,29.297 132.891 C 31.549 134.177,35.799 136.619,43.551 141.083 C 45.967 142.475,50.383 145.014,53.364 146.726 C 63.501 152.547,70.368 156.496,72.710 157.850 C 73.995 158.594,77.318 160.505,80.093 162.098 C 82.869 163.690,87.621 166.421,90.654 168.165 C 93.687 169.910,99.617 173.320,103.832 175.743 C 108.047 178.166,113.430 181.260,115.794 182.619 C 118.159 183.979,122.322 186.373,125.047 187.940 C 130.186 190.897,134.753 193.522,141.308 197.287 C 143.416 198.498,146.822 200.459,148.879 201.645 C 152.742 203.873,156.643 206.115,169.907 213.730 C 174.173 216.179,178.444 218.641,179.398 219.199 C 186.323 223.255,191.666 230.814,194.168 240.093 L 194.672 241.963 194.724 330.935 C 194.781 429.771,194.887 421.463,193.536 424.216 C 190.978 429.428,185.430 430.244,178.798 426.382 C 177.763 425.780,174.897 424.127,172.430 422.711 C 169.963 421.294,166.598 419.360,164.953 418.411 C 163.308 417.463,159.692 415.384,156.916 413.791 C 147.716 408.512,144.745 406.803,131.308 399.069 C 128.944 397.708,124.192 394.976,120.748 392.998 C 114.898 389.638,110.211 386.943,104.393 383.591 C 103.056 382.822,99.692 380.888,96.916 379.295 C 94.140 377.702,90.818 375.791,89.533 375.048 C 88.248 374.306,84.000 371.863,80.093 369.619 C 76.187 367.375,70.551 364.137,67.570 362.423 C 64.589 360.709,60.425 358.316,58.318 357.104 C 56.210 355.893,53.435 354.293,52.150 353.550 C 50.864 352.807,46.953 350.558,43.458 348.551 C 25.412 338.193,26.150 338.655,23.562 336.097 C 18.729 331.322,15.334 325.064,13.789 318.084 L 13.364 316.168 13.364 227.570 C 13.364 144.171,13.383 138.898,13.688 137.714 C 15.238 131.687,19.756 129.177,25.558 131.121 M379.808 133.626 C 382.424 134.620,384.198 136.895,385.070 140.374 C 385.532 142.221,385.445 316.001,384.980 318.131 C 382.688 328.639,377.123 336.021,367.196 341.725 C 365.140 342.906,360.850 345.368,357.664 347.196 C 354.477 349.024,350.523 351.295,348.879 352.243 C 347.234 353.190,341.850 356.282,336.916 359.112 C 331.981 361.942,324.033 366.505,319.252 369.252 C 314.472 371.999,306.818 376.393,302.243 379.018 C 297.668 381.643,292.285 384.734,290.280 385.888 C 288.276 387.041,284.028 389.481,280.841 391.309 C 270.525 397.227,265.002 400.398,262.617 401.775 C 261.332 402.517,257.379 404.788,253.832 406.821 C 250.285 408.855,246.037 411.295,244.393 412.242 C 234.714 417.819,224.420 423.713,223.408 424.258 C 216.467 427.994,210.904 426.177,208.841 419.501 C 208.322 417.821,208.316 243.381,208.834 241.028 C 210.908 231.624,216.860 223.172,224.476 218.816 C 225.458 218.254,229.879 215.717,234.299 213.177 C 238.720 210.637,246.037 206.435,250.561 203.839 C 255.084 201.243,260.467 198.152,262.523 196.970 C 264.579 195.788,268.827 193.348,271.963 191.548 C 275.098 189.748,279.388 187.284,281.495 186.074 C 283.603 184.864,287.893 182.402,291.028 180.603 C 294.164 178.804,298.369 176.388,300.374 175.234 C 302.379 174.081,306.626 171.641,309.813 169.813 C 313.000 167.984,317.584 165.353,320.000 163.964 C 322.416 162.576,326.327 160.330,328.692 158.973 C 331.056 157.616,334.967 155.370,337.383 153.981 C 344.814 149.711,351.797 145.701,357.757 142.284 C 360.893 140.486,365.098 138.069,367.103 136.914 C 373.633 133.151,376.562 132.392,379.808 133.626 ", stroke: "none", fill: "#940404", "fill-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { id: "path3", d: "M356.075 178.934 L 356.168 187.383 356.217 179.077 C 356.244 174.508,356.202 170.706,356.123 170.628 C 356.045 170.550,356.023 174.288,356.075 178.934 M324.813 259.953 C 324.839 278.946,324.881 303.276,324.907 314.019 C 324.934 324.762,324.976 309.222,325.001 279.486 C 325.026 249.750,324.984 225.421,324.907 225.421 C 324.829 225.421,324.787 240.960,324.813 259.953 M294.107 256.262 C 294.107 263.304,294.130 266.185,294.159 262.664 C 294.187 259.143,294.187 253.381,294.159 249.860 C 294.130 246.339,294.107 249.220,294.107 256.262 M232.419 272.150 C 232.419 275.285,232.445 276.568,232.476 275.000 C 232.508 273.432,232.508 270.867,232.476 269.299 C 232.445 267.731,232.419 269.014,232.419 272.150 M355.888 298.729 C 355.836 307.951,355.858 315.432,355.936 315.354 C 356.013 315.276,356.055 307.732,356.029 298.588 L 355.981 281.963 355.888 298.729 M232.608 322.150 C 232.608 325.748,232.633 327.193,232.663 325.362 C 232.694 323.530,232.694 320.586,232.663 318.820 C 232.633 317.053,232.607 318.551,232.608 322.150 M294.280 348.692 C 294.281 350.234,294.310 350.840,294.345 350.038 C 294.380 349.237,294.380 347.975,294.344 347.234 C 294.309 346.494,294.280 347.150,294.280 348.692 M232.798 376.729 C 232.798 382.486,232.821 384.868,232.850 382.023 C 232.879 379.177,232.879 374.467,232.850 371.555 C 232.821 368.644,232.798 370.972,232.798 376.729 ", stroke: "none", fill: "#de5b5b", "fill-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { id: "path4", d: "M355.980 240.561 C 355.980 263.435,356.001 272.792,356.028 261.355 C 356.055 249.918,356.055 231.203,356.028 219.766 C 356.001 208.329,355.980 217.687,355.980 240.561 M232.422 259.159 C 232.422 263.271,232.446 264.927,232.476 262.838 C 232.507 260.749,232.507 257.385,232.476 255.361 C 232.446 253.338,232.422 255.047,232.422 259.159 M294.108 286.822 C 294.108 296.692,294.131 300.702,294.159 295.733 C 294.187 290.765,294.187 282.691,294.159 277.790 C 294.131 272.888,294.108 276.953,294.108 286.822 M232.610 307.196 C 232.610 311.925,232.634 313.833,232.663 311.436 C 232.693 309.039,232.693 305.169,232.663 302.838 C 232.634 300.506,232.609 302.467,232.610 307.196 M232.797 356.262 C 232.797 361.864,232.821 364.157,232.850 361.355 C 232.879 358.554,232.879 353.970,232.850 351.168 C 232.821 348.367,232.797 350.659,232.797 356.262 ", stroke: "none", fill: "#e47c7c", "fill-rule": "evenodd" })),
    viewBox: '0 0 400, 448.5',
}) ``);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smart_react_components_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/router */ "../smart-react-components/router/lib/index.js");
/* harmony import */ var _smart_react_components_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_router_ClientRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/router/ClientRouter */ "../smart-react-components/router/lib/ClientRouter/index.js");
/* harmony import */ var _smart_react_components_router_ClientRouter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_ClientRouter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/NotFound */ "./src/containers/NotFound.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/routes.tsx");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./src/redux/index.tsx");









(0,_smart_react_components_router__WEBPACK_IMPORTED_MODULE_0__.loadModulesOnClient)(_routes__WEBPACK_IMPORTED_MODULE_7__["default"])
    .then(() => {
    const store = (0,_redux__WEBPACK_IMPORTED_MODULE_8__["default"])();
    let isDark = false;
    const match = document.cookie.match(new RegExp('(^| )isDark=([^;]+)'));
    if (match) {
        isDark = match[2] === 'true';
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(document.getElementById('app'));
    root.render(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, { store: store },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_router_ClientRouter__WEBPACK_IMPORTED_MODULE_1___default()), { fallback: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_containers_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"], null), isHashRouter: true, routes: _routes__WEBPACK_IMPORTED_MODULE_7__["default"] },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], { isDark: isDark }))));
});


/***/ }),

/***/ "./src/redux/app.tsx":
/*!***************************!*\
  !*** ./src/redux/app.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setTitle: () => (/* binding */ setTitle)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
    title: 'Smart React Components',
};
const appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'app',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
    },
});
const { setTitle } = appSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);


/***/ }),

/***/ "./src/redux/contact.tsx":
/*!*******************************!*\
  !*** ./src/redux/contact.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   submit: () => (/* binding */ submit)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.tsx");


const initialState = {
    status: _constants_status__WEBPACK_IMPORTED_MODULE_0__.Status.IDLE,
};
const submit = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)('contact/submit', async (data, action) => {
    const { email, subject, message } = data;
    try {
        const res = await fetch('https://cevadtokatli.com/mailer', {
            method: 'POST',
            body: JSON.stringify({ email, subject, message }),
            headers: {
                'Token': 'pa8NrxP53Q8io&7F7w7Au4WzqLDr2sG7',
            },
        });
        if (res.status !== 200) {
            const data = await res.json();
            return action.rejectWithValue(data.error);
        }
        return action.fulfillWithValue(null);
    }
    catch (err) {
        return action.rejectWithValue(err.message);
    }
});
const contactSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: 'contact',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(submit.pending, state => {
            state.status = _constants_status__WEBPACK_IMPORTED_MODULE_0__.Status.LOADING;
        })
            .addCase(submit.fulfilled, state => {
            state.status = _constants_status__WEBPACK_IMPORTED_MODULE_0__.Status.SUCCESS;
        })
            .addCase(submit.rejected, (state, action) => {
            state.status = _constants_status__WEBPACK_IMPORTED_MODULE_0__.Status.ERROR;
            state.error = action.payload;
        });
    },
});
const { reset } = contactSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSlice.reducer);


/***/ }),

/***/ "./src/redux/index.tsx":
/*!*****************************!*\
  !*** ./src/redux/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/redux/app.tsx");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/redux/contact.tsx");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        app: _app__WEBPACK_IMPORTED_MODULE_0__["default"],
        contact: _contact__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
    middleware: [redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]],
}));


/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        path: /\/$/,
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_containers_GettingStarted_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/GettingStarted */ "./src/containers/GettingStarted.tsx")),
    },
    {
        path: '/theme',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_Theme_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Theme */ "./src/containers/Theme.tsx")),
    },
    {
        path: '/styled-props',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_containers_StyledProps_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/StyledProps */ "./src/containers/StyledProps.tsx")),
    },
    {
        path: '/element',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_containers_Element_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Element */ "./src/containers/Element.tsx")),
    },
    {
        path: '/element-props',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_containers_ElementProps_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/ElementProps */ "./src/containers/ElementProps.tsx")),
    },
    {
        path: '/ui-components/alert',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Alert_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Alert */ "./src/containers/Alert/index.tsx")),
    },
    {
        path: '/ui-components/badge',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Badge_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Badge */ "./src/containers/Badge/index.tsx")),
    },
    {
        path: '/ui-components/breadcrumb',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Breadcrumb_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Breadcrumb */ "./src/containers/Breadcrumb.tsx")),
    },
    {
        path: '/ui-components/button',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Button_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Button */ "./src/containers/Button/index.tsx")),
    },
    {
        path: '/ui-components/checkbox',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Checkbox_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Checkbox */ "./src/containers/Checkbox.tsx")),
    },
    {
        path: '/ui-components/color-picker',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_ColorPicker_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/ColorPicker */ "./src/containers/ColorPicker.tsx")),
    },
    {
        path: '/ui-components/date-picker',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_DatePicker_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/DatePicker */ "./src/containers/DatePicker.tsx")),
    },
    {
        path: '/ui-components/dropdown',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Dropdown_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Dropdown */ "./src/containers/Dropdown.tsx")),
    },
    {
        path: '/ui-components/fixed-box',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_FixedBox_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/FixedBox */ "./src/containers/FixedBox.tsx")),
    },
    {
        path: '/ui-components/grid',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_containers_Grid_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Grid */ "./src/containers/Grid.tsx")),
    },
    {
        path: '/ui-components/input',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Input_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Input */ "./src/containers/Input/index.tsx")),
    },
    {
        path: '/ui-components/loading',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Loading_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Loading */ "./src/containers/Loading.tsx")),
    },
    {
        path: '/ui-components/modal',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Modal_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Modal */ "./src/containers/Modal.tsx")),
    },
    {
        path: '/ui-components/overlay',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Overlay_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Overlay */ "./src/containers/Overlay.tsx")),
    },
    {
        path: '/ui-components/pagination',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Pagination_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Pagination */ "./src/containers/Pagination.tsx")),
    },
    {
        path: '/ui-components/pop-up',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_containers_PopUp_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/PopUp */ "./src/containers/PopUp.tsx")),
    },
    {
        path: '/ui-components/popover',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_Popover_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Popover */ "./src/containers/Popover.tsx")),
    },
    {
        path: '/ui-components/progress-bar',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_ProgressBar_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/ProgressBar */ "./src/containers/ProgressBar.tsx")),
    },
    {
        path: '/ui-components/radio',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Radio_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Radio */ "./src/containers/Radio.tsx")),
    },
    {
        path: '/ui-components/select',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Select_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Select */ "./src/containers/Select.tsx")),
    },
    {
        path: '/ui-components/switch',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Switch_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Switch */ "./src/containers/Switch.tsx")),
    },
    {
        path: '/ui-components/table',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_containers_Table_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Table */ "./src/containers/Table.tsx")),
    },
    {
        path: '/ui-components/textarea',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Textarea_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Textarea */ "./src/containers/Textarea.tsx")),
    },
    {
        path: '/ui-components/tooltip',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_Tooltip_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Tooltip */ "./src/containers/Tooltip.tsx")),
    },
    {
        path: '/ui-components/wave-effect',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_AttributesTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_containers_WaveEffect_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/WaveEffect */ "./src/containers/WaveEffect.tsx")),
    },
    {
        path: '/transition',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_components_Example_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_components_MultiExample_tsx"), __webpack_require__.e("default-src_containers_Transition_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Transition */ "./src/containers/Transition/index.tsx")),
    },
    {
        path: '/router',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_ComponentType_tsx-src_components_PropsTable_tsx"), __webpack_require__.e("default-src_elements_Blockquote_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_containers_Router_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Router */ "./src/containers/Router.tsx")),
    },
    {
        path: '/server-side-rendering',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_components_Nav_tsx"), __webpack_require__.e("default-src_components_Code_tsx"), __webpack_require__.e("default-src_containers_ServerSideRendering_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/ServerSideRendering */ "./src/containers/ServerSideRendering.tsx")),
    },
    {
        path: '/api',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_API_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/API */ "./src/containers/API.tsx")),
    },
    {
        path: '/log',
        module: () => Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e("default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"), __webpack_require__.e("default-src_elements_Ul_tsx"), __webpack_require__.e("default-src_elements_Li_tsx"), __webpack_require__.e("default-src_containers_Log_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Log */ "./src/containers/Log.tsx")),
    },
]);


/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/theme */ "./node_modules/@smart-react-components/core/theme/index.js");
/* harmony import */ var _smart_react_components_core_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_theme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_theme_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/theme/palette */ "./node_modules/@smart-react-components/core/theme/palette.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((isDark, isMobile) => {
    const theme = _smart_react_components_core_theme__WEBPACK_IMPORTED_MODULE_0___default()({
        $: {
            color: {
                myColor: 'crimson',
                light: {
                    asideBackground: '#f7fafb',
                    asideFont: '#6c757d',
                    codeBackground: '#eef0f3',
                    exampleBorder: '#dee2e6',
                    exampleIcon: '#dee2e6',
                    headerBackground: '#0665d0',
                    headingFont: '#323a46',
                    navBorder: '#E9ECEF',
                    navFont: '#b1bbc4',
                    previewBackground: 'transparent',
                    suggestedPageBorder: '#dee2e6',
                    suggestedPageLinkFont: '#b1bbc4',
                    suggestedPageLinkFontHover: '#98a6ad',
                },
                dark: {
                    asideBackground: '#202124',
                    asideFont: '#ced4da',
                    codeBackground: '#444E57',
                    exampleBorder: '#444E57',
                    exampleIcon: '#6c757d',
                    headerBackground: '#1A1C1C',
                    headingFont: '#ced4da',
                    navBorder: '#444E57',
                    navFont: '#b1bbc4',
                    previewBackground: '#0d1117',
                    suggestedPageBorder: '#444E57',
                    suggestedPageLinkFont: '#b1bbc4',
                    suggestedPageLinkFontHover: '#dee2e6',
                },
            },
            length: {
                h2Space: '48px',
                h3Space: '24px',
                paragraphSpace: '13px',
            },
            vars: typeof isMobile !== 'undefined' ? { isMobile } : {},
        },
    }, isDark);
    theme.$.palette.myPalette = (0,_smart_react_components_core_theme_palette__WEBPACK_IMPORTED_MODULE_1__["default"])('#7e57c2', theme);
    return theme;
});


/***/ }),

/***/ "../smart-react-components/router/lib/ClientRouter/index.js":
/*!******************************************************************!*\
  !*** ../smart-react-components/router/lib/ClientRouter/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modules = void 0;
const dom_1 = __webpack_require__(/*! @smart-react-components/core/util/dom */ "../smart-react-components/router/node_modules/@smart-react-components/core/util/dom.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reducer_1 = __importStar(__webpack_require__(/*! ../reducer */ "../smart-react-components/router/lib/reducer/index.js"));
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const RoutesContext_1 = __importDefault(__webpack_require__(/*! ../RoutesContext */ "../smart-react-components/router/lib/RoutesContext/index.js"));
const util_1 = __webpack_require__(/*! ../util */ "../smart-react-components/router/lib/util/index.js");
exports.modules = {};
const ClientRouter = ({ children, fallback, isHashRouter, params, routes, progressBar }) => {
    var _a, _b, _c;
    const [state, dispatch] = react_1.default.useReducer(reducer_1.default, (0, reducer_1.generateInitialState)((0, util_1.getFullpath)(isHashRouter), isHashRouter));
    const handleURLChange = () => {
        var _a;
        const url = (0, util_1.generateURL)((0, util_1.getFullpath)(isHashRouter));
        if (((_a = state.activatingURL) === null || _a === void 0 ? void 0 : _a.fullpath) === url.fullpath
            || (!state.activatingURL && state.activeURL.fullpath === url.fullpath)) {
            return;
        }
        (function () {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function* () {
                const modulesToInvokeGetMethods = yield (0, util_1.loadModules)(state.activeURL, url, routes, exports.modules);
                if (modulesToInvokeGetMethods.length === 0) {
                    dispatch((0, reducer_1.setActiveURL)(url));
                }
                else {
                    const key = new Date().getTime();
                    dispatch((0, reducer_1.setActivatingURL)({ key, url }));
                    const _setPercentage = (value) => dispatch((0, reducer_1.setPercentage)({ key, value }));
                    const _setCancelCallback = (callback) => dispatch((0, reducer_1.setCancelCallback)({ callback, key }));
                    _setPercentage(10);
                    for (const i in modulesToInvokeGetMethods) {
                        yield ((_b = (_a = exports.modules[modulesToInvokeGetMethods[i].module]).get) === null || _b === void 0 ? void 0 : _b.call(_a, modulesToInvokeGetMethods[i].match, url, _setPercentage, _setCancelCallback, params));
                    }
                    _setPercentage(100);
                }
            });
        }());
    };
    const redirect = react_1.default.useCallback((to, isNewPage) => {
        if (isNewPage) {
            window.open(to, '_blank');
        }
        else {
            window.location.href = to;
        }
    }, []);
    const push = react_1.default.useCallback((to) => {
        const url = isHashRouter ? window.location.pathname + window.location.search + '#' + to : to;
        history.pushState({}, null, url);
        handleURLChange();
    }, [isHashRouter, state.activeURL.fullpath, (_a = state.activatingURL) === null || _a === void 0 ? void 0 : _a.fullpath]);
    const replace = react_1.default.useCallback((to) => {
        const url = isHashRouter ? window.location.pathname + window.location.search + '#' + to : to;
        history.replaceState({}, null, url);
        handleURLChange();
    }, [isHashRouter, state.activeURL.fullpath, (_b = state.activatingURL) === null || _b === void 0 ? void 0 : _b.fullpath]);
    react_1.default.useEffect(() => {
        (0, dom_1.addEventListener)(window, ['popstate'], handleURLChange);
        return () => {
            (0, dom_1.removeEventListener)(window, ['popstate'], handleURLChange);
        };
    }, [state.activeURL.fullpath, (_c = state.activatingURL) === null || _c === void 0 ? void 0 : _c.fullpath]);
    return (react_1.default.createElement(RouterContext_1.default.Provider, { value: { fallback, state, dispatch, modules: exports.modules, push, redirect, replace } },
        react_1.default.createElement(RoutesContext_1.default.Provider, { value: routes },
            progressBar && react_1.default.cloneElement(progressBar, { value: state.percentage }),
            children)));
};
ClientRouter.defaultProps = {
    isHashRouter: false,
};
exports["default"] = ClientRouter;


/***/ }),

/***/ "../smart-react-components/router/lib/Link/index.js":
/*!**********************************************************!*\
  !*** ../smart-react-components/router/lib/Link/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const A_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/Element/A */ "../smart-react-components/router/node_modules/@smart-react-components/core/Element/A.js"));
const element_props_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/element-props */ "../smart-react-components/router/node_modules/@smart-react-components/core/element-props/index.js"));
const click_events_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/element-props/click-events */ "../smart-react-components/router/node_modules/@smart-react-components/core/element-props/click-events.js"));
const intrinsic_styled_core_props_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/element-props/intrinsic-styled-core-props */ "../smart-react-components/router/node_modules/@smart-react-components/core/element-props/intrinsic-styled-core-props.js"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const useLink_1 = __importDefault(__webpack_require__(/*! ../hooks/useLink */ "../smart-react-components/router/lib/hooks/useLink.js"));
const Link = props => {
    var _a;
    const { children, handleOnClick, isActivating, isActive } = (0, useLink_1.default)({
        children: props.children,
        isDisabled: props.isDisabled,
        isExact: props.isExact,
        onClick: props.onClick,
        path: props.path,
        to: props.to,
    });
    return (react_1.default.createElement(A_1.default, Object.assign({ as: props.as }, (props.isDisabled && { pointerEvents: 'none' }), (0, element_props_1.default)(props, [click_events_1.default, intrinsic_styled_core_props_1.default]), props.elementProps, { className: `${(_a = props.elementProps.className) !== null && _a !== void 0 ? _a : ''} ${isActive ? 'active' : ''} ${isActivating ? 'activating' : ''}`, href: props.to, onClick: handleOnClick }), children));
};
Link.defaultProps = {
    elementProps: {},
    isExact: true,
};
exports["default"] = Link;


/***/ }),

/***/ "../smart-react-components/router/lib/Push/index.js":
/*!**********************************************************!*\
  !*** ../smart-react-components/router/lib/Push/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const useRouter_1 = __importDefault(__webpack_require__(/*! ../useRouter */ "../smart-react-components/router/lib/useRouter/index.js"));
const Push = ({ to }) => {
    const { push } = (0, useRouter_1.default)();
    react_1.default.useEffect(() => {
        push(to);
    }, [to]);
    return null;
};
exports["default"] = Push;


/***/ }),

/***/ "../smart-react-components/router/lib/Redirect/index.js":
/*!**************************************************************!*\
  !*** ../smart-react-components/router/lib/Redirect/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const useRouter_1 = __importDefault(__webpack_require__(/*! ../useRouter */ "../smart-react-components/router/lib/useRouter/index.js"));
const Redirect = ({ isNewTab, to }) => {
    const { redirect } = (0, useRouter_1.default)();
    react_1.default.useEffect(() => {
        redirect(to, isNewTab);
    }, [to]);
    return null;
};
exports["default"] = Redirect;


/***/ }),

/***/ "../smart-react-components/router/lib/Replace/index.js":
/*!*************************************************************!*\
  !*** ../smart-react-components/router/lib/Replace/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const useRouter_1 = __importDefault(__webpack_require__(/*! ../useRouter */ "../smart-react-components/router/lib/useRouter/index.js"));
const Replace = ({ to }) => {
    const { replace } = (0, useRouter_1.default)();
    react_1.default.useEffect(() => {
        replace(to);
    }, [to]);
    return null;
};
exports["default"] = Replace;


/***/ }),

/***/ "../smart-react-components/router/lib/RouteItem/index.js":
/*!***************************************************************!*\
  !*** ../smart-react-components/router/lib/RouteItem/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const RouteItem = ({ props = {}, route }) => {
    const { modules } = react_1.default.useContext(RouterContext_1.default);
    const [component, setComponent] = react_1.default.useState(() => {
        if (modules[route.module]) {
            return react_1.default.createElement(modules[route.module].default, props);
        }
        return null;
    });
    react_1.default.useEffect(() => {
        if (!component) {
            route.module()
                .then(module => {
                modules[route.module] = module;
                setComponent(react_1.default.createElement(module.default, props));
            });
        }
    }, []);
    return component;
};
exports["default"] = RouteItem;


/***/ }),

/***/ "../smart-react-components/router/lib/Route/index.js":
/*!***********************************************************!*\
  !*** ../smart-react-components/router/lib/Route/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const useChangeEffect_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/hooks/useChangeEffect */ "../smart-react-components/router/node_modules/@smart-react-components/core/hooks/useChangeEffect.js"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const util_1 = __webpack_require__(/*! ../util */ "../smart-react-components/router/lib/util/index.js");
const Route = ({ children, isExact, path }) => {
    const router = react_1.default.useContext(RouterContext_1.default).state;
    const [match, setMatch] = react_1.default.useState(() => (0, util_1.generateMatch)(router.activeURL.pathname, path, isExact));
    (0, useChangeEffect_1.default)(() => setMatch((0, util_1.generateMatch)(router.activeURL.pathname, path, isExact)), [router.activeURL.fullpath]);
    if (typeof children !== 'function' && match) {
        return (react_1.default.createElement(react_1.default.Fragment, { key: match.key }, react_1.default.cloneElement(children, { match, url: router.activeURL })));
    }
    if (typeof children === 'function') {
        return children({ match, url: router.activeURL });
    }
    return null;
};
exports["default"] = Route;


/***/ }),

/***/ "../smart-react-components/router/lib/RouterContext/index.js":
/*!*******************************************************************!*\
  !*** ../smart-react-components/router/lib/RouterContext/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const RouterContext = (0, react_1.createContext)(null);
exports["default"] = RouterContext;


/***/ }),

/***/ "../smart-react-components/router/lib/RoutesContext/index.js":
/*!*******************************************************************!*\
  !*** ../smart-react-components/router/lib/RoutesContext/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const RoutesContext = (0, react_1.createContext)(null);
exports["default"] = RoutesContext;


/***/ }),

/***/ "../smart-react-components/router/lib/Routes/index.js":
/*!************************************************************!*\
  !*** ../smart-react-components/router/lib/Routes/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const RouteItem_1 = __importDefault(__webpack_require__(/*! ../RouteItem */ "../smart-react-components/router/lib/RouteItem/index.js"));
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const RoutesContext_1 = __importDefault(__webpack_require__(/*! ../RoutesContext */ "../smart-react-components/router/lib/RoutesContext/index.js"));
const util_1 = __webpack_require__(/*! ../util */ "../smart-react-components/router/lib/util/index.js");
const Routes = ({ children }) => {
    const router = react_1.default.useContext(RouterContext_1.default);
    const routes = react_1.default.useContext(RoutesContext_1.default);
    const component = react_1.default.useMemo(() => {
        var _a;
        if (!routes) {
            return null;
        }
        if (children) {
            return (react_1.default.createElement(react_1.default.Fragment, null, routes.map(i => (react_1.default.createElement(RoutesContext_1.default.Provider, { key: String(i.path), value: i.children }, children({
                children: react_1.default.createElement(RouteItem_1.default, { route: i }),
                match: (0, util_1.generateMatch)(router.state.activeURL.pathname, i.path, false),
                url: router.state.activeURL,
            }))))));
        }
        else {
            let item = (_a = router.fallback) !== null && _a !== void 0 ? _a : null;
            for (const i in routes) {
                const match = (0, util_1.generateMatch)(router.state.activeURL.pathname, routes[i].path, false);
                if (match) {
                    item = (react_1.default.createElement(RoutesContext_1.default.Provider, { key: String(routes[i].path), value: routes[i].children },
                        react_1.default.createElement(RouteItem_1.default, { key: match.key, route: routes[i], props: { match, url: router.state.activeURL } })));
                    break;
                }
            }
            return item;
        }
    }, [children, router.state.activeURL.fullpath]);
    return component;
};
exports["default"] = Routes;


/***/ }),

/***/ "../smart-react-components/router/lib/ServerRouter/index.js":
/*!******************************************************************!*\
  !*** ../smart-react-components/router/lib/ServerRouter/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const reducer_1 = __importStar(__webpack_require__(/*! ../reducer */ "../smart-react-components/router/lib/reducer/index.js"));
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const RoutesContext_1 = __importDefault(__webpack_require__(/*! ../RoutesContext */ "../smart-react-components/router/lib/RoutesContext/index.js"));
const ServerRouter = ({ children, fallback, modules, routes, url }) => {
    const [state, dispatch] = react_1.default.useReducer(reducer_1.default, (0, reducer_1.generateInitialState)(url, false));
    const push = react_1.default.useCallback((to) => { }, []);
    const replace = react_1.default.useCallback((to) => { }, []);
    const redirect = react_1.default.useCallback((to, isNewPage) => { }, []);
    return (react_1.default.createElement(RouterContext_1.default.Provider, { value: { state, dispatch, fallback, modules, push, redirect, replace } },
        react_1.default.createElement(RoutesContext_1.default.Provider, { value: routes }, children)));
};
exports["default"] = ServerRouter;


/***/ }),

/***/ "../smart-react-components/router/lib/hooks/useLink.js":
/*!*************************************************************!*\
  !*** ../smart-react-components/router/lib/hooks/useLink.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const useChangeEffect_1 = __importDefault(__webpack_require__(/*! @smart-react-components/core/hooks/useChangeEffect */ "../smart-react-components/router/node_modules/@smart-react-components/core/hooks/useChangeEffect.js"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
const util_1 = __webpack_require__(/*! ../util */ "../smart-react-components/router/lib/util/index.js");
const useLink = ({ children, isDisabled, isExact, onClick, path, to }) => {
    var _a;
    const router = (0, react_1.useContext)(RouterContext_1.default);
    const isMatched = (url) => url && (0, util_1.generateMatch)(url.pathname, path !== null && path !== void 0 ? path : to, isExact) !== null;
    const [isActive, setActive] = (0, react_1.useState)(() => isMatched(router.state.activeURL));
    const [isActivating, setActivating] = (0, react_1.useState)(() => isMatched(router.state.activatingURL));
    (0, useChangeEffect_1.default)(() => setActive(isMatched(router.state.activeURL)), [router.state.activeURL.fullpath]);
    (0, useChangeEffect_1.default)(() => setActivating(isMatched(router.state.activatingURL)), [(_a = router.state.activatingURL) === null || _a === void 0 ? void 0 : _a.fullpath]);
    const handleOnClick = (e) => {
        if (isDisabled) {
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        if (e.defaultPrevented) {
            return;
        }
        e.preventDefault();
        if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
            router.redirect(to, true);
        }
        else {
            router.push(to);
        }
    };
    return {
        children: typeof children === 'function' ? children({ isActivating, isActive }) : children,
        handleOnClick,
        isActivating,
        isActive,
    };
};
exports["default"] = useLink;


/***/ }),

/***/ "../smart-react-components/router/lib/index.js":
/*!*****************************************************!*\
  !*** ../smart-react-components/router/lib/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModulesOnServer = exports.loadModulesOnClient = exports.callGetMethods = exports.useRouter = exports.ServerRouter = exports.Routes = exports.Route = exports.Replace = exports.Redirect = exports.Push = exports.Link = exports.RouterContext = exports.ClientRouter = void 0;
var ClientRouter_1 = __webpack_require__(/*! ./ClientRouter */ "../smart-react-components/router/lib/ClientRouter/index.js");
Object.defineProperty(exports, "ClientRouter", ({ enumerable: true, get: function () { return __importDefault(ClientRouter_1).default; } }));
var RouterContext_1 = __webpack_require__(/*! ./RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js");
Object.defineProperty(exports, "RouterContext", ({ enumerable: true, get: function () { return __importDefault(RouterContext_1).default; } }));
var Link_1 = __webpack_require__(/*! ./Link */ "../smart-react-components/router/lib/Link/index.js");
Object.defineProperty(exports, "Link", ({ enumerable: true, get: function () { return __importDefault(Link_1).default; } }));
var Push_1 = __webpack_require__(/*! ./Push */ "../smart-react-components/router/lib/Push/index.js");
Object.defineProperty(exports, "Push", ({ enumerable: true, get: function () { return __importDefault(Push_1).default; } }));
var Redirect_1 = __webpack_require__(/*! ./Redirect */ "../smart-react-components/router/lib/Redirect/index.js");
Object.defineProperty(exports, "Redirect", ({ enumerable: true, get: function () { return __importDefault(Redirect_1).default; } }));
var Replace_1 = __webpack_require__(/*! ./Replace */ "../smart-react-components/router/lib/Replace/index.js");
Object.defineProperty(exports, "Replace", ({ enumerable: true, get: function () { return __importDefault(Replace_1).default; } }));
var Route_1 = __webpack_require__(/*! ./Route */ "../smart-react-components/router/lib/Route/index.js");
Object.defineProperty(exports, "Route", ({ enumerable: true, get: function () { return __importDefault(Route_1).default; } }));
var Routes_1 = __webpack_require__(/*! ./Routes */ "../smart-react-components/router/lib/Routes/index.js");
Object.defineProperty(exports, "Routes", ({ enumerable: true, get: function () { return __importDefault(Routes_1).default; } }));
var ServerRouter_1 = __webpack_require__(/*! ./ServerRouter */ "../smart-react-components/router/lib/ServerRouter/index.js");
Object.defineProperty(exports, "ServerRouter", ({ enumerable: true, get: function () { return __importDefault(ServerRouter_1).default; } }));
var useRouter_1 = __webpack_require__(/*! ./useRouter */ "../smart-react-components/router/lib/useRouter/index.js");
Object.defineProperty(exports, "useRouter", ({ enumerable: true, get: function () { return __importDefault(useRouter_1).default; } }));
var util_1 = __webpack_require__(/*! ./util */ "../smart-react-components/router/lib/util/index.js");
Object.defineProperty(exports, "callGetMethods", ({ enumerable: true, get: function () { return util_1.callGetMethods; } }));
Object.defineProperty(exports, "loadModulesOnClient", ({ enumerable: true, get: function () { return util_1.loadModulesOnClient; } }));
Object.defineProperty(exports, "loadModulesOnServer", ({ enumerable: true, get: function () { return util_1.loadModulesOnServer; } }));


/***/ }),

/***/ "../smart-react-components/router/lib/reducer/index.js":
/*!*************************************************************!*\
  !*** ../smart-react-components/router/lib/reducer/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateInitialState = exports.setPercentage = exports.setCancelCallback = exports.setActivatingURL = exports.setActiveURL = exports.Action = void 0;
const util_1 = __webpack_require__(/*! ../util */ "../smart-react-components/router/lib/util/index.js");
var Action;
(function (Action) {
    Action.SET_ACTIVE_URL = 'SET_ACTIVE_URL';
    Action.SET_ACTIVATING_URL = 'SET_ACTIVATING_URL';
    Action.SET_CANCEL_CALLBACK = 'SET_CANCEL_CALLBACK';
    Action.SET_PERCENTAGE = 'SET_PERCENTAGE';
    class SetActiveURL {
    }
    class SetActivatingURL {
    }
    class SetCancelCallback {
    }
    class SetPercentage {
    }
})(Action = exports.Action || (exports.Action = {}));
const setActiveURL = (payload) => ({
    type: Action.SET_ACTIVE_URL,
    payload,
});
exports.setActiveURL = setActiveURL;
const setActivatingURL = (payload) => ({
    type: Action.SET_ACTIVATING_URL,
    payload,
});
exports.setActivatingURL = setActivatingURL;
const setCancelCallback = (payload) => ({
    type: Action.SET_CANCEL_CALLBACK,
    payload,
});
exports.setCancelCallback = setCancelCallback;
const setPercentage = (payload) => ({
    type: Action.SET_PERCENTAGE,
    payload,
});
exports.setPercentage = setPercentage;
const generateInitialState = (fullpath, isHashRouter) => ({
    activatingURL: null,
    activeURL: (0, util_1.generateURL)(fullpath),
    isHashRouter,
    key: null,
    cancelCallback: null,
    percentage: 0,
});
exports.generateInitialState = generateInitialState;
const reducer = (state, action) => {
    var _a;
    switch (action.type) {
        case Action.SET_ACTIVE_URL:
            return {
                activeURL: action.payload,
                activatingURL: null,
                isHashRouter: state.isHashRouter,
                key: null,
                cancelCallback: null,
                percentage: 0,
            };
        case Action.SET_ACTIVATING_URL:
            (_a = state.cancelCallback) === null || _a === void 0 ? void 0 : _a.call(state);
            return Object.assign(Object.assign({}, state), { activatingURL: action.payload.url, key: action.payload.key, cancelCallback: null, percentage: 0 });
        case Action.SET_CANCEL_CALLBACK:
            if (action.payload.key === state.key) {
                return Object.assign(Object.assign({}, state), { cancelCallback: action.payload.callback });
            }
            return state;
        case Action.SET_PERCENTAGE:
            if (action.payload.key === state.key) {
                if (action.payload.value === 100) {
                    return reducer(state, { type: Action.SET_ACTIVE_URL, payload: state.activatingURL });
                }
                return Object.assign(Object.assign({}, state), { percentage: action.payload.value });
            }
            return state;
        default:
            return state;
    }
};
exports["default"] = reducer;


/***/ }),

/***/ "../smart-react-components/router/lib/useRouter/index.js":
/*!***************************************************************!*\
  !*** ../smart-react-components/router/lib/useRouter/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const RouterContext_1 = __importDefault(__webpack_require__(/*! ../RouterContext */ "../smart-react-components/router/lib/RouterContext/index.js"));
exports["default"] = () => {
    const router = (0, react_1.useContext)(RouterContext_1.default);
    return {
        activatingURL: router.state.activatingURL,
        activeURL: router.state.activeURL,
        percentage: router.state.percentage,
        push: router.push,
        redirect: router.redirect,
        replace: router.replace,
    };
};


/***/ }),

/***/ "../smart-react-components/router/lib/util/index.js":
/*!**********************************************************!*\
  !*** ../smart-react-components/router/lib/util/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModulesOnServer = exports.loadModulesOnClient = exports.loadModules = exports.generateURL = exports.generateMatch = exports.getPathname = exports.getFullpath = exports.callGetMethods = void 0;
const react_router_1 = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
const ClientRouter_1 = __webpack_require__(/*! ../ClientRouter */ "../smart-react-components/router/lib/ClientRouter/index.js");
/**
 * Checks and find the active routes.
 * Calls the get methods of the active routes.
 */
const callGetMethods = (url, routes, modules, params) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    const getMethods = [];
    const activeURL = (0, exports.generateURL)(url);
    const setPercentage = (value) => { };
    const setCancelCallback = (callback) => { };
    let curRoutes = routes;
    while (curRoutes) {
        let route;
        for (const i in curRoutes) {
            const match = (0, exports.generateMatch)(activeURL.pathname, curRoutes[i].path, false);
            if (match) {
                const { get } = modules[curRoutes[i].module];
                if (get) {
                    getMethods.push(get.bind(null, match, activeURL, setPercentage, setCancelCallback, params));
                }
                route = curRoutes[i];
                break;
            }
        }
        curRoutes = route === null || route === void 0 ? void 0 : route.children;
    }
    for (const i in getMethods) {
        yield getMethods[i]();
    }
    resolve();
}));
exports.callGetMethods = callGetMethods;
/**
 * Retuns the fullpath.
 */
const getFullpath = (isHashRouter) => isHashRouter ? window.location.hash.substring(1) : window.location.pathname + window.location.search + window.location.hash;
exports.getFullpath = getFullpath;
/**
 * Returns the pathname.
 */
const getPathname = () => window.location.pathname;
exports.getPathname = getPathname;
/**
 * Parses path and generates match object.
 */
const generateMatch = (pathname, path, isExact) => {
    const match = (0, react_router_1.matchPath)(pathname, { path, exact: isExact });
    if (match) {
        return {
            isExact: match.isExact,
            key: JSON.stringify(match.params),
            params: match.params,
            path: match.path,
            url: pathname,
        };
    }
    return null;
};
exports.generateMatch = generateMatch;
/**
 * Creates URL object by parsing the fullpath.
 */
const generateURL = (fullpath) => {
    let [pathname, search] = fullpath.split('#')[0].split('?');
    search !== null && search !== void 0 ? search : (search = '');
    const params = pathname.split('/').filter(i => !!i);
    const query = {};
    search.split('&').forEach(item => {
        if (item) {
            const [key, value] = item.split('=');
            query[key] = value;
        }
    });
    return {
        fullpath,
        params,
        pathname,
        search,
        query,
    };
};
exports.generateURL = generateURL;
/**
 * Checks the given routes and finds the active routes.
 * Checks if the active routes need the loader get methods to be run.
 * Loads the modules of the active routes.
 */
const loadModules = (activeURL, activatingURL, routes, modules) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let curRoutes = routes;
    const lazyModules = [];
    const modulesToInvokeGetMethods = [];
    while (curRoutes) {
        let route;
        // Holds the information whether the active route is matched with an item in the current modules array.
        let isMatched = false;
        for (const i in curRoutes) {
            const item = curRoutes[i];
            const activeMatch = (0, exports.generateMatch)(activeURL.pathname, item.path, false);
            const activatingMatch = (0, exports.generateMatch)(activatingURL.pathname, item.path, false);
            if (activatingMatch) {
                if (!modules[item.module]) {
                    lazyModules.push(item.module);
                }
                const activeSearch = (_a = item.searchKeys) === null || _a === void 0 ? void 0 : _a.map(key => { var _a, _b; return (_a = activeURL.query[key]) !== null && _a !== void 0 ? _a : (_b = item.defaultSearchValues) === null || _b === void 0 ? void 0 : _b[key]; }).filter(key => key).join('&');
                const activatingSearch = (_b = item.searchKeys) === null || _b === void 0 ? void 0 : _b.map(key => { var _a, _b; return (_a = activatingURL.query[key]) !== null && _a !== void 0 ? _a : (_b = item.defaultSearchValues) === null || _b === void 0 ? void 0 : _b[key]; }).filter(key => key).join('&');
                if (isMatched
                    || (activeMatch === null || activeMatch === void 0 ? void 0 : activeMatch.key) !== activatingMatch.key
                    || activeSearch !== activatingSearch) {
                    modulesToInvokeGetMethods.push({ match: activatingMatch, module: item.module });
                }
                route = item;
                break;
            }
            if (activeMatch) {
                isMatched = true;
            }
        }
        curRoutes = route === null || route === void 0 ? void 0 : route.children;
    }
    yield Promise.all(lazyModules.map(i => i()))
        .then(list => {
        for (const i in list) {
            modules[lazyModules[i]] = list[i];
        }
    });
    resolve(modulesToInvokeGetMethods);
}));
exports.loadModules = loadModules;
/**
 * Loads the modules of the active routes.
 */
const loadModulesOnClient = (routes) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    let curRoutes = routes;
    const lazyModules = [];
    while (curRoutes) {
        let route;
        for (const i in curRoutes) {
            if ((0, exports.generateMatch)((0, exports.getPathname)(), curRoutes[i].path, false)) {
                lazyModules.push(curRoutes[i].module);
                route = curRoutes[i];
                break;
            }
        }
        curRoutes = route === null || route === void 0 ? void 0 : route.children;
    }
    yield Promise.all(lazyModules.map(i => i()))
        .then(list => {
        for (const i in list) {
            ClientRouter_1.modules[lazyModules[i]] = list[i];
        }
    });
    resolve();
}));
exports.loadModulesOnClient = loadModulesOnClient;
/**
 * Loads the modules of the given routes.
 */
const loadModulesOnServer = (routes) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    let modules = {};
    for (const i in routes) {
        if (!modules[routes[i].module]) {
            modules[routes[i].module] = yield routes[i].module();
        }
        if (routes[i].children) {
            modules = Object.assign(Object.assign({}, modules), (yield (0, exports.loadModulesOnServer)(routes[i].children)));
        }
    }
    resolve(modules);
}));
exports.loadModulesOnServer = loadModulesOnServer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx":"4498b259d5d2a10809f6","default-src_components_Nav_tsx":"ac313515cfa05c181e76","default-src_components_Code_tsx":"e07698e53ab23d403fe8","default-src_components_Example_tsx":"bacabf49ef4f5ef49fb1","default-src_elements_Ul_tsx":"6e88458c133b4b4978a3","default-src_containers_GettingStarted_tsx":"4a5386422fde8e79be67","default-src_elements_Li_tsx":"b82e4aadfce7c89f8b91","default-src_containers_Theme_tsx":"386e7736e43c61765d37","default-src_containers_StyledProps_tsx":"42811c0fdb0238aa3495","default-src_containers_Element_tsx":"c4328665961d2588ad8d","default-src_elements_Blockquote_tsx":"3eee9c1b1e94d3180588","default-src_containers_ElementProps_tsx":"058366ce8257c9421562","default-src_components_ComponentType_tsx-src_components_PropsTable_tsx":"3c93ba1edfdb8e0a296a","default-src_components_AttributesTable_tsx":"b6d03a14a066ff278fc1","default-src_components_MultiExample_tsx":"8686fc7a2a2194f42cf7","default-src_containers_Alert_index_tsx":"874bc15dee67560859b3","default-src_containers_Badge_index_tsx":"a3514eb567111ae5a0e4","default-src_containers_Breadcrumb_tsx":"b95c61755ae41aa31d62","default-src_containers_Button_index_tsx":"95dd595fbce4b46171d4","default-src_containers_Checkbox_tsx":"c8d73d3e14e7b848f536","default-src_containers_ColorPicker_tsx":"309c35e196b236f2da98","default-src_containers_DatePicker_tsx":"f5301f74224a6248e91a","default-src_containers_Dropdown_tsx":"b843069ca50b03db0fee","default-src_containers_FixedBox_tsx":"d4af9aac8ccb31dd5857","default-src_containers_Grid_tsx":"84a1334fa864e7e9e0bf","default-src_containers_Input_index_tsx":"71797bc3542114940a98","default-src_containers_Loading_tsx":"513648384fd49b39fc52","default-src_containers_Modal_tsx":"0d63e134dae29abe0fea","default-src_containers_Overlay_tsx":"f31dbb67dc2394d79074","default-src_containers_Pagination_tsx":"cd0653021a550360ba08","default-src_containers_PopUp_tsx":"a22061a2245be2789467","default-src_containers_Popover_tsx":"ba0c41f00cfaa69c0520","default-src_containers_ProgressBar_tsx":"d45b80912d58f7bcbcbe","default-src_containers_Radio_tsx":"bb5090fc5a4df5e37e6b","default-src_containers_Select_tsx":"d81c60879158a2b9cecc","default-src_containers_Switch_tsx":"26d5b710bffbd261c7e5","default-src_containers_Table_tsx":"bad93181c75427808a1e","default-src_containers_Textarea_tsx":"abce3db5fdf87b7ae37b","default-src_containers_Tooltip_tsx":"963aa1f9ff9aec23d95b","default-src_containers_WaveEffect_tsx":"555bbc3a4f99e3dff3cf","default-src_containers_Transition_index_tsx":"4cea275ec7a97e4a10a8","default-src_containers_Router_tsx":"3c6937ac38984a9b5d53","default-src_containers_ServerSideRendering_tsx":"3b5067063d9d99ac38e2","default-src_containers_API_tsx":"35f1f4a1ca6f994845fd","default-src_containers_Log_tsx":"ec4fb144788db97adc7f"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "smart-react-components-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map