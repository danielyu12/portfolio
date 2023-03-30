import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="flex w-full h-16">
      <div class="flex-1 flex justify-start items-center">
        <h3 class="text-lg ml-36">Daniel Yu</h3>
      </div>
      <div class="flex flex-1 justify-around items-center">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/personal">Personal</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
