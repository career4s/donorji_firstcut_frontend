// src/pages/Signin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const Signin = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const handleLogin = () => {
    signin();
    navigate('/home');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={handleLogin}>Sign In</button>
      <Footer/>
    </div>
  );
};

export default Signin;
