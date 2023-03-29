import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>Navbar
        <Link to="/">Home</Link>
        <Link to="/techprojects">Tech Projects</Link>
    </div>
  )
}

export default Navbar;