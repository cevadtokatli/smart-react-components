"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Pagination_tsx"],{

/***/ "./src/containers/Pagination.tsx":
/*!***************************************!*\
  !*** ./src/containers/Pagination.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Pagination/PaginationItem */ "./node_modules/@smart-react-components/ui/Pagination/PaginationItem.js");
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Pagination/PaginationList */ "./node_modules/@smart-react-components/ui/Pagination/PaginationList.js");
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationNextIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Pagination/PaginationNextIcon */ "./node_modules/@smart-react-components/ui/Pagination/PaginationNextIcon.js");
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationNextIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Pagination_PaginationNextIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationPrevIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Pagination/PaginationPrevIcon */ "./node_modules/@smart-react-components/ui/Pagination/PaginationPrevIcon.js");
/* harmony import */ var _smart_react_components_ui_Pagination_PaginationPrevIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Pagination_PaginationPrevIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
















const Pagination = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_15__["default"])({ title: 'Pagination' });
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_14__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h1", { id: "pagination" }, "Pagination"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Pagination consists of three different components: ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/pagination#pagination-list" }, "Pagination List"),
                    " which is a container, ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/pagination#pagination-item" }, "Pagination Item"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/pagination#pagination-link-item" }, "Pagination Link"),
                    " are children elements."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "pagination-list" }, "Pagination List"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Pagination List wraps ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/pagination#pagination-item" }, "Pagination Items"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/breadcrumb#pagination-link" }, "Pagination Links"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element[]',
                            isRequired: true,
                            description: 'Pagination items.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isOutline',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Removes the background color.',
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Uses the soft colors in the palette.',
                        },
                        {
                            name: 'isFixedSize',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "height"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "fixedSize"),
                                "."),
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Pagination shape.',
                        },
                        {
                            name: 'hasWaveEffect',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Enables ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " on items."),
                        },
                        {
                            name: 'waveEffectPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " palette item key."),
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "List element ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    "Pagination List provides ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the list element."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "pagination-item" }, "Pagination Item"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Pagination Item renders an ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                    " element and provides click events to it on interactions."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Pagination Item content element.',
                        },
                        {
                            name: 'isActive',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets the active state.',
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets the disabled state.',
                        },
                        {
                            name: 'href',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "href"),
                                " attribute."),
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/styled-props" }, "Styled Props"),
                                " and HTML attributes."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                    "Pagination Item provides ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#click-events" }, "Click Events"),
                    " for the item element."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "pagination-link" }, "Pagination Link"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Renders an ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                    " element. When the element is clicked on, it changes the URL, but doesn't reload the page."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | (",
                                `{`,
                                " isActive: boolean, isActivating: boolean ",
                                `}`,
                                ") => ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement")),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                                " element content."),
                        },
                        {
                            name: 'to',
                            type: 'string',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a href"),
                                " attribute."),
                        },
                        {
                            name: 'path',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#path" }, "Path"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "If it matches the URL, ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isActive"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isActivating"),
                                " props are set to ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                " accordingly. If ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "null"),
                                ", it takes ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "to"),
                                " prop value."),
                        },
                        {
                            name: 'isExact',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isActive"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isActivating"),
                                " props are set to ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                " when the path matches the URL exactly."),
                        },
                        {
                            name: 'isActive',
                            type: 'boolean',
                            description: 'Overwrites the active state.',
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Doesn't bind any of the events and sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "pointerEvents"),
                                " as ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "none"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                                " element."),
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/styled-props" }, "Styled Props"),
                                " and HTML attributes."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "pagination-next-icon" }, "Pagination Next Icon"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Renders an ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "svg"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "pagination-prev-icon" }, "Pagination Prev Icon"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Renders an ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "svg"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import React from 'react'

export default () => (
  <>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="secondary">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="success">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="danger">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="warning">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="info">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="light">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList palette="dark">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")))),
                        title: 'Palette',
                    }, second: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import React from 'react'

export default () => (
  <>
    <PaginationList isOutline>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="secondary">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="success">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="danger">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="warning">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="info">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="light">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isOutline palette="dark">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "light" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "dark" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")))),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import React from 'react'

export default () => (
  <>
    <PaginationList isSoft>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="secondary">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="success">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="danger">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="warning">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="info">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="light">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft palette="dark">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "light" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "dark" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")))),
                        title: 'Soft',
                    }, second: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import React from 'react'

export default () => (
  <>
    <PaginationList isSoft isOutline>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="secondary">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="success">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="danger">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="warning">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="info">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="light">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList isSoft isOutline palette="dark">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "light" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, isOutline: true, palette: "dark" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")))),
                        title: 'Soft Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import React from 'react'

export default () => (
  <>
    <PaginationList>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
    <PaginationList shape="rounded">
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { shape: "rounded" },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3")))),
                        title: 'Shape',
                    }, second: {
                        code: `import PaginationItem from '@smart-react-components/ui/Pagination/PaginationItem'
import PaginationList from '@smart-react-components/ui/Pagination/PaginationList'
import PaginationNextIcon from '@smart-react-components/ui/Pagination/PaginationNextIcon'
import PaginationPrevIcon from '@smart-react-components/ui/Pagination/PaginationPrevIcon'
import React from 'react'

export default () => (
  <>
    <PaginationList isFixedSize>
      <PaginationItem>
        <PaginationPrevIcon iconSize="$size.icon.medium" />
      </PaginationItem>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>
        <PaginationNextIcon iconSize="$size.icon.medium" />
      </PaginationItem>
    </PaginationList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationList__WEBPACK_IMPORTED_MODULE_1___default()), { isFixedSize: true },
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationPrevIcon__WEBPACK_IMPORTED_MODULE_3___default()), { iconSize: "$size.icon.medium" })),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "1"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "2"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "3"),
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationItem__WEBPACK_IMPORTED_MODULE_0___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Pagination_PaginationNextIcon__WEBPACK_IMPORTED_MODULE_2___default()), { iconSize: "$size.icon.medium" }))))),
                        title: 'Fixed Size',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_5__["default"], { attrs: [
                        {
                            name: 'cursor.pagination',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'cursor.paginationDisabled',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "cursor"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'fontFamily.pagination',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontSize.pagination',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'length.pagination.fixedSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "height"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isFixedSize"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'length.pagination.margin',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'length.pagination.padding',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'opacity.paginationDisabled',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'radius.pagination',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__["default"], { next: {
                    label: 'Pop-up',
                    to: '/ui-components/pop-up',
                }, prev: {
                    label: 'Overlay',
                    to: '/ui-components/overlay',
                } })),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], { list: [
                { id: 'pagination', label: 'Pagination' },
                { id: 'pagination-list', label: 'Pagination List' },
                { id: 'pagination-item', label: 'Pagination Item' },
                { id: 'pagination-link', label: 'Pagination Link' },
                { id: 'pagination-next-icon', label: 'Pagination Next Icon' },
                { id: 'pagination-prev-icon', label: 'Pagination Prev Icon' },
                { id: 'example', label: 'Example' },
                { id: 'theme-attributes', label: 'Theme Attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

}]);
//# sourceMappingURL=cd0653021a550360ba08.js.map