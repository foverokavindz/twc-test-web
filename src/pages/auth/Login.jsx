import React, { useRef } from 'react';
import useUserAPI from '../../hooks/useUserAPI';
import { Link } from 'react-router-dom';

const Login = () => {
  const formRef = useRef();

  const { loading, error, loginUser } = useUserAPI();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formRefData = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };
    loginUser(formRefData);
  };

  return (
    <>
      <div className="">
        <h1>Hi there,</h1>
        <h2>Welcome to our contacts portal</h2>
      </div>
      <div className="">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
          <input type="email" id="email" name="email" placeholder="e-mail" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />

          <div className="flex flex-row">
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'login'}
            </button>{' '}
            or
            <Link to="register">Click here to Register</Link>
          </div>
        </form>
      </div>
      {error && <div>{error}</div>}
    </>
  );
};

export default Login;
