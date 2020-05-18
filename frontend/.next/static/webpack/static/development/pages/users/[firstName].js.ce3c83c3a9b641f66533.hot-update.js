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
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_3__["listRelated"])(user).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadRelated();
    setRelated([]);
  }, []);

  var showFriends = function showFriends(user) {
    return user.friends.map(function (f, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: i,
        href: "/users/".concat(f.firstName),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
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
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx("article", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }, __jsx(_component_user_SmallCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        user: user,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      })));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }
  }, __jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/api/user/photo/").concat(user.firstName),
    alt: user.firstName,
    className: "img img-fluid featured-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "display-2 pb-3 pt-3 text-center font-weight-strong",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "Welcome back ", user.firstName, " ", user.lastName), __jsx("hr", {
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
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("h2", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "Miss Your Friends ?"), __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, showFriends(user), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "container pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }), __jsx("h4", {
    className: "text-center pt-5 pb-3 h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, "People you may know......."), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9bZmlyc3ROYW1lXS5qcyJdLCJuYW1lcyI6WyJTaW5nbGVVc2VyIiwidXNlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJyZWxhdGVkIiwic2V0UmVsYXRlZCIsImxvYWRSZWxhdGVkIiwibGlzdFJlbGF0ZWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNob3dGcmllbmRzIiwiZnJpZW5kcyIsIm1hcCIsImYiLCJpIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzaG93UmVsYXRlZFBlb3BsZSIsIm1hcmdpblRvcCIsIkFQSSIsImdldEluaXRpYWxQcm9wcyIsInNpbmdsZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVOQyxzREFBUSxDQUFDLEVBQUQsQ0FGRjtBQUFBLE1BRTdCQyxPQUY2QjtBQUFBLE1BRXBCQyxVQUZvQjs7QUFHcEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkMscUVBQVcsQ0FBQ04sSUFBRCxDQUFYLENBQWtCTyxJQUFsQixDQUF1QixVQUFBQyxJQUFJLEVBQUk7QUFDM0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEtBQWpCO0FBQ0gsT0FGRCxNQUdLO0FBQ0RMLGtCQUFVLENBQUNJLElBQUQsQ0FBVjtBQUNIO0FBQ0osS0FQRDtBQVFILEdBVEQ7O0FBV0FJLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxlQUFXO0FBQ1hELGNBQVUsQ0FBQyxFQUFELENBQVY7QUFD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RUFBTEE7QUFBZCxPQUFQO0FBQ0g7QUFDSixHQVBNLENBQVA7QUFRSCxDQVREOztBQVdlRix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXNlcnNcXFtmaXJzdE5hbWVdLmpzLmNlM2M4M2MzYTliNjQxZjY2NTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2luZ2xlVXNlciwgbGlzdFJlbGF0ZWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCBTbWFsbENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L3VzZXIvU21hbGxDYXJkJ1xyXG5cclxuY29uc3QgU2luZ2xlVXNlciA9ICh7IHVzZXIsIHF1ZXJ5IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbcmVsYXRlZCwgc2V0UmVsYXRlZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGxvYWRSZWxhdGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3RSZWxhdGVkKHVzZXIpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZChkYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRSZWxhdGVkKCk7XHJcbiAgICAgICAgc2V0UmVsYXRlZChbXSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHNob3dGcmllbmRzID0gdXNlciA9PlxyXG4gICAgICAgIHVzZXIuZnJpZW5kcy5tYXAoKGYsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL3VzZXJzLyR7Zi5maXJzdE5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXItMSBtbC0xIG10LTNcIj4gU2F5IEhpIHRvIHtmLmZpcnN0TmFtZX17XCIgXCJ9e2YubGFzdE5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSlcclxuXHJcbiAgICBjb25zdCBzaG93UmVsYXRlZFBlb3BsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVsYXRlZC5tYXAoKHVzZXIsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxDYXJkIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICctMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vYXBpL3VzZXIvcGhvdG8vJHt1c2VyLmZpcnN0TmFtZX1gfSBhbHQ9e3VzZXIuZmlyc3ROYW1lfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIGZlYXR1cmVkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0yIHBiLTMgcHQtMyB0ZXh0LWNlbnRlciBmb250LXdlaWdodC1zdHJvbmdcIj5XZWxjb21lIGJhY2sge3VzZXIuZmlyc3ROYW1lfXtcIiBcIn17dXNlci5sYXN0TmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5NaXNzIFlvdXIgRnJpZW5kcyA/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RnJpZW5kcyh1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgcGItMyBoMlwiPlBlb3BsZSB5b3UgbWF5IGtub3cuLi4uLi4uPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmVsYXRlZFBlb3BsZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcblxyXG59XHJcblxyXG5TaW5nbGVVc2VyLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAgIHJldHVybiBzaW5nbGVVc2VyKHF1ZXJ5LmZpcnN0TmFtZSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdXNlcjogZGF0YSwgcXVlcnkgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==