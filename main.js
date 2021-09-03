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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './styles/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Ship */ "./src/modules/Ship.js");
/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Player */ "./src/modules/Player.js");
/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Gameboard */ "./src/modules/Gameboard.js");
/* harmony import */ var _modules_DOMinteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/DOMinteraction */ "./src/modules/DOMinteraction.js");






const Game = () => {
  const playerOne = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_2__.default)('human');
  const playerTwo = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_2__.default)('computer');
  const gameboardOne = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__.default)();
  const gameboardTwo = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_3__.default)();

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
};
// set ships on GB 1
// set ships one GB 2

// gameloop
// while (check for all ships sunk in gameboards)
// Game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hKOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsOENBQUk7O0FBRXBEO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3pDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDSjtBQUNJO0FBQ007QUFDVTs7QUFFdEQ7QUFDQSxvQkFBb0Isd0RBQU07QUFDMUIsb0JBQW9CLHdEQUFNO0FBQzFCLHVCQUF1QiwyREFBUztBQUNoQyx1QkFBdUIsMkRBQVM7O0FBRWhDLHNCQUFzQixzREFBSTtBQUMxQix5QkFBeUIsc0RBQUk7QUFDN0Isd0JBQXdCLHNEQUFJO0FBQzVCLGtCQUFrQixzREFBSTtBQUN0QixxQkFBcUIsc0RBQUk7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQUk7QUFDMUIseUJBQXlCLHNEQUFJO0FBQzdCLHdCQUF3QixzREFBSTtBQUM1QixrQkFBa0Isc0RBQUk7QUFDdEIscUJBQXFCLHNEQUFJOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTWludGVyYWN0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBET01pbnRlcmFjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcE9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wT25lQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucFR3b0NvbnRhaW5lcicpO1xuICBjb25zdCBtYWtlQm9hcmQgPSAoY29vcmRpbmF0ZSwgZ2FtZWJvYXJkKSA9PiB7XG4gICAgLy8gbWFrZSBib2FyZFxuICB9O1xuICBjb25zdCByZW5kZXJCb2FyZCA9ICgpID0+IHtcbiAgICAvLyB1c2UgZGF0YSB0byBmaWxsaW4gYm9hcmQuXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01pbnRlcmFjdGlvbjtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHNPblRoaXNCb2FyZCA9IFtdO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGNvbnN0IGhpdFNwYWNlcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChYb3JZLCBsZW5ndGgsIHBvc2l0aW9uKSA9PiBTaGlwKFhvclksIGxlbmd0aCwgcG9zaXRpb24pO1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICBsZXQgaGl0cyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNPblRoaXNCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNoaXBzT25UaGlzQm9hcmRbaV0uc3BvdHMuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgIHNoaXBzT25UaGlzQm9hcmRbaV0uaGl0KHBvc2l0aW9uKTtcbiAgICAgICAgaGl0U3BhY2VzLnB1c2gocG9zaXRpb24pO1xuICAgICAgICBoaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpdHMgPT09IGZhbHNlKSB7XG4gICAgICBtaXNzZWRBdHRhY2tzLnB1c2gocG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGFyZVN1bmsgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNPblRoaXNCb2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNoaXBzT25UaGlzQm9hcmRbaV0uc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICBhcmVTdW5rICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmVTdW5rID09PSBzaGlwc09uVGhpc0JvYXJkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcHNPblRoaXNCb2FyZCwgbWlzc2VkQXR0YWNrcywgY2hlY2tBbGxTdW5rLFxuICB9O1xufTtcbmNvbnNvbGUubG9nKCdnYW1lYmFvcmQnKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcGxheWVyc01vdmVzID0gW107XG4gIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuICAgIHBsYXllcnNNb3Zlcy5wdXNoKHBvc2l0aW9uKTtcbiAgfTtcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGxldCBmaWxsZWRTcGFjZSA9IHRydWU7XG4gICAgd2hpbGUgKGZpbGxlZFNwYWNlKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgaWYgKCFwbGF5ZXJzTW92ZXMuaW5jbHVkZXMocmFuZG9tTnVtKSkge1xuICAgICAgICBhdHRhY2soZ2FtZWJvYXJkLCByYW5kb21OdW0pO1xuICAgICAgICBwbGF5ZXJzTW92ZXMucHVzaChyYW5kb21OdW0pO1xuICAgICAgICBmaWxsZWRTcGFjZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGF0dGFjayxcbiAgICByYW5kb21BdHRhY2ssXG4gIH07XG59O1xuY29uc29sZS5sb2coJ3BsYXllcicpO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gKFhvclksIGxvbmcsIHBvc2l0aW9uKSA9PiB7XG4gIGNvbnN0IHNwb3RzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxvbmc7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBhZGRTcG90ID0gcG9zaXRpb247XG4gIGlmIChYb3JZID09PSAneCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3BvdHMucHVzaChhZGRTcG90KTtcbiAgICAgIGFkZFNwb3QgKz0gMTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNwb3RzLnB1c2goYWRkU3BvdCk7XG4gICAgICBhZGRTcG90ICs9IDEwO1xuICAgIH1cbiAgfVxuICBjb25zdCBoaXQgPSAobnVtYmVyKSA9PiB7XG4gICAgaGl0cy5wdXNoKG51bWJlcik7XG4gIH07XG4gIGNvbnN0IGRpZEl0U2luayA9ICgpID0+IHtcbiAgICBpZiAoaGl0cy5sZW5ndGggPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb2JqID0ge1xuICAgIFhvclksXG4gICAgc2hpcExlbmd0aCxcbiAgICBwb3NpdGlvbixcbiAgICBzcG90cyxcbiAgICBoaXRzLFxuICAgIGhpdCxcbiAgICBkaWRJdFNpbmssXG4gICAgc3VuayxcbiAgfTtcbiAgcmV0dXJuIG9iajtcbn07XG5cbmNvbnNvbGUubG9nKCdzaGlwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL21vZHVsZXMvU2hpcCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vbW9kdWxlcy9QbGF5ZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL21vZHVsZXMvR2FtZWJvYXJkJztcbmltcG9ydCBET01pbnRlcmFjdGlvbiBmcm9tICcuL21vZHVsZXMvRE9NaW50ZXJhY3Rpb24nO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoJ2h1bWFuJyk7XG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcignY29tcHV0ZXInKTtcbiAgY29uc3QgZ2FtZWJvYXJkT25lID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGdhbWVib2FyZFR3byA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBPbmVDYXJyaWVyID0gU2hpcCgneCcsIDUsIDk1KTtcbiAgY29uc3QgcE9uZUJhdHRsZXNoaXAgPSBTaGlwKCd5JywgNCwgMjEpO1xuICBjb25zdCBwT25lRGVzdHJveWVyID0gU2hpcCgneScsIDMsIDQpO1xuICBjb25zdCBwT25lU3ViID0gU2hpcCgneCcsIDMsIDI2KTtcbiAgY29uc3QgcE9uZVBhdHJvbCA9IFNoaXAoJ3knLCAyLCA1Nik7XG5cbiAgZ2FtZWJvYXJkT25lLnNoaXBzT25UaGlzQm9hcmQucHVzaChcbiAgICBwT25lQ2FycmllciwgcE9uZUJhdHRsZXNoaXAsIHBPbmVEZXN0cm95ZXIsIHBPbmVTdWIsIHBPbmVQYXRyb2wsXG4gICk7XG5cbiAgY29uc3QgcFR3b0NhcnJpZXIgPSBTaGlwKCd4JywgNSwgOTUpO1xuICBjb25zdCBwVHdvQmF0dGxlc2hpcCA9IFNoaXAoJ3knLCA0LCAyMSk7XG4gIGNvbnN0IHBUd29EZXN0cm95ZXIgPSBTaGlwKCd5JywgMywgNCk7XG4gIGNvbnN0IHBUd29TdWIgPSBTaGlwKCd4JywgMywgMjYpO1xuICBjb25zdCBwVHdvUGF0cm9sID0gU2hpcCgneScsIDIsIDU2KTtcblxuICBnYW1lYm9hcmRUd28uc2hpcHNPblRoaXNCb2FyZC5wdXNoKFxuICAgIHBUd29DYXJyaWVyLCBwVHdvQmF0dGxlc2hpcCwgcFR3b0Rlc3Ryb3llciwgcFR3b1N1YiwgcFR3b1BhdHJvbCxcbiAgKTtcbn07XG4vLyBzZXQgc2hpcHMgb24gR0IgMVxuLy8gc2V0IHNoaXBzIG9uZSBHQiAyXG5cbi8vIGdhbWVsb29wXG4vLyB3aGlsZSAoY2hlY2sgZm9yIGFsbCBzaGlwcyBzdW5rIGluIGdhbWVib2FyZHMpXG4vLyBHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=