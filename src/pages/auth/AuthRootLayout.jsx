import { Outlet } from 'react-router-dom';

const AuthRootLayout = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center ">
        <div className="flex flex-col">
          <Outlet />
        </div>

        <div className="flex flex-col">
          <img src="https://via.placeholder.com/150" alt="logo" />
          <h1>
            <span>Contacts</span>
            <br />
            Portal
          </h1>
        </div>
      </div>
    </>
  );
};

export default AuthRootLayout;
