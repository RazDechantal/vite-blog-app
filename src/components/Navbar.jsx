import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const getAlias = (email) => {
    return email ? email.split('@')[0] : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="links">
          <Link to="/" className="link">Home</Link>
          {currentUser && <Link to="/myposts" className="link">My Posts</Link>}
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          {currentUser ? (
            <>
              <span className="user-info">{getAlias(currentUser.email)}</span>
              <Link to="/addpost" className="link">Add Post</Link>
              <button onClick={logout} className="button">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="link">Login / Sign Up</Link>
          )}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
