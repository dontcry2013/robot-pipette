import {
  indexToCoordinate,
  coordinateToIndex,
  stringToCoordinate,
  handleMove,
  handleDetect,
  handleReport,
  COL, ROW,
} from "../Utils";

describe("indexToCoordinate Test", () => {
  test("should return expected value", () => {
    const expected = null;
    expect(indexToCoordinate()).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = {x: 1, y: 0};
    expect(indexToCoordinate(5)).toEqual(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(indexToCoordinate(5, 'hello')).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(indexToCoordinate('hello', 5)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(indexToCoordinate('hello')).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(indexToCoordinate(-1, 5)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = { x: 1, y: 0 };
    expect(indexToCoordinate(5, COL)).toEqual(expected);
  });

  test("should return expected value", () => {
    const expected = { x: 4, y: 4 };
    expect(indexToCoordinate(24, COL)).toEqual(expected);
  });

  test("should return expected value", () => {
    const expected = { x: 4, y: 3 };
    expect(indexToCoordinate(23, COL)).toEqual(expected);
  });
});

describe("coordinateToIndex Test", () => {
  test("should return expected value", () => {
    const expected = -1;
    expect(coordinateToIndex()).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = -1;
    expect(coordinateToIndex(5)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = -1;
    expect(coordinateToIndex(5, 'hello')).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = -1;
    expect(coordinateToIndex('hello', 5)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = -1;
    expect(coordinateToIndex('hello')).toBe(expected);
  });

  test("should return expected value", () => {
    const coordinate = { x: 1, y: 0 };
    const expected = 5;

    expect(coordinateToIndex(coordinate, COL)).toEqual(expected);
  });

  test("should return expected value", () => {
    const coordinate = { x: 4, y: 4 };
    expect(coordinateToIndex(coordinate, COL)).toEqual(24);
  });
});

describe("stringToCoordinate Test", () => {
  test("should return expected value", () => {
    const expected = null;
    expect(stringToCoordinate()).toBe(expected);
  });
  
  test("should return expected value", () => {
    const expected = null;
    expect(stringToCoordinate(11)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(stringToCoordinate('11')).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = { x: 0, y: 1 };
    expect(stringToCoordinate('0,1')).toEqual(expected);
  });

  test("should return expected value", () => {
    const expected = { x: 0, y: 1 };
    expect(stringToCoordinate(' 0, 1')).toEqual(expected);
  });
});

describe("handleMove Test", () => {
  test("should return expected value", () => {
    const expected = null;
    expect(handleMove()).toBe(expected);
  });
  
  test("should return expected value", () => {
    const expected = 5;
    expect(handleMove(0, 'N', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleMove(0, 'S', COL, ROW)).toBe(expected);
  });
  
  test("should return expected value", () => {
    const expected = null;
    expect(handleMove(3, 'S', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 0;
    expect(handleMove(5, 'S', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleMove(5, 'W', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 23;
    expect(handleMove(24, 'W', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleMove(24, 'E', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleMove(24, 'N', COL, ROW)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 19;
    expect(handleMove(24, 'S', COL, ROW)).toBe(expected);
  });

});

describe("handleDetect Test", () => {
  const squares = Array(ROW * COL).fill(null);
  squares[9] = 'X';

  test("should return expected value", () => {
    const expected = null;
    expect(handleDetect()).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleDetect(squares)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 'ERR';
    expect(handleDetect(squares, 29)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 'EMPTY';
    expect(handleDetect(squares, 8)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = 'FULL';
    expect(handleDetect(squares, 9)).toBe(expected);
  });
});

describe("handleReport Test", () => {
  const squares = Array(ROW * COL).fill(null);
  squares[9] = 'X';

  test("should return expected value", () => {
    const expected = null;
    expect(handleReport()).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = null;
    expect(handleReport(squares)).toBe(expected);
  });

  test("should return expected value", () => {
    const expected = "5,4,ERR";
    expect(handleReport(squares, 29)).toBe(expected);
  });

  test("should return expected value", () => {
    expect(handleReport(squares, 8)).toBe('1,3,EMPTY');
  });

  test("should return expected value", () => {
    expect(handleReport(squares, 9)).toBe('1,4,FULL');
  });
});