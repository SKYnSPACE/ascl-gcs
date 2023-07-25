"use strict";
(() => {
var exports = {};
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 4672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Import the Next.js helper function for serverless functions

// Define the serverless function
async function handler(req, res) {
    const { z , x , y  } = req.query;
    // Send a request to the other server
    // const response = await fetch(`http://143.248.72.184:8080/tile/${z}/${x}/${y}.png`);
    const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://143.248.72.184:3722/tile/sat/${z}/${x}/${y}.png`);
    // Check if the request was successful
    if (!response.ok) {
        // Forward the status code and status text from the response
        res.status(response.status).send(response.statusText);
        return;
    }
    // console.log(response)
    const buffer = await response.buffer();
    // Set the appropriate Content-Type header value
    res.setHeader("Content-Type", "image/png");
    // Send the image data in the response
    res.send(buffer);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4672));
module.exports = __webpack_exports__;

})();