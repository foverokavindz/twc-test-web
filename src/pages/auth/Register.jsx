import React, { useRef } from 'react';
import useUserAPI from '../../hooks/useUserAPI';
import { Link } from 'react-router-dom';

const Register = () => {
  const formRef = useRef(null);

  const { loading, error, registerUser } = useUserAPI();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('formRef   ', formRef);
    console.log('formRef.current.email  ', formRef.current.email.value);
    const formRefData = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
      confirmPassword: formRef.current.confirmPassword.value,
    };
    registerUser(formRefData);
  };

  return (
    <>
      <div>
        <h1>Register Now!</h1>

        <div className="">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
            <input type="email" id="email" name="email" placeholder="e-mail" />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
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
      <Link to="..">Back to login</Link>
    </>
  );
};

export default Register;
