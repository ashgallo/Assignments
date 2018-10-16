import React from 'react';
import { Link } from 'react-router-dom';

function HomeLinks() {
  return(
    <nav>
      <Link to={"/merchandise"}>Merch</Link>
      <Link to={"/connect"}>Connect</Link>
    </nav>
  )
}

export default HomeLinks;

     