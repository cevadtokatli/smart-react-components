"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Button_index_tsx"],{

/***/ "./src/containers/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/containers/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_types_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/types/button */ "./node_modules/@smart-react-components/ui/types/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");











const Button = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h1", { id: "button" }, "Button"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Imitates ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "button"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_9__["default"], { props: [
            {
                name: 'children',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                    " | ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                    "[]"),
                isRequired: true,
                description: 'Button content.',
            },
            {
                name: 'as',
                type: 'StyledComponent',
                defaultValue: 'button',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Styled component ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "as"),
                    " attribute. It is used to replace the current element with your own styled component to style the element."),
            },
            {
                name: 'type',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#button-type" }, "ButtonType"),
                defaultValue: 'BUTTON',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "type"),
                    " attribute."),
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "disabled"),
                    " attribute."),
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
                name: 'isLink',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Removes all background and border colors and adds an underline when hovered on.',
            },
            {
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Button size, has responsive support.',
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
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets button as block element.',
            },
            {
                name: 'hasSpace',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Adds ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "margin"),
                    " to button."),
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Button shape.',
            },
            {
                name: 'hasWaveEffect',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Enables ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                    "."),
            },
            {
                name: 'waveEffectPalette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                    " palette item key."),
            },
            {
                name: 'loading',
                type: 'JSX.Element',
                description: 'Loading element.',
            },
            {
                name: 'isLoading',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Loading status.',
            },
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Button element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
        "Button provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " and ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "/element-props#click-events" }, "Click Events"),
        " for the ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "button"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_10__["default"], null,
        "Button provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "forwardRef"),
        " to the ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "button"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button>Primary</Button>
    <Button palette="secondary">Secondary</Button>
    <Button palette="success">Success</Button>
    <Button palette="danger">Danger</Button>
    <Button palette="warning">Warning</Button>
    <Button palette="info">Info</Button>
    <Button palette="light">Light</Button>
    <Button palette="dark">Dark</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), null, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary" }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "success" }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "danger" }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "warning" }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info" }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "light" }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "dark" }, "Dark"))),
            title: 'Palette',
        }, second: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button isOutline>Primary</Button>
    <Button isOutline palette="secondary">Secondary</Button>
    <Button isOutline palette="success">Success</Button>
    <Button isOutline palette="danger">Danger</Button>
    <Button isOutline palette="warning">Warning</Button>
    <Button isOutline palette="info">Info</Button>
    <Button isOutline palette="light">Light</Button>
    <Button isOutline palette="dark">Dark</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "secondary" }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "success" }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "danger" }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "warning" }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "info" }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "light" }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isOutline: true, palette: "dark" }, "Dark"))),
            title: 'Outline'
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button isSoft>Primary</Button>
    <Button isSoft palette="secondary">Secondary</Button>
    <Button isSoft palette="success">Success</Button>
    <Button isSoft palette="danger">Danger</Button>
    <Button isSoft palette="warning">Warning</Button>
    <Button isSoft palette="info">Info</Button>
    <Button isSoft palette="light">Light</Button>
    <Button isSoft palette="dark">Dark</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "secondary" }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "success" }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "danger" }, "Danger"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "warning" }, "Warning"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "info" }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "light" }, "Light"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isSoft: true, palette: "dark" }, "Dark"))),
            title: 'Soft',
        }, second: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    <Button size="small" sizeMd="medium" sizeLg="large">Responsive</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small" }, "Small"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { size: "medium" }, "Medium"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { size: "large" }, "Large"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { size: "small", sizeMd: "medium", sizeLg: "large" }, "Responsive"))),
            title: 'Size',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
            code: `import Svg from '@smart-react-components/core/Element/Svg'
import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button isFixedSize palette="success">
      <Svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
    </Button>
    <Button isFixedSize palette="danger">
      <Svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
    </Button>
    <Button isFixedSize shape="rounded" palette="warning">
      <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></Svg>
    </Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isFixedSize: true, palette: "success" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isFixedSize: true, palette: "danger" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isFixedSize: true, shape: "rounded", palette: "warning" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }))))),
            title: 'Fixed Size',
        }, second: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button isBlock>Primary</Button>
    <Button isBlock palette="secondary">Secondary</Button>
    <Button isBlock palette="success">Success</Button>
    <Button isBlock palette="danger">Danger</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true }, "Primary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true, palette: "secondary" }, "Secondary"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true, palette: "success" }, "Success"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true, palette: "danger" }, "Danger"))),
            title: 'Block',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_8__["default"], { first: {
            code: `import Button from '@smart-react-components/ui/Button'
  import ButtonList from '@smart-react-components/ui/Button/ButtonList'
  import React from 'react'

  export default () => (
    <ButtonList>
      <Button>Rectangle</Button>
      <Button shape="rounded">Rounded</Button>
    </ButtonList>
  )`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), null, "Rectangle"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { shape: "rounded" }, "Rounded"))),
            title: 'Shape',
        }, second: {
            code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import { ButtonType } from '@smart-react-components/ui/types/button'
import React from 'react'

export default () => (
  <ButtonList>
    <Button>Button</Button>
    <Button type={ButtonType.RESET}>Button Reset</Button>
    <Button type={ButtonType.SUBMIT}>Button Submit</Button>
  </ButtonList>
)`,
            output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), null, "Button"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { type: _smart_react_components_ui_types_button__WEBPACK_IMPORTED_MODULE_3__.ButtonType.RESET }, "Reset"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { type: _smart_react_components_ui_types_button__WEBPACK_IMPORTED_MODULE_3__.ButtonType.SUBMIT }, "Submit"))),
            title: 'Type',
        } }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_6__["default"], { code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <ButtonList>
    <Button isDisabled>Button</Button>
    <Button isDisabled isOutline>Button</Button>
    <Button isDisabled isSoft>Button</Button>
  </ButtonList>
)`, output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isDisabled: true }, "Button"),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isDisabled: true, isOutline: true }, "Button"),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isDisabled: true, isSoft: true }, "Button"))), title: "Disabled" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/containers/Button/ButtonAddon.tsx":
/*!***********************************************!*\
  !*** ./src/containers/Button/ButtonAddon.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonAddon */ "./node_modules/@smart-react-components/ui/Button/ButtonAddon.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");










const ButtonAddonExample = () => {
    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(0);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { leftAddon: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })))) }, "Left Addon"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "secondary", rightAddon: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" })))) }, "Right Addon"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { palette: "info", leftAddon: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isSeparated: true, onClick: () => setCount(count + 1) },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })))), rightAddon: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonAddon__WEBPACK_IMPORTED_MODULE_2___default()), { isSeparated: true, onClick: () => setCount(count - 1) },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_0___default()), { viewBox: "0 0 24 24" },
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13H5v-2h14v2z" })))) },
            "Separated Multi Addons (",
            String(count),
            ")")));
};
const ButtonAddon = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "button-addon" }, "Button Addon"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Button Addon is rendered only under ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button#button" }, "Button"),
        ". Each button can have up to 2 addons as left and right."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                isRequired: true,
                description: 'Button Addon content.'
            },
            {
                name: 'isDisabled',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets the addon as non-clickable.',
            },
            {
                name: 'isSeparated',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets the addon as a seprate element from the button.',
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                name: 'waveEffectPalette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                    " palette item key."),
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Addon element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Button Addon provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#click-events" }, "Click Events"),
        " for the addon element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_9__["default"], { code: `import Svg from '@smart-react-components/core/Element/Svg'
import Button from '@smart-react-components/ui/Button'
import ButtonAddon from '@smart-react-components/ui/Button/ButtonAddon'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => {
  const [count, setCount] = React.useState(0)

  return (
    <ButtonList>
      <Button
        leftAddon={(
          <ButtonAddon>
            <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></Svg>
          </ButtonAddon>
        )}
      >
        Left Addon
      </Button>
      <Button
        palette="secondary"
        rightAddon={(
          <ButtonAddon>
            <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" /></Svg>
          </ButtonAddon>
        )}
      >
        Right Addon
      </Button>
      <Button
        palette="info"
        leftAddon={(
          <ButtonAddon
            isSeparated
            onClick={() => setCount(count + 1)}
          >
            <Svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></Svg>
          </ButtonAddon>
        )}
        rightAddon={(
          <ButtonAddon
            isSeparated
            onClick={() => setCount(count - 1)}
          >
            <Svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" /></Svg>
          </ButtonAddon>
        )}
      >
        Separated Multi Addons ({ String(count) })
      </Button>
    </ButtonList>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(ButtonAddonExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonAddon);


/***/ }),

/***/ "./src/containers/Button/ButtonGroup.tsx":
/*!***********************************************!*\
  !*** ./src/containers/Button/ButtonGroup.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonGroup */ "./node_modules/@smart-react-components/ui/Button/ButtonGroup.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");










const ButtonGroup = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "button-group" }, "Button Group"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Group item that contains an array of ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " elements."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "palette"),
                    " prop."),
            },
            {
                name: 'isOutline',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isOutline"),
                    " prop."),
            },
            {
                name: 'isSoft',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isSoft"),
                    " prop."),
            },
            {
                name: 'isLink',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isLink"),
                    " prop."),
            },
            {
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "size"),
                    " prop."),
            },
            {
                name: 'isFixedSize',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isFixedSize"),
                    " prop."),
            },
            {
                name: 'isBlock',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isBlock"),
                    " prop."),
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#shape" }, "Shape"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "shape"),
                    " prop."),
            },
            {
                name: 'hasWaveEffect',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasWaveEffect"),
                    " prop."),
            },
            {
                name: 'waveEffectPalette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "waveEffectPalette"),
                    " prop."),
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "Group element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Button Group provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the group element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_9__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import Svg from '@smart-react-components/core/Element/Svg'
import Button from '@smart-react-components/ui/Button'
import ButtonGroup from '@smart-react-components/ui/Button/ButtonGroup'
import React from 'react'

export default () => (
  <Div display="flex" flexWrap="wrap" margin="-{length.2}">
    <ButtonGroup margin="$length.2">
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonGroup>
    <ButtonGroup palette="secondary" isOutline margin="$length.2">
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonGroup>
    <ButtonGroup palette="success" shape="rounded" margin="$length.2">
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonGroup>
    <ButtonGroup palette="danger" isOutline margin="$length.2">
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonGroup>
    <ButtonGroup palette="warning" isFixedSize margin="$length.2">
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </Button>
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </Button>
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></Svg>
      </Button>
    </ButtonGroup>
  </Div>
)`, output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", flexWrap: "wrap", margin: "-{length.2}" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default()), { margin: "$length.2" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", isOutline: true, margin: "$length.2" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", shape: "rounded", margin: "$length.2" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", isOutline: true, margin: "$length.2" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonGroup__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", isFixedSize: true, margin: "$length.2" },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })))))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroup);


/***/ }),

/***/ "./src/containers/Button/ButtonLink.tsx":
/*!**********************************************!*\
  !*** ./src/containers/Button/ButtonLink.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonLink */ "./node_modules/@smart-react-components/ui/Button/ButtonLink.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");








const ButtonLink = () => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", { id: "button-link" }, "Button Link"),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_3__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null,
        "Renders an ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
        " element. When the element is clicked on, it changes the URL, but doesn't reload the page."),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", { id: "props" }, "Props"),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_5__["default"], { props: [
            {
                name: 'children',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#content-element" }, "ContentElement"),
                    " | ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#content-element" }, "ContentElement"),
                    "[]"),
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
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                name: 'isLink',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Removes all background and border colors and adds an underline when hovered on.',
            },
            {
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#size-prop" }, "SizeProp"),
                defaultValue: 'medium',
                description: 'Button size, has responsive support.',
            },
            {
                name: 'isFixedSize',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    "Sets ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "width"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "height"),
                    " to ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "fixedSize"),
                    "."),
            },
            {
                name: 'isBlock',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Sets button as block element.',
            },
            {
                name: 'hasSpace',
                type: 'boolean',
                defaultValue: 'false',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    "Adds ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "margin"),
                    " to button."),
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                defaultValue: 'rectangle',
                description: 'Button shape.',
            },
            {
                name: 'hasWaveEffect',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    "Enables ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                    "."),
            },
            {
                name: 'waveEffectPalette',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                    " palette item key."),
            },
            {
                name: 'loading',
                type: 'JSX.Element',
                description: 'Loading element.',
            },
            {
                name: 'isLoading',
                type: 'boolean',
                defaultValue: 'false',
                description: 'Loading status.',
            },
            {
                name: 'leftAddon',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Left addon element.',
            },
            {
                name: 'rightAddon',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#content-element" }, "ContentElement"),
                description: 'Right addon element.',
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/styled-props" }, "Styled Props"),
                    " and HTML attributes."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        "Button Link provides ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_4__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_6__["default"], null,
        "Button Link provides ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "forwardRef"),
        " to ",
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("code", null, "a"),
        " element."),
    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_7__["default"], { code: `import ButtonLink from '@smart-react-components/ui/Button/ButtonLink'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'
      
export default () => (
  <ButtonList>
    <ButtonLink to="/ui-components/button#primary">Primary</ButtonLink>
    <ButtonLink palette="secondary" to="/ui-components/button#secondary">Secondary</ButtonLink>
    <ButtonLink palette="success" to="/ui-components/button#success">Success</ButtonLink>
    <ButtonLink palette="danger" to="/ui-components/button#danger">Danger</ButtonLink>
    <ButtonLink palette="warning" to="/ui-components/button#warning">Warning</ButtonLink>
    <ButtonLink palette="info" to="/ui-components/button#info">Info</ButtonLink>
    <ButtonLink palette="light" to="/ui-components/button#light">Light</ButtonLink>
    <ButtonLink palette="dark" to="/ui-components/button#dark">Dark</ButtonLink>
  </ButtonList>
)`, output: (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { to: "/ui-components/button#primary" }, "Primary"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", to: "/ui-components/button#secondary" }, "Secondary"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "success", to: "/ui-components/button#success" }, "Success"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "danger", to: "/ui-components/button#danger" }, "Danger"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "warning", to: "/ui-components/button#warning" }, "Warning"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "info", to: "/ui-components/button#info" }, "Info"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "light", to: "/ui-components/button#light" }, "Light"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_smart_react_components_ui_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "dark", to: "/ui-components/button#dark" }, "Dark"))), title: "Example" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLink);


/***/ }),

/***/ "./src/containers/Button/ButtonList.tsx":
/*!**********************************************!*\
  !*** ./src/containers/Button/ButtonList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/core/Element/Svg */ "./node_modules/@smart-react-components/core/Element/Svg.js");
/* harmony import */ var _smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");










const ButtonList = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "button-list" }, "Button List"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "List item that contains an array of ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
        "."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element[]',
                isRequired: true,
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " elements."),
            },
            {
                name: 'palette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "palette"),
                    " prop."),
            },
            {
                name: 'isOutline',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isOutline"),
                    " prop."),
            },
            {
                name: 'isSoft',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isSoft"),
                    " prop."),
            },
            {
                name: 'isLink',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isLink"),
                    " prop."),
            },
            {
                name: 'size',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "size"),
                    " prop."),
            },
            {
                name: 'isFixedSize',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isFixedSize"),
                    " prop."),
            },
            {
                name: 'isBlock',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "isBlock"),
                    " prop."),
            },
            {
                name: 'hasSpace',
                type: 'boolean',
                defaultValue: 'true',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasSpace"),
                    " prop."),
            },
            {
                name: 'shape',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#shape" }, "Shape"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "shape"),
                    " prop."),
            },
            {
                name: 'hasWaveEffect',
                type: 'boolean',
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasWaveEffect"),
                    " prop."),
            },
            {
                name: 'waveEffectPalette',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/button" }, "Button"),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "waveEffectPalette"),
                    " prop."),
            },
            {
                name: 'elementProps',
                type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "List element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#styled-props" }, "Styled Props"),
                    "."),
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_8__["default"], null,
        "Button List provides ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
        " for the list element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_9__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import Svg from '@smart-react-components/core/Element/Svg'
import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import React from 'react'

export default () => (
  <Div display="flex" flexWrap="wrap" margin="-{length.2}">
    <ButtonList margin={[0, true]}>
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonList>
    <ButtonList palette="secondary" isOutline margin={[0, true]}>
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonList>
    <ButtonList palette="success" shape="rounded" margin={[0, true]}>
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonList>
    <ButtonList palette="danger" isOutline margin={[0, true]}>
      <Button>Button-1</Button>
      <Button>Button-2</Button>
      <Button>Button-3</Button>
    </ButtonList>
    <ButtonList palette="warning" isFixedSize margin={[0, true]}>
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </Button>
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></Svg>
      </Button>
      <Button>
        <Svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></Svg>
      </Button>
    </ButtonList>
  </Div>
)`, output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { display: "flex", flexWrap: "wrap", margin: "-{length.2}" },
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), { margin: [0, true] },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "secondary", isOutline: true, margin: [0, true] },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "success", shape: "rounded", margin: [0, true] },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "danger", isOutline: true, margin: [0, true] },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-1"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-2"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null, "Button-3")),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_3___default()), { palette: "warning", isFixedSize: true, margin: [0, true] },
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_2___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Svg__WEBPACK_IMPORTED_MODULE_1___default()), { viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })))))) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonList);


/***/ }),

/***/ "./src/containers/Button/ButtonLoading.tsx":
/*!*************************************************!*\
  !*** ./src/containers/Button/ButtonLoading.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonLoading */ "./node_modules/@smart-react-components/ui/Button/ButtonLoading.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonLoading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/ProgressBar */ "./node_modules/@smart-react-components/ui/ProgressBar/index.js");
/* harmony import */ var _smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const ButtonLoadingeExample = () => {
    const [isLoading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const [progressBarStatus, setProgressBarStatus] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [isLoading]);
    react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
        if (progressBarStatus) {
            setTimeout(() => {
                setProgressBarStatus(val => val >= 100 ? 0 : val == 1 ? 10 : val + 10);
            }, 400);
        }
    }, [progressBarStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isLoading: isLoading, loading: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonLoading__WEBPACK_IMPORTED_MODULE_2___default()), null), onClick: () => setLoading(true) }, "Loading"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isLoading: progressBarStatus > 0, loading: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonLoading__WEBPACK_IMPORTED_MODULE_2___default()), null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_ProgressBar__WEBPACK_IMPORTED_MODULE_3___default()), { displayValue: true, isNested: true, palette: "light", value: progressBarStatus }))), onClick: () => setProgressBarStatus(1) }, "Progress Bar")));
};
const ButtonLoading = () => (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "button-loading" }, "Button Loading"),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
        "Button Loading is rendered only under ",
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-componnts/button#button" }, "Button"),
        ". Each button can have single loading element."),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_7__["default"], { props: [
            {
                name: 'children',
                type: 'JSX.Element',
                defaultValue: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                    "<",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/loading" }, "Loading"),
                    " />"),
                description: 'Button Loading content.',
            },
            {
                name: 'hasAnimation',
                type: 'boolean',
                defaultValue: 'true',
                description: 'Enables animation effect.',
            },
        ] }),
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import ButtonLoding from '@smart-react-components/ui/Button/ButtonLoading'
import ProgressBar from '@smart-react-components/ui/ProgressBar'
import React from 'react'

export default () => {
  const [isLoading, setLoading] = React.useState(false)
  const [progressBarStatus, setProgressBarStatus] = React.useState(0)

  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [isLoading])

  React.useEffect(() => {
    if (progressBarStatus) {
      setTimeout(() => {
        setProgressBarStatus(val => val >= 100 ? 0 : val == 1 ? 10 : val + 10)
      }, 400)
    }
  }, [progressBarStatus])

  return (
    <ButtonList>
      <Button
        isLoading={isLoading}
        loading={<ButtonLoding />}
        onClick={() => setLoading(true)}
      >
        Loading
      </Button>
      <Button
        isLoading={progressBarStatus > 0}
        loading={(
          <ButtonLoding>
            <ProgressBar
              displayValue
              isNested
              palette="light"
              value={progressBarStatus}
            />
          </ButtonLoding>
        )}
        onClick={() => setProgressBarStatus(1)}
      >
        Progress Bar
      </Button>
    </ButtonList>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(ButtonLoadingeExample, null) })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLoading);


/***/ }),

/***/ "./src/containers/Button/ButtonSelect.tsx":
/*!************************************************!*\
  !*** ./src/containers/Button/ButtonSelect.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button_ButtonSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonSelect */ "./node_modules/@smart-react-components/ui/Button/ButtonSelect.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonSelect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonSelect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Select/Option */ "./node_modules/@smart-react-components/ui/Select/Option.js");
/* harmony import */ var _smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Example */ "./src/components/Example.tsx");









const ButtonSelectExample = () => {
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    const [activeMultiple, setActiveMultiple] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonSelect__WEBPACK_IMPORTED_MODULE_0___default()), { active: active, placeholder: "Placeholder...", setActive: setActive },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 1 }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 2 }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 3 }, "Option 3")),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonSelect__WEBPACK_IMPORTED_MODULE_0___default()), { active: activeMultiple, placeholder: "Placeholder...", setActive: setActiveMultiple },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 1 }, "Option 1"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 2 }, "Option 2"),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Select_Option__WEBPACK_IMPORTED_MODULE_2___default()), { value: 3 }, "Option 3"))));
};
const ButtonSelect = () => {
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "button-select" }, "Button Select"),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/select#select-box" }, "Select Box"),
            " with ",
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "button"),
            " as the toggle element."),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", { id: "props" }, "Props"),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { props: [
                {
                    name: 'children',
                    type: 'JSX.Element | JSX.Element[]',
                    isRequired: true,
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/select#option" }, "Option"),
                        " elements."),
                },
                {
                    name: 'active',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                        " | ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                        "[]"),
                    isRequired: true,
                    description: 'Active option value(s).',
                },
                {
                    name: 'setActive',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#set-state" }, "SetState"),
                        "<",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                        " | ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#form-value" }, "FormValue"),
                        "[]>"),
                    isRequired: true,
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "The method that sets ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "active"),
                        "."),
                },
                {
                    name: 'placeholder',
                    type: 'string',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Displayed in the toggle element when ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "active"),
                        " is empty."),
                },
                {
                    name: 'isDisabled',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "button"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "disabled"),
                        " attribute."),
                },
                {
                    name: 'palette',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
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
                    name: 'isLink',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: 'Removes all background and border colors and adds an underline when hovered on.',
                },
                {
                    name: 'size',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#size-prop" }, "SizeProp"),
                    defaultValue: 'medium',
                    description: 'Button size, has responsive support.',
                },
                {
                    name: 'isFixedSize',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Sets ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "width"),
                        " and ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "height"),
                        " to ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "fixedSize"),
                        "."),
                },
                {
                    name: 'isBlock',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: 'Sets button as block element.',
                },
                {
                    name: 'hasSpace',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Adds ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "margin"),
                        " to button."),
                },
                {
                    name: 'shape',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#shape-prop" }, "ShapeProp"),
                    defaultValue: 'rectangle',
                    description: 'Button shape.',
                },
                {
                    name: 'hasHover',
                    type: 'boolean',
                    defaultValue: 'true',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Enables hover effect on ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/select#option" }, "Options"),
                        "."),
                },
                {
                    name: 'hasWaveEffect',
                    type: 'boolean',
                    defaultValue: 'true',
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Enables ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                        "."),
                },
                {
                    name: 'waveEffectPalette',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/ui-components/wave-effect" }, "Wave Effect"),
                        " palette item key."),
                },
                {
                    name: 'isLoading',
                    type: 'boolean',
                    defaultValue: 'false',
                    description: 'Loading status.',
                },
                {
                    name: 'leftAddon',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement"),
                    description: 'Left addon element.',
                },
                {
                    name: 'rightAddon',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#content-element" }, "ContentElement"),
                    description: 'Right addon element.',
                },
                {
                    name: 'elementProps',
                    type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                    description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                        "Button element ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/api#styled-props" }, "Styled Props"),
                        "."),
                },
            ] }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            "Button Select provides ",
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_5__["default"], { to: "/element-props#intrinsic-styled-core-props" }, "Intrinsic Styled Core Props"),
            " for ",
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "button"),
            " element."),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_7__["default"], null,
            "Button Select provides ",
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "forwardRef"),
            " to the ",
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "button"),
            " element."),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_8__["default"], { code: `import ButtonSelect from '@smart-react-components/ui/Button/ButtonSelect'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Option from '@smart-react-components/ui/Select/Option'
import React from 'react'

export default () => {
  const [active, setActive] = React.useState<string>(null)
  const [activeMultiple, setActiveMultiple] = React.useState<string[]>([])

  return (
    <ButtonList>
      <ButtonSelect
        active={active}
        placeholder="Placeholder..."
        setActive={setActive}
      >
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
        <Option value={3}>Option 3</Option>
      </ButtonSelect>
      <ButtonSelect
        active={activeMultiple}
        placeholder="Placeholder..."
        setActive={setActiveMultiple}
      >
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
        <Option value={3}>Option 3</Option>
      </ButtonSelect>
    </ButtonList>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ButtonSelectExample, null) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonSelect);


/***/ }),

/***/ "./src/containers/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/containers/Button/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/containers/Button/Button.tsx");
/* harmony import */ var _ButtonAddon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonAddon */ "./src/containers/Button/ButtonAddon.tsx");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonGroup */ "./src/containers/Button/ButtonGroup.tsx");
/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonLink */ "./src/containers/Button/ButtonLink.tsx");
/* harmony import */ var _ButtonList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonList */ "./src/containers/Button/ButtonList.tsx");
/* harmony import */ var _ButtonLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ButtonLoading */ "./src/containers/Button/ButtonLoading.tsx");
/* harmony import */ var _ButtonSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ButtonSelect */ "./src/containers/Button/ButtonSelect.tsx");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/LabelLink */ "./src/components/LabelLink.tsx");















const Button = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_5__["default"])({ title: 'Button' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonLink__WEBPACK_IMPORTED_MODULE_9__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonSelect__WEBPACK_IMPORTED_MODULE_12__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonList__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonAddon__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonLoading__WEBPACK_IMPORTED_MODULE_11__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_13__["default"], { attrs: [
                        {
                            name: 'cursor.button',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.button',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'opacity.buttonDisabled',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "opacity"),
                                " value when ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "isDisabled"),
                                " is ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "true"),
                                "."),
                        },
                        {
                            name: 'radius.button',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_14__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                        {
                            name: 'zIndex.buttonLoading',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                "Loading ",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "z-index"),
                                " value."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_13__["default"], { attrs: [
                        {
                            name: 'button.fixedSize',
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
                            name: 'button.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'button.iconSize',
                            type: 'string',
                            description: 'Icon size value.',
                        },
                        {
                            name: 'button.margin',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_14__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "margin"),
                                " value."),
                        },
                        {
                            name: 'button.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_14__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_2__["default"], { next: {
                    label: 'Checkbox',
                    to: '/ui-components/checkbox',
                }, prev: {
                    label: 'Breadcrumb',
                    to: '/ui-components/breadcrumb',
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], { list: [
                { label: 'Button', id: 'button' },
                { label: 'Button Link', id: 'button-link' },
                { label: 'Button Select', id: 'button-select' },
                { label: 'Button List', id: 'button-list' },
                { label: 'Button Group', id: 'button-group' },
                { label: 'Button Addon', id: 'button-addon' },
                { label: 'Button Loading', id: 'button-loading' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

}]);
//# sourceMappingURL=e653a0d094605967457c.js.map