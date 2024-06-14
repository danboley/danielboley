import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Navbar({ windowWidth }) {
  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 w-full h-20 flex justify-between items-center p-4 sm:p-8 font-bold">
      {windowWidth < 900 ? (
        <Link to="/">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl transition ease-in-out hover:scale-110">
            DB
          </h1>
        </Link>
      ) : (
        <Link to="/">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl transition ease-in-out hover:scale-110">
            Daniel Boley
          </h1>
        </Link>
      )}

      <div className="space-x-2 flex items-center md:space-x-4">
        {windowWidth < 900 ? null : (
          <Link className="focus:text-gray-300" to="/">
            <h2 className="text-lg md:text-3xl transition ease-in-out hover:scale-110">
              Home
            </h2>
          </Link>
        )}

        <Link className="focus:text-gray-300" to="/about">
          <h2 className="text-lg md:text-3xl transition ease-in-out hover:scale-110">
            About
          </h2>
        </Link>
        <Link className="focus:text-gray-300" to="/techprojects">
          <h2 className="text-lg md:text-3xl transition ease-in-out hover:scale-110">
            Projects
          </h2>
        </Link>
        <Link className="focus:text-gray-300" to="/skills">
          <h2 className="text-lg md:text-3xl transition ease-in-out hover:scale-110">
            Skills
          </h2>
        </Link>
        <Link className="focus:text-gray-300" to="/contact">
          <h2 className="text-lg md:text-3xl transition ease-in-out hover:scale-110">
            Contact
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
