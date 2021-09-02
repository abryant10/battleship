/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOMinteraction.js":
/*!***************************************!*\
  !*** ./src/modules/DOMinteraction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMinteraction = () => {
  const pOneContainer = document.querySelector('.pOneContainer');
  const pTwoContainer = document.querySelector('.pTwoContainer');
  const makeBoard = (coordinate, gameboard) => {
    // make board
  };
  const renderBoard = () => {
    // use data to fillin board.
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


const Gameboard = () => {
  const shipsOnThisBoard = [];
  const missedAttacks = [];
  const hitSpaces = [];

  const placeShip = (XorY, length, position) => (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(XorY, length, position);

  const receiveAttack = (position) => {
    let hits = false;
    for (let i = 0; i < shipsOnThisBoard.length; i += 1) {
      if (shipsOnThisBoard[i].spots.includes(position)) {
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
    placeShip, receiveAttack, shipsOnThisBoard, missedAttacks, checkAllSunk,
  };
};
console.log('gamebaord');

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
  const playersMoves = [];
  const attack = (gameboard, position) => {
    gameboard.receiveAttack(position);
    playersMoves.push(position);
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
  return {
    name,
    attack,
    randomAttack,
  };
};
console.log('player');

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
  let sunk = false;
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

console.log('ship');

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Ship */ "./src/modules/Ship.js");
/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Player */ "./src/modules/Player.js");
/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOMinteraction */ "./src/modules/DOMinteraction.js");
// import css from './styles/styles.css';





const Game = () => {
  const playerOne = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)('human');
  const playerTwo = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)('computer');
  const gameboardOne = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();
  const gameboardTwo = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();

  const pOneCarrier = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('x', 5, 95);
  const pOneBattleship = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 4, 21);
  const pOneDestroyer = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 3, 4);
  const pOneSub = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('x', 3, 26);
  const pOnePatrol = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 2, 56);

  gameboardOne.shipsOnThisBoard.push(
    pOneCarrier, pOneBattleship, pOneDestroyer, pOneSub, pOnePatrol,
  );

  const pTwoCarrier = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('x', 5, 95);
  const pTwoBattleship = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 4, 21);
  const pTwoDestroyer = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 3, 4);
  const pTwoSub = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('x', 3, 26);
  const pTwoPatrol = (0,_modules_Ship__WEBPACK_IMPORTED_MODULE_0__.default)('y', 2, 56);

  gameboardTwo.shipsOnThisBoard.push(
    pTwoCarrier, pTwoBattleship, pTwoDestroyer, pTwoSub, pTwoPatrol,
  );
};
// set ships on GB 1
// set ships one GB 2

// gameloop
// while (check for all ships sunk in gameboards)
Game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hKOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsOENBQUk7O0FBRXBEO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3pDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2tDO0FBQ0k7QUFDTTtBQUNVOztBQUV0RDtBQUNBLG9CQUFvQix3REFBTTtBQUMxQixvQkFBb0Isd0RBQU07QUFDMUIsdUJBQXVCLDJEQUFTO0FBQ2hDLHVCQUF1QiwyREFBUzs7QUFFaEMsc0JBQXNCLHNEQUFJO0FBQzFCLHlCQUF5QixzREFBSTtBQUM3Qix3QkFBd0Isc0RBQUk7QUFDNUIsa0JBQWtCLHNEQUFJO0FBQ3RCLHFCQUFxQixzREFBSTs7QUFFekI7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixzREFBSTtBQUMxQix5QkFBeUIsc0RBQUk7QUFDN0Isd0JBQXdCLHNEQUFJO0FBQzVCLGtCQUFrQixzREFBSTtBQUN0QixxQkFBcUIsc0RBQUk7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NaW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERPTWludGVyYWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwT25lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBPbmVDb250YWluZXInKTtcbiAgY29uc3QgcFR3b0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wVHdvQ29udGFpbmVyJyk7XG4gIGNvbnN0IG1ha2VCb2FyZCA9IChjb29yZGluYXRlLCBnYW1lYm9hcmQpID0+IHtcbiAgICAvLyBtYWtlIGJvYXJkXG4gIH07XG4gIGNvbnN0IHJlbmRlckJvYXJkID0gKCkgPT4ge1xuICAgIC8vIHVzZSBkYXRhIHRvIGZpbGxpbiBib2FyZC5cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTWludGVyYWN0aW9uO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBzaGlwc09uVGhpc0JvYXJkID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgaGl0U3BhY2VzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFhvclksIGxlbmd0aCwgcG9zaXRpb24pID0+IFNoaXAoWG9yWSwgbGVuZ3RoLCBwb3NpdGlvbik7XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NpdGlvbikgPT4ge1xuICAgIGxldCBoaXRzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcHNPblRoaXNCb2FyZFtpXS5zcG90cy5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgICAgc2hpcHNPblRoaXNCb2FyZFtpXS5oaXQocG9zaXRpb24pO1xuICAgICAgICBoaXRTcGFjZXMucHVzaChwb3NpdGlvbik7XG4gICAgICAgIGhpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGl0cyA9PT0gZmFsc2UpIHtcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaChwb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWxsU3VuayA9ICgpID0+IHtcbiAgICBsZXQgYXJlU3VuayA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcHNPblRoaXNCb2FyZFtpXS5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgIGFyZVN1bmsgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZVN1bmsgPT09IHNoaXBzT25UaGlzQm9hcmQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBzaGlwc09uVGhpc0JvYXJkLCBtaXNzZWRBdHRhY2tzLCBjaGVja0FsbFN1bmssXG4gIH07XG59O1xuY29uc29sZS5sb2coJ2dhbWViYW9yZCcpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBwbGF5ZXJzTW92ZXMgPSBbXTtcbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgcG9zaXRpb24pID0+IHtcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgcGxheWVyc01vdmVzLnB1c2gocG9zaXRpb24pO1xuICB9O1xuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgbGV0IGZpbGxlZFNwYWNlID0gdHJ1ZTtcbiAgICB3aGlsZSAoZmlsbGVkU3BhY2UpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICBpZiAoIXBsYXllcnNNb3Zlcy5pbmNsdWRlcyhyYW5kb21OdW0pKSB7XG4gICAgICAgIGF0dGFjayhnYW1lYm9hcmQsIHJhbmRvbU51bSk7XG4gICAgICAgIHBsYXllcnNNb3Zlcy5wdXNoKHJhbmRvbU51bSk7XG4gICAgICAgIGZpbGxlZFNwYWNlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgYXR0YWNrLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgfTtcbn07XG5jb25zb2xlLmxvZygncGxheWVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAoWG9yWSwgbG9uZywgcG9zaXRpb24pID0+IHtcbiAgY29uc3Qgc3BvdHMgPSBbXTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbG9uZztcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IGFkZFNwb3QgPSBwb3NpdGlvbjtcbiAgaWYgKFhvclkgPT09ICd4Jykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICBzcG90cy5wdXNoKGFkZFNwb3QpO1xuICAgICAgYWRkU3BvdCArPSAxO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3BvdHMucHVzaChhZGRTcG90KTtcbiAgICAgIGFkZFNwb3QgKz0gMTA7XG4gICAgfVxuICB9XG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBoaXRzLnB1c2gobnVtYmVyKTtcbiAgfTtcbiAgY29uc3QgZGlkSXRTaW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzLmxlbmd0aCA9PT0gc2hpcExlbmd0aCkge1xuICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvYmogPSB7XG4gICAgWG9yWSxcbiAgICBzaGlwTGVuZ3RoLFxuICAgIHBvc2l0aW9uLFxuICAgIHNwb3RzLFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIGRpZEl0U2luayxcbiAgICBzdW5rLFxuICB9O1xuICByZXR1cm4gb2JqO1xufTtcblxuY29uc29sZS5sb2coJ3NoaXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9TaGlwJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL1BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbW9kdWxlcy9HYW1lYm9hcmQnO1xuaW1wb3J0IERPTWludGVyYWN0aW9uIGZyb20gJy4vbW9kdWxlcy9ET01pbnRlcmFjdGlvbic7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcignaHVtYW4nKTtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCdjb21wdXRlcicpO1xuICBjb25zdCBnYW1lYm9hcmRPbmUgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgZ2FtZWJvYXJkVHdvID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcE9uZUNhcnJpZXIgPSBTaGlwKCd4JywgNSwgOTUpO1xuICBjb25zdCBwT25lQmF0dGxlc2hpcCA9IFNoaXAoJ3knLCA0LCAyMSk7XG4gIGNvbnN0IHBPbmVEZXN0cm95ZXIgPSBTaGlwKCd5JywgMywgNCk7XG4gIGNvbnN0IHBPbmVTdWIgPSBTaGlwKCd4JywgMywgMjYpO1xuICBjb25zdCBwT25lUGF0cm9sID0gU2hpcCgneScsIDIsIDU2KTtcblxuICBnYW1lYm9hcmRPbmUuc2hpcHNPblRoaXNCb2FyZC5wdXNoKFxuICAgIHBPbmVDYXJyaWVyLCBwT25lQmF0dGxlc2hpcCwgcE9uZURlc3Ryb3llciwgcE9uZVN1YiwgcE9uZVBhdHJvbCxcbiAgKTtcblxuICBjb25zdCBwVHdvQ2FycmllciA9IFNoaXAoJ3gnLCA1LCA5NSk7XG4gIGNvbnN0IHBUd29CYXR0bGVzaGlwID0gU2hpcCgneScsIDQsIDIxKTtcbiAgY29uc3QgcFR3b0Rlc3Ryb3llciA9IFNoaXAoJ3knLCAzLCA0KTtcbiAgY29uc3QgcFR3b1N1YiA9IFNoaXAoJ3gnLCAzLCAyNik7XG4gIGNvbnN0IHBUd29QYXRyb2wgPSBTaGlwKCd5JywgMiwgNTYpO1xuXG4gIGdhbWVib2FyZFR3by5zaGlwc09uVGhpc0JvYXJkLnB1c2goXG4gICAgcFR3b0NhcnJpZXIsIHBUd29CYXR0bGVzaGlwLCBwVHdvRGVzdHJveWVyLCBwVHdvU3ViLCBwVHdvUGF0cm9sLFxuICApO1xufTtcbi8vIHNldCBzaGlwcyBvbiBHQiAxXG4vLyBzZXQgc2hpcHMgb25lIEdCIDJcblxuLy8gZ2FtZWxvb3Bcbi8vIHdoaWxlIChjaGVjayBmb3IgYWxsIHNoaXBzIHN1bmsgaW4gZ2FtZWJvYXJkcylcbkdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==