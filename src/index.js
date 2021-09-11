import './styles/styles.css';
import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import { makeBoard, renderBoard } from './modules/DOMinteraction';

// const DOM = DOMinteraction();
const playerOne = Player('human');
const playerTwo = Player('computer');
const gameboardOne = Gameboard(1);
const gameboardTwo = Gameboard(2);
const Game = () => {
  makeBoard(1);
  makeBoard(2);
  playerTwo.randomComputerShips(playerTwo, gameboardTwo);
  renderBoard(gameboardOne);
  renderBoard(gameboardTwo);
};
Game();

export {
  gameboardOne, gameboardTwo, playerOne, playerTwo,
};
