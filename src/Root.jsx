import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Root = () => {
  return (
    <>
      <Navbar />
      <main class="mx-[20%]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
