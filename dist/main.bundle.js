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
___CSS_LOADER_EXPORT___.push([module.i, "main {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 70%;\n  overflow: hidden;\n  text-align: center; }\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll; }\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 22%;\n  width: 100%;\n  transition: .8s ease;\n  overflow: hidden; }\n  .trip:hover, .trip:focus-within {\n    height: 40%;\n    width: 100%; }\n    .trip:hover .trip__info-block--details, .trip:focus-within .trip__info-block--details {\n      display: block; }\n\n.trip__img {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%; }\n\n.trip--wrapper {\n  background: none;\n  border: none;\n  top: 1%;\n  bottom: 1%; }\n\n.trip__info-block {\n  font-family: \"Lato\", sans-serif;\n  position: absolute;\n  bottom: 5%;\n  right: 3%;\n  background-color: black;\n  color: white;\n  padding-left: 5%;\n  padding-right: 5%;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n\n.trip__info-block--details {\n  display: none;\n  font-size: 2vmin;\n  text-align: left;\n  line-height: 1vmin; }\n\n.pending {\n  color: #F9D1CB; }\n\n.preview {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 350%;\n  width: 100%; }\n\n.cost-details {\n  align-self: center;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n  color: white;\n  opacity: 85%;\n  height: auto;\n  width: 25%; }\n\n.login-page {\n  align-self: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 50%;\n  width: 50%;\n  text-align: center;\n  margin-left: 25%; }\n\n.sidebar {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  width: 30%; }\n\n.prof-pic {\n  position: relative;\n  height: auto;\n  width: 75%; }\n\n.sidebar-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 30%;\n  width: 100%; }\n\n.sidebar-btn-area {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 20%;\n  width: 100%; }\n\n.user-name, .traveler-type {\n  line-height: 1vmin; }\n\n.new-trip-form {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  flex-wrap: nowrap; }\n  .new-trip-form input {\n    height: auto;\n    width: 80%;\n    font-family: \"Lato\", sans-serif;\n    font-size: 2vmin; }\n\n@media only screen and (min-width: 740px) {\n  body {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: nowrap; }\n  h3 {\n    font-size: 2.5vmin; } }\n\n@media only screen and (max-width: 1024px) {\n  .trip__info-block {\n    height: auto;\n    width: 50%; } }\n\n@media only screen and (max-width: 740px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr; }\n  p, .pending, h3 {\n    font-size: 2vmin; }\n  .sidebar {\n    height: auto;\n    width: 100%; }\n  .prof-pic {\n    height: auto;\n    width: 20%; }\n  main {\n    height: auto;\n    width: 100%; }\n  .plan-trip-button {\n    height: auto;\n    width: 50%; }\n  .trip {\n    height: 50%;\n    width: 100%; }\n    .trip:hover, .trip:focus-within {\n      height: 70%;\n      width: 100%; }\n  .trip__img {\n    height: 100%;\n    width: auto; }\n  .desktop-title {\n    display: none; }\n  .preview {\n    display: none; } }\n\n@media only screen and (max-width: 450px) {\n  p, .pending, h3 {\n    font-size: 4vmin; } }\n\n.filter-options, .agent-tools {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap; }\n  .filter-options button, .agent-tools button {\n    border-style: solid;\n    border-color: black;\n    margin: 5%;\n    height: auto;\n    width: 80%; }\n\n.agent-info {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap; }\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nhtml {\n  background-color: #F9F5F1;\n  font-family: \"Lato\", sans-serif; }\n\nh1 {\n  font-size: 5vmin;\n  margin: none; }\n  h1 img {\n    height: auto;\n    width: 7%; }\n\nbody {\n  background-color: #FBFBF8;\n  opacity: 95%;\n  align-self: center;\n  height: 98vh;\n  width: 99%; }\n\n#blockColorblindContent {\n  display: none; }\n\n.hidden {\n  display: none !important; }\n\n.new-trip-form {\n  height: 80%;\n  width: 100%; }\n\nbutton {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%; }\n  button img {\n    height: auto;\n    width: 20%; }\n  button:hover {\n    transition: .4s ease;\n    cursor: pointer;\n    font-size: 3.2vmin; }\n    button:hover img {\n      height: auto;\n      width: 25%;\n      transition: .4s ease; }\n", "",{"version":3,"sources":["webpack://./src/css/_main.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login-page.scss","webpack://./src/css/_sidebar.scss","webpack://./src/css/_media-queries.scss","webpack://./src/css/_agent-dom.scss","webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"AAAA;ECeE,aAAa;EACb,sBDf2B;ECgB3B,2BDhBuC;ECiBvC,iBDjB+C;EAC/C,UAAU;EACV,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;ECLf,WDM0B;ECL1B,WDKgC;EAChC,oBAAoB;EACpB,gBAAgB,EAAA;EANlB;ICFE,WDU4B;ICT5B,WDSkC,EAAA;IARpC;MAUM,cAAc,EAAA;;AAKpB;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;ECrBhC,YDsB2B;ECrB3B,WDqBiC,EAAA;;AAGnC;EACE,gBAAgB;EAChB,YAAY;EACZ,OAAO;EACP,UAAU,EAAA;;AAGZ;EACE,+BCrCuB;EDsCvB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,uBC5CiB;ED6CjB,YC5CsB;ED6CtB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;ECzCZ,YD0C2B;ECzC3B,UDyCgC,EAAA;;AAGlC;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,cC7DqB,EAAA;;ADgEvB;ECnDE,aAAa;EACb,mBDmDwB;EClDxB,uBDkDgC;ECjDhC,iBDiDwC;EACxC,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;EC5D5B,YD6D2B;EC5D3B,WD4DiC,EAAA;;AAGnC;EACE,kBAAkB;EAClB,+BCtEuB;EDuEvB,uBC1EiB;ED2EjB,YC1EsB;ED2EtB,YAAY;ECrEZ,YDsE2B;ECrE3B,UDqEgC,EAAA;;AEhFlC;EACE,kBAAkB;EAClB,mBAAmB;EDanB,aAAa;EACb,sBCb2B;EDc3B,uBCdmC;EDenC,iBCf2C;EDO3C,WCN0B;EDO1B,UCP+B;EAC/B,kBAAkB;EAClB,gBAAgB,EAAA;;ACNlB;EACE,mBAAmB;EFcnB,aAAa;EACb,sBEd2B;EFe3B,2BEfuC;EFgBvC,iBEhB+C;EAC/C,UAAU,EAAA;;AAGZ;EACE,kBAAkB;EFGlB,YEF2B;EFG3B,UEHgC,EAAA;;AAGlC;EACE,kBAAkB;EFGlB,aAAa;EACb,sBEH2B;EFI3B,uBEJmC;EFKnC,iBEL2C;EFH3C,WEI0B;EFH1B,WEGgC,EAAA;;AAGlC;EFFE,aAAa;EACb,2BEEgC;EFDhC,uBECwC;EFAxC,iBEAgD;EFRhD,WES0B;EFR1B,WEQgC,EAAA;;AAGlC;EACE,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB;EFZnB,aAAa;EACb,sBEY2B;EFX3B,6BEWyC;EFVzC,iBEUiD,EAAA;EAFnD;IFhBE,YEoB6B;IFnB7B,UEmBkC;IAChC,+BFzBqB;IE0BrB,gBAAgB,EAAA;;AChCpB;EACE;IHcA,aAAa;IACb,mBGd0B;IHe1B,2BGfsC;IHgBtC,iBGhB8C,EAAA;EAG9C;IACE,kBAAkB,EAAA,EACnB;;AAGH;EACE;IHDA,YGE6B;IHD7B,UGCkC,EAAA,EACjC;;AAGH;EACE;IACE,aAAa;IACb,0BAA0B,EAAA;EAG5B;IACE,gBAAgB,EAAA;EAGlB;IHhBA,YGiB6B;IHhB7B,WGgBmC,EAAA;EAGnC;IHpBA,YGqB6B;IHpB7B,UGoBkC,EAAA;EAGlC;IHxBA,YGyB6B;IHxB7B,WGwBmC,EAAA;EAGnC;IH5BA,YG6B6B;IH5B7B,UG4BkC,EAAA;EAGlC;IHhCA,WGiC4B;IHhC5B,WGgCkC,EAAA;IADlC;MHhCA,WGmC8B;MHlC9B,WGkCoC,EAAA;EAIpC;IHvCA,YGwC6B;IHvC7B,WGuCmC,EAAA;EAGnC;IACE,aAAa,EAAA;EAGf;IACA,aAAa,EAAA,EACZ;;AAGH;EACE;IACE,gBAAgB,EAAA,EACjB;;ACjEH;EJeE,aAAa;EACb,sBIf2B;EJgB3B,uBIhBmC;EJiBnC,iBIjB2C,EAAA;EAD7C;IAGI,mBAAmB;IACnB,mBJDe;IIEf,UAAU;IJKZ,YIJ6B;IJK7B,UILkC,EAAA;;AAIpC;EACE,mBAAmB;EJInB,aAAa;EACb,sBIJ2B;EJK3B,uBILmC;EJMnC,iBIN2C,EAAA;;ACZ7C,2EAAA;AAEA;+ECiN+E;AD9M/E;;;ECkNE;AD7MF;EACE,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;+ECgN+E;AD7M/E;;ECgNE;AD5MF;EACE,SAAS,EAAA;;AAGX;;;EC+ME;AD1MF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+EC2M+E;ADxM/E;;;EC4ME;ADvMF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;EC6ME;ADxMF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;+EC2M+E;ADxM/E;;EC2ME;ADvMF;EACE,6BAA6B,EAAA;;AAG/B;;;EC0ME;ADrMF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;EC0ME;ADtMF;;EAEE,mBAAmB,EAAA;;AAGrB;;;ECyME;ADpMF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;ECwME;ADpMF;EACE,cAAc,EAAA;;AAGhB;;;ECuME;ADlMF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+ECiM+E;AD9L/E;;ECiME;AD7LF;EACE,kBAAkB,EAAA;;AAGpB;+EC8L+E;AD3L/E;;;EC+LE;AD1LF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;ECiME;AD5LF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;ECgME;AD3LF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;EC8LE;AD1LF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;EC4LE;ADxLF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;EC0LE;ADtLF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;ECwLE;ADpLF;EACE,8BAA8B,EAAA;;AAGhC;;;;;ECyLE;ADlLF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;EC0LE;ADtLF;EACE,wBAAwB,EAAA;;AAG1B;;ECwLE;ADpLF;EACE,cAAc,EAAA;;AAGhB;;;ECuLE;AACF;;EDjLE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;ECsLE;AACF;;EDjLE,YAAY,EAAA;;AAGd;;;ECqLE;AACF;EDhLE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;ECoLE;AACF;EDhLE,wBAAwB,EAAA;;AAG1B;;;ECmLE;AD9KF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;+ECiL+E;AD9K/E;;ECiLE;AD7KF;EACE,cAAc,EAAA;;AAGhB;;EC+KE;AD3KF;EACE,kBAAkB,EAAA;;AAGpB;+EC4K+E;ADzK/E;;EC4KE;ADxKF;EACE,aAAa,EAAA;;AAGf;;EC0KE;AACF;EDtKE,aAAa,EAAA;;AC3Uf;EACE,yBNTkB;EMUlB,+BNJuB,EAAA;;AMOzB;EACE,gBAAgB;EAChB,YAAY,EAAA;EAFd;INHE,YMO6B;INN7B,SMMiC,EAAA;;AAInC;EACE,yBNrBwB;EMsBxB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,aAAa,EAAA;;AAGf;EACE,wBAAwB,EAAA;;AAG1B;EN3BE,WM4B0B;EN3B1B,WM2BgC,EAAA;;AAGlC;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB,EAAA;EAJnB;IN/BE,YMqC6B;INpC7B,UMoCkC,EAAA;EANpC;IASI,oBAAoB;IACpB,eAAe;IACf,kBAAkB,EAAA;IAXtB;MN/BE,YM4C+B;MN3C/B,UM2CoC;MAChC,oBAAoB,EAAA","sourcesContent":["main {\n  @include displayFlex(column, flex-start, nowrap);\n  width: 70%;\n  overflow: hidden;\n  text-align: center;\n}\n\n.trip-list {\n  display: inline-block;\n  overflow-y: scroll;\n}\n\n.trip {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  @include setDimensions(22%, 100%);\n  transition: .8s ease;\n  overflow: hidden;\n  &:hover, &:focus-within{\n    @include setDimensions(40%, 100%);\n    & .trip__info-block--details {\n      display: block;\n    }\n  }\n}\n\n.trip__img {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  @include setDimensions(100%, 100%);\n}\n\n.trip--wrapper {\n  background: none;\n  border: none;\n  top: 1%;\n  bottom: 1%;\n}\n\n.trip__info-block {\n  font-family: $font;\n  position: absolute;\n  bottom: 5%;\n  right: 3%;\n  background-color: $block-color;\n  color: $block-font-color;\n  padding-left: 5%;\n  padding-right: 5%;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n\n.trip__info-block--details{\n  display: none;\n  font-size: 2vmin;\n  text-align: left;\n  line-height: 1vmin;\n}\n\n.pending {\n  color: $pending-color;\n}\n\n.preview{\n  @include displayFlex(row, center, nowrap);\n  background-size: 90% 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  @include setDimensions(350%, 100%);\n}\n\n.cost-details{\n  align-self: center;\n  font-family: $font;\n  background-color: $block-color;\n  color: $block-font-color;\n  opacity: 85%;\n  @include setDimensions(auto, 25%);\n}\n","$wash-color: #F9F5F1;\n$background-color: #FBFBF8;\n$pending-color: #F9D1CB;\n$block-color: black;\n$block-font-color: white;\n\n$font: \"Lato\", sans-serif;\n\n\n@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n",".login-page{\n  align-self: center;\n  align-items: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(50%, 50%);\n  text-align: center;\n  margin-left: 25%;\n}\n",".sidebar {\n  align-items: center;\n  @include displayFlex(column, flex-start, nowrap);\n  width: 30%;\n}\n\n.prof-pic{\n  position: relative;\n  @include setDimensions(auto, 75%);\n}\n\n.sidebar-content {\n  text-align: center;\n  @include displayFlex(column, center, nowrap);\n  @include setDimensions(30%, 100%);\n}\n\n.sidebar-btn-area {\n  @include displayFlex(row-reverse, center, nowrap);\n  @include setDimensions(20%, 100%);\n}\n\n.user-name, .traveler-type{\n  line-height: 1vmin;\n}\n\n.new-trip-form {\n  align-items: center;\n  @include displayFlex(column, space-around, nowrap);\n  & input {\n    @include setDimensions(auto, 80%);\n    font-family: $font;\n    font-size: 2vmin;\n  }\n}\n","@media only screen and (min-width: 740px) {\n  body {\n    @include displayFlex(row, flex-start, nowrap);\n  }\n\n  h3 {\n    font-size: 2.5vmin;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .trip__info-block {\n    @include setDimensions(auto, 50%);\n  }\n}\n\n@media only screen and (max-width: 740px) {\n  body {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  p, .pending, h3 {\n    font-size: 2vmin;\n  }\n\n  .sidebar {\n    @include setDimensions(auto, 100%);\n  }\n\n  .prof-pic{\n    @include setDimensions(auto, 20%);\n  }\n\n  main {\n    @include setDimensions(auto, 100%);\n  }\n\n  .plan-trip-button {\n    @include setDimensions(auto, 50%);\n  }\n\n  .trip {\n    @include setDimensions(50%, 100%);\n    &:hover, &:focus-within{\n      @include setDimensions(70%, 100%);\n    }\n  }\n\n  .trip__img{\n    @include setDimensions(100%, auto);\n  }\n\n  .desktop-title {\n    display: none;\n  }\n\n  .preview {\n  display: none;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  p, .pending, h3 {\n    font-size: 4vmin;\n  }\n}\n",".filter-options, .agent-tools {\n  @include displayFlex(column, center, nowrap);\n  & button {\n    border-style: solid;\n    border-color: $block-color;\n    margin: 5%;\n    @include setDimensions(auto, 80%);\n  }\n}\n\n.agent-info{\n  align-items: center;\n  @include displayFlex(column, center, nowrap);\n}\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import 'variables';\n@import 'main';\n@import 'login-page';\n@import 'sidebar';\n@import 'media-queries';\n@import 'agent-dom';\n@import 'normalize';\n\nhtml {\n  background-color: \t$wash-color;\n  font-family: $font;\n}\n\nh1 {\n  font-size: 5vmin;\n  margin: none;\n  & img{\n    @include setDimensions(auto, 7%);\n  }\n}\n\nbody {\n  background-color: $background-color;\n  opacity: 95%;\n  align-self: center;\n  height: 98vh;\n  width: 99%;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.new-trip-form {\n  @include setDimensions(80%, 100%);\n}\n\nbutton {\n  background: none;\n  border: none;\n  font-size: 2.8vmin;\n  margin-bottom: 3%;\n  & img {\n    @include setDimensions(auto, 20%);\n  }\n  &:hover {\n    transition: .4s ease;\n    cursor: pointer;\n    font-size: 3.2vmin;\n    & img {\n      @include setDimensions(auto, 25%);\n      transition: .4s ease;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Agent.js":
/*!**********************!*\
  !*** ./src/Agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Agent {
  constructor(travelerData, tripData, destinations) {
    this.allUsers = this.generateAllUsers(travelerData, tripData, destinations);
    this.pendingFilter = true;
    this.upcomingFilter = false;
    this.userSelect = 0;
    this.currentTravelers = this.findTravelingUsers().length
    this.trips = this.generateTrips();
    this.incomeThisYear = this.getGrossIncome()
  }

  generateAllUsers(travelerData, tripData, destinations) {
    return travelerData.map(traveler => new _User__WEBPACK_IMPORTED_MODULE_0__["default"](traveler, tripData, destinations));
  }

  filterByStatus(tripsArray, status) {
    return tripsArray.filter(trip => trip.status === status);
  }

  filterByUpcoming(tripsArray) {
    return tripsArray.filter(trip => trip.returnStatusInfo() === 'upcoming');
  }

  filterByUser(tripsArray) {
    return tripsArray.filter(trip => trip.userID === this.userSelect);
  }

  generateTrips() {
    let trips = this.allUsers.reduce((acc, user) => {
      return [...acc, ...user.trips];
    }, []);

    if (this.upcomingFilter) {
      trips = this.filterByUpcoming(trips);
    }

    if (this.pendingFilter) {
      trips = this.filterByStatus(trips, 'pending');
    }

    if (this.userSelect > 0) {
      trips = this.filterByUser(trips);
    }

    return trips;
  }

  findTravelingUsers() {
    return this.allUsers.filter(user => user.trips.find(trip => trip.returnStatusInfo() === 'in progress'))
      .map(user => user.id);
  }

  getGrossIncome() {
    return Math.floor(0.1 * (this.allUsers.reduce((acc, user) => {
      return acc + user.getCostForYear();
    }, 0)));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);


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
    if (this.status === 'pending') {
      return this.status
    } else if (new Date().getTime() < new Date(this.date).getTime()) {
      return 'upcoming'
    } else if (new Date().getTime() <= new Date(this.date).getTime() + (1000 * 60 * 60 * 24 * this.duration)) {
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

  filterByStatus(tripsArray, status) {
    return tripsArray.filter(trip => trip.status === status);
  }

  filterByThisYear(tripsArray) {
    return tripsArray.filter(trip => (new Date().getFullYear() - trip.date.getFullYear()) <= 1);
  }

  getCostForYear() {
    return this.filterByThisYear(this.filterByStatus(this.trips, 'approved')).reduce((totalCost, trip) => {
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
      <div tabindex="0" class="trip--wrapper" id="${trip.id}">
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

  displaySidebar(user, sidebar) {
    sidebar.insertAdjacentHTML('afterbegin',
      `<img class="prof-pic" src="./images/profpic.png" alt="user's profile picture">
    <h1 class="user-name">${user.name}</h1>
    <h2 class="traveler-type">${user.travelerType}</h2>
    <div class="sidebar-content welcome-message">
    </div>`);
    this.displayWelcomeMessage(user);
  },

  displayWelcomeMessage(user) {
    let welcomeMessage = document.querySelector('.welcome-message').innerHTML = `
        <h3>Welcome back, traveler!
        <br> ---------
        <br>Approved Trips: ${user.filterByStatus(user.trips, 'approved').length}
        <br> ---------
        <br>Pending Trips: ${user.filterByStatus(user.trips, 'pending').length}
        <br> ---------
        <br>In the past year you've spent $${user.getCostForYear()} on Travel</h3>`;
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
    if (destinations) {
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
  },

  displayError(error, zone) {
    document.querySelector(`.${zone}-errors`).innerText = error
  },

  clearErrors() {
    document.querySelector('.form-message').innerText = 'waiting to calculate cost...'
    document.querySelector('.login-errors').innerText = ''
    document.querySelector('.agent-errors').innerText = ''
  },

  displayAgentDOM(agent, sidebar) {
    sidebar.insertAdjacentHTML('afterbegin',
      `<section class="agent-info">
      <h3>GROSS INCOME THIS YEAR: $${agent.incomeThisYear}</h3>
      <h3>there are ${agent.currentTravelers} travelers on trips right now</h3>
    </section>`);

    this.addTripIDDisplay();
    this.addIDOptions();
  },

  addTripIDDisplay() {
    const infoBlocks = document.querySelectorAll('.trip__info-block')
    infoBlocks.forEach(block => block.insertAdjacentHTML('afterbegin', `<h4>${block.parentNode.id}</h4>`))
  },

  updateUserSpending(user, id) {
    const userSpending = document.querySelector('.user-spending');
    if (id > 0) {
      let thisUser = user.allUsers.find(user => user.id === id);

      userSpending.innerHTML = `${thisUser.name} has spent $${thisUser.getCostForYear()} on travel this year`
    } else {
      userSpending.innerHTML = 'no user selected'
    }
  },

  addIDOptions() {
    document.querySelector('.id-select').innerHTML = ''
    document.querySelectorAll('.trip--wrapper').forEach(trip => {
      document.querySelector('.id-select').insertAdjacentHTML('beforeend', `<option value="${trip.id}">${trip.id}</option>`);
    })
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
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'login'));
  },

  getAllTravelers() {
    return fetch(`http://localhost:3001/api/v1/travelers`)
      .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'login'));
  },

  getTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
      .catch(err => {
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'login')
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'form')
      });
  },

  getDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'login'));
  },

  getAllData(id) {
    return [fetchRequests.getTraveler(id), fetchRequests.getTrips(), fetchRequests.getDestinations()];
  },

  getAgentData() {
    return [fetchRequests.getAllTravelers(), fetchRequests.getTrips(), fetchRequests.getDestinations()];
  },

  postTrip(obj) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'form'));
  },

  deleteTrip(id) {
    fetch(`http://localhost:3001/api/v1/trips/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
  },

  approveAndModifyTrip(obj) {
    return fetch('http://localhost:3001/api/v1/updateTrip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayError(err, 'agent'));
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
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Agent */ "./src/Agent.js");
/* harmony import */ var _fetchRequests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchRequests */ "./src/fetchRequests.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_profpic_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/profpic.png */ "./src/images/profpic.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _images_icons_map_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/icons/map-icon.png */ "./src/images/icons/map-icon.png");
/* harmony import */ var _images_icons_ticket_icon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icons/ticket-icon.png */ "./src/images/icons/ticket-icon.png");
/* harmony import */ var _images_icons_globe_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/icons/globe-icon.png */ "./src/images/icons/globe-icon.png");
/* harmony import */ var _images_icons_suitcase_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/icons/suitcase-icon.png */ "./src/images/icons/suitcase-icon.png");
















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
const destinationList = document.querySelector('.destination-list');
const travelersInput = document.querySelector('.number-of-travelers');
const bookTripButton = document.querySelector('.book-trip-button');
const backButton = document.querySelector('.back-button');

const filterOptions = document.querySelector('.filter-options');
const showPending = document.querySelector('.show-only-pending');
const showUpcoming = document.querySelector('.show-only-upcoming');
const filterByName = document.querySelector('.filter-by-name');
const filterButton = document.querySelector('.filter-button');

const agentTools = document.querySelector('.agent-tools');
const idSelect = document.querySelector('.id-select');
const suggestedActivities = document.querySelector('.suggested-activities');
const rejectButton = document.querySelector('.reject-button');
const approveButton = document.querySelector('.approve-button');


loginButton.addEventListener('click', fetchAndLoadDataModel);
startDateInput.addEventListener('input', setEndMin);
formInputs.forEach(input => input.addEventListener('input', updateFormDOM));
planTripButton.addEventListener('click', toggleFormView);
bookTripButton.addEventListener('click', bookTrip);
backButton.addEventListener('click', toggleFormView);
filterButton.addEventListener('click', filterTrips);
rejectButton.addEventListener('click', rejectAndRemove);
approveButton.addEventListener('click', approveAndModify);



//INITIAL LOAD
function fetchAndLoadDataModel() {
  event.preventDefault();

  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getAllData(checkLoginCredentials()))
    .then(responses => {
      if (!responses[0].message) {
        initializeDOM(responses[0], responses[1], responses[2]);
      } else {
        _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayError('LOGIN FAILED\ninvalid username', 'login');
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
    id = username.match(/\d+/)[0];
  }

  if (username === 'agent' && password === 'travel2020') {
    loadAgentTools();
  } else if (!id || username !== `traveler${id}`) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayError('LOGIN FAILED\ninvalid username', 'login');
  } else if (!password === 'travel2020') {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayError('LOGIN FAILED\ninvalid password', 'login');
  } else {
    return id;
  }
}

function initializeDOM(userData, recipeData, destinationData) {
  generateClasses(userData, recipeData, destinationData);
  updateTripDisplay();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displaySidebar(user, sidebar);
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  setStartMin();
  planTripButton.classList.toggle('hidden');
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayDestinationOptions(destinations, document.querySelector('.destination-list'));
}

function displayAllTrips() {
  user.trips.forEach(trip => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTrip(trip, destinations, tripList);
  });
}

function loadAgentTools() {
  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getAgentData())
    .then(responses => {
      generateAgentDataModel(responses[0], responses[1], responses[2]);
      initializeAgentDOM();
    });
}

function generateAgentDataModel(travelerData, tripData, destinationData) {
  destinations = destinationData.destinations.map(data => new _Destination__WEBPACK_IMPORTED_MODULE_2__["default"](data));
  user = new _Agent__WEBPACK_IMPORTED_MODULE_3__["default"](travelerData.travelers, tripData.trips, destinations);
}

function initializeAgentDOM() {
  loginPage.classList.toggle('hidden');
  main.classList.toggle('hidden');
  sidebar.classList.toggle('hidden');
  agentTools.classList.toggle('hidden');
  filterOptions.classList.toggle('hidden');
  displayAllTrips();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayAgentDOM(user, sidebar);
}

//CALL domUpdates

function toggleFormView() {
  document.querySelector('.welcome-message').classList.toggle('hidden');
  planTripButton.classList.toggle('hidden');
  document.querySelector('.new-trip-form').classList.toggle('hidden');
  bookTripButton.classList.toggle('hidden');
  destinationPreview.classList.toggle('hidden');
  tripList.classList.toggle('hidden');
  backButton.classList.toggle('hidden');
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].clearErrors();
  if (tripList.classList.contains('hidden')) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].updatePreview(destinationPreview, destinationList, destinations);
  }
}

function updateTripDisplay() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].clearTrips(tripList);
  displayAllTrips();
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
    const trip = new _Trip__WEBPACK_IMPORTED_MODULE_1__["default"](getObjectFromInputs({trips: []}), destinations);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCostMessage(trip);
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].updatePreview(destinationPreview, destinationList, destinations);
}

function filterTrips() {
  checkFilterBoxes();
  user.trips = user.generateTrips();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].updateUserSpending(user, user.userSelect);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].clearTrips(tripList);
  displayAllTrips();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addTripIDDisplay();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addIDOptions();
}

function updateAgentDOM() {
  Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getAgentData())
    .then(responses => {
      destinations = responses[2].destinations.map(data => new _Destination__WEBPACK_IMPORTED_MODULE_2__["default"](data));
      user = new _Agent__WEBPACK_IMPORTED_MODULE_3__["default"](responses[0].travelers, responses[1].trips, destinations);
      document.querySelector('.agent-info').remove();
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayAgentDOM(user, sidebar);
      filterTrips();
    });
}

//CALL fetchRequests

function bookTrip() {
  event.preventDefault();
  if (!startDateInput.value || !endDateInput.value) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayError('please fill out all required inputs', 'form');
  }
  _fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getTrips().then(response => {
    _fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].postTrip(getObjectFromInputs(response)).then(response => {
      Promise.all(_fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getAllData(user.id)).then(responses => {
        generateClasses(responses[0], responses[1], responses[2]);
        updateTripDisplay();
        toggleFormView();
        _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayWelcomeMessage(user);
      });
    });
  });
}

function getObjectFromInputs(trips) {
  return {
    id: trips.trips.length + 1,
    userID: user.id,
    destinationID: parseInt(destinationList.value),
    travelers: travelersInput.value,
    date: new Date(startDateInput.value).toISOString().substring(0, 10).replaceAll('-', '/'),
    duration: (new Date(endDateInput.value).getTime() - new Date(startDateInput.value).getTime()) / (1000 * 60 * 60 * 24),
    status: 'pending',
    suggestedActivities: []
  };
}

function checkFilterBoxes() {
  if (showPending.checked) {
    user.pendingFilter = true;
  } else {
    user.pendingFilter = false;
  }
  if (showUpcoming.checked) {
    user.upcomingFilter = true;
  } else {
    user.upcomingFilter = false;
  }
  if (filterByName.value) {
    user.userSelect = user.allUsers.find(user => user.name.includes(filterByName.value)).id;
  } else {
    user.userSelect = 0;
  }
}

function rejectAndRemove() {
  _fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].deleteTrip(idSelect.value);
  updateAgentDOM();
}

function getApprovalObject() {
  let approvalObj = {id: parseInt(idSelect.value), status: 'approved'};

  if (suggestedActivities.value) {
    approvalObj.suggestedActivities = suggestedActivities.value.split(', ');
  }

  return approvalObj;
}

function approveAndModify() {
  _fetchRequests__WEBPACK_IMPORTED_MODULE_4__["default"].approveAndModifyTrip(getApprovalObject()).then(response => {
    updateAgentDOM();
  });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FnZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaFJlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaWNvbnMvZ2xvYmUtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pY29ucy9tYXAtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pY29ucy9zdWl0Y2FzZS1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ljb25zL3RpY2tldC1pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Byb2ZwaWMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsU0FBUyxrQkFBa0IsMkJBQTJCLGdDQUFnQyxzQkFBc0IsZUFBZSxxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLDBCQUEwQix1QkFBdUIsRUFBRSxXQUFXLDBCQUEwQix1QkFBdUIsb0JBQW9CLGdCQUFnQixnQkFBZ0IseUJBQXlCLHFCQUFxQixFQUFFLHFDQUFxQyxrQkFBa0Isa0JBQWtCLEVBQUUsNkZBQTZGLHVCQUF1QixFQUFFLGdCQUFnQix1QkFBdUIsYUFBYSxjQUFjLHFDQUFxQyxpQkFBaUIsZ0JBQWdCLEVBQUUsb0JBQW9CLHFCQUFxQixpQkFBaUIsWUFBWSxlQUFlLEVBQUUsdUJBQXVCLHNDQUFzQyx1QkFBdUIsZUFBZSxjQUFjLDRCQUE0QixpQkFBaUIscUJBQXFCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGVBQWUsRUFBRSxnQ0FBZ0Msa0JBQWtCLHFCQUFxQixxQkFBcUIsdUJBQXVCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxjQUFjLGtCQUFrQix3QkFBd0IsNEJBQTRCLHNCQUFzQiw2QkFBNkIsZ0NBQWdDLGlDQUFpQyxpQkFBaUIsZ0JBQWdCLEVBQUUsbUJBQW1CLHVCQUF1QixzQ0FBc0MsNEJBQTRCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGVBQWUsRUFBRSxpQkFBaUIsdUJBQXVCLHdCQUF3QixrQkFBa0IsMkJBQTJCLDRCQUE0QixzQkFBc0IsZ0JBQWdCLGVBQWUsdUJBQXVCLHFCQUFxQixFQUFFLGNBQWMsd0JBQXdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHNCQUFzQixlQUFlLEVBQUUsZUFBZSx1QkFBdUIsaUJBQWlCLGVBQWUsRUFBRSxzQkFBc0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLEVBQUUsdUJBQXVCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLEVBQUUsZ0NBQWdDLHVCQUF1QixFQUFFLG9CQUFvQix3QkFBd0Isa0JBQWtCLDJCQUEyQixrQ0FBa0Msc0JBQXNCLEVBQUUsMEJBQTBCLG1CQUFtQixpQkFBaUIsd0NBQXdDLHVCQUF1QixFQUFFLCtDQUErQyxVQUFVLG9CQUFvQiwwQkFBMEIsa0NBQWtDLHdCQUF3QixFQUFFLFFBQVEseUJBQXlCLEVBQUUsRUFBRSxnREFBZ0QsdUJBQXVCLG1CQUFtQixpQkFBaUIsRUFBRSxFQUFFLCtDQUErQyxVQUFVLG9CQUFvQixpQ0FBaUMsRUFBRSxxQkFBcUIsdUJBQXVCLEVBQUUsY0FBYyxtQkFBbUIsa0JBQWtCLEVBQUUsZUFBZSxtQkFBbUIsaUJBQWlCLEVBQUUsVUFBVSxtQkFBbUIsa0JBQWtCLEVBQUUsdUJBQXVCLG1CQUFtQixpQkFBaUIsRUFBRSxXQUFXLGtCQUFrQixrQkFBa0IsRUFBRSx1Q0FBdUMsb0JBQW9CLG9CQUFvQixFQUFFLGdCQUFnQixtQkFBbUIsa0JBQWtCLEVBQUUsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsb0JBQW9CLEVBQUUsRUFBRSwrQ0FBK0MscUJBQXFCLHVCQUF1QixFQUFFLEVBQUUsbUNBQW1DLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHNCQUFzQixFQUFFLGlEQUFpRCwwQkFBMEIsMEJBQTBCLGlCQUFpQixtQkFBbUIsaUJBQWlCLEVBQUUsaUJBQWlCLHdCQUF3QixrQkFBa0IsMkJBQTJCLDRCQUE0QixzQkFBc0IsRUFBRSwyVEFBMlQsc0JBQXNCLDhDQUE4QyxhQUFhLDBKQUEwSixjQUFjLEVBQUUsb0pBQW9KLG1CQUFtQixxQkFBcUIsRUFBRSxnTkFBZ04sNEJBQTRCLHlCQUF5QixpQ0FBaUMsYUFBYSxxSkFBcUosc0NBQXNDLDhCQUE4QixhQUFhLHFMQUFxTCxrQ0FBa0MsRUFBRSx3SkFBd0osd0JBQXdCLDBDQUEwQyxpREFBaUQsYUFBYSx1RkFBdUYsd0JBQXdCLEVBQUUsbUtBQW1LLHNDQUFzQyw4QkFBOEIsYUFBYSxvRUFBb0UsbUJBQW1CLEVBQUUsa0hBQWtILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixFQUFFLFNBQVMsb0JBQW9CLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSxpTEFBaUwsdUJBQXVCLEVBQUUsd1BBQXdQLHlCQUF5QiwrQkFBK0IsaUNBQWlDLHlCQUF5QixhQUFhLDZGQUE2RixpQ0FBaUMsRUFBRSxrS0FBa0ssb0NBQW9DLEVBQUUsdUpBQXVKLCtCQUErQixFQUFFLDZNQUE2TSx1QkFBdUIsZUFBZSxFQUFFLHNNQUFzTSxtQ0FBbUMsRUFBRSw0REFBNEQsbUNBQW1DLEVBQUUsc1FBQXNRLDJCQUEyQiw4QkFBOEIsOEJBQThCLCtCQUErQiwwQkFBMEIsbUNBQW1DLGFBQWEsOEZBQThGLDZCQUE2QixFQUFFLDZFQUE2RSxtQkFBbUIsRUFBRSxzSUFBc0ksMkJBQTJCLDBCQUEwQixhQUFhLHNMQUFzTCxpQkFBaUIsRUFBRSxxSUFBcUksa0NBQWtDLG9DQUFvQyxhQUFhLHdIQUF3SCw2QkFBNkIsRUFBRSwyS0FBMkssK0JBQStCLDZCQUE2QixhQUFhLGtMQUFrTCxtQkFBbUIsRUFBRSxtRUFBbUUsdUJBQXVCLEVBQUUsMEpBQTBKLGtCQUFrQixFQUFFLDhEQUE4RCxrQkFBa0IsRUFBRSxVQUFVLDhCQUE4QixzQ0FBc0MsRUFBRSxRQUFRLHFCQUFxQixpQkFBaUIsRUFBRSxZQUFZLG1CQUFtQixnQkFBZ0IsRUFBRSxVQUFVLDhCQUE4QixpQkFBaUIsdUJBQXVCLGlCQUFpQixlQUFlLEVBQUUsNkJBQTZCLGtCQUFrQixFQUFFLGFBQWEsNkJBQTZCLEVBQUUsb0JBQW9CLGdCQUFnQixnQkFBZ0IsRUFBRSxZQUFZLHFCQUFxQixpQkFBaUIsdUJBQXVCLHNCQUFzQixFQUFFLGdCQUFnQixtQkFBbUIsaUJBQWlCLEVBQUUsa0JBQWtCLDJCQUEyQixzQkFBc0IseUJBQXlCLEVBQUUsd0JBQXdCLHFCQUFxQixtQkFBbUIsNkJBQTZCLEVBQUUsU0FBUyw0VkFBNFYsVUFBVSxZQUFZLGVBQWUsZUFBZSxXQUFXLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxXQUFXLGlCQUFpQixNQUFNLGdCQUFnQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxvQkFBb0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsY0FBYyxjQUFjLGFBQWEsV0FBVyxhQUFhLG9CQUFvQixNQUFNLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixPQUFPLFdBQVcsYUFBYSxlQUFlLGVBQWUsYUFBYSxhQUFhLGFBQWEsY0FBYyxvQkFBb0IsTUFBTSxZQUFZLGNBQWMsZUFBZSxjQUFjLFlBQVksYUFBYSxvQkFBb0IsT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGVBQWUsaUJBQWlCLEtBQUssWUFBWSxZQUFZLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGtCQUFrQixNQUFNLGFBQWEsY0FBYyxjQUFjLG9CQUFvQixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsb0JBQW9CLE1BQU0sd0JBQXdCLEtBQUssS0FBSyxXQUFXLHdCQUF3QixLQUFLLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxhQUFhLG1CQUFtQixNQUFNLGFBQWEsbUJBQW1CLE1BQU0sYUFBYSxtQkFBbUIsTUFBTSxhQUFhLG1CQUFtQixNQUFNLGFBQWEsbUJBQW1CLE1BQU0sYUFBYSxtQkFBbUIsTUFBTSxhQUFhLG1CQUFtQixNQUFNLGVBQWUsS0FBSyxxQkFBcUIsS0FBSyxLQUFLLHdCQUF3QixNQUFNLFVBQVUsWUFBWSxlQUFlLG9CQUFvQixNQUFNLFlBQVksWUFBWSxVQUFVLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsWUFBWSxLQUFLLFFBQVEsU0FBUyxNQUFNLE1BQU0sWUFBWSxVQUFVLGFBQWEsZ0JBQWdCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxnQkFBZ0IsT0FBTyxNQUFNLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsWUFBWSxnQkFBZ0IsUUFBUSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsZ0JBQWdCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxrQkFBa0IsUUFBUSxNQUFNLE1BQU0sWUFBWSxVQUFVLGFBQWEsVUFBVSxhQUFhLGdCQUFnQixPQUFPLE1BQU0sT0FBTyxrQkFBa0IsUUFBUSxNQUFNLFFBQVEsWUFBWSxVQUFVLFdBQVcsZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLGdCQUFnQixRQUFRLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxRQUFRLFFBQVEsTUFBTSxNQUFNLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxNQUFNLFVBQVUsWUFBWSxVQUFVLFdBQVcsVUFBVSxhQUFhLFVBQVUsV0FBVyxnQkFBZ0IsUUFBUSxNQUFNLE9BQU8sVUFBVSxrQkFBa0IsUUFBUSxNQUFNLE9BQU8sVUFBVSxrQkFBa0IsT0FBTyxNQUFNLFNBQVMsa0JBQWtCLE9BQU8sTUFBTSxTQUFTLFlBQVksaUJBQWlCLE1BQU0sTUFBTSxTQUFTLGtCQUFrQixPQUFPLE1BQU0sTUFBTSxrQkFBa0IsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixPQUFPLE1BQU0sTUFBTSxrQkFBa0IsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLFFBQVEsTUFBTSxNQUFNLGFBQWEsVUFBVSxXQUFXLGdCQUFnQixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsT0FBTyxNQUFNLEtBQUssYUFBYSxVQUFVLGFBQWEsZ0JBQWdCLE9BQU8sTUFBTSxLQUFLLG1CQUFtQixRQUFRLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxnQkFBZ0IsTUFBTSxRQUFRLFFBQVEsTUFBTSxNQUFNLGdCQUFnQixPQUFPLE1BQU0sTUFBTSxrQkFBa0IsTUFBTSxRQUFRLFFBQVEsTUFBTSxNQUFNLGdCQUFnQixNQUFNLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssV0FBVyxrQkFBa0IsTUFBTSxhQUFhLFlBQVksWUFBWSxXQUFXLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLGFBQWEsb0JBQW9CLE1BQU0sWUFBWSxXQUFXLFlBQVksa0JBQWtCLE1BQU0sYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsaUJBQWlCLE1BQU0sYUFBYSxjQUFjLDRDQUE0QyxxREFBcUQsZUFBZSxxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDBCQUEwQix1QkFBdUIsR0FBRyxXQUFXLDBCQUEwQix1QkFBdUIsb0JBQW9CLHNDQUFzQyx5QkFBeUIscUJBQXFCLDRCQUE0Qix3Q0FBd0Msb0NBQW9DLHVCQUF1QixPQUFPLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsdUNBQXVDLEdBQUcsb0JBQW9CLHFCQUFxQixpQkFBaUIsWUFBWSxlQUFlLEdBQUcsdUJBQXVCLHVCQUF1Qix1QkFBdUIsZUFBZSxjQUFjLG1DQUFtQyw2QkFBNkIscUJBQXFCLHNCQUFzQixpQkFBaUIsc0NBQXNDLEdBQUcsK0JBQStCLGtCQUFrQixxQkFBcUIscUJBQXFCLHVCQUF1QixHQUFHLGNBQWMsMEJBQTBCLEdBQUcsYUFBYSw4Q0FBOEMsNkJBQTZCLGdDQUFnQyxpQ0FBaUMsdUNBQXVDLEdBQUcsa0JBQWtCLHVCQUF1Qix1QkFBdUIsbUNBQW1DLDZCQUE2QixpQkFBaUIsc0NBQXNDLEdBQUcsMEJBQTBCLDZCQUE2QiwwQkFBMEIsc0JBQXNCLDJCQUEyQixnQ0FBZ0MsNkNBQTZDLG9CQUFvQixrQkFBa0IsR0FBRyx1RUFBdUUsa0JBQWtCLG9DQUFvQyxzQ0FBc0MsNEJBQTRCLGlCQUFpQix1QkFBdUIsd0JBQXdCLGlEQUFpRCxxQ0FBcUMsdUJBQXVCLHFCQUFxQixHQUFHLGVBQWUsd0JBQXdCLHFEQUFxRCxlQUFlLEdBQUcsY0FBYyx1QkFBdUIsc0NBQXNDLEdBQUcsc0JBQXNCLHVCQUF1QixpREFBaUQsc0NBQXNDLEdBQUcsdUJBQXVCLHNEQUFzRCxzQ0FBc0MsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsb0JBQW9CLHdCQUF3Qix1REFBdUQsYUFBYSx3Q0FBd0MseUJBQXlCLHVCQUF1QixLQUFLLEdBQUcsZ0RBQWdELFVBQVUsb0RBQW9ELEtBQUssVUFBVSx5QkFBeUIsS0FBSyxHQUFHLGdEQUFnRCx1QkFBdUIsd0NBQXdDLEtBQUssR0FBRywrQ0FBK0MsVUFBVSxvQkFBb0IsaUNBQWlDLEtBQUssdUJBQXVCLHVCQUF1QixLQUFLLGdCQUFnQix5Q0FBeUMsS0FBSyxnQkFBZ0Isd0NBQXdDLEtBQUssWUFBWSx5Q0FBeUMsS0FBSyx5QkFBeUIsd0NBQXdDLEtBQUssYUFBYSx3Q0FBd0MsOEJBQThCLDBDQUEwQyxPQUFPLEtBQUssaUJBQWlCLHlDQUF5QyxLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyxnQkFBZ0Isa0JBQWtCLEtBQUssR0FBRywrQ0FBK0MscUJBQXFCLHVCQUF1QixLQUFLLEdBQUcsb0NBQW9DLGlEQUFpRCxjQUFjLDBCQUEwQixpQ0FBaUMsaUJBQWlCLHdDQUF3QyxLQUFLLEdBQUcsZ0JBQWdCLHdCQUF3QixpREFBaUQsR0FBRyxrVUFBa1Usc0JBQXNCLDJDQUEyQyxXQUFXLDhKQUE4SixjQUFjLEdBQUcsc0pBQXNKLG1CQUFtQixxQkFBcUIsR0FBRyxvTkFBb04sNEJBQTRCLHNCQUFzQiw4QkFBOEIsV0FBVyx1SkFBdUosc0NBQXNDLDJCQUEyQixXQUFXLHlMQUF5TCxrQ0FBa0MsR0FBRywwSkFBMEosd0JBQXdCLHVDQUF1Qyw4Q0FBOEMsV0FBVyx5RkFBeUYsd0JBQXdCLEdBQUcscUtBQXFLLHNDQUFzQywyQkFBMkIsV0FBVyxzRUFBc0UsbUJBQW1CLEdBQUcsb0hBQW9ILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxxTEFBcUwsdUJBQXVCLEdBQUcsNFBBQTRQLHlCQUF5Qiw0QkFBNEIsOEJBQThCLHNCQUFzQixXQUFXLCtGQUErRiw4QkFBOEIsR0FBRyxvS0FBb0ssaUNBQWlDLEdBQUcseUpBQXlKLCtCQUErQixHQUFHLCtNQUErTSx1QkFBdUIsZUFBZSxHQUFHLHdNQUF3TSxtQ0FBbUMsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsd1FBQXdRLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLFdBQVcsZ0dBQWdHLDZCQUE2QixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRyx3SUFBd0ksMkJBQTJCLHVCQUF1QixXQUFXLHdMQUF3TCxpQkFBaUIsR0FBRyx1SUFBdUksa0NBQWtDLGlDQUFpQyxXQUFXLDBIQUEwSCw2QkFBNkIsR0FBRyw2S0FBNkssK0JBQStCLDBCQUEwQixXQUFXLHNMQUFzTCxtQkFBbUIsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsOEpBQThKLGtCQUFrQixHQUFHLGdFQUFnRSxrQkFBa0IsR0FBRyx5QkFBeUIsaUJBQWlCLHVCQUF1QixvQkFBb0IsMEJBQTBCLHNCQUFzQixzQkFBc0IsVUFBVSxvQ0FBb0MsdUJBQXVCLEdBQUcsUUFBUSxxQkFBcUIsaUJBQWlCLFVBQVUsdUNBQXVDLEtBQUssR0FBRyxVQUFVLHdDQUF3QyxpQkFBaUIsdUJBQXVCLGlCQUFpQixlQUFlLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLGFBQWEsNkJBQTZCLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLFlBQVkscUJBQXFCLGlCQUFpQix1QkFBdUIsc0JBQXNCLFdBQVcsd0NBQXdDLEtBQUssYUFBYSwyQkFBMkIsc0JBQXNCLHlCQUF5QixhQUFhLDBDQUEwQyw2QkFBNkIsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQzU4MkI7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDL0JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLDZDQUFJO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0RyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZSwwRUFBVzs7Ozs7Ozs7Ozs7OztBQ1oxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSTs7Ozs7Ozs7Ozs7OztBQ3hDbkI7QUFBQTtBQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsNkNBQUk7QUFDOUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkNwQjtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFxSTs7QUFFckk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJVCwwTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVELHNDQUFzQyxrQkFBa0IsVUFBVSxnQkFBZ0I7QUFDbEY7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDLHVCQUF1Qix3QkFBd0IsSUFBSSx3QkFBd0I7QUFDM0U7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZELDRCQUE0QixjQUFjO0FBQzFDLDhCQUE4QixlQUFlO0FBQzdDLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkUsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQ0FBMEM7QUFDM0YsK0NBQStDLDBDQUEwQztBQUN6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSx3RUFBd0UsZUFBZSxJQUFJLHdCQUF3QjtBQUNuSCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLDREQUE0RCxzQkFBc0Isc0JBQXNCLHFCQUFxQjtBQUM3SCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGNBQWMsRUFBRTtBQUMzRTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEMsZ0RBQWdELHFDQUFxQztBQUNyRixrREFBa0QsbUNBQW1DO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwrQkFBK0IsS0FBSztBQUNwQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFELHNCQUFzQix1QkFBdUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDhFQUE4RSxvQkFBb0I7QUFDbEcsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsY0FBYyxjQUFjLDBCQUEwQjtBQUN4RixLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLFFBQVEsSUFBSSxRQUFRO0FBQ2pILEtBQUs7QUFDTDtBQUNBOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0STFCO0FBQUE7QUFBcUM7OztBQUdyQztBQUNBO0FBQ0EsMkRBQTJELEdBQUc7QUFDOUQ7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVU7QUFDbEIsUUFBUSxtREFBVTtBQUNsQixPQUFPO0FBQ1AsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUNBQW1DO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLG1EQUFVO0FBQzlCLEdBQUc7O0FBRUg7QUFDQSxnREFBZ0QsR0FBRztBQUNuRDtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1DQUFtQztBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBOztBQUVlLDRFQUFhOzs7Ozs7Ozs7Ozs7O0FDbkU1QjtBQUFlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLHlGQUEwQixFOzs7Ozs7Ozs7Ozs7QUNBekM7QUFBZSx1RkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDQXZDO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0E7QUFDYztBQUNiOztBQUVpQjtBQUNOOztBQUViO0FBQ0s7QUFDRjtBQUNTO0FBQ0c7QUFDRDtBQUNHOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsc0RBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFFBQVEsbURBQVU7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw4REFBOEQsb0RBQVc7QUFDekUsYUFBYSw2Q0FBSTtBQUNqQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QyxHQUFHO0FBQy9DLElBQUksbURBQVU7QUFDZCxHQUFHO0FBQ0gsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxjQUFjLHNEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDhEQUE4RCxvREFBVztBQUN6RSxhQUFhLDhDQUFLO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBVTtBQUNaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7QUFDQSxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUksc0JBQXNCLFVBQVU7QUFDekQsSUFBSSxtREFBVTtBQUNkO0FBQ0EsRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1o7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0EsY0FBYyxzREFBYTtBQUMzQjtBQUNBLCtEQUErRCxvREFBVztBQUMxRSxpQkFBaUIsOENBQUs7QUFDdEI7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZDtBQUNBLEVBQUUsc0RBQWE7QUFDZixJQUFJLHNEQUFhO0FBQ2pCLGtCQUFrQixzREFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzREFBYTtBQUNmO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzREFBYTtBQUNmO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRyaXAtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG5cXG4udHJpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIyJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAudHJpcDpob3ZlciwgLnRyaXA6Zm9jdXMtd2l0aGluIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC50cmlwOmhvdmVyIC50cmlwX19pbmZvLWJsb2NrLS1kZXRhaWxzLCAudHJpcDpmb2N1cy13aXRoaW4gLnRyaXBfX2luZm8tYmxvY2stLWRldGFpbHMge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRyaXBfX2ltZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udHJpcC0td3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdG9wOiAxJTtcXG4gIGJvdHRvbTogMSU7IH1cXG5cXG4udHJpcF9faW5mby1ibG9jayB7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIHJpZ2h0OiAzJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1JTsgfVxcblxcbi50cmlwX19pbmZvLWJsb2NrLS1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJ2bWluO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiAxdm1pbjsgfVxcblxcbi5wZW5kaW5nIHtcXG4gIGNvbG9yOiAjRjlEMUNCOyB9XFxuXFxuLnByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5MCUgOTAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGhlaWdodDogMzUwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvc3QtZGV0YWlscyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiA4NSU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAzMCU7IH1cXG5cXG4ucHJvZi1waWMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDc1JTsgfVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlYmFyLWJ0bi1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi51c2VyLW5hbWUsIC50cmF2ZWxlci10eXBlIHtcXG4gIGxpbmUtaGVpZ2h0OiAxdm1pbjsgfVxcblxcbi5uZXctdHJpcC1mb3JtIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cXG4gIC5uZXctdHJpcC1mb3JtIGlucHV0IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJ2bWluOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7IH1cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAyLjV2bWluOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLnRyaXBfX2luZm8tYmxvY2sge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA1MCU7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxcbiAgcCwgLnBlbmRpbmcsIGgzIHtcXG4gICAgZm9udC1zaXplOiAydm1pbjsgfVxcbiAgLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucHJvZi1waWMge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMCU7IH1cXG4gIG1haW4ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucGxhbi10cmlwLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDUwJTsgfVxcbiAgLnRyaXAge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLnRyaXA6aG92ZXIsIC50cmlwOmZvY3VzLXdpdGhpbiB7XFxuICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50cmlwX19pbWcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuZGVza3RvcC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5wcmV2aWV3IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgcCwgLnBlbmRpbmcsIGgzIHtcXG4gICAgZm9udC1zaXplOiA0dm1pbjsgfSB9XFxuXFxuLmZpbHRlci1vcHRpb25zLCAuYWdlbnQtdG9vbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICAuZmlsdGVyLW9wdGlvbnMgYnV0dG9uLCAuYWdlbnQtdG9vbHMgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiA1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogODAlOyB9XFxuXFxuLmFnZW50LWluZm8ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDsgfVxcblxcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGNUYxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXZtaW47XFxuICBtYXJnaW46IG5vbmU7IH1cXG4gIGgxIGltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDclOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkY4O1xcbiAgb3BhY2l0eTogOTUlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiA5OHZoO1xcbiAgd2lkdGg6IDk5JTsgfVxcblxcbiNibG9ja0NvbG9yYmxpbmRDb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5uZXctdHJpcC1mb3JtIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMi44dm1pbjtcXG4gIG1hcmdpbi1ib3R0b206IDMlOyB9XFxuICBidXR0b24gaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMjAlOyB9XFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDMuMnZtaW47IH1cXG4gICAgYnV0dG9uOmhvdmVyIGltZyB7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi1wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWEtcXVlcmllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hZ2VudC1kb20uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbm9ybWFsaXplLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VDZUUsYUFBYTtFQUNiLHNCRGYyQjtFQ2dCM0IsMkJEaEJ1QztFQ2lCdkMsaUJEakIrQztFQUMvQyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUNMZixXRE0wQjtFQ0wxQixXREtnQztFQUNoQyxvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7RUFObEI7SUNGRSxXRFU0QjtJQ1Q1QixXRFNrQyxFQUFBO0lBUnBDO01BVU0sY0FBYyxFQUFBOztBQUtwQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQ3JCaEMsWURzQjJCO0VDckIzQixXRHFCaUMsRUFBQTs7QUFHbkM7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBR1o7RUFDRSwrQkNyQ3VCO0VEc0N2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkM1Q2lCO0VENkNqQixZQzVDc0I7RUQ2Q3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQ3pDWixZRDBDMkI7RUN6QzNCLFVEeUNnQyxFQUFBOztBQUdsQztFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNDN0RxQixFQUFBOztBRGdFdkI7RUNuREUsYUFBYTtFQUNiLG1CRG1Ed0I7RUNsRHhCLHVCRGtEZ0M7RUNqRGhDLGlCRGlEd0M7RUFDeEMsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUM1RDVCLFlENkQyQjtFQzVEM0IsV0Q0RGlDLEVBQUE7O0FBR25DO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQ3RFdUI7RUR1RXZCLHVCQzFFaUI7RUQyRWpCLFlDMUVzQjtFRDJFdEIsWUFBWTtFQ3JFWixZRHNFMkI7RUNyRTNCLFVEcUVnQyxFQUFBOztBRWhGbEM7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VEYW5CLGFBQWE7RUFDYixzQkNiMkI7RURjM0IsdUJDZG1DO0VEZW5DLGlCQ2YyQztFRE8zQyxXQ04wQjtFRE8xQixVQ1ArQjtFQUMvQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FDTmxCO0VBQ0UsbUJBQW1CO0VGY25CLGFBQWE7RUFDYixzQkVkMkI7RUZlM0IsMkJFZnVDO0VGZ0J2QyxpQkVoQitDO0VBQy9DLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFRkdsQixZRUYyQjtFRkczQixVRUhnQyxFQUFBOztBQUdsQztFQUNFLGtCQUFrQjtFRkdsQixhQUFhO0VBQ2Isc0JFSDJCO0VGSTNCLHVCRUptQztFRktuQyxpQkVMMkM7RUZIM0MsV0VJMEI7RUZIMUIsV0VHZ0MsRUFBQTs7QUFHbEM7RUZGRSxhQUFhO0VBQ2IsMkJFRWdDO0VGRGhDLHVCRUN3QztFRkF4QyxpQkVBZ0Q7RUZSaEQsV0VTMEI7RUZSMUIsV0VRZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkFBbUI7RUZabkIsYUFBYTtFQUNiLHNCRVkyQjtFRlgzQiw2QkVXeUM7RUZWekMsaUJFVWlELEVBQUE7RUFGbkQ7SUZoQkUsWUVvQjZCO0lGbkI3QixVRW1Ca0M7SUFDaEMsK0JGekJxQjtJRTBCckIsZ0JBQWdCLEVBQUE7O0FDaENwQjtFQUNFO0lIY0EsYUFBYTtJQUNiLG1CR2QwQjtJSGUxQiwyQkdmc0M7SUhnQnRDLGlCR2hCOEMsRUFBQTtFQUc5QztJQUNFLGtCQUFrQixFQUFBLEVBQ25COztBQUdIO0VBQ0U7SUhEQSxZR0U2QjtJSEQ3QixVR0NrQyxFQUFBLEVBQ2pDOztBQUdIO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCLEVBQUE7RUFHNUI7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJSGhCQSxZR2lCNkI7SUhoQjdCLFdHZ0JtQyxFQUFBO0VBR25DO0lIcEJBLFlHcUI2QjtJSHBCN0IsVUdvQmtDLEVBQUE7RUFHbEM7SUh4QkEsWUd5QjZCO0lIeEI3QixXR3dCbUMsRUFBQTtFQUduQztJSDVCQSxZRzZCNkI7SUg1QjdCLFVHNEJrQyxFQUFBO0VBR2xDO0lIaENBLFdHaUM0QjtJSGhDNUIsV0dnQ2tDLEVBQUE7SUFEbEM7TUhoQ0EsV0dtQzhCO01IbEM5QixXR2tDb0MsRUFBQTtFQUlwQztJSHZDQSxZR3dDNkI7SUh2QzdCLFdHdUNtQyxFQUFBO0VBR25DO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDQSxhQUFhLEVBQUEsRUFDWjs7QUFHSDtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7O0FDakVIO0VKZUUsYUFBYTtFQUNiLHNCSWYyQjtFSmdCM0IsdUJJaEJtQztFSmlCbkMsaUJJakIyQyxFQUFBO0VBRDdDO0lBR0ksbUJBQW1CO0lBQ25CLG1CSkRlO0lJRWYsVUFBVTtJSktaLFlJSjZCO0lKSzdCLFVJTGtDLEVBQUE7O0FBSXBDO0VBQ0UsbUJBQW1CO0VKSW5CLGFBQWE7RUFDYixzQklKMkI7RUpLM0IsdUJJTG1DO0VKTW5DLGlCSU4yQyxFQUFBOztBQ1o3QywyRUFBQTtBQUVBOytFQ2lOK0U7QUQ5TS9FOzs7RUNrTkU7QUQ3TUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VDZ04rRTtBRDdNL0U7O0VDZ05FO0FENU1GO0VBQ0UsU0FBUyxFQUFBOztBQUdYOzs7RUMrTUU7QUQxTUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCOytFQzJNK0U7QUR4TS9FOzs7RUM0TUU7QUR2TUY7RUFDRSx1QkFBdUI7RUFBRSxNQUFBO0VBQ3pCLFNBQVM7RUFBRSxNQUFBO0VBQ1gsaUJBQWlCO0VBQUUsTUFBQSxFQUFPOztBQUc1Qjs7O0VDNk1FO0FEeE1GO0VBQ0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6QjsrRUMyTStFO0FEeE0vRTs7RUMyTUU7QUR2TUY7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7OztFQzBNRTtBRHJNRjtFQUNFLG1CQUFtQjtFQUFFLE1BQUE7RUFDckIsMEJBQTBCO0VBQUUsTUFBQTtFQUM1QixpQ0FBaUM7RUFBRSxNQUFBLEVBQU87O0FBRzVDOztFQzBNRTtBRHRNRjs7RUFFRSxtQkFBbUIsRUFBQTs7QUFHckI7OztFQ3lNRTtBRHBNRjs7O0VBR0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6Qjs7RUN3TUU7QURwTUY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUN1TUU7QURsTUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjsrRUNpTStFO0FEOUwvRTs7RUNpTUU7QUQ3TEY7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7K0VDOEwrRTtBRDNML0U7OztFQytMRTtBRDFMRjs7Ozs7RUFLRSxvQkFBb0I7RUFBRSxNQUFBO0VBQ3RCLGVBQWU7RUFBRSxNQUFBO0VBQ2pCLGlCQUFpQjtFQUFFLE1BQUE7RUFDbkIsU0FBUztFQUFFLE1BQUEsRUFBTzs7QUFHcEI7OztFQ2lNRTtBRDVMRjs7RUFDUSxNQUFBO0VBQ04saUJBQWlCLEVBQUE7O0FBR25COzs7RUNnTUU7QUQzTEY7O0VBQ1MsTUFBQTtFQUNQLG9CQUFvQixFQUFBOztBQUd0Qjs7RUM4TEU7QUQxTEY7Ozs7RUFJRSwwQkFBMEIsRUFBQTs7QUFHNUI7O0VDNExFO0FEeExGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUMwTEU7QUR0TEY7Ozs7RUFJRSw4QkFBOEIsRUFBQTs7QUFHaEM7O0VDd0xFO0FEcExGO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDOzs7OztFQ3lMRTtBRGxMRjtFQUNFLHNCQUFzQjtFQUFFLE1BQUE7RUFDeEIsY0FBYztFQUFFLE1BQUE7RUFDaEIsY0FBYztFQUFFLE1BQUE7RUFDaEIsZUFBZTtFQUFFLE1BQUE7RUFDakIsVUFBVTtFQUFFLE1BQUE7RUFDWixtQkFBbUI7RUFBRSxNQUFBLEVBQU87O0FBRzlCOztFQzBMRTtBRHRMRjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjs7RUN3TEU7QURwTEY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUN1TEU7QUFDRjs7RURqTEUsc0JBQXNCO0VBQUUsTUFBQTtFQUN4QixVQUFVO0VBQUUsTUFBQSxFQUFPOztBQUdyQjs7RUNzTEU7QUFDRjs7RURqTEUsWUFBWSxFQUFBOztBQUdkOzs7RUNxTEU7QUFDRjtFRGhMRSw2QkFBNkI7RUFBRSxNQUFBO0VBQy9CLG9CQUFvQjtFQUFFLE1BQUEsRUFBTzs7QUFHL0I7O0VDb0xFO0FBQ0Y7RURoTEUsd0JBQXdCLEVBQUE7O0FBRzFCOzs7RUNtTEU7QUQ5S0Y7RUFDRSwwQkFBMEI7RUFBRSxNQUFBO0VBQzVCLGFBQWE7RUFBRSxNQUFBLEVBQU87O0FBR3hCOytFQ2lMK0U7QUQ5Sy9FOztFQ2lMRTtBRDdLRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7O0VDK0tFO0FEM0tGO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCOytFQzRLK0U7QUR6Sy9FOztFQzRLRTtBRHhLRjtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7RUMwS0U7QUFDRjtFRHRLRSxhQUFhLEVBQUE7O0FDM1VmO0VBQ0UseUJOVGtCO0VNVWxCLCtCTkp1QixFQUFBOztBTU96QjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFGZDtJTkhFLFlNTzZCO0lOTjdCLFNNTWlDLEVBQUE7O0FBSW5DO0VBQ0UseUJOckJ3QjtFTXNCeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VOM0JFLFdNNEIwQjtFTjNCMUIsV00yQmdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFKbkI7SU4vQkUsWU1xQzZCO0lOcEM3QixVTW9Da0MsRUFBQTtFQU5wQztJQVNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7SUFYdEI7TU4vQkUsWU00QytCO01OM0MvQixVTTJDb0M7TUFDaEMsb0JBQW9CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIG5vd3JhcCk7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRyaXAtbGlzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50cmlwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMjIlLCAxMDAlKTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICY6aG92ZXIsICY6Zm9jdXMtd2l0aGlue1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDQwJSwgMTAwJSk7XFxuICAgICYgLnRyaXBfX2luZm8tYmxvY2stLWRldGFpbHMge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50cmlwX19pbWcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTAwJSwgMTAwJSk7XFxufVxcblxcbi50cmlwLS13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0b3A6IDElO1xcbiAgYm90dG9tOiAxJTtcXG59XFxuXFxuLnRyaXBfX2luZm8tYmxvY2sge1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIHJpZ2h0OiAzJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRibG9jay1jb2xvcjtcXG4gIGNvbG9yOiAkYmxvY2stZm9udC1jb2xvcjtcXG4gIHBhZGRpbmctbGVmdDogNSU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gIG9wYWNpdHk6IDg1JTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjUlKTtcXG59XFxuXFxuLnRyaXBfX2luZm8tYmxvY2stLWRldGFpbHN7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAydm1pbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMXZtaW47XFxufVxcblxcbi5wZW5kaW5nIHtcXG4gIGNvbG9yOiAkcGVuZGluZy1jb2xvcjtcXG59XFxuXFxuLnByZXZpZXd7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgbm93cmFwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDM1MCUsIDEwMCUpO1xcbn1cXG5cXG4uY29zdC1kZXRhaWxze1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsb2NrLWNvbG9yO1xcbiAgY29sb3I6ICRibG9jay1mb250LWNvbG9yO1xcbiAgb3BhY2l0eTogODUlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAyNSUpO1xcbn1cXG5cIixcIiR3YXNoLWNvbG9yOiAjRjlGNUYxO1xcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkY4O1xcbiRwZW5kaW5nLWNvbG9yOiAjRjlEMUNCO1xcbiRibG9jay1jb2xvcjogYmxhY2s7XFxuJGJsb2NrLWZvbnQtY29sb3I6IHdoaXRlO1xcblxcbiRmb250OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuXFxuQG1peGluIHNldERpbWVuc2lvbnMoJGhlaWdodCwgJHdpZHRoKSB7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB3aWR0aDogJHdpZHRoO1xcbn1cXG5cXG5AbWl4aW4gZGlzcGxheUZsZXgoJGZsZXgtZGlyZWN0aW9uLCAkanVzdGlmeS1jb250ZW50LCAkZmxleC13cmFwKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcXG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcFxcbn1cXG5cIixcIi5sb2dpbi1wYWdle1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KGNvbHVtbiwgY2VudGVyLCBub3dyYXApO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg1MCUsIDUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cIixcIi5zaWRlYmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIG5vd3JhcCk7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ucHJvZi1waWN7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDc1JSk7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBjZW50ZXIsIG5vd3JhcCk7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDMwJSwgMTAwJSk7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi1hcmVhIHtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdy1yZXZlcnNlLCBjZW50ZXIsIG5vd3JhcCk7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDIwJSwgMTAwJSk7XFxufVxcblxcbi51c2VyLW5hbWUsIC50cmF2ZWxlci10eXBle1xcbiAgbGluZS1oZWlnaHQ6IDF2bWluO1xcbn1cXG5cXG4ubmV3LXRyaXAtZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBzcGFjZS1hcm91bmQsIG5vd3JhcCk7XFxuICAmIGlucHV0IHtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA4MCUpO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxuICB9XFxufVxcblwiLFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDBweCkge1xcbiAgYm9keSB7XFxuICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgZmxleC1zdGFydCwgbm93cmFwKTtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAyLjV2bWluO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLnRyaXBfX2luZm8tYmxvY2sge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDUwJSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIHAsIC5wZW5kaW5nLCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMTAwJSk7XFxuICB9XFxuXFxuICAucHJvZi1waWN7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgMjAlKTtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDEwMCUpO1xcbiAgfVxcblxcbiAgLnBsYW4tdHJpcC1idXR0b24ge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDUwJSk7XFxuICB9XFxuXFxuICAudHJpcCB7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNTAlLCAxMDAlKTtcXG4gICAgJjpob3ZlciwgJjpmb2N1cy13aXRoaW57XFxuICAgICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg3MCUsIDEwMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICAudHJpcF9faW1ne1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEwMCUsIGF1dG8pO1xcbiAgfVxcblxcbiAgLmRlc2t0b3AtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByZXZpZXcge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgcCwgLnBlbmRpbmcsIGgzIHtcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gIH1cXG59XFxuXCIsXCIuZmlsdGVyLW9wdGlvbnMsIC5hZ2VudC10b29scyB7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gICYgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAkYmxvY2stY29sb3I7XFxuICAgIG1hcmdpbjogNSU7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgODAlKTtcXG4gIH1cXG59XFxuXFxuLmFnZW50LWluZm97XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgoY29sdW1uLCBjZW50ZXIsIG5vd3JhcCk7XFxufVxcblwiLFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnbWFpbic7XFxuQGltcG9ydCAnbG9naW4tcGFnZSc7XFxuQGltcG9ydCAnc2lkZWJhcic7XFxuQGltcG9ydCAnbWVkaWEtcXVlcmllcyc7XFxuQGltcG9ydCAnYWdlbnQtZG9tJztcXG5AaW1wb3J0ICdub3JtYWxpemUnO1xcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXFx0JHdhc2gtY29sb3I7XFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXZtaW47XFxuICBtYXJnaW46IG5vbmU7XFxuICAmIGltZ3tcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA3JSk7XFxuICB9XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxuICBvcGFjaXR5OiA5NSU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk4dmg7XFxuICB3aWR0aDogOTklO1xcbn1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5ldy10cmlwLWZvcm0ge1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg4MCUsIDEwMCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMi44dm1pbjtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbiAgJiBpbWcge1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDIwJSk7XFxuICB9XFxuICAmOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjJ2bWluO1xcbiAgICAmIGltZyB7XFxuICAgICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAyNSUpO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInXG5cbmNsYXNzIEFnZW50IHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5hbGxVc2VycyA9IHRoaXMuZ2VuZXJhdGVBbGxVc2Vycyh0cmF2ZWxlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbnMpO1xuICAgIHRoaXMucGVuZGluZ0ZpbHRlciA9IHRydWU7XG4gICAgdGhpcy51cGNvbWluZ0ZpbHRlciA9IGZhbHNlO1xuICAgIHRoaXMudXNlclNlbGVjdCA9IDA7XG4gICAgdGhpcy5jdXJyZW50VHJhdmVsZXJzID0gdGhpcy5maW5kVHJhdmVsaW5nVXNlcnMoKS5sZW5ndGhcbiAgICB0aGlzLnRyaXBzID0gdGhpcy5nZW5lcmF0ZVRyaXBzKCk7XG4gICAgdGhpcy5pbmNvbWVUaGlzWWVhciA9IHRoaXMuZ2V0R3Jvc3NJbmNvbWUoKVxuICB9XG5cbiAgZ2VuZXJhdGVBbGxVc2Vycyh0cmF2ZWxlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbnMpIHtcbiAgICByZXR1cm4gdHJhdmVsZXJEYXRhLm1hcCh0cmF2ZWxlciA9PiBuZXcgVXNlcih0cmF2ZWxlciwgdHJpcERhdGEsIGRlc3RpbmF0aW9ucykpO1xuICB9XG5cbiAgZmlsdGVyQnlTdGF0dXModHJpcHNBcnJheSwgc3RhdHVzKSB7XG4gICAgcmV0dXJuIHRyaXBzQXJyYXkuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cblxuICBmaWx0ZXJCeVVwY29taW5nKHRyaXBzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJpcHNBcnJheS5maWx0ZXIodHJpcCA9PiB0cmlwLnJldHVyblN0YXR1c0luZm8oKSA9PT0gJ3VwY29taW5nJyk7XG4gIH1cblxuICBmaWx0ZXJCeVVzZXIodHJpcHNBcnJheSkge1xuICAgIHJldHVybiB0cmlwc0FycmF5LmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLnVzZXJTZWxlY3QpO1xuICB9XG5cbiAgZ2VuZXJhdGVUcmlwcygpIHtcbiAgICBsZXQgdHJpcHMgPSB0aGlzLmFsbFVzZXJzLnJlZHVjZSgoYWNjLCB1c2VyKSA9PiB7XG4gICAgICByZXR1cm4gWy4uLmFjYywgLi4udXNlci50cmlwc107XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKHRoaXMudXBjb21pbmdGaWx0ZXIpIHtcbiAgICAgIHRyaXBzID0gdGhpcy5maWx0ZXJCeVVwY29taW5nKHRyaXBzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wZW5kaW5nRmlsdGVyKSB7XG4gICAgICB0cmlwcyA9IHRoaXMuZmlsdGVyQnlTdGF0dXModHJpcHMsICdwZW5kaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlclNlbGVjdCA+IDApIHtcbiAgICAgIHRyaXBzID0gdGhpcy5maWx0ZXJCeVVzZXIodHJpcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmlwcztcbiAgfVxuXG4gIGZpbmRUcmF2ZWxpbmdVc2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxVc2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLnRyaXBzLmZpbmQodHJpcCA9PiB0cmlwLnJldHVyblN0YXR1c0luZm8oKSA9PT0gJ2luIHByb2dyZXNzJykpXG4gICAgICAubWFwKHVzZXIgPT4gdXNlci5pZCk7XG4gIH1cblxuICBnZXRHcm9zc0luY29tZSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigwLjEgKiAodGhpcy5hbGxVc2Vycy5yZWR1Y2UoKGFjYywgdXNlcikgPT4ge1xuICAgICAgcmV0dXJuIGFjYyArIHVzZXIuZ2V0Q29zdEZvclllYXIoKTtcbiAgICB9LCAwKSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50O1xuIiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0KSB7XG4gICAgdGhpcy5pZCA9IGRhdGFPYmplY3QuaWQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRhdGFPYmplY3QuZGVzdGluYXRpb247XG4gICAgdGhpcy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSA9IGRhdGFPYmplY3QuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk7XG4gICAgdGhpcy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uID0gZGF0YU9iamVjdC5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhT2JqZWN0LmltYWdlO1xuICAgIHRoaXMuYWx0ID0gZGF0YU9iamVjdC5hbHQ7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvblxuIiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFPYmplY3QsIGRlc3RpbmF0aW9ucykge1xuICAgIHRoaXMuaWQgPSBkYXRhT2JqZWN0LmlkXG4gICAgdGhpcy51c2VySUQgPSBkYXRhT2JqZWN0LnVzZXJJRFxuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IGRhdGFPYmplY3QuZGVzdGluYXRpb25JRFxuICAgIHRoaXMudHJhdmVsZXJzID0gZGF0YU9iamVjdC50cmF2ZWxlcnNcbiAgICB0aGlzLmRhdGUgPSBkYXRhT2JqZWN0LmRhdGVcbiAgICB0aGlzLmR1cmF0aW9uID0gZGF0YU9iamVjdC5kdXJhdGlvblxuICAgIHRoaXMuc3RhdHVzID0gZGF0YU9iamVjdC5zdGF0dXNcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBkYXRhT2JqZWN0LnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgICB0aGlzLmNvc3QgPSB0aGlzLmNhbGN1bGF0ZUNvc3QoZGVzdGluYXRpb25zKVxuICB9XG5cbiAgZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucykge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gdGhpcy5kZXN0aW5hdGlvbklEKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUNvc3QoZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMpO1xuICAgIGNvbnN0IGZsaWdodENvc3QgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy50cmF2ZWxlcnM7XG4gICAgY29uc3QgbG9kZ2luZ0Nvc3QgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRoaXMudHJhdmVsZXJzICogdGhpcy5kdXJhdGlvbjtcbiAgICByZXR1cm4ge1xuICAgICAgYmVmb3JlQWdlbnQ6IGZsaWdodENvc3QgKyBsb2RnaW5nQ29zdCxcbiAgICAgIGFmdGVyQWdlbnQ6IE1hdGguY2VpbCgxLjEgKiAoZmxpZ2h0Q29zdCArIGxvZGdpbmdDb3N0KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm5TdGF0dXNJbmZvKCkge1xuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0dXNcbiAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgbmV3IERhdGUodGhpcy5kYXRlKS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiAndXBjb21pbmcnXG4gICAgfSBlbHNlIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0aGlzLmRhdGUpLmdldFRpbWUoKSArICgxMDAwICogNjAgKiA2MCAqIDI0ICogdGhpcy5kdXJhdGlvbikpIHtcbiAgICAgIHJldHVybiAnaW4gcHJvZ3Jlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncGFzdCdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFxuIiwiaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwJ1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZFxuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyRGF0YS5uYW1lXG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlckRhdGEudHJhdmVsZXJUeXBlXG4gICAgdGhpcy50cmlwcyA9IHRoaXMuZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKVxuICB9XG5cbiAgZ2VuZXJhdGVUcmlwcyh0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydEJ5RGF0ZSh0aGlzLmZpbHRlclRyaXBEYXRhKHRyaXBEYXRhKSkubWFwKGRhdGEgPT4gbmV3IFRyaXAoZGF0YSwgZGVzdGluYXRpb25zKSk7XG4gIH1cblxuICBmaWx0ZXJUcmlwRGF0YSh0cmlwRGF0YSkge1xuICAgIHJldHVybiB0cmlwRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gIH1cblxuICBzb3J0QnlEYXRlKHRyaXBEYXRhKSB7XG4gICAgdHJpcERhdGEuZm9yRWFjaCh0cmlwID0+IHRyaXAuZGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkpO1xuICAgIHJldHVybiB0cmlwRGF0YS5zb3J0KChhLCBiKSA9PiBiLmRhdGUgLSBhLmRhdGUpO1xuICB9XG5cbiAgZmlsdGVyQnlTdGF0dXModHJpcHNBcnJheSwgc3RhdHVzKSB7XG4gICAgcmV0dXJuIHRyaXBzQXJyYXkuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cblxuICBmaWx0ZXJCeVRoaXNZZWFyKHRyaXBzQXJyYXkpIHtcbiAgICByZXR1cm4gdHJpcHNBcnJheS5maWx0ZXIodHJpcCA9PiAobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gdHJpcC5kYXRlLmdldEZ1bGxZZWFyKCkpIDw9IDEpO1xuICB9XG5cbiAgZ2V0Q29zdEZvclllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyQnlUaGlzWWVhcih0aGlzLmZpbHRlckJ5U3RhdHVzKHRoaXMudHJpcHMsICdhcHByb3ZlZCcpKS5yZWR1Y2UoKHRvdGFsQ29zdCwgdHJpcCkgPT4ge1xuICAgICAgdG90YWxDb3N0ICs9IHRyaXAuY29zdC5hZnRlckFnZW50O1xuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgZG9tVXBkYXRlcyA9IHtcblxuICBkaXNwbGF5VHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMsIHRyaXBMaXN0KSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0cmlwLmZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMpO1xuXG4gICAgdHJpcExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgYDxhcnRpY2xlIGFyaWEtbGFiZWw9XCJ0cmlwLWRldGFpbHNcIiBjbGFzcz1cInRyaXBcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ0cmlwLS13cmFwcGVyXCIgaWQ9XCIke3RyaXAuaWR9XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJ0cmlwX19pbWdcIiBzcmM9XCIke2Rlc3RpbmF0aW9uLmltYWdlfVwiICBhbHQ9XCIke2Rlc3RpbmF0aW9uLmFsdH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRyaXBfX2luZm8tYmxvY2tcIj5cbiAgICAgICAgICA8aDI+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L2gyPlxuICAgICAgICAgIDxoMyBjbGFzcz1cIiR7dHJpcC5yZXR1cm5TdGF0dXNJbmZvKCl9XCI+JHt0cmlwLnJldHVyblN0YXR1c0luZm8oKX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmlwX19pbmZvLWJsb2NrLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8cD5zdGFydCBkYXRlOiAgJHt0cmlwLmRhdGUudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgPHA+ZHVyYXRpb246ICAke3RyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICA8cD50cmF2ZWxlcnM6ICAgJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICA8cD5jb3N0OiAgJCR7dHJpcC5jYWxjdWxhdGVDb3N0KGRlc3RpbmF0aW9ucykuYWZ0ZXJBZ2VudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+YCk7XG4gIH0sXG5cbiAgY2xlYXJUcmlwcyh0cmlwTGlzdCkge1xuICAgIHRyaXBMaXN0LmlubmVySFRNTCA9ICcnXG4gIH0sXG5cbiAgZGlzcGxheVNpZGViYXIodXNlciwgc2lkZWJhcikge1xuICAgIHNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICAgIGA8aW1nIGNsYXNzPVwicHJvZi1waWNcIiBzcmM9XCIuL2ltYWdlcy9wcm9mcGljLnBuZ1wiIGFsdD1cInVzZXIncyBwcm9maWxlIHBpY3R1cmVcIj5cbiAgICA8aDEgY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3VzZXIubmFtZX08L2gxPlxuICAgIDxoMiBjbGFzcz1cInRyYXZlbGVyLXR5cGVcIj4ke3VzZXIudHJhdmVsZXJUeXBlfTwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItY29udGVudCB3ZWxjb21lLW1lc3NhZ2VcIj5cbiAgICA8L2Rpdj5gKTtcbiAgICB0aGlzLmRpc3BsYXlXZWxjb21lTWVzc2FnZSh1c2VyKTtcbiAgfSxcblxuICBkaXNwbGF5V2VsY29tZU1lc3NhZ2UodXNlcikge1xuICAgIGxldCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLW1lc3NhZ2UnKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMz5XZWxjb21lIGJhY2ssIHRyYXZlbGVyIVxuICAgICAgICA8YnI+IC0tLS0tLS0tLVxuICAgICAgICA8YnI+QXBwcm92ZWQgVHJpcHM6ICR7dXNlci5maWx0ZXJCeVN0YXR1cyh1c2VyLnRyaXBzLCAnYXBwcm92ZWQnKS5sZW5ndGh9XG4gICAgICAgIDxicj4gLS0tLS0tLS0tXG4gICAgICAgIDxicj5QZW5kaW5nIFRyaXBzOiAke3VzZXIuZmlsdGVyQnlTdGF0dXModXNlci50cmlwcywgJ3BlbmRpbmcnKS5sZW5ndGh9XG4gICAgICAgIDxicj4gLS0tLS0tLS0tXG4gICAgICAgIDxicj5JbiB0aGUgcGFzdCB5ZWFyIHlvdSd2ZSBzcGVudCAkJHt1c2VyLmdldENvc3RGb3JZZWFyKCl9IG9uIFRyYXZlbDwvaDM+YDtcbiAgfSxcblxuICBkaXNwbGF5TmV3VHJpcEZvcm0oZGVzdGluYXRpb25zKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLWZvcm0nKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLFxuICAgICAgYDxzZWxlY3QgY2xhc3M9XCJkZXN0aW5hdGlvbi1saXN0XCIgbmFtZT1cIlwiPlxuICAgIDwvc2VsZWN0PlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwidHJpcC1zdGFydFwiIG1pbj1cIiR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCl9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJ0cmlwLWVuZFwiIG1pbj1cIiR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCl9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cIm51bS10cmF2ZWxlcnNcIiB2YWx1ZT1cIjFcIiBtaW49XCIxXCI+XG4gICAgPGgzPjwvaDM+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stdHJpcC1idXR0b25cIj5ib29rIGl0PC9idXR0b24+YCk7XG5cbiAgICB0aGlzLmRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpKTtcbiAgfSxcblxuICBjbGVhck5ld1RyaXBGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1mb3JtJykuaW5uZXJIVE1MID0gJydcbiAgfSxcblxuICBkaXNwbGF5RGVzdGluYXRpb25PcHRpb25zKGRlc3RpbmF0aW9ucywgZGVzdGluYXRpb25MaXN0KSB7XG4gICAgZGVzdGluYXRpb25zLnNvcnQoKGEsIGIpID0+IGEuZGVzdGluYXRpb24ubG9jYWxlQ29tcGFyZShiLmRlc3RpbmF0aW9uKSkuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICBkZXN0aW5hdGlvbkxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPG9wdGlvbiB2YWx1ZT1cIiR7ZGVzdGluYXRpb24uaWR9XCI+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L29wdGlvbj5gKTtcbiAgICB9KTtcbiAgfSxcblxuICBkaXNwbGF5Q29zdE1lc3NhZ2UodHJpcCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3N0LW1lc3NhZ2UnKS5pbm5lckhUTUwgPSBgJCR7dHJpcC5jb3N0LmJlZm9yZUFnZW50fSArIDEwJSBhZ2VudCBmZWUgPSAkJHt0cmlwLmNvc3QuYWZ0ZXJBZ2VudH1gXG4gIH0sXG5cbiAgdXBkYXRlUHJldmlldyhkZXN0aW5hdGlvblByZXZpZXcsIGRlc3RpbmF0aW9uTGlzdCwgZGVzdGluYXRpb25zKSB7XG4gICAgaWYgKGRlc3RpbmF0aW9ucykge1xuICAgICAgY29uc3QgcHJldmlldyA9IGRlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09IGRlc3RpbmF0aW9uTGlzdC52YWx1ZSlcbiAgICAgIGRlc3RpbmF0aW9uUHJldmlldy5pbm5lckhUTUwgPVxuICAgICAgYDxkaXYgY2xhc3M9XCJwcmV2aWV3XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcmV2aWV3LmltYWdlfSk7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0LWRldGFpbHNcIlxuICAgICAgICAgIDxoMT4ke3ByZXZpZXcuZGVzdGluYXRpb259PC9oMT5cbiAgICAgICAgICA8aDI+Um91bmQgVHJpcCBBaXJmYXJlIFBlciBQZXJzb246ICQke3ByZXZpZXcuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbn08L2gyPlxuICAgICAgICAgIDxoMj5Mb2RnaW5nIENvc3QgUGVyIFBlcnNvbiBQZXIgRGF5OiAkJHtwcmV2aWV3LmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5fTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YFxuICAgIH1cbiAgfSxcblxuICBkaXNwbGF5RXJyb3IoZXJyb3IsIHpvbmUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt6b25lfS1lcnJvcnNgKS5pbm5lclRleHQgPSBlcnJvclxuICB9LFxuXG4gIGNsZWFyRXJyb3JzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1lc3NhZ2UnKS5pbm5lclRleHQgPSAnd2FpdGluZyB0byBjYWxjdWxhdGUgY29zdC4uLidcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tZXJyb3JzJykuaW5uZXJUZXh0ID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWdlbnQtZXJyb3JzJykuaW5uZXJUZXh0ID0gJydcbiAgfSxcblxuICBkaXNwbGF5QWdlbnRET00oYWdlbnQsIHNpZGViYXIpIHtcbiAgICBzaWRlYmFyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgICBgPHNlY3Rpb24gY2xhc3M9XCJhZ2VudC1pbmZvXCI+XG4gICAgICA8aDM+R1JPU1MgSU5DT01FIFRISVMgWUVBUjogJCR7YWdlbnQuaW5jb21lVGhpc1llYXJ9PC9oMz5cbiAgICAgIDxoMz50aGVyZSBhcmUgJHthZ2VudC5jdXJyZW50VHJhdmVsZXJzfSB0cmF2ZWxlcnMgb24gdHJpcHMgcmlnaHQgbm93PC9oMz5cbiAgICA8L3NlY3Rpb24+YCk7XG5cbiAgICB0aGlzLmFkZFRyaXBJRERpc3BsYXkoKTtcbiAgICB0aGlzLmFkZElET3B0aW9ucygpO1xuICB9LFxuXG4gIGFkZFRyaXBJRERpc3BsYXkoKSB7XG4gICAgY29uc3QgaW5mb0Jsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmlwX19pbmZvLWJsb2NrJylcbiAgICBpbmZvQmxvY2tzLmZvckVhY2goYmxvY2sgPT4gYmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxoND4ke2Jsb2NrLnBhcmVudE5vZGUuaWR9PC9oND5gKSlcbiAgfSxcblxuICB1cGRhdGVVc2VyU3BlbmRpbmcodXNlciwgaWQpIHtcbiAgICBjb25zdCB1c2VyU3BlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1zcGVuZGluZycpO1xuICAgIGlmIChpZCA+IDApIHtcbiAgICAgIGxldCB0aGlzVXNlciA9IHVzZXIuYWxsVXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKTtcblxuICAgICAgdXNlclNwZW5kaW5nLmlubmVySFRNTCA9IGAke3RoaXNVc2VyLm5hbWV9IGhhcyBzcGVudCAkJHt0aGlzVXNlci5nZXRDb3N0Rm9yWWVhcigpfSBvbiB0cmF2ZWwgdGhpcyB5ZWFyYFxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyU3BlbmRpbmcuaW5uZXJIVE1MID0gJ25vIHVzZXIgc2VsZWN0ZWQnXG4gICAgfVxuICB9LFxuXG4gIGFkZElET3B0aW9ucygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWQtc2VsZWN0JykuaW5uZXJIVE1MID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJpcC0td3JhcHBlcicpLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWQtc2VsZWN0JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPG9wdGlvbiB2YWx1ZT1cIiR7dHJpcC5pZH1cIj4ke3RyaXAuaWR9PC9vcHRpb24+YCk7XG4gICAgfSlcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcydcblxuXG5jb25zdCBmZXRjaFJlcXVlc3RzID0ge1xuICBnZXRUcmF2ZWxlcihpZCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcihlcnIsICdsb2dpbicpKTtcbiAgfSxcblxuICBnZXRBbGxUcmF2ZWxlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVyc2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yKGVyciwgJ2xvZ2luJykpO1xuICB9LFxuXG4gIGdldFRyaXBzKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoZXJyLCAnbG9naW4nKVxuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcihlcnIsICdmb3JtJylcbiAgICAgIH0pO1xuICB9LFxuXG4gIGdldERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3IoZXJyLCAnbG9naW4nKSk7XG4gIH0sXG5cbiAgZ2V0QWxsRGF0YShpZCkge1xuICAgIHJldHVybiBbZmV0Y2hSZXF1ZXN0cy5nZXRUcmF2ZWxlcihpZCksIGZldGNoUmVxdWVzdHMuZ2V0VHJpcHMoKSwgZmV0Y2hSZXF1ZXN0cy5nZXREZXN0aW5hdGlvbnMoKV07XG4gIH0sXG5cbiAgZ2V0QWdlbnREYXRhKCkge1xuICAgIHJldHVybiBbZmV0Y2hSZXF1ZXN0cy5nZXRBbGxUcmF2ZWxlcnMoKSwgZmV0Y2hSZXF1ZXN0cy5nZXRUcmlwcygpLCBmZXRjaFJlcXVlc3RzLmdldERlc3RpbmF0aW9ucygpXTtcbiAgfSxcblxuICBwb3N0VHJpcChvYmopIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iailcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVyciA9PiBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcihlcnIsICdmb3JtJykpO1xuICB9LFxuXG4gIGRlbGV0ZVRyaXAoaWQpIHtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgfSlcbiAgfSxcblxuICBhcHByb3ZlQW5kTW9kaWZ5VHJpcChvYmopIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXBkYXRlVHJpcCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yKGVyciwgJ2FnZW50JykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoUmVxdWVzdHNcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Fycm93LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dsb2JlLWljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbWFwLWljb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc3VpdGNhc2UtaWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90aWNrZXQtaWNvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9wcm9mcGljLnBuZ1wiOyIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAnO1xuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vRGVzdGluYXRpb24nO1xuaW1wb3J0IEFnZW50IGZyb20gJy4vQWdlbnQnXG5cbmltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3Byb2ZwaWMucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXJyb3cucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvbWFwLWljb24ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvdGlja2V0LWljb24ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvaWNvbnMvZ2xvYmUtaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9pY29ucy9zdWl0Y2FzZS1pY29uLnBuZyc7XG5cbmxldCB1c2VyO1xubGV0IGRlc3RpbmF0aW9ucztcblxuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLXBhZ2UnKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHBsYW5UcmlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYW4tdHJpcC1idXR0b24nKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IHRyaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtbGlzdCcpO1xuY29uc3QgZGVzdGluYXRpb25QcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLXByZXZpZXcnKTtcblxuY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1zdGFydCcpO1xuY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtZW5kJyk7XG5jb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy10cmlwLWZvcm1fX2lucHV0Jyk7XG5jb25zdCBkZXN0aW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpO1xuY29uc3QgdHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXRyYXZlbGVycycpO1xuY29uc3QgYm9va1RyaXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay10cmlwLWJ1dHRvbicpO1xuY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrLWJ1dHRvbicpO1xuXG5jb25zdCBmaWx0ZXJPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1vcHRpb25zJyk7XG5jb25zdCBzaG93UGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93LW9ubHktcGVuZGluZycpO1xuY29uc3Qgc2hvd1VwY29taW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctb25seS11cGNvbWluZycpO1xuY29uc3QgZmlsdGVyQnlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1ieS1uYW1lJyk7XG5jb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ1dHRvbicpO1xuXG5jb25zdCBhZ2VudFRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFnZW50LXRvb2xzJyk7XG5jb25zdCBpZFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pZC1zZWxlY3QnKTtcbmNvbnN0IHN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VnZ2VzdGVkLWFjdGl2aXRpZXMnKTtcbmNvbnN0IHJlamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWplY3QtYnV0dG9uJyk7XG5jb25zdCBhcHByb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcHJvdmUtYnV0dG9uJyk7XG5cblxubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmZXRjaEFuZExvYWREYXRhTW9kZWwpO1xuc3RhcnREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRFbmRNaW4pO1xuZm9ybUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlRm9ybURPTSkpO1xucGxhblRyaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtVmlldyk7XG5ib29rVHJpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tUcmlwKTtcbmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGb3JtVmlldyk7XG5maWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJUcmlwcyk7XG5yZWplY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWplY3RBbmRSZW1vdmUpO1xuYXBwcm92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcHJvdmVBbmRNb2RpZnkpO1xuXG5cblxuLy9JTklUSUFMIExPQURcbmZ1bmN0aW9uIGZldGNoQW5kTG9hZERhdGFNb2RlbCgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFsbERhdGEoY2hlY2tMb2dpbkNyZWRlbnRpYWxzKCkpKVxuICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlc1swXS5tZXNzYWdlKSB7XG4gICAgICAgIGluaXRpYWxpemVET00ocmVzcG9uc2VzWzBdLCByZXNwb25zZXNbMV0sIHJlc3BvbnNlc1syXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcignTE9HSU4gRkFJTEVEXFxuaW52YWxpZCB1c2VybmFtZScsICdsb2dpbicpO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNsYXNzZXModXNlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25EYXRhLmRlc3RpbmF0aW9ucy5tYXAoZGF0YSA9PiBuZXcgRGVzdGluYXRpb24oZGF0YSkpO1xuICB1c2VyID0gbmV3IFVzZXIodXNlckRhdGEsIHRyaXBEYXRhLnRyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrTG9naW5DcmVkZW50aWFscygpIHtcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG4gIGxldCBpZDtcblxuICBpZiAodXNlcm5hbWUubWF0Y2goL1xcZCsvKSAhPT0gbnVsbCkge1xuICAgIGlkID0gdXNlcm5hbWUubWF0Y2goL1xcZCsvKVswXTtcbiAgfVxuXG4gIGlmICh1c2VybmFtZSA9PT0gJ2FnZW50JyAmJiBwYXNzd29yZCA9PT0gJ3RyYXZlbDIwMjAnKSB7XG4gICAgbG9hZEFnZW50VG9vbHMoKTtcbiAgfSBlbHNlIGlmICghaWQgfHwgdXNlcm5hbWUgIT09IGB0cmF2ZWxlciR7aWR9YCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yKCdMT0dJTiBGQUlMRURcXG5pbnZhbGlkIHVzZXJuYW1lJywgJ2xvZ2luJyk7XG4gIH0gZWxzZSBpZiAoIXBhc3N3b3JkID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcignTE9HSU4gRkFJTEVEXFxuaW52YWxpZCBwYXNzd29yZCcsICdsb2dpbicpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRE9NKHVzZXJEYXRhLCByZWNpcGVEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgZ2VuZXJhdGVDbGFzc2VzKHVzZXJEYXRhLCByZWNpcGVEYXRhLCBkZXN0aW5hdGlvbkRhdGEpO1xuICB1cGRhdGVUcmlwRGlzcGxheSgpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlTaWRlYmFyKHVzZXIsIHNpZGViYXIpO1xuICBsb2dpblBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHNldFN0YXJ0TWluKCk7XG4gIHBsYW5UcmlwQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlEZXN0aW5hdGlvbk9wdGlvbnMoZGVzdGluYXRpb25zLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tbGlzdCcpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFsbFRyaXBzKCkge1xuICB1c2VyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMsIHRyaXBMaXN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZ2VudFRvb2xzKCkge1xuICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFnZW50RGF0YSgpKVxuICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICBnZW5lcmF0ZUFnZW50RGF0YU1vZGVsKHJlc3BvbnNlc1swXSwgcmVzcG9uc2VzWzFdLCByZXNwb25zZXNbMl0pO1xuICAgICAgaW5pdGlhbGl6ZUFnZW50RE9NKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQWdlbnREYXRhTW9kZWwodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKSB7XG4gIGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uRGF0YS5kZXN0aW5hdGlvbnMubWFwKGRhdGEgPT4gbmV3IERlc3RpbmF0aW9uKGRhdGEpKTtcbiAgdXNlciA9IG5ldyBBZ2VudCh0cmF2ZWxlckRhdGEudHJhdmVsZXJzLCB0cmlwRGF0YS50cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFnZW50RE9NKCkge1xuICBsb2dpblBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGFnZW50VG9vbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGZpbHRlck9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGRpc3BsYXlBbGxUcmlwcygpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlBZ2VudERPTSh1c2VyLCBzaWRlYmFyKTtcbn1cblxuLy9DQUxMIGRvbVVwZGF0ZXNcblxuZnVuY3Rpb24gdG9nZ2xlRm9ybVZpZXcoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLW1lc3NhZ2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgcGxhblRyaXBCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1mb3JtJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIGJvb2tUcmlwQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBkZXN0aW5hdGlvblByZXZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHRyaXBMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBiYWNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICBkb21VcGRhdGVzLmNsZWFyRXJyb3JzKCk7XG4gIGlmICh0cmlwTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgZG9tVXBkYXRlcy51cGRhdGVQcmV2aWV3KGRlc3RpbmF0aW9uUHJldmlldywgZGVzdGluYXRpb25MaXN0LCBkZXN0aW5hdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRyaXBEaXNwbGF5KCkge1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcHModHJpcExpc3QpO1xuICBkaXNwbGF5QWxsVHJpcHMoKTtcbn1cblxuZnVuY3Rpb24gc2V0RW5kTWluKCkge1xuICBsZXQgbmV4dERheSA9IG5ldyBEYXRlKCk7XG4gIG5leHREYXkuc2V0RGF0ZShuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkuZ2V0RGF0ZSgpICsgMSk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG5leHREYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApKTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNaW4oKSB7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGb3JtRE9NKCkge1xuICBpZiAoc3RhcnREYXRlSW5wdXQudmFsdWUgJiYgZW5kRGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgdHJpcCA9IG5ldyBUcmlwKGdldE9iamVjdEZyb21JbnB1dHMoe3RyaXBzOiBbXX0pLCBkZXN0aW5hdGlvbnMpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNvc3RNZXNzYWdlKHRyaXApO1xuICB9XG4gIGRvbVVwZGF0ZXMudXBkYXRlUHJldmlldyhkZXN0aW5hdGlvblByZXZpZXcsIGRlc3RpbmF0aW9uTGlzdCwgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyVHJpcHMoKSB7XG4gIGNoZWNrRmlsdGVyQm94ZXMoKTtcbiAgdXNlci50cmlwcyA9IHVzZXIuZ2VuZXJhdGVUcmlwcygpO1xuICBkb21VcGRhdGVzLnVwZGF0ZVVzZXJTcGVuZGluZyh1c2VyLCB1c2VyLnVzZXJTZWxlY3QpO1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcHModHJpcExpc3QpO1xuICBkaXNwbGF5QWxsVHJpcHMoKTtcbiAgZG9tVXBkYXRlcy5hZGRUcmlwSUREaXNwbGF5KCk7XG4gIGRvbVVwZGF0ZXMuYWRkSURPcHRpb25zKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFnZW50RE9NKCkge1xuICBQcm9taXNlLmFsbChmZXRjaFJlcXVlc3RzLmdldEFnZW50RGF0YSgpKVxuICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnMgPSByZXNwb25zZXNbMl0uZGVzdGluYXRpb25zLm1hcChkYXRhID0+IG5ldyBEZXN0aW5hdGlvbihkYXRhKSk7XG4gICAgICB1c2VyID0gbmV3IEFnZW50KHJlc3BvbnNlc1swXS50cmF2ZWxlcnMsIHJlc3BvbnNlc1sxXS50cmlwcywgZGVzdGluYXRpb25zKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1pbmZvJykucmVtb3ZlKCk7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlBZ2VudERPTSh1c2VyLCBzaWRlYmFyKTtcbiAgICAgIGZpbHRlclRyaXBzKCk7XG4gICAgfSk7XG59XG5cbi8vQ0FMTCBmZXRjaFJlcXVlc3RzXG5cbmZ1bmN0aW9uIGJvb2tUcmlwKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIXN0YXJ0RGF0ZUlucHV0LnZhbHVlIHx8ICFlbmREYXRlSW5wdXQudmFsdWUpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlFcnJvcigncGxlYXNlIGZpbGwgb3V0IGFsbCByZXF1aXJlZCBpbnB1dHMnLCAnZm9ybScpO1xuICB9XG4gIGZldGNoUmVxdWVzdHMuZ2V0VHJpcHMoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBmZXRjaFJlcXVlc3RzLnBvc3RUcmlwKGdldE9iamVjdEZyb21JbnB1dHMocmVzcG9uc2UpKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIFByb21pc2UuYWxsKGZldGNoUmVxdWVzdHMuZ2V0QWxsRGF0YSh1c2VyLmlkKSkudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICBnZW5lcmF0ZUNsYXNzZXMocmVzcG9uc2VzWzBdLCByZXNwb25zZXNbMV0sIHJlc3BvbnNlc1syXSk7XG4gICAgICAgIHVwZGF0ZVRyaXBEaXNwbGF5KCk7XG4gICAgICAgIHRvZ2dsZUZvcm1WaWV3KCk7XG4gICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheVdlbGNvbWVNZXNzYWdlKHVzZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RGcm9tSW5wdXRzKHRyaXBzKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IHRyaXBzLnRyaXBzLmxlbmd0aCArIDEsXG4gICAgdXNlcklEOiB1c2VyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IHBhcnNlSW50KGRlc3RpbmF0aW9uTGlzdC52YWx1ZSksXG4gICAgdHJhdmVsZXJzOiB0cmF2ZWxlcnNJbnB1dC52YWx1ZSxcbiAgICBkYXRlOiBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApLnJlcGxhY2VBbGwoJy0nLCAnLycpLFxuICAgIGR1cmF0aW9uOiAobmV3IERhdGUoZW5kRGF0ZUlucHV0LnZhbHVlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSkuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXVxuICB9O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZpbHRlckJveGVzKCkge1xuICBpZiAoc2hvd1BlbmRpbmcuY2hlY2tlZCkge1xuICAgIHVzZXIucGVuZGluZ0ZpbHRlciA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdXNlci5wZW5kaW5nRmlsdGVyID0gZmFsc2U7XG4gIH1cbiAgaWYgKHNob3dVcGNvbWluZy5jaGVja2VkKSB7XG4gICAgdXNlci51cGNvbWluZ0ZpbHRlciA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdXNlci51cGNvbWluZ0ZpbHRlciA9IGZhbHNlO1xuICB9XG4gIGlmIChmaWx0ZXJCeU5hbWUudmFsdWUpIHtcbiAgICB1c2VyLnVzZXJTZWxlY3QgPSB1c2VyLmFsbFVzZXJzLmZpbmQodXNlciA9PiB1c2VyLm5hbWUuaW5jbHVkZXMoZmlsdGVyQnlOYW1lLnZhbHVlKSkuaWQ7XG4gIH0gZWxzZSB7XG4gICAgdXNlci51c2VyU2VsZWN0ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3RBbmRSZW1vdmUoKSB7XG4gIGZldGNoUmVxdWVzdHMuZGVsZXRlVHJpcChpZFNlbGVjdC52YWx1ZSk7XG4gIHVwZGF0ZUFnZW50RE9NKCk7XG59XG5cbmZ1bmN0aW9uIGdldEFwcHJvdmFsT2JqZWN0KCkge1xuICBsZXQgYXBwcm92YWxPYmogPSB7aWQ6IHBhcnNlSW50KGlkU2VsZWN0LnZhbHVlKSwgc3RhdHVzOiAnYXBwcm92ZWQnfTtcblxuICBpZiAoc3VnZ2VzdGVkQWN0aXZpdGllcy52YWx1ZSkge1xuICAgIGFwcHJvdmFsT2JqLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBzdWdnZXN0ZWRBY3Rpdml0aWVzLnZhbHVlLnNwbGl0KCcsICcpO1xuICB9XG5cbiAgcmV0dXJuIGFwcHJvdmFsT2JqO1xufVxuXG5mdW5jdGlvbiBhcHByb3ZlQW5kTW9kaWZ5KCkge1xuICBmZXRjaFJlcXVlc3RzLmFwcHJvdmVBbmRNb2RpZnlUcmlwKGdldEFwcHJvdmFsT2JqZWN0KCkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHVwZGF0ZUFnZW50RE9NKCk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==