(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Database.jsx
var Database = __webpack_require__(39);
// EXTERNAL MODULE: ./src/components/socket.js
var socket = __webpack_require__(8027);
;// CONCATENATED MODULE: ./src/pages/_app.js
// import dynamic from "next/dynamic";





function App({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        socket/* socket.on */.W.on("connect", ()=>{
            console.log("connected to socket.io server");
            socket/* socket.emit */.W.emit("SEND_ALL");
        });
        socket/* socket.on */.W.on("disconnect", ()=>{
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
            socket/* socket.off */.W.off("connect");
            socket/* socket.off */.W.off("disconnect");
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
    return /*#__PURE__*/ jsx_runtime.jsx(Database/* DatabaseProvider */.xz, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
} // const App = ({ Component, pageProps }) => {
 //   return <Component {...pageProps} />;
 // };
 // export default dynamic(() => Promise.resolve(App), {
 //   ssr: false,
 // });

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

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

/***/ 8087:
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,236], () => (__webpack_exec__(1925)));
module.exports = __webpack_exports__;

})();