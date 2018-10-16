import React from 'react';
import { Link } from 'react-router-dom';

function NavHome() {
  return(
    <nav>
      <Link to={"/"}>Home</Link>
    </nav>
  )
}

export default NavHome;