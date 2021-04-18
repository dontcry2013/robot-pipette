import React from 'react';

const Square = props => (
  <button className={`${props.hoverClass} square`}
    position={props.position}
  >
    {props.value}
  </button>
);

export default Square;
