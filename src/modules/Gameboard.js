// import Ship from './Ship';
const Ship = require('./Ship');

const Gameboard = () => {
  const shipsOnThisBoard = [];
  const missedAttacks = [];

  const placeShip = (XorY, length, position) => Ship(XorY, length, position);

  const receiveAttack = (position) => {
    let hits = false;

    for (let i = 0; i < shipsOnThisBoard.length; i += 1) {
      if (shipsOnThisBoard[i].spots.contains(position)) {
        shipsOnThisBoard[i].hit(position);
        hits = true;
      }
    }
    if (hits === false) {
      missedAttacks.push(position);
    }
  };

  return {
    placeShip, receiveAttack, shipsOnThisBoard, missedAttacks,
  };
};

// export default Gameboard;
module.exports = Gameboard;
