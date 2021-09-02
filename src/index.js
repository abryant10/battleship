// import css from './styles/styles.css';
import Ship from './modules/Ship';
import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import DOMinteraction from './modules/DOMinteraction';

const Game = () => {
  const playerOne = Player('human');
  const playerTwo = Player('computer');
  const gameboardOne = Gameboard();
  const gameboardTwo = Gameboard();

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
};
// set ships on GB 1
// set ships one GB 2

// gameloop
// while (check for all ships sunk in gameboards)
Game();
