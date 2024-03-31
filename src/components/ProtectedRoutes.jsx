import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// The ProtectedRoutes component is a wrapper for routes that require authentication.
const ProtectedRoutes = ({ children }) => {
  const { isAuthentiated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (isAuthentiated === false) {
      navigate('/login', { replace: true });
    }
  }, [isAuthentiated, navigate]);

  return children;
};

export default ProtectedRoutes;
