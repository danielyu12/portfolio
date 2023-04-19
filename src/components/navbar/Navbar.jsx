import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="flex w-full h-16 ">
      <div class="flex-1 flex justify-start items-center">
        <Link to="/">
          <h3 class="text-3xl ml-20 font-league font-bold">Daniel Yu</h3>
        </Link>
      </div>
      <div class="flex flex-1 justify-around items-center">
        <Link
          to="/about-me"
          class="font-league text-lg inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
        >
          About Me
        </Link>
        <Link
          to="/resume"
          class="font-league text-lg inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          class="font-league text-lg inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
