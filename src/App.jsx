import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import RootLayout from './pages/RootLayout';
import AuthRootLayout from './pages/auth/AuthRootLayout';
import Contacts from './pages/Contacts';
import Register from './pages/auth/Register';
import ErrorPage from './pages/ErrorPage';
import NewContact from './pages/NewContact';
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
        children: [
          { index: true, element: <Contacts /> },
          { path: 'new', element: <NewContact /> },
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
  return <RouterProvider router={router} />;
}

export default App;
