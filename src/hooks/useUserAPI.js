import { useAuth } from '../context/AuthContext';

const BASE_URL = 'http://localhost:5000/api';

const useUserAPI = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.passwrord !== values.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${BASE_URL}/auth/register`, {
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
      const res = await fetch(`${BASE_URL}/auth/login`, {
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
