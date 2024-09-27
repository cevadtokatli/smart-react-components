"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_components_Nav_tsx"],{

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/router/useRouter */ "../smart-react-components/router/lib/useRouter/index.js");
/* harmony import */ var _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/Nav */ "./src/elements/Nav.tsx");



const Navbar = ({ list }) => {
    const { activeURL } = _smart_react_components_router_useRouter__WEBPACK_IMPORTED_MODULE_0___default()();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", null, list.map(({ id, label }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { key: id },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: `${activeURL.pathname}#${id}` }, label)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ "./src/elements/Nav.tsx":
/*!******************************!*\
  !*** ./src/elements/Nav.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Nav */ "./node_modules/@smart-react-components/core/Element/Nav.js");
/* harmony import */ var _smart_react_components_core_Element_Nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_core_Element_Nav__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
    display: 'none',
    displayXl: 'block',
})(({ theme }) => `
  box-sizing: content-box;
  flex: 0 0 auto;
  margin-top: -8px;
  max-width: 220px;
  padding: 0 30px 30px;
  position: sticky;
  top: 16px;

  > ul {
    border-left: solid 1px ${theme.$.color.dynamic.navBorder};
    display: flex;
    flex-direction: column;

    > li {
      margin: 8px 10px;

      > a {
        color: ${theme.$.color.dynamic.navFont};
        transition: color 150ms ease-in-out 0s;

        &:hover {
          color: ${theme.$.color.blue};
        }
      }
    }
  }
`));


/***/ })

}]);
//# sourceMappingURL=788a2af3998570b9c01a.js.map