import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoWhite.png';
import backgroundImage from '../assets/background.jpg';

const Home = () => {
  return (
    <>
      <div
        className="flex flex-row items-center justify-center h-screen text-white relative"
        style={{
          backgroundColor: 'white',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: '100vh',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity value as needed
          }}
        ></div>

        <div
          className="h-[200vh] w-[400vw] flex flex-col justify-center items-center bg-[#083F46] z-10"
          style={{
            borderTopRightRadius: '70% 100%',

            borderBottomLeftRadius: '70% 100%',
          }}
        >
          <img src={logo} width={80} height={70} alt="Logo" />
          <p className="font-bold text-3xl">contacts</p>
          <p className="text-2xl">portal</p>

          <p className="text-white font-futura-md-bt font-bold text-[40px] mt-20 xl:mt-24">
            Welcome,
          </p>
          <p className="text-[25px] font-futura-md-bt font-normal">
            This is where your contacts will live. Click the button below{' '}
            <br></br> to add a new contact.
          </p>

          <Link
            to="/contacts/new"
            className="s border border-b-2 rounded-2xl px-6 py-1 mt-20"
          >
            Add your first contact
          </Link>

          {/*<LogOut />*/}
        </div>
      </div>
    </>
  );
};

export default Home;
