import React from 'react';
import { Link } from 'react-router-dom';
import exitIcon from '../assets/exitIcon.png';

const BottomBar = () => {
  return (
    <div>
      <Link
        to="/login"
        className="font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white  underline cursor-pointer flex flex-row justify-between items-center gap-5"
      >
        <img src={exitIcon} width={43} height={43} />
        logout
      </Link>
    </div>
  );
};

export default BottomBar;
