import React, { useEffect, useReducer } from 'react';
import Board from './Board';
import Input from './Input';
import Output from './Output';
import { CommandsDispatch } from './dispatch';
import { 
  coordinateToIndex,
  stringToCoordinate,
  handleMove,
  handleDetect,
  handleReport,
} from './Utils';
const ROW = 5;
const COL = 5;
const initialState = {
  row: ROW,
  col: COL,
  squares: Array(ROW * COL).fill(null),
  commands: [],
  output: [],
  textareaVal: ``,
}

export default () => {

  const commandsReducer = (state, action) => {
    switch (action.type) {
      case 'setCommands':
        return { ...state, commands: action.commands, output: [] };
      case 'PLACE':
        const current = coordinateToIndex(action.position, state.col);
        return { ...state, current };
      case 'MOVE':
        const current2 = handleMove(state.current, action.direction, state.col, state.row);
        if (current2) {
          return { ...state, current: current2 };
        }
        return state;
      case 'DROP':
        const squares = state.squares.slice();
        squares[state.current] = "X";
        return { ...state, squares };
      case 'DETECT':
        const detectedMessage = handleDetect(state.squares, state.current);
        return { ...state, output: [...state.output, `Output: ${detectedMessage}`]};
      case 'REPORT':
        const reportedMessage = handleReport(state.squares, state.current, state.col);
        return { ...state, output: [...state.output, `Output: ${reportedMessage}`]};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(commandsReducer, initialState);

  useEffect(() => {
    if (state.commands.length > 0) {
      state.commands.forEach((command) => {
        const arr = command.split(' ');
        console.log(33, arr);
        switch (arr[0].toUpperCase()) {
          case 'PLACE':
            const coorinate = stringToCoordinate(arr[1]);
            console.log(1, coorinate);
            coorinate && dispatch({ type: 'PLACE', position: coorinate });
            // dispatch({ type: 'PLACE', position: coorinate });
            break;
          case 'MOVE':
            arr[1] && dispatch({ type: 'MOVE', direction: arr[1] });
            break;
          case 'DROP':
            dispatch({ type: 'DROP' });
            break;
          case 'DETECT':
            dispatch({ type: 'DETECT' });
            break;
          case 'REPORT':
            dispatch({ type: 'REPORT' });
            break;
          default:
            console.error('error from useEffect', command);
        }
      });
    }
  }, [state.commands]);
 
  return (
    <CommandsDispatch.Provider value={dispatch}>
      <div className="robot">
        <div className="board">
          <Board
            row={state.row}
            col={state.col}
            squares={state.squares}
            current={state.current}
          />
        </div>
        <Input textareaVal={state.textareaVal}></Input>
        <Output reports={state.output}></Output>
      </div>
    </CommandsDispatch.Provider>
  );
}