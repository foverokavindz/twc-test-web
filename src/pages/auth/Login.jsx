import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const form = useRef();
  return (
    <>
      <div className="">
        <h1>Hi there,</h1>
        <h2>Welcome to our contacts portal</h2>
      </div>
      <div className="">
        <form ref={form} className="flex flex-col">
          <input type="email" id="email" name="email" placeholder="e-mail" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />

          <div className="flex flex-row">
            <button type="submit">Login</button> or
            <Link to="/register">Click here to Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
