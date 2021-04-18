import { renderHook, act } from '@testing-library/react-hooks'
import { initialState, useCommandsReducer } from '../reducer';
import { data1, data2 } from '../TestData';

const testState = { ...initialState };

describe("reducer Test", () => {

  test("should return expected value", () => {
    const { result } = renderHook(() => useCommandsReducer());
    const [, dispatch] = result.current;
    act(() => {
      dispatch({ type: 'primingPlate', squares: data2 });
    });
    testState.squares = data2;
    const [state] = result.current;
    expect(state).toEqual(testState);
  });

  test("should return expected value", () => {
    const { result } = renderHook(() => useCommandsReducer());
    const [initialState, dispatch] = result.current;
    act(() => {
      dispatch({ type: 'setCommands', commands: [1, 2, 3] });
    });
    initialState.output = [];
    initialState.commands = [1, 2, 3];
    const [state] = result.current;
    expect(state).toEqual(initialState);
  });

  test("should return expected value", () => {
    const { result } = renderHook(() => useCommandsReducer());
    const [testState, dispatch] = result.current;
    act(() => {
      dispatch({ type: 'PLACE', position: { x: 1, y: 1 } });
    });
    testState.current = 6;
    const [state] = result.current;
    expect(state).toEqual(testState);
  });

  test("should return expected value", () => {
    const { result } = renderHook(() => useCommandsReducer());
    const [testState, dispatch] = result.current;
    act(() => {
      dispatch({ type: 'DROP'});
    });
    testState.squares[testState.current] = 'X';
    const [state] = result.current;
    expect(state).toEqual(testState);
  });

});
