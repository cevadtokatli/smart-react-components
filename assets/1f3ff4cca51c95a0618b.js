"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Tooltip_tsx"],{

/***/ "./src/containers/Tooltip.tsx":
/*!************************************!*\
  !*** ./src/containers/Tooltip.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Tooltip */ "./node_modules/@smart-react-components/ui/Tooltip/index.js");
/* harmony import */ var _smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Li__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Li */ "./src/elements/Li.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _elements_Ul__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Ul */ "./src/elements/Ul.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");

















const Tooltip = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_16__["default"])({ title: 'Tooltip' });
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_14__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_12__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", { id: "tooltip" }, "Tooltip"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Tooltip component takes two children elements; the first of which for the toggle element and the second for the content element."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
                    "The toggle element ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", null,
                        "(the first item of ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "children"),
                        " prop)"),
                    " should accept ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "ref"),
                    " so it should be either Styled component, or React component with ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "forwardRef"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_9__["default"], { props: [
                        {
                            name: 'children',
                            type: '[JSX.Element, JSX.Element]',
                            isRequired: true,
                            description: 'The first element for the toggle element, and the second element for the tooltip content.',
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            description: 'Tooltip display status.',
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-state" }, "SetState"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'palette',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: '!dynamic',
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
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#size-prop" }, "SizeProp"),
                            defaultValue: 'medium',
                            description: 'Tooltip size, has responsive support.',
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#position" }, "Position"),
                            defaultValue: 'TOP',
                            description: 'Position of the tooltip element by the toggle element. If the tooltip element gets overflown in the given position, it is rendered at another available position.',
                        },
                        {
                            name: 'space',
                            type: 'number',
                            defaultValue: '0',
                            description: 'Space between the toggle and the tooltip element.',
                        },
                        {
                            name: 'triggerInteraction',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#trigger-interaction" }, "TriggerInteraction"),
                            defaultValue: 'CLICK',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Calls ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "true"),
                                " param when the toggle element is interracted with the given interaction."),
                        },
                        {
                            name: 'isDismissible',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "The ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "window"),
                                " click calls ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "false"),
                                " param."),
                        },
                        {
                            name: 'transitionClassName',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "Transition ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "className"),
                                " prefix."),
                        },
                        {
                            name: 'transitionDuration',
                            type: 'number',
                            description: 'Transition duration in milliseconds.',
                        },
                        {
                            name: 'hasShowAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "false"),
                                ", skips the show animation."),
                        },
                        {
                            name: 'hasHideAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "false"),
                                ", skips the hide animation."),
                        },
                        {
                            name: 'beforeShow',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                        {
                            name: 'hoverDelay',
                            type: 'number',
                            defaultValue: '0',
                            description: 'Delay in milliseconds before the tooltip is shown when the mouse is hovered on the toggle element.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Trigger Interaction"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "You can set the trigger interaction for the Tooltip."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_15__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("b", null, "CLICK:"),
                        " is ocurred when the trigger element is clicked on."),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("b", null, "HOVER:"),
                        " is ocurred when the trigger element is hovered on."),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("b", null, "RIGHT_CLICK:"),
                        " is ocurred when the trigger element is right-clicked on."),
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("b", null, "NONE:"),
                        " The trigger element is never triggered ",
                        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", null, "(for custom usage purposes)"),
                        ".")),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_11__["default"], { marginTop: "$length.3" },
                    "You can set to ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "CLICK | HOVER"),
                    " to trigger on both click and hover."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Set Position"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null,
                    "Tooltip provides an event for you to set position custom in case you have modified the box element afterwards. When you trigger ",
                    react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "src.tooltip.setPosition"),
                    " event for the toggle element, it sets position in the component."),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Tooltip from '@smart-react-components/ui/Tooltip'
import React from 'react'

export default () => (
  <ButtonList>
    <Tooltip>
      <Button palette="!dynamic" marginLeft="$length.3" marginTop="$length.3">!Dynamic</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="dynamic">
      <Button palette="dynamic" marginLeft="$length.3" marginTop="$length.3">Dynamic</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="primary">
      <Button marginLeft="$length.3" marginTop="$length.3">Primary</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="secondary">
      <Button palette="secondary" marginLeft="$length.3" marginTop="$length.3">Secondary</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="success">
      <Button palette="success" marginLeft="$length.3" marginTop="$length.3">Success</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="danger">
      <Button palette="danger" marginLeft="$length.3" marginTop="$length.3">Danger</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="warning">
      <Button palette="warning" marginLeft="$length.3" marginTop="$length.3">Warning</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip palette="info">
      <Button palette="info" marginLeft="$length.3" marginTop="$length.3">Info</Button>
      <span>Tooltip</span>
    </Tooltip>
  </ButtonList>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "!dynamic", marginLeft: "$length.3", marginTop: "$length.3" }, "!Dynamic"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "dynamic" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "dynamic", marginLeft: "$length.3", marginTop: "$length.3" }, "Dynamic"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", marginLeft: "$length.3", marginTop: "$length.3" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "success", marginLeft: "$length.3", marginTop: "$length.3" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "danger", marginLeft: "$length.3", marginTop: "$length.3" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "warning", marginLeft: "$length.3", marginTop: "$length.3" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "info", marginLeft: "$length.3", marginTop: "$length.3" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")))),
                        title: 'Palette',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Tooltip from '@smart-react-components/ui/Tooltip'
import React from 'react'

export default () => (
  <ButtonList>
    <Tooltip isSoft>
      <Button isSoft palette="!dynamic" marginLeft="$length.3" marginTop="$length.3">!Dynamic</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="dynamic">
      <Button isSoft palette="dynamic" marginLeft="$length.3" marginTop="$length.3">Dynamic</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="primary">
      <Button isSoft marginLeft="$length.3" marginTop="$length.3">Primary</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="secondary">
      <Button isSoft palette="secondary" marginLeft="$length.3" marginTop="$length.3">Secondary</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="success">
      <Button isSoft palette="success" marginLeft="$length.3" marginTop="$length.3">Success</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="danger">
      <Button isSoft palette="danger" marginLeft="$length.3" marginTop="$length.3">Danger</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="warning">
      <Button isSoft palette="warning" marginLeft="$length.3" marginTop="$length.3">Warning</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip isSoft palette="info">
      <Button isSoft palette="info" marginLeft="$length.3" marginTop="$length.3">Info</Button>
      <span>Tooltip</span>
    </Tooltip>
  </ButtonList>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "!dynamic", marginLeft: "$length.3", marginTop: "$length.3" }, "!Dynamic"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "dynamic" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "dynamic", marginLeft: "$length.3", marginTop: "$length.3" }, "Dynamic"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "primary" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, marginLeft: "$length.3", marginTop: "$length.3" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "secondary" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "secondary", marginLeft: "$length.3", marginTop: "$length.3" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "success" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "success", marginLeft: "$length.3", marginTop: "$length.3" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "danger" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "danger", marginLeft: "$length.3", marginTop: "$length.3" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "warning" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "warning", marginLeft: "$length.3", marginTop: "$length.3" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { isSoft: true, palette: "info" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { isSoft: true, palette: "info", marginLeft: "$length.3", marginTop: "$length.3" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")))),
                        title: 'Soft',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_7__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Tooltip from '@smart-react-components/ui/Tooltip'
import React from 'react'

export default () => (
  <ButtonList>
    <Tooltip size="small">
      <Button marginLeft="$length.3" marginTop="$length.3">Small</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip>
      <Button marginLeft="$length.3" marginTop="$length.3">Medium</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip size="large">
      <Button marginLeft="$length.3" marginTop="$length.3">Large</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip size="small" sizeMd="medium" sizeLg="large">
      <Button marginLeft="$length.3" marginTop="$length.3">Responsive</Button>
      <span>Tooltip</span>
    </Tooltip>
  </ButtonList>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Small"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Medium"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { size: "large" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Large"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", sizeMd: "medium", sizeLg: "large" },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Responsive"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")))),
                        title: 'Size',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Tooltip, { Position } from '@smart-react-components/ui/Tooltip'
import React from 'react'

export default () => (
  <ButtonList>
    <Tooltip>
      <Button marginLeft="$length.3" marginTop="$length.3">Top</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip position={Position.BOTTOM}>
      <Button marginLeft="$length.3" marginTop="$length.3">Bottom</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip position={Position.LEFT}>
      <Button marginLeft="$length.3" marginTop="$length.3">Left</Button>
      <span>Tooltip</span>
    </Tooltip>
    <Tooltip position={Position.RIGHT}>
      <Button marginLeft="$length.3" marginTop="$length.3">Right</Button>
      <span>Tooltip</span>
    </Tooltip>
  </ButtonList>
)`,
                        output: (react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Top"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { position: _smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Position.BOTTOM },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Bottom"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { position: _smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Position.LEFT },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Left"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")),
                            react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), { position: _smart_react_components_ui_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Position.RIGHT },
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { marginLeft: "$length.3", marginTop: "$length.3" }, "Right"),
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Tooltip")))),
                        title: 'Position',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_4__["default"], { attrs: [
                        {
                            name: 'fontFamily.tooltip',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "font-family"),
                                " value."),
                        },
                        {
                            name: 'radius.tooltip',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "border-radius"),
                                " value."),
                        },
                        {
                            name: 'transition.tooltipDuration',
                            type: 'number',
                            description: 'Duration in milliseconds.',
                        },
                        {
                            name: 'zIndex.tooltip',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "z-index"),
                                " value."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_4__["default"], { attrs: [
                        {
                            name: 'tooltip.fontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'tooltip.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#coordinator" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_3___default().createElement("code", null, "padding"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_10__["default"], { next: {
                    label: 'Wave Effect',
                    to: '/ui-components/wave-effect',
                }, prev: {
                    label: 'Textarea',
                    to: '/ui-components/textarea',
                } })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], { list: [
                { label: 'Tooltip', id: 'tooltip' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ })

}]);
//# sourceMappingURL=1f3ff4cca51c95a0618b.js.map