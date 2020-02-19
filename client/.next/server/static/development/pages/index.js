module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LoginForm/index.js":
/*!***************************************!*\
  !*** ./components/LoginForm/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/katerina.bezlepkina/Projects/account-next/account-app/client/components/LoginForm/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LoginForm = ({
  onPasswordChange,
  onEmailChange,
  onLogin,
  email,
  password
}) => __jsx("div", {
  className: "form-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Email"), __jsx("input", {
  onChange: onEmailChange,
  type: "text",
  id: "email",
  value: email,
  className: "width-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Password"), __jsx("input", {
  onChange: onPasswordChange,
  type: "password",
  id: "password",
  value: password,
  className: "width-100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("button", {
  onClick: onLogin,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Log in"));

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm/index.js");
var _jsxFileName = "/Users/katerina.bezlepkina/Projects/account-next/account-app/client/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Home = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleChangeEmail = ({
    target: {
      value
    }
  }) => {
    setEmail(value);
  };

  const handleChangePassword = ({
    target: {
      value
    }
  }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    router.push('/profile');
  };

  return __jsx("div", {
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Login"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic",
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css",
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.css",
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-4073231917" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-4073231917",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Login")), __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onEmailChange: handleChangeEmail,
    email: email,
    password: password,
    onPasswordChange: handleChangePassword,
    onLogin: handleLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4073231917",
    __self: undefined
  }, ".layout.jsx-4073231917{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.form-container.jsx-4073231917{width:22rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.width-100.jsx-4073231917{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRlcmluYS5iZXpsZXBraW5hL1Byb2plY3RzL2FjY291bnQtbmV4dC9hY2NvdW50LWFwcC9jbGllbnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUd3QixBQU9ELEFBS0QsV0FDYixDQUxlLDhEQVBTLFlBUUEsa0VBUEMsWUFRekIsdUZBUHFCLDZGQUNOLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2thdGVyaW5hLmJlemxlcGtpbmEvUHJvamVjdHMvYWNjb3VudC1uZXh0L2FjY291bnQtYXBwL2NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgc2V0RW1haWwodmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcbiAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDMwMGl0YWxpYyw3MDAsNzAwaXRhbGljXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNS4wLjAvbm9ybWFsaXplLmNzc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWlsbGlncmFtLzEuMy4wL21pbGxpZ3JhbS5jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExvZ2luRm9ybVxuICAgICAgICAgIG9uRW1haWxDaGFuZ2U9e2hhbmRsZUNoYW5nZUVtYWlsfVxuICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XG4gICAgICAgICAgb25QYXNzd29yZENoYW5nZT17aGFuZGxlQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgb25Mb2dpbj17aGFuZGxlTG9naW59XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAyMnJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLndpZHRoLTEwMCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/katerina.bezlepkina/Projects/account-next/account-app/client/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/katerina.bezlepkina/Projects/account-next/account-app/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map