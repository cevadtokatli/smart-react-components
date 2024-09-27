"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_components_Example_tsx"],{

/***/ "./src/components/Example.tsx":
/*!************************************!*\
  !*** ./src/components/Example.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Header */ "./node_modules/@smart-react-components/core/Element/Header.js");
/* harmony import */ var _smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_core_Element_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/core/Element/Section */ "./node_modules/@smart-react-components/core/Element/Section.js");
/* harmony import */ var _smart_react_components_core_Element_Section__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Section__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/core/Element/Span */ "./node_modules/@smart-react-components/core/Element/Span.js");
/* harmony import */ var _smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/Code */ "./src/icons/Code.tsx");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Code */ "./src/components/Code.tsx");







const Example = ({ code, output, title = 'Example' }) => {
    const [isCodeShown, setCodeShown] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(true);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { border: "solid 1px {color.dynamic.exampleBorder}", borderRadius: "4px", marginBottom: "$length.h3Space", paddingHorizontal: "10px", paddingVertical: "25px" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Header__WEBPACK_IMPORTED_MODULE_1___default()), { alignItems: "center", borderBottom: "solid 1px {color.dynamic.exampleBorder}", display: "flex", justifyContent: "space-between" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Span__WEBPACK_IMPORTED_MODULE_3___default()), { color: "$color.dynamic.headingFont", marginHorizontal: "1px" }, title),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_icons_Code__WEBPACK_IMPORTED_MODULE_5__["default"], { fill: "$color.dynamic.exampleIcon", onClick: () => setCodeShown(!isCodeShown), width: 16 })),
        isCodeShown && (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Code__WEBPACK_IMPORTED_MODULE_6__["default"], { code: code, language: "js", marginBottom: "0", marginTop: "16px" })),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Section__WEBPACK_IMPORTED_MODULE_2___default()), { marginTop: 25 }, output)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);


/***/ }),

/***/ "./src/icons/Code.tsx":
/*!****************************!*\
  !*** ./src/icons/Code.tsx ***!
  \****************************/
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
    children: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" }),
    viewBox: '0 0 2048 1792',
}) ``);


/***/ })

}]);
//# sourceMappingURL=bacabf49ef4f5ef49fb1.js.map