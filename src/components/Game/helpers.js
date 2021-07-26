export const getTileSize = ({ size }) => {
  switch (size) {
    case 3:
      return 100;
      break;
    case 4:
      return 80;
      break;
    case 5:
      return 60;
      break;
    case 6:
      return 50;
      break;
    case 7:
      return 45;
      break;
    case 8:
      return 40;
      break;
  }
};

export const arrayGenerator = ({ size, random }) => {
  let array = [...Array(size * size).keys()];

  if (random) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  } else {
    array.shift();
    array.push(0);
  }

  return array;
};

export const checkIfTileCanMoveToEmpty = ({ tileIndex, size, gameNumbers }) => {
  const emptyIndex = gameNumbers.indexOf(0);
  if (
    (tileIndex % size !== 0 && tileIndex - 1 === emptyIndex) || // can go left
    ((tileIndex + 1) % size !== 0 && tileIndex + 1 === emptyIndex) || // can go right
    tileIndex - size === emptyIndex || // can go up
    tileIndex + size === emptyIndex // can go down
  ) {
    return true;
  }
  return false;
};
