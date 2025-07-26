// import React from "react";
// import "./Post.css";

// const PostCard = ({ post, onViewPost }) => {
//   return (
//     <div className="post-card" onClick={() => onViewPost(post.id)}>
//       <div className="card-header">
//         <div className="post-avatar">{post.userId}</div>
//         <div className="card-header-text">
//           <h3>{post.title}</h3>
//           <p className="post-id">ID: {post.id}</p>
//         </div>
//       </div>
//       <div className="card-body">
//         <p>
//           {post.body.length > 100
//             ? `${post.body.substring(0, 100)}...`
//             : post.body}
//         </p>
//       </div>
//       <div className="card-footer">
//         <button
//           className="view-button"
//           onClick={(e) => {
//             e.stopPropagation();
//             onViewPost(post.id);
//           }}
//         >
//           View Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
