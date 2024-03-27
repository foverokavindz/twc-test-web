import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import RootLayout from './pages/RootLayout';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import PagesRootLayout from './pages/PagesRootLayout';
import Contacts from './pages/Contacts';
import NewContact from './pages/NewContact';
import Register from './pages/auth/Register';
import ErrorPage from './pages/ErrorPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PagesRootLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: 'contacts',
            element: <Contacts />,
            children: [
              {
                path: 'new',
                element: <NewContact />,
              },
            ],
          },
        ],
      },
      {
        path: 'login',
        element: <AuthRootLayout />,
        children: [
          { index: true, element: <Login /> },
          { path: 'register', element: <Register /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-zinc-500 w-full h-screen overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
