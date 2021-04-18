import React from 'react';

export default (props) => {
  const reports = props.reports ? 
    (
      props.reports.map((msg, index) => {
        return (
          <li key={index}>
            {msg}
          </li>
        );
      })
    ) : null
  return (
    <div className="panel">
      <div className="title">Output</div>
      <div className="output"> 
        <ul style={{listStyleType:'none'}}>{reports}</ul>
      </div>
    </div>
  )
}