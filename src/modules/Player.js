import Ship from './Ship';

const Player = (name) => {
  const myTurn = true;
  const playersMoves = [];
  const attack = (gameboard, position) => {
    gameboard.receiveAttack(position);
    playersMoves.push(position);
    obj.myTurn = false;
  };
  const randomNum = function randomNum(start, end) {
    return Math.floor(Math.random() * end) + start;
  };
  const randomAttack = (gameboard) => {
    let filledSpace = true;
    while (filledSpace) {
      const number = randomNum(1, 100);
      if (!playersMoves.includes(number)) {
        attack(gameboard, number);
        playersMoves.push(number);
        filledSpace = false;
      }
    }
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
  const checkShipIntersection = function
  checkShipIntersection(XorY, startingPoint, shiplength, gameboard) {
    let spot = startingPoint;
    let inc = 1;
    if (XorY === 'y') { inc = 10; }
    for (let i = 0; i < shiplength; i += 1) {
      if (compareShipLocation(gameboard, spot)) return true;
      spot += inc;
    }
    return false;
  };
  const randomShip = function randomShip(forbidSpotsX, forbidGraterY, shipLength, gameboard) {
    let shipPlaced = false;
    let XorY = 'x';
    let number;
    if (randomNum(1, 2) === 2) XorY = 'y';
    if (XorY === 'x') {
      while (!shipPlaced) {
        number = randomNum(1, 100);
        if (!forbidSpotsX.includes(number)) {
          if (!checkShipIntersection(XorY, number, shipLength, gameboard)) {
            shipPlaced = true;
          }
        }
      }
    } else {
      while (!shipPlaced) {
        number = randomNum(1, 100);
        if (number < forbidGraterY) {
          if (!checkShipIntersection(XorY, number, shipLength, gameboard)) {
            shipPlaced = true;
          }
        }
      }
    }
    const ship = Ship(XorY, shipLength, number);
    return ship;
  };
  const randomComputerShips = function randomComputerShips(player, gameboard) {
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
    const pTwoCarrier = player.randomShip(
      carrierForbidSpotsX, carrierForbidGraterY, 5, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoCarrier);
    const pTwoBattleship = player.randomShip(
      battleForbidSpotsX, battleForbidGraterY, 4, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoBattleship);
    const pTwoDestroyer = player.randomShip(
      destroyerForbidSpotsX, destroyerForbidGraterY, 3, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoDestroyer);
    const pTwoSub = player.randomShip(subForbidSpotsX, subForbidGraterY, 3, gameboard);
    gameboard.shipsOnThisBoard.push(pTwoSub);
    const pTwoPatrol = player.randomShip(
      patrolForbidSpotsX, patrolForbidGraterY, 2, gameboard,
    );
    gameboard.shipsOnThisBoard.push(pTwoPatrol);
  };

  const obj = {
    name,
    myTurn,
    attack,
    randomAttack,
    randomNum,
    randomShip,
    randomComputerShips,
    checkShipIntersection,
  };
  return obj;
};

export default Player;
