import React from 'react';
import Child from './Child.js';
// import PropTypes from 'prop-types';


//This helps to keep track of your props
// Box.propTypes = {
//   backgroundColor: PropTypes.string,
//   title: PropTypes.string,
//   subtitle: propTypes.string,
//   information: propTypes.string
// }

function Parent(props) {
    const box1Props = {
      backgroundColor: "red", 
      title: "1",
      subtitle: "Box 1",
      information: "I'm a red box"
    }
    const box2Props = {
      backgroundColor: "blue", 
      title: "2",
      subtitle: "Box 2",
      information: "I'm a blue box"
    }
    const box3Props = {
      backgroundColor: "green", 
      title: "3",
      subtitle: "Box 3",
      information: "I'm a green box"
    }
    const box4Props = {
      backgroundColor: "yellow", 
      title: "4",
      subtitle: "Box 4",
      information: "I'm a yellow box"
    }
    const box5Props = {
      backgroundColor: "pink", 
      title: "5",
      subtitle: "Box 5",
      information: "I'm a pink box"
    }
    const box6Props = {
      backgroundColor: "purple", 
      title: "6",
      subtitle: "Box 6",
      information: "I'm a purple box"
    }
    const box7Props = {
      backgroundColor: "brown", 
      title: "7",
      subtitle: "Box 7",
      information: "I'm a brown box"
    }
    const box8Props = {
      backgroundColor: "teal", 
      title: "8",
      subtitle: "Box 8",
      information: "I'm a teal box"
    }
    const box9Props = {
      backgroundColor: "magenta", 
      title: "9",
      subtitle: "Box 9",
      information: "I'm a magenta box"
    }
    const box10Props = {
      backgroundColor: "orange", 
      title: "10",
      subtitle: "Box 10",
      information: "I'm a orange box"
    }
  return (
    <div>
      <Child {...box1Props} />
      <Child {...box2Props} />
      <Child {...box3Props} />
      <Child {...box4Props} />
      <Child {...box5Props} />
      <Child {...box6Props} />
      <Child {...box7Props} />
      <Child {...box8Props} />
      <Child {...box9Props} />
      <Child {...box10Props} />
    </div>
  )
}

export default Parent;
