import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setLoading(true);
        const [postResponse, commentsResponse] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
          axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
          ),
        ]);
        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (err) {
        setError("Failed to fetch post details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!post) return <div className="empty-state">Post not found</div>;

  return (
    <div className="post-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back to Posts
      </button>

      <div className="post-content">
        <h1>{post.title}</h1>
        <p className="post-meta">
          Post ID: {post.id} | User ID: {post.userId}
        </p>

        <div className="post-body">
          <p>{post.body}</p>
        </div>

        <div className="comments-section">
          <h2>Comments ({comments.length})</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <h4>{comment.name}</h4>
              <p className="comment-email">{comment.email}</p>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
