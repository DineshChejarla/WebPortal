// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "./PostCard";
// import "./Post.css";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setPosts(response.data);
//       } catch (err) {
//         setError("Failed to fetch posts");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <div className="loading">Loading posts...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="post-container">
//       <h1>Latest Posts</h1>
//       <div className="posts-grid">
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Post;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "./PostCard";
// import "./Post.css";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setPosts(response.data);
//       } catch (err) {
//         setError("Failed to fetch posts");
//         console.error(err);
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

//   const handleViewDetails = (post) => {
//     setSelectedPost(post);
//   };

//   const handleBackToList = () => {
//     setSelectedPost(null);
//   };

//   if (loading) return <div className="loading-spinner"></div>;
//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <div className="post-management-container">
//       <header className="app-header">
//         <h1>📝 Post Management System</h1>
//         {!selectedPost && (
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search posts..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="search-input"
//             />
//             <span className="search-icon">🔍</span>
//           </div>
//         )}
//       </header>

//       <main className="main-content">
//         {selectedPost ? (
//           <PostDetail post={selectedPost} onBack={handleBackToList} />
//         ) : (
//           <div className="post-grid-container">
//             <h2>Latest Posts ({filteredPosts.length})</h2>
//             {filteredPosts.length === 0 ? (
//               <div className="empty-state">
//                 <p>No posts found matching your search</p>
//               </div>
//             ) : (
//               <div className="posts-grid">
//                 {filteredPosts.map((post) => (
//                   <PostCard
//                     key={post.id}
//                     post={post}
//                     onClick={handleViewDetails}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </main>

//       <footer className="app-footer">
//         <p>© {new Date().getFullYear()} Post Management System</p>
//       </footer>
//     </div>
//   );
// };

// const PostDetail = ({ post, onBack }) => {
//   // Fetch comments for the post
//   const [comments, setComments] = useState([]);
//   const [loadingComments, setLoadingComments] = useState(false);

//   useEffect(() => {
//     const fetchComments = async () => {
//       setLoadingComments(true);
//       try {
//         const response = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
//         );
//         setComments(response.data);
//       } catch (err) {
//         console.error("Failed to fetch comments", err);
//       } finally {
//         setLoadingComments(false);
//       }
//     };
//     fetchComments();
//   }, [post.id]);

//   return (
//     <div className="post-detail">
//       <button onClick={onBack} className="back-button">
//         ← Back to Posts
//       </button>

//       <div className="post-content">
//         <div className="post-header">
//           <h2>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
//           <div className="post-meta">
//             <span>Post ID: {post.id}</span>
//             <span>User ID: {post.userId}</span>
//           </div>
//         </div>

//         <div className="post-body">
//           <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
//         </div>

//         <div className="comments-section">
//           <h3>💬 Comments ({comments.length})</h3>
//           {loadingComments ? (
//             <div className="loading-spinner small"></div>
//           ) : (
//             <div className="comments-list">
//               {comments.map((comment) => (
//                 <div key={comment.id} className="comment-card">
//                   <div className="comment-header">
//                     <h4>{comment.name}</h4>
//                     <span className="comment-email">{comment.email}</span>
//                   </div>
//                   <p className="comment-body">{comment.body}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
