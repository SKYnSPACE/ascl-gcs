"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xz": () => (/* binding */ DatabaseProvider)
/* harmony export */ });
/* unused harmony export DatabaseConsumer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);




const Database = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const DatabaseProvider = ({ children  })=>{
    const [flightStates, setFlightStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        roll: 0.0,
        pitch: 0.0,
        heading: 0.0,
        rollRate: 0.0,
        pitchRate: 0.0,
        yawRate: 0.0,
        airspeed: 0.0,
        attitude: 0.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        xDot: 0.0,
        yDot: 0.0,
        zDot: 0.0
    });
    const [flightPath, setFlightPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const data = {
        flightStates,
        flightPath
    };
    const methods = {
        setFlightStates,
        setFlightPath
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Database.Provider, {
        value: {
            ...data,
            ...methods
        },
        children: children
    });
};
const DatabaseConsumer = Database.Consumer;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);


/***/ }),

/***/ 8027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8087);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : '143.248.99.244:5796';
// const URL = process.env.NODE_ENV === 'production' ? undefined : process.env.COMM_SERVER;
const URL = "http://192.168.50.173:5796";
// console.log(process.env.COMM_SERVER)
const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(URL); // export const socket = io(process.env.COMM_SERVER);
 // export const socket = io('http://192.168.50.173:5796');


/***/ })

};
;