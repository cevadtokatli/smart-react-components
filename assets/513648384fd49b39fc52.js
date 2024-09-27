"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Loading_tsx"],{

/***/ "./src/containers/Loading.tsx":
/*!************************************!*\
  !*** ./src/containers/Loading.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Loading */ "./node_modules/@smart-react-components/ui/Loading/index.js");
/* harmony import */ var _smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");














const Loading = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_13__["default"])({ title: 'Loading' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_12__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_11__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "loading" }, "Loading"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Loading animation effect."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'color',
                            type: 'string',
                            defaultValue: '$color.blue',
                            description: 'Icon color.'
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Icon size, has responsive support.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                    "Loading provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-margin-props" }, "Intrinsic Styled Margin Props"),
                    " for the icon element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Loading from '@smart-react-components/ui/Loading'
import React from 'react'

export default () => (
  <Div marginLeft="-{length.3}" marginTop="-{length.3}">
    <Loading marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!secondary" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!success" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!danger" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!warning" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!info" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!light" marginLeft="$length.3" marginTop="$length.3" />
    <Loading color="!dark" marginLeft="$length.3" marginTop="$length.3" />
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "-{length.3}", marginTop: "-{length.3}" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!secondary", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!success", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!danger", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!warning", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!info", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!light", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { color: "!dark", marginLeft: "$length.3", marginTop: "$length.3" }))),
                        title: 'Color',
                    }, second: {
                        code: `import Div from '@smart-react-components/core/Element/Div'
import Loading from '@smart-react-components/ui/Loading'
import React from 'react'

export default () => (
  <Div marginLeft="-{length.3}" marginTop="-{length.3}">
    <Loading size="small" marginLeft="$length.3" marginTop="$length.3" />
    <Loading marginLeft="$length.3" marginTop="$length.3" />
    <Loading size="large" marginLeft="$length.3" marginTop="$length.3" />
    <Loading size="small" sizeMd="medium" sizeLg="large" marginLeft="$length.3" marginTop="$length.3" />
  </Div>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "-{length.3}", marginTop: "-{length.3}" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { size: "large", marginLeft: "$length.3", marginTop: "$length.3" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", sizeMd: "medium", sizeLg: "large", marginLeft: "$length.3", marginTop: "$length.3" }))),
                        title: 'Size',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'loading',
                            type: 'string',
                            description: 'Icon size.',
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__["default"], { next: {
                    label: 'Modal',
                    to: '/ui-components/modal',
                }, prev: {
                    label: 'Input',
                    to: '/ui-components/input',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], { list: [
                { label: 'Loading', id: 'loading' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ })

}]);
//# sourceMappingURL=513648384fd49b39fc52.js.map