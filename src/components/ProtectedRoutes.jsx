import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { isAuthentiated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthentiated === false) {
      navigate('/login', { replace: true });
    }
  }, [isAuthentiated, navigate]);

  console.log(import.meta.env.VITE_SOME_KEY); // "123"

  return children;
};

export default ProtectedRoutes;
