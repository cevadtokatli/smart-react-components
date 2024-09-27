"use strict";
(self["webpackChunksmart_react_components_page"] = self["webpackChunksmart_react_components_page"] || []).push([["default-src_containers_Modal_tsx"],{

/***/ "./src/containers/Modal.tsx":
/*!**********************************!*\
  !*** ./src/containers/Modal.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smart-react-components/ui/Button */ "./node_modules/@smart-react-components/ui/Button/index.js");
/* harmony import */ var _smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smart-react-components/ui/Button/ButtonList */ "./node_modules/@smart-react-components/ui/Button/ButtonList.js");
/* harmony import */ var _smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @smart-react-components/ui/Modal */ "./node_modules/@smart-react-components/ui/Modal/index.js");
/* harmony import */ var _smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @smart-react-components/ui/Modal/ModalBody */ "./node_modules/@smart-react-components/ui/Modal/ModalBody.js");
/* harmony import */ var _smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @smart-react-components/ui/Modal/ModalCloseIcon */ "./node_modules/@smart-react-components/ui/Modal/ModalCloseIcon.js");
/* harmony import */ var _smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @smart-react-components/ui/Modal/ModalFooter */ "./node_modules/@smart-react-components/ui/Modal/ModalFooter.js");
/* harmony import */ var _smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @smart-react-components/ui/Modal/ModalHeader */ "./node_modules/@smart-react-components/ui/Modal/ModalHeader.js");
/* harmony import */ var _smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @smart-react-components/ui/Modal/ModalTitle */ "./node_modules/@smart-react-components/ui/Modal/ModalTitle.js");
/* harmony import */ var _smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AttributesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AttributesTable */ "./src/components/AttributesTable.tsx");
/* harmony import */ var _components_ComponentType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ComponentType */ "./src/components/ComponentType.tsx");
/* harmony import */ var _components_LabelLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LabelLink */ "./src/components/LabelLink.tsx");
/* harmony import */ var _components_MultiExample__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MultiExample */ "./src/components/MultiExample.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _components_PropsTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PropsTable */ "./src/components/PropsTable.tsx");
/* harmony import */ var _components_SuggestedPages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SuggestedPages */ "./src/components/SuggestedPages.tsx");
/* harmony import */ var _elements_Blockquote__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elements/Blockquote */ "./src/elements/Blockquote.tsx");
/* harmony import */ var _elements_Content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../elements/Content */ "./src/elements/Content.tsx");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../elements/Page */ "./src/elements/Page.tsx");
/* harmony import */ var _hooks_usePage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../hooks/usePage */ "./src/hooks/usePage.tsx");





















const StandardModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Standard Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Standard Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const ScrollModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Scroll Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Scroll Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Aliquam auctor bibendum nisi quis mollis. Proin eget finibus quam. Aliquam vulputate malesuada erat ut cursus. Integer vitae dui at purus mattis fermentum. Morbi id sapien dictum, feugiat felis at, scelerisque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed venenatis sollicitudin libero vitae accumsan. Duis pretium rutrum vulputate. Donec faucibus suscipit dolor vel consectetur. Suspendisse blandit non leo id ullamcorper."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Fusce ornare nec libero eget scelerisque. Nulla turpis enim, vehicula porttitor arcu non, interdum pretium nisl. Maecenas a ante est. Donec lobortis magna quam. Quisque eu nibh condimentum, molestie diam quis, fringilla sapien. Curabitur id risus magna. Suspendisse potenti. Pellentesque sit amet erat et velit pulvinar tincidunt."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Quisque commodo ante at leo porta, tincidunt semper mauris vehicula. Maecenas suscipit ex at placerat efficitur. Ut at elementum purus. Proin at enim metus. Quisque urna nunc, molestie id libero egestas, rutrum gravida elit. Proin vitae felis enim. Quisque sed fermentum metus. Nullam vel odio dictum, dignissim ligula in, interdum turpis. Maecenas eleifend bibendum purus, non finibus est cursus pharetra. Integer eu felis in nunc varius posuere ac id mi."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Aenean id est id nisl ultricies sollicitudin et ac felis. Suspendisse tempus tellus neque, at tempor risus luctus eget. Nullam sapien mauris, pretium pulvinar orci vitae, luctus vehicula dolor. Suspendisse varius, ante non congue elementum, nulla purus consectetur nibh, eget condimentum eros dui efficitur turpis. Cras lectus nisl, fermentum tincidunt malesuada at, mollis non mi. Maecenas commodo nunc ac ipsum condimentum, id aliquam felis posuere. Nam quis eros eros. Donec lobortis, nulla non faucibus interdum, odio ipsum semper nulla, vitae dapibus leo purus in mauris. Proin consequat nisl justo, in viverra libero ultricies sit amet."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Ut sit amet arcu orci. Aliquam vulputate lectus neque. Proin luctus congue sapien, quis dignissim nisl maximus eget. Aliquam laoreet feugiat neque at accumsan. Ut quis odio tincidunt, volutpat mi aliquet, efficitur odio. Vestibulum dignissim sapien orci, eget molestie purus accumsan mollis. Maecenas non viverra turpis, eget pellentesque odio. Phasellus accumsan vehicula elementum. Praesent dolor nisl, cursus sed vestibulum et, efficitur sit amet sem. Cras pulvinar leo quis elit semper, nec ullamcorper massa vestibulum. Curabitur ac turpis leo. Fusce et fermentum lorem, id tincidunt magna."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Nam aliquam ipsum libero, ut tristique leo congue sed. Sed tempor augue sit amet tortor consectetur, vitae pretium libero tincidunt. Vivamus suscipit nec velit posuere bibendum. Donec congue magna quis ante bibendum, nec placerat dui accumsan. Cras tincidunt consectetur turpis nec facilisis. Aenean euismod elementum augue, nec vulputate felis vehicula nec. Sed erat nunc, maximus et sem vel, dignissim tempor nisl."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Nullam pulvinar eleifend magna eu varius. Sed ut dignissim nisl. Curabitur sed pulvinar dolor. Fusce in lorem blandit, pharetra nibh nec, placerat neque. Nulla ut iaculis orci. Sed tincidunt ex nulla. Nulla arcu dolor, posuere non tortor in, volutpat iaculis nulla. Pellentesque dui ligula, pellentesque ac consectetur at, molestie vitae dolor. Aliquam erat volutpat. Suspendisse in sem enim. Duis ipsum sem, faucibus vel libero vitae, vulputate ultricies diam. Praesent nec pulvinar nisi. Cras efficitur ligula sit amet justo laoreet, ut laoreet leo placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget vestibulum felis. Vivamus eu lorem at justo tempor aliquet."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Proin accumsan sagittis ante vitae vehicula. Nulla vel nibh non nunc convallis aliquet porttitor ut ex. Duis venenatis iaculis convallis. Ut mollis laoreet eros, in convallis nibh mollis ut. Integer auctor rutrum ipsum, ac pretium leo malesuada in. Duis feugiat justo a consequat tristique. Aenean tristique, nulla sit amet tempus rhoncus, arcu dolor euismod dolor, vel euismod dui leo molestie leo. Donec non dolor dolor. Vivamus massa dui, mattis ac tempor et, cursus et diam.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const SmallModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Small Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { size: "small", setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Small Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const LargeModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Large Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { size: "large", setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Large Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const BlockModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Block Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { isBlock: true, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Block Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const StretchedModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Stretched Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { isStretched: true, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Stretched Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const FullScreenModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Full Screen Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { isFullScreen: true, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Full Screen Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const CenteredModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Centered Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { isCentered: true, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Centered Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const NonOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Non Overlay Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { hasOverlayBackground: false, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Non Overlay Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const BlurOverlayExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Blur Overlay Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { hasOverlayBlurEffect: true, hasOverlayBackground: false, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Blur Overlay Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const NonDismissibleModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Non Dismissible Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { isDismissible: false, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Non Dismissible Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_20__.createGlobalStyle) `
  .custom-modal-transition-show {
    opacity: 0;
  
    > * {
      transform: scale(.75);
    }
  }

  .custom-modal-transition-show-active {
    opacity: 1;
    transition: 300ms ease-in-out;

    > * {
      transform: scale(1);
      transition: 300ms ease-in-out;
    }
  }

  .custom-modal-transition-hide {
    opacity: 1;
  
    > * {
      transform: scale(1);
    }
  }

  .custom-modal-transition-hide-active {
    opacity: 0;
    transition: 300ms ease-in-out;

    > * {
      transform: scale(.75);
      transition: 300ms ease-in-out;
    }
  }
`;
const CustomTransitionModalExample = () => {
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_8___default().useState(false);
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement(GlobalStyle, null),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(true) }, "Custom Transition Modal"),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal__WEBPACK_IMPORTED_MODULE_2___default()), { transitionClassName: "custom-modal-transition", transitionDuration: 300, setStatus: setStatus, status: status },
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalHeader__WEBPACK_IMPORTED_MODULE_6___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_7___default()), null, "Custom Transition Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalCloseIcon__WEBPACK_IMPORTED_MODULE_4___default()), { onClick: () => setStatus(false) })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalBody__WEBPACK_IMPORTED_MODULE_3___default()), null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.")),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Modal_ModalFooter__WEBPACK_IMPORTED_MODULE_5___default()), { hasBorder: false },
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button_ButtonList__WEBPACK_IMPORTED_MODULE_1___default()), null,
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { palette: "secondary", onClick: () => setStatus(false) }, "Close"),
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement((_smart_react_components_ui_Button__WEBPACK_IMPORTED_MODULE_0___default()), { onClick: () => setStatus(false) }, "OK"))))));
};
const Modal = () => {
    (0,_hooks_usePage__WEBPACK_IMPORTED_MODULE_19__["default"])({ title: 'Modal' });
    return (react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_18__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_elements_Content__WEBPACK_IMPORTED_MODULE_17__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h1", { id: "modal" }, "Modal"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Modal is the core component. It renders ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/transition#css-transition" }, "CSS Transition"),
                    " and ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/overlay" }, "Overlay"),
                    " above ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "children"),
                    "."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_14__["default"], { props: [
                        {
                            name: 'children',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#content-element" }, "ContentElement"),
                                " | ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#content-element" }, "ContentElement"),
                                "[]"),
                            isRequired: true,
                            description: 'Modal content.'
                        },
                        {
                            name: 'status',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: 'Modal display status.'
                        },
                        {
                            name: 'setStatus',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#set-status" }, "SetStatus"),
                                "<boolean>"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "The method that sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "status"),
                                "."),
                        },
                        {
                            name: 'size',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#size" }, "SizeProp"),
                            defaultValue: react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "medium"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Modal ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "width"),
                                " value, has responsive support.")
                        },
                        {
                            name: 'shape',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#shape" }, "ShapeProp"),
                            defaultValue: 'rectangle',
                            description: 'Modal shape',
                        },
                        {
                            name: 'isCentered',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: 'Centers the modal on the screen.',
                        },
                        {
                            name: 'isBlock',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "width"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "100%"),
                                "."),
                        },
                        {
                            name: 'isStretched',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "height"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "100%"),
                                "."),
                        },
                        {
                            name: 'isFullScreen',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Sets ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "width"),
                                " and ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "height"),
                                " to ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "100%"),
                                " and removed ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "margin"),
                                "."),
                        },
                        {
                            name: 'hasOverlayBackground',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "hasBackground"),
                                " prop.")
                        },
                        {
                            name: 'hasOverlayBlurEffect',
                            type: 'boolean',
                            defaultValue: 'false',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "hasBlurEffect"),
                                " prop.")
                        },
                        {
                            name: 'isDismissible',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/overlay#overlay" }, "Overlay"),
                                " closes the modal ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("i", null,
                                    "(calls ",
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "setStatus"),
                                    " with ",
                                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "false"),
                                    " param)"),
                                " when clicked on.")
                        },
                        {
                            name: 'transitionClassName',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Transition ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "className"),
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
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "false"),
                                ", skips the show animation."),
                        },
                        {
                            name: 'hasHideAnimation',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "When ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "false"),
                                ", skips the hide animation."),
                        },
                        {
                            name: 'beforeShow',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the show transition is started; right after the component is mounted and element is rendered in the DOM.',
                        },
                        {
                            name: 'beforeHide',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-before-callback" }, "TransitionBeforeCallback"),
                            description: 'Called before the hide transition is started.',
                        },
                        {
                            name: 'afterShow',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the show transition is completed.',
                        },
                        {
                            name: 'afterHide',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#transition-after-callback" }, "TransitionAfterCallback"),
                            description: 'Called after the hide transition is completed; the component is unmounted and element is removed from the DOM.',
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_elements_Blockquote__WEBPACK_IMPORTED_MODULE_16__["default"], null,
                    "Modal provides ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/element-props#intrinsic-styled-size-props" }, "IntrinsicStyledSizeProps"),
                    " for the modal element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "modal-header" }, "Modal Header"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Imitiates ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "header"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_14__["default"], { props: [
                        {
                            name: 'hasBorder',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Adds ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-bottom"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "modal-title" }, "Modal Title"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "h3"),
                    " title element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "modal-close-icon" }, "Modal Close Icon"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Imitates close icon ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "svg"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "modal-body" }, "Modal Body"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Imitates scrollable ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "section"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "modal-footer" }, "Modal Footer"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_ComponentType__WEBPACK_IMPORTED_MODULE_10__["default"], { isStyled: true }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", null,
                    "Imitates ",
                    react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "footer"),
                    " element."),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h3", null, "Props"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_PropsTable__WEBPACK_IMPORTED_MODULE_14__["default"], { props: [
                        {
                            name: 'hasBorder',
                            type: 'boolean',
                            defaultValue: 'true',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Adds ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-top"),
                                "."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "example" }, "Example"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Standard Modal</Button>
      <Modal setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Standard Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(StandardModalExample, null),
                        title: 'Standard Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Scroll Modal</Button>
      <Modal setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Scroll Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
          <p>Aliquam auctor bibendum nisi quis mollis. Proin eget finibus quam. Aliquam vulputate malesuada erat ut cursus. Integer vitae dui at purus mattis fermentum. Morbi id sapien dictum, feugiat felis at, scelerisque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed venenatis sollicitudin libero vitae accumsan. Duis pretium rutrum vulputate. Donec faucibus suscipit dolor vel consectetur. Suspendisse blandit non leo id ullamcorper.</p>
          <p>Fusce ornare nec libero eget scelerisque. Nulla turpis enim, vehicula porttitor arcu non, interdum pretium nisl. Maecenas a ante est. Donec lobortis magna quam. Quisque eu nibh condimentum, molestie diam quis, fringilla sapien. Curabitur id risus magna. Suspendisse potenti. Pellentesque sit amet erat et velit pulvinar tincidunt.</p>
          <p>Quisque commodo ante at leo porta, tincidunt semper mauris vehicula. Maecenas suscipit ex at placerat efficitur. Ut at elementum purus. Proin at enim metus. Quisque urna nunc, molestie id libero egestas, rutrum gravida elit. Proin vitae felis enim. Quisque sed fermentum metus. Nullam vel odio dictum, dignissim ligula in, interdum turpis. Maecenas eleifend bibendum purus, non finibus est cursus pharetra. Integer eu felis in nunc varius posuere ac id mi.</p>
          <p>Aenean id est id nisl ultricies sollicitudin et ac felis. Suspendisse tempus tellus neque, at tempor risus luctus eget. Nullam sapien mauris, pretium pulvinar orci vitae, luctus vehicula dolor. Suspendisse varius, ante non congue elementum, nulla purus consectetur nibh, eget condimentum eros dui efficitur turpis. Cras lectus nisl, fermentum tincidunt malesuada at, mollis non mi. Maecenas commodo nunc ac ipsum condimentum, id aliquam felis posuere. Nam quis eros eros. Donec lobortis, nulla non faucibus interdum, odio ipsum semper nulla, vitae dapibus leo purus in mauris. Proin consequat nisl justo, in viverra libero ultricies sit amet.</p>
          <p>Ut sit amet arcu orci. Aliquam vulputate lectus neque. Proin luctus congue sapien, quis dignissim nisl maximus eget. Aliquam laoreet feugiat neque at accumsan. Ut quis odio tincidunt, volutpat mi aliquet, efficitur odio. Vestibulum dignissim sapien orci, eget molestie purus accumsan mollis. Maecenas non viverra turpis, eget pellentesque odio. Phasellus accumsan vehicula elementum. Praesent dolor nisl, cursus sed vestibulum et, efficitur sit amet sem. Cras pulvinar leo quis elit semper, nec ullamcorper massa vestibulum. Curabitur ac turpis leo. Fusce et fermentum lorem, id tincidunt magna.</p>
          <p>Nam aliquam ipsum libero, ut tristique leo congue sed. Sed tempor augue sit amet tortor consectetur, vitae pretium libero tincidunt. Vivamus suscipit nec velit posuere bibendum. Donec congue magna quis ante bibendum, nec placerat dui accumsan. Cras tincidunt consectetur turpis nec facilisis. Aenean euismod elementum augue, nec vulputate felis vehicula nec. Sed erat nunc, maximus et sem vel, dignissim tempor nisl.</p>
          <p>Nullam pulvinar eleifend magna eu varius. Sed ut dignissim nisl. Curabitur sed pulvinar dolor. Fusce in lorem blandit, pharetra nibh nec, placerat neque. Nulla ut iaculis orci. Sed tincidunt ex nulla. Nulla arcu dolor, posuere non tortor in, volutpat iaculis nulla. Pellentesque dui ligula, pellentesque ac consectetur at, molestie vitae dolor. Aliquam erat volutpat. Suspendisse in sem enim. Duis ipsum sem, faucibus vel libero vitae, vulputate ultricies diam. Praesent nec pulvinar nisi. Cras efficitur ligula sit amet justo laoreet, ut laoreet leo placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut eget vestibulum felis. Vivamus eu lorem at justo tempor aliquet.</p>
          <p>Proin accumsan sagittis ante vitae vehicula. Nulla vel nibh non nunc convallis aliquet porttitor ut ex. Duis venenatis iaculis convallis. Ut mollis laoreet eros, in convallis nibh mollis ut. Integer auctor rutrum ipsum, ac pretium leo malesuada in. Duis feugiat justo a consequat tristique. Aenean tristique, nulla sit amet tempus rhoncus, arcu dolor euismod dolor, vel euismod dui leo molestie leo. Donec non dolor dolor. Vivamus massa dui, mattis ac tempor et, cursus et diam.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(ScrollModalExample, null),
                        title: 'Scroll Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Small Modal</Button>
      <Modal size="small" setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Small Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(SmallModalExample, null),
                        title: 'Small Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Large Modal</Button>
      <Modal size="large" setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Large Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  ) 
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(LargeModalExample, null),
                        title: 'Large Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Block Modal</Button>
      <Modal isBlock setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Block Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(BlockModalExample, null),
                        title: 'Block Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Stretched Modal</Button>
      <Modal isStretched setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Stretched Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(StretchedModalExample, null),
                        title: 'Stretched Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Full Screen Modal</Button>
      <Modal isFullScreen setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Full Screen Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(FullScreenModalExample, null),
                        title: 'Full Screen Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Centered Modal</Button>
      <Modal isCentered setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Centered Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(CenteredModalExample, null),
                        title: 'Centered Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Non Overlay Modal</Button>
      <Modal hasOverlayBackground={false} setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Non Overlay Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(NonOverlayExample, null),
                        title: 'Non Overlay Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Blur Overlay Modal</Button>
      <Modal hasOverlayBlurEffect hasOverlayBackground={false} setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Blur Overlay Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(BlurOverlayExample, null),
                        title: 'Blur Overlay Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_MultiExample__WEBPACK_IMPORTED_MODULE_12__["default"], { first: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <Button onClick={() => setStatus(true)}>Non Dismissible Modal</Button>
      <Modal isDismissible={false} setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Non Dismissible Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(NonDismissibleModalExample, null),
                        title: 'Non Dismissible Modal',
                    }, second: {
                        code: `import Button from '@smart-react-components/ui/Button'
import ButtonList from '@smart-react-components/ui/Button/ButtonList'
import Modal from '@smart-react-components/ui/Modal'
import ModalBody from '@smart-react-components/ui/Modal/ModalBody'
import ModalCloseIcon from '@smart-react-components/ui/Modal/ModalCloseIcon'
import ModalFooter from '@smart-react-components/ui/Modal/ModalFooter'
import ModalHeader from '@smart-react-components/ui/Modal/ModalHeader'
import ModalTitle from '@smart-react-components/ui/Modal/ModalTitle'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  .custom-modal-transition-show {
    opacity: 0;
  
    > * {
      transform: scale(.75);
    }
  }

  .custom-modal-transition-show-active {
    opacity: 1;
    transition: 300ms ease-in-out;

    > * {
      transform: scale(1);
      transition: 300ms ease-in-out;
    }
  }

  .custom-modal-transition-hide {
    opacity: 1;
  
    > * {
      transform: scale(1);
    }
  }

  .custom-modal-transition-hide-active {
    opacity: 0;
    transition: 300ms ease-in-out;

    > * {
      transform: scale(.75);
      transition: 300ms ease-in-out;
    }
  }
\`

export default () => {
  const [status, setStatus] = React.useState(false)

  return (
    <>
      <GlobalStyle />
      <Button onClick={() => setStatus(true)}>Custom Transition Modal</Button>
      <Modal transitionClassName="custom-modal-transition" transitionDuration={300} setStatus={setStatus} status={status}>
        <ModalHeader hasBorder={false}>
          <ModalTitle>Custom Transition Modal</ModalTitle>
          <ModalCloseIcon onClick={() => setStatus(false)} />
        </ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida erat ipsum, sit amet convallis leo condimentum eu. Curabitur dignissim turpis massa, et porttitor enim ultrices fermentum. Aliquam dapibus tristique eros, at vulputate dolor facilisis nec. Sed sodales leo lectus, vel volutpat lacus congue a. Phasellus non pulvinar magna. Duis efficitur egestas tristique. Etiam a nisi rhoncus dolor scelerisque mollis. Sed et justo tempor, euismod tellus eu, hendrerit nisl. Suspendisse eu lectus in quam malesuada fermentum. Duis vulputate sed ligula at porttitor. Sed nunc quam, posuere eu est non, placerat ornare leo.</p>
        </ModalBody>
        <ModalFooter hasBorder={false}>
          <ButtonList>
            <Button palette="secondary" onClick={() => setStatus(false)}>Close</Button>
            <Button onClick={() => setStatus(false)}>OK</Button>
          </ButtonList>
        </ModalFooter>
      </Modal>
    </>
  )
}`,
                        output: react__WEBPACK_IMPORTED_MODULE_8___default().createElement(CustomTransitionModalExample, null),
                        title: 'Custom Transition Modal',
                    } }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "theme-attributes" }, "Theme Attributes"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_9__["default"], { attrs: [
                        {
                            name: 'cursor.modalHeaderIcon',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                "Icon in ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/modal#modal-header" }, "Modal Header"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "cursor"),
                                " value."),
                        },
                        {
                            name: 'fontFamily.modalTitle',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/modal#modal-title" }, "Modal Title"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-family"),
                                " value.")
                        },
                        {
                            name: 'radius.modal',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#shape" }, "Shape"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "border-radius"),
                                " value. Used by ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "shape"),
                                " prop."),
                        },
                        {
                            name: 'transition.modalDuration',
                            type: 'number',
                            description: 'Duration in milliseconds.',
                        },
                        {
                            name: 'zIndex.modal',
                            type: 'number',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "z-index"),
                                " value."),
                        },
                    ] }),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", { id: "size-attributes" }, "Size Attributes"),
                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_AttributesTable__WEBPACK_IMPORTED_MODULE_9__["default"], { attrs: [
                        {
                            name: 'modal.padding',
                            type: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/api#string" }, "Coordinator"),
                                "<string>"),
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "padding"),
                                " value."),
                        },
                        {
                            name: 'modal.titleFontSize',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_LabelLink__WEBPACK_IMPORTED_MODULE_11__["default"], { to: "/ui-components/modal#modal-title" }, "Modal Title"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "font-size"),
                                " value."),
                        },
                        {
                            name: 'modal.width',
                            type: 'string',
                            description: react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null,
                                react__WEBPACK_IMPORTED_MODULE_8___default().createElement("code", null, "width"),
                                " value."),
                        },
                    ] })),
            react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_SuggestedPages__WEBPACK_IMPORTED_MODULE_15__["default"], { next: {
                    label: 'Overlay',
                    to: '/ui-components/overlay',
                }, prev: {
                    label: 'Loading',
                    to: '/ui-components/loading',
                } })),
        react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_13__["default"], { list: [
                { label: 'Modal', id: 'modal' },
                { label: 'Modal Header', id: 'modal-header' },
                { label: 'Modal Title', id: 'modal-title' },
                { label: 'Modal Close Icon', id: 'modal-close-icon' },
                { label: 'Modal Body', id: 'modal-body' },
                { label: 'Modal Footer', id: 'modal-footer' },
                { label: 'Example', id: 'example' },
                { label: 'Theme Attributes', id: 'theme-attributes' },
                { label: 'Size Attributes', id: 'size-attributes' },
            ] })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

}]);
//# sourceMappingURL=0d63e134dae29abe0fea.js.map