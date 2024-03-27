import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import RootLayout from './pages/RootLayout';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import Contacts from './pages/Contacts';
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
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
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
  return <RouterProvider router={router} />;
}

export default App;
