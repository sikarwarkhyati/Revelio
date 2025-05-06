import React from 'react';
import PostCard from '../src/components/ui/PostCard'; 

const Community = () => {
  const pageStyle = {
    padding: '40px 20px',
    background: '#f0f2f5',
    minHeight: '100vh',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Community</h1>
      <PostCard />
    </div>
  );
};

export default Community;
