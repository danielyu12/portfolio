import React from 'react';
import image from '../assets/photo.jpg';
import { Link } from 'react-router-dom';

const PersonalPage = () => {
  return (
    <div class="mt-10 animate-fade-in-up">
      <div class="flex flex-row w-full h-full items-center">
        <div class="flex flex-col h-[400px] justify-evenly">
          <h2 class="text-5xl font-bold font-league">About Me</h2>
          <p class="font-league  text-xl">
            I was born and raised in Southington, CT and lived with my mom, dad,
            and sister my entire life up to college. I have always had a passion
            for tech and even built my first computer in eight grade. I did
            FIRST robotics in High School (Go team 195!). In college, I got into
            going to the gym and powerlifting. I competed in my first USAPL meet
            in January 2023 and will be competing in November 2023
          </p>
        </div>
        <img src={image} class="h-[400px] w-auto ml-[10%]" />
      </div>
      <div class="mt-10">
        <h2 class="text-3xl font-semibold font-league mb-5">
          Notable Experiences:
        </h2>
        <div>
          <div class="flex flex-row w-full justify-between items-center">
            <h4 class="text-2xl font-semibold font-league text-gray-700">
              Software Development Intern - Raytheon Technologies
            </h4>
            <Link
              to="https://www.rtx.com/"
              class="text-xl font-normal font-league text-gray-700 underline hover:no-underline "
            >
              Raytheon Website
            </Link>
          </div>
          <p class="text-lg font-league">
            This was my first internship during the summer of my sophomore year.
            Throughout the summer, I worked with various technologies such as
            ReactJS, Typscript, and Strapi. My team was working on a web
            component design system that would be used company wide to
            standardize the look and feel of user interfaces.
          </p>
        </div>
        <div class="mt-5">
          <div class="flex flex-row w-full justify-between items-center">
            <h4 class="text-2xl font-semibold font-league text-gray-700">
              Part-Time Research Assistant - Boston University
            </h4>
            <Link
              to="https://mufnets-test-11.vercel.app/"
              class="text-xl font-normal font-league text-gray-700 underline hover:no-underline "
            >
              Project Site
            </Link>
          </div>
          <p class="text-lg font-league">
            This was my first experience doing research during the spring
            semester of my Junior year. My primary responsibility was to create
            a front end tool that allowed the research team to input a cell
            network topology and get a micro-fluidic chip schematic output based
            on the input. I worked with: ReactJS, Typescript, SigmaJS, VictoryJS
          </p>
        </div>
        <div class="mt-5 mb-10">
          <div class="flex flex-row w-full justify-between items-center">
            <h4 class="text-2xl font-semibold font-league text-gray-700">
              Technical Teammate - XC475 Team SpeedyPark
            </h4>
            <Link
              to="https://github.com/danielyu12/SpeedyPark"
              class="text-xl font-normal font-league text-gray-700 underline hover:no-underline "
            >
              Project Repo
            </Link>
          </div>
          <p class="text-lg font-league">
            This was a course that I took in the first semester of my junior
            year and my first experience working with mobile developemnt. My
            team and I wanted to create an app that would help streamline the
            process of finding parking in the greater boston area. Using
            historical data given by the City of Boston, our app generates a
            percentage change of finding parking on a given street block. Users
            were able to save commonly visited blocks for future refernce. I
            worked with: React Native, Javascript, Firebase Firstore
          </p>
        </div>
      </div>
      <Link
        to="/resume"
        class="text-lg font-semibold font-league inline-block border-b-2 border-transparent hover:border-gray-700 transition duration-300"
      >
        Interested in my experience? View my resume
      </Link>
    </div>
  );
};

export default PersonalPage;
