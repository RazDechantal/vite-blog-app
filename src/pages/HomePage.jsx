import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogPostList from '../components/BlogPostList';

const HomePage = () => {
  const { posts, loading } = useContext(BlogContext);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.length > 0 ? (
        <BlogPostList posts={posts} />
      ) : (
        <p>No posts available.</p>
      )}
      <p>Please log in to add comments or create new posts.</p>
    </div>
  );
};

export default HomePage;
