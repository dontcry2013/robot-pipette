import { useReducer } from 'react';
import { 
  coordinateToIndex,
  handleMove,
  handleDetect,
  handleReport,
  ROW, COL,
} from './Utils';

export const initialState = {
  row: ROW,
  col: COL,
  squares: Array(ROW * COL).fill(null),
  commands: [],
  output: [],
  textareaVal: ``,
}

export const commandsReducer = (state, action) => {
  switch (action.type) {
    case 'primingPlate':
      return { ...state, squares: action.squares };
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

export const useCommandsReducer = () => {
  return useReducer(commandsReducer, initialState);
};
