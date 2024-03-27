import { Outlet, useNavigation } from 'react-router-dom';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <main>
        <div className="bg-zinc-500 w-full h-screen overflow-hidden">
          {/*navigation.state === 'loading' && <p>Loading...</p>*/}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;
