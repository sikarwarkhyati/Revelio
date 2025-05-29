import React from 'react';
import './PostCard.css'; // custom styles here

const PostCard = ({ username, avatar, content, likes, comments }) => {
  return (
    <div className="post-card">
      {/* User Info */}
      <div className="user-info">
        <img
          src={avatar}
          alt={username}
          className="user-avatar"
        />
        <span className="user-name">{username}</span>
      </div>

      {/* Post Content */}
      <p className="post-content">
        {content}
      </p>

      {/* Like and Comment Icons */}
      <div className="post-actions">
        <button className="action-btn">
          ♡ <span>{likes}</span>
        </button>
        <button className="action-btn">
          💬 <span>{comments}</span>
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
