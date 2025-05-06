import React from 'react';
import './PostCard.css'; // custom styles here

const PostCard = () => {
  return (
    <div className="post-card">
      {/* User Info */}
      <div className="user-info">
        <img
          src="/images/sanya.jpg"
          alt="Sanya Kapoor"
          className="user-avatar"
        />
        <span className="user-name">Sanya Kapoor</span>
      </div>

      {/* Post Content */}
      <p className="post-content">
        Had an amazing experience at the <strong>TechFest</strong>! The workshops and networking were fantastic. Looking forward to the next one! 🔥
      </p>

      {/* Like and Comment Icons */}
      <div className="post-actions">
        <button className="action-btn">
          ♡ <span>12</span>
        </button>
        <button className="action-btn">
          💬 <span>3</span>
        </button>
      </div>

      {/* Comment Box */}
      <div className="comment-box">
        <input type="text" placeholder="Add a comment..." className="comment-input" />
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default PostCard;
