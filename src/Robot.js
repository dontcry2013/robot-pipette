import React, { useEffect } from 'react';
import Board from './Board';
import Input from './Input';
import Output from './Output';
import { CommandsDispatch } from './dispatch';
import { stringToCoordinate } from './Utils';
import { useCommandsReducer } from './reducer';
import { data1, data2 } from './TestData';

export default () => {
  const [state, dispatch] = useCommandsReducer();

  useEffect(() => {
    if (state.commands.length > 0) {
      state.commands.forEach((command) => {
        const arr = command.split(' ');
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
          <div className="title">Plate</div>
          <Board
            row={state.row}
            col={state.col}
            squares={state.squares}
            current={state.current}
          />
          <button onClick={ () => {
            dispatch({ type: 'primingPlate', squares: data1 });
          }}>
            Set Test Data 1
          </button>
          <button style={{marginLeft: '20px'}} onClick={ () => {
            dispatch({ type: 'primingPlate', squares: data2 });
          }}>
            Set Test Data 2
          </button>
        </div>
        <Input textareaVal={state.textareaVal}></Input>
        <Output reports={state.output}></Output>
      </div>
    </CommandsDispatch.Provider>
  );
}