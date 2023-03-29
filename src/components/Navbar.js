import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>Navbar
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/techprojects">Tech Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;