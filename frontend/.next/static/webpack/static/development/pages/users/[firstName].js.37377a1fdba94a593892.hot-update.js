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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy91c2Vycy9bZmlyc3ROYW1lXS5qcyJdLCJuYW1lcyI6WyJTaW5nbGVVc2VyIiwidXNlciIsInF1ZXJ5IiwidXNlU3RhdGUiLCJyZWxhdGVkIiwic2V0UmVsYXRlZCIsImxvYWRSZWxhdGVkIiwibGlzdFJlbGF0ZWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNob3dGcmllbmRzIiwiZnJpZW5kcyIsIm1hcCIsImYiLCJpIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzaG93UmVsYXRlZFBlb3BsZSIsIm1hcmdpblRvcCIsIkFQSSIsImdldEluaXRpYWxQcm9wcyIsInNpbmdsZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVOQyxzREFBUSxDQUFDLEVBQUQsQ0FGRjtBQUFBLE1BRTdCQyxPQUY2QjtBQUFBLE1BRXBCQyxVQUZvQjs7QUFHcEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkMscUVBQVcsQ0FBQ04sSUFBRCxDQUFYLENBQWtCTyxJQUFsQixDQUF1QixVQUFBQyxJQUFJLEVBQUk7QUFDM0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEtBQWpCO0FBQ0gsT0FGRCxNQUdLO0FBQ0RMLGtCQUFVLENBQUNJLElBQUQsQ0FBVjtBQUNIO0FBQ0osS0FQRDtBQVFILEdBVEQ7O0FBV0FJLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxlQUFXO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJ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R0FQTSxDQUFQO0FBUUgsQ0FURDs7QUFXZUYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVzZXJzXFxbZmlyc3ROYW1lXS5qcy4zNzM3N2ExZmRiYTk0YTU5Mzg5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpbmdsZVVzZXIsIGxpc3RSZWxhdGVkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC91c2VyL1NtYWxsQ2FyZCdcclxuXHJcbmNvbnN0IFNpbmdsZVVzZXIgPSAoeyB1c2VyLCBxdWVyeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JlbGF0ZWQsIHNldFJlbGF0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBsb2FkUmVsYXRlZCA9ICgpID0+IHtcclxuICAgICAgICBsaXN0UmVsYXRlZCh1c2VyKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFJlbGF0ZWQoZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkUmVsYXRlZCgpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgc2hvd0ZyaWVuZHMgPSB1c2VyID0+XHJcbiAgICAgICAgdXNlci5mcmllbmRzLm1hcCgoZiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvdXNlcnMvJHtmLmZpcnN0TmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtci0xIG1sLTEgbXQtM1wiPiBTYXkgSGkgdG8ge2YuZmlyc3ROYW1lfXtcIiBcIn17Zi5sYXN0TmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG5cclxuICAgIGNvbnN0IHNob3dSZWxhdGVkUGVvcGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZWxhdGVkLm1hcCgodXNlciwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbENhcmQgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEZyYWdtZW50PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogJy0zMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfS9hcGkvdXNlci9waG90by8ke3VzZXIuZmlyc3ROYW1lfWB9IGFsdD17dXNlci5maXJzdE5hbWV9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWQgZmVhdHVyZWQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTIgcGItMyBwdC0zIHRleHQtY2VudGVyIGZvbnQtd2VpZ2h0LXN0cm9uZ1wiPldlbGNvbWUgYmFjayB7dXNlci5maXJzdE5hbWV9e1wiIFwifXt1c2VyLmxhc3ROYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk1pc3MgWW91ciBGcmllbmRzID88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dGcmllbmRzKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNSBwYi0zIGgyXCI+UGVvcGxlIHlvdSBtYXkga25vdy4uLi4uLi48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dSZWxhdGVkUGVvcGxlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9GcmFnbWVudD5cclxuXHJcbn1cclxuXHJcblNpbmdsZVVzZXIuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHNpbmdsZVVzZXIocXVlcnkuZmlyc3ROYW1lKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyB1c2VyOiBkYXRhLCBxdWVyeSB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVXNlcjsiXSwic291cmNlUm9vdCI6IiJ9