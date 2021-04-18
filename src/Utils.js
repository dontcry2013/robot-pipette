export const indexToCoordinate = (index, col) => {
  const x = Math.floor(index / col);
  const y = index % col;
  return { x, y };
}

export const coordinateToIndex = (coordinate, col) => {
  return coordinate.x * col + coordinate.y;
}

export const stringToCoordinate = (str) => {
  let coordinate;
  if (typeof str === 'string' || str instanceof String) {
    const arr = str.split(',');
    coordinate = (arr.length == 2) ? { x: +arr[0], y: +arr[1] } : null;
  }
  return coordinate;
}

export const handleMove = (current, direction, col, row) => {
  const { x, y } = indexToCoordinate(current, col);
  switch(direction) {
    case 'N':
      if (x + 1 >= row) {
        console.error('out of boundary', direction, current, x, y);
        break;
      } else {
        return coordinateToIndex({ x: x + 1, y }, col);
      }
    case 'S':
      if (x - 1 < 0) {
        console.error('out of boundary', direction, current, x, y);
        break;
      } else {
        return coordinateToIndex({ x: x - 1, y }, col);
      }
    case 'W':
      if (y - 1 < 0) {
        console.error('out of boundary', direction, current, x, y);
        break;
      } else {
        return coordinateToIndex({ x: x, y: y - 1 }, col);
      }
    case 'E':
      if (y + 1 >= col) {
        console.error('out of boundary', direction, current, x, y);
        break;
      } else {
        return coordinateToIndex({ x: x, y: y + 1 }, col);
      }
    default:
      console.error('error from handleMove', direction);
  }
}

export const handleDetect = (squares, index) => {
  let message;
  try {
    if (squares[index] == "X") {
      message = 'FULL';
    } else {
      message = 'EMPTY';
    }
  } catch (error) {
    message = 'ERR';
  }
  return message;
}

export const handleReport = (squares, index, col) => {
  const status = handleDetect(squares, index);
  const coordinate = indexToCoordinate(index, col);
  return `${coordinate.x},${coordinate.y},${status}`;
}