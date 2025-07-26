// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import PostCard from "./PostCard";
// import "./Post.css";

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setPosts(response.data);
//       } catch (err) {
//         setError("Failed to fetch posts. Please try again later.");
//         console.error("Error fetching posts:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const filteredPosts = posts.filter(
//     (post) =>
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.body.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleViewPost = (postId) => {
//     navigate(`/posts/${postId}`);
//   };

//   if (loading) return <div className="loading-spinner"></div>;
//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <div className="post-manager">
//       <div className="post-header">
//         <h1>Post Management</h1>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search posts..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
//       </div>

//       <div className="post-stats">
//         Showing {filteredPosts.length} of {posts.length} posts
//       </div>

//       <div className="posts-grid">
//         {filteredPosts.length > 0 ? (
//           filteredPosts.map((post) => (
//             <PostCard key={post.id} post={post} onViewPost={handleViewPost} />
//           ))
//         ) : (
//           <div className="no-results">No posts found matching your search</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostList;
