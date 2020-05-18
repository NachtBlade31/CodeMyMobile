webpackHotUpdate("static\\development\\pages\\users\\[firstName].js",{

/***/ "./pages/users/[firstName].js":
/*!************************************!*\
  !*** ./pages/users/[firstName].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _component_user_SmallCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/user/SmallCard */ "./component/user/SmallCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\kshit\\OneDrive\\Desktop\\Web Development\\CodeMyMobile\\frontend\\pages\\users\\[firstName].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SingleUser = function SingleUser(_ref) {
  _s();

  var user = _ref.user,
      query = _ref.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      related = _useState[0],
      setRelated = _useState[1];

  var loadRelated = function loadRelated() {
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["listRelated"])(user.firstName, user).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadRelated();
  }, []);

  var showFriends = function showFriends(user) {
    return user.friends.map(function (f, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: i,
        href: "/users/".concat(f.firstName),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, " Say Hi to ", f.firstName, " ", f.lastName));
    });
  };

  var showRelatedPeople = function showRelatedPeople() {
    return related.map(function (user, i) {
      return __jsx("div", {
        className: "col-md-4",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, __jsx("article", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }, __jsx(_component_user_SmallCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: user,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      })));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 12
    }
  }, __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row",
    style: {
      marginTop: '-30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/api/user/photo/").concat(user.firstName),
    alt: user.firstName,
    className: "img img-fluid featured-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "display-2 pb-3 pt-3 text-center font-weight-strong",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, "Welcome back ", user.firstName, " ", user.lastName), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, "Miss Your Friends ?"), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, showFriends(user), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "container pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: "text-center pt-5 pb-3 h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "People you may know......."), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, showRelatedPeople()))))));
};

_s(SingleUser, "FWRD1Ef/w5AfQgJtp5JTMAZWSAs=");

_c = SingleUser;

SingleUser.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["singleUser"])(query.firstName).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        user: data,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleUser);

var _c;

$RefreshReg$(_c, "SingleUser");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9bZmlyc3ROYW1lXS5qcyJdLCJuYW1lcyI6WyJTaW5nbGVVc2VyIiwidXNlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJyZWxhdGVkIiwic2V0UmVsYXRlZCIsImxvYWRSZWxhdGVkIiwibGlzdFJlbGF0ZWQiLCJmaXJzdE5hbWUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNob3dGcmllbmRzIiwiZnJpZW5kcyIsIm1hcCIsImYiLCJpIiwibGFzdE5hbWUiLCJzaG93UmVsYXRlZFBlb3BsZSIsIm1hcmdpblRvcCIsIkFQSSIsImdldEluaXRpYWxQcm9wcyIsInNpbmdsZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVOQyxzREFBUSxDQUFDLEVBQUQsQ0FGRjtBQUFBLE1BRTdCQyxPQUY2QjtBQUFBLE1BRXBCQyxVQUZvQjs7QUFHcEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkMscUVBQVcsQ0FBQ04sSUFBSSxDQUFDTyxTQUFOLEVBQWlCUCxJQUFqQixDQUFYLENBQWtDUSxJQUFsQyxDQUF1QyxVQUFBQyxJQUFJLEVBQUk7QUFDM0MsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEtBQWpCO0FBQ0gsT0FGRCxNQUdLO0FBQ0ROLGtCQUFVLENBQUNLLElBQUQsQ0FBVjtBQUNIO0FBQ0osS0FQRDtBQVFILEdBVEQ7O0FBV0FJLHlEQUFTLENBQUMsWUFBTTtBQUNaUixlQUFXO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBZCxJQUFJO0FBQUEsV0FDcEJBLElBQUksQ0FBQ2UsT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQ2IsTUFBQyxnREFBRDtBQUFNLFdBQUcsRUFBRUEsQ0FBWDtBQUFjLFlBQUksbUJBQVlELENBQUMsQ0FBQ1YsU0FBZCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLGdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQTBEVSxDQUFDLENBQUNWLFNBQTVELEVBQXVFLEdBQXZFLEVBQTRFVSxDQUFDLENBQUNFLFFBQTlFLENBREosQ0FEYTtBQUFBLEtBQWpCLENBRG9CO0FBQUEsR0FBeEI7O0FBT0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFdBQU9qQixPQUFPLENBQUNhLEdBQVIsQ0FBWSxVQUFDaEIsSUFBRCxFQUFPa0IsQ0FBUDtBQUFBLGFBQ2Y7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsV0FBRyxFQUFFQSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaUVBQUQ7QUFBVyxZQUFJLEVBQUVsQixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixDQURlO0FBQUEsS0FBWixDQUFQO0FBT0gsR0FSRDs7QUFVQSxTQUFPLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNILE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFcUIsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxZQUFLQywyQ0FBTCw2QkFBMkJ0QixJQUFJLENBQUNPLFNBQWhDLENBQVI7QUFBcUQsT0FBRyxFQUFFUCxJQUFJLENBQUNPLFNBQS9EO0FBQTBFLGFBQVMsRUFBQyw4QkFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxvREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpRlAsSUFBSSxDQUFDTyxTQUF0RixFQUFpRyxHQUFqRyxFQUFzR1AsSUFBSSxDQUFDbUIsUUFBM0csQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixFQUVJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxXQUFXLENBQUNkLElBQUQsQ0FEaEIsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FGSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQUxKLENBREosQ0FOSixDQURKLEVBeUJJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFJLGFBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tvQixpQkFBaUIsRUFEdEIsQ0FISixDQXpCSixDQURKLENBREosQ0FERyxDQUFQO0FBeUNILENBNUVEOztHQUFNckIsVTs7S0FBQUEsVTs7QUE4RU5BLFVBQVUsQ0FBQ3dCLGVBQVgsR0FBNkIsaUJBQWU7QUFBQSxNQUFadEIsS0FBWSxTQUFaQSxLQUFZO0FBQ3hDLFNBQU91QixnRUFBVSxDQUFDdkIsS0FBSyxDQUFDTSxTQUFQLENBQVYsQ0FBNEJDLElBQTVCLENBQWlDLFVBQUFDLElBQUksRUFBSTtBQUM1QyxRQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0MsS0FBakI7QUFDSCxLQUZELE1BR0s7QUFDRCxhQUFPO0FBQUVWLFlBQUksRUFBRVMsSUFBUjtBQUFjUixhQUFLLEVBQUxBO0FBQWQsT0FBUDtBQUNIO0FBQ0osR0FQTSxDQUFQO0FBUUgsQ0FURDs7QUFXZUYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzXFxbZmlyc3ROYW1lXS5qcy5jNGY0ZTUyZTY2NjQ0NjRmNjQwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpbmdsZVVzZXIsIGxpc3RSZWxhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC91c2VyL1NtYWxsQ2FyZCdcclxuXHJcbmNvbnN0IFNpbmdsZVVzZXIgPSAoeyB1c2VyLCBxdWVyeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JlbGF0ZWQsIHNldFJlbGF0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBsb2FkUmVsYXRlZCA9ICgpID0+IHtcclxuICAgICAgICBsaXN0UmVsYXRlZCh1c2VyLmZpcnN0TmFtZSwgdXNlcikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZWxhdGVkKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZFJlbGF0ZWQoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHNob3dGcmllbmRzID0gdXNlciA9PlxyXG4gICAgICAgIHVzZXIuZnJpZW5kcy5tYXAoKGYsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL3VzZXJzLyR7Zi5maXJzdE5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj4gU2F5IEhpIHRvIHtmLmZpcnN0TmFtZX17XCIgXCJ9e2YubGFzdE5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSlcclxuXHJcbiAgICBjb25zdCBzaG93UmVsYXRlZFBlb3BsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVsYXRlZC5tYXAoKHVzZXIsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxDYXJkIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICctMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vYXBpL3VzZXIvcGhvdG8vJHt1c2VyLmZpcnN0TmFtZX1gfSBhbHQ9e3VzZXIuZmlyc3ROYW1lfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIGZlYXR1cmVkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0yIHBiLTMgcHQtMyB0ZXh0LWNlbnRlciBmb250LXdlaWdodC1zdHJvbmdcIj5XZWxjb21lIGJhY2sge3VzZXIuZmlyc3ROYW1lfXtcIiBcIn17dXNlci5sYXN0TmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5NaXNzIFlvdXIgRnJpZW5kcyA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RnJpZW5kcyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgcGItMyBoMlwiPlBlb3BsZSB5b3UgbWF5IGtub3cuLi4uLi4uPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVsYXRlZFBlb3BsZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcblxyXG59XHJcblxyXG5TaW5nbGVVc2VyLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIHJldHVybiBzaW5nbGVVc2VyKHF1ZXJ5LmZpcnN0TmFtZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlcjogZGF0YSwgcXVlcnkgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==