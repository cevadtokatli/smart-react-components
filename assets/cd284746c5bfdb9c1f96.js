"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Contact_tsx"],{

/***/ "./src/containers/Contact.tsx":
/*!************************************!*\
  !*** ./src/containers/Contact.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Alert */ "./node_modules/@smart-react-components/ui/Alert/index.js");
/* harmony import */ var _smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Input */ "./node_modules/@smart-react-components/ui/Input/index.js");
/* harmony import */ var _smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Loading */ "./node_modules/@smart-react-components/ui/Loading/index.js");
/* harmony import */ var _smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Textarea */ "./node_modules/@smart-react-components/ui/Textarea/index.js");
/* harmony import */ var _smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _constants_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/status */ "./src/constants/status.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");
/* harmony import */ var _redux_contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/contact */ "./src/redux/contact.tsx");














const Contact = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_12__["default"])({ title: 'Contact' });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(({ contact }) => contact);
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_5___default().useState('');
    const [subject, setSubject] = react__WEBPACK_IMPORTED_MODULE_5___default().useState('');
    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_5___default().useState('');
    react__WEBPACK_IMPORTED_MODULE_5___default().useEffect(() => {
        return () => {
            dispatch((0,_redux_contact__WEBPACK_IMPORTED_MODULE_13__.reset)());
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", { id: "contact" }, "Contact"),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null,
                    "If you have any question about SRC, give me a feedback or ",
                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_7__["default"], { to: "https://github.com/cevadtokatli/smart-react-components/issues/new" }, "create an issue"),
                    " on GitHub."),
                status === _constants_status__WEBPACK_IMPORTED_MODULE_9__.Status.SUCCESS && react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { marginBottom: "$length.3", palette: "success" }, "Your message has successfully been sent, thank you for the feedback!"),
                status === _constants_status__WEBPACK_IMPORTED_MODULE_9__.Status.ERROR && react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Alert__WEBPACK_IMPORTED_MODULE_0___default()), { marginBottom: "$length.3", palette: "danger" }, error),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Email", marginBottom: "$length.3", placeholder: "Email...", value: email, setValue: setEmail }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Input__WEBPACK_IMPORTED_MODULE_2___default()), { label: "Subject", marginBottom: "$length.3", placeholder: "Subject...", value: subject, setValue: setSubject }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Textarea__WEBPACK_IMPORTED_MODULE_4___default()), { label: "Message", marginBottom: "$length.3", placeholder: "Your message...", value: message, setValue: setMessage }),
                react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_1___default()), { isBlock: true, isLoading: status === _constants_status__WEBPACK_IMPORTED_MODULE_9__.Status.LOADING, loading: react__WEBPACK_IMPORTED_MODULE_5___default().createElement((_smart_react_components_ui_Loading__WEBPACK_IMPORTED_MODULE_3___default()), { color: "$color.white" }), marginBottom: "$length.3", onClick: () => status !== _constants_status__WEBPACK_IMPORTED_MODULE_9__.Status.LOADING && dispatch((0,_redux_contact__WEBPACK_IMPORTED_MODULE_13__.submit)({ email, subject, message })) }, "Submit")),
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_8__["default"], { next: {
                    label: 'API',
                    to: '/api',
                }, prev: {
                    label: 'Server Side Rendering',
                    to: '/server-side-rendering',
                } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ })

}]);
//# sourceMappingURL=cd284746c5bfdb9c1f96.js.map