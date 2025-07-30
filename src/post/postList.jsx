import React from "react";
import PostCard from "./PostCard";
import styles from "./Post.module.scss";

const PostList = ({ posts, onViewDetails, onDelete }) => {
  return (
    <div className={styles.grid}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onViewDetails={onViewDetails}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostList;
