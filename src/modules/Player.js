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

export default Player;
