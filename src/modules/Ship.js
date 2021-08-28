const Ship = (XorY, length, position) => {
  const spots = [];
  const hits = [];
  let sunk = false;
  let addSpot = position;
  if (XorY === 'x') {
    for (let i = 0; i < length; i += 1) {
      spots.push(addSpot);
      addSpot += 1;
    }
  } else {
    for (let i = 0; i < length; i += 1) {
      spots.push(addSpot);
      addSpot += 10;
    }
  }
  const hit = (number) => {
    hits.push(number);
  };
  const isSunk = () => {
    if (hits.length === length) {
      sunk = true;
    }
  };
  return {
    XorY,
    length,
    position,
    spots,
    hits,
    hit,
    sunk,
    isSunk,
  };
};

// export default Ship;
module.exports = Ship;
