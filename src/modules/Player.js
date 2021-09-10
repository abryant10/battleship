const Player = (name) => {
  const myTurn = true;
  const playersMoves = [];
  const attack = (gameboard, position) => {
    gameboard.receiveAttack(position);
    playersMoves.push(position);
    obj.myTurn = false;
  };
  const randomAttack = (gameboard) => {
    let filledSpace = true;
    while (filledSpace) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      if (!playersMoves.includes(randomNum)) {
        attack(gameboard, randomNum);
        playersMoves.push(randomNum);
        filledSpace = false;
      }
    }
  };
  const randomComputerShips = function randomComputerShips () {
    // if (!event.target.matches('.boardLocation')) return;
    // if (!placeBattleshipTime) return;
    // const spot = parseInt(event.target.dataset.number, 10);
    // if (checkShipIntersection(placeXorY, spot, 4)) return;
    // if (placeXorY === 'x') {
    //   if ([8, 9, 10, 18, 19, 20,
    //     28, 29, 30, 38, 39,
    //     40, 48, 49, 50, 58,
    //     59, 60, 68, 69, 70,
    //     78, 79, 80, 88, 89, 90,
    //     98, 99, 100].includes(spot)) return;
    //   const pOneBattleship = Ship('x', 4, spot);
    //   gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    //   renderBoard(gameboardOne);
    //   placeBattleshipTime = false;
    //   placeDestroyerTime = true;
    // } else {
    //   if (spot > 71) return;
    //   const pOneBattleship = Ship('y', 4, spot);
    //   gameboardOne.shipsOnThisBoard.push(pOneBattleship);
    //   renderBoard(gameboardOne);
    //   placeBattleshipTime = false;
    //   placeDestroyerTime = true;
    // }
  }
  const obj = {
    name,
    myTurn,
    attack,
    randomAttack,
  };
  return obj;
};

export default Player;
