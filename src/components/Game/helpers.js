const canGoRight = (tileIndex, emptyIndex, size) => {
  if ((tileIndex + 1) % size !== 0 && tileIndex + 1 === emptyIndex) return true;
  return false;
};

const canGoLeft = (tileIndex, emptyIndex, size) => {
  if (tileIndex % size !== 0 && tileIndex - 1 === emptyIndex) return true;
  return false;
};

const canGoUp = (tileIndex, emptyIndex, size) => {
  if (tileIndex - size === emptyIndex) return true;
  return false;
};

const canGoDown = (tileIndex, emptyIndex, size) => {
  if (tileIndex + size === emptyIndex) return true;
  return false;
};

export const checkIfTileCanMoveToEmpty = ({ tileIndex, emptyIndex, size }) => {
  if (
    canGoLeft(tileIndex, emptyIndex, size) ||
    canGoRight(tileIndex, emptyIndex, size) ||
    canGoUp(tileIndex, emptyIndex, size) ||
    canGoDown(tileIndex, emptyIndex, size)
  ) {
    return true;
  }
  return false;
};

export const arrayGenerator = ({ size, difficulty }) => {
  let array = [...Array(size * size).keys()];

  if (difficulty) {
    if (difficulty === 'random') {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    } else {
      // Put empty index in middle of array
      let emptyIndex = Math.ceil((size * size) / 2);
      array.splice(emptyIndex, 0, 0);
      array.shift();
      emptyIndex--;

      const tempSteps = [1, size];
      const difficultyLevel = parseInt(difficulty);

      for (let i = 0; i < size * difficultyLevel; i++) {
        const random = Math.round(Math.random()); // Random 0 or 1
        if (i % 2 !== 0) {
          // GO UP OR DOWN
          if (random === 1) {
            // Go up
            const tileIndex = emptyIndex + size;
            if (
              canGoUp(tileIndex, emptyIndex, size) &&
              tileIndex < array.length
            ) {
              array[emptyIndex] = array[emptyIndex + size];
              array[emptyIndex + size] = 0;
              emptyIndex += size;
            } else {
              array[emptyIndex] = array[emptyIndex - size];
              array[emptyIndex - size] = 0;
              emptyIndex -= size;
            }
          } else {
            // Go down
            const tileIndex = emptyIndex - size;
            if (canGoDown(tileIndex, emptyIndex, size) && tileIndex > 0) {
              array[emptyIndex] = array[emptyIndex - size];
              array[emptyIndex - size] = 0;
              emptyIndex -= size;
            } else {
              array[emptyIndex] = array[emptyIndex + size];
              array[emptyIndex + size] = 0;
              emptyIndex += size;
            }
          }
        } else {
          // GO LEFT OR RIGHT
          if (random === 1) {
            // Go right
            const tileIndex = emptyIndex - 1;
            if (canGoRight(tileIndex, emptyIndex, size)) {
              array[emptyIndex] = array[emptyIndex - 1];
              array[emptyIndex - 1] = 0;
              emptyIndex--;
            } else {
              array[emptyIndex] = array[emptyIndex + 1];
              array[emptyIndex + 1] = 0;
              emptyIndex++;
            }
          } else {
            // Go left
            const tileIndex = emptyIndex + 1;
            if (canGoLeft(tileIndex, emptyIndex, size)) {
              array[emptyIndex] = array[emptyIndex + 1];
              array[emptyIndex + 1] = 0;
              emptyIndex++;
            } else {
              array[emptyIndex] = array[emptyIndex - 1];
              array[emptyIndex - 1] = 0;
              emptyIndex--;
            }
          }
        }
      }
    }
  } else {
    array.shift();
    array.push(0);
  }
  return array;
};
