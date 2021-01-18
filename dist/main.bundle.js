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
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  background-color: #F9F5F1;\n  font-family: \"Lato\", sans-serif; }\n\nh1 {\n  font-size: 5vmin;\n  margin: none; }\n  h1 img {\n    height: auto;\n    width: 7%; }\n\nh3 {\n  font-size: 2.5vmin; }\n\nbody {\n  background-color: #FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%; }\n\n.user-name {\n  line-height: 1vmin; }\n\n.traveler-type {\n  line-height: 1vmin; }\n\n#blockColorblindContent {\n  display: none; }\n\n.hidden {\n  display: none !important; }\n\n.sidebar {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 30%; }\n\n.prof-pic {\n  position: relative;\n  height: auto;\n  width: 75%; }\n\n.sidebar-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 30%;\n  width: 100%; }\n\n.sidebar-btn {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%; }\n  .sidebar-btn img {\n    height: auto;\n    width: 20%; }\n  .sidebar-btn:hover {\n    cursor: pointer;\n    font-size: 3.2vmin;\n    transition: .4s ease; }\n    .sidebar-btn:hover img {\n      height: auto;\n      width: 25%;\n      transition: .4s ease; }\n\n.sidebar-btn-area {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 20%;\n  width: 100%; }\n\n.login-page {\n  align-self: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 50%;\n  width: 50%;\n  text-align: center;\n  margin-left: 25%; }\n\n.new-trip-form {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: nowrap; }\n  .new-trip-form input {\n    height: auto;\n    width: 80%;\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin; }\n\n.pending {\n  color: #F9D1CB; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 70%;\n  overflow: hidden;\n  text-align: center; }\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll; }\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 22%;\n  width: 100%;\n  transition: .8s ease;\n  overflow: hidden; }\n  .trip .details {\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin; }\n  .trip button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%; }\n    .trip button .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      height: auto;\n      width: 25%; }\n  .trip img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 100%;\n    width: 100%; }\n  .trip:hover {\n    height: 40%;\n    width: 100%; }\n    .trip:hover .details {\n      display: block; }\n\n.trip:focus-within {\n  height: 40%;\n  width: 100%; }\n  .trip:focus-within .details {\n    display: block; }\n\n.preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 350%;\n  width: 100%; }\n\n.cost-details {\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'variables';\n\nhtml {\n  background-color: \t#F9F5F1;\n  font-family: \"Lato\", sans-serif;\n}\n\nh1 {\n  font-size: 5vmin;\n  margin: none;\n  & img{\n    @include setDimensions(auto, 7%);\n  }\n}\n\nh3 {\n  font-size: 2.5vmin;\n}\n\nbody {\n  background-color:#FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%;\n}\n\n.user-name{\n  line-height: 1vmin;\n}\n\n.traveler-type{\n  line-height: 1vmin;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.sidebar {\n  align-items: center;\n  @include displayFlex(column, flex-start, nowrap);\n  width: 30%;\n}\n\n.prof-pic{\n  position: relative;\n  @include setDimensions(auto, 75%);\n}\n\n.sidebar-content {\n  text-align: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(30%, 100%);\n}\n\n.sidebar-btn {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%;\n  & img {\n    @include setDimensions(auto, 20%);\n  }\n  &:hover {\n    cursor: pointer;\n    font-size: 3.2vmin;\n    transition: .4s ease;\n    & img {\n      @include setDimensions(auto, 25%);\n      transition: .4s ease;\n    }\n  }\n}\n\n.sidebar-btn-area {\n  @include displayFlex(row-reverse, center, nowrap);\n  @include setDimensions(20%, 100%);\n}\n\n.login-page{\n  align-self: center;\n  align-items: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(50%, 50%);\n  text-align: center;\n  margin-left: 25%;\n}\n\n.new-trip-form {\n  align-items: center;\n  @include displayFlex(column, space-around, nowrap);\n  & input {\n    @include setDimensions(auto, 80%);\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin;\n  }\n}\n\n.pending {\n  color: #F9D1CB;\n}\n\nmain {\n  @include displayFlex(column, flex-start, nowrap);\n  width: 70%;\n  overflow: hidden;\n  text-align: center;\n}\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll;\n}\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  @include setDimensions(22%, 100%);\n  transition: .8s ease;\n  overflow: hidden;\n  & .details{\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin;\n  }\n  & button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%;\n    & .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      @include setDimensions(auto, 25%);\n    }\n  }\n  & img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    @include setDimensions(100%, 100%);\n  }\n  &:hover {\n    @include setDimensions(40%, 100%);\n    & .details {\n      display: block;\n    }\n  }\n}\n\n.trip:focus-within {\n  @include setDimensions(40%, 100%);\n  & .details {\n    display: block;\n  }\n}\n\n.preview{\n  @include displayFlex(row, center, nowrap);\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  @include setDimensions(350%, 100%);\n}\n\n.cost-details{\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n","@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n"],"sourceRoot":""}]);
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
  },

  displayError(error) {
    document.querySelector('.login-errors').innerText = error
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
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err));
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err));
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err));
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
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err));
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
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayError('LOGIN FAILED\ninvalid username');
      } else {
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayError('LOGIN FAILED\ninvalid password');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pY29ucy9nbG9iZS1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL21hcC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL3N1aXRjYXNlLWljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaWNvbnMvdGlja2V0LWljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcHJvZnBpYy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QSxFQUFFLG1EQUFVO0FBQ1oiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGNUYxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXZtaW47XFxuICBtYXJnaW46IG5vbmU7IH1cXG4gIGgxIGltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDclOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyLjV2bWluOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkY4O1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTh2aDtcXG4gIHdpZHRoOiA5OSU7IH1cXG5cXG4udXNlci1uYW1lIHtcXG4gIGxpbmUtaGVpZ2h0OiAxdm1pbjsgfVxcblxcbi50cmF2ZWxlci10eXBlIHtcXG4gIGxpbmUtaGVpZ2h0OiAxdm1pbjsgfVxcblxcbiNibG9ja0NvbG9yYmxpbmRDb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5zaWRlYmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi5wcm9mLXBpYyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzUlOyB9XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGViYXItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIuOHZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAzJTsgfVxcbiAgLnNpZGViYXItYnRuIGltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDIwJTsgfVxcbiAgLnNpZGViYXItYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDMuMnZtaW47XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuICAgIC5zaWRlYmFyLWJ0bjpob3ZlciBpbWcge1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuXFxuLnNpZGViYXItYnRuLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7IH1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICAubmV3LXRyaXAtZm9ybSBpbnB1dCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydm1pbjsgfVxcblxcbi5wZW5kaW5nIHtcXG4gIGNvbG9yOiAjRjlEMUNCOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1saXN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcblxcbi50cmlwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjIlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC50cmlwIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDF2bWluOyB9XFxuICAudHJpcCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRvcDogMSU7XFxuICAgIGJvdHRvbTogMSU7IH1cXG4gICAgLnRyaXAgYnV0dG9uIC5pbmZvLWJsb2NrIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgICBvcGFjaXR5OiA4NSU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiAyNSU7IH1cXG4gIC50cmlwIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50cmlwOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC50cmlwOmhvdmVyIC5kZXRhaWxzIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmlwOmZvY3VzLXdpdGhpbiB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcDpmb2N1cy13aXRoaW4gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDM1MCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb3N0LWRldGFpbHMge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1JTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBRmQ7SUNORSxZRFU2QjtJQ1Q3QixTRFNpQyxFQUFBOztBQUluQztFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsbUJBQW1CO0VDdkNuQixhQUFhO0VBQ2Isc0JEdUMyQjtFQ3RDM0IsMkJEc0N1QztFQ3JDdkMsaUJEcUMrQztFQUMvQyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUNsRGxCLFlEbUQyQjtFQ2xEM0IsVURrRGdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VDbERsQixhQUFhO0VBQ2Isc0JEa0QyQjtFQ2pEM0IsdUJEaURtQztFQ2hEbkMsaUJEZ0QyQztFQ3hEM0MsV0R5RDBCO0VDeEQxQixXRHdEZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUpuQjtJQzVERSxZRGtFNkI7SUNqRTdCLFVEaUVrQyxFQUFBO0VBTnBDO0lBU0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTtJQVh4QjtNQzVERSxZRHlFK0I7TUN4RS9CLFVEd0VvQztNQUNoQyxvQkFBb0IsRUFBQTs7QUFLMUI7RUMxRUUsYUFBYTtFQUNiLDJCRDBFZ0M7RUN6RWhDLHVCRHlFd0M7RUN4RXhDLGlCRHdFZ0Q7RUNoRmhELFdEaUYwQjtFQ2hGMUIsV0RnRmdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQ2pGbkIsYUFBYTtFQUNiLHNCRGlGMkI7RUNoRjNCLHVCRGdGbUM7RUMvRW5DLGlCRCtFMkM7RUN2RjNDLFdEd0YwQjtFQ3ZGMUIsVUR1RitCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBbUI7RUN6Rm5CLGFBQWE7RUFDYixzQkR5RjJCO0VDeEYzQiw2QkR3RnlDO0VDdkZ6QyxpQkR1RmlELEVBQUE7RUFGbkQ7SUM3RkUsWURpRzZCO0lDaEc3QixVRGdHa0M7SUFDaEMsK0JBQStCO0lBQy9CLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUN0R0UsYUFBYTtFQUNiLHNCRHNHMkI7RUNyRzNCLDJCRHFHdUM7RUNwR3ZDLGlCRG9HK0M7RUFDL0MsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VDMUhmLFdEMkgwQjtFQzFIMUIsV0QwSGdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQU5sQjtJQVFJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBWHRCO0lBY0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVSxFQUFBO0lBakJkO01BbUJNLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsWUFBWTtNQ2xKaEIsWURtSitCO01DbEovQixVRGtKb0MsRUFBQTtFQTVCdEM7SUFnQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lDMUpsQyxZRDJKNkI7SUMxSjdCLFdEMEptQyxFQUFBO0VBcENyQztJQ3ZIRSxXRDhKNEI7SUM3SjVCLFdENkprQyxFQUFBO0lBdkNwQztNQXlDTSxjQUFjLEVBQUE7O0FBS3BCO0VDcktFLFdEc0swQjtFQ3JLMUIsV0RxS2dDLEVBQUE7RUFEbEM7SUFHSSxjQUFjLEVBQUE7O0FBSWxCO0VDdktFLGFBQWE7RUFDYixtQkR1S3dCO0VDdEt4Qix1QkRzS2dDO0VDcktoQyxpQkRxS3dDO0VBQ3hDLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VDaEw1QixZRGlMMkI7RUNoTDNCLFdEZ0xpQyxFQUFBOztBQUduQztFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VDekxaLFlEMEwyQjtFQ3pMM0IsVUR5TGdDLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFxcdCNGOUY1RjE7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDV2bWluO1xcbiAgbWFyZ2luOiBub25lO1xcbiAgJiBpbWd7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgNyUpO1xcbiAgfVxcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuNXZtaW47XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjojRkJGQkY4O1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTh2aDtcXG4gIHdpZHRoOiA5OSU7XFxufVxcblxcbi51c2VyLW5hbWV7XFxuICBsaW5lLWhlaWdodDogMXZtaW47XFxufVxcblxcbi50cmF2ZWxlci10eXBle1xcbiAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbn1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgZmxleC1zdGFydCwgbm93cmFwKTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5wcm9mLXBpY3tcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgNzUlKTtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMzAlLCAxMDAlKTtcXG59XFxuXFxuLnNpZGViYXItYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIuOHZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG4gICYgaW1nIHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAyMCUpO1xcbiAgfVxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjJ2bWluO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgJiBpbWcge1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2lkZWJhci1idG4tYXJlYSB7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3ctcmV2ZXJzZSwgY2VudGVyLCBub3dyYXApO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygyMCUsIDEwMCUpO1xcbn1cXG5cXG4ubG9naW4tcGFnZXtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNTAlLCA1MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLm5ldy10cmlwLWZvcm0ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgc3BhY2UtYXJvdW5kLCBub3dyYXApO1xcbiAgJiBpbnB1dCB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgODAlKTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG4gIH1cXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgY29sb3I6ICNGOUQxQ0I7XFxufVxcblxcbm1haW4ge1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBub3dyYXApO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50cmlwLWxpc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4udHJpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDIyJSwgMTAwJSk7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAmIC5kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMXZtaW47XFxuICB9XFxuICAmIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdG9wOiAxJTtcXG4gICAgYm90dG9tOiAxJTtcXG4gICAgJiAuaW5mby1ibG9jayB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgICAgb3BhY2l0eTogODUlO1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG4gICAgfVxcbiAgfVxcbiAgJiBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEwMCUsIDEwMCUpO1xcbiAgfVxcbiAgJjpob3ZlciB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNDAlLCAxMDAlKTtcXG4gICAgJiAuZGV0YWlscyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRyaXA6Zm9jdXMtd2l0aGluIHtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNDAlLCAxMDAlKTtcXG4gICYgLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLnByZXZpZXd7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgbm93cmFwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDM1MCUsIDEwMCUpO1xcbn1cXG5cXG4uY29zdC1kZXRhaWxze1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAyNSUpO1xcbn1cXG5cIixcIkBtaXhpbiBzZXREaW1lbnNpb25zKCRoZWlnaHQsICR3aWR0aCkge1xcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgd2lkdGg6ICR3aWR0aDtcXG59XFxuXFxuQG1peGluIGRpc3BsYXlGbGV4KCRmbGV4LWRpcmVjdGlvbiwgJGp1c3RpZnktY29udGVudCwgJGZsZXgtd3JhcCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XFxuICBmbGV4LXdyYXA6ICRmbGV4LXdyYXBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIERlc3RpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHRoaXMuaWQgPSBkYXRhT2JqZWN0LmlkO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkYXRhT2JqZWN0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBkYXRhT2JqZWN0LmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgIHRoaXMuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IGRhdGFPYmplY3QuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbjtcbiAgICB0aGlzLmltYWdlID0gZGF0YU9iamVjdC5pbWFnZTtcbiAgICB0aGlzLmFsdCA9IGRhdGFPYmplY3QuYWx0O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25cbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0LCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gZGF0YU9iamVjdC5pZFxuICAgIHRoaXMudXNlcklEID0gZGF0YU9iamVjdC51c2VySURcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSBkYXRhT2JqZWN0LmRlc3RpbmF0aW9uSURcbiAgICB0aGlzLnRyYXZlbGVycyA9IGRhdGFPYmplY3QudHJhdmVsZXJzXG4gICAgdGhpcy5kYXRlID0gZGF0YU9iamVjdC5kYXRlXG4gICAgdGhpcy5kdXJhdGlvbiA9IGRhdGFPYmplY3QuZHVyYXRpb25cbiAgICB0aGlzLnN0YXR1cyA9IGRhdGFPYmplY3Quc3RhdHVzXG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gZGF0YU9iamVjdC5zdWdnZXN0ZWRBY3Rpdml0aWVzXG4gICAgdGhpcy5jb3N0ID0gdGhpcy5jYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucylcbiAgfVxuXG4gIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMpIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IHRoaXMuZGVzdGluYXRpb25JRCk7XG4gIH1cblxuICBjYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5maW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKTtcbiAgICBjb25zdCBmbGlnaHRDb3N0ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRoaXMudHJhdmVsZXJzO1xuICAgIGNvbnN0IGxvZGdpbmdDb3N0ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLnRyYXZlbGVycyAqIHRoaXMuZHVyYXRpb247XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlZm9yZUFnZW50OiBmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QsXG4gICAgICBhZnRlckFnZW50OiBNYXRoLmNlaWwoMS4xICogKGZsaWdodENvc3QgKyBsb2RnaW5nQ29zdCkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuU3RhdHVzSW5mbygpIHtcbiAgICBpZih0aGlzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgIHJldHVybiB0aGlzLnN0YXR1c1xuICAgIH0gZWxzZSBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPCBuZXcgRGF0ZSh0aGlzLmRhdGUpLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuICd1cGNvbWluZydcbiAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRoaXMuZGF0ZSkuZ2V0VGltZSgpKygxMDAwICogNjAgKiA2MCAqIDI0ICogdGhpcy5kdXJhdGlvbikpIHtcbiAgICAgIHJldHVybiAnaW4gcHJvZ3Jlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncGFzdCdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFxuIiwiaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJ1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZFxuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lXG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlckRhdGEudHJhdmVsZXJUeXBlXG4gICAgdGhpcy50cmlwcyA9IHRoaXMuZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKVxuICB9XG5cbiAgZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydEJ5RGF0ZSh0aGlzLmZpbHRlclRyaXBEYXRhKHRyaXBEYXRhKSkubWFwKGRhdGEgPT4gbmV3IFRyaXAoZGF0YSwgZGVzdGluYXRpb25zKSk7XG4gIH1cblxuICBmaWx0ZXJUcmlwRGF0YSh0cmlwRGF0YSkge1xuICAgIHJldHVybiB0cmlwRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gIH1cblxuICBzb3J0QnlEYXRlKHRyaXBEYXRhKSB7XG4gICAgdHJpcERhdGEuZm9yRWFjaCh0cmlwID0+IHRyaXAuZGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkpO1xuICAgIHJldHVybiB0cmlwRGF0YS5zb3J0KChhLCBiKSA9PiBiLmRhdGUgLSBhLmRhdGUpO1xuICB9XG5cbiAgZmlsdGVyQnlQZW5kaW5nKHRyaXBzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJpcHNBcnJheS5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgfVxuXG4gIGZpbHRlckJ5VGhpc1llYXIodHJpcHNBcnJheSkge1xuICAgIHJldHVybiB0cmlwc0FycmF5LmZpbHRlcih0cmlwID0+IChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB0cmlwLmRhdGUuZ2V0RnVsbFllYXIoKSkgPD0gMSk7XG4gIH1cblxuICBnZXRDb3N0Rm9yWWVhcigpIHtcbiAgcmV0dXJuIHRoaXMuZmlsdGVyQnlUaGlzWWVhcih0aGlzLmZpbHRlckJ5UGVuZGluZyh0aGlzLnRyaXBzKSkucmVkdWNlKCh0b3RhbENvc3QsIHRyaXApID0+IHtcbiAgICB0b3RhbENvc3QgKz0gdHJpcC5jb3N0LmFmdGVyQWdlbnQ7XG4gICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgZGlzcGxheVRyaXAodHJpcCwgZGVzdGluYXRpb25zLCB0cmlwTGlzdCkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdHJpcC5maW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKTtcblxuICAgIHRyaXBMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICBgPGFydGljbGUgY2xhc3M9XCJ0cmlwXCI+XG4gICAgICA8YnV0dG9uPlxuICAgICAgICA8aW1nIHNyYz1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgIGFsdD1cIiR7ZGVzdGluYXRpb24uYWx0fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1ibG9ja1wiPlxuICAgICAgICAgIDxoMj4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiJHt0cmlwLnJldHVyblN0YXR1c0luZm8oKX1cIj4ke3RyaXAucmV0dXJuU3RhdHVzSW5mbygpfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwPnN0YXJ0IGRhdGU6ICAke3RyaXAuZGF0ZS50b0RhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICA8cD5kdXJhdGlvbjogICR7dHJpcC5kdXJhdGlvbn0gZGF5czwvcD5cbiAgICAgICAgICAgIDxwPnRyYXZlbGVyczogICAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgIDxwPmNvc3Q6ICAkJHt0cmlwLmNhbGN1bGF0ZUNvc3QoZGVzdGluYXRpb25zKS5hZnRlckFnZW50fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5gKTtcbiAgfSxcblxuICBjbGVhclRyaXBzKHRyaXBMaXN0KSB7XG4gICAgdHJpcExpc3QuaW5uZXJIVE1MID0gJydcbiAgfSxcblxuICBkaXNwbGF5U2lkZWJhcih1c2VyLCBzaWRlYmFyKXtcbiAgICBzaWRlYmFyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxpbWcgY2xhc3M9XCJwcm9mLXBpY1wiIHNyYz1cIi4vaW1hZ2VzL3Byb2ZwaWMucG5nXCIgYWx0PVwidXNlcidzIHByb2ZpbGUgcGljdHVyZVwiPlxuICAgIDxoMSBjbGFzcz1cInVzZXItbmFtZVwiPiR7dXNlci5uYW1lfTwvaDE+XG4gICAgPGgyIGNsYXNzPVwidHJhdmVsZXItdHlwZVwiPiR7dXNlci50cmF2ZWxlclR5cGV9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZWJhci1jb250ZW50IHdlbGNvbWUtbWVzc2FnZVwiPlxuICAgICAgPGgzPldlbGNvbWUgYmFjaywgdHJhdmVsZXIhXG4gICAgICA8YnI+IC0tLS0tLS0tLVxuICAgICAgPGJyPkFwcHJvdmVkIFRyaXBzOiAke3VzZXIudHJpcHMubGVuZ3RoIC0gdXNlci5maWx0ZXJCeVBlbmRpbmcodXNlci50cmlwcykubGVuZ3RofVxuICAgICAgPGJyPiAtLS0tLS0tLS1cbiAgICAgIDxicj5QZW5kaW5nIFRyaXBzOiAke3VzZXIuZmlsdGVyQnlQZW5kaW5nKHVzZXIudHJpcHMpLmxlbmd0aH1cbiAgICAgIDxicj4gLS0tLS0tLS0tXG4gICAgICA8YnI+SW4gdGhlIHBhc3QgeWVhciB5b3UndmUgc3BlbnQgJCR7dXNlci5nZXRDb3N0Rm9yWWVhcigpfSBvbiBUcmF2ZWw8L2gzPlxuICAgIDwvZGl2PmApXG4gIH0sXG5cbiAgZGlzcGxheU5ld1RyaXBGb3JtKGRlc3RpbmF0aW9ucykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1mb3JtJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgPHNlbGVjdCBjbGFzcz1cImRlc3RpbmF0aW9uLWxpc3RcIiBuYW1lPVwiXCI+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0cmlwLXN0YXJ0XCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInRyaXAtZW5kXCIgbWluPVwiJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwibnVtLXRyYXZlbGVyc1wiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIj5cbiAgICA8aDM+PC9oMz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay10cmlwLWJ1dHRvblwiPmJvb2sgaXQ8L2J1dHRvbj5gKTtcblxuICAgIHRoaXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhkZXN0aW5hdGlvbnMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JykpO1xuICB9LFxuXG4gIGNsZWFyTmV3VHJpcEZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLWZvcm0nKS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbkxpc3QpIHtcbiAgICBkZXN0aW5hdGlvbnMuc29ydCgoYSwgYikgPT4gYS5kZXN0aW5hdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzdGluYXRpb24pKS5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIHZhbHVlPVwiJHtkZXN0aW5hdGlvbi5pZH1cIj4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvb3B0aW9uPmApO1xuICAgIH0pO1xuICB9LFxuXG4gIGRpc3BsYXlQZW5kaW5nTWVzc2FnZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1tZXNzYWdlJykuaW5uZXJIVE1MID0gJ3NlbGVjdCBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSBhbmQgd2VcXCdsbCBjYWxjdWxhdGUgdGhlIGNvc3QnXG4gIH0sXG5cbiAgZGlzcGxheUNvc3RNZXNzYWdlKHRyaXApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdC1tZXNzYWdlJykuaW5uZXJIVE1MID0gYCQke3RyaXAuY29zdC5iZWZvcmVBZ2VudH0gKyAxMCUgYWdlbnQgZmVlID0gJCR7dHJpcC5jb3N0LmFmdGVyQWdlbnR9YFxuICB9LFxuXG4gIHVwZGF0ZVByZXZpZXcoZGVzdGluYXRpb25QcmV2aWV3LCBkZXN0aW5hdGlvbkxpc3QsIGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IHByZXZpZXcgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PSBkZXN0aW5hdGlvbkxpc3QudmFsdWUpXG4gICAgZGVzdGluYXRpb25QcmV2aWV3LmlubmVySFRNTCA9XG4gICAgYDxkaXYgY2xhc3M9XCJwcmV2aWV3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcmV2aWV3LmltYWdlfSk7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29zdC1kZXRhaWxzXCJcbiAgICAgICAgPGgxPiR7cHJldmlldy5kZXN0aW5hdGlvbn08L2gxPlxuICAgICAgICA8aDI+Um91bmQgVHJpcCBBaXJmYXJlIFBlciBQZXJzb246ICQke3ByZXZpZXcuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbn08L2gyPlxuICAgICAgICA8aDI+TG9kZ2luZyBDb3N0IFBlciBQZXJzb24gUGVyIERheTogJCR7cHJldmlldy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YFxuICB9LFxuXG4gIGRpc3BsYXlFcnJvcihlcnJvcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1lcnJvcnMnKS5pbm5lclRleHQgPSBlcnJvclxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJ1xuXG5cbmNvbnN0IGZldGNoUmVxdWVzdHMgPSB7XG4gIGdldFRyYXZlbGVyKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcihlcnIpKTtcbiAgfSxcblxuICBnZXRUcmlwcygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoZXJyKSk7XG4gIH0sXG5cbiAgZ2V0RGVzdGluYXRpb25zKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoZXJyKSk7XG4gIH0sXG5cbiAgZ2V0QWxsRGF0YShpZCkge1xuICAgIHJldHVybiBbZmV0Y2hSZXF1ZXN0cy5nZXRUcmF2ZWxlcihpZCksIGZldGNoUmVxdWVzdHMuZ2V0VHJpcHMoKSwgZmV0Y2hSZXF1ZXN0cy5nZXREZXN0aW5hdGlvbnMoKV1cbiAgfSxcblxuICBwb3N0VHJpcChvYmopIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoZXJyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hSZXF1ZXN0c1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXJyb3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ2xvYmUtaWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tYXAtaWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zdWl0Y2FzZS1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RpY2tldC1pY29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3Byb2ZwaWMucG5nXCI7IiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCc7XG5pbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9EZXN0aW5hdGlvbic7XG5cbmltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Byb2ZwaWMucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXJyb3cucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvbWFwLWljb24ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvdGlja2V0LWljb24ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvZ2xvYmUtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy9zdWl0Y2FzZS1pY29uLnBuZyc7XG5cbmxldCB1c2VyO1xubGV0IGRlc3RpbmF0aW9ucztcblxuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLXBhZ2UnKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHBsYW5UcmlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdHJpcC1idXR0b24nKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IHRyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtbGlzdCcpO1xuY29uc3QgZGVzdGluYXRpb25QcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXcnKTtcblxuY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1zdGFydCcpO1xuY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtZW5kJyk7XG5jb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10cmlwLWZvcm1fX2lucHV0Jyk7XG5jb25zdCBkZXN0aW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpXG5jb25zdCB0cmF2ZWxlcnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW0tdHJhdmVsZXJzJyk7XG5jb25zdCBib29rVHJpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAtYnV0dG9uJyk7XG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnV0dG9uJylcblxuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQW5kTG9hZERhdGFNb2RlbClcbnN0YXJ0RGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0RW5kTWluKVxuZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlRm9ybURPTSkpXG5wbGFuVHJpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUZvcm1WaWV3KVxuYm9va1RyaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib29rVHJpcCk7XG5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRm9ybVZpZXcpXG5cbmZ1bmN0aW9uIGZldGNoQW5kTG9hZERhdGFNb2RlbCgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3QgaWQgPSB1c2VybmFtZS5tYXRjaCgvXFxkKy8pWzBdXG4gIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcblxuICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFsbERhdGEoaWQpKVxuICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICBpZiAoY2hlY2tMb2dpbkNyZWRlbnRpYWxzKHJlc3BvbnNlc1swXSwgdXNlcm5hbWUsIHBhc3N3b3JkLCBpZCkpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURPTShyZXNwb25zZXNbMF0sIHJlc3BvbnNlc1sxXSwgcmVzcG9uc2VzWzJdKVxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZXNbMF0ubWVzc2FnZSkge1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcignTE9HSU4gRkFJTEVEXFxuaW52YWxpZCB1c2VybmFtZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoJ0xPR0lOIEZBSUxFRFxcbmludmFsaWQgcGFzc3dvcmQnKTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDbGFzc2VzKHVzZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gIGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uRGF0YS5kZXN0aW5hdGlvbnMubWFwKGRhdGEgPT4gbmV3IERlc3RpbmF0aW9uKGRhdGEpKTtcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJEYXRhLCB0cmlwRGF0YS50cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuXG5mdW5jdGlvbiBjaGVja0xvZ2luQ3JlZGVudGlhbHMocmVzcG9uc2UsIHVzZXJuYW1lLCBwYXNzd29yZCwgaWQpIHtcbiAgaWYodXNlcm5hbWUgPT09IGB0cmF2ZWxlciR7aWR9YCAmJiBwYXNzd29yZCA9PT0gJ3RyYXZlbDIwMjAnICYmIHJlc3BvbnNlLmlkID09IGlkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGxUcmlwcygpIHtcbiAgdXNlci50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXAodHJpcCwgZGVzdGluYXRpb25zLCB0cmlwTGlzdClcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1WaWV3KCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZS1tZXNzYWdlJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHBsYW5UcmlwQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRyaXAtZm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBib29rVHJpcEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZGVzdGluYXRpb25QcmV2aWV3LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB0cmlwTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgYmFja0J1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgaWYodHJpcExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGRvbVVwZGF0ZXMudXBkYXRlUHJldmlldyhkZXN0aW5hdGlvblByZXZpZXcsIGRlc3RpbmF0aW9uTGlzdCwgZGVzdGluYXRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBib29rVHJpcCgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGZldGNoUmVxdWVzdHMuZ2V0VHJpcHMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBmZXRjaFJlcXVlc3RzLnBvc3RUcmlwKGdldE9iamVjdEZyb21JbnB1dHMocmVzcG9uc2UpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIFByb21pc2UuYWxsKGZldGNoUmVxdWVzdHMuZ2V0QWxsRGF0YSh1c2VyLmlkKSkudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICBnZW5lcmF0ZUNsYXNzZXMocmVzcG9uc2VzWzBdLCByZXNwb25zZXNbMV0sIHJlc3BvbnNlc1syXSk7XG4gICAgICAgIGRpc3BsYXlUcmlwcygpO1xuICAgICAgICB0b2dnbGVGb3JtVmlldygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcHMoKSB7XG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmlwcyh0cmlwTGlzdClcbiAgZGlzcGxheUFsbFRyaXBzKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVET00odXNlckRhdGEsIHJlY2lwZURhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICBnZW5lcmF0ZUNsYXNzZXModXNlckRhdGEsIHJlY2lwZURhdGEsIGRlc3RpbmF0aW9uRGF0YSlcbiAgZGlzcGxheVRyaXBzKClcbiAgZG9tVXBkYXRlcy5kaXNwbGF5U2lkZWJhcih1c2VyLCBzaWRlYmFyKTtcbiAgbG9naW5QYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBzZXRTdGFydE1pbigpXG4gIHBsYW5UcmlwQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uT3B0aW9ucyhkZXN0aW5hdGlvbnMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1saXN0JykpXG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdEZyb21JbnB1dHModHJpcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogdHJpcHMudHJpcHMubGVuZ3RoICsgMSxcbiAgICB1c2VySUQ6IHVzZXIuaWQsXG4gICAgZGVzdGluYXRpb25JRDogcGFyc2VJbnQoZGVzdGluYXRpb25MaXN0LnZhbHVlKSxcbiAgICB0cmF2ZWxlcnM6IHRyYXZlbGVyc0lucHV0LnZhbHVlLFxuICAgIGRhdGU6IG5ldyBEYXRlKHN0YXJ0RGF0ZUlucHV0LnZhbHVlKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkucmVwbGFjZUFsbCgnLScsICcvJyksXG4gICAgZHVyYXRpb246IChuZXcgRGF0ZShlbmREYXRlSW5wdXQudmFsdWUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKHN0YXJ0RGF0ZUlucHV0LnZhbHVlKS5nZXRUaW1lKCkpLygxMDAwKjYwKjYwKjI0KSxcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXVxuICB9XG59XG5cblxuZnVuY3Rpb24gc2V0RW5kTWluKCkge1xuICBsZXQgbmV4dERheSA9IG5ldyBEYXRlKCk7XG4gIG5leHREYXkuc2V0RGF0ZShuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkuZ2V0RGF0ZSgpICsgMSk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG5leHREYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNaW4oKSB7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGb3JtRE9NKCkge1xuICBpZiAoc3RhcnREYXRlSW5wdXQudmFsdWUgJiYgZW5kRGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgdHJpcCA9IG5ldyBUcmlwKGdldE9iamVjdEZyb21JbnB1dHMoe3RyaXBzOiBbXX0pLCBkZXN0aW5hdGlvbnMpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q29zdE1lc3NhZ2UodHJpcClcbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlQZW5kaW5nTWVzc2FnZSgpO1xuICB9XG5cbiAgZG9tVXBkYXRlcy51cGRhdGVQcmV2aWV3KGRlc3RpbmF0aW9uUHJldmlldywgZGVzdGluYXRpb25MaXN0LCBkZXN0aW5hdGlvbnMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9