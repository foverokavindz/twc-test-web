import React from 'react';
import useSignup from '../../hooks/useUserAPI';
import { useNavigate, useNavigation } from 'react-router-dom';

const Register = () => {
  const form = useRef();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const { loading, error, registerUser } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(form.current);
  };

  return (
    <>
      <div>
        <h1>Register Now!</h1>

        <div className="">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            <input type="email" id="email" name="email" placeholder="e-mail" />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />

            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="confirm password"
            />

            <div className="flex flex-row">
              <button disabled={loading}>
                {loading ? 'Submitting...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {error && <div>{error}</div>}
      <Link to="/register">Back to login</Link>
    </>
  );
};

export default Register;
