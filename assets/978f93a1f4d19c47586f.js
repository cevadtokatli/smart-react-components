"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Badge_index_tsx"],{

/***/ "./src/containers/Badge/Badge.tsx":
/*!****************************************!*\
  !*** ./src/containers/Badge/Badge.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Badge */ "./node_modules/@smart-react-components/ui/Badge/index.js");
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Badge/BadgeList */ "./node_modules/@smart-react-components/ui/Badge/BadgeList.js");
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");












const Badge = () => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", { id: "Badge" }, "Badge"),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null, "Provides information on new updates and notifications."),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
            {
                name: 'children',
                type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#content-element" }, "ContentElement"),
                    " | ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#content-element" }, "ContentElement"),
                    "[]"),
                isRequired: true,
                description: 'Badge content.',
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Badge size, has responsive support.',
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Badge shape.',
            },
            {
                name: 'isFixedSize',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                    "Sets ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "width"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "height"),
                    " to ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "fixedSize"),
                    "."),
            },
            {
                name: 'hasSpace',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement("code", null, "margin"),
                    " value."),
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                    "Badge element ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        "Badge provides ",
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/element-props#click-events" }, "Click Events"),
        ", ",
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        ", and ",
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/element-props#intrinsic-styled-position-props" }, "Intrinsic Styled Position Props"),
        " for the badge element."),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_9__["default"], { first: {
            code: `import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export default () => (
  <>
    <Badge hasSpace>Primary</Badge>
    <Badge palette="secondary" hasSpace>Secondary</Badge>
    <Badge palette="success" hasSpace>Success</Badge>
    <Badge palette="danger" hasSpace>Danger</Badge>
    <Badge palette="warning" hasSpace>Warning</Badge>
    <Badge palette="info" hasSpace>Info</Badge>
    <Badge palette="light" hasSpace>Light</Badge>
    <Badge palette="dark" hasSpace>Dark</Badge>
  </> 
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { hasSpace: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "secondary", hasSpace: true }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "success", hasSpace: true }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "danger", hasSpace: true }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "warning", hasSpace: true }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "info", hasSpace: true }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "light", hasSpace: true }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "dark", hasSpace: true }, "Dark"))),
            title: 'Palette',
        }, second: {
            code: `import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export default () => (
  <>
    <Badge isOutline hasSpace>Primary</Badge>
    <Badge isOutline palette="secondary" hasSpace>Secondary</Badge>
    <Badge isOutline palette="success" hasSpace>Success</Badge>
    <Badge isOutline palette="danger" hasSpace>Danger</Badge>
    <Badge isOutline palette="warning" hasSpace>Warning</Badge>
    <Badge isOutline palette="info" hasSpace>Info</Badge>
    <Badge isOutline palette="light" hasSpace>Light</Badge>
    <Badge isOutline palette="dark" hasSpace>Dark</Badge>
  </> 
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, hasSpace: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "secondary", hasSpace: true }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "success", hasSpace: true }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "danger", hasSpace: true }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "warning", hasSpace: true }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "info", hasSpace: true }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "light", hasSpace: true }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isOutline: true, palette: "dark", hasSpace: true }, "Dark"))),
            title: 'Outline',
        } }),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_9__["default"], { first: {
            code: `import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export default () => (
  <>
    <Badge isSoft hasSpace>Primary</Badge>
    <Badge isSoft palette="secondary" hasSpace>Secondary</Badge>
    <Badge isSoft palette="success" hasSpace>Success</Badge>
    <Badge isSoft palette="danger" hasSpace>Danger</Badge>
    <Badge isSoft palette="warning" hasSpace>Warning</Badge>
    <Badge isSoft palette="info" hasSpace>Info</Badge>
    <Badge isSoft palette="light" hasSpace>Light</Badge>
    <Badge isSoft palette="dark" hasSpace>Dark</Badge>
  </> 
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, hasSpace: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "secondary", hasSpace: true }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "success", hasSpace: true }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "danger", hasSpace: true }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "warning", hasSpace: true }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "info", hasSpace: true }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "light", hasSpace: true }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "dark", hasSpace: true }, "Dark"))),
            title: 'Soft',
        }, second: {
            code: `import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export default () => (
  <>
    <Badge size="small" hasSpace>Small</Badge>
    <Badge size="medium" hasSpace>Medium</Badge>
    <Badge size="large" hasSpace>Large</Badge>
    <Badge size="small" sizeMd="medium" sizeLg="large" hasSpace>Responsive</Badge>
  </> 
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", hasSpace: true }, "Small"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { size: "medium", hasSpace: true }, "Medium"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { size: "large", hasSpace: true }, "Large"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", sizeMd: "medium", sizeLg: "large", hasSpace: true }, "Responsive"))),
            title: 'Size',
        } }),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_9__["default"], { first: {
            code: `import Badge from '@smart-react-components/ui/Badge'
import React from 'react'

export default () => (
  <>
    <Badge hasSpace>Rectangle</Badge>
    <Badge shape="rounded" hasSpace>Rounded</Badge>
  </> 
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { hasSpace: true }, "Rectangle"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { shape: "rounded", hasSpace: true }, "Rounded"))),
            title: 'Shape',
        }, second: {
            code: `import Svg from '@smart-react-components/core/Element/Svg'
import Badge from '@smart-react-components/ui/Badge'
import BadgeList from '@smart-react-components/ui/Badge/BadgeList'
import React from 'react'

export default () => (
  <BadgeList>
    <Badge isFixedSize>1</Badge>
    <Badge palette="secondary" isSoft isFixedSize>2</Badge>
    <Badge palette="info" shape="rounded" isFixedSize>3</Badge>
    <Badge palette="danger" isFixedSize>
      <Svg viewBox="0 0 24 24" iconSize={[16, true]}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none" /></Svg>
    </Badge>
    <Badge palette="warning" isOutline isFixedSize>
      <Svg viewBox="0 0 24 24" iconSize={[16, true]}><path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z" /><path d="M0 0h24v24H0V0z" fill="none" /></Svg>
    </Badge>
    <Badge palette="success" shape="rounded" isFixedSize>
      <Svg viewBox="0 0 24 24" iconSize={[16, true]}><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></Svg>
    </Badge>
  </BadgeList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { isFixedSize: true }, "1"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "secondary", isSoft: true, isFixedSize: true }, "2"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "info", shape: "rounded", isFixedSize: true }, "3"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "danger", isFixedSize: true },
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24", iconSize: [16, true] },
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }),
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "warning", isOutline: true, isFixedSize: true },
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24", iconSize: [16, true] },
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z" }),
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "success", shape: "rounded", isFixedSize: true },
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24", iconSize: [16, true] },
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_5___default().createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" }))))),
            title: 'Fixed Size',
        } }),
    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_7__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import Badge from '@smart-react-components/ui/Badge'
import Button from '@smart-react-components/ui/Button'
import React from 'react'

export default () => (
  <Div alignItems="center" display="flex">
    <Div position="relative">
      <Button>Left</Button>
      <Badge position="absolute" left={-10} top={-10} isFixedSize shape="rounded" isSoft>1</BadgeComponent>
    </Div>
    <Div position="relative" marginLeft="$length.3">
      <Button palette="secondary" isOutline>Right</Button>
      <Badge position="absolute" right={-10} top={-10} isFixedSize shape="rounded" palette="secondary">5</BadgeComponent>
    </Div>
  </Div>
)`, output: (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { alignItems: "center", display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { position: "relative" },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_4___default()), null, "Left"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { position: "absolute", left: -10, top: -10, isFixedSize: true, shape: "rounded", isSoft: true }, "1")),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { position: "relative", marginLeft: "$length.3" },
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_4___default()), { palette: "secondary", isOutline: true }, "Right"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_2___default()), { position: "absolute", right: -10, top: -10, isFixedSize: true, shape: "rounded", palette: "secondary" }, "5")))), title: "Position" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ "./src/containers/Badge/BadgeIcon.tsx":
/*!********************************************!*\
  !*** ./src/containers/Badge/BadgeIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Badge */ "./node_modules/@smart-react-components/ui/Badge/index.js");
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Badge/BadgeIcon */ "./node_modules/@smart-react-components/ui/Badge/BadgeIcon.js");
/* harmony import */ var _smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Badge/BadgeList */ "./node_modules/@smart-react-components/ui/Badge/BadgeList.js");
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");










const BadgeIcon = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "badge-icon" }, "Badge Icon"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Badge Icon is given as the first or last child element to ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/badge#badge" }, "Badge"),
        ". It takes a JSX element as children that renders an icon."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element',
                isRequired: true,
                description: 'Icon content.',
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Icon element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/styled-props" }, "Styled Props"),
                    ".")
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Badge Icon provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#click-events" }, "Click Events"),
        " for the icon element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_9__["default"], { code: `import Svg from "@smart-react-components/core/Element/Svg"
import Badge from '@smart-react-components/ui/Badge'
import BadgeIcon from '@smart-react-components/ui/Badge/BadgeIcon'
import BadgeList from '@smart-react-components/ui/Badge/BadgeList'
import React from 'react'

export default () => (
  <BadgeList>
    <Badge>
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </BadgeIcon>
      Edit
    </Badge>
    <Badge palette="secondary">
      Send
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </BadgeIcon>
    </Badge>
    <Badge palette="success">
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </BadgeIcon>
      Add
    </Badge>
    <Badge palette="danger">
      Clear
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </BadgeIcon>
    </Badge>
    <Badge palette="warning">
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" /></Svg>
      </BadgeIcon>
      Block
    </Badge>
    <Badge palette="info">
      Forward
      <BadgeIcon>
        <Svg viewBox="0 0 24 24"><path d="M12 8V4l8 8-8 8v-4H4V8z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </BadgeIcon>
    </Badge>
  </BadgeList> 
)`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_3___default()), null,
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                "Edit"),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" },
                "Send",
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                "Add"),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger" },
                "Clear",
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" }))),
                "Block"),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info" },
                "Forward",
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Badge_BadgeIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M12 8V4l8 8-8 8v-4H4V8z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeIcon);


/***/ }),

/***/ "./src/containers/Badge/BadgeList.tsx":
/*!********************************************!*\
  !*** ./src/containers/Badge/BadgeList.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Badge */ "./node_modules/@smart-react-components/ui/Badge/index.js");
/* harmony import */ var _smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Badge/BadgeList */ "./node_modules/@smart-react-components/ui/Badge/BadgeList.js");
/* harmony import */ var _smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");








const BadgeList = () => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "badge-list" }, "Badge List"),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_3__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
        "List element that contains an array of ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " items."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "palette"),
                    " prop."),
            },
            {
                name: 'isOutline',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isOutline"),
                    " prop."),
            },
            {
                name: 'isSoft',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isSoft"),
                    " prop."),
            },
            {
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#size-prop" }, "SizeProp"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "size"),
                    " prop."),
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "shape"),
                    " prop."),
            },
            {
                name: 'isFixedSize',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "isFixedSize"),
                    " prop."),
            },
            {
                name: 'hasSpace',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/badge#badge" }, "Badge"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "hasSpace"),
                    " prop."),
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    "List element ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/styled-props" }, "Styled Props"),
                    ".")
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        "Badge List provides ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the list element."),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_4__["default"], { code: `import Badge from '@smart-react-components/ui/Badge'
import BadgeList from '@smart-react-components/ui/Badge/BadgeList'
import React from 'react'

export default () => (
  <BadgeList>
    { Array(10).fill(0).map((_, i) => (
      <Badge key={i}>Badge {String(i + 1)}</Badge>
    )) }
  </BadgeList>
)`, output: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Badge_BadgeList__WEBPACK_IMPORTED_MODULE_1___default()), null, Array(10).fill(0).map((_, i) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Badge__WEBPACK_IMPORTED_MODULE_0___default()), { key: i },
            "Badge ",
            String(i + 1))))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeList);


/***/ }),

/***/ "./src/containers/Badge/index.tsx":
/*!****************************************!*\
  !*** ./src/containers/Badge/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Badge */ "./src/containers/Badge/Badge.tsx");
/* harmony import */ var _BadgeIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BadgeIcon */ "./src/containers/Badge/BadgeIcon.tsx");
/* harmony import */ var _BadgeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BadgeList */ "./src/containers/Badge/BadgeList.tsx");











const Badge = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_7__["default"])({ title: 'Badge' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BadgeIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BadgeList__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__["default"], { attrs: [
                        {
                            name: 'cursor.badgeClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value when it is clickable."),
                        },
                        {
                            name: 'cursor.badgeIconClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/ui-components/badge#badge-icon" }, "Badge Icon"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value when it is clickable."),
                        },
                        {
                            name: 'fontFamily.badge',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'radius.badge',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__["default"], { attrs: [
                        {
                            name: 'badge.fixedSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "height"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "isFixedSize"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'badge.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'badge.iconSize',
                            type: 'string',
                            description: 'Icon size value.',
                        },
                        {
                            name: 'badge.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "margin"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "hasSpace"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'badge.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__["default"], { next: {
                    label: 'Breadcrumb',
                    to: '/ui-components/breadcrumb',
                }, prev: {
                    label: 'Alert',
                    to: '/ui-components/alert',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], { list: [
                { label: 'Badge', id: 'badge' },
                { label: 'Badge Icon', id: 'badge-icon' },
                { label: 'Badge List', id: 'badge-list' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ })

}]);
//# sourceMappingURL=978f93a1f4d19c47586f.js.map