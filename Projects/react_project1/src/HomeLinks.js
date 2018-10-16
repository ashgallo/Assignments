import React from 'react';
import { Link } from 'react-router-dom';

const HomeLinks = () => (
  <div>
    <nav>
      <Link to={"/merchandise"}>Merch</Link>
    </nav>
    <nav>
      <Link to={"/connect"}>Connect</Link>
    </nav>
  </div>
)

export default HomeLinks;

     