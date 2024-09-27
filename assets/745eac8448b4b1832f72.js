"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Breadcrumb_tsx"],{

/***/ "./src/containers/Breadcrumb.tsx":
/*!***************************************!*\
  !*** ./src/containers/Breadcrumb.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Breadcrumb/BreadcrumbItem */ "./node_modules/@smart-react-components/ui/Breadcrumb/BreadcrumbItem.js");
/* harmony import */ var _smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Breadcrumb/BreadcrumbList */ "./node_modules/@smart-react-components/ui/Breadcrumb/BreadcrumbList.js");
/* harmony import */ var _smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1__);
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














const Breadcrumb = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_13__["default"])({ title: 'Breadcrumb' });
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_12__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_11__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", { id: "breadcrumb" }, "Breadcrumb"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Breadcrumb consists of three different components: ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/breadcrumb#breadcrumb-list" }, "Breadcrumb List"),
                    " which is a container, ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/breadcrumb#breadcrumb-item" }, "Breadcrumb Item"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/breadcrumb#breadcrumb-link" }, "Breadcrumb Link"),
                    " are children elements."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "breadcrumb-list" }, "Breadcrumb List"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Breadcrumb List wraps ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/breadcrumb#breadcrumb-item" }, "Breadcrumb Items"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/breadcrumb#breadcrumb-link" }, "Breadcrumb Links"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element[]',
                            isRequired: true,
                            description: 'Breadcrumb items.',
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Breadcrumb shape.',
                        },
                        {
                            name: 'hasWaveEffect',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Enables ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " on items."),
                        },
                        {
                            name: 'waveEffectPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                                " palette item key."),
                        },
                        {
                            name: 'separator',
                            type: 'string',
                            description: 'Separator between items.',
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "List element ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                    "Breadcrumb List provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
                    " for the list element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "breadcrumb-item" }, "Breadcrumb Item"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Breadcrumb Item renders an ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                    " element and provides click events to it on interactions."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement"),
                            isRequired: true,
                            description: 'Breadcrumb Item content element.',
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
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "href"),
                                " attribute."),
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/styled-props" }, "Styled Props"),
                                " and HTML attributes."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                    "Breadcrumb Item provides ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#click-events" }, "Click Events"),
                    " for the item element."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "breadcrumb-link" }, "Breadcrumb Link"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
                    "Renders an ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                    " element. When the element is clicked on, it changes the URL, but doesn't reload the page."),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | (",
                                `{`,
                                " isActive: boolean, isActivating: boolean ",
                                `}`,
                                ") => ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement")),
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                                " element content."),
                        },
                        {
                            name: 'to',
                            type: 'string',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a href"),
                                " attribute."),
                        },
                        {
                            name: 'path',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#path" }, "Path"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "If it matches the URL, ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isActive"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isActivating"),
                                " props are set to ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "true"),
                                " accordingly. If ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "null"),
                                ", it takes ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "to"),
                                " prop value."),
                        },
                        {
                            name: 'isExact',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isActive"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isActivating"),
                                " props are set to ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "true"),
                                " when the path matches the URL exactly."),
                        },
                        {
                            name: 'isDisabled',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Doesn't bind any of the events and sets ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "pointerEvents"),
                                " as ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "none"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                                " element."),
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/styled-props" }, "Styled Props"),
                                " and HTML attributes."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import BreadcrumbItem from '@smart-react-components/ui/Breadcrumb/BreadcrumbItem'
import BreadcrumbList from '@smart-react-components/ui/Breadcrumb/BreadcrumbList'
import React from 'react'

export default () => (
  <>
    <BreadcrumbList>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="secondary" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="success" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="danger" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="warning" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="info" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="light" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList palette="dark" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")))),
                        title: 'Palette',
                    }, second: {
                        code: `import BreadcrumbItem from '@smart-react-components/ui/Breadcrumb/BreadcrumbItem'
import BreadcrumbList from '@smart-react-components/ui/Breadcrumb/BreadcrumbList'
import React from 'react'

export default () => (
  <>
    <BreadcrumbList isOutline>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="secondary" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="success" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="danger" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="warning" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="info" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="light" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isOutline palette="dark" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "secondary", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "success", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "danger", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "warning", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "info", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "light", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "dark", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")))),
                        title: 'Outline',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_6__["default"], { first: {
                        code: `import BreadcrumbItem from '@smart-react-components/ui/Breadcrumb/BreadcrumbItem'
import BreadcrumbList from '@smart-react-components/ui/Breadcrumb/BreadcrumbList'
import React from 'react'

export default () => (
  <>
    <BreadcrumbList isSoft>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="secondary" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="success" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="danger" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="warning" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="info" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="light" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList isSoft palette="dark" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, waveEffectPalette: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "secondary", marginTop: "$length.3", waveEffectPalette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "success", marginTop: "$length.3", waveEffectPalette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "danger", marginTop: "$length.3", waveEffectPalette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "warning", marginTop: "$length.3", waveEffectPalette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "info", marginTop: "$length.3", waveEffectPalette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "light", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "dark", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")))),
                        title: 'Soft',
                    }, second: {
                        code: `import BreadcrumbItem from '@smart-react-components/ui/Breadcrumb/BreadcrumbItem'
import BreadcrumbList from '@smart-react-components/ui/Breadcrumb/BreadcrumbList'
import React from 'react'

export default () => (
  <>
    <BreadcrumbList>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
    <BreadcrumbList shape="rounded" marginTop="$length.3">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Countries</BreadcrumbItem>
      <BreadcrumbItem isActive>New Zealand</BreadcrumbItem>
    </BreadcrumbList>
  </>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbList__WEBPACK_IMPORTED_MODULE_1___default()), { shape: "rounded", marginTop: "$length.3" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Home"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), null, "Countries"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_0___default()), { isActive: true }, "New Zealand")))),
                        title: 'Shape',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_3__["default"], { attrs: [
                        {
                            name: 'cursor.breadcrumb',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'cursor.breadcrumbDisabled',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "cursor"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'fontFamily.breadcrumb',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontSize.breadcrumb',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'i18n.breadcrumb.separator',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                "Separator value. Default value of ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "seperator"),
                                " prop."),
                        },
                        {
                            name: 'length.breadcrumb.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'opacity.breadcrumbDisabled',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'radius.breadcrumb',
                            type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__["default"], { next: {
                    label: 'Button',
                    to: '/ui-components/button',
                }, prev: {
                    label: 'Badge',
                    to: '/ui-components/badge',
                } })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], { list: [
                { label: 'Breadcrumb', id: 'breadcrumb' },
                { label: 'Breadcrumb List', id: 'breadcrumb-list' },
                { label: 'Breadcrumb Item', id: 'breadcrumb-item' },
                { label: 'Breadcrumb Link', id: 'breadcrumb-link' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ })

}]);
//# sourceMappingURL=745eac8448b4b1832f72.js.map