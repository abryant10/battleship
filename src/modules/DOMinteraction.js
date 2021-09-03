const DOMinteraction = () => {
  const pOneContainer = document.querySelector('.pOneContainer');
  const pTwoContainer = document.querySelector('.pTwoContainer');
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
  const renderShips = (gamebaord) => {
    let container = pOneContainer;
    if (gamebaord.player === 2) {
      container = pTwoContainer;
    }
    gamebaord.shipsOnThisBoard.forEach((ship) => {
      ship.spots.forEach((spot) => {
        const square = container.querySelector(`[data-number='${spot}']`);
        square.classList = 'boardLocation shipLocation';
      });
    });
  };
  const renderBoardHuman = (gamebaord) => {
    renderShips(gamebaord);
    // renderHits(gamebaord);
    // rednerMisses(gamebaord);
  };
  // const renderBoardComputer = (gamebaord) => {
  //   renderHits(gamebaord);
  //   rednerMisses(gamebaord);
  // };
  return {
    makeBoard,
    renderBoardHuman,
    // renderBoardComputer,
  };
};

export default DOMinteraction;
