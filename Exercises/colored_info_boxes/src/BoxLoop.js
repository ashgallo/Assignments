import React from 'react';
import Child from './Child.js';

function Child2({backgroundColor, title, subtitle, information}) {
  return (
    <div style={ {backgroundColor: backgroundColor} }>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{information}</p>
      <hr/>
    </div>
  )
}

const boxesInfo = [
{
  backgroundColor: "red", 
  title: "11",
  subtitle: "Box 11",
  information: "I'm a red box"
}, {
  backgroundColor: "blue", 
  title: "12",
  subtitle: "Box 12",
  information: "I'm a blue box"
}, {
  backgroundColor: "green", 
  title: "13",
  subtitle: "Box 13",
  information: "I'm a green box"
}, {
  backgroundColor: "yellow", 
  title: "14",
  subtitle: "Box 14",
  information: "I'm a yellow box"
}, {
  backgroundColor: "pink", 
  title: "15",
  subtitle: "Box 15",
  information: "I'm a pink box"
}, {
  backgroundColor: "purple", 
  title: "16",
  subtitle: "Box 16",
  information: "I'm a purple box"
}, {
  backgroundColor: "brown", 
  title: "17",
  subtitle: "Box 17",
  information: "I'm a brown box"
}, {
  backgroundColor: "teal", 
  title: "18",
  subtitle: "Box 18",
  information: "I'm a teal box"
}, {
  backgroundColor: "magenta", 
  title: "19",
  subtitle: "Box 19",
  information: "I'm a magenta box"
}, {
  backgroundColor: "orange", 
  title: "20",
  subtitle: "Box 20",
  information: "I'm a orange box"
}]


function Parent2() {
  const boxComponents = boxesInfo.map(boxInfo => <Child {...boxInfo}/>)
  return (
    <div>
      {boxComponents}
    </div>
  )
}

export default Parent2;
