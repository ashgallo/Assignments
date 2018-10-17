import React from 'react';
import { Link } from 'react-router-dom';

const MerConLinks = () => (
  <div>
    <ul className='mercon-links'>
      <li> <Link to={"/merchandise"}>Taco Swag</Link> </li>
      <li> <Link to={"/connect"}>Social</Link> </li>
    </ul>
  </div>
)

export default MerConLinks;

     