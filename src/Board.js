import React from 'react';
import Square from './Square';

const Board = (props) => {

  const createBoard = (row, col) => {
    const board = [];
    let i = 0;
    for (let y = row-1; y >= 0; y -= 1) {
      const columns = [];
      i = y * col - 1;
      for (let x = 0; x < col; x += 1) {
        i += 1;
        columns.push(renderSquare(i, y, x));
      }
      board.push(<div key={y} className="board-row">{columns}</div>);
    }

    return board;
  }

  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        position={i}
        hoverClass={i === props.current ? 'square--green': null}
        value={props.squares[i]}
      />
    );
  }

  return <div>{createBoard(props.row, props.col)}</div>;
}

export default Board;
