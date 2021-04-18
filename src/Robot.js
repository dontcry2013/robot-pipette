import React, { useEffect } from 'react';
import Board from './Board';
import Input from './Input';
import Output from './Output';
import { CommandsDispatch } from './dispatch';
import { stringToCoordinate } from './Utils';
import { useCommandsReducer } from './reducer';

export default () => {
  const [state, dispatch] = useCommandsReducer();

  useEffect(() => {
    if (state.commands.length > 0) {
      state.commands.forEach((command) => {
        const arr = command.split(' ');
        console.log(33, arr);
        switch (arr[0].toUpperCase()) {
          case 'PLACE':
            const coorinate = stringToCoordinate(arr[1]);
            coorinate && dispatch({ type: 'PLACE', position: coorinate });
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