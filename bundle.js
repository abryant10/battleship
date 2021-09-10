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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: rgb(212, 212, 212);\n  text-align: center;\n  width: 100%;\n  height: 40px;\n  color: black;\n  font-size: 35px;\n  font-weight: bold;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: rgb(140, 121, 223);\n  height: 350px;\n}\n.playerName {\n  font-size: 20px;\n  font-weight: bold;\n}\n.pTwoContainer {\n  background-color:rgb(216, 191, 124);\n  height: 350px;\n}\n.boardContainer {\n height: 230px; \n width: 230px;\n border: 1px solid black;\n margin: auto;\n margin-top: 20px;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}\n\n@media only screen and (min-width: 800px) {\n  /* .boardContainer {\n    height: 330px;\n    width: 300px;\n   } */\n }", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,4DAA4D;EAC5D,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;AACX;AACA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,mCAAmC;EACnC,aAAa;AACf;AACA;CACC,aAAa;CACb,YAAY;CACZ,uBAAuB;CACvB,YAAY;CACZ,gBAAgB;CAChB,aAAa;CACb,uCAAuC;CACvC,QAAQ;AACT;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE;;;MAGI;CACL","sourcesContent":["html {\n  width: 100%;\n  height: 100%;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\nheader {\n  background-color: rgb(212, 212, 212);\n  text-align: center;\n  width: 100%;\n  height: 40px;\n  color: black;\n  font-size: 35px;\n  font-weight: bold;\n}\n.gameContainer {\n  height: 90%;\n  width: 100%;\n}\n.pOneContainer {\n  background-color: rgb(140, 121, 223);\n  height: 350px;\n}\n.playerName {\n  font-size: 20px;\n  font-weight: bold;\n}\n.pTwoContainer {\n  background-color:rgb(216, 191, 124);\n  height: 350px;\n}\n.boardContainer {\n height: 230px; \n width: 230px;\n border: 1px solid black;\n margin: auto;\n margin-top: 20px;\n display: grid;\n grid-template-columns: repeat(10, auto);\n gap: 0px;\n}\n.boardLocation {\n  border: 1px solid black;\n  cursor: pointer;\n}\n.shipLocation {\n  background-color: black;\n}\n.missedAttack {\n  color: black;\n  background-color: grey;\n}\n.hitAttack {\n  background-color: red;\n}\n\n@media only screen and (min-width: 800px) {\n  /* .boardContainer {\n    height: 330px;\n    width: 300px;\n   } */\n }"],"sourceRoot":""}]);
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
  // const pOneCarrier = Ship('x', 5, 95);
  // const pOneBattleship = Ship('y', 4, 21);
  // const pOneDestroyer = Ship('y', 3, 4);
  // const pOneSub = Ship('x', 3, 26);
  // const pOnePatrol = Ship('y', 2, 56);

  // gameboardOne.shipsOnThisBoard.push(
  //   pOneCarrier, pOneBattleship, pOneDestroyer, pOneSub, pOnePatrol,
  // );

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

  DOM.startGameLoop();
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
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");



const pOneContainer = document.querySelector('.pOneContainer');
const pTwoContainer = document.querySelector('.pTwoContainer');
const playerMessages = document.querySelector('.playerMessages');
const DOMinteraction = () => {
  let gameLoopTime = false;
  let placeCarrierTime = true;
  let placeBattleshipTime = false;
  let placeDestroyerTime = false;
  let placeSubmarineTime = false;
  let placePatrolTime = false;
  let placeXorY = 'x';

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
    // if (gameboard.player === 1) {
      renderShips(gameboard);
    // }
    renderHits(gameboard);
    renderMisses(gameboard);
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
  const checkShipIntersection = function checkShipIntersection(XorY, startingPoint, shiplength) {
    let spot = startingPoint;
    let inc = 1;
    if (XorY === 'y') { inc = 10; }
    for (let i = 0; i < shiplength; i += 1) {
      if (compareShipLocation(_index__WEBPACK_IMPORTED_MODULE_0__.gameboardOne, spot)) return true;
      spot += inc;
    }
    return false;
  };
  // place patrol
  pOneContainer.addEventListener('click', (event) => {
    if (!event.target.matches('.boardLocation')) return;
    if (!placePatrolTime) return;
    const spot = parseInt(event.target.dataset.number, 10);
    if (checkShipIntersection(placeXorY, spot, 2)) return;
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
    setTimeout(() => { playerMessages.innerHTML = ''; }, 5000);
  });
  // place Submarine
  pOneContainer.addEventListener('click', (event) => {
    if (!event.target.matches('.boardLocation')) return;
    if (!placeSubmarineTime) return;
    const spot = parseInt(event.target.dataset.number, 10);
    if (checkShipIntersection(placeXorY, spot, 3)) return;
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
    if (checkShipIntersection(placeXorY, spot, 3)) return;
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
    if (checkShipIntersection(placeXorY, spot, 4)) return;
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

  return {
    makeBoard,
    renderBoard,
    playerPlay,
    changeXorY,
    placeXorY,
    startGameLoop,
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
      const randomNum = Math.floor(Math.random() * 100) + 1;
      if (!playersMoves.includes(randomNum)) {
        attack(gameboard, randomNum);
        playersMoves.push(randomNum);
        filledSpace = false;
      }
    }
  };
  const randomComputerShips = function randomComputerShips () {
    // if (!event.target.matches('.boardLocation')) return;
    // if (!placeBattleshipTime) return;
    // const spot = parseInt(event.target.dataset.number, 10);
    // if (checkShipIntersection(placeXorY, spot, 4)) return;
    // if (placeXorY === 'x') {
    //   if ([8, 9, 10, 18, 19, 20,
    //     28, 29, 30, 38, 39,
    //     40, 48, 49, 50, 58,
    //     59, 60, 68, 69, 70,
    //     78, 79, 80, 88, 89, 90,
    //     98, 99, 100].includes(spot)) return;
    //   const pOneBattleship = Ship('x', 4, spot);
    //   gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    //   renderBoard(gameboardOne);
    //   placeBattleshipTime = false;
    //   placeDestroyerTime = true;
    // } else {
    //   if (spot > 71) return;
    //   const pOneBattleship = Ship('y', 4, spot);
    //   gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    //   renderBoard(gameboardOne);
    //   placeBattleshipTime = false;
    //   placeDestroyerTime = true;
    // }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5nYW1lQ29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wT25lQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDAsIDEyMSwgMjIzKTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcbi5wbGF5ZXJOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucFR3b0NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTYsIDE5MSwgMTI0KTtcXG4gIGhlaWdodDogMzUwcHg7XFxufVxcbi5ib2FyZENvbnRhaW5lciB7XFxuIGhlaWdodDogMjMwcHg7IFxcbiB3aWR0aDogMjMwcHg7XFxuIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiBtYXJnaW46IGF1dG87XFxuIG1hcmdpbi10b3A6IDIwcHg7XFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG4gZ2FwOiAwcHg7XFxufVxcbi5ib2FyZExvY2F0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2hpcExvY2F0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ubWlzc2VkQXR0YWNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbi5oaXRBdHRhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAvKiAuYm9hcmRDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgfSAqL1xcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0REFBNEQ7RUFDNUQsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYix1Q0FBdUM7Q0FDdkMsUUFBUTtBQUNUO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTs7O01BR0k7Q0FDTFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmdhbWVDb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBPbmVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMTIxLCAyMjMpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuLnBsYXllck5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wVHdvQ29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIxNiwgMTkxLCAxMjQpO1xcbiAgaGVpZ2h0OiAzNTBweDtcXG59XFxuLmJvYXJkQ29udGFpbmVyIHtcXG4gaGVpZ2h0OiAyMzBweDsgXFxuIHdpZHRoOiAyMzBweDtcXG4gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuIG1hcmdpbjogYXV0bztcXG4gbWFyZ2luLXRvcDogMjBweDtcXG4gZGlzcGxheTogZ3JpZDtcXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGF1dG8pO1xcbiBnYXA6IDBweDtcXG59XFxuLmJvYXJkTG9jYXRpb24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zaGlwTG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5taXNzZWRBdHRhY2sge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmhpdEF0dGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC8qIC5ib2FyZENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICB9ICovXFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9tb2R1bGVzL1NoaXAnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL21vZHVsZXMvUGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL0dhbWVib2FyZCc7XG5pbXBvcnQgRE9NaW50ZXJhY3Rpb24gZnJvbSAnLi9tb2R1bGVzL0RPTWludGVyYWN0aW9uJztcblxuY29uc3QgRE9NID0gRE9NaW50ZXJhY3Rpb24oKTtcbmNvbnN0IHBsYXllck9uZSA9IFBsYXllcignaHVtYW4nKTtcbmNvbnN0IHBsYXllclR3byA9IFBsYXllcignY29tcHV0ZXInKTtcbmNvbnN0IGdhbWVib2FyZE9uZSA9IEdhbWVib2FyZCgxKTtcbmNvbnN0IGdhbWVib2FyZFR3byA9IEdhbWVib2FyZCgyKTtcbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHBPbmVDYXJyaWVyID0gU2hpcCgneCcsIDUsIDk1KTtcbiAgLy8gY29uc3QgcE9uZUJhdHRsZXNoaXAgPSBTaGlwKCd5JywgNCwgMjEpO1xuICAvLyBjb25zdCBwT25lRGVzdHJveWVyID0gU2hpcCgneScsIDMsIDQpO1xuICAvLyBjb25zdCBwT25lU3ViID0gU2hpcCgneCcsIDMsIDI2KTtcbiAgLy8gY29uc3QgcE9uZVBhdHJvbCA9IFNoaXAoJ3knLCAyLCA1Nik7XG5cbiAgLy8gZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChcbiAgLy8gICBwT25lQ2FycmllciwgcE9uZUJhdHRsZXNoaXAsIHBPbmVEZXN0cm95ZXIsIHBPbmVTdWIsIHBPbmVQYXRyb2wsXG4gIC8vICk7XG5cbiAgY29uc3QgcFR3b0NhcnJpZXIgPSBTaGlwKCd4JywgNSwgOTUpO1xuICBjb25zdCBwVHdvQmF0dGxlc2hpcCA9IFNoaXAoJ3knLCA0LCAyMSk7XG4gIGNvbnN0IHBUd29EZXN0cm95ZXIgPSBTaGlwKCd5JywgMywgNCk7XG4gIGNvbnN0IHBUd29TdWIgPSBTaGlwKCd4JywgMywgMjYpO1xuICBjb25zdCBwVHdvUGF0cm9sID0gU2hpcCgneScsIDIsIDU2KTtcblxuICBnYW1lYm9hcmRUd28uc2hpcHNPblRoaXNCb2FyZC5wdXNoKFxuICAgIHBUd29DYXJyaWVyLCBwVHdvQmF0dGxlc2hpcCwgcFR3b0Rlc3Ryb3llciwgcFR3b1N1YiwgcFR3b1BhdHJvbCxcbiAgKTtcblxuICBET00ubWFrZUJvYXJkKDEpO1xuICBET00ubWFrZUJvYXJkKDIpO1xuXG4gIERPTS5yZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICBET00ucmVuZGVyQm9hcmQoZ2FtZWJvYXJkVHdvKTtcblxuICBET00uc3RhcnRHYW1lTG9vcCgpO1xufTtcblxuR2FtZSgpO1xuXG5leHBvcnQge1xuICBnYW1lYm9hcmRPbmUsIGdhbWVib2FyZFR3bywgcGxheWVyT25lLCBwbGF5ZXJUd28sXG59O1xuIiwiaW1wb3J0IHtcbiAgZ2FtZWJvYXJkT25lLCBnYW1lYm9hcmRUd28sIHBsYXllck9uZSwgcGxheWVyVHdvLFxufSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jb25zdCBwT25lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBPbmVDb250YWluZXInKTtcbmNvbnN0IHBUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucFR3b0NvbnRhaW5lcicpO1xuY29uc3QgcGxheWVyTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWVzc2FnZXMnKTtcbmNvbnN0IERPTWludGVyYWN0aW9uID0gKCkgPT4ge1xuICBsZXQgZ2FtZUxvb3BUaW1lID0gZmFsc2U7XG4gIGxldCBwbGFjZUNhcnJpZXJUaW1lID0gdHJ1ZTtcbiAgbGV0IHBsYWNlQmF0dGxlc2hpcFRpbWUgPSBmYWxzZTtcbiAgbGV0IHBsYWNlRGVzdHJveWVyVGltZSA9IGZhbHNlO1xuICBsZXQgcGxhY2VTdWJtYXJpbmVUaW1lID0gZmFsc2U7XG4gIGxldCBwbGFjZVBhdHJvbFRpbWUgPSBmYWxzZTtcbiAgbGV0IHBsYWNlWG9yWSA9ICd4JztcblxuICBjb25zdCBzdGFydEdhbWVMb29wID0gKCkgPT4ge1xuICAgIGdhbWVMb29wVGltZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IG1ha2VCb2FyZCA9IChPbmVPclR3bykgPT4ge1xuICAgIGxldCBnYW1lYm9hcmRMb2NhdGlvbiA9IHBPbmVDb250YWluZXI7XG4gICAgaWYgKE9uZU9yVHdvID09PSAyKSB7XG4gICAgICBnYW1lYm9hcmRMb2NhdGlvbiA9IHBUd29Db250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRDb250YWluZXInKTtcbiAgICBnYW1lYm9hcmRMb2NhdGlvbi5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDE7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYm9hcmRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9hcmRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdib2FyZExvY2F0aW9uJyk7XG4gICAgICBib2FyZExvY2F0aW9uLmRhdGFzZXQubnVtYmVyID0gaTtcbiAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkTG9jYXRpb24pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyU2hpcHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IHBPbmVDb250YWluZXI7XG4gICAgaWYgKGdhbWVib2FyZC5wbGF5ZXIgPT09IDIpIHtcbiAgICAgIGNvbnRhaW5lciA9IHBUd29Db250YWluZXI7XG4gICAgfVxuICAgIGdhbWVib2FyZC5zaGlwc09uVGhpc0JvYXJkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuc3BvdHMuZm9yRWFjaCgoc3BvdCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtbnVtYmVyPScke3Nwb3R9J11gKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIHNoaXBMb2NhdGlvbic7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVuZGVySGl0cyA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gcE9uZUNvbnRhaW5lcjtcbiAgICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMikge1xuICAgICAgY29udGFpbmVyID0gcFR3b0NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZC5oaXRTcGFjZXMgPT09IFtdKSByZXR1cm47XG4gICAgZ2FtZWJvYXJkLmhpdFNwYWNlcy5mb3JFYWNoKChoaXQpID0+IHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7aGl0fSddYCk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ2JvYXJkTG9jYXRpb24gc2hpcExvY2F0aW9uIGhpdEF0dGFjayc7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlbmRlck1pc3NlcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gcE9uZUNvbnRhaW5lcjtcbiAgICBpZiAoZ2FtZWJvYXJkLnBsYXllciA9PT0gMikge1xuICAgICAgY29udGFpbmVyID0gcFR3b0NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzID09PSBbXSkgcmV0dXJuO1xuICAgIGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmZvckVhY2goKG1pc3MpID0+IHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1udW1iZXI9JyR7bWlzc30nXWApO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdCA9ICdib2FyZExvY2F0aW9uIG1pc3NlZEF0dGFjayc7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIC8vIGlmIChnYW1lYm9hcmQucGxheWVyID09PSAxKSB7XG4gICAgICByZW5kZXJTaGlwcyhnYW1lYm9hcmQpO1xuICAgIC8vIH1cbiAgICByZW5kZXJIaXRzKGdhbWVib2FyZCk7XG4gICAgcmVuZGVyTWlzc2VzKGdhbWVib2FyZCk7XG4gIH07XG4gIGNvbnN0IGNvbXBhcmVTaGlwTG9jYXRpb24gPSBmdW5jdGlvbiBjb21wYXJlU2hpcExvY2F0aW9uKGdhbWVib2FyZCwgc3RhcnRpbmdQb2ludCkge1xuICAgIGxldCBjb25mbGljdCA9IGZhbHNlO1xuICAgIGdhbWVib2FyZC5zaGlwc09uVGhpc0JvYXJkLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLnNwb3RzLmluY2x1ZGVzKHN0YXJ0aW5nUG9pbnQpKSB7XG4gICAgICAgIGNvbmZsaWN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY29uZmxpY3QpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tTaGlwSW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gY2hlY2tTaGlwSW50ZXJzZWN0aW9uKFhvclksIHN0YXJ0aW5nUG9pbnQsIHNoaXBsZW5ndGgpIHtcbiAgICBsZXQgc3BvdCA9IHN0YXJ0aW5nUG9pbnQ7XG4gICAgbGV0IGluYyA9IDE7XG4gICAgaWYgKFhvclkgPT09ICd5JykgeyBpbmMgPSAxMDsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVNoaXBMb2NhdGlvbihnYW1lYm9hcmRPbmUsIHNwb3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHNwb3QgKz0gaW5jO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIC8vIHBsYWNlIHBhdHJvbFxuICBwT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICAgIGlmICghcGxhY2VQYXRyb2xUaW1lKSByZXR1cm47XG4gICAgY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICAgIGlmIChjaGVja1NoaXBJbnRlcnNlY3Rpb24ocGxhY2VYb3JZLCBzcG90LCAyKSkgcmV0dXJuO1xuICAgIGlmIChwbGFjZVhvclkgPT09ICd4Jykge1xuICAgICAgaWYgKFsxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwLCAxMDBdLmluY2x1ZGVzKHNwb3QpKSByZXR1cm47XG4gICAgICBjb25zdCBwT25lUGF0cm9sID0gU2hpcCgneCcsIDIsIHNwb3QpO1xuICAgICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lUGF0cm9sKTtcbiAgICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgICBwbGFjZVBhdHJvbFRpbWUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNwb3QgPiA5MSkgcmV0dXJuO1xuICAgICAgY29uc3QgcE9uZVBhdHJvbCA9IFNoaXAoJ3knLCAyLCBzcG90KTtcbiAgICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZVBhdHJvbCk7XG4gICAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgICAgcGxhY2VQYXRyb2xUaW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9ICdQbGF5ZXIgT25lIE1ha2VzIHRoZSBmaXJzdCBtb3ZlISc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9ICcnOyB9LCA1MDAwKTtcbiAgfSk7XG4gIC8vIHBsYWNlIFN1Ym1hcmluZVxuICBwT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICAgIGlmICghcGxhY2VTdWJtYXJpbmVUaW1lKSByZXR1cm47XG4gICAgY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICAgIGlmIChjaGVja1NoaXBJbnRlcnNlY3Rpb24ocGxhY2VYb3JZLCBzcG90LCAzKSkgcmV0dXJuO1xuICAgIGlmIChwbGFjZVhvclkgPT09ICd4Jykge1xuICAgICAgaWYgKFs5LCAxMCwgMTksIDIwLFxuICAgICAgICAyOSwgMzAsIDM5LFxuICAgICAgICA0MCwgNDksIDUwLFxuICAgICAgICA1OSwgNjAsIDY5LCA3MCxcbiAgICAgICAgNzksIDgwLCA4OSwgOTAsXG4gICAgICAgIDk5LCAxMDBdLmluY2x1ZGVzKHNwb3QpKSByZXR1cm47XG4gICAgICBjb25zdCBwT25lU3ViID0gU2hpcCgneCcsIDMsIHNwb3QpO1xuICAgICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lU3ViKTtcbiAgICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgICBwbGFjZVN1Ym1hcmluZVRpbWUgPSBmYWxzZTtcbiAgICAgIHBsYWNlUGF0cm9sVGltZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzcG90ID4gODEpIHJldHVybjtcbiAgICAgIGNvbnN0IHBPbmVTdWIgPSBTaGlwKCd5JywgMywgc3BvdCk7XG4gICAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVTdWIpO1xuICAgICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICAgIHBsYWNlU3VibWFyaW5lVGltZSA9IGZhbHNlO1xuICAgICAgcGxhY2VQYXRyb2xUaW1lID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyTWVzc2FnZXMuaW5uZXJIVE1MID0gYENob29zZSB3aGVyZSB0byBwbGFjZSB5b3VyIFBhdHJvbCBTaGlwLiBcbiAgICBQcmVzcyAneCcgb3IgJ3knIHRvIGNoYW5nZSBvcmllbnRhdGlvbi5gO1xuICB9KTtcbiAgLy8gcGxhY2UgZGVzdHJveWVyXG4gIHBPbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYm9hcmRMb2NhdGlvbicpKSByZXR1cm47XG4gICAgaWYgKCFwbGFjZURlc3Ryb3llclRpbWUpIHJldHVybjtcbiAgICBjb25zdCBzcG90ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQubnVtYmVyLCAxMCk7XG4gICAgaWYgKGNoZWNrU2hpcEludGVyc2VjdGlvbihwbGFjZVhvclksIHNwb3QsIDMpKSByZXR1cm47XG4gICAgaWYgKHBsYWNlWG9yWSA9PT0gJ3gnKSB7XG4gICAgICBpZiAoWzksIDEwLCAxOSwgMjAsXG4gICAgICAgIDI5LCAzMCwgMzksXG4gICAgICAgIDQwLCA0OSwgNTAsXG4gICAgICAgIDU5LCA2MCwgNjksIDcwLFxuICAgICAgICA3OSwgODAsIDg5LCA5MCxcbiAgICAgICAgOTksIDEwMF0uaW5jbHVkZXMoc3BvdCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHBPbmVEZXN0cm95ZXIgPSBTaGlwKCd4JywgMywgc3BvdCk7XG4gICAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVEZXN0cm95ZXIpO1xuICAgICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICAgIHBsYWNlRGVzdHJveWVyVGltZSA9IGZhbHNlO1xuICAgICAgcGxhY2VTdWJtYXJpbmVUaW1lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNwb3QgPiA4MSkgcmV0dXJuO1xuICAgICAgY29uc3QgcE9uZURlc3Ryb3llciA9IFNoaXAoJ3knLCAzLCBzcG90KTtcbiAgICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZURlc3Ryb3llcik7XG4gICAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgICAgcGxhY2VEZXN0cm95ZXJUaW1lID0gZmFsc2U7XG4gICAgICBwbGFjZVN1Ym1hcmluZVRpbWUgPSB0cnVlO1xuICAgIH1cbiAgICBwbGF5ZXJNZXNzYWdlcy5pbm5lckhUTUwgPSBgQ2hvb3NlIHdoZXJlIHRvIHBsYWNlIHlvdXIgU3VibWFyaW5lLiBcbiAgICBQcmVzcyAneCcgb3IgJ3knIHRvIGNoYW5nZSBvcmllbnRhdGlvbi5gO1xuICB9KTtcbiAgLy8gcGxhY2UgYmF0dGxlc2hpcFxuICBwT25lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcygnLmJvYXJkTG9jYXRpb24nKSkgcmV0dXJuO1xuICAgIGlmICghcGxhY2VCYXR0bGVzaGlwVGltZSkgcmV0dXJuO1xuICAgIGNvbnN0IHNwb3QgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5udW1iZXIsIDEwKTtcbiAgICBpZiAoY2hlY2tTaGlwSW50ZXJzZWN0aW9uKHBsYWNlWG9yWSwgc3BvdCwgNCkpIHJldHVybjtcbiAgICBpZiAocGxhY2VYb3JZID09PSAneCcpIHtcbiAgICAgIGlmIChbOCwgOSwgMTAsIDE4LCAxOSwgMjAsXG4gICAgICAgIDI4LCAyOSwgMzAsIDM4LCAzOSxcbiAgICAgICAgNDAsIDQ4LCA0OSwgNTAsIDU4LFxuICAgICAgICA1OSwgNjAsIDY4LCA2OSwgNzAsXG4gICAgICAgIDc4LCA3OSwgODAsIDg4LCA4OSwgOTAsXG4gICAgICAgIDk4LCA5OSwgMTAwXS5pbmNsdWRlcyhzcG90KSkgcmV0dXJuO1xuICAgICAgY29uc3QgcE9uZUJhdHRsZXNoaXAgPSBTaGlwKCd4JywgNCwgc3BvdCk7XG4gICAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKHBPbmVCYXR0bGVzaGlwKTtcbiAgICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgICBwbGFjZUJhdHRsZXNoaXBUaW1lID0gZmFsc2U7XG4gICAgICBwbGFjZURlc3Ryb3llclRpbWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3BvdCA+IDcxKSByZXR1cm47XG4gICAgICBjb25zdCBwT25lQmF0dGxlc2hpcCA9IFNoaXAoJ3knLCA0LCBzcG90KTtcbiAgICAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZUJhdHRsZXNoaXApO1xuICAgICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICAgIHBsYWNlQmF0dGxlc2hpcFRpbWUgPSBmYWxzZTtcbiAgICAgIHBsYWNlRGVzdHJveWVyVGltZSA9IHRydWU7XG4gICAgfVxuICAgIHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9IGBDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBEZXN0cm95ZXIuIFxuICAgIFByZXNzICd4JyBvciAneScgdG8gY2hhbmdlIG9yaWVudGF0aW9uLmA7XG4gIH0pO1xuICAvLyBwbGFjZSBjYXJyaWVyIHNoaXBcbiAgcE9uZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5ib2FyZExvY2F0aW9uJykpIHJldHVybjtcbiAgICBpZiAoIXBsYWNlQ2FycmllclRpbWUpIHJldHVybjtcbiAgICBjb25zdCBzcG90ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQubnVtYmVyLCAxMCk7XG4gICAgaWYgKHBsYWNlWG9yWSA9PT0gJ3gnKSB7XG4gICAgICBpZiAoWzcsIDgsIDksIDEwLCAxNywgMTgsIDE5LCAyMCxcbiAgICAgICAgMjcsIDI4LCAyOSwgMzAsIDM3LCAzOCwgMzksXG4gICAgICAgIDQwLCA0NywgNDgsIDQ5LCA1MCwgNTcsIDU4LFxuICAgICAgICA1OSwgNjAsIDY3LCA2OCwgNjksIDcwLCA3NyxcbiAgICAgICAgNzgsIDc5LCA4MCwgODcsIDg4LCA4OSwgOTAsXG4gICAgICAgIDk3LCA5OCwgOTksIDEwMF0uaW5jbHVkZXMoc3BvdCkpIHJldHVybjtcbiAgICAgIGNvbnN0IHBPbmVDYXJyaWVyID0gU2hpcCgneCcsIDUsIHNwb3QpO1xuICAgICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lQ2Fycmllcik7XG4gICAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgICAgcGxhY2VDYXJyaWVyVGltZSA9IGZhbHNlO1xuICAgICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzcG90ID4gNjEpIHJldHVybjtcbiAgICAgIGNvbnN0IHBPbmVDYXJyaWVyID0gU2hpcCgneScsIDUsIHNwb3QpO1xuICAgICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lQ2Fycmllcik7XG4gICAgICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgICAgcGxhY2VDYXJyaWVyVGltZSA9IGZhbHNlO1xuICAgICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IHRydWU7XG4gICAgfVxuICAgIHBsYXllck1lc3NhZ2VzLmlubmVySFRNTCA9IGBDaG9vc2Ugd2hlcmUgdG8gcGxhY2UgeW91ciBCYXR0bGVzaGlwLiBcbiAgICBQcmVzcyAneCcgb3IgJ3knIHRvIGNoYW5nZSBvcmllbnRhdGlvbi5gO1xuICB9KTtcblxuICAvLyBnYW1lIGxvb3BcbiAgY29uc3QgcGxheWVyUGxheSA9IHBUd29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWdhbWVMb29wVGltZSkgcmV0dXJuO1xuICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5ib2FyZExvY2F0aW9uJykpIHJldHVybjtcbiAgICBpZiAoIXBsYXllck9uZS5teVR1cm4pIHJldHVybjtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5oaXRBdHRhY2snKSkgcmV0dXJuO1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLm1pc3NlZEF0dGFjaycpKSByZXR1cm47XG4gICAgcGxheWVyT25lLmF0dGFjayhnYW1lYm9hcmRUd28sIGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlcik7XG4gICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkVHdvKTtcbiAgICBnYW1lYm9hcmRUd28uc2hpcHNPblRoaXNCb2FyZC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmRpZEl0U2luaygpO1xuICAgIH0pO1xuICAgIGlmIChnYW1lYm9hcmRUd28uY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KCdwbGF5ZXIgb25lIHdpbnMhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclR3by5yYW5kb21BdHRhY2soZ2FtZWJvYXJkT25lKTtcbiAgICAgIHJlbmRlckJvYXJkKGdhbWVib2FyZE9uZSk7XG4gICAgICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuZGlkSXRTaW5rKCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChnYW1lYm9hcmRPbmUuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgICAgcmVuZGVyU2hpcHMoZ2FtZWJvYXJkVHdvKTtcbiAgICAgICAgYWxlcnQoJ3BsYXllciB0d28gd2lucyEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllck9uZS5teVR1cm4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGNoYW5nZVhvclkgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAneScpIHtcbiAgICAgIHBsYWNlWG9yWSA9ICd5JztcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAneCcpIHtcbiAgICAgIHBsYWNlWG9yWSA9ICd4JztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbWFrZUJvYXJkLFxuICAgIHJlbmRlckJvYXJkLFxuICAgIHBsYXllclBsYXksXG4gICAgY2hhbmdlWG9yWSxcbiAgICBwbGFjZVhvclksXG4gICAgc3RhcnRHYW1lTG9vcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTWludGVyYWN0aW9uO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gKHBsYXllcikgPT4ge1xuICBjb25zdCBzaGlwc09uVGhpc0JvYXJkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0U3BhY2VzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFhvclksIGxlbmd0aCwgcG9zaXRpb24pID0+IFNoaXAoWG9yWSwgbGVuZ3RoLCBwb3NpdGlvbik7XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NpdGlvbikgPT4ge1xuICAgIGxldCBoaXRzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcHNPblRoaXNCb2FyZFtpXS5zcG90cy5pbmNsdWRlcyhwYXJzZUludChwb3NpdGlvbiwgMTApKSkge1xuICAgICAgICBzaGlwc09uVGhpc0JvYXJkW2ldLmhpdChwb3NpdGlvbik7XG4gICAgICAgIGhpdFNwYWNlcy5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgaGl0cyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRzID09PSBmYWxzZSkge1xuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKHBvc2l0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBbGxTdW5rID0gKCkgPT4ge1xuICAgIGxldCBhcmVTdW5rID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzT25UaGlzQm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwc09uVGhpc0JvYXJkW2ldLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgYXJlU3VuayArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJlU3VuayA9PT0gc2hpcHNPblRoaXNCb2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXIsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcHNPblRoaXNCb2FyZCwgbWlzc2VkQXR0YWNrcywgaGl0U3BhY2VzLCBjaGVja0FsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBteVR1cm4gPSB0cnVlO1xuICBjb25zdCBwbGF5ZXJzTW92ZXMgPSBbXTtcbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgcG9zaXRpb24pID0+IHtcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgcGxheWVyc01vdmVzLnB1c2gocG9zaXRpb24pO1xuICAgIG9iai5teVR1cm4gPSBmYWxzZTtcbiAgfTtcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGxldCBmaWxsZWRTcGFjZSA9IHRydWU7XG4gICAgd2hpbGUgKGZpbGxlZFNwYWNlKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcbiAgICAgIGlmICghcGxheWVyc01vdmVzLmluY2x1ZGVzKHJhbmRvbU51bSkpIHtcbiAgICAgICAgYXR0YWNrKGdhbWVib2FyZCwgcmFuZG9tTnVtKTtcbiAgICAgICAgcGxheWVyc01vdmVzLnB1c2gocmFuZG9tTnVtKTtcbiAgICAgICAgZmlsbGVkU3BhY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJhbmRvbUNvbXB1dGVyU2hpcHMgPSBmdW5jdGlvbiByYW5kb21Db21wdXRlclNoaXBzICgpIHtcbiAgICAvLyBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuYm9hcmRMb2NhdGlvbicpKSByZXR1cm47XG4gICAgLy8gaWYgKCFwbGFjZUJhdHRsZXNoaXBUaW1lKSByZXR1cm47XG4gICAgLy8gY29uc3Qgc3BvdCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0Lm51bWJlciwgMTApO1xuICAgIC8vIGlmIChjaGVja1NoaXBJbnRlcnNlY3Rpb24ocGxhY2VYb3JZLCBzcG90LCA0KSkgcmV0dXJuO1xuICAgIC8vIGlmIChwbGFjZVhvclkgPT09ICd4Jykge1xuICAgIC8vICAgaWYgKFs4LCA5LCAxMCwgMTgsIDE5LCAyMCxcbiAgICAvLyAgICAgMjgsIDI5LCAzMCwgMzgsIDM5LFxuICAgIC8vICAgICA0MCwgNDgsIDQ5LCA1MCwgNTgsXG4gICAgLy8gICAgIDU5LCA2MCwgNjgsIDY5LCA3MCxcbiAgICAvLyAgICAgNzgsIDc5LCA4MCwgODgsIDg5LCA5MCxcbiAgICAvLyAgICAgOTgsIDk5LCAxMDBdLmluY2x1ZGVzKHNwb3QpKSByZXR1cm47XG4gICAgLy8gICBjb25zdCBwT25lQmF0dGxlc2hpcCA9IFNoaXAoJ3gnLCA0LCBzcG90KTtcbiAgICAvLyAgIGdhbWVib2FyZE9uZS5zaGlwc09uVGhpc0JvYXJkLnB1c2gocE9uZUJhdHRsZXNoaXApO1xuICAgIC8vICAgcmVuZGVyQm9hcmQoZ2FtZWJvYXJkT25lKTtcbiAgICAvLyAgIHBsYWNlQmF0dGxlc2hpcFRpbWUgPSBmYWxzZTtcbiAgICAvLyAgIHBsYWNlRGVzdHJveWVyVGltZSA9IHRydWU7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGlmIChzcG90ID4gNzEpIHJldHVybjtcbiAgICAvLyAgIGNvbnN0IHBPbmVCYXR0bGVzaGlwID0gU2hpcCgneScsIDQsIHNwb3QpO1xuICAgIC8vICAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChwT25lQmF0dGxlc2hpcCk7XG4gICAgLy8gICByZW5kZXJCb2FyZChnYW1lYm9hcmRPbmUpO1xuICAgIC8vICAgcGxhY2VCYXR0bGVzaGlwVGltZSA9IGZhbHNlO1xuICAgIC8vICAgcGxhY2VEZXN0cm95ZXJUaW1lID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cbiAgY29uc3Qgb2JqID0ge1xuICAgIG5hbWUsXG4gICAgbXlUdXJuLFxuICAgIGF0dGFjayxcbiAgICByYW5kb21BdHRhY2ssXG4gIH07XG4gIHJldHVybiBvYmo7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKFhvclksIGxvbmcsIHBvc2l0aW9uKSA9PiB7XG4gIGNvbnN0IHNwb3RzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxvbmc7XG4gIGNvbnN0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGFkZFNwb3QgPSBwb3NpdGlvbjtcbiAgaWYgKFhvclkgPT09ICd4Jykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzcG90cy5wdXNoKGFkZFNwb3QpO1xuICAgICAgYWRkU3BvdCArPSAxO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3BvdHMucHVzaChhZGRTcG90KTtcbiAgICAgIGFkZFNwb3QgKz0gMTA7XG4gICAgfVxuICB9XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBoaXRzLnB1c2gobnVtYmVyKTtcbiAgfTtcbiAgY29uc3QgZGlkSXRTaW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvYmogPSB7XG4gICAgWG9yWSxcbiAgICBzaGlwTGVuZ3RoLFxuICAgIHBvc2l0aW9uLFxuICAgIHNwb3RzLFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIGRpZEl0U2luayxcbiAgICBzdW5rLFxuICB9O1xuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==