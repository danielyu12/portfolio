import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div class="mt-[15vh] animate-fade-in-up">
      <h1 class="font-league text-8xl font-bold hover:text-gray-700 transition duration-400 transform hover:-translate-y-2 mb-1">
        Hi, I'm Dan Yu.
      </h1>
      <h2 class="font-league font-semibold text-gray-700 text-8xl hover:text-black transition duration-400 transform hover:-translate-y-2 mb-7 w-content">
        I work with software.
      </h2>
      <p class="font-league text-lg mb-10">
        I am a junior studying computer science at Boston University with
        experience in Front-end development! In my freetime, I compete in
        powerlifting, look for new restaurants to try out, and play video games
        with my friends. I am always looking for new opportunities, so please
        don't hesitate to reach out on the contact page!
      </p>
      <Link
        to="/about-me"
        class="text-lg font-semibold font-league inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300 "
      >
        Learn more about me
      </Link>
    </div>
  );
};

export default HomePage;
