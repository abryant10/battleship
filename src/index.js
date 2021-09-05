import './styles/styles.css';
import Ship from './modules/Ship';
import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import DOMinteraction from './modules/DOMinteraction';

const DOM = DOMinteraction();
const playerOne = Player('human');
const playerTwo = Player('computer');
const gameboardOne = Gameboard(1);
const gameboardTwo = Gameboard(2);
const Game = () => {
  const pOneCarrier = Ship('x', 5, 95);
  const pOneBattleship = Ship('y', 4, 21);
  const pOneDestroyer = Ship('y', 3, 4);
  const pOneSub = Ship('x', 3, 26);
  const pOnePatrol = Ship('y', 2, 56);

  gameboardOne.shipsOnThisBoard.push(
    pOneCarrier, pOneBattleship, pOneDestroyer, pOneSub, pOnePatrol,
  );

  const pTwoCarrier = Ship('x', 5, 95);
  const pTwoBattleship = Ship('y', 4, 21);
  const pTwoDestroyer = Ship('y', 3, 4);
  const pTwoSub = Ship('x', 3, 26);
  const pTwoPatrol = Ship('y', 2, 56);

  gameboardTwo.shipsOnThisBoard.push(
    pTwoCarrier, pTwoBattleship, pTwoDestroyer, pTwoSub, pTwoPatrol,
  );

  DOM.makeBoard(1);
  DOM.makeBoard(2);

  DOM.renderBoard(gameboardOne);
  DOM.renderBoard(gameboardTwo);
};

Game();

export {
  gameboardOne, gameboardTwo, playerOne, playerTwo 
};
