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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: blue;\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  color: aliceblue;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: blueviolet;\n  height: 50%;\n}\n.pTwoContainer {\n  background-color:green;\n  height: 50%;\n\n}\n.boardContainer {\n height: 80%;\n width: 80%;\n border: 1px solid black;\n margin: auto;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,4DAA4D;EAC5D,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,4BAA4B;EAC5B,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,WAAW;;AAEb;AACA;CACC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,YAAY;CACZ,aAAa;CACb,uCAAuC;CACvC,QAAQ;AACT;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: blue;\n  text-align: center;\n  width: 100%;\n  height: 10%;\n  color: aliceblue;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: blueviolet;\n  height: 50%;\n}\n.pTwoContainer {\n  background-color:green;\n  height: 50%;\n\n}\n.boardContainer {\n height: 80%;\n width: 80%;\n border: 1px solid black;\n margin: auto;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Ship */ "./src/modules/Ship.js");
/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Player */ "./src/modules/Player.js");
/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOMinteraction */ "./src/modules/DOMinteraction.js");






const DOM = (0,_modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__.default)();
const playerOne = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_2__.default)('human');
const playerTwo = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_2__.default)('computer');
const gameboardOne = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__.default)(1);
const gameboardTwo = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__.default)(2);
const Game = () => {
  const pOneCarrier = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 5, 95);
  const pOneBattleship = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 4, 21);
  const pOneDestroyer = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 3, 4);
  const pOneSub = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 3, 26);
  const pOnePatrol = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 2, 56);

  gameboardOne.shipsOnThisBoard.push(
    pOneCarrier, pOneBattleship, pOneDestroyer, pOneSub, pOnePatrol,
  );

  const pTwoCarrier = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 5, 95);
  const pTwoBattleship = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 4, 21);
  const pTwoDestroyer = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 3, 4);
  const pTwoSub = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('x', 3, 26);
  const pTwoPatrol = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_1__.default)('y', 2, 56);

  gameboardTwo.shipsOnThisBoard.push(
    pTwoCarrier, pTwoBattleship, pTwoDestroyer, pTwoSub, pTwoPatrol,
  );

  DOM.makeBoard(1);
  DOM.makeBoard(2);

  DOM.renderBoard(gameboardOne);
  DOM.renderBoard(gameboardTwo);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


const pOneContainer = document.querySelector('.pOneContainer');
const pTwoContainer = document.querySelector('.pTwoContainer');
const DOMinteraction = () => {
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
      // square.innerHTML = '.';
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
      // square.innerHTML = '.';
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
  const gameLoop = pTwoContainer.addEventListener('click', (event) => {
    if (!event.target.matches('.boardLocation')) return;
    if (!_index__WEBPACK_IMPORTED_MODULE_0__.playerOne.myTurn) return;
    if (event.target.matches('hitAttack')) return;
    if (event.target.matches('missedAttack')) return;
    _index__WEBPACK_IMPORTED_MODULE_0__.playerOne.attack(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo, event.target.dataset.number);
    renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo);
    _index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo.shipsOnThisBoard.forEach((ship) => {
      ship.didItSink();
    });
    // run did it sink on all ships
    if (_index__WEBPACK_IMPORTED_MODULE_0__.gameboardTwo.checkAllSunk()) {
      alert('player one wins!');
    } else {
      _index__WEBPACK_IMPORTED_MODULE_0__.playerTwo.randomAttack(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
      renderBoard(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne);
      _index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.shipsOnThisBoard.forEach((ship) => {
        ship.didItSink();
      });
      if (_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne.checkAllSunk()) {
        // show enemy ships here
        alert('player two wins!');
      } else {
        _index__WEBPACK_IMPORTED_MODULE_0__.playerOne.myTurn = true;
      }
    }
  });
  return {
    makeBoard,
    renderBoard,
    gameLoop,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMinteraction);


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
const Player = (name) => {
  const myTurn = true;
  const playersMoves = [];
  const attack = (gameboard, position) => {
    gameboard.receiveAttack(position);
    playersMoves.push(position);
    obj.myTurn = false;
  };
  const randomAttack = (gameboard) => {
    let filledSpace = true;
    while (filledSpace) {
      const randomNum = Math.floor(Math.random() * 100);
      if (!playersMoves.includes(randomNum)) {
        attack(gameboard, randomNum);
        playersMoves.push(randomNum);
        filledSpace = false;
      }
    }
  };
  const obj = {
    name,
    myTurn,
    attack,
    randomAttack,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTWludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucE9uZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcbi5wVHdvQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XFxuICBoZWlnaHQ6IDUwJTtcXG5cXG59XFxuLmJvYXJkQ29udGFpbmVyIHtcXG4gaGVpZ2h0OiA4MCU7XFxuIHdpZHRoOiA4MCU7XFxuIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiBtYXJnaW46IGF1dG87XFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG4gZ2FwOiAwcHg7XFxufVxcbi5ib2FyZExvY2F0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hpcExvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ubWlzc2VkQXR0YWNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbi5oaXRBdHRhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDREQUE0RDtFQUM1RCxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVzs7QUFFYjtBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGFBQWE7Q0FDYix1Q0FBdUM7Q0FDdkMsUUFBUTtBQUNUO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAlO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuLmdhbWVDb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBPbmVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4ucFR3b0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxufVxcbi5ib2FyZENvbnRhaW5lciB7XFxuIGhlaWdodDogODAlO1xcbiB3aWR0aDogODAlO1xcbiBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gbWFyZ2luOiBhdXRvO1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxuIGdhcDogMHB4O1xcbn1cXG4uYm9hcmRMb2NhdGlvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNoaXBMb2NhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLm1pc3NlZEF0dGFjayB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4uaGl0QXR0YWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9TaGlwJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL1BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbW9kdWxlcy9HYW1lYm9hcmQnO1xuaW1wb3J0IERPTWludGVyYWN0aW9uIGZyb20gJy4vbW9kdWxlcy9ET01pbnRlcmFjdGlvbic7XG5cbmNvbnN0IERPTSA9IERPTWludGVyYWN0aW9uKCk7XG5jb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoJ2h1bWFuJyk7XG5jb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoJ2NvbXB1dGVyJyk7XG5jb25zdCBnYW1lYm9hcmRPbmUgPSBHYW1lYm9hcmQoMSk7XG5jb25zdCBnYW1lYm9hcmRUd28gPSBHYW1lYm9hcmQoMik7XG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwT25lQ2FycmllciA9IFNoaXAoJ3gnLCA1LCA5NSk7XG4gIGNvbnN0IHBPbmVCYXR0bGVzaGlwID0gU2hpcCgneScsIDQsIDIxKTtcbiAgY29uc3QgcE9uZURlc3Ryb3llciA9IFNoaXAoJ3knLCAzLCA0KTtcbiAgY29uc3QgcE9uZVN1YiA9IFNoaXAoJ3gnLCAzLCAyNik7XG4gIGNvbnN0IHBPbmVQYXRyb2wgPSBTaGlwKCd5JywgMiwgNTYpO1xuXG4gIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2goXG4gICAgcE9uZUNhcnJpZXIsIHBPbmVCYXR0bGVzaGlwLCBwT25lRGVzdHJveWVyLCBwT25lU3ViLCBwT25lUGF0cm9sLFxuICApO1xuXG4gIGNvbnN0IHBUd29DYXJyaWVyID0gU2hpcCgneCcsIDUsIDk1KTtcbiAgY29uc3QgcFR3b0JhdHRsZXNoaXAgPSBTaGlwKCd5JywgNCwgMjEpO1xuICBjb25zdCBwVHdvRGVzdHJveWVyID0gU2hpcCgneScsIDMsIDQpO1xuICBjb25zdCBwVHdvU3ViID0gU2hpcCgneCcsIDMsIDI2KTtcbiAgY29uc3QgcFR3b1BhdHJvbCA9IFNoaXAoJ3knLCAyLCA1Nik7XG5cbiAgZ2FtZWJvYXJkVHdvLnNoaXBzT25UaGlzQm9hcmQucHVzaChcbiAgICBwVHdvQ2FycmllciwgcFR3b0JhdHRsZXNoaXAsIHBUd29EZXN0cm95ZXIsIHBUd29TdWIsIHBUd29QYXRyb2wsXG4gICk7XG5cbiAgRE9NLm1ha2VCb2FyZCgxKTtcbiAgRE9NLm1ha2VCb2FyZCgyKTtcblxuICBET00ucmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgRE9NLnJlbmRlckJvYXJkKGdhbWVib2FyZFR3byk7XG59O1xuXG5HYW1lKCk7XG5cbmV4cG9ydCB7XG4gIGdhbWVib2FyZE9uZSwgZ2FtZWJvYXJkVHdvLCBwbGF5ZXJPbmUsIHBsYXllclR3byBcbn07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmRPbmUsIGdhbWVib2FyZFR3bywgcGxheWVyT25lLCBwbGF5ZXJUd28gfSBmcm9tICcuLi9pbmRleCc7XG5cbmNvbnN0IHBPbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucE9uZUNvbnRhaW5lcicpO1xuY29uc3QgcFR3b0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wVHdvQ29udGFpbmVyJyk7XG5jb25zdCBET01pbnRlcmFjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbWFrZUJvYXJkID0gKE9uZU9yVHdvKSA9PiB7XG4gICAgbGV0IGdhbWVib2FyZExvY2F0aW9uID0gcE9uZUNvbnRhaW5lcjtcbiAgICBpZiAoT25lT3JUd28gPT09IDIpIHtcbiAgICAgIGdhbWVib2FyZExvY2F0aW9uID0gcFR3b0NvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZENvbnRhaW5lcicpO1xuICAgIGdhbWVib2FyZExvY2F0aW9uLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBib2FyZExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib2FyZExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkTG9jYXRpb24nKTtcbiAgICAgIGJvYXJkTG9jYXRpb24uZGF0YXNldC5udW1iZXIgPSBpO1xuICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRMb2NhdGlvbik7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJTaGlwcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gcE9uZUNvbnRhaW5lcjtcbiAgICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMikge1xuICAgICAgY29udGFpbmVyID0gcFR3b0NvbnRhaW5lcjtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLnNoaXBzT25UaGlzQm9hcmQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5zcG90cy5mb3JFYWNoKChzcG90KSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7c3BvdH0nXWApO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW5kZXJIaXRzID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBwT25lQ29udGFpbmVyO1xuICAgIGlmIChnYW1lYm9hcmQucGxheWVyID09PSAyKSB7XG4gICAgICBjb250YWluZXIgPSBwVHdvQ29udGFpbmVyO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLmhpdFNwYWNlcyA9PT0gW10pIHJldHVybjtcbiAgICBnYW1lYm9hcmQuaGl0U3BhY2VzLmZvckVhY2goKGhpdCkgPT4ge1xuICAgICAgY29uc3Qgc3F1YXJlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW51bWJlcj0nJHtoaXR9J11gKTtcbiAgICAgIC8vIHNxdWFyZS5pbm5lckhUTUwgPSAnLic7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uIGhpdEF0dGFjayc7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlbmRlck1pc3NlcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gcE9uZUNvbnRhaW5lcjtcbiAgICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMikge1xuICAgICAgY29udGFpbmVyID0gcFR3b0NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzID09PSBbXSkgcmV0dXJuO1xuICAgIGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmZvckVhY2goKG1pc3MpID0+IHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7bWlzc30nXWApO1xuICAgICAgLy8gc3F1YXJlLmlubmVySFRNTCA9ICcuJztcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QgPSAnYm9hcmRMb2NhdGlvbiBtaXNzZWRBdHRhY2snO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZW5kZXJCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMSkge1xuICAgICAgcmVuZGVyU2hpcHMoZ2FtZWJvYXJkKTtcbiAgICB9XG4gICAgcmVuZGVySGl0cyhnYW1lYm9hcmQpO1xuICAgIHJlbmRlck1pc3NlcyhnYW1lYm9hcmQpO1xuICB9O1xuICBjb25zdCBnYW1lTG9vcCA9IHBUd29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYm9hcmRMb2NhdGlvbicpKSByZXR1cm47XG4gICAgaWYgKCFwbGF5ZXJPbmUubXlUdXJuKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCdoaXRBdHRhY2snKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnbWlzc2VkQXR0YWNrJykpIHJldHVybjtcbiAgICBwbGF5ZXJPbmUuYXR0YWNrKGdhbWVib2FyZFR3bywgZXZlbnQudGFyZ2V0LmRhdGFzZXQubnVtYmVyKTtcbiAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRUd28pO1xuICAgIGdhbWVib2FyZFR3by5zaGlwc09uVGhpc0JvYXJkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuZGlkSXRTaW5rKCk7XG4gICAgfSk7XG4gICAgLy8gcnVuIGRpZCBpdCBzaW5rIG9uIGFsbCBzaGlwc1xuICAgIGlmIChnYW1lYm9hcmRUd28uY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KCdwbGF5ZXIgb25lIHdpbnMhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclR3by5yYW5kb21BdHRhY2soZ2FtZWJvYXJkT25lKTtcbiAgICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuZGlkSXRTaW5rKCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChnYW1lYm9hcmRPbmUuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgICAgLy8gc2hvdyBlbmVteSBzaGlwcyBoZXJlXG4gICAgICAgIGFsZXJ0KCdwbGF5ZXIgdHdvIHdpbnMhJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXJPbmUubXlUdXJuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG1ha2VCb2FyZCxcbiAgICByZW5kZXJCb2FyZCxcbiAgICBnYW1lTG9vcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTWludGVyYWN0aW9uO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzaGlwc09uVGhpc0JvYXJkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0U3BhY2VzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFhvclksIGxlbmd0aCwgcG9zaXRpb24pID0+IFNoaXAoWG9yWSwgbGVuZ3RoLCBwb3NpdGlvbik7XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NpdGlvbikgPT4ge1xuICAgIGxldCBoaXRzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcHNPblRoaXNCb2FyZFtpXS5zcG90cy5pbmNsdWRlcyhwYXJzZUludChwb3NpdGlvbiwgMTApKSkge1xuICAgICAgICBzaGlwc09uVGhpc0JvYXJkW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgIGhpdFNwYWNlcy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaGl0cyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRzID09PSBmYWxzZSkge1xuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhcmVTdW5rID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzT25UaGlzQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwc09uVGhpc0JvYXJkW2ldLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgYXJlU3VuayArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJlU3VuayA9PT0gc2hpcHNPblRoaXNCb2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcHNPblRoaXNCb2FyZCwgbWlzc2VkQXR0YWNrcywgaGl0U3BhY2VzLCBjaGVja0FsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBteVR1cm4gPSB0cnVlO1xuICBjb25zdCBwbGF5ZXJzTW92ZXMgPSBbXTtcbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgcG9zaXRpb24pID0+IHtcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgcGxheWVyc01vdmVzLnB1c2gocG9zaXRpb24pO1xuICAgIG9iai5teVR1cm4gPSBmYWxzZTtcbiAgfTtcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGxldCBmaWxsZWRTcGFjZSA9IHRydWU7XG4gICAgd2hpbGUgKGZpbGxlZFNwYWNlKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgaWYgKCFwbGF5ZXJzTW92ZXMuaW5jbHVkZXMocmFuZG9tTnVtKSkge1xuICAgICAgICBhdHRhY2soZ2FtZWJvYXJkLCByYW5kb21OdW0pO1xuICAgICAgICBwbGF5ZXJzTW92ZXMucHVzaChyYW5kb21OdW0pO1xuICAgICAgICBmaWxsZWRTcGFjZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgb2JqID0ge1xuICAgIG5hbWUsXG4gICAgbXlUdXJuLFxuICAgIGF0dGFjayxcbiAgICByYW5kb21BdHRhY2ssXG4gIH07XG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKFhvclksIGxvbmcsIHBvc2l0aW9uKSA9PiB7XG4gIGNvbnN0IHNwb3RzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxvbmc7XG4gIGNvbnN0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGFkZFNwb3QgPSBwb3NpdGlvbjtcbiAgaWYgKFhvclkgPT09ICd4Jykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzcG90cy5wdXNoKGFkZFNwb3QpO1xuICAgICAgYWRkU3BvdCArPSAxO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3BvdHMucHVzaChhZGRTcG90KTtcbiAgICAgIGFkZFNwb3QgKz0gMTA7XG4gICAgfVxuICB9XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBoaXRzLnB1c2gobnVtYmVyKTtcbiAgfTtcbiAgY29uc3QgZGlkSXRTaW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvYmogPSB7XG4gICAgWG9yWSxcbiAgICBzaGlwTGVuZ3RoLFxuICAgIHBvc2l0aW9uLFxuICAgIHNwb3RzLFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIGRpZEl0U2luayxcbiAgICBzdW5rLFxuICB9O1xuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==