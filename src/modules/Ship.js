const Ship = (XorY, long, position, name) => {
  const spots = [];
  const hits = [];
  const shipLength = long;
  const sunk = false;
  const reportedSunk = false;
  let addSpot = position;
  if (XorY === 'x') {
    for (let i = 0; i < shipLength; i += 1) {
      spots.push(addSpot);
      addSpot += 1;
    }
  } else {
    for (let i = 0; i < shipLength; i += 1) {
      spots.push(addSpot);
      addSpot += 10;
    }
  }
  const hit = (number) => {
    hits.push(number);
  };
  const didItSink = () => {
    if (hits.length === shipLength) {
      obj.sunk = true;
    }
  };
  const changeReportedSunk = () => {
    obj.reportedSunk = true;
  };

  const obj = {
    name,
    XorY,
    shipLength,
    position,
    spots,
    hits,
    hit,
    didItSink,
    changeReportedSunk,
    reportedSunk,
    sunk,
  };
  return obj;
};

export default Ship;
