import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <Link to="/">Daniel Boley</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/techprojects">Technical Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;