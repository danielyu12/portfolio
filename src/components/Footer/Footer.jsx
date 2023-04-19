import React from 'react';
import Github from '@iconscout/react-unicons/icons/uil-github-alt';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin-alt';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Barbell from '@iconscout/react-unicons/icons/uil-dumbbell';
import { Link } from 'react-router-dom';

const Footer = () => {
  const iconSize = 20;
  return (
    <div class="flex align-center justify-center h-auto w-full my-[3vh] ">
      <div class="flex flex-row w-1/12 justify-between">
        <Link to="https://github.com/danielyu12">
          <Github size={iconSize} />
        </Link>
        <Link to="https://www.linkedin.com/in/danielyu12/">
          <LinkedIn size={iconSize} />
        </Link>
        <Link to="https://www.instagram.com/danyunocap/">
          <Instagram size={iconSize} />
        </Link>
        <Link to="https://usapl.liftingdatabase.com/lifters-view?id=139805">
          <Barbell size={iconSize} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
