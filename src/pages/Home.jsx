import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container max-w-screen-xl text-white">
        <h1 className=" text-[50px] leading-[73px] font-['poppins'] font-bold mb-4">
          Welcome,
        </h1>
        <p className="font-['poppins'] text-[35px] leading-[40px] mb-20">
          This is where your contacts will live. Click the button below{' '}
          <br></br> to add a new contact.
        </p>
        <Link
          to="/contacts/new"
          className="px-12 py-1 border-[2px] rounded-full font-['poppins']  text-[1.438rem] leading-[3.125rem]   text-white "
        >
          add your first contact
        </Link>
      </div>
    </>
  );
};

export default Home;
