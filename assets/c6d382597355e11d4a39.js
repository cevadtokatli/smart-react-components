"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_components_Code_tsx"],{

/***/ "./src/components/Code.tsx":
/*!*********************************!*\
  !*** ./src/components/Code.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js");
/* harmony import */ var _codemirror_lang_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/lang-markdown */ "./node_modules/@codemirror/lang-markdown/dist/index.js");
/* harmony import */ var _codemirror_language_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/language-data */ "./node_modules/@codemirror/language-data/dist/index.js");
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lezer/highlight */ "./node_modules/@lezer/highlight/dist/index.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uiw_codemirror_theme_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/codemirror-theme-github */ "./node_modules/@uiw/codemirror-theme-github/esm/index.js");
/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/react-codemirror */ "./node_modules/@uiw/react-codemirror/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









const Code = ({ code, language, marginBottom = '$length.paragraphSpace', marginTop }) => {
    const themeCtx = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const extensions = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => {
        if (language === 'js') {
            return [(0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_6__.javascript)({ jsx: true, typescript: true })];
        }
        return [(0,_codemirror_lang_markdown__WEBPACK_IMPORTED_MODULE_7__.markdown)({ base: _codemirror_lang_markdown__WEBPACK_IMPORTED_MODULE_7__.markdownLanguage, codeLanguages: _codemirror_language_data__WEBPACK_IMPORTED_MODULE_8__.languages })];
    }, [language]);
    const theme = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => {
        if (language === 'js') {
            return themeCtx.$.vars.isDarkMode ? _uiw_codemirror_theme_github__WEBPACK_IMPORTED_MODULE_2__.githubDark : _uiw_codemirror_theme_github__WEBPACK_IMPORTED_MODULE_2__.githubLight;
        }
        return themeCtx.$.vars.isDarkMode
            ? (0,_uiw_codemirror_theme_github__WEBPACK_IMPORTED_MODULE_2__.githubDarkInit)({
                styles: [
                    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.heading, color: '#999' },
                    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.content, color: '#eee' },
                ],
            })
            : (0,_uiw_codemirror_theme_github__WEBPACK_IMPORTED_MODULE_2__.githubLightInit)({
                styles: [
                    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.heading, color: '#999' },
                    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.content, color: '#07a' },
                ],
            });
    }, [themeCtx.$.vars.isDarkMode, language]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_1___default()), { borderRadius: 4, marginBottom: marginBottom, marginTop: marginTop, overflow: "hidden" },
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_3__["default"], { editable: false, extensions: extensions, basicSetup: {
                foldGutter: false,
                highlightActiveLine: false,
                lineNumbers: false,
            }, readOnly: true, theme: theme, value: code })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);


/***/ })

}]);
//# sourceMappingURL=c6d382597355e11d4a39.js.map