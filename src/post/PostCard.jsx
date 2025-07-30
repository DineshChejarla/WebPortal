import React from "react";
import styles from "./Post.module.scss";

const PostCard = ({ post, onViewDetails, onDelete }) => {
  if (!post) return null;

  return (
    <div className={styles.card}>
      <div className={styles.title}>{post.title}</div>
      <p>
        <strong>ID:</strong> {post.id}
      </p>
      <p>
        <strong>User ID:</strong> {post.userId}
      </p>
      <div className={styles.actions}>
        <button onClick={() => onViewDetails(post.id)}>View</button>
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
