import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="flex w-full h-16 ">
      <div class="flex-1 flex justify-start items-center">
        <Link to="/">
          <h3 class="text-xl ml-36">Daniel Yu</h3>
        </Link>
      </div>
      <div class="flex flex-1 justify-around items-center">
        <Link to="/about-me">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
