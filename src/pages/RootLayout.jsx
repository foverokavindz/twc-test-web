import { Outlet, useNavigation } from 'react-router-dom';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <main>
        <div className=" w-full h-screen overflow-hidden">
          {/*navigation.state === 'loading' && <p>Loading...</p>*/}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;
