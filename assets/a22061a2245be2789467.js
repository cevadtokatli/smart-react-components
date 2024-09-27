"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_PopUp_tsx"],{

/***/ "./src/containers/PopUp.tsx":
/*!**********************************!*\
  !*** ./src/containers/PopUp.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_PopUp_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/PopUp/Alert */ "./node_modules/@smart-react-components/ui/PopUp/Alert.js");
/* harmony import */ var _smart_react_components_ui_PopUp_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_PopUp_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_PopUp_Confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/PopUp/Confirm */ "./node_modules/@smart-react-components/ui/PopUp/Confirm.js");
/* harmony import */ var _smart_react_components_ui_PopUp_Confirm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_PopUp_Confirm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_PopUp_Prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/PopUp/Prompt */ "./node_modules/@smart-react-components/ui/PopUp/Prompt.js");
/* harmony import */ var _smart_react_components_ui_PopUp_Prompt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_PopUp_Prompt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Example */ "./src/components/Example.tsx");














const AlertExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Open Alert"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_PopUp_Alert__WEBPACK_IMPORTED_MODULE_1___default()), { message: "Alert Message...", setStatus: setStatus, status: status, title: "Title" })));
};
const ConfirmExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Open Confirm"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_PopUp_Confirm__WEBPACK_IMPORTED_MODULE_2___default()), { message: "Confirm Message...", setStatus: setStatus, status: status, title: "Title" })));
};
const PromptExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Open Prompt"),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement((_smart_react_components_ui_PopUp_Prompt__WEBPACK_IMPORTED_MODULE_3___default()), { defaultValue: "Value", message: "Prompt Message...", placeholder: "Placeholder...", setStatus: setStatus, status: status, title: "Title" })));
};
const PopUp = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_12__["default"])({ title: 'Pop-up' });
    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h1", { id: "pop-up" }, "Pop-up"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Pop-up uses ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/modal" }, "Modal"),
                    " to build JavaScript dialog methods."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "alert" }, "Alert"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "alert"),
                    " method."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'message',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            isRequired: true,
                            description: 'Modal content.',
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Modal display status.'
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-status" }, "SetStatus"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'title',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            description: 'Modal title.',
                        },
                        {
                            name: 'buttonLabel',
                            type: 'string',
                            defaultValue: 'i18n.ok',
                            description: 'Button label.',
                        },
                        {
                            name: 'buttonPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Button palette item key.',
                        },
                        {
                            name: 'action',
                            type: '() => void | Promise<void>',
                            description: 'Called when clicked on the save button.'
                        },
                        {
                            name: 'hasOverlayBackground',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBackground"),
                                " prop.")
                        },
                        {
                            name: 'hasOverlayBlurEffect',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBlurEffect"),
                                " prop.")
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
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_13__["default"], { code: `import Button from '@smart-react-components/ui/Button'
import Alert from '@smart-react-components/ui/PopUp/Alert'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>  
      <Button onClick={() => setStatus(true)}>Open Alert</Button>
      <Alert
        message="Alert Message..."
        setStatus={setStatus}
        status={status}
        title="Title"
      />
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(AlertExample, null) }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "confirm" }, "Confirm"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "confirm"),
                    " method."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'message',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            isRequired: true,
                            description: 'Modal content.',
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Modal display status.'
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-status" }, "SetStatus"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'title',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            description: 'Modal title.',
                        },
                        {
                            name: 'cancelButtonLabel',
                            type: 'string',
                            defaultValue: 'i18n.cancel',
                            description: 'Cancel button label.',
                        },
                        {
                            name: 'confirmButtonLabel',
                            type: 'string',
                            defaultValue: 'i18n.ok',
                            description: 'Confirm button label.',
                        },
                        {
                            name: 'cancelButtonPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Cancel button palette item key.',
                        },
                        {
                            name: 'confirmButtonPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Confirm button palette item key.',
                        },
                        {
                            name: 'action',
                            type: '(isConfirmed: boolean) => void | Promise<void>',
                            description: 'Called when clicked on the save or cancel buttons.'
                        },
                        {
                            name: 'hasOverlayBackground',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBackground"),
                                " prop.")
                        },
                        {
                            name: 'hasOverlayBlurEffect',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBlurEffect"),
                                " prop.")
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
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_13__["default"], { code: `import Button from '@smart-react-components/ui/Button'
import Confirm from '@smart-react-components/ui/PopUp/Confirm'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>  
      <Button onClick={() => setStatus(true)}>Open Confirm</Button>
      <Confirm
        message="Confirm Message..."
        setStatus={setStatus}
        status={status}
        title="Title"
      />
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(ConfirmExample, null) }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", { id: "prompt" }, "Prompt"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "prompt"),
                    " method."),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_8__["default"], { props: [
                        {
                            name: 'message',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            isRequired: true,
                            description: 'Modal content.',
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Modal display status.'
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#set-status" }, "SetStatus"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'title',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            description: 'Modal title.',
                        },
                        {
                            name: 'defaultValue',
                            type: 'string',
                            description: 'Input initial value.',
                        },
                        {
                            name: 'placeholder',
                            type: 'string',
                            description: 'Input placeholder.',
                        },
                        {
                            name: 'cancelButtonLabel',
                            type: 'string',
                            defaultValue: 'i18n.cancel',
                            description: 'Cancel button label.',
                        },
                        {
                            name: 'confirmButtonLabel',
                            type: 'string',
                            defaultValue: 'i18n.ok',
                            description: 'Confirm button label.',
                        },
                        {
                            name: 'cancelButtonPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Cancel button palette item key.',
                        },
                        {
                            name: 'confirmButtonPalette',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#palette-prop" }, "PaletteProp"),
                            defaultValue: 'primary',
                            description: 'Confirm button palette item key.',
                        },
                        {
                            name: 'action',
                            type: '(text: string, isConfirmed: boolean) => void | Promise<void>',
                            description: 'Called when clicked on the save or cancel buttons.'
                        },
                        {
                            name: 'hasOverlayBackground',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBackground"),
                                " prop.")
                        },
                        {
                            name: 'hasOverlayBlurEffect',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_4___default().createElement("code", null, "hasBlurEffect"),
                                " prop.")
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
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_6__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Example__WEBPACK_IMPORTED_MODULE_13__["default"], { code: `import Button from '@smart-react-components/ui/Button'
import Prompt from '@smart-react-components/ui/PopUp/Prompt'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>  
      <Button onClick={() => setStatus(true)}>Open Prompt</Button>
      <Prompt
        defaultValue="Value"
        message="Prompt Message..."
        placeholder="Placeholder..."
        setStatus={setStatus}
        status={status}
        title="Title"
      />
    </>
  )
}`, output: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(PromptExample, null) })),
            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_9__["default"], { next: {
                    label: 'Popover',
                    to: '/ui-components/popover',
                }, prev: {
                    label: 'Pagination',
                    to: '/ui-components/pagination',
                } })),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], { list: [
                { label: 'Pop-up', id: 'pop-up' },
                { label: 'Alert', id: 'alert' },
                { label: 'Confirm', id: 'confirm' },
                { label: 'Prompt', id: 'prompt' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopUp);


/***/ })

}]);
//# sourceMappingURL=a22061a2245be2789467.js.map