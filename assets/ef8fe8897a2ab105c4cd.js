"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_FixedBox_tsx"],{

/***/ "./src/containers/FixedBox.tsx":
/*!*************************************!*\
  !*** ./src/containers/FixedBox.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/core/Element/Div */ "./node_modules/@smart-react-components/core/Element/Div.js");
/* harmony import */ var _smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_FixedBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/FixedBox */ "./node_modules/@smart-react-components/ui/FixedBox/index.js");
/* harmony import */ var _smart_react_components_ui_FixedBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_FixedBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Li__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elements/Li */ "./src/elements/Li.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _elements_Ul__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elements/Ul */ "./src/elements/Ul.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");


















const FixedBox = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_17__["default"])({ title: 'Fixed Box' });
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_15__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h1", { id: "fixed-box" }, "Fixed Box"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Fixed Box doesn't produce any UI elements. It takes two children elements, the first of which for the toggle element and the second for the box element. The box element is displayed in different positions according to the toggle element."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "The toggle element ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", null,
                        "(the first item of ",
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "children"),
                        " prop)"),
                    " should accept ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "ref"),
                    " so it should be either Styled component, or React component with ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "forwardRef"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_10__["default"], { props: [
                        {
                            name: 'children',
                            type: '[JSX.Element, JSX.Element]',
                            isRequired: true,
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, "The first element for the toggle element, and the second for the box element."),
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            description: 'Fixed Box display status.',
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#set-state" }, "SetState"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'position',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#position" }, "Position"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, "Position of the box element by the toggle element. If the box element gets overflown in the given position, it is rendered in another available position."),
                        },
                        {
                            name: 'minWidth',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The box element ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "min-width"),
                                " value."),
                        },
                        {
                            name: 'maxWidth',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The box element ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "max-width"),
                                " value."),
                        },
                        {
                            name: 'space',
                            type: 'number',
                            defaultValue: '0',
                            description: 'Space between the toggle and the box element.',
                        },
                        {
                            name: 'triggerInteraction',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#trigger-interaction" }, "TriggerInteraction"),
                            defaultValue: 'CLICK',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Calls ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "true"),
                                " param when the toggle element is interracted with the given interaction."),
                        },
                        {
                            name: 'isDismissible',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "window"),
                                " click calls ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "setStatus"),
                                " with ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "false"),
                                " param."),
                        },
                        {
                            name: 'breakpoint',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#breakpoint" }, "Breakpoint"),
                            defaultValue: 'medium',
                            description: 'When given, displays the box inside an overlay when only the window\'s width is equal or smaller than the given breakpoint width.',
                        },
                        {
                            name: 'transitionClassName',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Transition ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "className"),
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
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "false"),
                                ", skips the show animation."),
                        },
                        {
                            name: 'hasHideAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "false"),
                                ", skips the hide animation."),
                        },
                        {
                            name: 'beforeShow',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                        {
                            name: 'elementProps',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#jsx-element-props" }, "JSXElementProps"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "Fixed Box element ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_8__["default"], { to: "/api#styled-props" }, "Styled Props"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Trigger Interaction"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Ul__WEBPACK_IMPORTED_MODULE_16__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "CLICK:"),
                        " is ocurred when the trigger element is clicked on."),
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "HOVER:"),
                        " is ocurred when the trigger element is hovered on."),
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "RIGHT_CLICK:"),
                        " is ocurred when the trigger element is right-clicked on."),
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Li__WEBPACK_IMPORTED_MODULE_14__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, "NONE:"),
                        " The trigger element is never triggered ",
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", null, "(for custom usage purposes)"),
                        ".")),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_12__["default"], { marginTop: "$length.3" },
                    "You can set to ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "CLICK | HOVER"),
                    " to trigger on both click and hover."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "You can set the trigger interaction for the Fixed Box."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Set Position"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Fixed Box provides an event for you to set position custom in case you have modified the box element afterwards. When you trigger ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "src.fixedBox.setPosition"),
                    " event for the toggle element, it sets position in the component."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_7__["default"], { code: `import Div from '@smart-react-components/core/Element/Div'
import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import FixedBox from '@smart-react-components/ui/FixedBox'
import React from 'react'

export default () => (
  <ButtonList>
    <FixedBox
      space={3}
    >
      <Button
        marginLeft="$length.2"
        marginTop="$length.2"
      >
        Fixed Box
      </Button>
      <Div
        backgroundColor="$color.dynamic.background"
        border="solid 1px {color.dynamic.gray}"
        color="$color.dynamic.font"
        paddingVertical="$length.2"
        textAlign="center"
      >
        Fixed Box
      </Div>
    </FixedBox>
    <FixedBox
      hasHideAnimation={false}
      hasShowAnimation={false}
      space={3}
    >
      <Button
        marginLeft="$length.2"
        marginTop="$length.2"
      >
        Fixed Box without Animation
      </Button>
      <Div
        backgroundColor="$color.dynamic.background"
        border="solid 1px {color.dynamic.gray}"
        color="$color.dynamic.font"
        paddingVertical="$length.2"
        textAlign="center"
      >
        Fixed Box
      </Div>
    </FixedBox>
  </ButtonList>
)`, output: (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_2___default()), null,
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_FixedBox__WEBPACK_IMPORTED_MODULE_3___default()), { space: 3 },
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: "$length.2", marginTop: "$length.2" }, "Fixed Box"),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { backgroundColor: "$color.dynamic.background", border: "solid 1px {color.dynamic.gray}", color: "$color.dynamic.font", paddingVertical: "$length.2", textAlign: "center" }, "Fixed Box")),
                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_FixedBox__WEBPACK_IMPORTED_MODULE_3___default()), { hasHideAnimation: false, hasShowAnimation: false, space: 3 },
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { marginLeft: "$length.2", marginTop: "$length.2" }, "Fixed Box without Animation"),
                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_core_Element_Div__WEBPACK_IMPORTED_MODULE_0___default()), { backgroundColor: "$color.dynamic.background", border: "solid 1px {color.dynamic.gray}", color: "$color.dynamic.font", paddingVertical: "$length.2", textAlign: "center" }, "Fixed Box")))) }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_5__["default"], { attrs: [
                        {
                            name: 'transition.fixedBoxDuration',
                            type: 'number',
                            description: 'Duration in milliseconds.',
                        },
                        {
                            name: 'zIndex.fixedBox',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "z-index"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_11__["default"], { next: {
                    label: 'Grid',
                    to: '/ui-components/grid',
                }, prev: {
                    label: 'Dropdown',
                    to: '/ui-components/dropdown',
                } })),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], { list: [
                { label: 'Fixed Box', id: 'fixed-box' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FixedBox);


/***/ })

}]);
//# sourceMappingURL=ef8fe8897a2ab105c4cd.js.map