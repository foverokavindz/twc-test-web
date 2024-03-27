import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000/api/';

const useUserAPI = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const registerUser = async (values) => {
    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('values   ', values);

    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      const data = await res.json();

      if (res.status === 201) {
        //message.success(data.message);
        login(data.token, data.user);
        navigate('/login');
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        //message.error('Registration failed');
      }
    } catch (error) {
      //message.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.status === 201) {
        //message.success(data.message);
        login(data.token, data.user);
        navigate('/');
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        //message.error('Registration failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser, loginUser };
};

export default useUserAPI;
