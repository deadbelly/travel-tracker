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
___CSS_LOADER_EXPORT___.push([module.i, "main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 70%;\n  overflow: hidden;\n  text-align: center; }\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll; }\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 22%;\n  width: 100%;\n  transition: .8s ease;\n  overflow: hidden; }\n  .trip:hover, .trip:focus-within {\n    height: 40%;\n    width: 100%; }\n    .trip:hover .trip__info-block--details, .trip:focus-within .trip__info-block--details {\n      display: block; }\n\n.trip__img {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%; }\n\n.trip--wrapper {\n  background: none;\n  border: none;\n  top: 1%;\n  bottom: 1%; }\n\n.trip__info-block {\n  font-family: \"Lato\", sans-serif;\n  position: absolute;\n  bottom: 5%;\n  right: 3%;\n  background-color: black;\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n\n.trip__info-block--details {\n  display: none;\n  font-size: 2vmin;\n  text-align: left;\n  line-height: 1vmin; }\n\n.pending {\n  color: #F9D1CB; }\n\n.preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 350%;\n  width: 100%; }\n\n.cost-details {\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n\n.login-page {\n  align-self: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 50%;\n  width: 50%;\n  text-align: center;\n  margin-left: 25%; }\n\n.sidebar {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 30%; }\n\n.prof-pic {\n  position: relative;\n  height: auto;\n  width: 75%; }\n\n.sidebar-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 30%;\n  width: 100%; }\n\n.sidebar-btn-area {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 20%;\n  width: 100%; }\n\n.user-name, .traveler-type {\n  line-height: 1vmin; }\n\n.new-trip-form {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: nowrap; }\n  .new-trip-form input {\n    height: auto;\n    width: 80%;\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin; }\n\n@media only screen and (min-width: 740px) {\n  body {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: nowrap; }\n  h3 {\n    font-size: 2.5vmin; } }\n\n@media only screen and (max-width: 1024px) {\n  .trip__info-block {\n    height: auto;\n    width: 50%; } }\n\n@media only screen and (max-width: 740px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr; }\n  p, .pending, h3 {\n    font-size: 2vmin; }\n  .sidebar {\n    height: auto;\n    width: 100%; }\n  .prof-pic {\n    height: auto;\n    width: 20%; }\n  main {\n    height: auto;\n    width: 100%; }\n  .plan-trip-button {\n    height: auto;\n    width: 50%; }\n  .trip {\n    height: 50%;\n    width: 100%; }\n    .trip:hover, .trip:focus-within {\n      height: 70%;\n      width: 100%; }\n  .trip__img {\n    height: 100%;\n    width: auto; }\n  .desktop-title {\n    display: none; }\n  .preview {\n    display: none; } }\n\n@media only screen and (max-width: 450px) {\n  p, .pending, h3 {\n    font-size: 4vmin; } }\n\nhtml {\n  background-color: #F9F5F1;\n  font-family: \"Lato\", sans-serif; }\n\nh1 {\n  font-size: 5vmin;\n  margin: none; }\n  h1 img {\n    height: auto;\n    width: 7%; }\n\nbody {\n  background-color: #FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  height: 98vh;\n  width: 99%; }\n\n#blockColorblindContent {\n  display: none; }\n\n.hidden {\n  display: none !important; }\n\n.new-trip-form {\n  height: 80%;\n  width: 100%; }\n\nbutton {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%; }\n  button img {\n    height: auto;\n    width: 20%; }\n  button:hover {\n    transition: .4s ease;\n    cursor: pointer;\n    font-size: 3.2vmin; }\n    button:hover img {\n      height: auto;\n      width: 25%;\n      transition: .4s ease; }\n", "",{"version":3,"sources":["webpack://./src/css/_main.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login-page.scss","webpack://./src/css/_sidebar.scss","webpack://./src/css/_media-queries.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["main {\n  @include displayFlex(column, flex-start, nowrap);\n  width: 70%;\n  overflow: hidden;\n  text-align: center;\n}\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll;\n}\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  @include setDimensions(22%, 100%);\n  transition: .8s ease;\n  overflow: hidden;\n  &:hover, &:focus-within{\n    @include setDimensions(40%, 100%);\n    & .trip__info-block--details {\n      display: block;\n    }\n  }\n}\n\n.trip__img {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  @include setDimensions(100%, 100%);\n}\n\n.trip--wrapper {\n  background: none;\n  border: none;\n  top: 1%;\n  bottom: 1%;\n}\n\n.trip__info-block {\n  font-family: \"Lato\", sans-serif;\n  position: absolute;\n  bottom: 5%;\n  right: 3%;\n  background-color: $block-color;\n  color: $block-font-color;\n  padding-left: 5%;\n  padding-right: 5%;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n\n.trip__info-block--details{\n  display: none;\n  font-size: 2vmin;\n  text-align: left;\n  line-height: 1vmin;\n}\n\n.pending {\n  color: $pending-color;\n}\n\n.preview{\n  @include displayFlex(row, center, nowrap);\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  @include setDimensions(350%, 100%);\n}\n\n.cost-details{\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: $block-color;\n  color: $block-font-color;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n","$wash-color: #F9F5F1;\n$background-color: #FBFBF8;\n$pending-color: #F9D1CB;\n$block-color: black;\n$block-font-color: white;\n\n\n@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n",".login-page{\n  align-self: center;\n  align-items: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(50%, 50%);\n  text-align: center;\n  margin-left: 25%;\n}\n",".sidebar {\n  align-items: center;\n  @include displayFlex(column, flex-start, nowrap);\n  width: 30%;\n}\n\n.prof-pic{\n  position: relative;\n  @include setDimensions(auto, 75%);\n}\n\n.sidebar-content {\n  text-align: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(30%, 100%);\n}\n\n.sidebar-btn-area {\n  @include displayFlex(row-reverse, center, nowrap);\n  @include setDimensions(20%, 100%);\n}\n\n.user-name, .traveler-type{\n  line-height: 1vmin;\n}\n\n.new-trip-form {\n  align-items: center;\n  @include displayFlex(column, space-around, nowrap);\n  & input {\n    @include setDimensions(auto, 80%);\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin;\n  }\n}\n","@media only screen and (min-width: 740px) {\n  body {\n    @include displayFlex(row, flex-start, nowrap);\n  }\n\n  h3 {\n    font-size: 2.5vmin;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .trip__info-block {\n    @include setDimensions(auto, 50%);\n  }\n}\n\n@media only screen and (max-width: 740px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  p, .pending, h3 {\n    font-size: 2vmin;\n  }\n\n  .sidebar {\n    @include setDimensions(auto, 100%);\n  }\n\n  .prof-pic{\n    @include setDimensions(auto, 20%);\n  }\n\n  main {\n    @include setDimensions(auto, 100%);\n  }\n\n  .plan-trip-button {\n    @include setDimensions(auto, 50%);\n  }\n\n  .trip {\n    @include setDimensions(50%, 100%);\n    &:hover, &:focus-within{\n      @include setDimensions(70%, 100%);\n    }\n  }\n\n  .trip__img{\n    @include setDimensions(100%, auto);\n  }\n\n  .desktop-title {\n    display: none;\n  }\n\n  .preview {\n  display: none;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  p, .pending, h3 {\n    font-size: 4vmin;\n  }\n}\n","@import 'variables';\n@import 'main';\n@import 'login-page';\n@import 'sidebar';\n@import 'media-queries';\n\nhtml {\n  background-color: \t$wash-color;\n  font-family: \"Lato\", sans-serif;\n}\n\nh1 {\n  font-size: 5vmin;\n  margin: none;\n  & img{\n    @include setDimensions(auto, 7%);\n  }\n}\n\nbody {\n  background-color: $background-color;\n  opacity: 95%;\n  align-self: center;\n  height: 98vh;\n  width: 99%;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.new-trip-form {\n  @include setDimensions(80%, 100%);\n}\n\nbutton {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%;\n  & img {\n    @include setDimensions(auto, 20%);\n  }\n  &:hover {\n    transition: .4s ease;\n    cursor: pointer;\n    font-size: 3.2vmin;\n    & img {\n      @include setDimensions(auto, 25%);\n      transition: .4s ease;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

  filterByPending(tripsArray) {
    return tripsArray.filter(trip => trip.status === 'pending');
  }

  filterByThisYear(tripsArray) {
    return tripsArray.filter(trip => (new Date().getFullYear() - trip.date.getFullYear()) <= 1);
  }

  getCostForYear() {
  return this.filterByThisYear(this.filterByPending(this.trips)).reduce((totalCost, trip) => {
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
    `<article aria-label="trip-details" class="trip">
      <div tabindex="0" class="trip--wrapper">
        <img class="trip__img" src="${destination.image}"  alt="${destination.alt}">
        <div class="trip__info-block">
          <h2>${destination.destination}</h2>
          <h3 class="${trip.returnStatusInfo()}">${trip.returnStatusInfo()}</h3>
          <div class="trip__info-block--details">
            <p>start date:  ${trip.date.toDateString()}</p>
            <p>duration:  ${trip.duration} days</p>
            <p>travelers:   ${trip.travelers}</p>
            <p>cost:  $${trip.calculateCost(destinations).afterAgent}</p>
          </div>
        <div>
      </div>
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
      <br>Approved Trips: ${user.trips.length - user.filterByPending(user.trips).length}
      <br> ---------
      <br>Pending Trips: ${user.filterByPending(user.trips).length}
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
  },

  displayLoginError(error) {
    document.querySelector('.login-errors').innerText = error;
  },

  displayFormError(error) {
    document.querySelector('.cost-message').innerText = error
  },

  clearErrors(){
    document.querySelector('.cost-message').innerText = 'waiting to calculate cost...'
    document.querySelector('.login-errors').innerText = ''
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
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");



const fetchRequests = {
  getTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayLoginError(err));
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
      .catch(err => {
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayLoginError(err)
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayFormError(err)
      });
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayLoginError(err));
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
    .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayFormError(err));
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

/***/ "./src/images/icons/suitcase-icon.png":
/*!********************************************!*\
  !*** ./src/images/icons/suitcase-icon.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/suitcase-icon.png");

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
/* harmony import */ var _images_icons_suitcase_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/icons/suitcase-icon.png */ "./src/images/icons/suitcase-icon.png");















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
const travelersInput = document.querySelector('.number-of-travelers');
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

  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].getAllData(checkLoginCredentials()))
    .then(responses => {
      if (!responses[0].message) {
        initializeDOM(responses[0], responses[1], responses[2])
      } else {
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayLoginError('LOGIN FAILED\ninvalid username');
      }
  });
}

function generateClasses(userData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new _Destination__WEBPACK_IMPORTED_MODULE_2__["default"](data));
  user = new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userData, tripData.trips, destinations);
}


function checkLoginCredentials() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  let id;

  if (username.match(/\d+/) !== null) {
    id = username.match(/\d+/)[0]
  }

  if(!id || username !== `traveler${id}`) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayLoginError('LOGIN FAILED\ninvalid username');
  } else if (!password === 'travel2020') {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayLoginError('LOGIN FAILED\ninvalid password');
  } else {
    return id
  }
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayTrip(trip, destinations, tripList);
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
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].clearErrors();
  if(tripList.classList.contains('hidden')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].updatePreview(destinationPreview, destinationList, destinations);
  }
}

function bookTrip() {
  event.preventDefault()
  if (!startDateInput.value || !endDateInput.value) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayFormError('please fill out all required inputs');
  }
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
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].clearTrips(tripList);
  displayAllTrips();
}

function initializeDOM(userData, recipeData, destinationData) {
  generateClasses(userData, recipeData, destinationData);
  displayTrips();
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displaySidebar(user, sidebar);
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  setStartMin();
  planTripButton.classList.toggle('hidden');
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayDestinationOptions(destinations, document.querySelector('.destination-list'));
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
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].updatePreview(destinationPreview, destinationList, destinations)
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pY29ucy9nbG9iZS1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL21hcC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL3N1aXRjYXNlLWljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaWNvbnMvdGlja2V0LWljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcHJvZnBpYy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJLHNCQUFzQixVQUFVO0FBQ3pELElBQUksbURBQVU7QUFDZDtBQUNBLEVBQUUsbURBQVU7QUFDWiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJtYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50cmlwLWxpc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuXFxuLnRyaXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyMiU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLnRyaXA6aG92ZXIsIC50cmlwOmZvY3VzLXdpdGhpbiB7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAudHJpcDpob3ZlciAudHJpcF9faW5mby1ibG9jay0tZGV0YWlscywgLnRyaXA6Zm9jdXMtd2l0aGluIC50cmlwX19pbmZvLWJsb2NrLS1kZXRhaWxzIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmlwX19pbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnRyaXAtLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRvcDogMSU7XFxuICBib3R0b206IDElOyB9XFxuXFxuLnRyaXBfX2luZm8tYmxvY2sge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNSU7XFxuICByaWdodDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gIG9wYWNpdHk6IDg1JTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyNSU7IH1cXG5cXG4udHJpcF9faW5mby1ibG9jay0tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAydm1pbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMXZtaW47IH1cXG5cXG4ucGVuZGluZyB7XFxuICBjb2xvcjogI0Y5RDFDQjsgfVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDM1MCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb3N0LWRldGFpbHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1JTsgfVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjUlOyB9XFxuXFxuLnNpZGViYXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB3aWR0aDogMzAlOyB9XFxuXFxuLnByb2YtcGljIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA3NSU7IH1cXG5cXG4uc2lkZWJhci1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWJhci1idG4tYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udXNlci1uYW1lLCAudHJhdmVsZXItdHlwZSB7XFxuICBsaW5lLWhlaWdodDogMXZtaW47IH1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICAubmV3LXRyaXAtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydm1pbjsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMi41dm1pbjsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC50cmlwX19pbmZvLWJsb2NrIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cXG4gIHAsIC5wZW5kaW5nLCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47IH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnByb2YtcGljIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMjAlOyB9XFxuICBtYWluIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnBsYW4tdHJpcC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7IH1cXG4gIC50cmlwIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC50cmlwOmhvdmVyLCAudHJpcDpmb2N1cy13aXRoaW4ge1xcbiAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcF9faW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLmRlc2t0b3AtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAucHJldmlldyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIHAsIC5wZW5kaW5nLCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47IH0gfVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjVGMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDV2bWluO1xcbiAgbWFyZ2luOiBub25lOyB9XFxuICBoMSBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA3JTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGODtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogOTh2aDtcXG4gIHdpZHRoOiA5OSU7IH1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIuOHZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAzJTsgfVxcbiAgYnV0dG9uIGltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTsgfVxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjJ2bWluOyB9XFxuICAgIGJ1dHRvbjpob3ZlciBpbWcge1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9naW4tcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21lZGlhLXF1ZXJpZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUNhRSxhQUFhO0VBQ2Isc0JEYjJCO0VDYzNCLDJCRGR1QztFQ2V2QyxpQkRmK0M7RUFDL0MsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VDUGYsV0RRMEI7RUNQMUIsV0RPZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBO0VBTmxCO0lDSkUsV0RZNEI7SUNYNUIsV0RXa0MsRUFBQTtJQVJwQztNQVVNLGNBQWMsRUFBQTs7QUFLcEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUN2QmhD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TjdCLFNJTWlDLEVBQUE7O0FBSW5DO0VBQ0UseUJKbkJ3QjtFSW9CeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VKM0JFLFdJNEIwQjtFSjNCMUIsV0kyQmdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFKbkI7SUovQkUsWUlxQzZCO0lKcEM3QixVSW9Da0MsRUFBQTtFQU5wQztJQVNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7SUFYdEI7TUovQkUsWUk0QytCO01KM0MvQixVSTJDb0M7TUFDaEMsb0JBQW9CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIG5vd3JhcCk7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRyaXAtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50cmlwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMjIlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICY6aG92ZXIsICY6Zm9jdXMtd2l0aGlue1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDQwJSwgMTAwJSk7XFxuICAgICYgLnRyaXBfX2luZm8tYmxvY2stLWRldGFpbHMge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50cmlwX19pbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTAwJSwgMTAwJSk7XFxufVxcblxcbi50cmlwLS13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0b3A6IDElO1xcbiAgYm90dG9tOiAxJTtcXG59XFxuXFxuLnRyaXBfX2luZm8tYmxvY2sge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNSU7XFxuICByaWdodDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxvY2stY29sb3I7XFxuICBjb2xvcjogJGJsb2NrLWZvbnQtY29sb3I7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgcGFkZGluZy1yaWdodDogNSU7XFxuICBvcGFjaXR5OiA4NSU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDI1JSk7XFxufVxcblxcbi50cmlwX19pbmZvLWJsb2NrLS1kZXRhaWxze1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnZtaW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbn1cXG5cXG4ucGVuZGluZyB7XFxuICBjb2xvcjogJHBlbmRpbmctY29sb3I7XFxufVxcblxcbi5wcmV2aWV3e1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIG5vd3JhcCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJSA5MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygzNTAlLCAxMDAlKTtcXG59XFxuXFxuLmNvc3QtZGV0YWlsc3tcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxvY2stY29sb3I7XFxuICBjb2xvcjogJGJsb2NrLWZvbnQtY29sb3I7XFxuICBvcGFjaXR5OiA4NSU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDI1JSk7XFxufVxcblwiLFwiJHdhc2gtY29sb3I6ICNGOUY1RjE7XFxuJGJhY2tncm91bmQtY29sb3I6ICNGQkZCRjg7XFxuJHBlbmRpbmctY29sb3I6ICNGOUQxQ0I7XFxuJGJsb2NrLWNvbG9yOiBibGFjaztcXG4kYmxvY2stZm9udC1jb2xvcjogd2hpdGU7XFxuXFxuXFxuQG1peGluIHNldERpbWVuc2lvbnMoJGhlaWdodCwgJHdpZHRoKSB7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB3aWR0aDogJHdpZHRoO1xcbn1cXG5cXG5AbWl4aW4gZGlzcGxheUZsZXgoJGZsZXgtZGlyZWN0aW9uLCAkanVzdGlmeS1jb250ZW50LCAkZmxleC13cmFwKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcXG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcFxcbn1cXG5cIixcIi5sb2dpbi1wYWdle1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgY2VudGVyLCBub3dyYXApO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg1MCUsIDUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cIixcIi5zaWRlYmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIG5vd3JhcCk7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ucHJvZi1waWN7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDc1JSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBjZW50ZXIsIG5vd3JhcCk7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDMwJSwgMTAwJSk7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1hcmVhIHtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdy1yZXZlcnNlLCBjZW50ZXIsIG5vd3JhcCk7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDIwJSwgMTAwJSk7XFxufVxcblxcbi51c2VyLW5hbWUsIC50cmF2ZWxlci10eXBle1xcbiAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbn1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBzcGFjZS1hcm91bmQsIG5vd3JhcCk7XFxuICAmIGlucHV0IHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA4MCUpO1xcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbiAgfVxcbn1cXG5cIixcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGZsZXgtc3RhcnQsIG5vd3JhcCk7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMi41dm1pbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC50cmlwX19pbmZvLWJsb2NrIHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA1MCUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICBwLCAucGVuZGluZywgaDMge1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDEwMCUpO1xcbiAgfVxcblxcbiAgLnByb2YtcGlje1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDIwJSk7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAxMDAlKTtcXG4gIH1cXG5cXG4gIC5wbGFuLXRyaXAtYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA1MCUpO1xcbiAgfVxcblxcbiAgLnRyaXAge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDUwJSwgMTAwJSk7XFxuICAgICY6aG92ZXIsICY6Zm9jdXMtd2l0aGlue1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNzAlLCAxMDAlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXBfX2ltZ3tcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygxMDAlLCBhdXRvKTtcXG4gIH1cXG5cXG4gIC5kZXNrdG9wLXRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIHAsIC5wZW5kaW5nLCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdtYWluJztcXG5AaW1wb3J0ICdsb2dpbi1wYWdlJztcXG5AaW1wb3J0ICdzaWRlYmFyJztcXG5AaW1wb3J0ICdtZWRpYS1xdWVyaWVzJztcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFxcdCR3YXNoLWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1dm1pbjtcXG4gIG1hcmdpbjogbm9uZTtcXG4gICYgaW1ne1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDclKTtcXG4gIH1cXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogOTh2aDtcXG4gIHdpZHRoOiA5OSU7XFxufVxcblxcbiNibG9ja0NvbG9yYmxpbmRDb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDgwJSwgMTAwJSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyLjh2bWluO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICAmIGltZyB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjAlKTtcXG4gIH1cXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDMuMnZtaW47XFxuICAgICYgaW1nIHtcXG4gICAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDI1JSk7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIERlc3RpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHRoaXMuaWQgPSBkYXRhT2JqZWN0LmlkO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkYXRhT2JqZWN0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBkYXRhT2JqZWN0LmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgIHRoaXMuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IGRhdGFPYmplY3QuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICB0aGlzLmltYWdlID0gZGF0YU9iamVjdC5pbWFnZTtcbiAgICB0aGlzLmFsdCA9IGRhdGFPYmplY3QuYWx0O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25cbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0LCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gZGF0YU9iamVjdC5pZFxuICAgIHRoaXMudXNlcklEID0gZGF0YU9iamVjdC51c2VySURcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSBkYXRhT2JqZWN0LmRlc3RpbmF0aW9uSURcbiAgICB0aGlzLnRyYXZlbGVycyA9IGRhdGFPYmplY3QudHJhdmVsZXJzXG4gICAgdGhpcy5kYXRlID0gZGF0YU9iamVjdC5kYXRlXG4gICAgdGhpcy5kdXJhdGlvbiA9IGRhdGFPYmplY3QuZHVyYXRpb25cbiAgICB0aGlzLnN0YXR1cyA9IGRhdGFPYmplY3Quc3RhdHVzXG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gZGF0YU9iamVjdC5zdWdnZXN0ZWRBY3Rpdml0aWVzXG4gICAgdGhpcy5jb3N0ID0gdGhpcy5jYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucylcbiAgfVxuXG4gIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMpIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IHRoaXMuZGVzdGluYXRpb25JRCk7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5maW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKTtcbiAgICBjb25zdCBmbGlnaHRDb3N0ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRoaXMudHJhdmVsZXJzO1xuICAgIGNvbnN0IGxvZGdpbmdDb3N0ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLnRyYXZlbGVycyAqIHRoaXMuZHVyYXRpb247XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlZm9yZUFnZW50OiBmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QsXG4gICAgICBhZnRlckFnZW50OiBNYXRoLmNlaWwoMS4xICogKGZsaWdodENvc3QgKyBsb2RnaW5nQ29zdCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuU3RhdHVzSW5mbygpIHtcbiAgICBpZih0aGlzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgIHJldHVybiB0aGlzLnN0YXR1c1xuICAgIH0gZWxzZSBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPCBuZXcgRGF0ZSh0aGlzLmRhdGUpLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICd1cGNvbWluZydcbiAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZGF0ZSkuZ2V0VGltZSgpKygxMDAwICogNjAgKiA2MCAqIDI0ICogdGhpcy5kdXJhdGlvbikpIHtcbiAgICAgIHJldHVybiAnaW4gcHJvZ3Jlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncGFzdCdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFxuIiwiaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJ1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZFxuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lXG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlckRhdGEudHJhdmVsZXJUeXBlXG4gICAgdGhpcy50cmlwcyA9IHRoaXMuZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKVxuICB9XG5cbiAgZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydEJ5RGF0ZSh0aGlzLmZpbHRlclRyaXBEYXRhKHRyaXBEYXRhKSkubWFwKGRhdGEgPT4gbmV3IFRyaXAoZGF0YSwgZGVzdGluYXRpb25zKSk7XG4gIH1cblxuICBmaWx0ZXJUcmlwRGF0YSh0cmlwRGF0YSkge1xuICAgIHJldHVybiB0cmlwRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gIH1cblxuICBzb3J0QnlEYXRlKHRyaXBEYXRhKSB7XG4gICAgdHJpcERhdGEuZm9yRWFjaCh0cmlwID0+IHRyaXAuZGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkpO1xuICAgIHJldHVybiB0cmlwRGF0YS5zb3J0KChhLCBiKSA9PiBiLmRhdGUgLSBhLmRhdGUpO1xuICB9XG5cbiAgZmlsdGVyQnlQZW5kaW5nKHRyaXBzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJpcHNBcnJheS5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgfVxuXG4gIGZpbHRlckJ5VGhpc1llYXIodHJpcHNBcnJheSkge1xuICAgIHJldHVybiB0cmlwc0FycmF5LmZpbHRlcih0cmlwID0+IChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB0cmlwLmRhdGUuZ2V0RnVsbFllYXIoKSkgPD0gMSk7XG4gIH1cblxuICBnZXRDb3N0Rm9yWWVhcigpIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyQnlUaGlzWWVhcih0aGlzLmZpbHRlckJ5UGVuZGluZyh0aGlzLnRyaXBzKSkucmVkdWNlKCh0b3RhbENvc3QsIHRyaXApID0+IHtcbiAgICB0b3RhbENvc3QgKz0gdHJpcC5jb3N0LmFmdGVyQWdlbnQ7XG4gICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgZGlzcGxheVRyaXAodHJpcCwgZGVzdGluYXRpb25zLCB0cmlwTGlzdCkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdHJpcC5maW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKTtcblxuICAgIHRyaXBMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICBgPGFydGljbGUgYXJpYS1sYWJlbD1cInRyaXAtZGV0YWlsc1wiIGNsYXNzPVwidHJpcFwiPlxuICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInRyaXAtLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInRyaXBfX2ltZ1wiIHNyYz1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgIGFsdD1cIiR7ZGVzdGluYXRpb24uYWx0fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcF9faW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxoMj4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiJHt0cmlwLnJldHVyblN0YXR1c0luZm8oKX1cIj4ke3RyaXAucmV0dXJuU3RhdHVzSW5mbygpfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRyaXBfX2luZm8tYmxvY2stLWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwPnN0YXJ0IGRhdGU6ICAke3RyaXAuZGF0ZS50b0RhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICA8cD5kdXJhdGlvbjogICR7dHJpcC5kdXJhdGlvbn0gZGF5czwvcD5cbiAgICAgICAgICAgIDxwPnRyYXZlbGVyczogICAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgIDxwPmNvc3Q6ICAkJHt0cmlwLmNhbGN1bGF0ZUNvc3QoZGVzdGluYXRpb25zKS5hZnRlckFnZW50fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5gKTtcbiAgfSxcblxuICBjbGVhclRyaXBzKHRyaXBMaXN0KSB7XG4gICAgdHJpcExpc3QuaW5uZXJIVE1MID0gJydcbiAgfSxcblxuICBkaXNwbGF5U2lkZWJhcih1c2VyLCBzaWRlYmFyKXtcbiAgICBzaWRlYmFyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxpbWcgY2xhc3M9XCJwcm9mLXBpY1wiIHNyYz1cIi4vaW1hZ2VzL3Byb2ZwaWMucG5nXCIgYWx0PVwidXNlcidzIHByb2ZpbGUgcGljdHVyZVwiPlxuICAgIDxoMSBjbGFzcz1cInVzZXItbmFtZVwiPiR7dXNlci5uYW1lfTwvaDE+XG4gICAgPGgyIGNsYXNzPVwidHJhdmVsZXItdHlwZVwiPiR7dXNlci50cmF2ZWxlclR5cGV9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb250ZW50IHdlbGNvbWUtbWVzc2FnZVwiPlxuICAgICAgPGgzPldlbGNvbWUgYmFjaywgdHJhdmVsZXIhXG4gICAgICA8YnI+IC0tLS0tLS0tLVxuICAgICAgPGJyPkFwcHJvdmVkIFRyaXBzOiAke3VzZXIudHJpcHMubGVuZ3RoIC0gdXNlci5maWx0ZXJCeVBlbmRpbmcodXNlci50cmlwcykubGVuZ3RofVxuICAgICAgPGJyPiAtLS0tLS0tLS1cbiAgICAgIDxicj5QZW5kaW5nIFRyaXBzOiAke3VzZXIuZmlsdGVyQnlQZW5kaW5nKHVzZXIudHJpcHMpLmxlbmd0aH1cbiAgICAgIDxicj4gLS0tLS0tLS0tXG4gICAgICA8YnI+SW4gdGhlIHBhc3QgeWVhciB5b3UndmUgc3BlbnQgJCR7dXNlci5nZXRDb3N0Rm9yWWVhcigpfSBvbiBUcmF2ZWw8L2gzPlxuICAgIDwvZGl2PmApXG4gIH0sXG5cbiAgZGlzcGxheU5ld1RyaXBGb3JtKGRlc3RpbmF0aW9ucykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1mb3JtJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgPHNlbGVjdCBjbGFzcz1cImRlc3RpbmF0aW9uLWxpc3RcIiBuYW1lPVwiXCI+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0cmlwLXN0YXJ0XCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRyaXAtZW5kXCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwibnVtLXRyYXZlbGVyc1wiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIj5cbiAgICA8aDM+PC9oMz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay10cmlwLWJ1dHRvblwiPmJvb2sgaXQ8L2J1dHRvbj5gKTtcblxuICAgIHRoaXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhkZXN0aW5hdGlvbnMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JykpO1xuICB9LFxuXG4gIGNsZWFyTmV3VHJpcEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLWZvcm0nKS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbkxpc3QpIHtcbiAgICBkZXN0aW5hdGlvbnMuc29ydCgoYSwgYikgPT4gYS5kZXN0aW5hdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzdGluYXRpb24pKS5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIHZhbHVlPVwiJHtkZXN0aW5hdGlvbi5pZH1cIj4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvb3B0aW9uPmApO1xuICAgIH0pO1xuICB9LFxuXG4gIGRpc3BsYXlDb3N0TWVzc2FnZSh0cmlwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3QtbWVzc2FnZScpLmlubmVySFRNTCA9IGAkJHt0cmlwLmNvc3QuYmVmb3JlQWdlbnR9ICsgMTAlIGFnZW50IGZlZSA9ICQke3RyaXAuY29zdC5hZnRlckFnZW50fWBcbiAgfSxcblxuICB1cGRhdGVQcmV2aWV3KGRlc3RpbmF0aW9uUHJldmlldywgZGVzdGluYXRpb25MaXN0LCBkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBwcmV2aWV3ID0gZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT0gZGVzdGluYXRpb25MaXN0LnZhbHVlKVxuICAgIGRlc3RpbmF0aW9uUHJldmlldy5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGNsYXNzPVwicHJldmlld1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJldmlldy5pbWFnZX0pO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvc3QtZGV0YWlsc1wiXG4gICAgICAgIDxoMT4ke3ByZXZpZXcuZGVzdGluYXRpb259PC9oMT5cbiAgICAgICAgPGgyPlJvdW5kIFRyaXAgQWlyZmFyZSBQZXIgUGVyc29uOiAkJHtwcmV2aWV3LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb259PC9oMj5cbiAgICAgICAgPGgyPkxvZGdpbmcgQ29zdCBQZXIgUGVyc29uIFBlciBEYXk6ICQke3ByZXZpZXcuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXl9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmBcbiAgfSxcblxuICBkaXNwbGF5TG9naW5FcnJvcihlcnJvcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1lcnJvcnMnKS5pbm5lclRleHQgPSBlcnJvcjtcbiAgfSxcblxuICBkaXNwbGF5Rm9ybUVycm9yKGVycm9yKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3QtbWVzc2FnZScpLmlubmVyVGV4dCA9IGVycm9yXG4gIH0sXG5cbiAgY2xlYXJFcnJvcnMoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1tZXNzYWdlJykuaW5uZXJUZXh0ID0gJ3dhaXRpbmcgdG8gY2FsY3VsYXRlIGNvc3QuLi4nXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWVycm9ycycpLmlubmVyVGV4dCA9ICcnXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJpbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnXG5cblxuY29uc3QgZmV0Y2hSZXF1ZXN0cyA9IHtcbiAgZ2V0VHJhdmVsZXIoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7aWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luRXJyb3IoZXJyKSk7XG4gIH0sXG5cbiAgZ2V0VHJpcHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5TG9naW5FcnJvcihlcnIpXG4gICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUZvcm1FcnJvcihlcnIpXG4gICAgICB9KTtcbiAgfSxcblxuICBnZXREZXN0aW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2Rlc3RpbmF0aW9ucycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiBkb21VcGRhdGVzLmRpc3BsYXlMb2dpbkVycm9yKGVycikpO1xuICB9LFxuXG4gIGdldEFsbERhdGEoaWQpIHtcbiAgICByZXR1cm4gW2ZldGNoUmVxdWVzdHMuZ2V0VHJhdmVsZXIoaWQpLCBmZXRjaFJlcXVlc3RzLmdldFRyaXBzKCksIGZldGNoUmVxdWVzdHMuZ2V0RGVzdGluYXRpb25zKCldXG4gIH0sXG5cbiAgcG9zdFRyaXAob2JqKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheUZvcm1FcnJvcihlcnIpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFJlcXVlc3RzXG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9nbG9iZS1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL21hcC1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3N1aXRjYXNlLWljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvdGlja2V0LWljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcHJvZnBpYy5wbmdcIjsiLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJztcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tICcuL0Rlc3RpbmF0aW9uJztcblxuaW1wb3J0IGZldGNoUmVxdWVzdHMgZnJvbSAnLi9mZXRjaFJlcXVlc3RzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvcHJvZnBpYy5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9hcnJvdy5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy9tYXAtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy90aWNrZXQtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy9nbG9iZS1pY29uLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2ljb25zL3N1aXRjYXNlLWljb24ucG5nJztcblxubGV0IHVzZXI7XG5sZXQgZGVzdGluYXRpb25zO1xuXG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpO1xuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZS1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1pbnB1dCcpO1xuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgcGxhblRyaXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhbi10cmlwLWJ1dHRvbicpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgdHJpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1saXN0Jyk7XG5jb25zdCBkZXN0aW5hdGlvblByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tcHJldmlldycpO1xuXG5jb25zdCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLXN0YXJ0Jyk7XG5jb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1lbmQnKTtcbmNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LXRyaXAtZm9ybV9faW5wdXQnKTtcbmNvbnN0IGRlc3RpbmF0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JylcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm51bWJlci1vZi10cmF2ZWxlcnMnKTtcbmNvbnN0IGJvb2tUcmlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stdHJpcC1idXR0b24nKTtcbmNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjay1idXR0b24nKVxuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQW5kTG9hZERhdGFNb2RlbClcbnN0YXJ0RGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0RW5kTWluKVxuZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlRm9ybURPTSkpXG5wbGFuVHJpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm1WaWV3KVxuYm9va1RyaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib29rVHJpcCk7XG5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRm9ybVZpZXcpXG5cbmZ1bmN0aW9uIGZldGNoQW5kTG9hZERhdGFNb2RlbCgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQ7XG5cbiAgUHJvbWlzZS5hbGwoZmV0Y2hSZXF1ZXN0cy5nZXRBbGxEYXRhKGNoZWNrTG9naW5DcmVkZW50aWFscygpKSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZXNbMF0ubWVzc2FnZSkge1xuICAgICAgICBpbml0aWFsaXplRE9NKHJlc3BvbnNlc1swXSwgcmVzcG9uc2VzWzFdLCByZXNwb25zZXNbMl0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlMb2dpbkVycm9yKCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHVzZXJuYW1lJyk7XG4gICAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsYXNzZXModXNlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25EYXRhLmRlc3RpbmF0aW9ucy5tYXAoZGF0YSA9PiBuZXcgRGVzdGluYXRpb24oZGF0YSkpO1xuICB1c2VyID0gbmV3IFVzZXIodXNlckRhdGEsIHRyaXBEYXRhLnRyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrTG9naW5DcmVkZW50aWFscygpIHtcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG4gIGxldCBpZDtcblxuICBpZiAodXNlcm5hbWUubWF0Y2goL1xcZCsvKSAhPT0gbnVsbCkge1xuICAgIGlkID0gdXNlcm5hbWUubWF0Y2goL1xcZCsvKVswXVxuICB9XG5cbiAgaWYoIWlkIHx8IHVzZXJuYW1lICE9PSBgdHJhdmVsZXIke2lkfWApIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlMb2dpbkVycm9yKCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHVzZXJuYW1lJyk7XG4gIH0gZWxzZSBpZiAoIXBhc3N3b3JkID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlMb2dpbkVycm9yKCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHBhc3N3b3JkJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlkXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRyaXBzKCkge1xuICB1c2VyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMsIHRyaXBMaXN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1WaWV3KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZS1tZXNzYWdlJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHBsYW5UcmlwQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRyaXAtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBib29rVHJpcEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZGVzdGluYXRpb25QcmV2aWV3LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB0cmlwTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYmFja0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZG9tVXBkYXRlcy5jbGVhckVycm9ycygpO1xuICBpZih0cmlwTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgZG9tVXBkYXRlcy51cGRhdGVQcmV2aWV3KGRlc3RpbmF0aW9uUHJldmlldywgZGVzdGluYXRpb25MaXN0LCBkZXN0aW5hdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJvb2tUcmlwKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGlmICghc3RhcnREYXRlSW5wdXQudmFsdWUgfHwgIWVuZERhdGVJbnB1dC52YWx1ZSkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUZvcm1FcnJvcigncGxlYXNlIGZpbGwgb3V0IGFsbCByZXF1aXJlZCBpbnB1dHMnKTtcbiAgfVxuICBmZXRjaFJlcXVlc3RzLmdldFRyaXBzKCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgZmV0Y2hSZXF1ZXN0cy5wb3N0VHJpcChnZXRPYmplY3RGcm9tSW5wdXRzKHJlc3BvbnNlKSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFsbERhdGEodXNlci5pZCkpLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgZ2VuZXJhdGVDbGFzc2VzKHJlc3BvbnNlc1swXSwgcmVzcG9uc2VzWzFdLCByZXNwb25zZXNbMl0pO1xuICAgICAgICBkaXNwbGF5VHJpcHMoKTtcbiAgICAgICAgdG9nZ2xlRm9ybVZpZXcoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRyaXBzKCkge1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcHModHJpcExpc3QpO1xuICBkaXNwbGF5QWxsVHJpcHMoKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSh1c2VyRGF0YSwgcmVjaXBlRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gIGdlbmVyYXRlQ2xhc3Nlcyh1c2VyRGF0YSwgcmVjaXBlRGF0YSwgZGVzdGluYXRpb25EYXRhKTtcbiAgZGlzcGxheVRyaXBzKCk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheVNpZGViYXIodXNlciwgc2lkZWJhcik7XG4gIGxvZ2luUGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgc2V0U3RhcnRNaW4oKTtcbiAgcGxhblRyaXBCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhkZXN0aW5hdGlvbnMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JykpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RGcm9tSW5wdXRzKHRyaXBzKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHRyaXBzLnRyaXBzLmxlbmd0aCArIDEsXG4gICAgdXNlcklEOiB1c2VyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IHBhcnNlSW50KGRlc3RpbmF0aW9uTGlzdC52YWx1ZSksXG4gICAgdHJhdmVsZXJzOiB0cmF2ZWxlcnNJbnB1dC52YWx1ZSxcbiAgICBkYXRlOiBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApLnJlcGxhY2VBbGwoJy0nLCAnLycpLFxuICAgIGR1cmF0aW9uOiAobmV3IERhdGUoZW5kRGF0ZUlucHV0LnZhbHVlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkuZ2V0VGltZSgpKS8oMTAwMCo2MCo2MCoyNCksXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldEVuZE1pbigpIHtcbiAgbGV0IG5leHREYXkgPSBuZXcgRGF0ZSgpO1xuICBuZXh0RGF5LnNldERhdGUobmV3IERhdGUoc3RhcnREYXRlSW5wdXQudmFsdWUpLmdldERhdGUoKSArIDEpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBuZXh0RGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWluKCkge1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRm9ybURPTSgpIHtcbiAgaWYgKHN0YXJ0RGF0ZUlucHV0LnZhbHVlICYmIGVuZERhdGVJbnB1dC52YWx1ZSkge1xuICAgIGNvbnN0IHRyaXAgPSBuZXcgVHJpcChnZXRPYmplY3RGcm9tSW5wdXRzKHt0cmlwczogW119KSwgZGVzdGluYXRpb25zKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNvc3RNZXNzYWdlKHRyaXApXG4gIH1cbiAgZG9tVXBkYXRlcy51cGRhdGVQcmV2aWV3KGRlc3RpbmF0aW9uUHJldmlldywgZGVzdGluYXRpb25MaXN0LCBkZXN0aW5hdGlvbnMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9