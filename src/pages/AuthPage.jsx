import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(email, password);
    } else {
      await signup(email, password);
    }
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default AuthPage;
