import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  // Function to get alias from email
  const getAlias = (email) => {
    return email ? email.split('@')[0] : '';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="link">Home</Link>
      {currentUser && <Link to="/myposts" className="link">My Posts</Link>}
      {currentUser ? (
        <>
          <span className="user-info">{getAlias(currentUser.email)}</span>
          <Link to="/addpost" className="link">Add Post</Link>
          <button onClick={logout} className="button">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="link">Login</Link>
          <Link to="/signup" className="link">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
