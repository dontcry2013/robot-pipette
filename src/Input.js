import React, { useRef, useState, useEffect, useContext } from 'react';
import { CommandsDispatch } from './dispatch';

export default (props) => {
  const myTextarea = useRef(null);
  const [state, setState] = useState({
    textareaVal: props.textareaVal || '',
    commands: [],
  });

  const dispatch = useContext(CommandsDispatch);

  function handleClick() {
    dispatch({ type: 'setCommands', commands: state.commands });
  }

  useEffect(() => {
    const handleText = () => {
      let commandsArray = [];
      const mIndex = state.textareaVal.trim().toUpperCase().indexOf('PLACE');
      if (mIndex >= 0) {
        const mTarget = state.textareaVal.substr(mIndex);
        commandsArray = mTarget.split(/\r?\n/).filter((command) => {
          return command;
        });
      }
      return commandsArray;
    }
    const commands = handleText(state.textareaVal);
    setState({...state, commands});
  }, [state, state.textareaVal])

  return (
    <div className="panel">
      <div className="title">Input</div>
      <textarea ref={myTextarea} value = {state.textareaVal}
        rows="30" cols="40"
        onChange={(event)=>{
          setState({
            textareaVal: event.target.value
          });
        }}
      >
      </textarea>
      <div>
        <button onClick={ () => {
          handleClick();
        }}>Execute</button>
      </div>
    </div>
  )
}