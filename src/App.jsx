import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import RootLayout from './pages/RootLayout';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import Contacts from './pages/Contacts';
import Register from './pages/auth/Register';
import ErrorPage from './pages/ErrorPage';
import NewContact from './pages/NewContact';
import ProtectedRoutes from './components/ProtectedRoutes';
import './App.css';

function App() {
  // The createBrowserRouter function creates a router object that can be used to navigate between pages.
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: 'contacts',
          children: [
            {
              index: true,
              element: (
                <ProtectedRoutes>
                  <Contacts />
                </ProtectedRoutes>
              ),
            },
            {
              path: 'new',
              element: (
                <ProtectedRoutes>
                  <NewContact />
                </ProtectedRoutes>
              ),
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

  // The RouterProvider component provides the router object to the application.
  return <RouterProvider router={router} />;
}

export default App;
