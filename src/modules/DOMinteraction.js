import {
  gameboardOne, gameboardTwo, playerOne, playerTwo,
} from '../index';
import Ship from './Ship';

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
      if (compareShipLocation(gameboardOne, spot)) return true;
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
      const pOnePatrol = Ship('x', 2, spot);
      gameboardOne.shipsOnThisBoard.push(pOnePatrol);
      renderBoard(gameboardOne);
      placePatrolTime = false;
    } else {
      if (spot > 91) return;
      const pOnePatrol = Ship('y', 2, spot);
      gameboardOne.shipsOnThisBoard.push(pOnePatrol);
      renderBoard(gameboardOne);
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
      const pOneSub = Ship('x', 3, spot);
      gameboardOne.shipsOnThisBoard.push(pOneSub);
      renderBoard(gameboardOne);
      placeSubmarineTime = false;
      placePatrolTime = true;
    } else {
      if (spot > 81) return;
      const pOneSub = Ship('y', 3, spot);
      gameboardOne.shipsOnThisBoard.push(pOneSub);
      renderBoard(gameboardOne);
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
      const pOneDestroyer = Ship('x', 3, spot);
      gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
      renderBoard(gameboardOne);
      placeDestroyerTime = false;
      placeSubmarineTime = true;
    } else {
      if (spot > 81) return;
      const pOneDestroyer = Ship('y', 3, spot);
      gameboardOne.shipsOnThisBoard.push(pOneDestroyer);
      renderBoard(gameboardOne);
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
      const pOneBattleship = Ship('x', 4, spot);
      gameboardOne.shipsOnThisBoard.push(pOneBattleship);
      renderBoard(gameboardOne);
      placeBattleshipTime = false;
      placeDestroyerTime = true;
    } else {
      if (spot > 71) return;
      const pOneBattleship = Ship('y', 4, spot);
      gameboardOne.shipsOnThisBoard.push(pOneBattleship);
      renderBoard(gameboardOne);
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
      const pOneCarrier = Ship('x', 5, spot);
      gameboardOne.shipsOnThisBoard.push(pOneCarrier);
      renderBoard(gameboardOne);
      placeCarrierTime = false;
      placeBattleshipTime = true;
    } else {
      if (spot > 61) return;
      const pOneCarrier = Ship('y', 5, spot);
      gameboardOne.shipsOnThisBoard.push(pOneCarrier);
      renderBoard(gameboardOne);
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
    if (!playerOne.myTurn) return;
    if (event.target.matches('.hitAttack')) return;
    if (event.target.matches('.missedAttack')) return;
    playerOne.attack(gameboardTwo, event.target.dataset.number);
    renderBoard(gameboardTwo);
    gameboardTwo.shipsOnThisBoard.forEach((ship) => {
      ship.didItSink();
    });
    if (gameboardTwo.checkAllSunk()) {
      alert('player one wins!');
    } else {
      playerTwo.randomAttack(gameboardOne);
      renderBoard(gameboardOne);
      gameboardOne.shipsOnThisBoard.forEach((ship) => {
        ship.didItSink();
      });
      if (gameboardOne.checkAllSunk()) {
        renderShips(gameboardTwo);
        alert('player two wins!');
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

  return {
    makeBoard,
    renderBoard,
    playerPlay,
    changeXorY,
    placeXorY,
    startGameLoop,
  };
};

export default DOMinteraction;
