module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queryString__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceWithParams", function() { return replaceWithParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInitialSlash", function() { return addInitialSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkProps", function() { return createLinkProps; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var replaceWithParams = function replaceWithParams(pattern, params) {
  return Object.keys(params).reduce(function (acc, param) {
    return acc.replace(':' + param, params[param]);
  }, pattern).replace(/:[^\/&\?]*(\/|$)/g, '');
};

var addInitialSlash = function addInitialSlash(str) {
  return !!str.match(/^\//) ? str : '/' + str;
};

var createLinkProps = function createLinkProps() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var params = arguments[2];

  var restParams = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* filterValues */])(function (_, key) {
    return !pattern.match(':' + key);
  }, params);

  return _extends({}, restParams, {
    href: addInitialSlash(page) + '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queryString__["a" /* toString */])(params),
    as: replaceWithParams(pattern, params)
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path-match");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapValues */
/* unused harmony export mapKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterValues; });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapValues = function mapValues(mapper) {
  return function (obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      return Object.assign(acc, _defineProperty({}, k, mapper(obj[k], k, obj)));
    }, {});
  };
};

var mapKeys = function mapKeys(mapper) {
  return function (obj) {
    return Object.keys(obj).reduce(function (acc, k) {
      return Object.assign(acc, _defineProperty({}, mapper(k, obj[k], obj), obj[k]));
    }, {});
  };
};

var filterValues = function filterValues(predicate, obj) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return predicate(v, k) ? Object.assign(acc, _defineProperty({}, k, v)) : acc;
  }, {});
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toString; });
/* unused harmony export fromString */
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toString = function toString(params) {
  return Object.entries(params).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return k + '=' + v;
  }).join('&');
};

var fromString = function fromString(str) {
  return str.replace(/^\?/, '').split('&').map(function (str) {
    return str.split('=');
  }).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    return Object.assign(acc, _defineProperty({}, k, v));
  }, {});
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pathMatch = __webpack_require__(3);
var React = __webpack_require__(4);
var Link = __webpack_require__(1).default;
var NextRouter = __webpack_require__(2).default;

var _require = __webpack_require__(0),
    addInitialSlash = _require.addInitialSlash,
    createLinkProps = _require.createLinkProps,
    replaceWithParams = _require.replaceWithParams;

var match = pathMatch();

var Router = function Router() {
  var _this = this;

  _classCallCheck(this, Router);

  this.routes = [];

  this.add = function (_ref) {
    var pattern = _ref.pattern,
        name = _ref.name,
        _ref$page = _ref.page,
        page = _ref$page === undefined ? addInitialSlash(name) : _ref$page;

    _this.routes.push({ pattern: pattern, page: page, name: name });
    return _this;
  };

  this.getRoute = function (name) {
    var route = _this.routes.find(function (r) {
      return r.name === name;
    });
    if (!route) throw new Error('The route ' + name + ' doesn\'t exist.');
    return route;
  };

  this.Link = function (_ref2) {
    var children = _ref2.children,
        name = _ref2.route,
        params = _objectWithoutProperties(_ref2, ['children', 'route']);

    var _getRoute = _this.getRoute(name),
        page = _getRoute.page,
        pattern = _getRoute.pattern;

    return React.createElement(
      Link,
      createLinkProps(page, pattern, params),
      children
    );
  };

  this.pushRoute = function (name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments[2];

    var _getRoute2 = _this.getRoute(name),
        page = _getRoute2.page,
        pattern = _getRoute2.pattern;

    var _createLinkProps = createLinkProps(page, pattern, params),
        href = _createLinkProps.href,
        as = _createLinkProps.as;

    return NextRouter.push(href, as, options);
  };

  this.replaceRoute = function (name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments[2];

    var _getRoute3 = _this.getRoute(name),
        page = _getRoute3.page,
        pattern = _getRoute3.pattern;

    var _createLinkProps2 = createLinkProps(page, pattern, params),
        href = _createLinkProps2.href,
        as = _createLinkProps2.as;

    return Router.replace(href, as, options);
  };

  this.prefetchRoute = function (name) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _getRoute4 = _this.getRoute(name),
        page = _getRoute4.page,
        pattern = _getRoute4.pattern;

    var _createLinkProps3 = createLinkProps(page, pattern, params),
        href = _createLinkProps3.href;

    return Router.prefetch(href);
  };

  this.getMatchingRoute = function (url) {
    return _this.routes.reduce(function (acc, _ref3) {
      var page = _ref3.page,
          pattern = _ref3.pattern;

      if (acc.page) return acc;
      var params = match(pattern)(url);
      if (params) return { page: page, params: params };else return acc;
    }, {});
  };

  this.getRequestHandler = function (app) {
    var handle = app.getRequestHandler();

    return function (req, res) {
      var _getMatchingRoute = _this.getMatchingRoute(req.url),
          page = _getMatchingRoute.page,
          params = _getMatchingRoute.params;

      if (page) app.render(req, res, page, params);else handle(req, res);
    };
  };

  this.getRoutePath = function (routeName, params) {
    var _getRoute5 = _this.getRoute(routeName),
        pattern = _getRoute5.pattern;

    return replaceWithParams(pattern, params);
  };
};

module.exports = Router;

/***/ })
/******/ ]);