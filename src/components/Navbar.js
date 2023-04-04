import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-black text-white fixed w-full h-20 flex justify-between items-center p-4 sm:p-6 font-bold">
        <Link to="/">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl transition ease-in-out hover:scale-110">Daniel Boley</h1>
        </Link>
        <div className="space-x-2 flex items-center md:space-x-4">
          <Link className="focus:text-gray-300" to="/">
            <h2 className="text-xl md:text-3xl transition ease-in-out hover:scale-110">Home</h2>
            </Link>
          <Link className="focus:text-gray-300" to="/about">
            <h2 className="text-xl md:text-3xl transition ease-in-out hover:scale-110 focus:active:text-gray-400">About</h2>
            </Link>
          <Link className="focus:text-gray-300" to="/techprojects">
            <h2 className="text-xl md:text-3xl transition ease-in-out hover:scale-110 focus:text-gray-400">Projects</h2>
          </Link>
          <Link className="focus:text-gray-300" to="/skills">
          <h2 className="text-xl md:text-3xl transition ease-in-out hover:scale-110 focus:text-gray-400">Skills</h2>
          </Link>
          <Link className="focus:text-gray-300" to="/contact">
          <h2 className="text-xl md:text-3xl transition ease-in-out hover:scale-110 focus:text-gray-400">Contact</h2>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;