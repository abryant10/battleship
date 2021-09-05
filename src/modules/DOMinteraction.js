import { gameboardOne, gameboardTwo, playerOne, playerTwo } from '../index';

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
    if (!playerOne.myTurn) return;
    if (event.target.matches('hitAttack')) return;
    if (event.target.matches('missedAttack')) return;
    playerOne.attack(gameboardTwo, event.target.dataset.number);
    renderBoard(gameboardTwo);
    gameboardTwo.shipsOnThisBoard.forEach((ship) => {
      ship.didItSink();
    });
    // run did it sink on all ships
    if (gameboardTwo.checkAllSunk()) {
      alert('player one wins!');
    } else {
      playerTwo.randomAttack(gameboardOne);
      renderBoard(gameboardOne);
      gameboardOne.shipsOnThisBoard.forEach((ship) => {
        ship.didItSink();
      });
      if (gameboardOne.checkAllSunk()) {
        // show enemy ships here
        alert('player two wins!');
      } else {
        playerOne.myTurn = true;
      }
    }
  });
  return {
    makeBoard,
    renderBoard,
    gameLoop,
  };
};

export default DOMinteraction;
