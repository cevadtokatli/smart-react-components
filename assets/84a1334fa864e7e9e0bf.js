"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Grid_tsx"],{

/***/ "./src/containers/Grid.tsx":
/*!*********************************!*\
  !*** ./src/containers/Grid.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Grid/Column */ "./node_modules/@smart-react-components/ui/Grid/Column.js");
/* harmony import */ var _smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Grid_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Grid/Container */ "./node_modules/@smart-react-components/ui/Grid/Container.js");
/* harmony import */ var _smart_react_components_ui_Grid_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Grid_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Grid/Row */ "./node_modules/@smart-react-components/ui/Grid/Row.js");
/* harmony import */ var _smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Table */ "./node_modules/@smart-react-components/ui/Table/index.js");
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tbody */ "./node_modules/@smart-react-components/ui/Table/Tbody.js");
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Table/Td */ "./node_modules/@smart-react-components/ui/Table/Td.js");
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smart-react-components/ui/Table/Th */ "./node_modules/@smart-react-components/ui/Table/Th.js");
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smart-react-components/ui/Table/Thead */ "./node_modules/@smart-react-components/ui/Table/Thead.js");
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tr */ "./node_modules/@smart-react-components/ui/Table/Tr.js");
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");





















const Grid = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_19__["default"])({ title: 'Grid' });
    return (react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_18__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_17__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h1", { id: "grid" }, "Grid"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null, "Grid components provide a flexbox grid system to make responsive designs."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "grid-options" }, "Grid Options"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null, "You can customize the grid properties using the SRC theme."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_3___default()), { hasBorderX: true },
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_7___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), { palette: "dynamic", isEven: true },
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 200 }, "\u00A0"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 150, fontWeight: "$fontWeight.bold", textAlign: "left" }, "Extra small"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 150, fontWeight: "$fontWeight.bold", textAlign: "left" }, "Small"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 150, fontWeight: "$fontWeight.bold", textAlign: "left" }, "Medium"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 150, fontWeight: "$fontWeight.bold", textAlign: "left" }, "Large"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { width: 150, fontWeight: "$fontWeight.bold", textAlign: "left" }, "Extra large"))),
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { fontWeight: "$fontWeight.bold" }, "Breakpoint"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "<576px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "\u2265576px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "\u2265768px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "\u2265992px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "\u22651200px")),
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { fontWeight: "$fontWeight.bold" }, "Container width"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "100%"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "540px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "720px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "960px"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), null, "1140px")),
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { fontWeight: "$fontWeight.bold" }, "Column count"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { colSpan: 5 }, "12")),
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_8___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { fontWeight: "$fontWeight.bold" }, "Column gap"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_5___default()), { colSpan: 5 }, "15px")))),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "container" }, "Container"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null,
                    "Container is a centered ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "div"),
                    " element, it has ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "containerWidth"),
                    " for each breakpoint."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "row" }, "Row"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null,
                    "Row is a flex container wrapper ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "div"),
                    " element. It is used to wrap ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_12__["default"], { to: "/ui-components/grid#column" }, "Column"),
                    " elements."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "column" }, "Column"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("p", null,
                    "Column is a flexible ",
                    react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "div"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_14__["default"], { props: [
                        {
                            name: 'col',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                                "Takes ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "0"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "12"),
                                "range. Adds ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "flex-basis"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "max-width"),
                                " to the element."),
                        },
                        {
                            name: 'pos',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                                "Takes ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "-12"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "12"),
                                ". Adds ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "margin-left"),
                                " to the element."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_16__["default"], null, "All Column props have responsive support."),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_11__["default"], { code: `import Column from '@smart-react-components/ui/Grid/Column'
import Container from '@smart-react-components/ui/Grid/Container'
import Row from '@smart-react-components/ui/Grid/Row'
import React from 'react'

export default () => (
  <Container>
    <Row>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-1</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-2</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-3</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-4</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-5</Column>
      <Column col={12} colSm={6} colMd={4} colLg={3} colXl={2} backgroundColor="!primary" paddingVertical="$length.3" border="solid 1px [primary.darkest]" color="$color.white" textAlign="center">Column-6</Column>
    </Row>
  </Container>
)`, output: (react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Container__WEBPACK_IMPORTED_MODULE_1___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-1"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-2"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-3"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-4"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-5"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 6, colMd: 4, colLg: 3, colXl: 2, backgroundColor: "!primary", paddingVertical: "$length.3", border: "solid 1px [primary.darkest]", color: "$color.white", textAlign: "center" }, "Column-6")))), title: "Col" }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_11__["default"], { code: `import Column from '@smart-react-components/ui/Grid/Column'
import Container from '@smart-react-components/ui/Grid/Container'
import Row from '@smart-react-components/ui/Grid/Row'
import React from 'react'

export default () => (
  <Container>
    <Row>
      <Column col={12} colSm={3} backgroundColor="!secondary" paddingVertical="$length.3" border="solid 1px [secondary.darkest]" color="$color.white" textAlign="center">Column-1</Column>
      <Column col={12} colSm={3} pos={0} posSm={2} backgroundColor="!secondary" paddingVertical="$length.3" border="solid 1px [secondary.darkest]" color="$color.white" textAlign="center">Column-2</Column>
      <Column col={12} colSm={3} pos={0} posSm={1} backgroundColor="!secondary" paddingVertical="$length.3" border="solid 1px [secondary.darkest]" color="$color.white" textAlign="center">Column-3</Column>
    </Row>
  </Container>
)`, output: (react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Container__WEBPACK_IMPORTED_MODULE_1___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 3, backgroundColor: "!secondary", paddingVertical: "$length.3", border: "solid 1px [secondary.darkest]", color: "$color.white", textAlign: "center" }, "Column-1"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 3, pos: 0, posSm: 2, backgroundColor: "!secondary", paddingVertical: "$length.3", border: "solid 1px [secondary.darkest]", color: "$color.white", textAlign: "center" }, "Column-2"),
                            react__WEBPACK_IMPORTED_MODULE_9___default().createElement((_smart_react_components_ui_Grid_Column__WEBPACK_IMPORTED_MODULE_0___default()), { col: 12, colSm: 3, pos: 0, posSm: 1, backgroundColor: "!secondary", paddingVertical: "$length.3", border: "solid 1px [secondary.darkest]", color: "$color.white", textAlign: "center" }, "Column-3")))), title: "Pos" }),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_20__["default"], { attrs: [
                        {
                            name: 'length.breakpoint',
                            type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_12__["default"], { to: "/api#grid" }, "Grid"),
                            description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null, "Breakpoint value for responsive props. Each item represents a different breakpoint.")
                        },
                        {
                            name: 'length.grid.containerWidth',
                            type: react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_12__["default"], { to: "/api#grid" }, "Grid"),
                            description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_12__["default"], { to: "/ui-components/grid#container" }, "Container"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "width"),
                                " value. Each item represents a different breakpoint.")
                        },
                        {
                            name: 'length.grid.space',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_12__["default"], { to: "/ui-components/grid#container" }, "Container"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "padding-left"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_9___default().createElement("code", null, "padding-right"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_15__["default"], { next: {
                    label: 'Input',
                    to: '/ui-components/input',
                }, prev: {
                    label: 'Fixed Box',
                    to: '/ui-components/fixed-box',
                } })),
        react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_13__["default"], { list: [
                { label: 'Grid', id: 'grid' },
                { label: 'Grid Options', id: 'grid-options' },
                { label: 'Container', id: 'container' },
                { label: 'Row', id: 'row' },
                { label: 'Column', id: 'column' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);


/***/ })

}]);
//# sourceMappingURL=84a1334fa864e7e9e0bf.js.map