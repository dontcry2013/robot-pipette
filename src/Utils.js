const COL = 5, ROW = 5;

export const indexToCoordinate = (index, col = COL) => {
  let ret = null;
  if (!isNaN(index) && !isNaN(col) && index >=0 && col > 0) {
    const x = Math.floor(index / col);
    const y = index % col;
    ret = { x, y };
  }
  return ret;
}

export const coordinateToIndex = (coordinate, col = COL) => {
  let ret = -1;
  if (coordinate && !isNaN(coordinate.x) && !isNaN(coordinate.y) && !isNaN(col) && coordinate.x >= 0 &&coordinate.y >= 0 && col > 0) {
    ret = coordinate.x * col + coordinate.y;
  }
  return ret
}

export const stringToCoordinate = (str) => {
  let coordinate = null;
  if (typeof str === 'string' || str instanceof String) {
    const arr = str.split(',');
    coordinate = (arr.length === 2) ? { x: +arr[0], y: +arr[1] } : null;
  }
  return coordinate;
}

export const handleMove = (current, direction, col = COL, row = ROW) => {
  if (isNaN(current) || isNaN(col) || isNaN(row)) {
    return null;
  }

  if (current < 0 || col < 0 || row < 0) {
    return null;
  }

  if (!direction || 'NWSEnwse'.indexOf(direction) < 0) {
    return null;
  }

  const coordinate = indexToCoordinate(current, col);
  if (!coordinate) {
    return null;
  }

  let ret = null;
  const { x, y } = coordinate;
  switch(direction.toUpperCase()) {
    case 'N':
      if (x + 1 >= row) {
        console.log('out of boundary', direction, current, x, y);
      } else {
        ret = coordinateToIndex({ x: x + 1, y }, col);
      }
      break;
    case 'S':
      if (x - 1 < 0) {
        console.log('out of boundary', direction, current, x, y);
      } else {
        ret = coordinateToIndex({ x: x - 1, y }, col);
      }
      break;
    case 'W':
      if (y - 1 < 0) {
        console.log('out of boundary', direction, current, x, y);
      } else {
        ret = coordinateToIndex({ x: x, y: y - 1 }, col);
      }
      break;
    case 'E':
      if (y + 1 >= col) {
        console.log('out of boundary', direction, current, x, y);
      } else {
        ret = coordinateToIndex({ x: x, y: y + 1 }, col);
      }
      break;
    default:
      console.log('error from handleMove', direction);
  }
  return ret;
}

export const handleDetect = (squares, index) => {
  let message = null;
  if (!Array.isArray(squares) || isNaN(index)) {
    return null;
  }
  try {
    if (squares[index] === "X") {
      message = 'FULL';
    } else if (squares[index] === null) {
      message = 'EMPTY';
    } else {
      message = 'ERR';
    }
  } catch (error) {
    message = null;
  }
  return message;
}

export const handleReport = (squares, index, col = COL) => {
  const status = handleDetect(squares, index);
  const coordinate = indexToCoordinate(index, col);
  if (status && coordinate && coordinate.x && coordinate.y) {
    return `${coordinate.x},${coordinate.y},${status}`;
  } else {
    return null;
  }
}