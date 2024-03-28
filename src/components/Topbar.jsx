import React from 'react';
import logo from '../assets/logoWhite.png';

const Topbar = () => {
  return (
    <div className="container max-w-screen-xl text-white">
      <img src={logo} width={80} height={70} alt="Logo" />
      <p className="font-bold text-3xl">contacts</p>
      <p className="text-2xl">portal</p>
    </div>
  );
};

export default Topbar;
