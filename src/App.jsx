import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import HomePage from './pages/HomePage';
import MyPostsPage from './pages/MyPostsPage';
import AddPostPage from './pages/AddPostPage';
import AuthPage from './pages/AuthPage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <BlogProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myposts" element={
                <PrivateRoute>
                  <MyPostsPage />
                </PrivateRoute>
              } />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/addpost" element={
                <PrivateRoute>
                  <AddPostPage />
                </PrivateRoute>
              } />
            </Routes>
          </div>
        </BlogProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
