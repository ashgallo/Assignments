import React from 'react';

function Child(props) {
  return (
    <div style={ {backgroundColor: props.backgroundColor} }>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.information}</p>
      <hr/>
    </div>
  ) 
}

export default Child;