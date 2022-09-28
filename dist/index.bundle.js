"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background-image/bodypng.png */ \"./src/background-image/bodypng.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! background-image/backgroundpixel.png */ \"./src/background-image/backgroundpixel.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! runner.png */ \"./src/runner.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: black;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.everything {\\r\\n  position: relative;\\r\\n  align-items: flex-start;\\r\\n  height: 100vh;\\r\\n  padding: 25px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  right: -90px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-size: contain;\\r\\n  background-repeat: no-repeat;\\r\\n  width: 450px;\\r\\n  height: 450px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  color: white;\\r\\n  font-family: 'Press Start 2P', cursive;\\r\\n  text-shadow:\\r\\n    5px 0 black,\\r\\n    -5px 0 black,\\r\\n    0 5px black,\\r\\n    0 -5px black,\\r\\n    5px 5px black,\\r\\n    -5px -5px black,\\r\\n    5px -5px black,\\r\\n    -5px 5px black;\\r\\n}\\r\\n\\r\\n.scores-and-form {\\r\\n  gap: 25px;\\r\\n  height: 87%;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.flex-row {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.names-scores {\\r\\n  justify-content: space-between;\\r\\n  padding: 15px;\\r\\n  background-image: linear-gradient(to bottom, rgb(88, 73, 107), rgb(70, 16, 156));\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.recent-scores {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.scores-title-button {\\r\\n  gap: 25px;\\r\\n  align-items: center;\\r\\n  padding: 15px 0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.scores-refresh {\\r\\n  background-color: purple;\\r\\n  border: 1px solid black;\\r\\n  text-decoration: none;\\r\\n  padding: 5px 20px;\\r\\n  color: white;\\r\\n  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.5);\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.scores-refresh:hover {\\r\\n  background-color: blue;\\r\\n}\\r\\n\\r\\n.scores-box {\\r\\n  border: 1px solid black;\\r\\n  max-height: 500px;\\r\\n  overflow-x: auto;\\r\\n  overflow-y: auto;\\r\\n  color: white;\\r\\n  width: 600px;\\r\\n}\\r\\n\\r\\n.individual-user {\\r\\n  margin-right: 20px;\\r\\n  min-width: 150px;\\r\\n}\\r\\n\\r\\n.user-score-div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-image: linear-gradient(to bottom, rgb(79, 58, 98), rgb(38, 25, 60));\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.user-score-div:hover {\\r\\n  background-image: linear-gradient(to bottom, rgb(56, 39, 71), rgb(25, 16, 41));\\r\\n}\\r\\n\\r\\n.user-score-div:nth-child(even) {\\r\\n  background-image: linear-gradient(to bottom, rgb(43, 43, 84), rgb(30, 27, 60));\\r\\n}\\r\\n\\r\\n.user-score-div:nth-child(even):hover {\\r\\n  background-image: linear-gradient(to bottom, rgb(32, 32, 67), rgb(20, 18, 44));\\r\\n}\\r\\n\\r\\n.add-score {\\r\\n  color: white;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.add-score-title {\\r\\n  padding: 15px 0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.score-inputs {\\r\\n  gap: 5px;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.score-inputs-button {\\r\\n  background-color: purple;\\r\\n  color: white;\\r\\n  width: 120px;\\r\\n  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.5);\\r\\n  border: 1px solid black;\\r\\n  padding: 5px;\\r\\n  cursor: pointer;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.score-inputs-button:hover {\\r\\n  background-color: blue;\\r\\n}\\r\\n\\r\\n@media all and (max-width: 768px) {\\r\\n  .everything {\\r\\n    background-size: cover;\\r\\n    padding: 25px;\\r\\n  }\\r\\n\\r\\n  .scores-and-form {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .score-inputs input {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .scores-box {\\r\\n    width: 350px;\\r\\n    overflow-x: auto;\\r\\n  }\\r\\n\\r\\n  .image {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .recent-scores {\\r\\n    width: 350px;\\r\\n    padding: 50px 0 0 0;\\r\\n  }\\r\\n\\r\\n  .add-score {\\r\\n    width: 350px;\\r\\n    padding: 50px 0;\\r\\n  }\\r\\n\\r\\n  .user-score-div {\\r\\n    padding: 20px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createNewGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createNewGame.js */ \"./src/modules/createNewGame.js\");\n/* harmony import */ var _modules_createNewScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createNewScore.js */ \"./src/modules/createNewScore.js\");\n/* harmony import */ var _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dataStructure.js */ \"./src/modules/dataStructure.js\");\n/* harmony import */ var _modules_dynamic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dynamic.js */ \"./src/modules/dynamic.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_refresh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/refresh.js */ \"./src/modules/refresh.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.scoresInputBtn.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n  const inputName = document.querySelector('.input-name').value;\r\n  const inputNumber = document.querySelector('.input-number').value;\r\n  if (inputName !== '' && inputNumber !== '') {\r\n    await (0,_modules_createNewScore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await _modules_createNewGame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], inputName, inputNumber);\r\n    (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    document.querySelector('.input-name').value = \"\";\r\n    document.querySelector('.input-number').value = \"\";\r\n  }\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.scoresRefresh.addEventListener('click', async () => {\r\n  const gettingObject = await (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(await _modules_createNewGame_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataStructure = [...gettingObject.result];\r\n  _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataStructure.sort(((a, b) => b.score - a.score));\r\n  if (_modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) { (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); }\r\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.soundtrack.play();\r\n  if (localStorage.getItem('scores')) {\r\n    _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataStructure = JSON.parse(localStorage.getItem('scores'));\r\n  }\r\n  for (let i = 0; i < _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataStructure.length; i += 1) {\r\n    const newScore = _modules_dataStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dataStructure[i];\r\n    _modules_dynamic_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addNewScore(newScore.user, newScore.score, i);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/cleanList.js":
/*!**********************************!*\
  !*** ./src/modules/cleanList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst cleanList = () => {\r\n  while (_variables_js__WEBPACK_IMPORTED_MODULE_0__.scoresBox.firstChild) {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.scoresBox.removeChild(_variables_js__WEBPACK_IMPORTED_MODULE_0__.scoresBox.lastChild);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanList);\n\n//# sourceURL=webpack://to-do-list/./src/modules/cleanList.js?");

/***/ }),

/***/ "./src/modules/createNewGame.js":
/*!**************************************!*\
  !*** ./src/modules/createNewGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNewGame = async () => {\r\n  const newGame = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(\r\n      {\r\n        name: 'VitorGaming',\r\n      },\r\n    ),\r\n  }).then((data) => data.json()).then((data) => data.result.split(' ')[3]);\r\n  return newGame;\r\n};\r\n\r\nconst iD = createNewGame();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iD);\n\n//# sourceURL=webpack://to-do-list/./src/modules/createNewGame.js?");

/***/ }),

/***/ "./src/modules/createNewScore.js":
/*!***************************************!*\
  !*** ./src/modules/createNewScore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNewScore = async (ID, user, score) => {\r\n  const newScore = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(\r\n      {\r\n        user,\r\n        score,\r\n      },\r\n    ),\r\n  }).then((data) => data.json());\r\n  return newScore;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewScore);\n\n//# sourceURL=webpack://to-do-list/./src/modules/createNewScore.js?");

/***/ }),

/***/ "./src/modules/dataStructure.js":
/*!**************************************!*\
  !*** ./src/modules/dataStructure.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataClass)\n/* harmony export */ });\nclass DataClass {\r\n    static dataStructure = []\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/dataStructure.js?");

/***/ }),

/***/ "./src/modules/dynamic.js":
/*!********************************!*\
  !*** ./src/modules/dynamic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dynamic)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nclass Dynamic {\r\n  static addNewScore(user, score, index) {\r\n    if (score.length >= 8) {\r\n      score = '+9999999';\r\n    }\r\n    const div = document.createElement('div');\r\n    div.setAttribute('class', 'user-score-div');\r\n    const newUser = document.createElement('p');\r\n    newUser.textContent = `${index + 1} ${user}`;\r\n    const newScore = document.createElement('p');\r\n    newScore.textContent = score;\r\n    newUser.setAttribute('class', 'individual-user');\r\n    newScore.setAttribute('class', 'individual-score');\r\n    div.appendChild(newUser);\r\n    div.appendChild(newScore);\r\n    if (index === 0) {\r\n      div.style.background = 'gold';\r\n      div.style.color = 'black';\r\n    }\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.scoresBox.appendChild(div);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/dynamic.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataStructure.js */ \"./src/modules/dataStructure.js\");\n\n\nconst setLocalStorage = () => {\n  localStorage.setItem('scores', JSON.stringify(_dataStructure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocalStorage);\n\n//# sourceURL=webpack://to-do-list/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst refresh = async (ID) => {\r\n  const refreshBtn = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {\r\n    method: 'GET',\r\n    headers: {\r\n      Accept: 'application/json',\r\n    },\r\n  }).then((data) => data.json());\r\n  return refreshBtn;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh);\n\n//# sourceURL=webpack://to-do-list/./src/modules/refresh.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cleanList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanList.js */ \"./src/modules/cleanList.js\");\n/* harmony import */ var _dataStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStructure.js */ \"./src/modules/dataStructure.js\");\n/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic.js */ \"./src/modules/dynamic.js\");\n\r\n\r\n\r\n\r\nconst render = () => {\r\n  (0,_cleanList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  for (let i = 0; i < _dataStructure_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure.length; i += 1) {\r\n    const newdataStructure = _dataStructure_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure[i];\r\n    _dynamic_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addNewScore(newdataStructure.user, newdataStructure.score, i);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://to-do-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scoresBox\": () => (/* binding */ scoresBox),\n/* harmony export */   \"scoresInputBtn\": () => (/* binding */ scoresInputBtn),\n/* harmony export */   \"scoresRefresh\": () => (/* binding */ scoresRefresh),\n/* harmony export */   \"soundtrack\": () => (/* binding */ soundtrack)\n/* harmony export */ });\nconst scoresBox = document.querySelector('.scores-box');\r\nconst scoresInputBtn = document.querySelector('.score-inputs-button');\r\nconst scoresRefresh = document.querySelector('.scores-refresh');\r\nconst soundtrack = document.querySelector('.soundtrack');\n\n//# sourceURL=webpack://to-do-list/./src/modules/variables.js?");

/***/ }),

/***/ "./src/background-image/backgroundpixel.png":
/*!**************************************************!*\
  !*** ./src/background-image/backgroundpixel.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ba57f9f996c2b089b94.png\";\n\n//# sourceURL=webpack://to-do-list/./src/background-image/backgroundpixel.png?");

/***/ }),

/***/ "./src/background-image/bodypng.png":
/*!******************************************!*\
  !*** ./src/background-image/bodypng.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8cabd36ad617fe6ce3c.png\";\n\n//# sourceURL=webpack://to-do-list/./src/background-image/bodypng.png?");

/***/ }),

/***/ "./src/runner.png":
/*!************************!*\
  !*** ./src/runner.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f92484d65847a0de6df0.png\";\n\n//# sourceURL=webpack://to-do-list/./src/runner.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);