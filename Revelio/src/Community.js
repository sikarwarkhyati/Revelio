import React from 'react';
import PostCard from '../src/components/ui/PostCard'; 

const Community = () => {
  const pageStyle = {
    padding: '40px 20px',
    paddingTop: '100px', // ensures content appears below navbar
    background: '#f0f2f5', // consistent background
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
      {/* Render multiple posts */}
      <PostCard
        username="Sanya Kapoor"
        avatar="/images/sanya.jpg"
        content="Had an amazing experience at the TechFest! The workshops and networking were fantastic. Looking forward to the next one! 🔥"
        likes={12}
        comments={3}
      />
      <PostCard
        username="Ravi Mehra"
        avatar="https://i.pravatar.cc/150?img=12"
        content="Volunteered at the AI Tech Talk! Gained so much insight and met amazing folks! 💡"
        likes={20}
        comments={5}
      />
      <PostCard
        username="Ananya Reddy"
        avatar="https://i.pravatar.cc/150?img=13"
        content="The Cultural Fest - Udaan was mesmerizing 🌟 I loved the dance performances the most!"
        likes={18}
        comments={4}
      />
    </div>
  );
};

export default Community;
