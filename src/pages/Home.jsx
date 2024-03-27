import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/contacts/new">Add your first contact</Link>
    </div>
  );
};

export default Home;
