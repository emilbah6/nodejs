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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  background: #404167;\\n  font-family: 'Open Sans', sans-serif;\\n  margin-bottom: 0; }\\n\\nh1 {\\n  text-align: center;\\n  color: #ffffff; }\\n\\n.filter-container {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n  .filter-container .form-inline {\\n    display: flex;\\n    flex-flow: row wrap;\\n    align-items: center; }\\n    .filter-container .form-inline label {\\n      margin: 5px 10px 5px 0;\\n      color: #ffffff; }\\n    .filter-container .form-inline input, .filter-container .form-inline select {\\n      vertical-align: middle;\\n      margin: 5px 10px 5px 0;\\n      padding: 5px;\\n      background-color: #fff;\\n      border: 1px solid #ddd;\\n      border-radius: 4px; }\\n    .filter-container .form-inline #min-price, .filter-container .form-inline #max-price {\\n      width: 5%; }\\n\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  width: 100%;\\n  padding-top: 3%; }\\n  .container h4 {\\n    text-align: center;\\n    color: #ffffff;\\n    width: 100%; }\\n  .container .col {\\n    width: calc(100% / 3);\\n    text-align: center;\\n    margin-bottom: 2%; }\\n    .container .col img {\\n      border: 1px solid #ddd;\\n      border-radius: 4px;\\n      padding: 3px; }\\n    .container .col figcaption {\\n      text-align: center;\\n      font-size: 11px;\\n      color: #ffffff; }\\n    .container .col h4, .container .col h5 {\\n      color: #ffffff;\\n      margin: 5px 0;\\n      font-weight: 600; }\\n    .container .col .potion-name {\\n      color: #ffffff;\\n      margin: 5px;\\n      font-size: 18px; }\\n    .container .col .tags, .container .col .required-level {\\n      color: #ffffff;\\n      margin: 1px;\\n      font-size: 15px; }\\n      .container .col .tags span, .container .col .required-level span {\\n        font-weight: 600; }\\n    .container .col .price {\\n      border: none;\\n      outline: 0;\\n      display: inline-block;\\n      padding: 8px;\\n      color: white;\\n      background-color: #8199CF;\\n      text-align: center;\\n      width: 60%;\\n      font-size: 18px;\\n      margin-top: 2%;\\n      border-radius: 4px; }\\n      .container .col .price .float-left {\\n        float: left; }\\n      .container .col .price .float-right {\\n        float: right; }\\n\\nfooter {\\n  background-color: #8199CF;\\n  color: #ffffff;\\n  text-align: center;\\n  padding: 8px;\\n  margin: 0 -8px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./server/fetchData.js":
/*!*****************************!*\
  !*** ./server/fetchData.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const helpers = __webpack_require__(/*! ../src/js/helpers/helpers */ \"./src/js/helpers/helpers.js\");\r\nconst apiProductsURL = 'http://localhost:3000/api/products';\r\nconst container = document.getElementById(\"potions-result\");\r\n\r\nclass FetchData {\r\n\r\n    fetchAll() {\r\n        fetch(`${apiProductsURL}`)\r\n            .then(response => response.json())\r\n            .then(data => helpers.drawData(data, container));\r\n    }\r\n\r\n    /**\r\n     *\r\n     * @param {string} potion\r\n     * @param {string} level\r\n     * @param {string} order\r\n     * @param {int} minPrice\r\n     * @param {int} maxPrice\r\n     */\r\n\r\n    fetchSpecificProducts(potion = '', level = '', order = '', minPrice = 0, maxPrice = 0) {\r\n\r\n        minPrice = parseInt(minPrice);\r\n        maxPrice = parseInt(maxPrice);\r\n\r\n        maxPrice = maxPrice < minPrice ? 4000 : maxPrice;\r\n\r\n        fetch(`${apiProductsURL}?order=${order}&potion=${potion}&level=${level}&minPrice=${minPrice}&maxPrice=${maxPrice}`)\r\n            .then(response => response.json())\r\n            .then(data => helpers.drawData(data, container));\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = new FetchData();\n\n//# sourceURL=webpack:///./server/fetchData.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/fetchData */ \"./server/fetchData.js\");\n/* harmony import */ var _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_server_fetchData__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nlet potionInput = document.getElementById(\"potion\");\r\nlet potionName = potionInput.value;\r\nlet filterByLevel = document.getElementById(\"filter-by-level\");\r\nlet level = filterByLevel.value;\r\nlet orderBy = document.getElementById(\"order-by\");\r\nlet orderByValue = orderBy.value;\r\nlet minPrice = document.getElementById(\"min-price\");\r\nlet minPriceValue = minPrice.value;\r\nlet maxPrice = document.getElementById(\"max-price\");\r\nlet maxPriceValue = maxPrice.value;\r\n\r\n/** Fetch all data on load */\r\n_server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchAll();\r\n\r\npotionInput.addEventListener(\"keyup\", (e) => {\r\n\r\n    potionName = e.target.value;\r\n\r\n    _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)\r\n});\r\n\r\nfilterByLevel.addEventListener(\"change\", (e) => {\r\n\r\n    level = e.target.value;\r\n\r\n    _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)\r\n});\r\n\r\norderBy.addEventListener(\"change\", (e) => {\r\n\r\n    orderByValue = e.target.value;\r\n\r\n    _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)\r\n});\r\n\r\nminPrice.addEventListener(\"change\", (e) => {\r\n\r\n    minPriceValue = e.target.value;\r\n\r\n    _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)\r\n});\r\n\r\nmaxPrice.addEventListener(\"change\", (e) => {\r\n\r\n    maxPriceValue = e.target.value;\r\n\r\n    _server_fetchData__WEBPACK_IMPORTED_MODULE_1___default.a.fetchSpecificProducts(potionName, level, orderByValue, minPriceValue, maxPriceValue)\r\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/helpers/helpers.js":
/*!***********************************!*\
  !*** ./src/js/helpers/helpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    drawData: function (data, container) {\r\n\r\n        let colElements = '';\r\n\r\n        if (data.length){\r\n            data.forEach(element => {\r\n\r\n                /** Destructuring the element object for the necessary fields */\r\n                let {id, name, required_level, tags, price} = element;\r\n\r\n                /** Converting the array of tags into a string*/\r\n                tags = tags.toString();\r\n                tags = tags.replace(/_/g, \" \");\r\n\r\n                colElements += `<article class=\"col\">\r\n                <figure>\r\n                    <img src=\"/images/${id}.png\" alt=\"${name}\" aria-hidden=\"true\">\r\n                    <figcaption>Potion ${id}: ${name}</figcaption>\r\n                </figure>\r\n                <div>\r\n                    <p class=\"potion-name\">${name}</p>\r\n                    <p class=\"required-level\"><span>Required level:</span> ${required_level}</p>\r\n                    <p class=\"tags\"><span>Tags:</span> ${tags}</p>\r\n                    <div class=\"price\"><span class=\"float-left\">Price</span> <span class=\"float-right\">${price} &euro;</span></div>\r\n                </div>\r\n            </article>`;\r\n            });\r\n\r\n        }\r\n        else{\r\n            colElements = \"<h4>There are no potions based on your filters!</h4>\";\r\n        }\r\n\r\n\r\n        container.innerHTML = colElements;\r\n    },\r\n\r\n    orderBy: function (jsonData, order) {\r\n        switch (order) {\r\n            case 'name':\r\n                return jsonData.sort((a, b) => (a.name > b.name) ? 1 : -1);\r\n            case 'tags':\r\n                return jsonData.sort((a, b) => (a.tags > b.tags) ? 1 : -1);\r\n            case 'price':\r\n                return jsonData.sort((a, b) => (a.price > b.price) ? 1 : -1);\r\n            case 'required_level':\r\n                return jsonData.sort((a, b) => (a.required_level > b.required_level) ? 1 : -1);\r\n            default:\r\n                return jsonData.sort((a, b) => (a.name > b.name) ? 1 : -1);\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/js/helpers/helpers.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });