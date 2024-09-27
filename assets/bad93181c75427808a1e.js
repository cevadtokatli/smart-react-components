"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Table_tsx"],{

/***/ "./src/containers/Table.tsx":
/*!**********************************!*\
  !*** ./src/containers/Table.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Badge */ "./node_modules/@smart-react-components/ui/Badge/index.js");
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Table */ "./node_modules/@smart-react-components/ui/Table/index.js");
/* harmony import */ var _smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Table/Thead */ "./node_modules/@smart-react-components/ui/Table/Thead.js");
/* harmony import */ var _smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tbody */ "./node_modules/@smart-react-components/ui/Table/Tbody.js");
/* harmony import */ var _smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Table/Tr */ "./node_modules/@smart-react-components/ui/Table/Tr.js");
/* harmony import */ var _smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smart-react-components/ui/Table/Th */ "./node_modules/@smart-react-components/ui/Table/Th.js");
/* harmony import */ var _smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smart-react-components/ui/Table/Td */ "./node_modules/@smart-react-components/ui/Table/Td.js");
/* harmony import */ var _smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");



















const Table = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_16__["default"])({ title: 'Table' });
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_15__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_14__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h1", { id: "table" }, "Table"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "table"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'children',
                            type: 'JSX.Element | JSX.Element[]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#thead" }, "Thead"),
                                ", ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#tbody" }, "Tbody"),
                                ", and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#tfoot" }, "Tfoot"),
                                " elements."),
                        },
                        {
                            name: 'stickyX',
                            type: 'number',
                            defaultValue: '1',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sticky row count. Only rows inside ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#thead" }, "Thead"),
                                " can be sticky. Has responsive support."),
                        },
                        {
                            name: 'stickyY',
                            type: 'number',
                            defaultValue: '1',
                            description: 'Sticky column count, has responsive support.',
                        },
                        {
                            name: 'hasInternalScroll',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Provides an internal scroll. When ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "false"),
                                ", uses the parent scroll."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'dynamic',
                            description: 'Palette item key.',
                        },
                        {
                            name: 'isSoft',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Uses the soft colors in the palette.',
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Table size, has responsive support.',
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Table shape.',
                        },
                        {
                            name: 'hasBorderX',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-left"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-right"),
                                " for ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                "."),
                        },
                        {
                            name: 'hasBorderY',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-top"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-bottom"),
                                " for ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                "."),
                        },
                        {
                            name: 'hasHeadBackground',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#thead" }, "Thead"),
                                " children ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                " background color to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "headBackground"),
                                ".")
                        },
                        {
                            name: 'isStriped',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Sets background to striped.',
                        },
                        {
                            name: 'hasHover',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets hover to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#tr" }, "Tr"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "thead" }, "Thead"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "thead"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "tbody" }, "Tbody"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "tbody"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "tfoot" }, "Tfoot"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "tfoot"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "tr" }, "Tr"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "tr"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            description: 'Palette item key.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "th" }, "Th"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "th"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'isEmpty',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets all dimensions to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "0"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "td" }, "Td"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_9__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "td"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_12__["default"], { props: [
                        {
                            name: 'isEmpty',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets all dimensions to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "0"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Standard Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="danger">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="warning">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "dark" },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Dark Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table size="small">
    <Thead>
      <Tr>
        <Th minWidth={40} maxWidth={50}>#</Th>
        <Th minWidth={180}>Name</Th>
        <Th minWidth={180}>Location</Th>
        <Th minWidth={180}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small" },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 40, maxWidth: 40 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 180 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 180 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 180 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Small Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table>
    <Thead>
      <Tr>
        <Th display="none" displayMd="table-cell" minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th display="none" displayLg="table-cell" minWidth={200}>Location</Th>
        <Th display="none" displaySm="table-cell" minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th display="none" displayMd="table-cell">1</Th>
        <Td>John Doe</Td>
        <Td display="none" displayLg="table-cell">Wellington, NZ</Td>
        <Td display="none" displaySm="table-cell">
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th display="none" displayMd="table-cell">2</Th>
        <Td>Jane Doe</Td>
        <Td display="none" displayLg="table-cell">Melbourne, AU</Td>
        <Td display="none" displaySm="table-cell">
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th display="none" displayMd="table-cell">3</Th>
        <Td>Lena Rothstein</Td>
        <Td display="none" displayLg="table-cell">Berlin, GER</Td>
        <Td display="none" displaySm="table-cell">
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th display="none" displayMd="table-cell">4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td display="none" displayLg="table-cell">Amsterdam, HOL</Td>
        <Td display="none" displaySm="table-cell">
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th display="none" displayMd="table-cell">5</Th>
        <Td>Wendy Khan</Td>
        <Td display="none" displayLg="table-cell">Vancouver, CA</Td>
        <Td display="none" displaySm="table-cell">
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell", minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayLg: "table-cell", minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displaySm: "table-cell", minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell" }, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displayLg: "table-cell" }, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displaySm: "table-cell" },
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell" }, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displayLg: "table-cell" }, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displaySm: "table-cell" },
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell" }, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displayLg: "table-cell" }, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displaySm: "table-cell" },
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell" }, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displayLg: "table-cell" }, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displaySm: "table-cell" },
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { display: "none", displayMd: "table-cell" }, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displayLg: "table-cell" }, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), { display: "none", displaySm: "table-cell" },
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Responsive Columns" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table hasBorderX>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { hasBorderX: true },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Bordered Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table hasBorderY={false}>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { hasBorderY: false },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Borderless Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table isStriped>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { isStriped: true },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Striped Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table hasHover>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), { hasHover: true },
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null, "Front-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Back-End Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Android Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "IOS Developer"))),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), null,
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Vancouver, CA"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null,
                                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Test Manager"))))))), title: "Custom Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_18__["default"], { code: `import Table from '@smart-react-components/ui/Table'
import Thead from '@smart-react-components/ui/Table/Thead'
import Tbody from '@smart-react-components/ui/Table/Tbody'
import Tr from '@smart-react-components/ui/Table/Tr'
import Th from '@smart-react-components/ui/Table/Th'
import Td from '@smart-react-components/ui/Table/Td'
import React from 'react'

export default () => (
  <Table>
    <Thead>
      <Tr>
        <Th minWidth={50} maxWidth={50}>#</Th>
        <Th minWidth={200}>Name</Th>
        <Th minWidth={200}>Location</Th>
        <Th minWidth={200}>Position</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>1</Th>
        <Td>John Doe</Td>
        <Td>Wellington, NZ</Td>
        <Td>
          <Badge>Front-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>2</Th>
        <Td>Jane Doe</Td>
        <Td>Melbourne, AU</Td>
        <Td>
          <Badge palette="secondary">Back-End Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>3</Th>
        <Td>Lena Rothstein</Td>
        <Td>Berlin, GER</Td>
        <Td>
          <Badge palette="success">Android Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>4</Th>
        <Td>Jemaine Warmenhoven</Td>
        <Td>Amsterdam, HOL</Td>
        <Td>
          <Badge palette="dark">IOS Developer</Badge>
        </Td>
      </Tr>
      <Tr>
        <Th>5</Th>
        <Td>Wendy Khan</Td>
        <Td>Vancouver, CA</Td>
        <Td>
          <Badge palette="light">Test Manager</Badge>
        </Td>
      </Tr>
    </Tbody>
  </Table>
)`, output: (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { overflow: "auto" },
                        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table__WEBPACK_IMPORTED_MODULE_2___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Thead__WEBPACK_IMPORTED_MODULE_3___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "light" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 50, maxWidth: 50 }, "#"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Name"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Location"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), { minWidth: 200 }, "Position"))),
                            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tbody__WEBPACK_IMPORTED_MODULE_4___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "primary" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "1"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "John Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wellington, NZ"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Front-End Developer")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "secondary" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "2"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jane Doe"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Melbourne, AU"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Back-End Developer")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "success" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "3"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Lena Rothstein"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Berlin, GER"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Android Developer")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "danger" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "4"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Jemaine Warmenhoven"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Amsterdam, HOL"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "IOS Developer")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "warning" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "5"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Wendy Khan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "New York"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Test Manager")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "info" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "6"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Roderick Fugate"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "San Francisco"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Product Owner")),
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Tr__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "dark" },
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Th__WEBPACK_IMPORTED_MODULE_6___default()), null, "7"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Gabriel Brennan"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "London, UK"),
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Table_Td__WEBPACK_IMPORTED_MODULE_7___default()), null, "Scrum Master")))))), title: "Standard Table" }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_17__["default"], { attrs: [
                        {
                            name: 'fontFamily.table',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.tableHead',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'fontWeight.tableHead',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-weight"),
                                " value."),
                        },
                        {
                            name: 'length.table.border',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-width"),
                                " value."),
                        },
                        {
                            name: 'length.table.headBorder',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#thead" }, "Thead"),
                                " children ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-width"),
                                " value."),
                        },
                        {
                            name: 'radius.table',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                        {
                            name: 'vars.tableStripedOrientation',
                            type: 'odd | even',
                            description: 'Table striped orientation format.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_17__["default"], { attrs: [
                        {
                            name: 'table.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'table.headFontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'table.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#th" }, "Th"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_10__["default"], { to: "/ui-components/table#td" }, "Td"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_13__["default"], { next: {
                    label: 'Textarea',
                    to: '/ui-components/textarea',
                }, prev: {
                    label: 'Switch',
                    to: '/ui-components/switch',
                } })),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], { list: [
                { label: 'Table', id: 'table' },
                { label: 'Thead', id: 'thead' },
                { label: 'Tbody', id: 'tbody' },
                { label: 'Tfoot', id: 'tfoot' },
                { label: 'Tr', id: 'tr' },
                { label: 'Th', id: 'th' },
                { label: 'Td', id: 'td' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ })

}]);
//# sourceMappingURL=bad93181c75427808a1e.js.map