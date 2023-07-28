(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _components_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8027);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_socket__WEBPACK_IMPORTED_MODULE_4__]);
_components_socket__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import dynamic from "next/dynamic";





function App({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _components_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("connect", ()=>{
            console.log("connected to socket.io server");
            _components_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.emit */ .W.emit("SEND_ALL");
        });
        _components_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.on */ .W.on("disconnect", ()=>{
            console.log("disconnected from socket.io server");
        });
        // Wrap your event handler with _.throttle. The second argument is the wait time in milliseconds.
        // socket.on('HIL_STATE', hilStateHandler);
        // socket.on('HIL_STATE', (message)=>{
        //   // console.log(message)
        //   const data = JSON.parse(message);
        //   // console.log('New message', message);
        //   telemetryData = handleMessage(data, telemetryData);
        //   // console.log(telemetryData);
        //   // console.log(telemetryData?.HIL_STATE?.roll)
        //   globalData.setFlightStates({
        //     roll: telemetryData?.HIL_STATE?.roll,
        //     pitch: telemetryData?.HIL_STATE?.pitch,
        //     heading: telemetryData?.HIL_STATE?.yaw,
        //     airspeed: telemetryData?.HIL_STATE?.vx * telemetryData?.HIL_STATE?.vx + telemetryData?.HIL_STATE?.vy * telemetryData?.HIL_STATE?.vy + telemetryData?.HIL_STATE?.vz * telemetryData?.HIL_STATE?.vz,
        //     altitude: telemetryData?.HIL_STATE?.alt
        //   });
        //   // setFlightState({roll: telemetryData?.ATTITUDE?.roll*180/Math.PI,
        //   //                 pitch: telemetryData?.ATTITUDE?.pitch*180/Math.PI,
        //   //                 heading: telemetryData?.ATTITUDE?.yaw*180/Math.PI,
        //   //               airspeed: telemetryData?.LOCAL_POSITION_NED?.vx*telemetryData?.LOCAL_POSITION_NED?.vx +telemetryData?.LOCAL_POSITION_NED?.vy*telemetryData?.LOCAL_POSITION_NED?.vy+telemetryData?.LOCAL_POSITION_NED?.vz*telemetryData?.LOCAL_POSITION_NED?.vz,
        //   //               altitude: telemetryData?.LOCAL_POSITION_NED?.z})
        // // console.log(globalData?.flightStates?.roll)
        // });
        return ()=>{
            _components_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.off */ .W.off("connect");
            _components_socket__WEBPACK_IMPORTED_MODULE_4__/* .socket.off */ .W.off("disconnect");
        // socket.off('message');
        // cancelAnimationFrame(animationFrameId);
        };
    });
    // useEffect(()=>{
    //   socket.on('connect', ()=>{
    //     console.log('connected to socket.io server');
    //     socket.emit('SEND_ALL')
    //   });
    //   socket.on('disconnect', ()=>{
    //     console.log('disconnected from socket.io server');
    //   });
    //   socket.on('message', (message)=>{
    //     console.log('New message', message);
    //   });
    //   return ()=>{
    //     socket.off('connect');
    //     socket.off('disconnect');
    //     socket.off('message');
    //   }
    // })
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Database__WEBPACK_IMPORTED_MODULE_3__/* .DatabaseProvider */ .xz, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
} // const App = ({ Component, pageProps }) => {
 //   return <Component {...pageProps} />;
 // };
 // export default dynamic(() => Promise.resolve(App), {
 //   ssr: false,
 // });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,236], () => (__webpack_exec__(1430)));
module.exports = __webpack_exports__;

})();