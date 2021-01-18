/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  background-color: #F9F5F1;\n  font-family: \"Lato\", sans-serif; }\n\nh1 {\n  font-size: 5vmin;\n  margin: none; }\n  h1 img {\n    height: auto;\n    width: 7%; }\n\nh3 {\n  font-size: 2.5vmin; }\n\nbody {\n  background-color: #FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%; }\n\n.user-name {\n  line-height: 1vmin; }\n\n.traveler-type {\n  line-height: 1vmin; }\n\n#blockColorblindContent {\n  display: none; }\n\n.hidden {\n  display: none !important; }\n\n.sidebar {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 30%; }\n\n.prof-pic {\n  position: relative;\n  height: auto;\n  width: 75%; }\n\n.sidebar-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 30%;\n  width: 100%; }\n\n.sidebar-btn {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%; }\n  .sidebar-btn img {\n    height: auto;\n    width: 20%; }\n  .sidebar-btn:hover {\n    cursor: pointer;\n    font-size: 3.2vmin;\n    transition: .4s ease; }\n    .sidebar-btn:hover img {\n      height: auto;\n      width: 25%;\n      transition: .4s ease; }\n\n.sidebar-btn-area {\n  height: 20%;\n  width: 100%; }\n\n.new-trip-form {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: nowrap; }\n  .new-trip-form input {\n    height: auto;\n    width: 80%;\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin; }\n\n.pending {\n  color: #F9D1CB; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 70%;\n  overflow: hidden;\n  text-align: center; }\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll; }\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 22%;\n  width: 100%;\n  transition: .8s ease;\n  overflow: hidden; }\n  .trip .details {\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin; }\n  .trip button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%; }\n    .trip button .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      height: auto;\n      width: 25%; }\n  .trip img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 100%;\n    width: 100%; }\n  .trip:hover {\n    height: 40%;\n    width: 100%; }\n    .trip:hover .details {\n      display: block; }\n\n.trip:focus-within {\n  height: 40%;\n  width: 100%; }\n  .trip:focus-within .details {\n    display: block; }\n\n.preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 350%;\n  width: 100%; }\n\n.cost-details {\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAEA;EACE,yBAA0B;EAC1B,+BAA+B,EAAA;;AAGjC;EACE,gBAAgB;EAChB,YAAY,EAAA;EAFd;ICNE,YDU6B;ICT7B,SDSiC,EAAA;;AAInC;EACE,kBAAkB,EAAA;;AAGpB;EACE,yBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,kBAAkB,EAAA;;AAGpB;EACE,kBAAkB,EAAA;;AAGpB;EACE,aAAa,EAAA;;AAGf;EACE,wBAAwB,EAAA;;AAG1B;EACE,mBAAmB;ECvCnB,aAAa;EACb,sBDuC2B;ECtC3B,2BDsCuC;ECrCvC,iBDqC+C;EAC/C,UAAU,EAAA;;AAGZ;EACE,kBAAkB;EClDlB,YDmD2B;EClD3B,UDkDgC,EAAA;;AAGlC;EACE,kBAAkB;EClDlB,aAAa;EACb,sBDkD2B;ECjD3B,uBDiDmC;EChDnC,iBDgD2C;ECxD3C,WDyD0B;ECxD1B,WDwDgC,EAAA;;AAGlC;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB,EAAA;EAJnB;IC5DE,YDkE6B;ICjE7B,UDiEkC,EAAA;EANpC;IASI,eAAe;IACf,kBAAkB;IAClB,oBAAoB,EAAA;IAXxB;MC5DE,YDyE+B;MCxE/B,UDwEoC;MAChC,oBAAoB,EAAA;;AAK1B;EC/EE,WDgF0B;EC/E1B,WD+EgC,EAAA;;AAGlC;EACE,mBAAmB;EC/EnB,aAAa;EACb,sBD+E2B;EC9E3B,6BD8EyC;EC7EzC,iBD6EiD,EAAA;EAFnD;ICnFE,YDuF6B;ICtF7B,UDsFkC;IAChC,+BAA+B;IAC/B,gBAAgB,EAAA;;AAIpB;EACE,cAAc,EAAA;;AAGhB;EC5FE,aAAa;EACb,sBD4F2B;EC3F3B,2BD2FuC;EC1FvC,iBD0F+C;EAC/C,UAAU;EACV,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EChHf,WDiH0B;EChH1B,WDgHgC;EAChC,oBAAoB;EACpB,gBAAgB,EAAA;EANlB;IAQI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB,EAAA;EAXtB;IAcI,gBAAgB;IAChB,YAAY;IACZ,OAAO;IACP,UAAU,EAAA;IAjBd;MAmBM,+BAA+B;MAC/B,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,uBAAuB;MACvB,YAAY;MACZ,gBAAgB;MAChB,iBAAiB;MACjB,YAAY;MCxIhB,YDyI+B;MCxI/B,UDwIoC,EAAA;EA5BtC;IAgCI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IChJlC,YDiJ6B;IChJ7B,WDgJmC,EAAA;EApCrC;IC7GE,WDoJ4B;ICnJ5B,WDmJkC,EAAA;IAvCpC;MAyCM,cAAc,EAAA;;AAKpB;EC3JE,WD4J0B;EC3J1B,WD2JgC,EAAA;EADlC;IAGI,cAAc,EAAA;;AAIlB;EC7JE,aAAa;EACb,mBD6JwB;EC5JxB,uBD4JgC;EC3JhC,iBD2JwC;EACxC,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;ECtK5B,YDuK2B;ECtK3B,WDsKiC,EAAA;;AAGnC;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,uBAAuB;EACvB,YAAY;EACZ,YAAY;EC/KZ,YDgL2B;EC/K3B,UD+KgC,EAAA","sourcesContent":["@import 'variables';\n\nhtml {\n  background-color: \t#F9F5F1;\n  font-family: \"Lato\", sans-serif;\n}\n\nh1 {\n  font-size: 5vmin;\n  margin: none;\n  & img{\n    @include setDimensions(auto, 7%);\n  }\n}\n\nh3 {\n  font-size: 2.5vmin;\n}\n\nbody {\n  background-color:#FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%;\n}\n\n.user-name{\n  line-height: 1vmin;\n}\n\n.traveler-type{\n  line-height: 1vmin;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.sidebar {\n  align-items: center;\n  @include displayFlex(column, flex-start, nowrap);\n  width: 30%;\n}\n\n.prof-pic{\n  position: relative;\n  @include setDimensions(auto, 75%);\n}\n\n.sidebar-content {\n  text-align: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(30%, 100%);\n}\n\n.sidebar-btn {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%;\n  & img {\n    @include setDimensions(auto, 20%);\n  }\n  &:hover {\n    cursor: pointer;\n    font-size: 3.2vmin;\n    transition: .4s ease;\n    & img {\n      @include setDimensions(auto, 25%);\n      transition: .4s ease;\n    }\n  }\n}\n\n.sidebar-btn-area {\n  @include setDimensions(20%, 100%);\n}\n\n.new-trip-form {\n  align-items: center;\n  @include displayFlex(column, space-around, nowrap);\n  & input {\n    @include setDimensions(auto, 80%);\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin;\n  }\n}\n\n.pending {\n  color: #F9D1CB;\n}\n\nmain {\n  @include displayFlex(column, flex-start, nowrap);\n  width: 70%;\n  overflow: hidden;\n  text-align: center;\n}\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll;\n}\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  @include setDimensions(22%, 100%);\n  transition: .8s ease;\n  overflow: hidden;\n  & .details{\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin;\n  }\n  & button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%;\n    & .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      @include setDimensions(auto, 25%);\n    }\n  }\n  & img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    @include setDimensions(100%, 100%);\n  }\n  &:hover {\n    @include setDimensions(40%, 100%);\n    & .details {\n      display: block;\n    }\n  }\n}\n\n.trip:focus-within {\n  @include setDimensions(40%, 100%);\n  & .details {\n    display: block;\n  }\n}\n\n.preview{\n  @include displayFlex(row, center, nowrap);\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  @include setDimensions(350%, 100%);\n}\n\n.cost-details{\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n","@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(dataObject) {
    this.id = dataObject.id;
    this.destination = dataObject.destination;
    this.estimatedLodgingCostPerDay = dataObject.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = dataObject.estimatedFlightCostPerPerson;
    this.image = dataObject.image;
    this.alt = dataObject.alt;
  }
}


/* harmony default export */ __webpack_exports__["default"] = (Destination);


/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(dataObject, destinations) {
    this.id = dataObject.id
    this.userID = dataObject.userID
    this.destinationID = dataObject.destinationID
    this.travelers = dataObject.travelers
    this.date = dataObject.date
    this.duration = dataObject.duration
    this.status = dataObject.status
    this.suggestedActivities = dataObject.suggestedActivities
    this.cost = this.calculateCost(destinations)
  }

  findDestination(destinations) {
    return destinations.find(destination => destination.id === this.destinationID);
  }

  calculateCost(destinations) {
    const destination = this.findDestination(destinations);
    const flightCost = destination.estimatedFlightCostPerPerson * this.travelers;
    const lodgingCost = destination.estimatedLodgingCostPerDay * this.travelers * this.duration;
    return {
      beforeAgent: flightCost + lodgingCost,
      afterAgent: Math.ceil(1.1 * (flightCost + lodgingCost))
    }
  }

  returnStatusInfo() {
    if(this.status === 'pending'){
      return this.status
    } else if (new Date().getTime() < new Date(this.date).getTime()) {
      return 'upcoming'
    } else if (new Date().getTime() <= new Date(this.date).getTime()+(1000 * 60 * 60 * 24 * this.duration)) {
      return 'in progress'
    } else {
      return 'past'
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");


class User {
  constructor(travelerData, tripData, destinations) {
    this.id = travelerData.id
    this.name = travelerData.name
    this.travelerType = travelerData.travelerType
    this.trips = this.generateTrips(tripData, destinations)
  }

  generateTrips(tripData, destinations) {
    return this.sortByDate(this.filterTripData(tripData)).map(data => new _Trip__WEBPACK_IMPORTED_MODULE_0__["default"](data, destinations));
  }

  filterTripData(tripData) {
    return tripData.filter(trip => trip.userID === this.id);
  }

  sortByDate(tripData) {
    tripData.forEach(trip => trip.date = new Date(trip.date));
    return tripData.sort((a, b) => b.date - a.date);
  }

  returnTripsByStatus(status) {
    return this.trips.filter(trip => trip.status === status);
  }

  returnTripsThisYear() {
    return this.trips.filter(trip => (new Date().getFullYear() - trip.date.getFullYear()) <= 1);
  }

  getCostForYear() {
  return this.returnTripsThisYear().reduce((totalCost, trip) => {
    totalCost += trip.cost.afterAgent;
    return totalCost;
  }, 0);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {

  displayTrip(trip, destinations, tripList) {
    const destination = trip.findDestination(destinations);

    tripList.insertAdjacentHTML('beforeend',
    `<article class="trip">
      <button>
        <img src="${destination.image}"  alt="${destination.alt}">
        <div class="info-block">
          <h2>${destination.destination}</h2>
          <h3 class="${trip.returnStatusInfo()}">${trip.returnStatusInfo()}</h3>
          <div class="details">
            <p>start date:  ${trip.date.toDateString()}</p>
            <p>duration:  ${trip.duration} days</p>
            <p>travelers:   ${trip.travelers}</p>
            <p>cost:  $${trip.calculateCost(destinations).afterAgent}</p>
          </div>
        <div>
      </button>
    </article>`);
  },

  clearTrips(tripList) {
    tripList.innerHTML = ''
  },

  displaySidebar(user, sidebar){
    sidebar.insertAdjacentHTML('afterbegin',
    `<img class="prof-pic" src="./images/profpic.png" alt="user's profile picture">
    <h1 class="user-name">${user.name}</h1>
    <h2 class="traveler-type">${user.travelerType}</h2>
    <div class="sidebar-content welcome-message">
      <h3>Welcome back, traveler!
      <br> ---------
      <br>Approved Trips: ${user.returnTripsByStatus('approved').length}
      <br> ---------
      <br>Pending Trips: ${user.returnTripsByStatus('pending').length}
      <br> ---------
      <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>
    </div>`)
  },

  displayNewTripForm(destinations) {
    document.querySelector('.new-trip-form').insertAdjacentHTML('afterbegin',
    `<select class="destination-list" name="">
    </select>
    <input type="date" class="trip-start" min="${new Date().toISOString().substring(0, 10)}">
    <input type="date" class="trip-end" min="${new Date().toISOString().substring(0, 10)}">
    <input type="number" class="num-travelers" value="1" min="1">
    <h3></h3>
    <button class="book-trip-button">book it</button>`);

    this.displayDestinationOptions(destinations, document.querySelector('.destination-list'));
  },

  clearNewTripForm() {
    document.querySelector('.new-trip-form').innerHTML = ''
  },

  displayDestinationOptions(destinations, destinationList) {
    destinations.sort((a, b) => a.destination.localeCompare(b.destination)).forEach(destination => {
      destinationList.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`);
    });
  },

  displayPendingMessage() {
    document.querySelector('.cost-message').innerHTML = 'select a start and end date and we\'ll calculate the cost'
  },

  displayCostMessage(trip) {
    document.querySelector('.cost-message').innerHTML = `$${trip.cost.beforeAgent} + 10% agent fee = $${trip.cost.afterAgent}`
  },

  updatePreview(destinationPreview, destinationList, destinations) {
    const preview = destinations.find(destination => destination.id == destinationList.value)
    destinationPreview.innerHTML =
    `<div class="preview" style="background-image: url(${preview.image});">
      <div class="cost-details"
        <h1>${preview.destination}</h1>
        <h2>Round Trip Airfare Per Person: $${preview.estimatedFlightCostPerPerson}</h2>
        <h2>Lodging Cost Per Person Per Day: $${preview.estimatedLodgingCostPerDay}</h2>
      </div>
    </div>`
  }
};

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchRequests.js":
/*!******************************!*\
  !*** ./src/fetchRequests.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchRequests = {
  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json());
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json());
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json());
  },

  getAllData(id) {
    return [fetchRequests.getTraveler(id), fetchRequests.getTrips(), fetchRequests.getDestinations()]
  },

  postTrip(obj) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then(response => response.json());
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchRequests);


/***/ }),

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/arrow.png");

/***/ }),

/***/ "./src/images/icons/globe-icon.png":
/*!*****************************************!*\
  !*** ./src/images/icons/globe-icon.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/globe-icon.png");

/***/ }),

/***/ "./src/images/icons/map-icon.png":
/*!***************************************!*\
  !*** ./src/images/icons/map-icon.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/map-icon.png");

/***/ }),

/***/ "./src/images/icons/ticket-icon.png":
/*!******************************************!*\
  !*** ./src/images/icons/ticket-icon.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/ticket-icon.png");

/***/ }),

/***/ "./src/images/profpic.png":
/*!********************************!*\
  !*** ./src/images/profpic.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/profpic.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Destination */ "./src/Destination.js");
/* harmony import */ var _fetchRequests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchRequests */ "./src/fetchRequests.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_profpic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/profpic.png */ "./src/images/profpic.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _images_icons_map_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icons/map-icon.png */ "./src/images/icons/map-icon.png");
/* harmony import */ var _images_icons_ticket_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/icons/ticket-icon.png */ "./src/images/icons/ticket-icon.png");
/* harmony import */ var _images_icons_globe_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icons/globe-icon.png */ "./src/images/icons/globe-icon.png");














let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const sidebar = document.querySelector('.sidebar');
const planTripButton = document.querySelector('.plan-trip-button');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');
const destinationPreview = document.querySelector('.destination-preview');

const startDateInput = document.querySelector('.trip-start');
const endDateInput = document.querySelector('.trip-end');
const formInputs = document.querySelectorAll('.new-trip-form__input');
const destinationList = document.querySelector('.destination-list')
const travelersInput = document.querySelector('.num-travelers');
const bookTripButton = document.querySelector('.book-trip-button');
const backButton = document.querySelector('.back-button')

loginButton.addEventListener('click', fetchAndLoadDataModel)
startDateInput.addEventListener('input', setEndMin)
formInputs.forEach(input => addEventListener('input', updateFormDOM))
planTripButton.addEventListener('click', toggleFormView)
bookTripButton.addEventListener('click', bookTrip);
backButton.addEventListener('click', toggleFormView)

function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].getAllData(id))
    .then(responses => {
      if (checkLoginCredentials(responses[0], username, password, id)) {
        initializeDOM(responses[0], responses[1], responses[2])
      } else if (responses[0].message) {
        alert('LOGIN FAILED\ninvalid username');
      } else {
        alert('LOGIN FAILED\ninvalid password');
      }
    });
}

function generateClasses(userData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new _Destination__WEBPACK_IMPORTED_MODULE_2__["default"](data));
  user = new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userData, tripData.trips, destinations);
}


function checkLoginCredentials(response, username, password, id) {
  if(username === `traveler${id}` && password === 'travel2020' && response.id == id) {
    return true;
  };
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrip(trip, destinations, tripList)
  });
}

function toggleFormView() {
  document.querySelector('.welcome-message').classList.toggle('hidden');
  planTripButton.classList.toggle('hidden');
  document.querySelector('.new-trip-form').classList.toggle('hidden');
  bookTripButton.classList.toggle('hidden');
  destinationPreview.classList.toggle('hidden');
  tripList.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  if(tripList.classList.contains('hidden')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].updatePreview(destinationPreview, destinationList, destinations);
  }
}

function bookTrip() {
  event.preventDefault()

  _fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].getTrips().then(response => {
    _fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].postTrip(getObjectFromInputs(response)).then(response => {
      Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        displayTrips();
        toggleFormView();
      });
    });
  });
}

function displayTrips() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].clearTrips(tripList)
  displayAllTrips();
}

function initializeDOM(userData, recipeData, destinationData) {
  generateClasses(userData, recipeData, destinationData)
  displayTrips()
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displaySidebar(user, sidebar);
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  setStartMin()
  planTripButton.classList.toggle('hidden')
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayDestinationOptions(destinations, document.querySelector('.destination-list'))
}

function getObjectFromInputs(trips) {
  return {
    id: trips.trips.length + 1,
    userID: user.id,
    destinationID: parseInt(destinationList.value),
    travelers: travelersInput.value,
    date: new Date(startDateInput.value).toISOString().substring(0, 10).replaceAll('-', '/'),
    duration: (new Date(endDateInput.value).getTime() - new Date(startDateInput.value).getTime())/(1000*60*60*24),
    status: 'pending',
    suggestedActivities: []
  }
}


function setEndMin() {
  let nextDay = new Date();
  nextDay.setDate(new Date(startDateInput.value).getDate() + 1);
  endDateInput.setAttribute('min', nextDay.toISOString().substring(0, 10));
}

function setStartMin() {
  startDateInput.setAttribute('min', new Date().toISOString().substring(0, 10));
}

function updateFormDOM() {
  if (startDateInput.value && endDateInput.value) {
    const trip = new _Trip__WEBPACK_IMPORTED_MODULE_1__["default"](getObjectFromInputs({trips: []}), destinations)
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayCostMessage(trip)
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayPendingMessage();
  }

  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].updatePreview(destinationPreview, destinationList, destinations)
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pY29ucy9nbG9iZS1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL21hcC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL3RpY2tldC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Byb2ZwaWMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHNEQUFhO0FBQ2YsSUFBSSxzREFBYTtBQUNqQixrQkFBa0Isc0RBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUksc0JBQXNCLFVBQVU7QUFDekQsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSCxJQUFJLG1EQUFVO0FBQ2Q7O0FBRUEsRUFBRSxtREFBVTtBQUNaIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjVGMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDV2bWluO1xcbiAgbWFyZ2luOiBub25lOyB9XFxuICBoMSBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA3JTsgfVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi41dm1pbjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGODtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogOTklOyB9XFxuXFxuLnVzZXItbmFtZSB7XFxuICBsaW5lLWhlaWdodDogMXZtaW47IH1cXG5cXG4udHJhdmVsZXItdHlwZSB7XFxuICBsaW5lLWhlaWdodDogMXZtaW47IH1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG4ucHJvZi1waWMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDc1JTsgfVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlYmFyLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyLjh2bWluO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7IH1cXG4gIC5zaWRlYmFyLWJ0biBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMCU7IH1cXG4gIC5zaWRlYmFyLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjJ2bWluO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcbiAgICAuc2lkZWJhci1idG46aG92ZXIgaW1nIHtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcblxcbi5zaWRlYmFyLWJ0bi1hcmVhIHtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICAubmV3LXRyaXAtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydm1pbjsgfVxcblxcbi5wZW5kaW5nIHtcXG4gIGNvbG9yOiAjRjlEMUNCOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1saXN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi50cmlwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjIlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC50cmlwIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDF2bWluOyB9XFxuICAudHJpcCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRvcDogMSU7XFxuICAgIGJvdHRvbTogMSU7IH1cXG4gICAgLnRyaXAgYnV0dG9uIC5pbmZvLWJsb2NrIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgICBvcGFjaXR5OiA4NSU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiAyNSU7IH1cXG4gIC50cmlwIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50cmlwOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC50cmlwOmhvdmVyIC5kZXRhaWxzIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmlwOmZvY3VzLXdpdGhpbiB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcDpmb2N1cy13aXRoaW4gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDM1MCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb3N0LWRldGFpbHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1JTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBRmQ7SUNORSxZRFU2QjtJQ1Q3QixTRFNpQyxFQUFBOztBQUluQztFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsbUJBQW1CO0VDdkNuQixhQUFhO0VBQ2Isc0JEdUMyQjtFQ3RDM0IsMkJEc0N1QztFQ3JDdkMsaUJEcUMrQztFQUMvQyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUNsRGxCLFlEbUQyQjtFQ2xEM0IsVURrRGdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VDbERsQixhQUFhO0VBQ2Isc0JEa0QyQjtFQ2pEM0IsdUJEaURtQztFQ2hEbkMsaUJEZ0QyQztFQ3hEM0MsV0R5RDBCO0VDeEQxQixXRHdEZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUpuQjtJQzVERSxZRGtFNkI7SUNqRTdCLFVEaUVrQyxFQUFBO0VBTnBDO0lBU0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTtJQVh4QjtNQzVERSxZRHlFK0I7TUN4RS9CLFVEd0VvQztNQUNoQyxvQkFBb0IsRUFBQTs7QUFLMUI7RUMvRUUsV0RnRjBCO0VDL0UxQixXRCtFZ0MsRUFBQTs7QUFHbEM7RUFDRSxtQkFBbUI7RUMvRW5CLGFBQWE7RUFDYixzQkQrRTJCO0VDOUUzQiw2QkQ4RXlDO0VDN0V6QyxpQkQ2RWlELEVBQUE7RUFGbkQ7SUNuRkUsWUR1RjZCO0lDdEY3QixVRHNGa0M7SUFDaEMsK0JBQStCO0lBQy9CLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUM1RkUsYUFBYTtFQUNiLHNCRDRGMkI7RUMzRjNCLDJCRDJGdUM7RUMxRnZDLGlCRDBGK0M7RUFDL0MsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VDaEhmLFdEaUgwQjtFQ2hIMUIsV0RnSGdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQU5sQjtJQVFJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBWHRCO0lBY0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVSxFQUFBO0lBakJkO01BbUJNLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsWUFBWTtNQ3hJaEIsWUR5SStCO01DeEkvQixVRHdJb0MsRUFBQTtFQTVCdEM7SUFnQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lDaEpsQyxZRGlKNkI7SUNoSjdCLFdEZ0ptQyxFQUFBO0VBcENyQztJQzdHRSxXRG9KNEI7SUNuSjVCLFdEbUprQyxFQUFBO0lBdkNwQztNQXlDTSxjQUFjLEVBQUE7O0FBS3BCO0VDM0pFLFdENEowQjtFQzNKMUIsV0QySmdDLEVBQUE7RUFEbEM7SUFHSSxjQUFjLEVBQUE7O0FBSWxCO0VDN0pFLGFBQWE7RUFDYixtQkQ2SndCO0VDNUp4Qix1QkQ0SmdDO0VDM0poQyxpQkQySndDO0VBQ3hDLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VDdEs1QixZRHVLMkI7RUN0SzNCLFdEc0tpQyxFQUFBOztBQUduQztFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VDL0taLFlEZ0wyQjtFQy9LM0IsVUQrS2dDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFxcdCNGOUY1RjE7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDV2bWluO1xcbiAgbWFyZ2luOiBub25lO1xcbiAgJiBpbWd7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgNyUpO1xcbiAgfVxcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuNXZtaW47XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjojRkJGQkY4O1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTh2aDtcXG4gIHdpZHRoOiA5OSU7XFxufVxcblxcbi51c2VyLW5hbWV7XFxuICBsaW5lLWhlaWdodDogMXZtaW47XFxufVxcblxcbi50cmF2ZWxlci10eXBle1xcbiAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbn1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgZmxleC1zdGFydCwgbm93cmFwKTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5wcm9mLXBpY3tcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgNzUlKTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMzAlLCAxMDAlKTtcXG59XFxuXFxuLnNpZGViYXItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIuOHZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG4gICYgaW1nIHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAyMCUpO1xcbiAgfVxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjJ2bWluO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgJiBpbWcge1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2lkZWJhci1idG4tYXJlYSB7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDIwJSwgMTAwJSk7XFxufVxcblxcbi5uZXctdHJpcC1mb3JtIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIHNwYWNlLWFyb3VuZCwgbm93cmFwKTtcXG4gICYgaW5wdXQge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDgwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxuICB9XFxufVxcblxcbi5wZW5kaW5nIHtcXG4gIGNvbG9yOiAjRjlEMUNCO1xcbn1cXG5cXG5tYWluIHtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgZmxleC1zdGFydCwgbm93cmFwKTtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udHJpcC1saXN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnRyaXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygyMiUsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgJiAuZGV0YWlsc3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbiAgfVxcbiAgJiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRvcDogMSU7XFxuICAgIGJvdHRvbTogMSU7XFxuICAgICYgLmluZm8tYmxvY2sge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgICAgIG9wYWNpdHk6IDg1JTtcXG4gICAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDI1JSk7XFxuICAgIH1cXG4gIH1cXG4gICYgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygxMDAlLCAxMDAlKTtcXG4gIH1cXG4gICY6aG92ZXIge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDQwJSwgMTAwJSk7XFxuICAgICYgLmRldGFpbHMge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50cmlwOmZvY3VzLXdpdGhpbiB7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDQwJSwgMTAwJSk7XFxuICAmIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5wcmV2aWV3e1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIG5vd3JhcCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJSA5MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygzNTAlLCAxMDAlKTtcXG59XFxuXFxuLmNvc3QtZGV0YWlsc3tcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDg1JTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG59XFxuXCIsXCJAbWl4aW4gc2V0RGltZW5zaW9ucygkaGVpZ2h0LCAkd2lkdGgpIHtcXG4gIGhlaWdodDogJGhlaWdodDtcXG4gIHdpZHRoOiAkd2lkdGg7XFxufVxcblxcbkBtaXhpbiBkaXNwbGF5RmxleCgkZmxleC1kaXJlY3Rpb24sICRqdXN0aWZ5LWNvbnRlbnQsICRmbGV4LXdyYXApIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xcbiAgZmxleC13cmFwOiAkZmxleC13cmFwXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRhdGFPYmplY3QpIHtcbiAgICB0aGlzLmlkID0gZGF0YU9iamVjdC5pZDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGF0YU9iamVjdC5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGF0YU9iamVjdC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICB0aGlzLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gPSBkYXRhT2JqZWN0LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgdGhpcy5pbWFnZSA9IGRhdGFPYmplY3QuaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBkYXRhT2JqZWN0LmFsdDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uXG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5pZCA9IGRhdGFPYmplY3QuaWRcbiAgICB0aGlzLnVzZXJJRCA9IGRhdGFPYmplY3QudXNlcklEXG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gZGF0YU9iamVjdC5kZXN0aW5hdGlvbklEXG4gICAgdGhpcy50cmF2ZWxlcnMgPSBkYXRhT2JqZWN0LnRyYXZlbGVyc1xuICAgIHRoaXMuZGF0ZSA9IGRhdGFPYmplY3QuZGF0ZVxuICAgIHRoaXMuZHVyYXRpb24gPSBkYXRhT2JqZWN0LmR1cmF0aW9uXG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhT2JqZWN0LnN0YXR1c1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IGRhdGFPYmplY3Quc3VnZ2VzdGVkQWN0aXZpdGllc1xuICAgIHRoaXMuY29zdCA9IHRoaXMuY2FsY3VsYXRlQ29zdChkZXN0aW5hdGlvbnMpXG4gIH1cblxuICBmaW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09PSB0aGlzLmRlc3RpbmF0aW9uSUQpO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdChkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucyk7XG4gICAgY29uc3QgZmxpZ2h0Q29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0aGlzLnRyYXZlbGVycztcbiAgICBjb25zdCBsb2RnaW5nQ29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdGhpcy50cmF2ZWxlcnMgKiB0aGlzLmR1cmF0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICBiZWZvcmVBZ2VudDogZmxpZ2h0Q29zdCArIGxvZGdpbmdDb3N0LFxuICAgICAgYWZ0ZXJBZ2VudDogTWF0aC5jZWlsKDEuMSAqIChmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVyblN0YXR1c0luZm8oKSB7XG4gICAgaWYodGhpcy5zdGF0dXMgPT09ICdwZW5kaW5nJyl7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0dXNcbiAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgbmV3IERhdGUodGhpcy5kYXRlKS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAndXBjb21pbmcnXG4gICAgfSBlbHNlIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0aGlzLmRhdGUpLmdldFRpbWUoKSsoMTAwMCAqIDYwICogNjAgKiAyNCAqIHRoaXMuZHVyYXRpb24pKSB7XG4gICAgICByZXR1cm4gJ2luIHByb2dyZXNzJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Bhc3QnXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBcbiIsImltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCdcblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyRGF0YSwgdHJpcERhdGEsIGRlc3RpbmF0aW9ucykge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlckRhdGEuaWRcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlckRhdGEubmFtZVxuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXJEYXRhLnRyYXZlbGVyVHlwZVxuICAgIHRoaXMudHJpcHMgPSB0aGlzLmdlbmVyYXRlVHJpcHModHJpcERhdGEsIGRlc3RpbmF0aW9ucylcbiAgfVxuXG4gIGdlbmVyYXRlVHJpcHModHJpcERhdGEsIGRlc3RpbmF0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnNvcnRCeURhdGUodGhpcy5maWx0ZXJUcmlwRGF0YSh0cmlwRGF0YSkpLm1hcChkYXRhID0+IG5ldyBUcmlwKGRhdGEsIGRlc3RpbmF0aW9ucykpO1xuICB9XG5cbiAgZmlsdGVyVHJpcERhdGEodHJpcERhdGEpIHtcbiAgICByZXR1cm4gdHJpcERhdGEuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpO1xuICB9XG5cbiAgc29ydEJ5RGF0ZSh0cmlwRGF0YSkge1xuICAgIHRyaXBEYXRhLmZvckVhY2godHJpcCA9PiB0cmlwLmRhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpKTtcbiAgICByZXR1cm4gdHJpcERhdGEuc29ydCgoYSwgYikgPT4gYi5kYXRlIC0gYS5kYXRlKTtcbiAgfVxuXG4gIHJldHVyblRyaXBzQnlTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cblxuICByZXR1cm5Ucmlwc1RoaXNZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB0cmlwLmRhdGUuZ2V0RnVsbFllYXIoKSkgPD0gMSk7XG4gIH1cblxuICBnZXRDb3N0Rm9yWWVhcigpIHtcbiAgcmV0dXJuIHRoaXMucmV0dXJuVHJpcHNUaGlzWWVhcigpLnJlZHVjZSgodG90YWxDb3N0LCB0cmlwKSA9PiB7XG4gICAgdG90YWxDb3N0ICs9IHRyaXAuY29zdC5hZnRlckFnZW50O1xuICAgIHJldHVybiB0b3RhbENvc3Q7XG4gIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBkb21VcGRhdGVzID0ge1xuXG4gIGRpc3BsYXlUcmlwKHRyaXAsIGRlc3RpbmF0aW9ucywgdHJpcExpc3QpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRyaXAuZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucyk7XG5cbiAgICB0cmlwTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgYDxhcnRpY2xlIGNsYXNzPVwidHJpcFwiPlxuICAgICAgPGJ1dHRvbj5cbiAgICAgICAgPGltZyBzcmM9XCIke2Rlc3RpbmF0aW9uLmltYWdlfVwiICBhbHQ9XCIke2Rlc3RpbmF0aW9uLmFsdH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYmxvY2tcIj5cbiAgICAgICAgICA8aDI+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L2gyPlxuICAgICAgICAgIDxoMyBjbGFzcz1cIiR7dHJpcC5yZXR1cm5TdGF0dXNJbmZvKCl9XCI+JHt0cmlwLnJldHVyblN0YXR1c0luZm8oKX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICA8cD5zdGFydCBkYXRlOiAgJHt0cmlwLmRhdGUudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgPHA+ZHVyYXRpb246ICAke3RyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICA8cD50cmF2ZWxlcnM6ICAgJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICA8cD5jb3N0OiAgJCR7dHJpcC5jYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucykuYWZ0ZXJBZ2VudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2FydGljbGU+YCk7XG4gIH0sXG5cbiAgY2xlYXJUcmlwcyh0cmlwTGlzdCkge1xuICAgIHRyaXBMaXN0LmlubmVySFRNTCA9ICcnXG4gIH0sXG5cbiAgZGlzcGxheVNpZGViYXIodXNlciwgc2lkZWJhcil7XG4gICAgc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgIGA8aW1nIGNsYXNzPVwicHJvZi1waWNcIiBzcmM9XCIuL2ltYWdlcy9wcm9mcGljLnBuZ1wiIGFsdD1cInVzZXIncyBwcm9maWxlIHBpY3R1cmVcIj5cbiAgICA8aDEgY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3VzZXIubmFtZX08L2gxPlxuICAgIDxoMiBjbGFzcz1cInRyYXZlbGVyLXR5cGVcIj4ke3VzZXIudHJhdmVsZXJUeXBlfTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItY29udGVudCB3ZWxjb21lLW1lc3NhZ2VcIj5cbiAgICAgIDxoMz5XZWxjb21lIGJhY2ssIHRyYXZlbGVyIVxuICAgICAgPGJyPiAtLS0tLS0tLS1cbiAgICAgIDxicj5BcHByb3ZlZCBUcmlwczogJHt1c2VyLnJldHVyblRyaXBzQnlTdGF0dXMoJ2FwcHJvdmVkJykubGVuZ3RofVxuICAgICAgPGJyPiAtLS0tLS0tLS1cbiAgICAgIDxicj5QZW5kaW5nIFRyaXBzOiAke3VzZXIucmV0dXJuVHJpcHNCeVN0YXR1cygncGVuZGluZycpLmxlbmd0aH1cbiAgICAgIDxicj4gLS0tLS0tLS0tXG4gICAgICA8YnI+SW4gdGhlIHBhc3QgeWVhciB5b3UndmUgc3BlbnQgJCR7dXNlci5nZXRDb3N0Rm9yWWVhcigpfSBvbiBUcmF2ZWw8L2gzPlxuICAgIDwvZGl2PmApXG4gIH0sXG5cbiAgZGlzcGxheU5ld1RyaXBGb3JtKGRlc3RpbmF0aW9ucykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1mb3JtJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgPHNlbGVjdCBjbGFzcz1cImRlc3RpbmF0aW9uLWxpc3RcIiBuYW1lPVwiXCI+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0cmlwLXN0YXJ0XCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRyaXAtZW5kXCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwibnVtLXRyYXZlbGVyc1wiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIj5cbiAgICA8aDM+PC9oMz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay10cmlwLWJ1dHRvblwiPmJvb2sgaXQ8L2J1dHRvbj5gKTtcblxuICAgIHRoaXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhkZXN0aW5hdGlvbnMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JykpO1xuICB9LFxuXG4gIGNsZWFyTmV3VHJpcEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLWZvcm0nKS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbkxpc3QpIHtcbiAgICBkZXN0aW5hdGlvbnMuc29ydCgoYSwgYikgPT4gYS5kZXN0aW5hdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzdGluYXRpb24pKS5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIHZhbHVlPVwiJHtkZXN0aW5hdGlvbi5pZH1cIj4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvb3B0aW9uPmApO1xuICAgIH0pO1xuICB9LFxuXG4gIGRpc3BsYXlQZW5kaW5nTWVzc2FnZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1tZXNzYWdlJykuaW5uZXJIVE1MID0gJ3NlbGVjdCBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSBhbmQgd2VcXCdsbCBjYWxjdWxhdGUgdGhlIGNvc3QnXG4gIH0sXG5cbiAgZGlzcGxheUNvc3RNZXNzYWdlKHRyaXApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1tZXNzYWdlJykuaW5uZXJIVE1MID0gYCQke3RyaXAuY29zdC5iZWZvcmVBZ2VudH0gKyAxMCUgYWdlbnQgZmVlID0gJCR7dHJpcC5jb3N0LmFmdGVyQWdlbnR9YFxuICB9LFxuXG4gIHVwZGF0ZVByZXZpZXcoZGVzdGluYXRpb25QcmV2aWV3LCBkZXN0aW5hdGlvbkxpc3QsIGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IHByZXZpZXcgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PSBkZXN0aW5hdGlvbkxpc3QudmFsdWUpXG4gICAgZGVzdGluYXRpb25QcmV2aWV3LmlubmVySFRNTCA9XG4gICAgYDxkaXYgY2xhc3M9XCJwcmV2aWV3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcmV2aWV3LmltYWdlfSk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29zdC1kZXRhaWxzXCJcbiAgICAgICAgPGgxPiR7cHJldmlldy5kZXN0aW5hdGlvbn08L2gxPlxuICAgICAgICA8aDI+Um91bmQgVHJpcCBBaXJmYXJlIFBlciBQZXJzb246ICQke3ByZXZpZXcuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbn08L2gyPlxuICAgICAgICA8aDI+TG9kZ2luZyBDb3N0IFBlciBQZXJzb24gUGVyIERheTogJCR7cHJldmlldy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiY29uc3QgZmV0Y2hSZXF1ZXN0cyA9IHtcbiAgZ2V0VHJhdmVsZXIoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7aWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxuXG4gIGdldFRyaXBzKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcblxuICBnZXREZXN0aW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2Rlc3RpbmF0aW9ucycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcblxuICBnZXRBbGxEYXRhKGlkKSB7XG4gICAgcmV0dXJuIFtmZXRjaFJlcXVlc3RzLmdldFRyYXZlbGVyKGlkKSwgZmV0Y2hSZXF1ZXN0cy5nZXRUcmlwcygpLCBmZXRjaFJlcXVlc3RzLmdldERlc3RpbmF0aW9ucygpXVxuICB9LFxuXG4gIHBvc3RUcmlwKG9iaikge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFJlcXVlc3RzXG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9nbG9iZS1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21hcC1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpY2tldC1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Byb2ZwaWMucG5nXCI7IiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCc7XG5pbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9EZXN0aW5hdGlvbic7XG5cbmltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Byb2ZwaWMucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXJyb3cucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy9tYXAtaWNvbi5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2ljb25zL3RpY2tldC1pY29uLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvZ2xvYmUtaWNvbi5wbmcnXG5cbmxldCB1c2VyO1xubGV0IGRlc3RpbmF0aW9ucztcblxuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLXBhZ2UnKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHBsYW5UcmlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdHJpcC1idXR0b24nKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IHRyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtbGlzdCcpO1xuY29uc3QgZGVzdGluYXRpb25QcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXcnKTtcblxuY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1zdGFydCcpO1xuY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtZW5kJyk7XG5jb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10cmlwLWZvcm1fX2lucHV0Jyk7XG5jb25zdCBkZXN0aW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpXG5jb25zdCB0cmF2ZWxlcnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW0tdHJhdmVsZXJzJyk7XG5jb25zdCBib29rVHJpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAtYnV0dG9uJyk7XG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnV0dG9uJylcblxubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaEFuZExvYWREYXRhTW9kZWwpXG5zdGFydERhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNldEVuZE1pbilcbmZvcm1JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBhZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUZvcm1ET00pKVxucGxhblRyaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtVmlldylcbmJvb2tUcmlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9va1RyaXApO1xuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm1WaWV3KVxuXG5mdW5jdGlvbiBmZXRjaEFuZExvYWREYXRhTW9kZWwoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICBjb25zdCB1c2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gIGNvbnN0IGlkID0gdXNlcm5hbWUubWF0Y2goL1xcZCsvKVswXVxuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG5cbiAgUHJvbWlzZS5hbGwoZmV0Y2hSZXF1ZXN0cy5nZXRBbGxEYXRhKGlkKSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgaWYgKGNoZWNrTG9naW5DcmVkZW50aWFscyhyZXNwb25zZXNbMF0sIHVzZXJuYW1lLCBwYXNzd29yZCwgaWQpKSB7XG4gICAgICAgIGluaXRpYWxpemVET00ocmVzcG9uc2VzWzBdLCByZXNwb25zZXNbMV0sIHJlc3BvbnNlc1syXSlcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VzWzBdLm1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQoJ0xPR0lOIEZBSUxFRFxcbmludmFsaWQgdXNlcm5hbWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHBhc3N3b3JkJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2xhc3Nlcyh1c2VyRGF0YSwgdHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLm1hcChkYXRhID0+IG5ldyBEZXN0aW5hdGlvbihkYXRhKSk7XG4gIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSwgdHJpcERhdGEudHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cblxuZnVuY3Rpb24gY2hlY2tMb2dpbkNyZWRlbnRpYWxzKHJlc3BvbnNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIGlkKSB7XG4gIGlmKHVzZXJuYW1lID09PSBgdHJhdmVsZXIke2lkfWAgJiYgcGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIwJyAmJiByZXNwb25zZS5pZCA9PSBpZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVHJpcHMoKSB7XG4gIHVzZXIudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwKHRyaXAsIGRlc3RpbmF0aW9ucywgdHJpcExpc3QpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtVmlldygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtbWVzc2FnZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBwbGFuVHJpcEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLWZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYm9va1RyaXBCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGRlc3RpbmF0aW9uUHJldmlldy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgdHJpcExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGJhY2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGlmKHRyaXBMaXN0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICBkb21VcGRhdGVzLnVwZGF0ZVByZXZpZXcoZGVzdGluYXRpb25QcmV2aWV3LCBkZXN0aW5hdGlvbkxpc3QsIGRlc3RpbmF0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYm9va1RyaXAoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBmZXRjaFJlcXVlc3RzLmdldFRyaXBzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgZmV0Y2hSZXF1ZXN0cy5wb3N0VHJpcChnZXRPYmplY3RGcm9tSW5wdXRzKHJlc3BvbnNlKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFsbERhdGEodXNlci5pZCkpLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgZ2VuZXJhdGVDbGFzc2VzKHJlc3BvbnNlc1swXSwgcmVzcG9uc2VzWzFdLCByZXNwb25zZXNbMl0pO1xuICAgICAgICBkaXNwbGF5VHJpcHMoKTtcbiAgICAgICAgdG9nZ2xlRm9ybVZpZXcoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBzKCkge1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcHModHJpcExpc3QpXG4gIGRpc3BsYXlBbGxUcmlwcygpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRE9NKHVzZXJEYXRhLCByZWNpcGVEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgZ2VuZXJhdGVDbGFzc2VzKHVzZXJEYXRhLCByZWNpcGVEYXRhLCBkZXN0aW5hdGlvbkRhdGEpXG4gIGRpc3BsYXlUcmlwcygpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVNpZGViYXIodXNlciwgc2lkZWJhcik7XG4gIGxvZ2luUGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgc2V0U3RhcnRNaW4oKVxuICBwbGFuVHJpcEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICBkb21VcGRhdGVzLmRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpKVxufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RGcm9tSW5wdXRzKHRyaXBzKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHRyaXBzLnRyaXBzLmxlbmd0aCArIDEsXG4gICAgdXNlcklEOiB1c2VyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IHBhcnNlSW50KGRlc3RpbmF0aW9uTGlzdC52YWx1ZSksXG4gICAgdHJhdmVsZXJzOiB0cmF2ZWxlcnNJbnB1dC52YWx1ZSxcbiAgICBkYXRlOiBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApLnJlcGxhY2VBbGwoJy0nLCAnLycpLFxuICAgIGR1cmF0aW9uOiAobmV3IERhdGUoZW5kRGF0ZUlucHV0LnZhbHVlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkuZ2V0VGltZSgpKS8oMTAwMCo2MCo2MCoyNCksXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldEVuZE1pbigpIHtcbiAgbGV0IG5leHREYXkgPSBuZXcgRGF0ZSgpO1xuICBuZXh0RGF5LnNldERhdGUobmV3IERhdGUoc3RhcnREYXRlSW5wdXQudmFsdWUpLmdldERhdGUoKSArIDEpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBuZXh0RGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWluKCkge1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRm9ybURPTSgpIHtcbiAgaWYgKHN0YXJ0RGF0ZUlucHV0LnZhbHVlICYmIGVuZERhdGVJbnB1dC52YWx1ZSkge1xuICAgIGNvbnN0IHRyaXAgPSBuZXcgVHJpcChnZXRPYmplY3RGcm9tSW5wdXRzKHt0cmlwczogW119KSwgZGVzdGluYXRpb25zKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNvc3RNZXNzYWdlKHRyaXApXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGVuZGluZ01lc3NhZ2UoKTtcbiAgfVxuXG4gIGRvbVVwZGF0ZXMudXBkYXRlUHJldmlldyhkZXN0aW5hdGlvblByZXZpZXcsIGRlc3RpbmF0aW9uTGlzdCwgZGVzdGluYXRpb25zKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==