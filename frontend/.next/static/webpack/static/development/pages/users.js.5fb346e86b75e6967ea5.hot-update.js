webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: createUser, listUserWithPagination, singleUser, listRelated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listUserWithPagination", function() { return listUserWithPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleUser", function() { return singleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var createUser = function createUser(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/addNewUser"), {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: user
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listUserWithPagination = function listUserWithPagination(skip, limit) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/allUsers"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleUser = function singleUser(firstName) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/").concat(firstName), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listRelated = function listRelated(user) {
  console.log("client", user);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/api/user/fof/").concat(user.firstName), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3VzZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsInVzZXIiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsaXN0VXNlcldpdGhQYWdpbmF0aW9uIiwic2tpcCIsImxpbWl0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaW5nbGVVc2VyIiwiZmlyc3ROYW1lIiwibGlzdFJlbGF0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUNoQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSiwyQkFBK0I7QUFDdkNDLFVBQU0sRUFBRSxNQUQrQjtBQUV2Q0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRTtBQURILEtBRjhCO0FBS3ZDQyxRQUFJLEVBQUVOO0FBTGlDLEdBQS9CLENBQUwsQ0FPRk8sSUFQRSxDQU9HLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FURSxXQVVJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FWUCxDQUFQO0FBV0gsQ0FaTTtBQWNBLElBQU1HLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ25ELE1BQU1DLElBQUksR0FBRztBQUNURCxTQUFLLEVBQUxBLEtBRFM7QUFDRkQsUUFBSSxFQUFKQTtBQURFLEdBQWI7QUFHQSxTQUFPYix1REFBSyxXQUFJQywyQ0FBSix5QkFBNkI7QUFDckNDLFVBQU0sRUFBRSxNQUQ2QjtBQUVyQ0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRjRCO0FBTXJDQyxRQUFJLEVBQUVXLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmO0FBTitCLEdBQTdCLENBQUwsQ0FRRlQsSUFSRSxDQVFHLFVBQUFDLFFBQVEsRUFBSTtBQUNkLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FWRSxXQVdJLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsR0FYUCxDQUFQO0FBWUgsQ0FoQk07QUFrQkEsSUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsU0FBUyxFQUFJO0FBQ25DLFNBQU9uQix1REFBSyxXQUFJQywyQ0FBSix1QkFBb0JrQixTQUFwQixHQUFpQztBQUN6Q2pCLFVBQU0sRUFBRTtBQURpQyxHQUFqQyxDQUFMLENBR0ZJLElBSEUsQ0FHRyxVQUFBQyxRQUFRLEVBQUk7QUFDZCxXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILEdBTEUsV0FNSSxVQUFBQyxHQUFHO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEdBTlAsQ0FBUDtBQU9ILENBUk07QUFVQSxJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDckIsSUFBRCxFQUFVO0FBQ2pDVyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWixJQUF0QjtBQUNBLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLDJCQUF3QkYsSUFBSSxDQUFDb0IsU0FBN0IsR0FBMEM7QUFDbERqQixVQUFNLEVBQUUsTUFEMEM7QUFFbERDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUZ5QztBQU1sREMsUUFBSSxFQUFFVyxJQUFJLENBQUNDLFNBQUw7QUFONEMsR0FBMUMsQ0FBTCxDQVFGWCxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQVhQLENBQVA7QUFZSCxDQWRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx1c2Vycy5qcy41ZmIzNDZlODZiNzVlNjk2N2VhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vYXBpL3VzZXIvYWRkTmV3VXNlcmAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiB1c2VyXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0VXNlcldpdGhQYWdpbmF0aW9uID0gKHNraXAsIGxpbWl0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGxpbWl0LCBza2lwXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9hcGkvdXNlci9hbGxVc2Vyc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlVXNlciA9IGZpcnN0TmFtZSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9hcGkvdXNlci8ke2ZpcnN0TmFtZX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkID0gKHVzZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpZW50XCIsIHVzZXIpXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9hcGkvdXNlci9mb2YvJHt1c2VyLmZpcnN0TmFtZX1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==