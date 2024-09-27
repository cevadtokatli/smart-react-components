"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Alert_index_tsx"],{

/***/ "./src/containers/Alert/Alert.tsx":
/*!****************************************!*\
  !*** ./src/containers/Alert/Alert.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Alert */ "./node_modules/@smart-react-components/ui/Alert/index.js");
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");







const Alert = () => {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", { id: "alert" }, "Alert"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Displays important messages that demand the user's immediate attention."),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "Props"),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_5__["default"], { props: [
                {
                    name: 'children',
                    type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                        " | ",
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#content-element" }, "ContentElement"),
                        "[]"),
                    isRequired: true,
                    description: 'Alert content.',
                },
                {
                    name: 'palette',
                    type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                    type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#size-prop" }, "SizeProp"),
                    defaultValue: 'medium',
                    description: 'Alert size, has responsive support.',
                },
                {
                    name: 'shape',
                    type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                    defaultValue: 'rectangle',
                    description: 'Alert shape.',
                },
                {
                    name: 'elementProps',
                    type: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                    description: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                        "Alert element ",
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/api#styled-props" }, "Styled Props"),
                        "."),
                },
            ] }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__["default"], null,
            "Alert provides ",
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#click-events" }, "Click Events"),
            " and ",
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_3__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
            " for the alert element."),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_4__["default"], { first: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

export default () => (
  <>
    <Alert>Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="secondary" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="success" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="danger" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="warning" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="info" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="light" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert palette="dark" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
  </>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), null, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "success", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "danger", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "warning", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "info", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "light", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "dark", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."))),
                title: 'Palette',
            }, second: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

export default () => (
  <>
    <Alert isOutline>Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="secondary" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="success" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="danger" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="warning" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="info" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="light" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isOutline palette="dark" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
  </>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "secondary", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "success", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "danger", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "warning", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "info", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "light", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isOutline: true, palette: "dark", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."))),
                title: 'Outline',
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_4__["default"], { first: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

export default () => (
  <>
    <Alert isSoft>Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="secondary" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="success" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="danger" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="warning" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="info" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="light" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert isSoft palette="dark" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
  </>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "secondary", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "success", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "danger", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "warning", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "info", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "light", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "dark", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."))),
                title: 'Soft',
            }, second: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

expot default () => (
  <>
    <Alert size="small">Lorem ipsum dolor sit amet.</Alert>
    <Alert size="medium" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
    <Alert size="large" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert> 
    <Alert size="small" sizeMd="medium" sizeLg="large" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert> 
  </>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { size: "small" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { size: "medium", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { size: "large", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { size: "small", sizeMd: "medium", sizeLg: "large", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."))),
                title: 'Size',
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_4__["default"], { first: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

expot default () => (
  <>
    <Alert>Lorem ipsum dolor sit amet.</Alert>
    <Alert shape="rounded" marginTop="$length.3">Lorem ipsum dolor sit amet.</Alert>
  </>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), null, "Lorem ipsum dolor sit amet."),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { shape: "rounded", marginTop: "$length.3" }, "Lorem ipsum dolor sit amet."))),
                title: 'Shape',
            }, second: {
                code: `import Alert from '@smart-react-components/ui/Alert'
import React from 'react'

export default () => (
  <Alert>
    <h4>Lipsum</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices id tellus vel tempor. Mauris eu sem non est <a href="javascript:void(0)">tempus</a> euismod ut a felis. In semper elit id lectus eleifend, consequat malesuada dui pulvinar. Nullam semper porta facilisis. Vivamus luctus nulla a lectus rutrum, sit amet efficitur quam feugiat. Cras finibus ante vel justo suscipit, in tempor nibh gravida. Ut sit amet porttitor dui.</p>
    <p>Pellentesque finibus, augue sit amet <a href="javascript:void(0)">bibendum</a> condimentum, dui tortor porta urna, suscipit euismod nisl justo a augue. Nam aliquet sem ut nisi pellentesque, vel suscipit dolor interdum.</p>
    <hr />
    <p>Phasellus sem nisl, dignissim non quam eu, convallis <a href="javascript:void(0)">efficitur</a> lacus. Curabitur dignissim urna sed hendrerit rhoncus. Aenean ullamcorper at tortor quis egestas. Pellentesque vitae tortor vehicula, suscipit nisi et, scelerisque magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eget dolor id purus pulvinar pulvinar quis in leo.</p>
    <p>In hac habitasse <a href="javascript:void(0)">platea</a> dictumst. Ut felis tellus, varius quis leo ut, fermentum mollis magna. Aenean gravida porttitor purus sed ultricies. In lacinia consequat dolor ac efficitur.</p>
  </Alert>
)`,
                output: (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", null, "Lipsum"),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices id tellus vel tempor. Mauris eu sem non est ",
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "javascript:void(0)" }, "tempus"),
                            " euismod ut a felis. In semper elit id lectus eleifend, consequat malesuada dui pulvinar. Nullam semper porta facilisis. Vivamus luctus nulla a lectus rutrum, sit amet efficitur quam feugiat. Cras finibus ante vel justo suscipit, in tempor nibh gravida. Ut sit amet porttitor dui."),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                            "Pellentesque finibus, augue sit amet ",
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "javascript:void(0)" }, "bibendum"),
                            " condimentum, dui tortor porta urna, suscipit euismod nisl justo a augue. Nam aliquet sem ut nisi pellentesque, vel suscipit dolor interdum."),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                            "Phasellus sem nisl, dignissim non quam eu, convallis ",
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "javascript:void(0)" }, "efficitur"),
                            " lacus. Curabitur dignissim urna sed hendrerit rhoncus. Aenean ullamcorper at tortor quis egestas. Pellentesque vitae tortor vehicula, suscipit nisi et, scelerisque magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eget dolor id purus pulvinar pulvinar quis in leo."),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null,
                            "In hac habitasse ",
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "javascript:void(0)" }, "platea"),
                            " dictumst. Ut felis tellus, varius quis leo ut, fermentum mollis magna. Aenean gravida porttitor purus sed ultricies. In lacinia consequat dolor ac efficitur.")))),
                title: 'Paragraph',
            } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ "./src/containers/Alert/AlertCloseIcon.tsx":
/*!*************************************************!*\
  !*** ./src/containers/Alert/AlertCloseIcon.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/transition/CSSTransition */ "./node_modules/@smart-react-components/transition/CSSTransition/index.js");
/* harmony import */ var _smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Alert */ "./node_modules/@smart-react-components/ui/Alert/index.js");
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Alert/AlertIcon */ "./node_modules/@smart-react-components/ui/Alert/AlertIcon.js");
/* harmony import */ var _smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Alert/AlertCloseIcon */ "./node_modules/@smart-react-components/ui/Alert/AlertCloseIcon.js");
/* harmony import */ var _smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");










const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.createGlobalStyle) `
  .fade-show {
    opacity: 0;
  }

  .fade-show-active {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .fade-hide {
    opacity: 1;
  }

  .fade-hide-active {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .scale-show {
    transform: scale(0);
  }

  .scale-show-active {
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .scale-hide {
    transform: scale(1);
  }

  .scale-hide-active {
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }
`;
const AlertCloseIconExample = () => {
    const [primaryStatus, setPrimaryStatus] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(true);
    const [dangerStatus, setDangerStatus] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(true);
    const [warningStatus, setWarningStatus] = react__WEBPACK_IMPORTED_MODULE_6___default().useState(true);
    return (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement(GlobalStyle, null),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex" },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5___default()), { onClick: () => setPrimaryStatus(true) }, "Primary"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5___default()), { palette: "danger", onClick: () => setDangerStatus(true), marginLeft: "$length.3" }, "Danger"),
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_5___default()), { palette: 'warning', onClick: () => setWarningStatus(true), marginLeft: "$length.3" }, "Warning")),
        primaryStatus && (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2___default()), { marginTop: "$length.3" },
            "Lorem ipsum dolor sit amet.",
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3___default()), { hasHover: true, onClick: () => setPrimaryStatus(false) },
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), null)))),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default()), { className: "fade", duration: 300, status: dangerStatus },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "danger", marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3___default()), { hasHover: true, onClick: () => setDangerStatus(false) },
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), null)))),
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_transition_CSSTransition__WEBPACK_IMPORTED_MODULE_1___default()), { className: "scale", duration: 300, status: warningStatus },
            react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "warning", marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_3___default()), { hasHover: true, onClick: () => setWarningStatus(false) },
                    react__WEBPACK_IMPORTED_MODULE_6___default().createElement((_smart_react_components_ui_Alert_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), null))))));
};
const AlertCloseIcon = () => (react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h2", { id: "alert-close-icon" }, "Alert Close Icon"),
    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_7__["default"], { isStyled: true }),
    react__WEBPACK_IMPORTED_MODULE_6___default().createElement("p", null,
        "Alert Close Icon provides a ",
        react__WEBPACK_IMPORTED_MODULE_6___default().createElement("code", null, "svg"),
        " element which closes the alert when it is clicked on."),
    react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import CSSTransition from '@smart-react-components/transition/CSSTransition'
import Alert from '@smart-react-components/ui/Alert'
import AlertIcon from '@smart-react-components/ui/Alert/AlertIcon'
import AlertCloseIcon from '@smart-react-components/ui/Alert/AlertCloseIcon'
import Button from '@smart-react-components/ui/Button'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default () => {
  const [primaryStatus, setPrimaryStatus] = React.useState(true)
  const [dangerStatus, setDangerStatus] = React.useState(true)
  const [warningStatus, setWarningStatus] = React.useState(true)

  return (
    <>
      <GlobalStyle />
      <Div display="flex">
        <Button onClick={() => setPrimaryStatus(true)}>Primary</Button>
        <Button palette="danger" onClick={() => setDangerStatus(true)} marginLeft="$length.3">Danger</Button>
        <Button palette='warning' onClick={() => setWarningStatus(true)} marginLeft="$length.3">Warning</Button>
      </Div>
      { primaryStatus && (
        <Alert marginTop="$length.3">
          Lorem ipsum dolor sit amet.
          <AlertIcon hasHover onClick={() => setPrimaryStatus(false)}>
            <AlertCloseIcon />
          </AlertIcon>
        </Alert>
      ) }
      <CSSTransition className="fade" duration={300} status={dangerStatus}>
        <Alert palette="danger" marginTop="$length.3">
          Lorem ipsum dolor sit amet.
          <AlertIcon hasHover onClick={() => setDangerStatus(false)}>
            <AlertCloseIcon />
          </AlertIcon>
        </Alert>
      </CSSTransition>
      <CSSTransition className="scale" duration={300} status={warningStatus}>
        <Alert palette="warning" marginTop="$length.3">
          Lorem ipsum dolor sit amet.
          <AlertIcon hasHover onClick={() => setWarningStatus(false)}>
            <AlertCloseIcon />
          </AlertIcon>
        </Alert>
      </CSSTransition>
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_6___default().createElement(AlertCloseIconExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertCloseIcon);


/***/ }),

/***/ "./src/containers/Alert/AlertIcon.tsx":
/*!********************************************!*\
  !*** ./src/containers/Alert/AlertIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Alert */ "./node_modules/@smart-react-components/ui/Alert/index.js");
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Alert/AlertIcon */ "./node_modules/@smart-react-components/ui/Alert/AlertIcon.js");
/* harmony import */ var _smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const AlertIcon = () => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "alert-icon" }, "Alert Icon"),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
        "Alert Icon is given as the first or last child element to ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/alert#alert" }, "Alert"),
        ". It takes a JSX element as children that renders an icon."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element',
                isRequired: true,
                description: 'Icon content.',
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: 'Palette item key. If not given, uses the parent component\'s palette prop.',
            },
            {
                name: 'hasBackground',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets the palette color as background.',
            },
            {
                name: 'hasHover',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Enables hover effect.'
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                    "Icon element ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__["default"], null,
        "Alert Icon provides ",
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#click-events" }, "Click Events"),
        " for the icon element."),
    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import Alert from '@smart-react-components/ui/Alert'
import AlertIcon from '@smart-react-components/ui/Alert/AlertIcon'
import React from 'react'

export default () => (
  <>
    <Alert>
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </AlertIcon>
      Lorem ipsum dolor sit amet.
    </Alert>
    <Alert palette="secondary" isSoft marginTop="$length.3">
      Lorem ipsum dolor sit amet.
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </AlertIcon>
    </Alert>
    <Alert palette="success" isSoft marginTop="$length.3">
      Lorem ipsum dolor sit amet.
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></Svg>
      </AlertIcon>
    </Alert>
    <Alert palette="danger" marginTop="$length.3">
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></Svg>
      </AlertIcon>
      Lorem ipsum dolor sit amet.
    </Alert>
    <Alert palette="warning" marginTop="$length.3">
      Lorem ipsum dolor sit amet.
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></Svg>
      </AlertIcon>
    </Alert>
    <Alert palette="info" isSoft marginTop="$length.3">
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></Svg>
      </AlertIcon>
      Lorem ipsum dolor sit amet.
    </Alert>
    <Alert palette="danger" isOutline marginTop="$length.3">
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></Svg>
      </AlertIcon>
      Lorem ipsum dolor sit amet.
    </Alert>
    <Alert palette="warning" isOutline marginTop="$length.3">
      Lorem ipsum dolor sit amet.
      <AlertIcon>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></Svg>
      </AlertIcon>
    </Alert>
  </>
)`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                "Lorem ipsum dolor sit amet."),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", isSoft: true, marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success", isSoft: true, marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", marginTop: "$length.3" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }))),
                "Lorem ipsum dolor sit amet."),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" })))),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", isSoft: true, marginTop: "$length.3" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }))),
                "Lorem ipsum dolor sit amet."),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger", isOutline: true, marginTop: "$length.3" },
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }))),
                "Lorem ipsum dolor sit amet."),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning", isOutline: true, marginTop: "$length.3" },
                "Lorem ipsum dolor sit amet.",
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Alert_AlertIcon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }))))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertIcon);


/***/ }),

/***/ "./src/containers/Alert/index.tsx":
/*!****************************************!*\
  !*** ./src/containers/Alert/index.tsx ***!
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
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alert */ "./src/containers/Alert/Alert.tsx");
/* harmony import */ var _AlertCloseIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AlertCloseIcon */ "./src/containers/Alert/AlertCloseIcon.tsx");
/* harmony import */ var _AlertIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AlertIcon */ "./src/containers/Alert/AlertIcon.tsx");











const Alert = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_7__["default"])({ title: 'Alert' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Alert__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AlertCloseIcon__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_1__["default"], { attrs: [
                        {
                            name: 'cursor.alertIconClickable',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/ui-components/alert#alert-icon" }, "Alert Icon"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value when it is clickable."),
                        },
                        {
                            name: 'fontFamily.alert',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'radius.alert',
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
                            name: 'alert.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'alert.iconSize',
                            type: 'string',
                            description: 'Icon size value.',
                        },
                        {
                            name: 'alert.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_2__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_4__["default"], { next: {
                    label: 'Badge',
                    to: '/ui-components/badge',
                }, prev: {
                    label: 'Element Props',
                    to: '/element-props',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], { list: [
                { label: 'Alert', id: 'alert' },
                { label: 'Alert Icon', id: 'alert-icon' },
                { label: 'Alert Close Icon', id: 'alert-close-icon' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ })

}]);
//# sourceMappingURL=94428869b887fce0aaa1.js.map