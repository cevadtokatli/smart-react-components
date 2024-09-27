"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_components_LabelLink_tsx-src_components_SuggestedPages_tsx"],{

/***/ "./src/components/LabelLink.tsx":
/*!**************************************!*\
  !*** ./src/components/LabelLink.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_A__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/A */ "./node_modules/@smart-react-components/core/Element/A.js");
/* harmony import */ var _smart_react_components_core_Element_A__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_A__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/router/Link */ "../smart-react-components/router/lib/Link/index.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const LabelLink = ({ children, to }) => {
    const props = {
        color: '#4A81D4',
        hover: {
            textDecoration: 'underline',
        },
    };
    if (to.startsWith('http')) {
        return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_A__WEBPACK_IMPORTED_MODULE_0___default()), { href: to, target: "_blank", ...props }, children));
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_1___default()), { elementProps: props, to: to }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelLink);


/***/ }),

/***/ "./src/components/SuggestedPages.tsx":
/*!*******************************************!*\
  !*** ./src/components/SuggestedPages.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/router/Link */ "../smart-react-components/router/lib/Link/index.js");
/* harmony import */ var _smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Grid/Row */ "./node_modules/@smart-react-components/ui/Grid/Row.js");
/* harmony import */ var _smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_SuggestedPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/SuggestedPage */ "./src/elements/SuggestedPage.tsx");
/* harmony import */ var _icons_ArrowDoubleLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/ArrowDoubleLeft */ "./src/icons/ArrowDoubleLeft.tsx");
/* harmony import */ var _icons_ArrowDoubleRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/ArrowDoubleRight */ "./src/icons/ArrowDoubleRight.tsx");






const SuggestedPages = ({ next, prev }) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_1___default()), { marginTop: "$length.h2Space" },
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_SuggestedPage__WEBPACK_IMPORTED_MODULE_3__["default"], { paddingBottom: 16, display: prev ? 'block' : 'none', visibility: prev ? 'visible' : 'hidden' },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, "Previous"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0___default()), { to: prev?.to },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_icons_ArrowDoubleLeft__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                prev?.label))),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_SuggestedPage__WEBPACK_IMPORTED_MODULE_3__["default"], { display: next ? 'block' : 'none', visibility: next ? 'visible' : 'hidden' },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, "Next"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_router_Link__WEBPACK_IMPORTED_MODULE_0___default()), { to: next?.to },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_icons_ArrowDoubleRight__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                next?.label)))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuggestedPages);


/***/ }),

/***/ "./src/elements/SuggestedPage.tsx":
/*!****************************************!*\
  !*** ./src/elements/SuggestedPage.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Grid/Column */ "./node_modules/@smart-react-components/ui/Grid/Column.js");
/* harmony import */ var _smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default())).attrs({
    col: 12,
    colMd: 6,
    displayMd: 'block',
    paddingBottomMd: 0,
})(({ theme }) => `
  > div {
    border: solid 1px ${theme.$.color.dynamic.suggestedPageBorder};
    border-radius: 4px;
    padding: 10px 20px;

    > div {
      padding-bottom: 5px;
    }

    > a {
      align-items: center;
      color: ${theme.$.color.dynamic.suggestedPageLinkFont};
      fill: currentcolor;
      display: inline-flex;
      transition: 150ms 0s ease-in-out;

      > svg {
        flex: 0 0 auto;
        margin-right: 6px;
        width: 16px;
      }

      &:hover {
        color: ${theme.$.color.dynamic.suggestedPageLinkFontHover};
        fill: currentcolor;
      }
    }
  }
`));


/***/ }),

/***/ "./src/icons/ArrowDoubleLeft.tsx":
/*!***************************************!*\
  !*** ./src/icons/ArrowDoubleLeft.tsx ***!
  \***************************************/
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
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z" }),
    viewBox: '0 0 1792 1792',
}) ``);


/***/ }),

/***/ "./src/icons/ArrowDoubleRight.tsx":
/*!****************************************!*\
  !*** ./src/icons/ArrowDoubleRight.tsx ***!
  \****************************************/
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
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" }),
    viewBox: '0 0 1792 1792',
}) ``);


/***/ })

}]);
//# sourceMappingURL=4498b259d5d2a10809f6.js.map