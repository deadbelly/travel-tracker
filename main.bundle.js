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
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  background-color: #F9F5F1;\n  font-family: \"Lato\", sans-serif; }\n\nh1 {\n  font-size: 5vmin; }\n\nbody {\n  background-color: #FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%; }\n\n#blockColorblindContent {\n  display: none; }\n\n.hidden {\n  display: none !important; }\n\n.navbar {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 30%; }\n  .navbar img {\n    position: relative;\n    height: auto;\n    width: 75%; }\n\n.pending {\n  color: #F9D1CB; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 70%;\n  overflow: hidden;\n  text-align: center; }\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll; }\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 22%;\n  width: 100%;\n  transition: .8s ease;\n  overflow: hidden; }\n  .trip .details {\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin; }\n  .trip button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%; }\n    .trip button .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      height: auto;\n      width: 25%; }\n  .trip img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 100%;\n    width: 100%; }\n  .trip:hover {\n    height: 40%;\n    width: 100%; }\n    .trip:hover .details {\n      display: block; }\n\n.trip:focus-within {\n  height: 40%;\n  width: 100%; }\n  .trip:focus-within .details {\n    display: block; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss"],"names":[],"mappings":"AAEA;EACE,yBAA0B;EAC1B,+BAA+B,EAAA;;AAGjC;EACE,gBAAgB,EAAA;;AAGlB;EACE,yBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,aAAa,EAAA;;AAGf;EACE,wBAAwB,EAAA;;AAG1B;EACE,mBAAmB;ECvBnB,aAAa;EACb,sBDuB2B;ECtB3B,2BDsBuC;ECrBvC,iBDqB+C;EAC/C,UAAU,EAAA;EAHZ;IAKI,kBAAkB;IChCpB,YDiC6B;IChC7B,UDgCkC,EAAA;;AAIpC;EACE,cAAc,EAAA;;AAGhB;ECpCE,aAAa;EACb,sBDoC2B;ECnC3B,2BDmCuC;EClCvC,iBDkC+C;EAC/C,UAAU;EACV,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;ECxDf,WDyD0B;ECxD1B,WDwDgC;EAChC,oBAAoB;EACpB,gBAAgB,EAAA;EANlB;IAQI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB,EAAA;EAXtB;IAcI,gBAAgB;IAChB,YAAY;IACZ,OAAO;IACP,UAAU,EAAA;IAjBd;MAmBM,+BAA+B;MAC/B,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,uBAAuB;MACvB,YAAY;MACZ,gBAAgB;MAChB,iBAAiB;MACjB,YAAY;MChFhB,YDiF+B;MChF/B,UDgFoC,EAAA;EA5BtC;IAgCI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;ICxFlC,YDyF6B;ICxF7B,WDwFmC,EAAA;EApCrC;ICrDE,WD4F4B;IC3F5B,WD2FkC,EAAA;IAvCpC;MAyCM,cAAc,EAAA;;AAKpB;ECnGE,WDoG0B;ECnG1B,WDmGgC,EAAA;EADlC;IAGI,cAAc,EAAA","sourcesContent":["@import 'variables';\n\nhtml {\n  background-color: \t#F9F5F1;\n  font-family: \"Lato\", sans-serif;\n}\n\nh1 {\n  font-size: 5vmin;\n}\n\nbody {\n  background-color:#FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  display: flex;\n  height: 98vh;\n  width: 99%;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.navbar {\n  align-items: center;\n  @include displayFlex(column, flex-start, nowrap);\n  width: 30%;\n  & img{\n    position: relative;\n    @include setDimensions(auto, 75%);\n  }\n}\n\n.pending {\n  color: #F9D1CB;\n}\n\nmain {\n  @include displayFlex(column, flex-start, nowrap);\n  width: 70%;\n  overflow: hidden;\n  text-align: center;\n}\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll;\n}\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  @include setDimensions(22%, 100%);\n  transition: .8s ease;\n  overflow: hidden;\n  & .details{\n    display: none;\n    font-size: 2vmin;\n    text-align: left;\n    line-height: 1vmin;\n  }\n  & button {\n    background: none;\n    border: none;\n    top: 1%;\n    bottom: 1%;\n    & .info-block {\n      font-family: \"Lato\", sans-serif;\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      background-color: black;\n      color: white;\n      padding-left: 5%;\n      padding-right: 5%;\n      opacity: 85%;\n      @include setDimensions(auto, 25%);\n    }\n  }\n  & img {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    @include setDimensions(100%, 100%);\n  }\n  &:hover {\n    @include setDimensions(40%, 100%);\n    & .details {\n      display: block;\n    }\n  }\n}\n\n.trip:focus-within {\n  @include setDimensions(40%, 100%);\n  & .details {\n    display: block;\n  }\n}\n","@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n"],"sourceRoot":""}]);
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

  isPending() {
    if(this.status === 'pending'){
      return this.status
    }
    return ''
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
  toggleHidden(ele) {
    ele.classList.toggle('hidden');
  },

  displayTrip(trip, destinations, tripList) {
    const destination = trip.findDestination(destinations);

    tripList.insertAdjacentHTML('beforeend',
    `<article class="trip">
      <button>
        <img src="${destination.image}"  alt="${destination.alt}">
        <div class="info-block">
          <h2>${destination.destination}</h2>
          <h3 class="pending">${trip.isPending()}</h3>
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

  displayNavBar(user, navBar){
    navBar.insertAdjacentHTML('afterbegin',
    `<img src="./images/profpic.png" alt="user's profile picture">
    <h2>${user.name}</h2>
    <h3>Welcome back, traveler!</h3>
    <h3>Approved Trips: ${user.returnTripsByStatus('approved').length}
      <br>Pending Trips: ${user.returnTripsByStatus('pending').length}
      <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>
    <button type="button" name="button">plan a trip!</button>`)
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
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchRequests);


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
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********







// An example of how you tell webpack to use a CSS (SCSS) file


// An example of how you tell webpack to use an image (also need to link to it in the index.html)


let user;
let destinations;

const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const navBar = document.querySelector('.navbar');

const main = document.querySelector('main');
const tripList = document.querySelector('.trip-list');

loginButton.addEventListener('click', fetchAndLoadDataModel)

function fetchAndLoadDataModel() {
  event.preventDefault;
  const username = usernameInput.value;
  const id = username.match(/\d+/)[0]
  const password = passwordInput.value;

  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_3__["default"].getAllData(id))
    .then(responses => {
      if (checkLoginCredentials(responses[0], username, password, id)) {
        generateClasses(responses[0], responses[1], responses[2]);
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].toggleHidden(loginPage);
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].toggleHidden(main);
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].toggleHidden(navBar);
        displayAllTrips();
        _domUpdates__WEBPACK_IMPORTED_MODULE_4__["default"].displayNavBar(user, navBar);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9wcm9mcGljLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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QWE7Ozs7Ozs7Ozs7Ozs7QUNyQjVCO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUMwQjtBQUNBO0FBQ2M7O0FBRUk7QUFDTjs7QUFFdEM7QUFDeUI7O0FBRXpCO0FBQzZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHNEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVU7QUFDbEIsUUFBUSxtREFBVTtBQUNsQixRQUFRLG1EQUFVO0FBQ2xCO0FBQ0EsUUFBUSxtREFBVTtBQUNsQixPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDhEQUE4RCxvREFBVztBQUN6RSxhQUFhLDZDQUFJO0FBQ2pCOzs7QUFHQTtBQUNBLDZCQUE2QixHQUFHO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSCIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY1RjE7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA1dm1pbjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGODtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogOTklOyB9XFxuXFxuI2Jsb2NrQ29sb3JibGluZENvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm5hdmJhciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAzMCU7IH1cXG4gIC5uYXZiYXIgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7IH1cXG5cXG4ucGVuZGluZyB7XFxuICBjb2xvcjogI0Y5RDFDQjsgfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRyaXAtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG5cXG4udHJpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAudHJpcCAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxdm1pbjsgfVxcbiAgLnRyaXAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0b3A6IDElO1xcbiAgICBib3R0b206IDElOyB9XFxuICAgIC50cmlwIGJ1dHRvbiAuaW5mby1ibG9jayB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgICAgb3BhY2l0eTogODUlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogMjUlOyB9XFxuICAudHJpcCBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcDpob3ZlciB7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAudHJpcDpob3ZlciAuZGV0YWlscyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4udHJpcDpmb2N1cy13aXRoaW4ge1xcbiAgaGVpZ2h0OiA0MCU7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRyaXA6Zm9jdXMtd2l0aGluIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxtQkFBbUI7RUN2Qm5CLGFBQWE7RUFDYixzQkR1QjJCO0VDdEIzQiwyQkRzQnVDO0VDckJ2QyxpQkRxQitDO0VBQy9DLFVBQVUsRUFBQTtFQUhaO0lBS0ksa0JBQWtCO0lDaENwQixZRGlDNkI7SUNoQzdCLFVEZ0NrQyxFQUFBOztBQUlwQztFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUNwQ0UsYUFBYTtFQUNiLHNCRG9DMkI7RUNuQzNCLDJCRG1DdUM7RUNsQ3ZDLGlCRGtDK0M7RUFDL0MsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VDeERmLFdEeUQwQjtFQ3hEMUIsV0R3RGdDO0VBQ2hDLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTtFQU5sQjtJQVFJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBWHRCO0lBY0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVSxFQUFBO0lBakJkO01BbUJNLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsWUFBWTtNQ2hGaEIsWURpRitCO01DaEYvQixVRGdGb0MsRUFBQTtFQTVCdEM7SUFnQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lDeEZsQyxZRHlGNkI7SUN4RjdCLFdEd0ZtQyxFQUFBO0VBcENyQztJQ3JERSxXRDRGNEI7SUMzRjVCLFdEMkZrQyxFQUFBO0lBdkNwQztNQXlDTSxjQUFjLEVBQUE7O0FBS3BCO0VDbkdFLFdEb0cwQjtFQ25HMUIsV0RtR2dDLEVBQUE7RUFEbEM7SUFHSSxjQUFjLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IFxcdCNGOUY1RjE7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDV2bWluO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6I0ZCRkJGODtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogOTklO1xcbn1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBub3dyYXApO1xcbiAgd2lkdGg6IDMwJTtcXG4gICYgaW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgNzUlKTtcXG4gIH1cXG59XFxuXFxuLnBlbmRpbmcge1xcbiAgY29sb3I6ICNGOUQxQ0I7XFxufVxcblxcbm1haW4ge1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBub3dyYXApO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50cmlwLWxpc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4udHJpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDIyJSwgMTAwJSk7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAmIC5kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMXZtaW47XFxuICB9XFxuICAmIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdG9wOiAxJTtcXG4gICAgYm90dG9tOiAxJTtcXG4gICAgJiAuaW5mby1ibG9jayB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgICAgcGFkZGluZy1yaWdodDogNSU7XFxuICAgICAgb3BhY2l0eTogODUlO1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG4gICAgfVxcbiAgfVxcbiAgJiBpbWcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEwMCUsIDEwMCUpO1xcbiAgfVxcbiAgJjpob3ZlciB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNDAlLCAxMDAlKTtcXG4gICAgJiAuZGV0YWlscyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRyaXA6Zm9jdXMtd2l0aGluIHtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNDAlLCAxMDAlKTtcXG4gICYgLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gc2V0RGltZW5zaW9ucygkaGVpZ2h0LCAkd2lkdGgpIHtcXG4gIGhlaWdodDogJGhlaWdodDtcXG4gIHdpZHRoOiAkd2lkdGg7XFxufVxcblxcbkBtaXhpbiBkaXNwbGF5RmxleCgkZmxleC1kaXJlY3Rpb24sICRqdXN0aWZ5LWNvbnRlbnQsICRmbGV4LXdyYXApIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xcbiAgZmxleC13cmFwOiAkZmxleC13cmFwXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRhdGFPYmplY3QpIHtcbiAgICB0aGlzLmlkID0gZGF0YU9iamVjdC5pZDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGF0YU9iamVjdC5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGF0YU9iamVjdC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICB0aGlzLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gPSBkYXRhT2JqZWN0LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgdGhpcy5pbWFnZSA9IGRhdGFPYmplY3QuaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBkYXRhT2JqZWN0LmFsdDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uXG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5pZCA9IGRhdGFPYmplY3QuaWRcbiAgICB0aGlzLnVzZXJJRCA9IGRhdGFPYmplY3QudXNlcklEXG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gZGF0YU9iamVjdC5kZXN0aW5hdGlvbklEXG4gICAgdGhpcy50cmF2ZWxlcnMgPSBkYXRhT2JqZWN0LnRyYXZlbGVyc1xuICAgIHRoaXMuZGF0ZSA9IGRhdGFPYmplY3QuZGF0ZVxuICAgIHRoaXMuZHVyYXRpb24gPSBkYXRhT2JqZWN0LmR1cmF0aW9uXG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhT2JqZWN0LnN0YXR1c1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IGRhdGFPYmplY3Quc3VnZ2VzdGVkQWN0aXZpdGllc1xuICAgIHRoaXMuY29zdCA9IHRoaXMuY2FsY3VsYXRlQ29zdChkZXN0aW5hdGlvbnMpXG4gIH1cblxuICBmaW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09PSB0aGlzLmRlc3RpbmF0aW9uSUQpO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdChkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucyk7XG4gICAgY29uc3QgZmxpZ2h0Q29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0aGlzLnRyYXZlbGVycztcbiAgICBjb25zdCBsb2RnaW5nQ29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdGhpcy50cmF2ZWxlcnMgKiB0aGlzLmR1cmF0aW9uO1xuICAgIHJldHVybiB7XG4gICAgICBiZWZvcmVBZ2VudDogZmxpZ2h0Q29zdCArIGxvZGdpbmdDb3N0LFxuICAgICAgYWZ0ZXJBZ2VudDogTWF0aC5jZWlsKDEuMSAqIChmbGlnaHRDb3N0ICsgbG9kZ2luZ0Nvc3QpKVxuICAgIH1cbiAgfVxuXG4gIGlzUGVuZGluZygpIHtcbiAgICBpZih0aGlzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKXtcbiAgICAgIHJldHVybiB0aGlzLnN0YXR1c1xuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwXG4iLCJpbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAnXG5cbmNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJEYXRhLmlkXG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXJEYXRhLm5hbWVcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyRGF0YS50cmF2ZWxlclR5cGVcbiAgICB0aGlzLnRyaXBzID0gdGhpcy5nZW5lcmF0ZVRyaXBzKHRyaXBEYXRhLCBkZXN0aW5hdGlvbnMpXG4gIH1cblxuICBnZW5lcmF0ZVRyaXBzKHRyaXBEYXRhLCBkZXN0aW5hdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QnlEYXRlKHRoaXMuZmlsdGVyVHJpcERhdGEodHJpcERhdGEpKS5tYXAoZGF0YSA9PiBuZXcgVHJpcChkYXRhLCBkZXN0aW5hdGlvbnMpKTtcbiAgfVxuXG4gIGZpbHRlclRyaXBEYXRhKHRyaXBEYXRhKSB7XG4gICAgcmV0dXJuIHRyaXBEYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcbiAgfVxuXG4gIHNvcnRCeURhdGUodHJpcERhdGEpIHtcbiAgICB0cmlwRGF0YS5mb3JFYWNoKHRyaXAgPT4gdHJpcC5kYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKSk7XG4gICAgcmV0dXJuIHRyaXBEYXRhLnNvcnQoKGEsIGIpID0+IGIuZGF0ZSAtIGEuZGF0ZSk7XG4gIH1cblxuICByZXR1cm5Ucmlwc0J5U3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSBzdGF0dXMpO1xuICB9XG5cbiAgcmV0dXJuVHJpcHNUaGlzWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiAobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gdHJpcC5kYXRlLmdldEZ1bGxZZWFyKCkpIDw9IDEpO1xuICB9XG5cbiAgZ2V0Q29zdEZvclllYXIoKSB7XG4gIHJldHVybiB0aGlzLnJldHVyblRyaXBzVGhpc1llYXIoKS5yZWR1Y2UoKHRvdGFsQ29zdCwgdHJpcCkgPT4ge1xuICAgIHRvdGFsQ29zdCArPSB0cmlwLmNvc3QuYWZ0ZXJBZ2VudDtcbiAgICByZXR1cm4gdG90YWxDb3N0O1xuICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgZG9tVXBkYXRlcyA9IHtcbiAgdG9nZ2xlSGlkZGVuKGVsZSkge1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSxcblxuICBkaXNwbGF5VHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMsIHRyaXBMaXN0KSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0cmlwLmZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMpO1xuXG4gICAgdHJpcExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgIGA8YXJ0aWNsZSBjbGFzcz1cInRyaXBcIj5cbiAgICAgIDxidXR0b24+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiAgYWx0PVwiJHtkZXN0aW5hdGlvbi5hbHR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJsb2NrXCI+XG4gICAgICAgICAgPGgyPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9oMj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJwZW5kaW5nXCI+JHt0cmlwLmlzUGVuZGluZygpfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwPnN0YXJ0IGRhdGU6ICAke3RyaXAuZGF0ZS50b0RhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICA8cD5kdXJhdGlvbjogICR7dHJpcC5kdXJhdGlvbn0gZGF5czwvcD5cbiAgICAgICAgICAgIDxwPnRyYXZlbGVyczogICAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgIDxwPmNvc3Q6ICAkJHt0cmlwLmNhbGN1bGF0ZUNvc3QoZGVzdGluYXRpb25zKS5hZnRlckFnZW50fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5gKTtcbiAgfSxcblxuICBkaXNwbGF5TmF2QmFyKHVzZXIsIG5hdkJhcil7XG4gICAgbmF2QmFyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYDxpbWcgc3JjPVwiLi9pbWFnZXMvcHJvZnBpYy5wbmdcIiBhbHQ9XCJ1c2VyJ3MgcHJvZmlsZSBwaWN0dXJlXCI+XG4gICAgPGgyPiR7dXNlci5uYW1lfTwvaDI+XG4gICAgPGgzPldlbGNvbWUgYmFjaywgdHJhdmVsZXIhPC9oMz5cbiAgICA8aDM+QXBwcm92ZWQgVHJpcHM6ICR7dXNlci5yZXR1cm5Ucmlwc0J5U3RhdHVzKCdhcHByb3ZlZCcpLmxlbmd0aH1cbiAgICAgIDxicj5QZW5kaW5nIFRyaXBzOiAke3VzZXIucmV0dXJuVHJpcHNCeVN0YXR1cygncGVuZGluZycpLmxlbmd0aH1cbiAgICAgIDxicj5JbiB0aGUgcGFzdCB5ZWFyIHlvdSd2ZSBzcGVudCAkJHt1c2VyLmdldENvc3RGb3JZZWFyKCl9IG9uIFRyYXZlbDwvaDM+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiPnBsYW4gYSB0cmlwITwvYnV0dG9uPmApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjb25zdCBmZXRjaFJlcXVlc3RzID0ge1xuICBnZXRUcmF2ZWxlcihpZCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHtpZH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0sXG5cbiAgZ2V0VHJpcHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxuXG4gIGdldERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxuXG4gIGdldEFsbERhdGEoaWQpIHtcbiAgICByZXR1cm4gW2ZldGNoUmVxdWVzdHMuZ2V0VHJhdmVsZXIoaWQpLCBmZXRjaFJlcXVlc3RzLmdldFRyaXBzKCksIGZldGNoUmVxdWVzdHMuZ2V0RGVzdGluYXRpb25zKCldXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hSZXF1ZXN0c1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcHJvZnBpYy5wbmdcIjsiLCIvLyBUaGlzIGlzIHRoZSBKYXZhU2NyaXB0IGVudHJ5IGZpbGUgLSB5b3VyIGNvZGUgYmVnaW5zIGhlcmVcbi8vIERvIG5vdCBkZWxldGUgb3IgcmVuYW1lIHRoaXMgZmlsZSAqKioqKioqKlxuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCc7XG5pbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9EZXN0aW5hdGlvbic7XG5cbmltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG4vLyBBbiBleGFtcGxlIG9mIGhvdyB5b3UgdGVsbCB3ZWJwYWNrIHRvIHVzZSBhIENTUyAoU0NTUykgZmlsZVxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG4vLyBBbiBleGFtcGxlIG9mIGhvdyB5b3UgdGVsbCB3ZWJwYWNrIHRvIHVzZSBhbiBpbWFnZSAoYWxzbyBuZWVkIHRvIGxpbmsgdG8gaXQgaW4gdGhlIGluZGV4Lmh0bWwpXG5pbXBvcnQgJy4vaW1hZ2VzL3Byb2ZwaWMucG5nJ1xuXG5sZXQgdXNlcjtcbmxldCBkZXN0aW5hdGlvbnM7XG5cbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1wYWdlJyk7XG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lLWlucHV0Jyk7XG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3JkLWlucHV0Jyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idXR0b24nKTtcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgdHJpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1saXN0Jyk7XG5cbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmV0Y2hBbmRMb2FkRGF0YU1vZGVsKVxuXG5mdW5jdGlvbiBmZXRjaEFuZExvYWREYXRhTW9kZWwoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICBjb25zdCB1c2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gIGNvbnN0IGlkID0gdXNlcm5hbWUubWF0Y2goL1xcZCsvKVswXVxuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG5cbiAgUHJvbWlzZS5hbGwoZmV0Y2hSZXF1ZXN0cy5nZXRBbGxEYXRhKGlkKSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgaWYgKGNoZWNrTG9naW5DcmVkZW50aWFscyhyZXNwb25zZXNbMF0sIHVzZXJuYW1lLCBwYXNzd29yZCwgaWQpKSB7XG4gICAgICAgIGdlbmVyYXRlQ2xhc3NlcyhyZXNwb25zZXNbMF0sIHJlc3BvbnNlc1sxXSwgcmVzcG9uc2VzWzJdKTtcbiAgICAgICAgZG9tVXBkYXRlcy50b2dnbGVIaWRkZW4obG9naW5QYWdlKTtcbiAgICAgICAgZG9tVXBkYXRlcy50b2dnbGVIaWRkZW4obWFpbik7XG4gICAgICAgIGRvbVVwZGF0ZXMudG9nZ2xlSGlkZGVuKG5hdkJhcik7XG4gICAgICAgIGRpc3BsYXlBbGxUcmlwcygpO1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlOYXZCYXIodXNlciwgbmF2QmFyKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VzWzBdLm1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQoJ0xPR0lOIEZBSUxFRFxcbmludmFsaWQgdXNlcm5hbWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHBhc3N3b3JkJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2xhc3Nlcyh1c2VyRGF0YSwgdHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLm1hcChkYXRhID0+IG5ldyBEZXN0aW5hdGlvbihkYXRhKSk7XG4gIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YSwgdHJpcERhdGEudHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cblxuZnVuY3Rpb24gY2hlY2tMb2dpbkNyZWRlbnRpYWxzKHJlc3BvbnNlLCB1c2VybmFtZSwgcGFzc3dvcmQsIGlkKSB7XG4gIGlmKHVzZXJuYW1lID09PSBgdHJhdmVsZXIke2lkfWAgJiYgcGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIwJyAmJiByZXNwb25zZS5pZCA9PSBpZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWxsVHJpcHMoKSB7XG4gIHVzZXIudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwKHRyaXAsIGRlc3RpbmF0aW9ucywgdHJpcExpc3QpXG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==