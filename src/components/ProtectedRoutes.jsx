import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ element }) => {
  const { isAuthentiated } = useAuth();
  const location = useLocation();

  return isAuthentiated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
