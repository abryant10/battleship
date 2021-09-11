import {
  gameboardOne, gameboardTwo, playerOne, playerTwo,
} from '../index';
import Ship from './Ship';

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
  // if (gameboard.player === 1) {
    renderShips(gameboard);
  // }
  renderHits(gameboard);
  renderMisses(gameboard);
};
const shipHover = function shipHover(event, flagVariable, numberOfSpots, badSpotsX, notOverY) {
  if (!event.target.matches('.boardLocation')) return;
  if (!flagVariable) return;
  const spot = parseInt(event.target.dataset.number, 10);
  const shipOutline = [];
  if (placeXorY === 'x') {
    for (let i = 0; i < numberOfSpots; i += 1) {
      const addedSpot = document.querySelector(`[data-number='${spot + i}']`);
      shipOutline.push(addedSpot);
    }
    if (playerOne.checkShipIntersection('x', spot, numberOfSpots, gameboardOne)) {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationBad');
      });
    }
    if (badSpotsX.includes(spot)) {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationBad');
      });
    } else {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationCheck');
      });
    }
  }
  if (placeXorY === 'y') {
    for (let i = 0; i < numberOfSpots; i += 1) {
      const addedSpot = document.querySelector(`[data-number='${spot + (i * 10)}']`);
      shipOutline.push(addedSpot);
    }
    if (playerOne.checkShipIntersection('y', spot, numberOfSpots, gameboardOne)) {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationBad');
      });
    }
    if (spot < notOverY) {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationCheck');
      });
    } else {
      shipOutline.forEach((location) => {
        location.classList.add('shipLocationBad');
      });
    }
  }
};
// const reportShipSunk = function (player, ship) {
//   playerMessages.innerHTML = `${player}'s `
//   ship.changeReportSunk();
// }
// place patrol
pOneContainer.addEventListener('mouseover', (event) => {
  shipHover(event, placePatrolTime, 2, patrolForbidSpotsX, patrolForbidGraterY);
});
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placePatrolTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (playerOne.checkShipIntersection(placeXorY, spot, 2, gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100].includes(spot)) return;
    const pOnePatrol = Ship('x', 2, spot, 'Patrol Ship');
    gameboardOne.shipsOnThisBoard.push(pOnePatrol);
    renderBoard(gameboardOne);
    placePatrolTime = false;
  } else {
    if (spot > 91) return;
    const pOnePatrol = Ship('y', 2, spot, 'Patrol Ship');
    gameboardOne.shipsOnThisBoard.push(pOnePatrol);
    renderBoard(gameboardOne);
    placePatrolTime = false;
  }
  playerMessages.innerHTML = 'Player One Makes the first move!';
  startGameLoop();
  setTimeout(() => { playerMessages.innerHTML = ''; }, 5000);
});
// place Submarine
pOneContainer.addEventListener('mouseover', (event) => {
  shipHover(event, placeSubmarineTime, 3, subForbidSpotsX, subForbidGraterY);
});
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeSubmarineTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (playerOne.checkShipIntersection(placeXorY, spot, 3, gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([9, 10, 19, 20,
      29, 30, 39,
      40, 49, 50,
      59, 60, 69, 70,
      79, 80, 89, 90,
      99, 100].includes(spot)) return;
    const pOneSub = Ship('x', 3, spot, 'Submarine');
    gameboardOne.shipsOnThisBoard.push(pOneSub);
    renderBoard(gameboardOne);
    placeSubmarineTime = false;
    placePatrolTime = true;
  } else {
    if (spot > 81) return;
    const pOneSub = Ship('y', 3, spot, 'Submarine');
    gameboardOne.shipsOnThisBoard.push(pOneSub);
    renderBoard(gameboardOne);
    placeSubmarineTime = false;
    placePatrolTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Patrol Ship. 
  Press the x or y key to change the ship's orientation.`;
});
// place destroyer
pOneContainer.addEventListener('mouseover', (event) => {
  shipHover(event, placeDestroyerTime, 3, destroyerForbidSpotsX, destroyerForbidGraterY);
});
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeDestroyerTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (playerOne.checkShipIntersection(placeXorY, spot, 3, gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([9, 10, 19, 20,
      29, 30, 39,
      40, 49, 50,
      59, 60, 69, 70,
      79, 80, 89, 90,
      99, 100].includes(spot)) return;
    const pOneDestroyer = Ship('x', 3, spot, 'Destroyer');
    gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
    renderBoard(gameboardOne);
    placeDestroyerTime = false;
    placeSubmarineTime = true;
  } else {
    if (spot > 81) return;
    const pOneDestroyer = Ship('y', 3, spot, 'Destroyer');
    gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
    renderBoard(gameboardOne);
    placeDestroyerTime = false;
    placeSubmarineTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Submarine. 
  Press the x or y key to change the ship's orientation.`;
});
// place battleship
pOneContainer.addEventListener('mouseover', (event) => {
  shipHover(event, placeBattleshipTime, 4, battleForbidSpotsX, battleForbidGraterY);
});
pOneContainer.addEventListener('click', (event) => {
  if (!event.target.matches('.boardLocation')) return;
  if (!placeBattleshipTime) return;
  const spot = parseInt(event.target.dataset.number, 10);
  if (playerOne.checkShipIntersection(placeXorY, spot, 4, gameboardOne)) return;
  if (placeXorY === 'x') {
    if ([8, 9, 10, 18, 19, 20,
      28, 29, 30, 38, 39,
      40, 48, 49, 50, 58,
      59, 60, 68, 69, 70,
      78, 79, 80, 88, 89, 90,
      98, 99, 100].includes(spot)) return;
    const pOneBattleship = Ship('x', 4, spot, 'Battleship');
    gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    renderBoard(gameboardOne);
    placeBattleshipTime = false;
    placeDestroyerTime = true;
  } else {
    if (spot > 71) return;
    const pOneBattleship = Ship('y', 4, spot, 'Battleship');
    gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    renderBoard(gameboardOne);
    placeBattleshipTime = false;
    placeDestroyerTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Destroyer. 
  Press the x or y key to change the ship's orientation.`;
});
// place carrier ship
pOneContainer.addEventListener('mouseover', (event) => {
  shipHover(event, placeCarrierTime, 5, carrierForbidSpotsX, carrierForbidGraterY);
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
    const pOneCarrier = Ship('x', 5, spot, 'Carrier');
    gameboardOne.shipsOnThisBoard.push(pOneCarrier);
    renderBoard(gameboardOne);
    placeCarrierTime = false;
    placeBattleshipTime = true;
  } else {
    if (spot > 61) return;
    const pOneCarrier = Ship('y', 5, spot, 'Carrier');
    gameboardOne.shipsOnThisBoard.push(pOneCarrier);
    renderBoard(gameboardOne);
    placeCarrierTime = false;
    placeBattleshipTime = true;
  }
  playerMessages.innerHTML = `Choose where to place your Battleship. 
  Press the x or y key to change the ship's orientation.`;
});

// game loop
const playerPlay = pTwoContainer.addEventListener('click', (event) => {
  if (!gameLoopTime) return;
  if (!event.target.matches('.boardLocation')) return;
  if (!playerOne.myTurn) return;
  if (event.target.matches('.hitAttack')) return;
  if (event.target.matches('.missedAttack')) return;
  playerOne.attack(gameboardTwo, event.target.dataset.number);
  renderBoard(gameboardTwo);
  gameboardTwo.shipsOnThisBoard.forEach((ship) => {
    ship.didItSink();
  });
  // for each ship on GB2 check if sunk and if not reported and report if so.
  gameboardTwo.shipsOnThisBoard.forEach((ship) => {
    if (ship.sunk) {
      if (!ship.reportedSunk) {
        playerMessages.innerHTML = ``;///////////////////////////////////////////////////////////////////////
        ship.changeReportedSunk();
        setTimeout(playerMessages.innerHTML = '';/////////////////////////////////////////////////////////////////////// set timout 5 seconds
      }
    }
  });
  if (gameboardTwo.checkAllSunk()) {
    alert('player one wins! Press Esc to play again.');
  } else {
    playerTwo.randomAttack(gameboardOne);
    renderBoard(gameboardOne);
    gameboardOne.shipsOnThisBoard.forEach((ship) => {
      ship.didItSink();
    });
    // for each ship on GB1 check if sunk and if not reported and report if so.
    if (gameboardOne.checkAllSunk()) {
      renderShips(gameboardTwo);
      alert('player two wins! Press Esc to play again.');
    } else {
      playerOne.myTurn = true;
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

export {
  makeBoard,
  renderBoard,
  playerPlay,
  changeXorY,
  startGameLoop,
};
