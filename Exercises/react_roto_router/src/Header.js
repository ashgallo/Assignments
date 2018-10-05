import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className="nav">
    <h1>React Roto Router</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  )
}

export default Header;