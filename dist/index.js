module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapKeys; });
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queryString__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLinkProps; });



var replaceWithParams = function replaceWithParams(params, pattern) {
  return Object.keys(params).reduce(function (acc, param) {
    return acc.replace(':' + param, params[param]);
  }, pattern).replace(/:[^\/&\?]*(\/|$)/g, '');
};

var createLinkProps = function createLinkProps(_ref) {
  var _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? '' : _ref$pattern,
      _ref$page = _ref.page,
      page = _ref$page === undefined ? '' : _ref$page;
  return function (params) {
    return {
      href: page + '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__queryString__["a" /* toString */])(params),
      as: replaceWithParams(params, pattern)
    };
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/capitalize");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash/fp/compose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path-match");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toString; });
/* unused harmony export fromString */
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var concat = function concat(q1, q2) {
  return q1 + '&' + q2;
};

var toString = function toString(params) {
  return Object.entries(params).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return concat(acc, k + '=' + v);
  }, '');
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_match__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_capitalize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_capitalize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_fp_capitalize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_compose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_fp_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_object__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };









var match = __WEBPACK_IMPORTED_MODULE_0_path_match___default()();

var createMiddleware = function createMiddleware(routes) {
  return function (app) {
    var handle = app.getRequestHandler();
    var getMatchingRoute = function getMatchingRoute(req) {
      return Object.values(routes).reduce(function (acc, _ref) {
        var pattern = _ref.pattern,
            page = _ref.page;

        if (acc.page) return acc;

        var params = match(pattern)(req.url);

        if (params) return { page: page, params: params };else return acc;
      }, {});
    };

    return function (req, res, next) {
      var _getMatchingRoute = getMatchingRoute(req),
          page = _getMatchingRoute.page,
          params = _getMatchingRoute.params;

      if (page) app.render(req, res, page, params);else handle(req, res);
    };
  };
};

var createLinks = function createLinks(routes) {
  var links = __WEBPACK_IMPORTED_MODULE_4_lodash_fp_compose___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_object__["a" /* mapKeys */])(function (key) {
    return __WEBPACK_IMPORTED_MODULE_3_lodash_fp_capitalize___default()(key) + 'Link';
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_object__["b" /* mapValues */])(function (mapProps) {
    return function (props) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
        mapProps(props),
        props.children
      );
    };
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_object__["b" /* mapValues */])(__WEBPACK_IMPORTED_MODULE_5__utils_routing__["a" /* createLinkProps */]))(routes);

  return new Proxy(links, {
    get: function get(_, k) {
      return !!links[k] ? links[k] : typeof k !== 'string' || !k.match('Link') ? undefined : function (props) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, _extends({
          href: '/' + k.replace('Link', '').toLowerCase()
        }, props));
      };
    }
  });
};

var createDynamicRoutes = function createDynamicRoutes(routesConfig) {
  var routes = createLinks(routesConfig);
  routes.createMiddleware = createMiddleware(routesConfig);
  return routes;
};
/* harmony default export */ __webpack_exports__["default"] = createDynamicRoutes;

/***/ })
/******/ ]);