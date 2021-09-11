/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: rgb(212, 212, 212);\n  text-align: center;\n  width: 100%;\n  height: 40px;\n  color: black;\n  font-size: 35px;\n  font-weight: bold;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: rgb(140, 121, 223);\n  height: 350px;\n}\n.playerName {\n  font-size: 20px;\n  font-weight: bold;\n}\n.pTwoContainer {\n  background-color:rgb(216, 191, 124);\n  height: 350px;\n}\n.boardContainer {\n height: 230px; \n width: 230px;\n border: 1px solid black;\n margin: auto;\n margin-top: 20px;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.shipLocationCheck {\n  background-color: rgb(49, 49, 49);\n}\n.shipLocationBad {\n  background-color: red;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}\n\n@media only screen and (min-width: 800px) {\n  /* .boardContainer {\n    height: 330px;\n    width: 300px;\n   } */\n }", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,4DAA4D;EAC5D,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;AACX;AACA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,aAAa;AACf;AACA;CACC,aAAa;CACb,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,uCAAuC;CACvC,QAAQ;AACT;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE;;;MAGI;CACL","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: rgb(212, 212, 212);\n  text-align: center;\n  width: 100%;\n  height: 40px;\n  color: black;\n  font-size: 35px;\n  font-weight: bold;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: rgb(140, 121, 223);\n  height: 350px;\n}\n.playerName {\n  font-size: 20px;\n  font-weight: bold;\n}\n.pTwoContainer {\n  background-color:rgb(216, 191, 124);\n  height: 350px;\n}\n.boardContainer {\n height: 230px; \n width: 230px;\n border: 1px solid black;\n margin: auto;\n margin-top: 20px;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.shipLocationCheck {\n  background-color: rgb(49, 49, 49);\n}\n.shipLocationBad {\n  background-color: red;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}\n\n@media only screen and (min-width: 800px) {\n  /* .boardContainer {\n    height: 330px;\n    width: 300px;\n   } */\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboardOne": () => (/* binding */ gameboardOne),
/* harmony export */   "gameboardTwo": () => (/* binding */ gameboardTwo),
/* harmony export */   "playerOne": () => (/* binding */ playerOne),
/* harmony export */   "playerTwo": () => (/* binding */ playerTwo)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Player */ "./src/modules/Player.js");
/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOMinteraction */ "./src/modules/DOMinteraction.js");





// const DOM = DOMinteraction();
const playerOne = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)('human');
const playerTwo = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)('computer');
const gameboardOne = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)(1);
const gameboardTwo = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)(2);
const Game = () => {
  (0,_modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__.makeBoard)(1);
  (0,_modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__.makeBoard)(2);
  playerTwo.randomComputerShips(playerTwo, gameboardTwo);
  (0,_modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(gameboardOne);
  (0,_modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__.renderBoard)(gameboardTwo);
};
Game();




/***/ }),

/***/ "./src/modules/DOMinteraction.js":
/*!***************************************!*\
  !*** ./src/modules/DOMinteraction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "playerPlay": () => (/* binding */ playerPlay),
/* harmony export */   "changeXorY": () => (/* binding */ changeXorY),
/* harmony export */   "startGameLoop": () => (/* binding */ startGameLoop)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");



const pOneContainer = document.querySelector('.pOneContainer');
const pTwoContainer = document.querySelector('.pTwoContainer');
const playerMessages = document.querySelector('.playerMessages');

let gameLoopTime = false;
let placeCarrierTime = true;
let placeBattleshipTime = false;
let placeDestroyerTime = false;
let placeSubmarineTime = false;
let placePatrolTime = false;
let placeXorY = 'x';
const carrierForbidSpotsX = [7, 8, 9, 10, 17, 18, 19, 20,
  27, 28, 29, 30, 37, 38, 39, 40, 47, 48, 49, 50, 57, 58, 59, 60, 67, 68, 69, 70, 77,
  78, 79, 80, 87, 88, 89, 90, 97, 98, 99, 100];
const battleForbidSpotsX = [8, 9, 10, 18, 19, 20, 28, 29, 30, 38, 39,
  40, 48, 49, 50, 58, 59, 60, 68, 69, 70, 78, 79, 80, 88, 89, 90, 98, 99, 100];
const destroyerForbidSpotsX = [9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70,
  79, 80, 89, 90, 99, 100];
const subForbidSpotsX = destroyerForbidSpotsX;
const patrolForbidSpotsX = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const carrierForbidGraterY = 61;
const battleForbidGraterY = 71;
const destroyerForbidGraterY = 81;
const subForbidGraterY = 81;
const patrolForbidGraterY = 91;
const startGameLoop = () => {
  gameLoopTime = true;
};
const makeBoard = (OneOrTwo) => {
  let gameboardLocation = pOneContainer;
  if (OneOrTwo === 2) {
    gameboardLocation = pTwoContainer;
  }
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('boardContainer');
  gameboardLocation.appendChild(boardContainer);
  for (let i = 1; i < 101; i += 1) {
    const boardLocation = document.createElement('div');
    boardLocation.classList.add('boardLocation');
    boardLocation.dataset.number = i;
    boardContainer.appendChild(boardLocation);
  }
};
const renderShips = (gameboard) => {
  let container = pOneContainer;
  if (gameboard.player === 2) {
    container = pTwoContainer;
  }
  gameboard.shipsOnThisBoard.forEach((ship) => {
    ship.spots.forEach((spot) => {
      const square = container.querySelector(`[data-number='${spot}']`);
      square.classList = 'boardLocation shipLocation';
    });
  });
};
const renderHits = (gameboard) => {
  let container = pOneContainer;
  if (gameboard.player === 2) {
    container = pTwoContainer;
  }
  if (gameboard.hitSpaces === []) return;
  gameboard.hitSpaces.forEach((hit) => {
    const square = container.querySelector(`[data-number='${hit}']`);
    square.classList = 'boardLocation shipLocation hitAttack';
  });
};
const renderMisses = (gameboard) => {
  let container = pOneContainer;
  if (gameboard.player === 2) {
    container = pTwoContainer;
  }
  if (gameboard.missedAttacks === []) return;
  gameboard.missedAttacks.forEach((miss) => {
    const square = container.querySelector(`[data-number='${miss}']`);
    square.classList = 'boardLocation missedAttack';
  });
};
const renderBoard = (gameboard) => {
  if (gameboard.player === 1) {
    renderShips(gameboard);
  }
  renderHits(gameboard);
  renderMisses(gameboard);
};

// place patrol
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placePatrolTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.checkShipIntersection(placeXorY, spot, 2, _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(spot)) return;
    const pOnePatrol = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 2, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOnePatrol);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placePatrolTime = false;
  } else {
    if (spot > 91) return;
    const pOnePatrol = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 2, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOnePatrol);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placePatrolTime = false;
  }
  playerMessages.innerHTML = 'Player One Makes the first move!';
  startGameLoop();
  setTimeout(() => { playerMessages.innerHTML = ''; }, 5000);
});
// place Submarine
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeSubmarineTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.checkShipIntersection(placeXorY, spot, 3, _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([9, 10, 19, 20,
      29, 30, 39,
      40, 49, 50,
      59, 60, 69, 70,
      79, 80, 89, 90,
      99, 100].includes(spot)) return;
    const pOneSub = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 3, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneSub);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeSubmarineTime = false;
    placePatrolTime = true;
  } else {
    if (spot > 81) return;
    const pOneSub = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 3, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneSub);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeSubmarineTime = false;
    placePatrolTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Patrol Ship. 
  Press 'x' or 'y' to change orientation.`;
});
// place destroyer
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeDestroyerTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.checkShipIntersection(placeXorY, spot, 3, _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([9, 10, 19, 20,
      29, 30, 39,
      40, 49, 50,
      59, 60, 69, 70,
      79, 80, 89, 90,
      99, 100].includes(spot)) return;
    const pOneDestroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 3, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeDestroyerTime = false;
    placeSubmarineTime = true;
  } else {
    if (spot > 81) return;
    const pOneDestroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 3, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeDestroyerTime = false;
    placeSubmarineTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Submarine. 
  Press 'x' or 'y' to change orientation.`;
});
// place battleship
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeBattleshipTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.checkShipIntersection(placeXorY, spot, 4, _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([8, 9, 10, 18, 19, 20,
      28, 29, 30, 38, 39,
      40, 48, 49, 50, 58,
      59, 60, 68, 69, 70,
      78, 79, 80, 88, 89, 90,
      98, 99, 100].includes(spot)) return;
    const pOneBattleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 4, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeBattleshipTime = false;
    placeDestroyerTime = true;
  } else {
    if (spot > 71) return;
    const pOneBattleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 4, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeBattleshipTime = false;
    placeDestroyerTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Destroyer. 
  Press 'x' or 'y' to change orientation.`;
});
// place carrier ship
pOneContainer.addEventListener('mouseover', (event) => {
  //make a function here

  // fucntion (event, flagvariable, how many spots, noGoXArray, notOverY,)/////////////////////////////////////
  if (!event.target.matches('.boardLocation')) return;
  if (!placeCarrierTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  const spotOne = event.target;
  if (placeXorY === 'x') {
    const spotTwo = document.querySelector(`[data-number='${spot + 1}']`);
    const spotThree = document.querySelector(`[data-number='${spot + 2}']`);
    const spotFour = document.querySelector(`[data-number='${spot + 3}']`);
    const spotFive = document.querySelector(`[data-number='${spot + 4}']`);
    if ([7, 8, 9, 10, 17, 18, 19, 20,
      27, 28, 29, 30, 37, 38, 39,
      40, 47, 48, 49, 50, 57, 58,
      59, 60, 67, 68, 69, 70, 77,
      78, 79, 80, 87, 88, 89, 90,
      97, 98, 99, 100].includes(spot)) {
      spotOne.classList = 'boardLocation shipLocationBad';
      spotTwo.classList = 'boardLocation shipLocationBad';
      spotThree.classList = 'boardLocation shipLocationBad';
      spotFour.classList = 'boardLocation shipLocationBad';
      spotFive.classList = 'boardLocation shipLocationBad';
    } else {
      spotOne.classList = 'boardLocation shipLocationCheck';
      spotTwo.classList = 'boardLocation shipLocationCheck';
      spotThree.classList = 'boardLocation shipLocationCheck';
      spotFour.classList = 'boardLocation shipLocationCheck';
      spotFive.classList = 'boardLocation shipLocationCheck';
    }
  }
  if (placeXorY === 'y') {
    const spotTwo = document.querySelector(`[data-number='${spot + 10}']`);
    const spotThree = document.querySelector(`[data-number='${spot + 20}']`);
    const spotFour = document.querySelector(`[data-number='${spot + 30}']`);
    const spotFive = document.querySelector(`[data-number='${spot + 40}']`);
    if (spot > 60) {
      spotOne.classList = 'boardLocation shipLocationBad';
      spotTwo.classList = 'boardLocation shipLocationBad';
      spotThree.classList = 'boardLocation shipLocationBad';
      spotFour.classList = 'boardLocation shipLocationBad';
      spotFive.classList = 'boardLocation shipLocationBad';
    } else {
      spotOne.classList = 'boardLocation shipLocationCheck';
      spotTwo.classList = 'boardLocation shipLocationCheck';
      spotThree.classList = 'boardLocation shipLocationCheck';
      spotFour.classList = 'boardLocation shipLocationCheck';
      spotFive.classList = 'boardLocation shipLocationCheck';
    }
  }
});
pOneContainer.addEventListener('mouseout', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (gameLoopTime) return;
  const allSpots = pOneContainer.querySelectorAll('.boardLocation');
  allSpots.forEach((spot) => {
    spot.classList.remove('shipLocationCheck');
    spot.classList.remove('shipLocationBad');
  });
});
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeCarrierTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (placeXorY === 'x') {
    if ([7, 8, 9, 10, 17, 18, 19, 20,
      27, 28, 29, 30, 37, 38, 39,
      40, 47, 48, 49, 50, 57, 58,
      59, 60, 67, 68, 69, 70, 77,
      78, 79, 80, 87, 88, 89, 90,
      97, 98, 99, 100].includes(spot)) return;
    const pOneCarrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 5, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneCarrier);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeCarrierTime = false;
    placeBattleshipTime = true;
  } else {
    if (spot > 61) return;
    const pOneCarrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 5, spot);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.push(pOneCarrier);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    placeCarrierTime = false;
    placeBattleshipTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Battleship. 
  Press 'x' or 'y' to change orientation.`;
});

// game loop
const playerPlay = pTwoContainer.addEventListener('click', (event) => {
  console.log(gameLoopTime);
  if (!gameLoopTime) return;
  if (!event.target.matches('.boardLocation')) return;
  if (!_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.myTurn) return;
  if (event.target.matches('.hitAttack')) return;
  if (event.target.matches('.missedAttack')) return;
  _index__WEBPACK_IMPORTED_MODULE_0__.playerOne.attack(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo, event.target.dataset.number);
  renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo);
  _index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo.shipsOnThisBoard.forEach((ship) => {
    ship.didItSink();
  });
  if (_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo.checkAllSunk()) {
    alert('player one wins!');
  } else {
    _index__WEBPACK_IMPORTED_MODULE_0__.playerTwo.randomAttack(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.forEach((ship) => {
      ship.didItSink();
    });
    if (_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.checkAllSunk()) {
      renderShips(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo);
      alert('player two wins!');
    } else {
      _index__WEBPACK_IMPORTED_MODULE_0__.playerOne.myTurn = true;
    }
  }
});
const changeXorY = window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    window.location.reload();
  }
  if (e.key === 'y') {
    placeXorY = 'y';
  }
  if (e.key === 'x') {
    placeXorY = 'x';
  }
});




/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");


const Gameboard = (player) => {
  const shipsOnThisBoard = [];
  const missedAttacks = [];
  const hitSpaces = [];

  const placeShip = (XorY, length, position) => (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(XorY, length, position);

  const receiveAttack = (position) => {
    let hits = false;
    for (let i = 0; i < shipsOnThisBoard.length; i += 1) {
      if (shipsOnThisBoard[i].spots.includes(parseInt(position, 10))) {
        shipsOnThisBoard[i].hit(position);
        hitSpaces.push(position);
        hits = true;
      }
    }
    if (hits === false) {
      missedAttacks.push(position);
    }
  };

  const checkAllSunk = () => {
    let areSunk = 0;
    for (let i = 0; i < shipsOnThisBoard.length; i += 1) {
      if (shipsOnThisBoard[i].sunk === true) {
        areSunk += 1;
      }
    }
    if (areSunk === shipsOnThisBoard.length) {
      return true;
    }
    return false;
  };

  return {
    player, placeShip, receiveAttack, shipsOnThisBoard, missedAttacks, hitSpaces, checkAllSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");


const Player = (name) => {
  const myTurn = true;
  const playersMoves = [];
  const attack = (gameboard, position) => {
    gameboard.receiveAttack(position);
    playersMoves.push(position);
    obj.myTurn = false;
  };
  const randomNum = function randomNum(start, end) {
    return Math.floor(Math.random() * end) + start;
  };
  const randomAttack = (gameboard) => {
    let filledSpace = true;
    while (filledSpace) {
      const number = randomNum(1, 100);
      if (!playersMoves.includes(number)) {
        attack(gameboard, number);
        playersMoves.push(number);
        filledSpace = false;
      }
    }
  };
  const compareShipLocation = function compareShipLocation(gameboard, startingPoint) {
    let conflict = false;
    gameboard.shipsOnThisBoard.forEach((ship) => {
      if (ship.spots.includes(startingPoint)) {
        conflict = true;
      }
    });
    if (conflict) return true;
    return false;
  };
  const checkShipIntersection = function
  checkShipIntersection(XorY, startingPoint, shiplength, gameboard) {
    let spot = startingPoint;
    let inc = 1;
    if (XorY === 'y') { inc = 10; }
    for (let i = 0; i < shiplength; i += 1) {
      if (compareShipLocation(gameboard, spot)) return true;
      spot += inc;
    }
    return false;
  };
  const randomShip = function randomShip(forbidSpotsX, forbidGraterY, shipLength, gameboard) {
    let shipPlaced = false;
    let XorY = 'x';
    let number;
    if (randomNum(1, 2) === 2) XorY = 'y';
    if (XorY === 'x') {
      while (!shipPlaced) {
        number = randomNum(1, 100);
        if (!forbidSpotsX.includes(number)) {
          if (!checkShipIntersection(XorY, number, shipLength, gameboard)) {
            shipPlaced = true;
          }
        }
      }
    } else {
      while (!shipPlaced) {
        number = randomNum(1, 100);
        if (number < forbidGraterY) {
          if (!checkShipIntersection(XorY, number, shipLength, gameboard)) {
            shipPlaced = true;
          }
        }
      }
    }
    const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(XorY, shipLength, number);
    return ship;
  };
  const randomComputerShips = function randomComputerShips(player, gameboard) {
    const carrierForbidSpotsX = [7, 8, 9, 10, 17, 18, 19, 20,
      27, 28, 29, 30, 37, 38, 39, 40, 47, 48, 49, 50, 57, 58, 59, 60, 67, 68, 69, 70, 77,
      78, 79, 80, 87, 88, 89, 90, 97, 98, 99, 100];
    const battleForbidSpotsX = [8, 9, 10, 18, 19, 20, 28, 29, 30, 38, 39,
      40, 48, 49, 50, 58, 59, 60, 68, 69, 70, 78, 79, 80, 88, 89, 90, 98, 99, 100];
    const destroyerForbidSpotsX = [9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70,
      79, 80, 89, 90, 99, 100];
    const subForbidSpotsX = destroyerForbidSpotsX;
    const patrolForbidSpotsX = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const carrierForbidGraterY = 61;
    const battleForbidGraterY = 71;
    const destroyerForbidGraterY = 81;
    const subForbidGraterY = 81;
    const patrolForbidGraterY = 91;
    const pTwoCarrier = player.randomShip(
      carrierForbidSpotsX, carrierForbidGraterY, 5, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoCarrier);
    const pTwoBattleship = player.randomShip(
      battleForbidSpotsX, battleForbidGraterY, 4, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoBattleship);
    const pTwoDestroyer = player.randomShip(
      destroyerForbidSpotsX, destroyerForbidGraterY, 3, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoDestroyer);
    const pTwoSub = player.randomShip(subForbidSpotsX, subForbidGraterY, 3, gameboard);
    gameboard.shipsOnThisBoard.push(pTwoSub);
    const pTwoPatrol = player.randomShip(
      patrolForbidSpotsX, patrolForbidGraterY, 2, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoPatrol);
  };

  const obj = {
    name,
    myTurn,
    attack,
    randomAttack,
    randomNum,
    randomShip,
    randomComputerShips,
    checkShipIntersection,
  };
  return obj;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (XorY, long, position) => {
  const spots = [];
  const hits = [];
  const shipLength = long;
  const sunk = false;
  let addSpot = position;
  if (XorY === 'x') {
    for (let i = 0; i < shipLength; i += 1) {
      spots.push(addSpot);
      addSpot += 1;
    }
  } else {
    for (let i = 0; i < shipLength; i += 1) {
      spots.push(addSpot);
      addSpot += 10;
    }
  }
  const hit = (number) => {
    hits.push(number);
  };
  const didItSink = () => {
    if (hits.length === shipLength) {
      obj.sunk = true;
    }
  };

  const obj = {
    XorY,
    shipLength,
    position,
    spots,
    hits,
    hit,
    didItSink,
    sunk,
  };
  return obj;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4SHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3ZDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5nYW1lQ29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wT25lQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDEyMSwgMjIzKTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcbi5wbGF5ZXJOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucFR3b0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTYsIDE5MSwgMTI0KTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcbi5ib2FyZENvbnRhaW5lciB7XFxuIGhlaWdodDogMjMwcHg7IFxcbiB3aWR0aDogMjMwcHg7XFxuIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiBtYXJnaW46IGF1dG87XFxuIG1hcmdpbi10b3A6IDIwcHg7XFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG4gZ2FwOiAwcHg7XFxufVxcbi5ib2FyZExvY2F0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hpcExvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uc2hpcExvY2F0aW9uQ2hlY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG4uc2hpcExvY2F0aW9uQmFkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLm1pc3NlZEF0dGFjayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4uaGl0QXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgLyogLmJvYXJkQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgIH0gKi9cXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNERBQTREO0VBQzVELFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7QUFDZjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsdUNBQXVDO0NBQ3ZDLFFBQVE7QUFDVDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7TUFHSTtDQUNMXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucE9uZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxMjEsIDIyMyk7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG4ucGxheWVyTmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnBUd29Db250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE2LCAxOTEsIDEyNCk7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG4uYm9hcmRDb250YWluZXIge1xcbiBoZWlnaHQ6IDIzMHB4OyBcXG4gd2lkdGg6IDIzMHB4O1xcbiBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gbWFyZ2luOiBhdXRvO1xcbiBtYXJnaW4tdG9wOiAyMHB4O1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxuIGdhcDogMHB4O1xcbn1cXG4uYm9hcmRMb2NhdGlvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNoaXBMb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnNoaXBMb2NhdGlvbkNoZWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuLnNoaXBMb2NhdGlvbkJhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5taXNzZWRBdHRhY2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmhpdEF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC8qIC5ib2FyZENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICB9ICovXFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL21vZHVsZXMvUGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL0dhbWVib2FyZCc7XG5pbXBvcnQgeyBtYWtlQm9hcmQsIHJlbmRlckJvYXJkIH0gZnJvbSAnLi9tb2R1bGVzL0RPTWludGVyYWN0aW9uJztcblxuLy8gY29uc3QgRE9NID0gRE9NaW50ZXJhY3Rpb24oKTtcbmNvbnN0IHBsYXllck9uZSA9IFBsYXllcignaHVtYW4nKTtcbmNvbnN0IHBsYXllclR3byA9IFBsYXllcignY29tcHV0ZXInKTtcbmNvbnN0IGdhbWVib2FyZE9uZSA9IEdhbWVib2FyZCgxKTtcbmNvbnN0IGdhbWVib2FyZFR3byA9IEdhbWVib2FyZCgyKTtcbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIG1ha2VCb2FyZCgxKTtcbiAgbWFrZUJvYXJkKDIpO1xuICBwbGF5ZXJUd28ucmFuZG9tQ29tcHV0ZXJTaGlwcyhwbGF5ZXJUd28sIGdhbWVib2FyZFR3byk7XG4gIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gIHJlbmRlckJvYXJkKGdhbWVib2FyZFR3byk7XG59O1xuR2FtZSgpO1xuXG5leHBvcnQge1xuICBnYW1lYm9hcmRPbmUsIGdhbWVib2FyZFR3bywgcGxheWVyT25lLCBwbGF5ZXJUd28sXG59O1xuIiwiaW1wb3J0IHtcbiAgZ2FtZWJvYXJkT25lLCBnYW1lYm9hcmRUd28sIHBsYXllck9uZSwgcGxheWVyVHdvLFxufSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jb25zdCBwT25lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBPbmVDb250YWluZXInKTtcbmNvbnN0IHBUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucFR3b0NvbnRhaW5lcicpO1xuY29uc3QgcGxheWVyTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWVzc2FnZXMnKTtcblxubGV0IGdhbWVMb29wVGltZSA9IGZhbHNlO1xubGV0IHBsYWNlQ2FycmllclRpbWUgPSB0cnVlO1xubGV0IHBsYWNlQmF0dGxlc2hpcFRpbWUgPSBmYWxzZTtcbmxldCBwbGFjZURlc3Ryb3llclRpbWUgPSBmYWxzZTtcbmxldCBwbGFjZVN1Ym1hcmluZVRpbWUgPSBmYWxzZTtcbmxldCBwbGFjZVBhdHJvbFRpbWUgPSBmYWxzZTtcbmxldCBwbGFjZVhvclkgPSAneCc7XG5jb25zdCBjYXJyaWVyRm9yYmlkU3BvdHNYID0gWzcsIDgsIDksIDEwLCAxNywgMTgsIDE5LCAyMCxcbiAgMjcsIDI4LCAyOSwgMzAsIDM3LCAzOCwgMzksIDQwLCA0NywgNDgsIDQ5LCA1MCwgNTcsIDU4LCA1OSwgNjAsIDY3LCA2OCwgNjksIDcwLCA3NyxcbiAgNzgsIDc5LCA4MCwgODcsIDg4LCA4OSwgOTAsIDk3LCA5OCwgOTksIDEwMF07XG5jb25zdCBiYXR0bGVGb3JiaWRTcG90c1ggPSBbOCwgOSwgMTAsIDE4LCAxOSwgMjAsIDI4LCAyOSwgMzAsIDM4LCAzOSxcbiAgNDAsIDQ4LCA0OSwgNTAsIDU4LCA1OSwgNjAsIDY4LCA2OSwgNzAsIDc4LCA3OSwgODAsIDg4LCA4OSwgOTAsIDk4LCA5OSwgMTAwXTtcbmNvbnN0IGRlc3Ryb3llckZvcmJpZFNwb3RzWCA9IFs5LCAxMCwgMTksIDIwLCAyOSwgMzAsIDM5LCA0MCwgNDksIDUwLCA1OSwgNjAsIDY5LCA3MCxcbiAgNzksIDgwLCA4OSwgOTAsIDk5LCAxMDBdO1xuY29uc3Qgc3ViRm9yYmlkU3BvdHNYID0gZGVzdHJveWVyRm9yYmlkU3BvdHNYO1xuY29uc3QgcGF0cm9sRm9yYmlkU3BvdHNYID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTAsIDEwMF07XG5jb25zdCBjYXJyaWVyRm9yYmlkR3JhdGVyWSA9IDYxO1xuY29uc3QgYmF0dGxlRm9yYmlkR3JhdGVyWSA9IDcxO1xuY29uc3QgZGVzdHJveWVyRm9yYmlkR3JhdGVyWSA9IDgxO1xuY29uc3Qgc3ViRm9yYmlkR3JhdGVyWSA9IDgxO1xuY29uc3QgcGF0cm9sRm9yYmlkR3JhdGVyWSA9IDkxO1xuY29uc3Qgc3RhcnRHYW1lTG9vcCA9ICgpID0+IHtcbiAgZ2FtZUxvb3BUaW1lID0gdHJ1ZTtcbn07XG5jb25zdCBtYWtlQm9hcmQgPSAoT25lT3JUd28pID0+IHtcbiAgbGV0IGdhbWVib2FyZExvY2F0aW9uID0gcE9uZUNvbnRhaW5lcjtcbiAgaWYgKE9uZU9yVHdvID09PSAyKSB7XG4gICAgZ2FtZWJvYXJkTG9jYXRpb24gPSBwVHdvQ29udGFpbmVyO1xuICB9XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ29udGFpbmVyJyk7XG4gIGdhbWVib2FyZExvY2F0aW9uLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkgKz0gMSkge1xuICAgIGNvbnN0IGJvYXJkTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkTG9jYXRpb24nKTtcbiAgICBib2FyZExvY2F0aW9uLmRhdGFzZXQubnVtYmVyID0gaTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZExvY2F0aW9uKTtcbiAgfVxufTtcbmNvbnN0IHJlbmRlclNoaXBzID0gKGdhbWVib2FyZCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gcE9uZUNvbnRhaW5lcjtcbiAgaWYgKGdhbWVib2FyZC5wbGF5ZXIgPT09IDIpIHtcbiAgICBjb250YWluZXIgPSBwVHdvQ29udGFpbmVyO1xuICB9XG4gIGdhbWVib2FyZC5zaGlwc09uVGhpc0JvYXJkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLnNwb3RzLmZvckVhY2goKHNwb3QpID0+IHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdH0nXWApO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbic7XG4gICAgfSk7XG4gIH0pO1xufTtcbmNvbnN0IHJlbmRlckhpdHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBwT25lQ29udGFpbmVyO1xuICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMikge1xuICAgIGNvbnRhaW5lciA9IHBUd29Db250YWluZXI7XG4gIH1cbiAgaWYgKGdhbWVib2FyZC5oaXRTcGFjZXMgPT09IFtdKSByZXR1cm47XG4gIGdhbWVib2FyZC5oaXRTcGFjZXMuZm9yRWFjaCgoaGl0KSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW51bWJlcj0nJHtoaXR9J11gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uIGhpdEF0dGFjayc7XG4gIH0pO1xufTtcbmNvbnN0IHJlbmRlck1pc3NlcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IHBPbmVDb250YWluZXI7XG4gIGlmIChnYW1lYm9hcmQucGxheWVyID09PSAyKSB7XG4gICAgY29udGFpbmVyID0gcFR3b0NvbnRhaW5lcjtcbiAgfVxuICBpZiAoZ2FtZWJvYXJkLm1pc3NlZEF0dGFja3MgPT09IFtdKSByZXR1cm47XG4gIGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmZvckVhY2goKG1pc3MpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtYmVyPScke21pc3N9J11gKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gbWlzc2VkQXR0YWNrJztcbiAgfSk7XG59O1xuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGlmIChnYW1lYm9hcmQucGxheWVyID09PSAxKSB7XG4gICAgcmVuZGVyU2hpcHMoZ2FtZWJvYXJkKTtcbiAgfVxuICByZW5kZXJIaXRzKGdhbWVib2FyZCk7XG4gIHJlbmRlck1pc3NlcyhnYW1lYm9hcmQpO1xufTtcblxuLy8gcGxhY2UgcGF0cm9sXG5wT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5ib2FyZExvY2F0aW9uJykpIHJldHVybjtcbiAgaWYgKCFwbGFjZVBhdHJvbFRpbWUpIHJldHVybjtcbiAgY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICBpZiAocGxheWVyT25lLmNoZWNrU2hpcEludGVyc2VjdGlvbihwbGFjZVhvclksIHNwb3QsIDIsIGdhbWVib2FyZE9uZSkpIHJldHVybjtcbiAgaWYgKHBsYWNlWG9yWSA9PT0gJ3gnKSB7XG4gICAgaWYgKFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwLCAxMDBdLmluY2x1ZGVzKHNwb3QpKSByZXR1cm47XG4gICAgY29uc3QgcE9uZVBhdHJvbCA9IFNoaXAoJ3gnLCAyLCBzcG90KTtcbiAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVQYXRyb2wpO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgcGxhY2VQYXRyb2xUaW1lID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNwb3QgPiA5MSkgcmV0dXJuO1xuICAgIGNvbnN0IHBPbmVQYXRyb2wgPSBTaGlwKCd5JywgMiwgc3BvdCk7XG4gICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lUGF0cm9sKTtcbiAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgIHBsYWNlUGF0cm9sVGltZSA9IGZhbHNlO1xuICB9XG4gIHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9ICdQbGF5ZXIgT25lIE1ha2VzIHRoZSBmaXJzdCBtb3ZlISc7XG4gIHN0YXJ0R2FtZUxvb3AoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7IHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9ICcnOyB9LCA1MDAwKTtcbn0pO1xuLy8gcGxhY2UgU3VibWFyaW5lXG5wT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5ib2FyZExvY2F0aW9uJykpIHJldHVybjtcbiAgaWYgKCFwbGFjZVN1Ym1hcmluZVRpbWUpIHJldHVybjtcbiAgY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICBpZiAocGxheWVyT25lLmNoZWNrU2hpcEludGVyc2VjdGlvbihwbGFjZVhvclksIHNwb3QsIDMsIGdhbWVib2FyZE9uZSkpIHJldHVybjtcbiAgaWYgKHBsYWNlWG9yWSA9PT0gJ3gnKSB7XG4gICAgaWYgKFs5LCAxMCwgMTksIDIwLFxuICAgICAgMjksIDMwLCAzOSxcbiAgICAgIDQwLCA0OSwgNTAsXG4gICAgICA1OSwgNjAsIDY5LCA3MCxcbiAgICAgIDc5LCA4MCwgODksIDkwLFxuICAgICAgOTksIDEwMF0uaW5jbHVkZXMoc3BvdCkpIHJldHVybjtcbiAgICBjb25zdCBwT25lU3ViID0gU2hpcCgneCcsIDMsIHNwb3QpO1xuICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZVN1Yik7XG4gICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICBwbGFjZVN1Ym1hcmluZVRpbWUgPSBmYWxzZTtcbiAgICBwbGFjZVBhdHJvbFRpbWUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlmIChzcG90ID4gODEpIHJldHVybjtcbiAgICBjb25zdCBwT25lU3ViID0gU2hpcCgneScsIDMsIHNwb3QpO1xuICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZVN1Yik7XG4gICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICBwbGFjZVN1Ym1hcmluZVRpbWUgPSBmYWxzZTtcbiAgICBwbGFjZVBhdHJvbFRpbWUgPSB0cnVlO1xuICB9XG4gIHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9IGBDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBQYXRyb2wgU2hpcC4gXG4gIFByZXNzICd4JyBvciAneScgdG8gY2hhbmdlIG9yaWVudGF0aW9uLmA7XG59KTtcbi8vIHBsYWNlIGRlc3Ryb3llclxucE9uZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYm9hcmRMb2NhdGlvbicpKSByZXR1cm47XG4gIGlmICghcGxhY2VEZXN0cm95ZXJUaW1lKSByZXR1cm47XG4gIGNvbnN0IHNwb3QgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5udW1iZXIsIDEwKTtcbiAgaWYgKHBsYXllck9uZS5jaGVja1NoaXBJbnRlcnNlY3Rpb24ocGxhY2VYb3JZLCBzcG90LCAzLCBnYW1lYm9hcmRPbmUpKSByZXR1cm47XG4gIGlmIChwbGFjZVhvclkgPT09ICd4Jykge1xuICAgIGlmIChbOSwgMTAsIDE5LCAyMCxcbiAgICAgIDI5LCAzMCwgMzksXG4gICAgICA0MCwgNDksIDUwLFxuICAgICAgNTksIDYwLCA2OSwgNzAsXG4gICAgICA3OSwgODAsIDg5LCA5MCxcbiAgICAgIDk5LCAxMDBdLmluY2x1ZGVzKHNwb3QpKSByZXR1cm47XG4gICAgY29uc3QgcE9uZURlc3Ryb3llciA9IFNoaXAoJ3gnLCAzLCBzcG90KTtcbiAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVEZXN0cm95ZXIpO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgcGxhY2VEZXN0cm95ZXJUaW1lID0gZmFsc2U7XG4gICAgcGxhY2VTdWJtYXJpbmVUaW1lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3BvdCA+IDgxKSByZXR1cm47XG4gICAgY29uc3QgcE9uZURlc3Ryb3llciA9IFNoaXAoJ3knLCAzLCBzcG90KTtcbiAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVEZXN0cm95ZXIpO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgcGxhY2VEZXN0cm95ZXJUaW1lID0gZmFsc2U7XG4gICAgcGxhY2VTdWJtYXJpbmVUaW1lID0gdHJ1ZTtcbiAgfVxuICBwbGF5ZXJNZXNzYWdlcy5pbm5lckhUTUwgPSBgQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgU3VibWFyaW5lLiBcbiAgUHJlc3MgJ3gnIG9yICd5JyB0byBjaGFuZ2Ugb3JpZW50YXRpb24uYDtcbn0pO1xuLy8gcGxhY2UgYmF0dGxlc2hpcFxucE9uZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYm9hcmRMb2NhdGlvbicpKSByZXR1cm47XG4gIGlmICghcGxhY2VCYXR0bGVzaGlwVGltZSkgcmV0dXJuO1xuICBjb25zdCBzcG90ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQubnVtYmVyLCAxMCk7XG4gIGlmIChwbGF5ZXJPbmUuY2hlY2tTaGlwSW50ZXJzZWN0aW9uKHBsYWNlWG9yWSwgc3BvdCwgNCwgZ2FtZWJvYXJkT25lKSkgcmV0dXJuO1xuICBpZiAocGxhY2VYb3JZID09PSAneCcpIHtcbiAgICBpZiAoWzgsIDksIDEwLCAxOCwgMTksIDIwLFxuICAgICAgMjgsIDI5LCAzMCwgMzgsIDM5LFxuICAgICAgNDAsIDQ4LCA0OSwgNTAsIDU4LFxuICAgICAgNTksIDYwLCA2OCwgNjksIDcwLFxuICAgICAgNzgsIDc5LCA4MCwgODgsIDg5LCA5MCxcbiAgICAgIDk4LCA5OSwgMTAwXS5pbmNsdWRlcyhzcG90KSkgcmV0dXJuO1xuICAgIGNvbnN0IHBPbmVCYXR0bGVzaGlwID0gU2hpcCgneCcsIDQsIHNwb3QpO1xuICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZUJhdHRsZXNoaXApO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IGZhbHNlO1xuICAgIHBsYWNlRGVzdHJveWVyVGltZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNwb3QgPiA3MSkgcmV0dXJuO1xuICAgIGNvbnN0IHBPbmVCYXR0bGVzaGlwID0gU2hpcCgneScsIDQsIHNwb3QpO1xuICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZUJhdHRsZXNoaXApO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IGZhbHNlO1xuICAgIHBsYWNlRGVzdHJveWVyVGltZSA9IHRydWU7XG4gIH1cbiAgcGxheWVyTWVzc2FnZXMuaW5uZXJIVE1MID0gYENob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIERlc3Ryb3llci4gXG4gIFByZXNzICd4JyBvciAneScgdG8gY2hhbmdlIG9yaWVudGF0aW9uLmA7XG59KTtcbi8vIHBsYWNlIGNhcnJpZXIgc2hpcFxucE9uZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IHtcbiAgLy9tYWtlIGEgZnVuY3Rpb24gaGVyZVxuXG4gIC8vIGZ1Y250aW9uIChldmVudCwgZmxhZ3ZhcmlhYmxlLCBob3cgbWFueSBzcG90cywgbm9Hb1hBcnJheSwgbm90T3ZlclksKS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICBpZiAoIXBsYWNlQ2FycmllclRpbWUpIHJldHVybjtcbiAgY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICBjb25zdCBzcG90T25lID0gZXZlbnQudGFyZ2V0O1xuICBpZiAocGxhY2VYb3JZID09PSAneCcpIHtcbiAgICBjb25zdCBzcG90VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtYmVyPScke3Nwb3QgKyAxfSddYCk7XG4gICAgY29uc3Qgc3BvdFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtYmVyPScke3Nwb3QgKyAyfSddYCk7XG4gICAgY29uc3Qgc3BvdEZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdCArIDN9J11gKTtcbiAgICBjb25zdCBzcG90Rml2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW51bWJlcj0nJHtzcG90ICsgNH0nXWApO1xuICAgIGlmIChbNywgOCwgOSwgMTAsIDE3LCAxOCwgMTksIDIwLFxuICAgICAgMjcsIDI4LCAyOSwgMzAsIDM3LCAzOCwgMzksXG4gICAgICA0MCwgNDcsIDQ4LCA0OSwgNTAsIDU3LCA1OCxcbiAgICAgIDU5LCA2MCwgNjcsIDY4LCA2OSwgNzAsIDc3LFxuICAgICAgNzgsIDc5LCA4MCwgODcsIDg4LCA4OSwgOTAsXG4gICAgICA5NywgOTgsIDk5LCAxMDBdLmluY2x1ZGVzKHNwb3QpKSB7XG4gICAgICBzcG90T25lLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkJhZCc7XG4gICAgICBzcG90VHdvLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkJhZCc7XG4gICAgICBzcG90VGhyZWUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uQmFkJztcbiAgICAgIHNwb3RGb3VyLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkJhZCc7XG4gICAgICBzcG90Rml2ZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25CYWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcG90T25lLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkNoZWNrJztcbiAgICAgIHNwb3RUd28uY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uQ2hlY2snO1xuICAgICAgc3BvdFRocmVlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkNoZWNrJztcbiAgICAgIHNwb3RGb3VyLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkNoZWNrJztcbiAgICAgIHNwb3RGaXZlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkNoZWNrJztcbiAgICB9XG4gIH1cbiAgaWYgKHBsYWNlWG9yWSA9PT0gJ3knKSB7XG4gICAgY29uc3Qgc3BvdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW51bWJlcj0nJHtzcG90ICsgMTB9J11gKTtcbiAgICBjb25zdCBzcG90VGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdCArIDIwfSddYCk7XG4gICAgY29uc3Qgc3BvdEZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdCArIDMwfSddYCk7XG4gICAgY29uc3Qgc3BvdEZpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdCArIDQwfSddYCk7XG4gICAgaWYgKHNwb3QgPiA2MCkge1xuICAgICAgc3BvdE9uZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25CYWQnO1xuICAgICAgc3BvdFR3by5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25CYWQnO1xuICAgICAgc3BvdFRocmVlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkJhZCc7XG4gICAgICBzcG90Rm91ci5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25CYWQnO1xuICAgICAgc3BvdEZpdmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uQmFkJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3BvdE9uZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25DaGVjayc7XG4gICAgICBzcG90VHdvLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbkNoZWNrJztcbiAgICAgIHNwb3RUaHJlZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25DaGVjayc7XG4gICAgICBzcG90Rm91ci5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25DaGVjayc7XG4gICAgICBzcG90Rml2ZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBzaGlwTG9jYXRpb25DaGVjayc7XG4gICAgfVxuICB9XG59KTtcbnBPbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICBpZiAoZ2FtZUxvb3BUaW1lKSByZXR1cm47XG4gIGNvbnN0IGFsbFNwb3RzID0gcE9uZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmRMb2NhdGlvbicpO1xuICBhbGxTcG90cy5mb3JFYWNoKChzcG90KSA9PiB7XG4gICAgc3BvdC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwTG9jYXRpb25DaGVjaycpO1xuICAgIHNwb3QuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcExvY2F0aW9uQmFkJyk7XG4gIH0pO1xufSk7XG5wT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5ib2FyZExvY2F0aW9uJykpIHJldHVybjtcbiAgaWYgKCFwbGFjZUNhcnJpZXJUaW1lKSByZXR1cm47XG4gIGNvbnN0IHNwb3QgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5udW1iZXIsIDEwKTtcbiAgaWYgKHBsYWNlWG9yWSA9PT0gJ3gnKSB7XG4gICAgaWYgKFs3LCA4LCA5LCAxMCwgMTcsIDE4LCAxOSwgMjAsXG4gICAgICAyNywgMjgsIDI5LCAzMCwgMzcsIDM4LCAzOSxcbiAgICAgIDQwLCA0NywgNDgsIDQ5LCA1MCwgNTcsIDU4LFxuICAgICAgNTksIDYwLCA2NywgNjgsIDY5LCA3MCwgNzcsXG4gICAgICA3OCwgNzksIDgwLCA4NywgODgsIDg5LCA5MCxcbiAgICAgIDk3LCA5OCwgOTksIDEwMF0uaW5jbHVkZXMoc3BvdCkpIHJldHVybjtcbiAgICBjb25zdCBwT25lQ2FycmllciA9IFNoaXAoJ3gnLCA1LCBzcG90KTtcbiAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVDYXJyaWVyKTtcbiAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgIHBsYWNlQ2FycmllclRpbWUgPSBmYWxzZTtcbiAgICBwbGFjZUJhdHRsZXNoaXBUaW1lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3BvdCA+IDYxKSByZXR1cm47XG4gICAgY29uc3QgcE9uZUNhcnJpZXIgPSBTaGlwKCd5JywgNSwgc3BvdCk7XG4gICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lQ2Fycmllcik7XG4gICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICBwbGFjZUNhcnJpZXJUaW1lID0gZmFsc2U7XG4gICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IHRydWU7XG4gIH1cbiAgcGxheWVyTWVzc2FnZXMuaW5uZXJIVE1MID0gYENob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIEJhdHRsZXNoaXAuIFxuICBQcmVzcyAneCcgb3IgJ3knIHRvIGNoYW5nZSBvcmllbnRhdGlvbi5gO1xufSk7XG5cbi8vIGdhbWUgbG9vcFxuY29uc3QgcGxheWVyUGxheSA9IHBUd29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coZ2FtZUxvb3BUaW1lKTtcbiAgaWYgKCFnYW1lTG9vcFRpbWUpIHJldHVybjtcbiAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICBpZiAoIXBsYXllck9uZS5teVR1cm4pIHJldHVybjtcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuaGl0QXR0YWNrJykpIHJldHVybjtcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcubWlzc2VkQXR0YWNrJykpIHJldHVybjtcbiAgcGxheWVyT25lLmF0dGFjayhnYW1lYm9hcmRUd28sIGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlcik7XG4gIHJlbmRlckJvYXJkKGdhbWVib2FyZFR3byk7XG4gIGdhbWVib2FyZFR3by5zaGlwc09uVGhpc0JvYXJkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmRpZEl0U2luaygpO1xuICB9KTtcbiAgaWYgKGdhbWVib2FyZFR3by5jaGVja0FsbFN1bmsoKSkge1xuICAgIGFsZXJ0KCdwbGF5ZXIgb25lIHdpbnMhJyk7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyVHdvLnJhbmRvbUF0dGFjayhnYW1lYm9hcmRPbmUpO1xuICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5kaWRJdFNpbmsoKTtcbiAgICB9KTtcbiAgICBpZiAoZ2FtZWJvYXJkT25lLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgICByZW5kZXJTaGlwcyhnYW1lYm9hcmRUd28pO1xuICAgICAgYWxlcnQoJ3BsYXllciB0d28gd2lucyEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyT25lLm15VHVybiA9IHRydWU7XG4gICAgfVxuICB9XG59KTtcbmNvbnN0IGNoYW5nZVhvclkgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gJ3knKSB7XG4gICAgcGxhY2VYb3JZID0gJ3knO1xuICB9XG4gIGlmIChlLmtleSA9PT0gJ3gnKSB7XG4gICAgcGxhY2VYb3JZID0gJ3gnO1xuICB9XG59KTtcblxuZXhwb3J0IHtcbiAgbWFrZUJvYXJkLFxuICByZW5kZXJCb2FyZCxcbiAgcGxheWVyUGxheSxcbiAgY2hhbmdlWG9yWSxcbiAgc3RhcnRHYW1lTG9vcCxcbn07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IHNoaXBzT25UaGlzQm9hcmQgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBoaXRTcGFjZXMgPSBbXTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoWG9yWSwgbGVuZ3RoLCBwb3NpdGlvbikgPT4gU2hpcChYb3JZLCBsZW5ndGgsIHBvc2l0aW9uKTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgbGV0IGhpdHMgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzT25UaGlzQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwc09uVGhpc0JvYXJkW2ldLnNwb3RzLmluY2x1ZGVzKHBhcnNlSW50KHBvc2l0aW9uLCAxMCkpKSB7XG4gICAgICAgIHNoaXBzT25UaGlzQm9hcmRbaV0uaGl0KHBvc2l0aW9uKTtcbiAgICAgICAgaGl0U3BhY2VzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBoaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpdHMgPT09IGZhbHNlKSB7XG4gICAgICBtaXNzZWRBdHRhY2tzLnB1c2gocG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGFyZVN1bmsgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNPblRoaXNCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNoaXBzT25UaGlzQm9hcmRbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICBhcmVTdW5rICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmVTdW5rID09PSBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYXllciwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBzaGlwc09uVGhpc0JvYXJkLCBtaXNzZWRBdHRhY2tzLCBoaXRTcGFjZXMsIGNoZWNrQWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IG15VHVybiA9IHRydWU7XG4gIGNvbnN0IHBsYXllcnNNb3ZlcyA9IFtdO1xuICBjb25zdCBhdHRhY2sgPSAoZ2FtZWJvYXJkLCBwb3NpdGlvbikgPT4ge1xuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcbiAgICBwbGF5ZXJzTW92ZXMucHVzaChwb3NpdGlvbik7XG4gICAgb2JqLm15VHVybiA9IGZhbHNlO1xuICB9O1xuICBjb25zdCByYW5kb21OdW0gPSBmdW5jdGlvbiByYW5kb21OdW0oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmQpICsgc3RhcnQ7XG4gIH07XG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgZmlsbGVkU3BhY2UgPSB0cnVlO1xuICAgIHdoaWxlIChmaWxsZWRTcGFjZSkge1xuICAgICAgY29uc3QgbnVtYmVyID0gcmFuZG9tTnVtKDEsIDEwMCk7XG4gICAgICBpZiAoIXBsYXllcnNNb3Zlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG4gICAgICAgIGF0dGFjayhnYW1lYm9hcmQsIG51bWJlcik7XG4gICAgICAgIHBsYXllcnNNb3Zlcy5wdXNoKG51bWJlcik7XG4gICAgICAgIGZpbGxlZFNwYWNlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBjb21wYXJlU2hpcExvY2F0aW9uID0gZnVuY3Rpb24gY29tcGFyZVNoaXBMb2NhdGlvbihnYW1lYm9hcmQsIHN0YXJ0aW5nUG9pbnQpIHtcbiAgICBsZXQgY29uZmxpY3QgPSBmYWxzZTtcbiAgICBnYW1lYm9hcmQuc2hpcHNPblRoaXNCb2FyZC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zcG90cy5pbmNsdWRlcyhzdGFydGluZ1BvaW50KSkge1xuICAgICAgICBjb25mbGljdCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvbmZsaWN0KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGNoZWNrU2hpcEludGVyc2VjdGlvbiA9IGZ1bmN0aW9uXG4gIGNoZWNrU2hpcEludGVyc2VjdGlvbihYb3JZLCBzdGFydGluZ1BvaW50LCBzaGlwbGVuZ3RoLCBnYW1lYm9hcmQpIHtcbiAgICBsZXQgc3BvdCA9IHN0YXJ0aW5nUG9pbnQ7XG4gICAgbGV0IGluYyA9IDE7XG4gICAgaWYgKFhvclkgPT09ICd5JykgeyBpbmMgPSAxMDsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVNoaXBMb2NhdGlvbihnYW1lYm9hcmQsIHNwb3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHNwb3QgKz0gaW5jO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IHJhbmRvbVNoaXAgPSBmdW5jdGlvbiByYW5kb21TaGlwKGZvcmJpZFNwb3RzWCwgZm9yYmlkR3JhdGVyWSwgc2hpcExlbmd0aCwgZ2FtZWJvYXJkKSB7XG4gICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICBsZXQgWG9yWSA9ICd4JztcbiAgICBsZXQgbnVtYmVyO1xuICAgIGlmIChyYW5kb21OdW0oMSwgMikgPT09IDIpIFhvclkgPSAneSc7XG4gICAgaWYgKFhvclkgPT09ICd4Jykge1xuICAgICAgd2hpbGUgKCFzaGlwUGxhY2VkKSB7XG4gICAgICAgIG51bWJlciA9IHJhbmRvbU51bSgxLCAxMDApO1xuICAgICAgICBpZiAoIWZvcmJpZFNwb3RzWC5pbmNsdWRlcyhudW1iZXIpKSB7XG4gICAgICAgICAgaWYgKCFjaGVja1NoaXBJbnRlcnNlY3Rpb24oWG9yWSwgbnVtYmVyLCBzaGlwTGVuZ3RoLCBnYW1lYm9hcmQpKSB7XG4gICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKCFzaGlwUGxhY2VkKSB7XG4gICAgICAgIG51bWJlciA9IHJhbmRvbU51bSgxLCAxMDApO1xuICAgICAgICBpZiAobnVtYmVyIDwgZm9yYmlkR3JhdGVyWSkge1xuICAgICAgICAgIGlmICghY2hlY2tTaGlwSW50ZXJzZWN0aW9uKFhvclksIG51bWJlciwgc2hpcExlbmd0aCwgZ2FtZWJvYXJkKSkge1xuICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKFhvclksIHNoaXBMZW5ndGgsIG51bWJlcik7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH07XG4gIGNvbnN0IHJhbmRvbUNvbXB1dGVyU2hpcHMgPSBmdW5jdGlvbiByYW5kb21Db21wdXRlclNoaXBzKHBsYXllciwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY2FycmllckZvcmJpZFNwb3RzWCA9IFs3LCA4LCA5LCAxMCwgMTcsIDE4LCAxOSwgMjAsXG4gICAgICAyNywgMjgsIDI5LCAzMCwgMzcsIDM4LCAzOSwgNDAsIDQ3LCA0OCwgNDksIDUwLCA1NywgNTgsIDU5LCA2MCwgNjcsIDY4LCA2OSwgNzAsIDc3LFxuICAgICAgNzgsIDc5LCA4MCwgODcsIDg4LCA4OSwgOTAsIDk3LCA5OCwgOTksIDEwMF07XG4gICAgY29uc3QgYmF0dGxlRm9yYmlkU3BvdHNYID0gWzgsIDksIDEwLCAxOCwgMTksIDIwLCAyOCwgMjksIDMwLCAzOCwgMzksXG4gICAgICA0MCwgNDgsIDQ5LCA1MCwgNTgsIDU5LCA2MCwgNjgsIDY5LCA3MCwgNzgsIDc5LCA4MCwgODgsIDg5LCA5MCwgOTgsIDk5LCAxMDBdO1xuICAgIGNvbnN0IGRlc3Ryb3llckZvcmJpZFNwb3RzWCA9IFs5LCAxMCwgMTksIDIwLCAyOSwgMzAsIDM5LCA0MCwgNDksIDUwLCA1OSwgNjAsIDY5LCA3MCxcbiAgICAgIDc5LCA4MCwgODksIDkwLCA5OSwgMTAwXTtcbiAgICBjb25zdCBzdWJGb3JiaWRTcG90c1ggPSBkZXN0cm95ZXJGb3JiaWRTcG90c1g7XG4gICAgY29uc3QgcGF0cm9sRm9yYmlkU3BvdHNYID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MCwgOTAsIDEwMF07XG4gICAgY29uc3QgY2FycmllckZvcmJpZEdyYXRlclkgPSA2MTtcbiAgICBjb25zdCBiYXR0bGVGb3JiaWRHcmF0ZXJZID0gNzE7XG4gICAgY29uc3QgZGVzdHJveWVyRm9yYmlkR3JhdGVyWSA9IDgxO1xuICAgIGNvbnN0IHN1YkZvcmJpZEdyYXRlclkgPSA4MTtcbiAgICBjb25zdCBwYXRyb2xGb3JiaWRHcmF0ZXJZID0gOTE7XG4gICAgY29uc3QgcFR3b0NhcnJpZXIgPSBwbGF5ZXIucmFuZG9tU2hpcChcbiAgICAgIGNhcnJpZXJGb3JiaWRTcG90c1gsIGNhcnJpZXJGb3JiaWRHcmF0ZXJZLCA1LCBnYW1lYm9hcmQsXG4gICAgKTtcbiAgICBnYW1lYm9hcmQuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBUd29DYXJyaWVyKTtcbiAgICBjb25zdCBwVHdvQmF0dGxlc2hpcCA9IHBsYXllci5yYW5kb21TaGlwKFxuICAgICAgYmF0dGxlRm9yYmlkU3BvdHNYLCBiYXR0bGVGb3JiaWRHcmF0ZXJZLCA0LCBnYW1lYm9hcmQsXG4gICAgKTtcbiAgICBnYW1lYm9hcmQuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBUd29CYXR0bGVzaGlwKTtcbiAgICBjb25zdCBwVHdvRGVzdHJveWVyID0gcGxheWVyLnJhbmRvbVNoaXAoXG4gICAgICBkZXN0cm95ZXJGb3JiaWRTcG90c1gsIGRlc3Ryb3llckZvcmJpZEdyYXRlclksIDMsIGdhbWVib2FyZCxcbiAgICApO1xuICAgIGdhbWVib2FyZC5zaGlwc09uVGhpc0JvYXJkLnB1c2gocFR3b0Rlc3Ryb3llcik7XG4gICAgY29uc3QgcFR3b1N1YiA9IHBsYXllci5yYW5kb21TaGlwKHN1YkZvcmJpZFNwb3RzWCwgc3ViRm9yYmlkR3JhdGVyWSwgMywgZ2FtZWJvYXJkKTtcbiAgICBnYW1lYm9hcmQuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBUd29TdWIpO1xuICAgIGNvbnN0IHBUd29QYXRyb2wgPSBwbGF5ZXIucmFuZG9tU2hpcChcbiAgICAgIHBhdHJvbEZvcmJpZFNwb3RzWCwgcGF0cm9sRm9yYmlkR3JhdGVyWSwgMiwgZ2FtZWJvYXJkLFxuICAgICk7XG4gICAgZ2FtZWJvYXJkLnNoaXBzT25UaGlzQm9hcmQucHVzaChwVHdvUGF0cm9sKTtcbiAgfTtcblxuICBjb25zdCBvYmogPSB7XG4gICAgbmFtZSxcbiAgICBteVR1cm4sXG4gICAgYXR0YWNrLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgICByYW5kb21OdW0sXG4gICAgcmFuZG9tU2hpcCxcbiAgICByYW5kb21Db21wdXRlclNoaXBzLFxuICAgIGNoZWNrU2hpcEludGVyc2VjdGlvbixcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAoWG9yWSwgbG9uZywgcG9zaXRpb24pID0+IHtcbiAgY29uc3Qgc3BvdHMgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbG9uZztcbiAgY29uc3Qgc3VuayA9IGZhbHNlO1xuICBsZXQgYWRkU3BvdCA9IHBvc2l0aW9uO1xuICBpZiAoWG9yWSA9PT0gJ3gnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNwb3RzLnB1c2goYWRkU3BvdCk7XG4gICAgICBhZGRTcG90ICs9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzcG90cy5wdXNoKGFkZFNwb3QpO1xuICAgICAgYWRkU3BvdCArPSAxMDtcbiAgICB9XG4gIH1cbiAgY29uc3QgaGl0ID0gKG51bWJlcikgPT4ge1xuICAgIGhpdHMucHVzaChudW1iZXIpO1xuICB9O1xuICBjb25zdCBkaWRJdFNpbmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSBzaGlwTGVuZ3RoKSB7XG4gICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9iaiA9IHtcbiAgICBYb3JZLFxuICAgIHNoaXBMZW5ndGgsXG4gICAgcG9zaXRpb24sXG4gICAgc3BvdHMsXG4gICAgaGl0cyxcbiAgICBoaXQsXG4gICAgZGlkSXRTaW5rLFxuICAgIHN1bmssXG4gIH07XG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9