import React from "react";
import "./Post.css";
import { NavLink } from "react-router-dom";

const PostCard = ({ post, onClick }) => {
  const formattedTitle =
    post.title.charAt(0).toUpperCase() + post.title.slice(1);
  const truncatedBody =
    post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body;

  return (
    <div className="post-card" onClick={() => onClick(post)}>
      <div className="card-header">
        <div className="post-avatar">P</div>
        <div className="card-header-text">
          <h3>{formattedTitle}</h3>
          <p className="post-user">User ID: {post.userId}</p>
        </div>
      </div>

      <div className="card-body">
        <p>{truncatedBody}</p>
      </div>

      <div className="card-footer">
        <span className="post-id">Post ID: {post.id}</span>
        <button className="read-more">
          <NavLink to={`post-page/${post.id}`}>Read More →</NavLink>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
