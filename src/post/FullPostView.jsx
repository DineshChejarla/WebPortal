import React from "react";
import "./Post.module.scss";

const FullPostView = ({ post, onBack }) => {
  if (!post) {
    return (
      <div className="error">
        Post data could not be loaded. <button onClick={onBack}>Go back</button>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <button onClick={onBack} className="back-button">
        ← Back to Posts
      </button>
      <div className="post-detail-card">
        <h1>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h1>
        <div className="post-detail-grid">
          <div className="detail-section">
            <h2>Post Information</h2>
            <p>
              <strong>ID:</strong> {post.id}
            </p>
            <p>
              <strong>User ID:</strong> {post.userId}
            </p>
          </div>
          <div className="detail-section">
            <h2>Content</h2>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPostView;
